package com.shell.liangyi.core

import android.content.Context
import android.util.Base64
import android.util.Log
import androidx.annotation.StringRes
import com.shell.liangyi.R
import com.shell.liangyi.util.AtomicFileWriter
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.FileOutputStream
import java.net.Inet4Address
import java.net.InetSocketAddress
import java.net.NetworkInterface
import java.net.ServerSocket
import java.net.Socket
import java.security.SecureRandom
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Executors
import java.util.concurrent.RejectedExecutionException
import java.util.concurrent.Semaphore
import java.util.concurrent.TimeUnit

/**
 * 轻量级 HTTP 服务器（ServerSocket + 最小 HTTP/1.1 解析），零外部依赖。
 * 接收快应用通过 WiFi 直传的 PNG 截图，优先使用分片上传以降低手表内存压力。
 */
class HttpScreenshotServer(
    private val context: Context,
    private val screenshotsDir: File,
    private val onScreenshotReceived: (shotId: String, file: File) -> Unit,
    private val onTransferProgress: (progress: TransferProgress) -> Unit = {},
    private val onTransferLog: (message: String) -> Unit = {}
) {
    companion object {
        private const val TAG = "HttpScreenshotServer"
        const val DEFAULT_PORT = 8765
        private const val MAX_LEGACY_BODY_BYTES = 10 * 1024 * 1024
        private const val MAX_CHUNK_BODY_BYTES = 512 * 1024
        private const val MAX_CONCURRENT_WORKERS = 4
        private const val MAX_CHUNK_SESSIONS = 16
        private const val MAX_SHOT_ID_LENGTH = 128
    }

    data class TransferProgress(
        val shotId: String,
        val receivedBytes: Long,
        val totalBytes: Long,
        val chunkIndex: Int,
        val totalChunks: Int,
        val completed: Boolean
    )

    private data class ChunkSession(
        val shotId: String,
        val timeText: String,
        val totalBytes: Long,
        val totalChunks: Int,
        val tempFile: File,
        val finalFile: File,
        val sidecarFile: File,
        var nextChunkIndex: Int = 0,
        var receivedBytes: Long = 0L
    )

    private var serverThread: Thread? = null
    private var serverSocket: ServerSocket? = null
    private val chunkSessions = ConcurrentHashMap<String, ChunkSession>()
    private var workerPool = Executors.newFixedThreadPool(MAX_CONCURRENT_WORKERS)
    private val workerSemaphore = Semaphore(MAX_CONCURRENT_WORKERS, true)
    private val authToken: String = generateAuthToken()
    var port: Int = DEFAULT_PORT
        private set
    @Volatile
    var isRunning: Boolean = false
        private set

    fun getAuthToken(): String = authToken

    private fun generateAuthToken(): String {
        val chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        val random = SecureRandom()
        return buildString(32) {
            repeat(32) { append(chars[random.nextInt(chars.length)]) }
        }
    }

    private fun tr(@StringRes resId: Int, vararg args: Any): String = context.getString(resId, *args)

    fun getWifiIp(): String? {
        try {
            val ifaces = NetworkInterface.getNetworkInterfaces()
            while (ifaces.hasMoreElements()) {
                val iface = ifaces.nextElement()
                if (!iface.isUp || iface.isLoopback) continue
                val addrs = iface.inetAddresses
                while (addrs.hasMoreElements()) {
                    val addr = addrs.nextElement()
                    if (addr is Inet4Address && !addr.isLoopbackAddress) {
                        val ip = addr.hostAddress ?: ""
                        if (ip.startsWith("192.") || ip.startsWith("10.") || ip.startsWith("172.")) {
                            return ip
                        }
                    }
                }
            }
        } catch (e: Exception) {
            Log.w(TAG, "Failed to get WiFi IP", e)
        }
        return null
    }

    fun start(): Boolean {
        if (isRunning) return true
        return try {
            screenshotsDir.mkdirs()
            if (workerPool.isShutdown || workerPool.isTerminated) {
                workerPool = Executors.newFixedThreadPool(MAX_CONCURRENT_WORKERS)
            }
            val bindAddr = getWifiIp()?.let { InetSocketAddress(it, port) } ?: InetSocketAddress(port)
            serverSocket = ServerSocket()
            serverSocket!!.reuseAddress = true
            serverSocket!!.bind(bindAddr)
            isRunning = true
            serverThread = Thread({
                Log.i(TAG, "HTTP server listening on $bindAddr")
                while (isRunning) {
                    try {
                        val client = serverSocket?.accept() ?: continue
                        if (!workerSemaphore.tryAcquire()) {
                            Log.w(TAG, "Too many concurrent workers, rejecting connection")
                            try { client.close() } catch (_: Exception) {}
                            continue
                        }
                        try {
                            workerPool.submit {
                                try {
                                    handleClient(client)
                                } finally {
                                    workerSemaphore.release()
                                }
                            }
                        } catch (e: RejectedExecutionException) {
                            workerSemaphore.release()
                            try { client.close() } catch (_: Exception) {}
                            if (isRunning) Log.w(TAG, "Worker pool rejected HTTP client", e)
                        }
                    } catch (e: Exception) {
                        if (isRunning) Log.w(TAG, "Accept error", e)
                    }
                }
            }, "http-server")
            serverThread!!.isDaemon = true
            serverThread!!.start()
            Log.i(TAG, "HTTP server started on port $port, IP: ${getWifiIp() ?: "unknown"}, auth: ${authToken.take(4)}…")
            true
        } catch (e: Exception) {
            Log.e(TAG, "Failed to start on port $port", e)
            if (port < DEFAULT_PORT + 10) {
                port++
                serverSocket?.close()
                serverSocket = null
                return start()
            }
            false
        }
    }

    fun stop() {
        isRunning = false
        try {
            serverSocket?.close()
            serverSocket = null
        } catch (_: Exception) {}
        try {
            serverThread?.interrupt()
            serverThread = null
        } catch (_: Exception) {}
        workerPool.shutdownNow()
        runCatching {
            workerPool.awaitTermination(500, TimeUnit.MILLISECONDS)
        }
        clearChunkSessions(deleteTempFiles = true)
        Log.i(TAG, "HTTP server stopped")
    }

    private fun clearChunkSessions(deleteTempFiles: Boolean) {
        val sessions = chunkSessions.values.toList()
        chunkSessions.clear()
        if (!deleteTempFiles) {
            return
        }
        sessions.forEach { session ->
            deleteIncompleteTempFile(session.tempFile)
        }
    }

    private fun deleteIncompleteTempFile(file: File) {
        if (!file.exists()) {
            return
        }
        runCatching {
            if (!file.delete()) {
                Log.w(TAG, "Failed to delete incomplete HTTP chunk temp file: ${file.absolutePath}")
            }
        }.onFailure { error ->
            Log.w(TAG, "Failed to delete incomplete HTTP chunk temp file: ${file.absolutePath}", error)
        }
    }

    private fun handleClient(socket: Socket) {
        try {
            socket.soTimeout = 30000
            val input = socket.getInputStream()
            val headerText = readHeaderText(input) ?: return
            val headerLines = headerText.split("\r\n", "\n").filter { it.isNotEmpty() }
            val requestLine = headerLines.firstOrNull() ?: return
            val parts = requestLine.split(" ")
            if (parts.size < 2) return
            val method = parts[0].uppercase()
            val path = parts[1].substringBefore('?')

            val headers = mutableMapOf<String, String>()
            var contentLength = 0
            headerLines.drop(1).forEach { line ->
                val colon = line.indexOf(':')
                if (colon > 0) {
                    val key = line.substring(0, colon).trim().lowercase()
                    val value = line.substring(colon + 1).trim()
                    headers[key] = value
                    if (key == "content-length") {
                        contentLength = value.toIntOrNull() ?: 0
                    }
                }
            }

            if (path != "/ping") {
                val token = headers["x-auth-token"]
                if (token.isNullOrBlank() || token != authToken) {
                    respond(socket, 401, """{"ok":false,"error":"unauthorized"}""")
                    return
                }
            }

            when {
                method == "GET" && path == "/ping" -> handlePing(socket)
                method == "POST" && path == "/screenshot/chunk" -> handleScreenshotChunk(socket, input, contentLength)
                method == "POST" && path == "/screenshot" -> handleScreenshot(socket, input, headers, contentLength)
                else -> respond(socket, 404, """{"ok":false,"error":"not found"}""")
            }
        } catch (e: Exception) {
            Log.w(TAG, "Client error", e)
        } finally {
            try { socket.close() } catch (_: Exception) {}
        }
    }

    private fun readHeaderText(input: java.io.InputStream): String? {
        val buffer = ByteArrayOutputStream()
        var previous3 = -1
        var previous2 = -1
        var previous1 = -1
        while (buffer.size() < 32 * 1024) {
            val current = input.read()
            if (current < 0) {
                return if (buffer.size() > 0) buffer.toString(Charsets.UTF_8.name()) else null
            }
            buffer.write(current)
            val hasCrlfEnd = previous3 == '\r'.code && previous2 == '\n'.code && previous1 == '\r'.code && current == '\n'.code
            val hasLfEnd = previous1 == '\n'.code && current == '\n'.code
            if (hasCrlfEnd || hasLfEnd) {
                return buffer.toString(Charsets.UTF_8.name()).trimEnd()
            }
            previous3 = previous2
            previous2 = previous1
            previous1 = current
        }
        return null
    }

    private fun readBody(input: java.io.InputStream, contentLength: Int, maxBytes: Int): ByteArray? {
        if (contentLength <= 0 || contentLength > maxBytes) return null
        val body = ByteArray(contentLength)
        var offset = 0
        while (offset < contentLength) {
            val read = input.read(body, offset, contentLength - offset)
            if (read < 0) break
            offset += read
        }
        return if (offset == contentLength) body else null
    }

    private fun handlePing(socket: Socket) {
        val ip = getWifiIp() ?: "unknown"
        val json = """{"ok":true,"device":"shell-plus-plus","ip":"$ip","port":$port,"chunkUpload":true,"authToken":"${escapeJson(authToken)}"}"""
        respond(socket, 200, json)
    }

    private fun sanitizeShotId(raw: String): String? {
        val trimmed = raw.trim()
        if (trimmed.isBlank() || trimmed.length > MAX_SHOT_ID_LENGTH) return null
        if (trimmed.contains('/') || trimmed.contains('\\') || trimmed.contains('\u0000')) return null
        if (trimmed == "." || trimmed == "..") return null
        return trimmed
    }

    private fun handleScreenshotChunk(socket: Socket, input: java.io.InputStream, contentLength: Int) {
        try {
            val body = readBody(input, contentLength, MAX_CHUNK_BODY_BYTES)
            if (body == null) {
                respond(socket, 400, """{"ok":false,"error":"Invalid chunk length"}""")
                return
            }
            val json = JSONObject(String(body, Charsets.UTF_8))
            val shotId = sanitizeShotId(json.optString("shotId", ""))
            val timeText = json.optString("timeText", "")
            val totalBytes = json.optLong("totalBytes", 0L)
            val totalChunks = json.optInt("totalChunks", 0)
            val chunkIndex = json.optInt("chunkIndex", -1)
            val b64 = json.optString("data", "")
            if (shotId == null || totalBytes <= 0 || totalChunks <= 0 || chunkIndex < 0 || b64.isBlank()) {
                respond(socket, 400, """{"ok":false,"error":"Invalid chunk payload"}""")
                return
            }

            if (chunkSessions.size >= MAX_CHUNK_SESSIONS && !chunkSessions.containsKey(shotId)) {
                respond(socket, 429, """{"ok":false,"error":"Too many concurrent sessions"}""")
                return
            }

            val chunkBytes = Base64.decode(b64, Base64.DEFAULT)
            val session = getOrCreateSession(shotId, timeText, totalBytes, totalChunks, chunkIndex)
            synchronized(session) {
                if (chunkIndex != session.nextChunkIndex) {
                    val error = "Unexpected chunk index $chunkIndex, expected ${session.nextChunkIndex}"
                    onTransferLog("$shotId $error")
                    respond(socket, 409, """{"ok":false,"error":"$error"}""")
                    return
                }
                FileOutputStream(session.tempFile, true).use { fos ->
                    fos.write(chunkBytes)
                }
                session.receivedBytes += chunkBytes.size.toLong()
                session.nextChunkIndex++
                val completed = session.nextChunkIndex >= session.totalChunks
                onTransferProgress(
                    TransferProgress(
                        shotId = shotId,
                        receivedBytes = session.receivedBytes,
                        totalBytes = session.totalBytes,
                        chunkIndex = chunkIndex,
                        totalChunks = session.totalChunks,
                        completed = completed
                    )
                )
                if (chunkIndex == 0 || completed || chunkIndex % 8 == 0) {
                    onTransferLog("$shotId chunk ${chunkIndex + 1}/${session.totalChunks} ${session.receivedBytes}/${session.totalBytes} bytes")
                }
                if (completed) {
                    completeChunkSession(session)
                    chunkSessions.remove(shotId)
                    onScreenshotReceived(shotId, session.finalFile)
                }
                val resp = """{"ok":true,"shotId":"${escapeJson(shotId)}","chunkIndex":$chunkIndex,"receivedBytes":${session.receivedBytes},"completed":$completed}"""
                respond(socket, 200, resp)
            }
        } catch (e: Exception) {
            Log.e(TAG, "Failed to receive screenshot chunk", e)
            onTransferLog(tr(R.string.http_chunk_receive_failed, e.message ?: "unknown"))
            respond(socket, 500, """{"ok":false,"error":"Internal server error"}""")
        }
    }

    private fun getOrCreateSession(shotId: String, timeText: String, totalBytes: Long, totalChunks: Int, chunkIndex: Int): ChunkSession {
        return chunkSessions.computeIfAbsent(shotId) {
            val fileName = "${shotId}.png"
            val tempFile = File(screenshotsDir, "$fileName.part")
            val finalFile = File(screenshotsDir, fileName)
            val sidecarFile = File(screenshotsDir, "$fileName.json")
            if (chunkIndex == 0 && tempFile.exists()) tempFile.delete()
            onTransferLog(tr(R.string.http_chunk_receive_started, shotId, totalBytes, totalChunks))
            ChunkSession(shotId, timeText, totalBytes, totalChunks, tempFile, finalFile, sidecarFile)
        }
    }

    private fun completeChunkSession(session: ChunkSession) {
        if (session.finalFile.exists()) session.finalFile.delete()
        if (!session.tempFile.renameTo(session.finalFile)) {
            session.tempFile.copyTo(session.finalFile, overwrite = true)
            session.tempFile.delete()
        }
        val sidecar = """{"shotId":"${escapeJson(session.shotId)}","timeText":"${escapeJson(session.timeText)}","size":${session.receivedBytes},"receivedVia":"http-chunk"}"""
        AtomicFileWriter.writeText(session.sidecarFile, sidecar)
        Log.i(TAG, "Received screenshot via HTTP chunks: ${session.shotId} (${session.receivedBytes} bytes)")
        onTransferLog(tr(R.string.http_chunk_receive_completed, session.shotId, session.receivedBytes))
    }

    private fun handleScreenshot(socket: Socket, input: java.io.InputStream, headers: Map<String, String>, contentLength: Int) {
        val rawShotId = headers["x-shot-id"]
        val shotId = sanitizeShotId(rawShotId ?: "")
        val timeText = headers["x-time-text"] ?: ""
        if (shotId == null) {
            respond(socket, 400, """{"ok":false,"error":"Invalid or missing X-Shot-Id header"}""")
            return
        }
        val body = readBody(input, contentLength, MAX_LEGACY_BODY_BYTES)
        if (body == null) {
            respond(socket, 400, """{"ok":false,"error":"Invalid content length"}""")
            return
        }

        try {
            val bodyStr = String(body, Charsets.UTF_8)
            val finalShotId: String
            val finalTimeText: String
            val pngBytes: ByteArray

            val jsonTry = try { JSONObject(bodyStr) } catch (_: Exception) { null }
            if (jsonTry != null && jsonTry.has("data")) {
                val jsonShotId = sanitizeShotId(jsonTry.optString("shotId", shotId))
                finalShotId = jsonShotId ?: shotId
                finalTimeText = jsonTry.optString("timeText", timeText)
                val b64 = jsonTry.optString("data", "")
                if (b64.isEmpty()) {
                    respond(socket, 400, """{"ok":false,"error":"Empty data field"}""")
                    return
                }
                pngBytes = Base64.decode(b64, Base64.DEFAULT)
                Log.i(TAG, "Decoded base64 JSON: ${b64.length} chars -> ${pngBytes.size} bytes")
            } else {
                finalShotId = shotId
                finalTimeText = timeText
                pngBytes = body
            }

            val fileName = "${finalShotId}.png"
            val destFile = File(screenshotsDir, fileName)
            AtomicFileWriter.writeBytes(destFile, pngBytes)

            val sidecarFile = File(screenshotsDir, "$fileName.json")
            val sidecar = """{"shotId":"${escapeJson(finalShotId)}","timeText":"${escapeJson(finalTimeText)}","size":${pngBytes.size},"receivedVia":"http"}"""
            AtomicFileWriter.writeText(sidecarFile, sidecar)

            Log.i(TAG, "Received screenshot via HTTP: $finalShotId (${pngBytes.size} bytes)")
            onTransferLog(tr(R.string.http_compat_receive_completed, finalShotId, pngBytes.size))
            onScreenshotReceived(finalShotId, destFile)

            val resp = """{"ok":true,"shotId":"${escapeJson(finalShotId)}","size":${pngBytes.size}}"""
            respond(socket, 200, resp)
        } catch (e: Exception) {
            Log.e(TAG, "Failed to save screenshot $shotId", e)
            onTransferLog(tr(R.string.http_compat_save_failed, e.message ?: "unknown"))
            respond(socket, 500, """{"ok":false,"error":"Internal server error"}""")
        }
    }

    private fun respond(socket: Socket, code: Int, body: String) {
        try {
            val bytes = body.toByteArray(Charsets.UTF_8)
            val status = when (code) {
                200 -> "OK"
                400 -> "Bad Request"
                404 -> "Not Found"
                409 -> "Conflict"
                500 -> "Internal Server Error"
                else -> "Unknown"
            }
            val out = socket.getOutputStream()
            out.write("HTTP/1.1 $code $status\r\n".toByteArray(Charsets.UTF_8))
            out.write("Content-Type: application/json; charset=utf-8\r\n".toByteArray(Charsets.UTF_8))
            out.write("Access-Control-Allow-Origin: *\r\n".toByteArray(Charsets.UTF_8))
            out.write("Content-Length: ${bytes.size}\r\n".toByteArray(Charsets.UTF_8))
            out.write("Connection: close\r\n".toByteArray(Charsets.UTF_8))
            out.write("\r\n".toByteArray(Charsets.UTF_8))
            out.write(bytes)
            out.flush()
        } catch (_: Exception) {}
    }

    private fun escapeJson(value: String): String {
        return value.replace("\\", "\\\\").replace("\"", "\\\"")
    }
}
