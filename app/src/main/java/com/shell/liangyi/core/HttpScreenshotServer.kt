package com.shell.liangyi.core

import android.util.Log
import java.io.BufferedReader
import java.io.File
import java.io.FileOutputStream
import java.io.InputStreamReader
import java.net.Inet4Address
import java.net.NetworkInterface
import java.net.ServerSocket
import java.net.Socket

/**
 * 轻量级 HTTP 服务器（ServerSocket + 最小 HTTP/1.0 解析），零外部依赖。
 * 接收快应用通过 WiFi 直传的整张 PNG 截图。
 */
class HttpScreenshotServer(
    private val screenshotsDir: File,
    private val onScreenshotReceived: (shotId: String, file: File) -> Unit
) {
    companion object {
        private const val TAG = "HttpScreenshotServer"
        const val DEFAULT_PORT = 8765
    }

    private var serverThread: Thread? = null
    private var serverSocket: ServerSocket? = null
    var port: Int = DEFAULT_PORT
        private set
    @Volatile
    var isRunning: Boolean = false
        private set

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
            serverSocket = ServerSocket(port)
            isRunning = true
            serverThread = Thread({
                Log.i(TAG, "HTTP server listening on port $port")
                while (isRunning) {
                    try {
                        val client = serverSocket?.accept() ?: continue
                        Thread({ handleClient(client) }, "http-worker").start()
                    } catch (e: Exception) {
                        if (isRunning) Log.w(TAG, "Accept error", e)
                    }
                }
            }, "http-server")
            serverThread!!.isDaemon = true
            serverThread!!.start()
            Log.i(TAG, "HTTP server started on port $port, IP: ${getWifiIp() ?: "unknown"}")
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
        Log.i(TAG, "HTTP server stopped")
    }

    private fun handleClient(socket: Socket) {
        try {
            socket.soTimeout = 30000
            val input = socket.getInputStream()
            val reader = BufferedReader(InputStreamReader(input, Charsets.UTF_8))

            // 读取请求行
            val requestLine = reader.readLine() ?: return
            val parts = requestLine.split(" ")
            if (parts.size < 2) return
            val method = parts[0].uppercase()
            val path = parts[1]

            // 读取 headers
            val headers = mutableMapOf<String, String>()
            var contentLength = 0
            while (true) {
                val line = reader.readLine() ?: break
                if (line.isEmpty()) break
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

            when {
                method == "GET" && path == "/ping" -> handlePing(socket)
                method == "POST" && path == "/screenshot" -> handleScreenshot(socket, input, headers, contentLength)
                else -> respond(socket, 404, """{"ok":false,"error":"not found"}""")
            }
        } catch (e: Exception) {
            Log.w(TAG, "Client error", e)
        } finally {
            try { socket.close() } catch (_: Exception) {}
        }
    }

    private fun handlePing(socket: Socket) {
        val ip = getWifiIp() ?: "unknown"
        val json = """{"ok":true,"device":"shell-plus-plus","ip":"$ip","port":$port}"""
        respond(socket, 200, json)
    }

    private fun handleScreenshot(socket: Socket, input: java.io.InputStream, headers: Map<String, String>, contentLength: Int) {
        val shotId = headers["x-shot-id"]
        val timeText = headers["x-time-text"] ?: ""
        if (shotId.isNullOrBlank()) {
            respond(socket, 400, """{"ok":false,"error":"Missing X-Shot-Id header"}""")
            return
        }
        if (contentLength <= 0 || contentLength > 10 * 1024 * 1024) {
            respond(socket, 400, """{"ok":false,"error":"Invalid content length"}""")
            return
        }

        try {
            val body = ByteArray(contentLength)
            var offset = 0
            while (offset < contentLength) {
                val read = input.read(body, offset, contentLength - offset)
                if (read < 0) break
                offset += read
            }

            if (offset < contentLength) {
                respond(socket, 400, """{"ok":false,"error":"Incomplete body"}""")
                return
            }

            val bodyStr = String(body, Charsets.UTF_8)
            val finalShotId: String
            val finalTimeText: String
            val pngBytes: ByteArray

            // 尝试解析 JSON（快应用发送 base64 编码的 JSON）
            val jsonTry = try { org.json.JSONObject(bodyStr) } catch (_: Exception) { null }
            if (jsonTry != null && jsonTry.has("data")) {
                finalShotId = jsonTry.optString("shotId", shotId)
                finalTimeText = jsonTry.optString("timeText", timeText)
                val b64 = jsonTry.optString("data", "")
                if (b64.isEmpty()) {
                    respond(socket, 400, """{"ok":false,"error":"Empty data field"}""")
                    return
                }
                pngBytes = android.util.Base64.decode(b64, android.util.Base64.DEFAULT)
                Log.i(TAG, "Decoded base64 JSON: ${b64.length} chars -> ${pngBytes.size} bytes")
            } else {
                // 原始二进制保底
                finalShotId = shotId
                finalTimeText = timeText
                pngBytes = body
            }

            // 保存文件
            val fileName = "${finalShotId}.png"
            val destFile = File(screenshotsDir, fileName)
            FileOutputStream(destFile).use { fos ->
                fos.write(pngBytes, 0, pngBytes.size)
            }

            // sidecar JSON
            val sidecarFile = File(screenshotsDir, "$fileName.json")
            val sidecar = """{"shotId":"$finalShotId","timeText":"$finalTimeText","size":${pngBytes.size},"receivedVia":"http"}"""
            sidecarFile.writeText(sidecar)

            Log.i(TAG, "Received screenshot via HTTP: $finalShotId (${pngBytes.size} bytes)")

            onScreenshotReceived(finalShotId, destFile)

            val resp = """{"ok":true,"shotId":"$finalShotId","size":${pngBytes.size}}"""
            respond(socket, 200, resp)
        } catch (e: Exception) {
            Log.e(TAG, "Failed to save screenshot $shotId", e)
            respond(socket, 500, """{"ok":false,"error":"${e.message}"}""")
        }
    }

    private fun respond(socket: Socket, code: Int, body: String) {
        try {
            val bytes = body.toByteArray(Charsets.UTF_8)
            val status = when (code) {
                200 -> "OK"
                400 -> "Bad Request"
                404 -> "Not Found"
                500 -> "Internal Server Error"
                else -> "Unknown"
            }
            val out = socket.getOutputStream()
            out.write("HTTP/1.0 $code $status\r\n".toByteArray(Charsets.UTF_8))
            out.write("Content-Type: application/json\r\n".toByteArray(Charsets.UTF_8))
            out.write("Content-Length: ${bytes.size}\r\n".toByteArray(Charsets.UTF_8))
            out.write("Connection: close\r\n".toByteArray(Charsets.UTF_8))
            out.write("\r\n".toByteArray(Charsets.UTF_8))
            out.write(bytes)
            out.flush()
        } catch (_: Exception) {}
    }
}
