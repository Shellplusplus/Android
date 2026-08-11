package com.shell.liangyi.core

import android.content.Context
import android.net.Uri
import android.os.storage.StorageManager
import android.provider.DocumentsContract
import android.util.Base64
import android.util.Log
import com.shell.liangyi.core.diagnostics.DiagnosticManager
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream

private const val FILE_TRANSFER_TAG = "FileTransferController"
private const val FILE_TRANSFER_SOURCE = "shell-plus-plus-android"
private const val FILE_TRANSFER_TIMEOUT_MS = 30_000L
private const val FILE_TRANSFER_CHUNK_SIZE = 3_072
private const val FILE_TRANSFER_FREE_SPACE_RESERVE = 8L * 1024L * 1024L

enum class RemoteFileTransferStatus {
    IDLE,
    PREPARING,
    RECEIVING,
    COMPLETED,
    FAILED,
}

data class RemoteFileTransferState(
    val status: RemoteFileTransferStatus = RemoteFileTransferStatus.IDLE,
    val path: String = "",
    val fileName: String = "",
    val receivedBytes: Long = 0L,
    val totalBytes: Long = 0L,
    val offset: Long = 0L,
    val message: String = "",
) {
    val isActive: Boolean
        get() = status == RemoteFileTransferStatus.PREPARING ||
            status == RemoteFileTransferStatus.RECEIVING
}

internal object RemoteFileTransferGuard {
    const val MAX_TRANSFER_BYTES = 512L * 1024L * 1024L
    private const val MIN_CHUNK_BYTES = 1_024
    private const val MAX_CHUNK_BYTES = 6_144

    fun canStart(totalBytes: Long, totalParts: Int, chunkSize: Int, offset: Long): Boolean {
        if (totalBytes <= 0L || totalBytes > MAX_TRANSFER_BYTES) return false
        if (offset < 0L || offset >= totalBytes) return false
        if (totalParts <= 0) return false
        return chunkSize in MIN_CHUNK_BYTES..MAX_CHUNK_BYTES
    }

    fun canAcceptPart(
        expectedIndex: Int,
        index: Int,
        expectedPosition: Long,
        position: Long,
        expectedTotalParts: Int,
        declaredTotalParts: Int,
        receivedBytes: Long,
        partBytes: Int,
        totalBytes: Long,
    ): Boolean {
        if (index != expectedIndex || position != expectedPosition) return false
        if (declaredTotalParts != expectedTotalParts || index !in 0 until expectedTotalParts) return false
        if (partBytes <= 0 || partBytes > MAX_CHUNK_BYTES) return false
        return receivedBytes + partBytes.toLong() <= totalBytes
    }
}

private data class ActiveFileTransfer(
    val sessionId: String,
    val path: String,
    val requestedName: String,
    val destination: Uri,
    val tempFile: File,
    val outputStream: FileOutputStream,
    var fileName: String = requestedName,
    var offset: Long = 0L,
    var length: Long = 0L,
    var totalBytes: Long = 0L,
    var totalParts: Int = 0,
    var chunkSize: Int = 0,
    var receivedBytes: Long = 0L,
    var lastIndex: Int = -1,
    var started: Boolean = false,
)

class FileTransferController(
    private val context: Context,
    private val scope: CoroutineScope,
    private val messageCenter: WearMessageCenter,
) {
    private val _state = MutableStateFlow(RemoteFileTransferState())
    val state: StateFlow<RemoteFileTransferState> = _state.asStateFlow()

    private var activeTransfer: ActiveFileTransfer? = null
    private var collectorJob: Job? = null
    private var timeoutJob: Job? = null
    private var sessionCounter = 0L

    init {
        collectorJob = scope.launch(Dispatchers.IO) {
            messageCenter.messageFlow.collect { json ->
                try {
                    handleMessage(json)
                } catch (error: CancellationException) {
                    throw error
                } catch (error: Exception) {
                    Log.e(FILE_TRANSFER_TAG, "Failed to handle file transfer message", error)
                    activeTransfer?.let {
                        failTransfer(it, error.message ?: "file_transfer_failed", notifyWatch = true)
                    }
                }
            }
        }
    }

    fun start(path: String, fileName: String, destination: Uri, offset: Long = 0L, length: Long = 0L) {
        scope.launch(Dispatchers.IO) {
            beginTransfer(path, fileName, destination, offset, length)
        }
    }

    /** 立刻保存：停止传输，把已收到的部分保存到目标文件 */
    fun savePartialNow() {
        Log.d(FILE_TRANSFER_TAG, "savePartialNow called, activeTransfer=${activeTransfer != null}")
        val transfer = activeTransfer ?: return
        Log.d(FILE_TRANSFER_TAG, "savePartialNow transfer: started=${transfer.started} received=${transfer.receivedBytes} dest=${transfer.destination}")
        if (!transfer.started || transfer.receivedBytes <= 0L) {
            Log.d(FILE_TRANSFER_TAG, "savePartialNow: nothing received, fail")
            failTransfer(transfer, "nothing_received", notifyWatch = true)
            return
        }
        timeoutJob?.cancel()
        timeoutJob = null
        sendAbort(transfer, "user_save_partial")
        Log.d(FILE_TRANSFER_TAG, "savePartialNow: flushing stream")
        try {
            transfer.outputStream.flush()
            transfer.outputStream.close()
            Log.d(FILE_TRANSFER_TAG, "savePartialNow: stream closed, tempFile=${transfer.tempFile.length()}B")
            val wrote = context.contentResolver.openOutputStream(transfer.destination, "w")?.use { output ->
                transfer.tempFile.inputStream().use { input -> input.copyTo(output) }
                true
            } == true
            Log.d(FILE_TRANSFER_TAG, "savePartialNow: wrote=$wrote")
            if (wrote) {
                transfer.tempFile.delete()
                activeTransfer = null
                _state.value = RemoteFileTransferState(
                    status = RemoteFileTransferStatus.COMPLETED,
                    path = transfer.path,
                    fileName = transfer.fileName,
                    receivedBytes = transfer.receivedBytes,
                    totalBytes = transfer.totalBytes,
                    message = "partial_saved",
                )
                Log.d(FILE_TRANSFER_TAG, "savePartialNow: COMPLETED")
            } else {
                Log.d(FILE_TRANSFER_TAG, "savePartialNow: destination open failed")
                failTransfer(transfer, "partial_destination_open_failed", notifyWatch = false, streamClosed = true)
            }
        } catch (error: Exception) {
            Log.e(FILE_TRANSFER_TAG, "savePartialNow exception", error)
            failTransfer(transfer, error.message ?: "partial_save_failed", notifyWatch = false, streamClosed = true)
        }
    }

    /** 强行终止：放弃传输并舍弃已下载部分 */
    fun abortNow() {
        Log.d(FILE_TRANSFER_TAG, "abortNow called, activeTransfer=${activeTransfer != null}")
        val transfer = activeTransfer ?: return
        Log.d(FILE_TRANSFER_TAG, "abortNow transfer: path=${transfer.path} received=${transfer.receivedBytes}")
        failTransfer(transfer, "user_aborted", notifyWatch = true)
        Log.d(FILE_TRANSFER_TAG, "abortNow: failTransfer done, state=${_state.value.status}")
    }

    fun destroy() {
        timeoutJob?.cancel()
        timeoutJob = null
        collectorJob?.cancel()
        collectorJob = null
        activeTransfer?.let { transfer ->
            sendAbort(transfer, "controller_destroyed")
            runCatching { transfer.outputStream.close() }
            transfer.tempFile.delete()
            deleteDestination(transfer.destination)
        }
        activeTransfer = null
    }

    private fun beginTransfer(path: String, fileName: String, destination: Uri, offset: Long, length: Long) {
        if (path.isBlank()) {
            _state.value = RemoteFileTransferState(
                status = RemoteFileTransferStatus.FAILED,
                message = "invalid_path",
            )
            deleteDestination(destination)
            return
        }
        if (offset < 0L || length < 0L) {
            _state.value = RemoteFileTransferState(
                status = RemoteFileTransferStatus.FAILED,
                message = "invalid_offset",
            )
            deleteDestination(destination)
            return
        }
        activeTransfer?.let {
            failTransfer(it, "replaced", notifyWatch = true)
        }
        val normalizedName = fileName.ifBlank { path.substringAfterLast('/').ifBlank { "watch-file" } }
        val tempFile = try {
            File.createTempFile("watch-file-", ".part", context.cacheDir)
        } catch (error: Exception) {
            Log.e(FILE_TRANSFER_TAG, "Failed to create transfer cache", error)
            deleteDestination(destination)
            _state.value = RemoteFileTransferState(
                status = RemoteFileTransferStatus.FAILED,
                path = path,
                fileName = normalizedName,
                message = error.message ?: "cache_create_failed",
            )
            return
        }
        val outputStream = try {
            FileOutputStream(tempFile, false)
        } catch (error: Exception) {
            Log.e(FILE_TRANSFER_TAG, "Failed to open transfer cache", error)
            tempFile.delete()
            deleteDestination(destination)
            _state.value = RemoteFileTransferState(
                status = RemoteFileTransferStatus.FAILED,
                path = path,
                fileName = normalizedName,
                message = error.message ?: "cache_open_failed",
            )
            return
        }
        sessionCounter++
        val sessionId = "android_${System.currentTimeMillis()}_$sessionCounter"
        val transfer = ActiveFileTransfer(
            sessionId = sessionId,
            path = path,
            requestedName = normalizedName,
            destination = destination,
            tempFile = tempFile,
            outputStream = outputStream,
            offset = offset,
            length = length,
        )
        activeTransfer = transfer
        _state.value = RemoteFileTransferState(
            status = RemoteFileTransferStatus.PREPARING,
            path = path,
            fileName = normalizedName,
            offset = offset,
        )
        scheduleTimeout(transfer)
        val payload = JSONObject().apply {
            put("source", FILE_TRANSFER_SOURCE)
            put("sessionId", sessionId)
            put("path", path)
            put("chunkSize", FILE_TRANSFER_CHUNK_SIZE)
            put("offset", offset)
            put("length", length)
        }
        messageCenter.send(MessageType.FILE_TRANSFER_REQUEST, payload) { success, error ->
            if (!success) {
                scope.launch(Dispatchers.IO) {
                    if (activeTransfer === transfer) {
                        failTransfer(
                            transfer,
                            error?.message ?: "request_send_failed",
                            notifyWatch = false,
                        )
                    }
                }
            }
        }
    }

    private fun handleMessage(json: JSONObject) {
        when (json.optString("type")) {
            MessageType.FILE_TRANSFER_START -> handleStart(json)
            MessageType.FILE_TRANSFER_PART -> handlePart(json)
            MessageType.FILE_TRANSFER_RESULT -> handleResult(json)
            MessageType.FILE_TRANSFER_ABORT -> handleRemoteAbort(json)
        }
    }

    private fun handleStart(json: JSONObject) {
        val transfer = activeTransfer ?: return
        if (json.optString("sessionId") != transfer.sessionId) return
        val totalBytes = json.optLong("size", 0L)
        val totalParts = json.optInt("total", 0)
        val chunkSize = json.optInt("chunkSize", 0)
        val offset = json.optLong("offset", transfer.offset)
        val length = json.optLong("length", 0L)
        if (!RemoteFileTransferGuard.canStart(totalBytes, totalParts, chunkSize, offset)) {
            failTransfer(transfer, "invalid_start", notifyWatch = true)
            return
        }
        if (!reserveTransferSpace(transfer.tempFile, totalBytes)) {
            failTransfer(transfer, "insufficient_space", notifyWatch = true)
            return
        }
        transfer.fileName = json.optString("name", transfer.requestedName).ifBlank { transfer.requestedName }
        transfer.offset = offset
        transfer.length = length
        // totalBytes = 本次实际要传的字节数（length > 0 用 length，否则到文件尾）
        transfer.totalBytes = if (length > 0L) length else (totalBytes - offset).coerceAtLeast(0L)
        transfer.totalParts = totalParts
        transfer.chunkSize = chunkSize
        transfer.started = true
        _state.value = RemoteFileTransferState(
            status = RemoteFileTransferStatus.RECEIVING,
            path = transfer.path,
            fileName = transfer.fileName,
            totalBytes = transfer.totalBytes,
            receivedBytes = 0L,
            offset = offset,
        )
        scheduleTimeout(transfer)
    }

    private fun handlePart(json: JSONObject) {
        val transfer = activeTransfer ?: return
        if (!transfer.started || json.optString("sessionId") != transfer.sessionId) return
        val index = json.optInt("index", -1)
        val position = json.optLong("position", -1L)
        val declaredTotal = json.optInt("total", -1)
        val encoded = json.optString("data")
        val bytes = try {
            Base64.decode(encoded, Base64.DEFAULT)
        } catch (error: Exception) {
            sendAck(transfer, index, false)
            failTransfer(transfer, "decode_failed", notifyWatch = true)
            return
        }
        if (!RemoteFileTransferGuard.canAcceptPart(
                expectedIndex = transfer.lastIndex + 1,
                index = index,
                expectedPosition = transfer.offset + transfer.receivedBytes,
                position = position,
                expectedTotalParts = transfer.totalParts,
                declaredTotalParts = declaredTotal,
                receivedBytes = transfer.receivedBytes,
                partBytes = bytes.size,
                totalBytes = transfer.totalBytes,
            )
        ) {
            sendAck(transfer, index, false)
            failTransfer(transfer, "invalid_part", notifyWatch = true)
            return
        }
        try {
            transfer.outputStream.write(bytes)
            transfer.receivedBytes += bytes.size.toLong()
            transfer.lastIndex = index
        } catch (error: Exception) {
            Log.e(FILE_TRANSFER_TAG, "Failed to write transfer part", error)
            sendAck(transfer, index, false)
            failTransfer(transfer, error.message ?: "write_failed", notifyWatch = true)
            return
        }
        _state.value = _state.value.copy(
            status = RemoteFileTransferStatus.RECEIVING,
            receivedBytes = transfer.receivedBytes,
            totalBytes = transfer.totalBytes,
        )
        scheduleTimeout(transfer)
        sendAck(transfer, index, true)
    }

    private fun handleResult(json: JSONObject) {
        val transfer = activeTransfer ?: return
        if (json.optString("sessionId") != transfer.sessionId) return
        if (!json.optBoolean("success", false)) {
            failTransfer(
                transfer,
                json.optString("reason", "transfer_failed"),
                notifyWatch = false,
            )
            return
        }
        val complete = transfer.started &&
            transfer.receivedBytes == transfer.totalBytes &&
            transfer.lastIndex == transfer.totalParts - 1
        if (!complete) {
            failTransfer(transfer, "incomplete_transfer", notifyWatch = true)
            return
        }
        timeoutJob?.cancel()
        timeoutJob = null
        try {
            transfer.outputStream.flush()
            transfer.outputStream.close()
            if (transfer.tempFile.length() != transfer.totalBytes) {
                failTransfer(transfer, "size_mismatch", notifyWatch = true, streamClosed = true)
                return
            }
            val wrote = context.contentResolver.openOutputStream(transfer.destination, "w")?.use { output ->
                transfer.tempFile.inputStream().use { input -> input.copyTo(output) }
                true
            } == true
            if (!wrote) {
                failTransfer(transfer, "destination_open_failed", notifyWatch = false, streamClosed = true)
                return
            }
            transfer.tempFile.delete()
            activeTransfer = null
            _state.value = RemoteFileTransferState(
                status = RemoteFileTransferStatus.COMPLETED,
                path = transfer.path,
                fileName = transfer.fileName,
                receivedBytes = transfer.receivedBytes,
                totalBytes = transfer.totalBytes,
            )
        } catch (error: Exception) {
            Log.e(FILE_TRANSFER_TAG, "Failed to finalize transfer", error)
            failTransfer(
                transfer,
                error.message ?: "destination_write_failed",
                notifyWatch = false,
                streamClosed = true,
            )
        }
    }

    private fun handleRemoteAbort(json: JSONObject) {
        val transfer = activeTransfer ?: return
        if (json.optString("sessionId") != transfer.sessionId) return
        failTransfer(
            transfer,
            json.optString("reason", "remote_aborted"),
            notifyWatch = false,
        )
    }

    private fun sendAck(transfer: ActiveFileTransfer, index: Int, ok: Boolean) {
        val payload = JSONObject().apply {
            put("source", FILE_TRANSFER_SOURCE)
            put("sessionId", transfer.sessionId)
            put("index", index)
            put("ok", ok)
        }
        messageCenter.send(MessageType.FILE_TRANSFER_ACK, payload)
    }

    private fun sendAbort(transfer: ActiveFileTransfer, reason: String) {
        val payload = JSONObject().apply {
            put("source", FILE_TRANSFER_SOURCE)
            put("sessionId", transfer.sessionId)
            put("reason", reason)
        }
        messageCenter.send(MessageType.FILE_TRANSFER_ABORT, payload)
    }

    private fun scheduleTimeout(transfer: ActiveFileTransfer) {
        timeoutJob?.cancel()
        timeoutJob = scope.launch(Dispatchers.IO) {
            delay(FILE_TRANSFER_TIMEOUT_MS)
            if (activeTransfer === transfer) {
                failTransfer(transfer, "transfer_timeout", notifyWatch = true)
            }
        }
    }

    private fun failTransfer(
        transfer: ActiveFileTransfer,
        reason: String,
        notifyWatch: Boolean,
        streamClosed: Boolean = false,
    ) {
        if (activeTransfer !== transfer) return
        timeoutJob?.cancel()
        timeoutJob = null
        if (notifyWatch) sendAbort(transfer, reason)
        if (!streamClosed) runCatching { transfer.outputStream.close() }
        transfer.tempFile.delete()
        deleteDestination(transfer.destination)
        activeTransfer = null
        _state.value = RemoteFileTransferState(
            status = RemoteFileTransferStatus.FAILED,
            path = transfer.path,
            fileName = transfer.fileName,
            receivedBytes = transfer.receivedBytes,
            totalBytes = transfer.totalBytes,
            message = reason,
        )
        if (reason != "replaced" &&
            reason != "controller_destroyed" &&
            reason != "user_aborted" &&
            reason != "user_save_partial" &&
            reason != "nothing_received"
        ) {
            DiagnosticManager.getInstance(context).reportFailure(
                category = "file_transfer",
                scene = "remote_file_download",
                code = reason,
                summary = "远程文件传输失败：$reason",
                metadata = mapOf(
                    "receivedBytes" to transfer.receivedBytes.toString(),
                    "totalBytes" to transfer.totalBytes.toString(),
                ),
            )
        }
    }

    private fun deleteDestination(uri: Uri) {
        runCatching {
            if (uri.scheme == "content") {
                DocumentsContract.deleteDocument(context.contentResolver, uri)
            }
        }.onFailure {
            Log.w(FILE_TRANSFER_TAG, "Failed to remove incomplete destination", it)
        }
    }

    private fun reserveTransferSpace(tempFile: File, totalBytes: Long): Boolean {
        val storageManager = context.getSystemService(StorageManager::class.java) ?: return false
        return runCatching {
            val requiredBytes = totalBytes + FILE_TRANSFER_FREE_SPACE_RESERVE
            val storageUuid = storageManager.getUuidForPath(tempFile)
            if (storageManager.getAllocatableBytes(storageUuid) < requiredBytes) {
                false
            } else {
                storageManager.allocateBytes(storageUuid, requiredBytes)
                true
            }
        }.getOrElse { error ->
            Log.w(FILE_TRANSFER_TAG, "Failed to reserve transfer cache space", error)
            false
        }
    }
}
