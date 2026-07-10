package com.shell.liangyi.core

import android.content.Context
import android.util.Base64
import android.util.Log
import com.shell.liangyi.R
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

data class RemoteCacheItem(
    val id: String,
    val name: String,
    val size: String,
)

data class RemoteCacheCleanState(
    val isLoading: Boolean = false,
    val totalSize: String = "-",
    val statusText: String = "",
    val items: List<RemoteCacheItem> = emptyList(),
)

data class RemoteAppItem(
    val id: String,
    val packageName: String,
    val name: String,
    val hidden: Boolean,
    val locked: Boolean,
)

data class RemoteAppManagerState(
    val isLoading: Boolean = false,
    val apps: List<RemoteAppItem> = emptyList(),
    val selectedPackages: Set<String> = emptySet(),
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
)

class RemoteToolController(
    private val context: Context,
    private val scope: CoroutineScope,
    private val messageCenter: WearMessageCenter,
) {
    companion object {
        private const val FEATURE_FILE_VIEWER = "fileviewer"
        private const val FEATURE_CACHE_CLEAN = "cacheclean"
        private const val FEATURE_APP_MANAGER = "appmanager"
    }

    private val _fileViewerState = MutableStateFlow(RemoteFileViewerState())
    val fileViewerState: StateFlow<RemoteFileViewerState> = _fileViewerState.asStateFlow()

    private val _cacheCleanState = MutableStateFlow(
        RemoteCacheCleanState(statusText = context.getString(R.string.remote_cache_ready)),
    )
    val cacheCleanState: StateFlow<RemoteCacheCleanState> = _cacheCleanState.asStateFlow()

    private val _appManagerState = MutableStateFlow(RemoteAppManagerState())
    val appManagerState: StateFlow<RemoteAppManagerState> = _appManagerState.asStateFlow()

    private val _messages = MutableSharedFlow<String>(extraBufferCapacity = 8)
    val messages: SharedFlow<String> = _messages.asSharedFlow()

    private val previewCacheDir: File by lazy {
        File(context.cacheDir, "watch_remote_preview").apply { mkdirs() }
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
                handleMessage(json)
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
        _fileViewerState.value = RemoteFileViewerState(currentPath = "/")
        listFilePath("/", forceRefresh = true)
    }

    fun listFilePath(path: String, forceRefresh: Boolean = false) {
        val normalizedPath = normalizeRemotePath(path)
        val cachedItems = if (forceRefresh) null else directoryListingCache[normalizedPath]
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
            currentPath = normalizedPath,
            items = cachedItems ?: if (_fileViewerState.value.currentPath == normalizedPath) {
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
        _fileViewerState.value = _fileViewerState.value.copy(
            viewMode = RemoteFileViewMode.LIST,
            isLoading = false,
            viewerText = "",
            viewerImagePath = "",
            viewerErrorMessage = "",
        )
    }

    fun showFileInfo() {
        _fileViewerState.value = _fileViewerState.value.copy(
            viewMode = RemoteFileViewMode.INFO,
            isLoading = false,
            viewerErrorMessage = "",
        )
    }

    fun refreshCacheStatus() {
        if (!startRequest(FEATURE_CACHE_CLEAN, "status", expectsBinary = false)) return
        _cacheCleanState.value = _cacheCleanState.value.copy(
            isLoading = true,
            statusText = context.getString(R.string.remote_cache_loading),
        )
        sendRemoteRequest(FEATURE_CACHE_CLEAN, "status", JSONObject())
    }

    fun clearCache() {
        if (!startRequest(FEATURE_CACHE_CLEAN, "clear", expectsBinary = false)) return
        _cacheCleanState.value = _cacheCleanState.value.copy(
            isLoading = true,
            statusText = context.getString(R.string.remote_cache_clearing),
        )
        sendRemoteRequest(FEATURE_CACHE_CLEAN, "clear", JSONObject())
    }

    fun refreshApps() {
        if (!startRequest(FEATURE_APP_MANAGER, "apps", expectsBinary = false)) return
        _appManagerState.value = _appManagerState.value.copy(
            isLoading = true,
            selectedPackages = emptySet(),
        )
        sendRemoteRequest(FEATURE_APP_MANAGER, "apps", JSONObject())
    }

    fun toggleAppSelection(packageName: String) {
        if (packageName.isBlank()) return
        val state = _appManagerState.value
        val next = state.selectedPackages.toMutableSet()
        if (!next.add(packageName)) {
            next.remove(packageName)
        }
        _appManagerState.value = state.copy(selectedPackages = next)
    }

    fun toggleAllApps() {
        val selectable = _appManagerState.value.apps.filterNot { it.locked }.map { it.packageName }.toSet()
        val next = if (selectable.isNotEmpty() && selectable == _appManagerState.value.selectedPackages) {
            emptySet()
        } else {
            selectable
        }
        _appManagerState.value = _appManagerState.value.copy(selectedPackages = next)
    }

    fun hideSelectedApps() {
        performAppVisibilityMutation(visible = false, all = false)
    }

    fun showSelectedApps() {
        performAppVisibilityMutation(visible = true, all = false)
    }

    fun hideAllApps() {
        performAppVisibilityMutation(visible = false, all = true)
    }

    fun showAllApps() {
        performAppVisibilityMutation(visible = true, all = true)
    }

    fun deleteSelectedApps() {
        val packages = selectedPackagesOrNull() ?: return
        if (!startRequest(FEATURE_APP_MANAGER, "delete", expectsBinary = false)) return
        _appManagerState.value = _appManagerState.value.copy(isLoading = true)
        sendRemoteRequest(
            FEATURE_APP_MANAGER,
            "delete",
            JSONObject().apply {
                put("packages", JSONArray(packages))
            },
        )
    }

    private fun performAppVisibilityMutation(visible: Boolean, all: Boolean) {
        val packages = if (all) emptyList() else selectedPackagesOrNull() ?: return
        if (!startRequest(FEATURE_APP_MANAGER, "set_visible", expectsBinary = false)) return
        _appManagerState.value = _appManagerState.value.copy(isLoading = true)
        sendRemoteRequest(
            FEATURE_APP_MANAGER,
            "set_visible",
            JSONObject().apply {
                put("visible", visible)
                put("all", all)
                if (!all) {
                    put("packages", JSONArray(packages))
                }
            },
        )
    }

    private fun selectedPackagesOrNull(): List<String>? {
        val selected = _appManagerState.value.selectedPackages.toList()
        if (selected.isEmpty()) {
            emitMessage(context.getString(R.string.remote_app_no_selection))
            return null
        }
        return selected
    }

    private fun sendRemoteRequest(feature: String, action: String, payload: JSONObject) {
        val request = JSONObject(payload.toString()).apply {
            put("requestId", activeRequest?.requestId)
            put("feature", feature)
            put("action", action)
        }
        scheduleTimeout()
        messageCenter.send(MessageType.REMOTE_TOOL_REQUEST, request) { success, error ->
            if (!success) {
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
            FEATURE_CACHE_CLEAN -> handleCacheCleanResult(request, json)
            FEATURE_APP_MANAGER -> handleAppManagerResult(request, json)
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

    private fun handleCacheCleanResult(request: ActiveRemoteRequest, json: JSONObject) {
        val itemsJson = json.optJSONArray("items")
        _cacheCleanState.value = _cacheCleanState.value.copy(
            isLoading = false,
            totalSize = json.optString("totalSize", _cacheCleanState.value.totalSize),
            statusText = json.optString("message", _cacheCleanState.value.statusText),
            items = buildRemoteCacheItems(itemsJson),
        )
        clearActiveRequest()
        if (request.action == "clear") {
            emitMessage(context.getString(R.string.remote_cache_done))
        }
    }

    private fun handleAppManagerResult(request: ActiveRemoteRequest, json: JSONObject) {
        val apps = buildRemoteApps(json.optJSONArray("apps"))
        val selectablePackages = apps.filterNot { it.locked }.map { it.packageName }.toSet()
        val preservedSelection = _appManagerState.value.selectedPackages.intersect(selectablePackages)
        _appManagerState.value = _appManagerState.value.copy(
            isLoading = false,
            apps = apps,
            selectedPackages = preservedSelection,
        )
        clearActiveRequest()
        if (request.action != "apps") {
            emitMessage(json.optString("message", context.getString(R.string.remote_app_action_done)))
        }
    }

    private fun handleBinaryStart(json: JSONObject) {
        val request = activeRequest ?: return
        if (!request.expectsBinary || request.feature != FEATURE_FILE_VIEWER) return
        if (request.requestId != json.optString("requestId")) return
        val totalBytes = json.optLong("totalBytes", 0L)
        val totalChunks = json.optInt("totalChunks", 0)
        val fileName = json.optString("fileName", "${request.requestId}.bin")
        if (totalBytes <= 0L || totalChunks <= 0) {
            messageCenter.sendRemoteToolBinaryAbort(request.requestId, "invalid_start", "invalid binary start")
            failActiveRequest(context.getString(R.string.remote_file_image_failed))
            return
        }
        clearBinaryTransfer()
        val outputFile = File(previewCacheDir, "${request.requestId}_${sanitizeFileName(fileName)}")
        val stream = FileOutputStream(outputFile, false)
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
            transfer.outputStream.write(bytes)
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

    private fun buildRemoteCacheItems(itemsJson: JSONArray?): List<RemoteCacheItem> {
        if (itemsJson == null) return emptyList()
        val items = mutableListOf<RemoteCacheItem>()
        for (index in 0 until itemsJson.length()) {
            val item = itemsJson.optJSONObject(index) ?: continue
            val path = item.optString("path")
            items += RemoteCacheItem(
                id = "remote-cache-$index-$path",
                name = item.optString("name", path.substringAfterLast("/")),
                size = item.optString("size", "-"),
            )
        }
        return items
    }

    private fun buildRemoteApps(itemsJson: JSONArray?): List<RemoteAppItem> {
        if (itemsJson == null) return emptyList()
        val items = mutableListOf<RemoteAppItem>()
        for (index in 0 until itemsJson.length()) {
            val item = itemsJson.optJSONObject(index) ?: continue
            val packageName = item.optString("package")
            items += RemoteAppItem(
                id = "remote-app-$index-$packageName",
                packageName = packageName,
                name = item.optString("name", packageName),
                hidden = item.optBoolean("hidden", false),
                locked = item.optBoolean("locked", false),
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
                    viewerErrorMessage = message,
                )
            }

            FEATURE_CACHE_CLEAN -> {
                _cacheCleanState.value = _cacheCleanState.value.copy(
                    isLoading = false,
                    statusText = message,
                )
            }

            FEATURE_APP_MANAGER -> {
                _appManagerState.value = _appManagerState.value.copy(isLoading = false)
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
