package com.shell.liangyi.core

import android.content.Context
import android.util.Base64
import android.util.Log
import com.shell.liangyi.R
import com.shell.liangyi.util.FileCacheTrimmer
import kotlinx.coroutines.CancellationException
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.util.LinkedHashMap
import java.util.Locale

private const val REMOTE_TOOL_TAG = "RemoteToolController"
private const val REMOTE_TOOL_TIMEOUT_MS = 25_000L
private const val REMOTE_FILE_CACHE_LIMIT = 32
private const val REMOTE_PREVIEW_CACHE_LIMIT = 12

enum class RemoteFileViewMode {
    LIST,
    INFO,
    TEXT,
    HEX,
    IMAGE,
}

data class RemoteFileItem(
    val id: String,
    val name: String,
    val path: String,
    val isDir: Boolean,
    val size: String,
)

data class RemoteFileViewerState(
    val isLoading: Boolean = false,
    val hasLoadedCurrentPath: Boolean = false,
    val currentPath: String = "/",
    val items: List<RemoteFileItem> = emptyList(),
    val selectedPath: String = "",
    val selectedName: String = "",
    val selectedSize: String = "-",
    val selectedSizeBytes: Long = 0L,
    val viewMode: RemoteFileViewMode = RemoteFileViewMode.LIST,
    val viewerText: String = "",
    val viewerImagePath: String = "",
    val viewerErrorMessage: String = "",
    val hexOffset: Int = 0,
)

private data class ActiveRemoteRequest(
    val requestId: String,
    val feature: String,
    val action: String,
    val expectsBinary: Boolean,
    val targetPath: String = "",
)

private data class ActiveBinaryTransfer(
    val requestId: String,
    val file: File,
    val outputStream: FileOutputStream,
    val totalBytes: Long,
    val totalChunks: Int,
    var lastIndex: Int = -1,
    var receivedBytes: Long = 0L,
)

class RemoteToolController(
    private val context: Context,
    private val scope: CoroutineScope,
    private val messageCenter: WearMessageCenter,
) {
    companion object {
        private const val FEATURE_FILE_VIEWER = "fileviewer"
    }

    private val _fileViewerState = MutableStateFlow(RemoteFileViewerState())
    val fileViewerState: StateFlow<RemoteFileViewerState> = _fileViewerState.asStateFlow()

    private val _messages = MutableSharedFlow<String>(extraBufferCapacity = 8)
    val messages: SharedFlow<String> = _messages.asSharedFlow()

    private val previewCacheDir: File by lazy {
        File(context.cacheDir, "watch_remote_preview").apply {
            mkdirs()
            FileCacheTrimmer.trim(this, REMOTE_PREVIEW_CACHE_LIMIT)
        }
    }

    private var activeRequest: ActiveRemoteRequest? = null
    private var activeBinaryTransfer: ActiveBinaryTransfer? = null
    private var timeoutJob: Job? = null
    private var collectorJob: Job? = null
    private var requestCounter = 0L
    private val directoryListingCache = LinkedHashMap<String, List<RemoteFileItem>>(REMOTE_FILE_CACHE_LIMIT, 0.75f, true)

    init {
        collectorJob = scope.launch(Dispatchers.IO) {
            messageCenter.messageFlow.collect { json ->
                try {
                    handleMessage(json)
                } catch (e: CancellationException) {
                    throw e
                } catch (e: Exception) {
                    Log.e(REMOTE_TOOL_TAG, "Failed to handle remote tool message", e)
                    if (activeRequest != null) {
                        failActiveRequest(context.getString(R.string.remote_tool_request_failed))
                    }
                }
            }
        }
    }

    fun destroy() {
        timeoutJob?.cancel()
        timeoutJob = null
        collectorJob?.cancel()
        collectorJob = null
        activeRequest = null
        directoryListingCache.clear()
        clearBinaryTransfer()
    }

    fun refreshFileViewerRoot() {
        cancelActiveRequest()
        _fileViewerState.value = RemoteFileViewerState(
            currentPath = "/",
            hasLoadedCurrentPath = false,
        )
        listFilePath("/", forceRefresh = true)
    }

    fun listFilePath(path: String, forceRefresh: Boolean = false) {
        val normalizedPath = normalizeRemotePath(path)
        val cachedItems = if (forceRefresh) null else directoryListingCache[normalizedPath]
        if (cachedItems != null) {
            _fileViewerState.value = _fileViewerState.value.copy(
                isLoading = false,
                hasLoadedCurrentPath = true,
                currentPath = normalizedPath,
                items = cachedItems,
                viewerErrorMessage = "",
                viewMode = RemoteFileViewMode.LIST,
            )
            return
        }
        if (!startRequest(
                feature = FEATURE_FILE_VIEWER,
                action = "list",
                expectsBinary = false,
                targetPath = normalizedPath,
            )
        ) {
            return
        }
        _fileViewerState.value = _fileViewerState.value.copy(
            isLoading = true,
            hasLoadedCurrentPath = false,
            currentPath = normalizedPath,
            items = if (_fileViewerState.value.currentPath == normalizedPath) {
                _fileViewerState.value.items
            } else {
                emptyList()
            },
            viewerErrorMessage = "",
            viewMode = RemoteFileViewMode.LIST,
        )
        sendRemoteRequest(
            feature = FEATURE_FILE_VIEWER,
            action = "list",
            payload = JSONObject().apply {
                put("path", normalizedPath)
            },
        )
    }

    fun openFileInfo(path: String) {
        if (!startRequest(FEATURE_FILE_VIEWER, "info", expectsBinary = false)) return
        _fileViewerState.value = _fileViewerState.value.copy(
            isLoading = true,
            viewerErrorMessage = "",
        )
        sendRemoteRequest(
            feature = FEATURE_FILE_VIEWER,
            action = "info",
            payload = JSONObject().apply { put("path", path) },
        )
    }

    fun openFileText() {
        val path = _fileViewerState.value.selectedPath
        if (path.isBlank() || !startRequest(FEATURE_FILE_VIEWER, "text", expectsBinary = false)) return
        _fileViewerState.value = _fileViewerState.value.copy(isLoading = true, viewerErrorMessage = "")
        sendRemoteRequest(
            feature = FEATURE_FILE_VIEWER,
            action = "text",
            payload = JSONObject().apply {
                put("path", path)
                put("length", 4096)
            },
        )
    }

    fun openFileHex(offset: Int) {
        val path = _fileViewerState.value.selectedPath
        if (path.isBlank() || !startRequest(FEATURE_FILE_VIEWER, "hex", expectsBinary = false)) return
        val safeOffset = offset.coerceAtLeast(0)
        _fileViewerState.value = _fileViewerState.value.copy(
            isLoading = true,
            hexOffset = safeOffset,
            viewerErrorMessage = "",
        )
        sendRemoteRequest(
            feature = FEATURE_FILE_VIEWER,
            action = "hex",
            payload = JSONObject().apply {
                put("path", path)
                put("offset", safeOffset)
                put("length", 128)
            },
        )
    }

    fun openFileImage() {
        val path = _fileViewerState.value.selectedPath
        if (path.isBlank() || !startRequest(FEATURE_FILE_VIEWER, "image", expectsBinary = true)) return
        _fileViewerState.value = _fileViewerState.value.copy(
            isLoading = true,
            viewerErrorMessage = "",
            viewerImagePath = "",
        )
        sendRemoteRequest(
            feature = FEATURE_FILE_VIEWER,
            action = "image",
            payload = JSONObject().apply { put("path", path) },
        )
    }

    fun showFileList() {
        cancelActiveRequest()
        _fileViewerState.value = _fileViewerState.value.copy(
            viewMode = RemoteFileViewMode.LIST,
            isLoading = false,
            viewerText = "",
            viewerImagePath = "",
            viewerErrorMessage = "",
        )
    }

    fun showFileInfo() {
        cancelActiveRequest()
        _fileViewerState.value = _fileViewerState.value.copy(
            viewMode = RemoteFileViewMode.INFO,
            isLoading = false,
            viewerErrorMessage = "",
        )
    }

    private fun sendRemoteRequest(feature: String, action: String, payload: JSONObject) {
        val requestId = activeRequest?.requestId ?: return
        val request = JSONObject(payload.toString()).apply {
            put("requestId", requestId)
            put("feature", feature)
            put("action", action)
            put("source", "shell-plus-plus-android")
        }
        scheduleTimeout()
        messageCenter.send(MessageType.REMOTE_TOOL_REQUEST, request) { success, error ->
            if (!success && activeRequest?.requestId == requestId) {
                failActiveRequest(error?.message ?: context.getString(R.string.send_failed))
            }
        }
    }

    private fun startRequest(feature: String, action: String, expectsBinary: Boolean): Boolean {
        return startRequest(feature, action, expectsBinary, "")
    }

    private fun startRequest(
        feature: String,
        action: String,
        expectsBinary: Boolean,
        targetPath: String,
    ): Boolean {
        if (activeRequest != null) {
            emitMessage(context.getString(R.string.remote_tool_busy))
            return false
        }
        requestCounter++
        activeRequest = ActiveRemoteRequest(
            requestId = "remote-$feature-$action-$requestCounter",
            feature = feature,
            action = action,
            expectsBinary = expectsBinary,
            targetPath = targetPath,
        )
        return true
    }

    private fun scheduleTimeout() {
        timeoutJob?.cancel()
        val requestId = activeRequest?.requestId ?: return
        timeoutJob = scope.launch(Dispatchers.IO) {
            kotlinx.coroutines.delay(REMOTE_TOOL_TIMEOUT_MS)
            if (activeRequest?.requestId == requestId) {
                failActiveRequest(context.getString(R.string.remote_tool_timeout))
            }
        }
    }

    private fun clearActiveRequest() {
        timeoutJob?.cancel()
        timeoutJob = null
        activeRequest = null
    }

    private fun cancelActiveRequest() {
        clearActiveRequest()
        clearBinaryTransfer()
    }

    private suspend fun handleMessage(json: JSONObject) {
        when (json.optString("type")) {
            MessageType.REMOTE_TOOL_RESULT -> handleRemoteToolResult(json)
            MessageType.REMOTE_TOOL_BINARY_START -> handleBinaryStart(json)
            MessageType.REMOTE_TOOL_BINARY_CHUNK -> handleBinaryChunk(json)
            MessageType.REMOTE_TOOL_BINARY_FINISH -> handleBinaryFinish(json)
            MessageType.REMOTE_TOOL_BINARY_ABORT -> handleBinaryAbort(json)
        }
    }

    private fun handleRemoteToolResult(json: JSONObject) {
        val request = activeRequest ?: return
        val requestId = json.optString("requestId")
        if (request.requestId != requestId) return
        scheduleTimeout()
        val success = json.optBoolean("success", false)
        val message = json.optString("message")
        if (!success) {
            failActiveRequest(message.ifBlank { context.getString(R.string.remote_tool_request_failed) })
            return
        }
        when (request.feature) {
            FEATURE_FILE_VIEWER -> handleFileViewerResult(request, json)
        }
    }

    private fun handleFileViewerResult(request: ActiveRemoteRequest, json: JSONObject) {
        when (request.action) {
            "list" -> {
                val path = normalizeRemotePath(json.optString("path", request.targetPath))
                val itemsJson = json.optJSONArray("items")
                val items = buildRemoteFileItems(itemsJson)
                cacheDirectoryListing(path, items)
                _fileViewerState.value = _fileViewerState.value.copy(
                    isLoading = false,
                    hasLoadedCurrentPath = true,
                    currentPath = path,
                    items = items,
                    viewMode = RemoteFileViewMode.LIST,
                    viewerErrorMessage = "",
                )
                clearActiveRequest()
            }

            "info" -> {
                val path = json.optString("path")
                _fileViewerState.value = _fileViewerState.value.copy(
                    isLoading = false,
                    selectedPath = path,
                    selectedName = json.optString("name", path.substringAfterLast("/")),
                    selectedSize = json.optString("size", "-"),
                    selectedSizeBytes = json.optLong("sizeBytes", 0L),
                    viewMode = RemoteFileViewMode.INFO,
                    viewerErrorMessage = "",
                )
                clearActiveRequest()
            }

            "text" -> {
                _fileViewerState.value = _fileViewerState.value.copy(
                    isLoading = false,
                    viewMode = RemoteFileViewMode.TEXT,
                    viewerText = json.optString("content"),
                    viewerImagePath = "",
                    viewerErrorMessage = "",
                )
                clearActiveRequest()
            }

            "hex" -> {
                _fileViewerState.value = _fileViewerState.value.copy(
                    isLoading = false,
                    viewMode = RemoteFileViewMode.HEX,
                    viewerText = json.optString("content"),
                    viewerImagePath = "",
                    viewerErrorMessage = "",
                )
                clearActiveRequest()
            }

            "image" -> {
                if (!request.expectsBinary) {
                    clearActiveRequest()
                }
            }
        }
    }

    private fun handleBinaryStart(json: JSONObject) {
        val request = activeRequest ?: return
        if (!request.expectsBinary || request.feature != FEATURE_FILE_VIEWER) return
        if (request.requestId != json.optString("requestId")) return
        val totalBytes = json.optLong("totalBytes", 0L)
        val totalChunks = json.optInt("totalChunks", 0)
        val fileName = json.optString("fileName", "${request.requestId}.bin")
        if (!RemoteBinaryTransferGuard.canStart(totalBytes, totalChunks)) {
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "invalid_start", "invalid binary start")
            failActiveRequest(
                if (totalBytes > RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES) {
                    context.getString(R.string.remote_file_too_large)
                } else {
                    context.getString(R.string.remote_file_image_failed)
                },
            )
            return
        }
        clearBinaryTransfer()
        val outputFile = File(previewCacheDir, "${request.requestId}_${sanitizeFileName(fileName)}")
        val stream = try {
            FileOutputStream(outputFile, false)
        } catch (e: Exception) {
            Log.e(REMOTE_TOOL_TAG, "Failed to open remote image preview cache", e)
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "io_failed", e.message ?: "io failed")
            failActiveRequest(context.getString(R.string.remote_file_image_failed))
            return
        }
        activeBinaryTransfer = ActiveBinaryTransfer(
            requestId = request.requestId,
            file = outputFile,
            outputStream = stream,
            totalBytes = totalBytes,
            totalChunks = totalChunks,
        )
        scheduleTimeout()
        messageCenter.sendRemoteToolBinaryAck(request.requestId, "start", true)
    }

    private fun handleBinaryChunk(json: JSONObject) {
        val request = activeRequest ?: return
        val transfer = activeBinaryTransfer ?: return
        if (request.requestId != json.optString("requestId") || transfer.requestId != request.requestId) return
        val index = json.optInt("index", -1)
        val data = json.optString("d")
        if (index != transfer.lastIndex + 1 || data.isEmpty()) {
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "gap", "invalid chunk sequence")
            failActiveRequest(context.getString(R.string.remote_file_image_failed))
            return
        }
        try {
            val bytes = Base64.decode(data, Base64.DEFAULT)
            if (!RemoteBinaryTransferGuard.canAcceptChunk(transfer.receivedBytes, bytes.size, transfer.totalBytes)) {
                messageCenter.sendRemoteToolBinaryAbort(request.requestId, "size_mismatch", "invalid binary size")
                failActiveRequest(context.getString(R.string.remote_file_image_failed))
                return
            }
            transfer.outputStream.write(bytes)
            transfer.receivedBytes += bytes.size.toLong()
            transfer.lastIndex = index
            scheduleTimeout()
            messageCenter.sendRemoteToolBinaryAck(request.requestId, "part", true, index)
        } catch (e: Exception) {
            Log.e(REMOTE_TOOL_TAG, "Failed to decode remote image chunk", e)
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "decode_failed", e.message ?: "decode failed")
            failActiveRequest(context.getString(R.string.remote_file_image_failed))
        }
    }

    private fun handleBinaryFinish(json: JSONObject) {
        val request = activeRequest ?: return
        val transfer = activeBinaryTransfer ?: return
        if (request.requestId != json.optString("requestId") || transfer.requestId != request.requestId) return
        val lastIndex = json.optInt("lastIndex", -1)
        if (transfer.lastIndex != transfer.totalChunks - 1 || lastIndex != transfer.totalChunks - 1) {
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "incomplete", "binary transfer incomplete")
            failActiveRequest(context.getString(R.string.remote_file_image_failed))
            return
        }
        try {
            transfer.outputStream.flush()
            transfer.outputStream.close()
            if (transfer.file.length() != transfer.totalBytes) {
                messageCenter.sendRemoteToolBinaryAbort(request.requestId, "size_mismatch", "size mismatch")
                failActiveRequest(context.getString(R.string.remote_file_image_failed))
                return
            }
            messageCenter.sendRemoteToolBinaryAck(request.requestId, "finish", true)
            _fileViewerState.value = _fileViewerState.value.copy(
                isLoading = false,
                viewMode = RemoteFileViewMode.IMAGE,
                viewerImagePath = transfer.file.absolutePath,
                viewerText = "",
                viewerErrorMessage = "",
            )
            clearActiveRequest()
            clearBinaryTransfer(keepFile = true)
            FileCacheTrimmer.trim(previewCacheDir, REMOTE_PREVIEW_CACHE_LIMIT)
        } catch (e: Exception) {
            Log.e(REMOTE_TOOL_TAG, "Failed to finalize remote image preview", e)
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "io_failed", e.message ?: "io failed")
            failActiveRequest(context.getString(R.string.remote_file_image_failed))
        }
    }

    private fun handleBinaryAbort(json: JSONObject) {
        val request = activeRequest ?: return
        if (request.requestId != json.optString("requestId")) return
        val code = json.optString("code", "unknown")
        val detail = json.optString("detail")
        val message = when (code) {
            "too_large" -> context.getString(R.string.remote_file_too_large)
            else -> if (detail.isNotBlank()) "$code: $detail" else code
        }
        failActiveRequest(message)
    }

    private fun buildRemoteFileItems(itemsJson: JSONArray?): List<RemoteFileItem> {
        if (itemsJson == null) return emptyList()
        val items = mutableListOf<RemoteFileItem>()
        for (index in 0 until itemsJson.length()) {
            val item = itemsJson.optJSONObject(index) ?: continue
            val path = item.optString("path")
            val name = item.optString("name", path.substringAfterLast("/"))
            items += RemoteFileItem(
                id = "remote-file-$index-$path",
                name = name,
                path = path,
                isDir = item.optBoolean("isDir", false),
                size = item.optString("size", "-"),
            )
        }
        return items
    }

    private fun clearBinaryTransfer(keepFile: Boolean = false) {
        val transfer = activeBinaryTransfer ?: return
        try {
            transfer.outputStream.close()
        } catch (_: Exception) {
        }
        if (!keepFile && transfer.file.exists()) {
            transfer.file.delete()
        }
        activeBinaryTransfer = null
    }

    private fun failActiveRequest(message: String) {
        val request = activeRequest
        clearActiveRequest()
        clearBinaryTransfer()
        when (request?.feature) {
            FEATURE_FILE_VIEWER -> {
                _fileViewerState.value = _fileViewerState.value.copy(
                    isLoading = false,
                    hasLoadedCurrentPath = true,
                    viewerErrorMessage = message,
                )
            }
        }
        emitMessage(message.ifBlank { context.getString(R.string.remote_tool_request_failed) })
    }

    private fun emitMessage(message: String) {
        if (message.isBlank()) return
        _messages.tryEmit(message)
    }

    private fun sanitizeFileName(value: String): String {
        return value.lowercase(Locale.ROOT).replace(Regex("[^a-z0-9._-]"), "_")
    }

    private fun cacheDirectoryListing(path: String, items: List<RemoteFileItem>) {
        directoryListingCache[path] = items
        while (directoryListingCache.size > REMOTE_FILE_CACHE_LIMIT) {
            val eldestKey = directoryListingCache.entries.firstOrNull()?.key ?: break
            directoryListingCache.remove(eldestKey)
        }
    }

    private fun normalizeRemotePath(path: String): String {
        if (path.isBlank()) return "/"
        val trimmed = if (path.length > 1 && path.endsWith("/")) path.dropLast(1) else path
        return if (trimmed.isBlank()) "/" else trimmed
    }
}
