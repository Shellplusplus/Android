package com.shell.liangyi.core

import android.content.Context
import android.util.Base64
import android.util.Log
import com.shell.liangyi.model.Screenshot
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
import java.io.RandomAccessFile

/**
 * 截图接收处理类
 */
class ScreenshotReceiver(
    private val context: Context,
    private val scope: CoroutineScope
) {
    companion object {
        private const val TAG = "ScreenshotReceiver"
        private const val REQUEST_TIMEOUT_MS = 12000L
    }

    private val messageCenter = WearMessageCenter.getInstance(context)

    // 截图列表
    private val _screenshots = MutableStateFlow<List<Screenshot>>(emptyList())
    val screenshots: StateFlow<List<Screenshot>> = _screenshots.asStateFlow()

    // 同步状态
    private val _syncState = MutableStateFlow<SyncState>(SyncState.Idle)
    val syncState: StateFlow<SyncState> = _syncState.asStateFlow()

    // 接收进度
    private val _receiveProgress = MutableStateFlow("")
    val receiveProgress: StateFlow<String> = _receiveProgress.asStateFlow()

    // 当前同步会话
    private var currentSessionId: Long = 0
    private var pendingScreenshots = mutableListOf<Screenshot>()
    private var receivedCount = 0
    private var totalCount = 0
    private var currentRequestedShotId: String? = null
    private var requestTimeoutJob: Job? = null
    private var lastTransferActivityAt: Long = 0L
    private val requestRetryCounts = mutableMapOf<String, Int>()

    private val transferRootDir: File by lazy {
        File(context.filesDir, "screenshot_sync").apply {
            if (!exists()) {
                mkdirs()
            }
        }
    }

    // HTTP 服务器（WiFi 直传）
    private val httpServer: HttpScreenshotServer by lazy {
        HttpScreenshotServer(
                        screenshotsDir = transferRootDir,
            onScreenshotReceived = { shotId, file ->
                scope.launch {
                    onHttpScreenshotReceived(shotId, file)
                }
            }
        )
    }

    /** HTTP 服务器是否在运行 */
    private val _httpServerRunning = MutableStateFlow(false)
    val httpServerRunning: StateFlow<Boolean> = _httpServerRunning.asStateFlow()

    /** HTTP 服务器本机 IP */
    private val _httpServerIp = MutableStateFlow("")
    val httpServerIp: StateFlow<String> = _httpServerIp.asStateFlow()

    /** HTTP 服务器端口 */
    private val _httpServerPort = MutableStateFlow(0)
    val httpServerPort: StateFlow<Int> = _httpServerPort.asStateFlow()

    /** 启动 HTTP 服务器，成功返回 ip:port 字符串 */
    fun startHttpServer(): String? {
        if (_httpServerRunning.value) {
            return "${_httpServerIp.value}:${_httpServerPort.value}"
        }
        return try {
            val ok = httpServer.start()
            if (ok) {
                val ip = httpServer.getWifiIp() ?: "0.0.0.0"
                _httpServerIp.value = ip
                _httpServerPort.value = httpServer.port
                _httpServerRunning.value = true
                val address = "$ip:${httpServer.port}"
                Log.i(TAG, "HTTP server ready at $address")
                notifyWatchWifiServer(address)
                address
            } else {
                null
            }
        } catch (e: Exception) {
            Log.e(TAG, "Failed to start HTTP server", e)
            null
        }
    }

    fun stopHttpServer() {
        httpServer.stop()
        _httpServerRunning.value = false
        _httpServerIp.value = ""
    }

    private fun notifyWatchWifiServer(address: String) {
        try {
            val payload = org.json.JSONObject().apply {
                put("url", "http://$address")
            }
            messageCenter.send("wifiServerInfo", payload)
            Log.i(TAG, "Notified watch of WiFi server: $address")
        } catch (e: Exception) {
            Log.w(TAG, "Failed to notify watch of WiFi server", e)
        }
    }

    private suspend fun onHttpScreenshotReceived(shotId: String, file: File) {
        Log.i(TAG, "HTTP screenshot received: $shotId (${file.length()} bytes)")
        // 重新加载列表以包含新收到的截图
        loadStoredScreenshots()
        // 如果正在等待该 shotId，标记完成
        if (currentRequestedShotId == shotId) {
            currentRequestedShotId = null
            requestTimeoutJob?.cancel()
            requestTimeoutJob = null
        }
    }

    private data class TransferProfile(
        val chunkSize: Int,
        val throttleMs: Int,
        val gcEvery: Int
    )

    private data class TransferRecord(
        val shotId: String,
        val capturedAt: String,
        val totalChunks: Int,
        val totalBytes: Long,
        val chunkSize: Int,
        val lastChunkNum: Int,
        val completed: Boolean,
        val status: String,
        val updatedAtUnix: Long
    )

    // 截图二进制分片接收会话（按 sessionId 缓存）
    private class ChunkSession(
        val shotId: String,
        val capturedAt: String,
        val total: Int,
        val totalBytes: Long,
        val chunkSize: Int,
        val tempFile: File,
        val finalFile: File,
        val outputStream: FileOutputStream,
        resumeLastChunkNum: Int
    ) {
        var lastChunkNum: Int = resumeLastChunkNum
        var receivedCount: Int = (resumeLastChunkNum + 1).coerceAtLeast(0)
        var receivedBytes: Long = if (tempFile.exists()) tempFile.length() else 0L
        val startedAtMs: Long = System.currentTimeMillis()
        var lastUiUpdateAtMs: Long = 0L
        var lastStateFlushChunkNum: Int = resumeLastChunkNum
    }

    private val chunkSessions = mutableMapOf<String, ChunkSession>()

    private fun nowUnix(): Long = System.currentTimeMillis() / 1000

    private fun parseCapturedAtUnix(shotId: String, fallback: Long = 0L): Long {
        val raw = shotId.substringBefore("#")
        if (raw.length != 14 || raw.any { !it.isDigit() }) {
            return fallback
        }
        return try {
            val year = raw.substring(0, 4).toInt()
            val month = raw.substring(4, 6).toInt()
            val day = raw.substring(6, 8).toInt()
            val hour = raw.substring(8, 10).toInt()
            val minute = raw.substring(10, 12).toInt()
            val second = raw.substring(12, 14).toInt()
            java.time.LocalDateTime.of(year, month, day, hour, minute, second)
                .atZone(java.time.ZoneId.systemDefault())
                .toEpochSecond()
        } catch (_: Exception) {
            fallback
        }
    }

    private fun formatCapturedAtFromShotId(shotId: String): String {
        val raw = shotId.substringBefore("#")
        if (raw.length != 14 || raw.any { !it.isDigit() }) {
            return ""
        }
        return try {
            val year = raw.substring(0, 4)
            val month = raw.substring(4, 6)
            val day = raw.substring(6, 8)
            val hour = raw.substring(8, 10)
            val minute = raw.substring(10, 12)
            val second = raw.substring(12, 14)
            "$year-$month-$day $hour:$minute:$second"
        } catch (_: Exception) {
            ""
        }
    }

    private fun buildDisplayTitle(shotId: String, fallbackIndex: Int): String {
        val value = shotId.ifEmpty { "#$fallbackIndex" }
        val hashIndex = value.lastIndexOf("#")
        return if (hashIndex >= 0 && hashIndex < value.length) {
            value.substring(hashIndex)
        } else {
            "#$fallbackIndex"
        }
    }

    private fun stableShotKey(shotId: String): String {
        val safe = shotId.replace(Regex("[^A-Za-z0-9._-]"), "_")
        val hash = shotId.hashCode().toUInt().toString(16)
        return "${safe}_$hash"
    }

    private fun recoverShotIdFromStoredName(fileName: String): String? {
        val baseName = fileName.substringBeforeLast(".")
        val match = Regex("""^(\d{14})_(\d+)_([0-9a-fA-F]+)$""").matchEntire(baseName) ?: return null
        return "${match.groupValues[1]}#${match.groupValues[2]}"
    }

    private fun completedFile(shotId: String): File {
        return File(transferRootDir, "${stableShotKey(shotId)}.png")
    }

    private fun partialFile(shotId: String): File {
        return File(transferRootDir, "${stableShotKey(shotId)}.part")
    }

    private fun stateFile(shotId: String): File {
        return File(transferRootDir, "${stableShotKey(shotId)}.json")
    }

    private fun safeDelete(file: File): Boolean {
        if (!file.exists()) return true
        return try {
            if (!file.delete()) {
                Log.w(TAG, "Failed to delete file: ${file.absolutePath}")
                false
            } else {
                true
            }
        } catch (e: Exception) {
            Log.w(TAG, "Failed to delete file: ${file.absolutePath}", e)
            false
        }
    }

    private fun writeTransferRecord(record: TransferRecord) {
        val state = JSONObject().apply {
            put("shotId", record.shotId)
            put("capturedAt", record.capturedAt)
            put("totalChunks", record.totalChunks)
            put("totalBytes", record.totalBytes)
            put("chunkSize", record.chunkSize)
            put("lastChunkNum", record.lastChunkNum)
            put("completed", record.completed)
            put("status", record.status)
            put("updatedAtUnix", record.updatedAtUnix)
        }
        stateFile(record.shotId).writeText(state.toString())
    }

    private fun readTransferRecord(shotId: String): TransferRecord? {
        val file = stateFile(shotId)
        if (!file.exists()) {
            return null
        }
        return try {
            val json = JSONObject(file.readText())
            TransferRecord(
                shotId = json.optString("shotId", shotId),
                capturedAt = json.optString("capturedAt"),
                totalChunks = json.optInt("totalChunks", 0),
                totalBytes = json.optLong("totalBytes", 0L),
                chunkSize = json.optInt("chunkSize", 0),
                lastChunkNum = json.optInt("lastChunkNum", -1),
                completed = json.optBoolean("completed", false),
                status = json.optString("status", if (json.optBoolean("completed", false)) "completed" else "failed"),
                updatedAtUnix = json.optLong("updatedAtUnix", 0L)
            )
        } catch (e: Exception) {
            Log.w(TAG, "Failed to read transfer record for $shotId", e)
            safeDelete(file)
            null
        }
    }

    private fun normalizeTransferRecord(record: TransferRecord): TransferRecord {
        if (record.completed || record.status == "failed") {
            return record
        }
        val normalized = record.copy(
            completed = false,
            status = "failed",
            updatedAtUnix = nowUnix()
        )
        writeTransferRecord(normalized)
        return normalized
    }

    private fun buildTransferHint(record: TransferRecord?): String {
        if (record == null || record.completed) {
            return ""
        }
        val chunkNum = (record.lastChunkNum + 1).coerceAtLeast(0)
        return if (record.totalChunks > 0 && chunkNum > 0) {
            "上次传输失败（中断于块 $chunkNum/${record.totalChunks}）"
        } else {
            "上次传输失败"
        }
    }

    private fun markTransferFailed(shotId: String, reason: String = "") {
        val existing = findExistingScreenshot(shotId)
        val record = readTransferRecord(shotId)
        val nextRecord = if (record != null) {
            record.copy(
                completed = false,
                status = "failed",
                updatedAtUnix = nowUnix()
            )
        } else {
            TransferRecord(
                shotId = shotId,
                capturedAt = existing?.capturedAt.orEmpty(),
                totalChunks = existing?.totalChunks ?: 0,
                totalBytes = existing?.totalBytes ?: 0L,
                chunkSize = 0,
                lastChunkNum = existing?.lastChunkNum ?: -1,
                completed = false,
                status = "failed",
                updatedAtUnix = nowUnix()
            )
        }
        writeTransferRecord(nextRecord)
        if (existing != null) {
            replaceScreenshotEntry(
                existing.copy(
                    displayTitle = existing.displayTitle.ifEmpty { buildDisplayTitle(existing.shotId, existing.index) },
                    lastTransferFailed = true,
                    transferHint = "上次传输失败"
                )
            )
        }
        if (reason.isNotEmpty()) {
            Log.w(TAG, "transfer failed for $shotId: $reason")
        }
    }

    private fun clearTransferState(shotId: String, keepCompletedFile: Boolean) {
        safeDelete(stateFile(shotId))
        safeDelete(partialFile(shotId))
        if (!keepCompletedFile) {
            safeDelete(completedFile(shotId))
        }
    }

    private fun hydrateStoredScreenshot(screenshot: Screenshot): Screenshot {
        val currentFile = completedFile(screenshot.shotId)
        val record = readTransferRecord(screenshot.shotId)?.let(::normalizeTransferRecord)
        if (currentFile.exists()) {
            val size = currentFile.length()
            val effectiveTotalChunks = record?.totalChunks ?: screenshot.totalChunks
            val effectiveChunkNum = record?.lastChunkNum ?: screenshot.lastChunkNum
            return screenshot.copy(
                displayTitle = screenshot.displayTitle.ifEmpty { buildDisplayTitle(screenshot.shotId, screenshot.index) },
                capturedAt = screenshot.capturedAt.ifEmpty { record?.capturedAt.orEmpty().ifEmpty { formatCapturedAtFromShotId(screenshot.shotId) } },
                capturedAtUnix = if (screenshot.capturedAtUnix != 0L) screenshot.capturedAtUnix else parseCapturedAtUnix(screenshot.shotId),
                localFilePath = currentFile.absolutePath,
                imageData = "",
                receivedBytes = size,
                totalBytes = size,
                lastChunkNum = effectiveChunkNum,
                receivedChunks = effectiveTotalChunks.coerceAtLeast(1),
                totalChunks = effectiveTotalChunks.coerceAtLeast(1),
                isComplete = true,
                lastTransferFailed = false,
                transferHint = ""
            )
        }

        val partial = partialFile(screenshot.shotId)
        if (record != null && partial.exists()) {
            return screenshot.copy(
                displayTitle = screenshot.displayTitle.ifEmpty { buildDisplayTitle(screenshot.shotId, screenshot.index) },
                capturedAt = screenshot.capturedAt.ifEmpty { record.capturedAt.ifEmpty { formatCapturedAtFromShotId(screenshot.shotId) } },
                capturedAtUnix = if (screenshot.capturedAtUnix != 0L) screenshot.capturedAtUnix else parseCapturedAtUnix(screenshot.shotId),
                lastChunkNum = record.lastChunkNum,
                receivedChunks = (record.lastChunkNum + 1).coerceAtLeast(0),
                totalChunks = record.totalChunks,
                receivedBytes = partial.length(),
                totalBytes = record.totalBytes,
                isComplete = false,
                lastTransferFailed = record.status != "completed",
                transferHint = buildTransferHint(record)
            )
        }

        return screenshot.copy(
            displayTitle = screenshot.displayTitle.ifEmpty { buildDisplayTitle(screenshot.shotId, screenshot.index) },
            capturedAt = screenshot.capturedAt.ifEmpty { record?.capturedAt.orEmpty().ifEmpty { formatCapturedAtFromShotId(screenshot.shotId) } },
            capturedAtUnix = if (screenshot.capturedAtUnix != 0L) screenshot.capturedAtUnix else parseCapturedAtUnix(screenshot.shotId),
            lastTransferFailed = record != null && record.status == "failed",
            transferHint = buildTransferHint(record)
        )
    }

    private fun loadStoredScreenshots() {
        val stateFiles = transferRootDir.listFiles { file ->
            file.isFile && file.extension.equals("json", ignoreCase = true)
        }?.toList().orEmpty()
        val loadedByShotId = linkedMapOf<String, Screenshot>()

        stateFiles.mapNotNull { file ->
            val record = try {
                val json = JSONObject(file.readText())
                TransferRecord(
                    shotId = json.optString("shotId"),
                    capturedAt = json.optString("capturedAt"),
                    totalChunks = json.optInt("totalChunks", 0),
                    totalBytes = json.optLong("totalBytes", 0L),
                    chunkSize = json.optInt("chunkSize", 0),
                    lastChunkNum = json.optInt("lastChunkNum", -1),
                    completed = json.optBoolean("completed", false),
                    status = json.optString("status", if (json.optBoolean("completed", false)) "completed" else "failed"),
                    updatedAtUnix = json.optLong("updatedAtUnix", 0L)
                )
            } catch (e: Exception) {
                Log.w(TAG, "Failed to parse stored screenshot state: ${file.name}", e)
                null
            } ?: return@mapNotNull null

            if (record.shotId.isEmpty()) {
                return@mapNotNull null
            }

            val normalized = normalizeTransferRecord(record)
            Screenshot(
                shotId = normalized.shotId,
                capturedAt = normalized.capturedAt.ifEmpty { formatCapturedAtFromShotId(normalized.shotId) },
                capturedAtUnix = parseCapturedAtUnix(normalized.shotId, normalized.updatedAtUnix),
                displayTitle = buildDisplayTitle(normalized.shotId, 0),
                index = 0,
                lastChunkNum = normalized.lastChunkNum,
                totalChunks = normalized.totalChunks
            )
        }.map { hydrateStoredScreenshot(it) }
            .forEach { screenshot ->
                loadedByShotId[screenshot.shotId] = screenshot
            }

        transferRootDir.listFiles { file ->
            file.isFile && file.extension.equals("png", ignoreCase = true)
        }?.forEach { pngFile ->
            val shotId = recoverShotIdFromStoredName(pngFile.name) ?: return@forEach
            if (loadedByShotId.containsKey(shotId)) {
                return@forEach
            }
            loadedByShotId[shotId] = Screenshot(
                shotId = shotId,
                capturedAt = formatCapturedAtFromShotId(shotId),
                capturedAtUnix = parseCapturedAtUnix(shotId, pngFile.lastModified() / 1000),
                displayTitle = buildDisplayTitle(shotId, 0),
                localFilePath = pngFile.absolutePath,
                receivedBytes = pngFile.length(),
                totalBytes = pngFile.length(),
                receivedChunks = 1,
                totalChunks = 1,
                isComplete = true
            )
        }

        _screenshots.value = sortScreenshotList(loadedByShotId.values.toList())
    }

    private fun buildSessionDisplayList(sessionShots: List<Screenshot>): List<Screenshot> {
        if (sessionShots.isEmpty()) {
            return emptyList()
        }

        val existingById = _screenshots.value.associateBy { it.shotId }
        return sessionShots.map { incoming ->
            val existing = existingById[incoming.shotId]
            val merged = if (existing == null) {
                incoming
            } else {
                incoming.copy(
                    capturedAtUnix = if (incoming.capturedAtUnix != 0L) incoming.capturedAtUnix else existing.capturedAtUnix,
                    imageData = existing.imageData,
                    localFilePath = existing.localFilePath,
                    lastChunkNum = existing.lastChunkNum,
                    receivedChunks = existing.receivedChunks,
                    totalChunks = existing.totalChunks,
                    receivedBytes = existing.receivedBytes,
                    totalBytes = existing.totalBytes,
                    isComplete = existing.isComplete,
                    lastTransferFailed = existing.lastTransferFailed,
                    transferHint = existing.transferHint,
                    displayTitle = existing.displayTitle
                )
            }
            hydrateStoredScreenshot(merged)
        }
    }

    private fun sortScreenshotList(items: List<Screenshot>): List<Screenshot> {
        return items.sortedWith(
            compareByDescending<Screenshot> { it.capturedAtUnix }
                .thenByDescending { readTransferRecord(it.shotId)?.updatedAtUnix ?: 0L }
                .thenByDescending { it.shotId }
        ).mapIndexed { index, screenshot ->
            screenshot.copy(
                index = index + 1,
                displayTitle = buildDisplayTitle(screenshot.shotId, index + 1)
            )
        }
    }

    private fun mergeWithStoredScreenshots(sessionShots: List<Screenshot>): List<Screenshot> {
        val sessionList = buildSessionDisplayList(sessionShots)
        if (sessionList.isEmpty()) {
            return sortScreenshotList(_screenshots.value)
        }

        val merged = linkedMapOf<String, Screenshot>()
        sessionList.forEach { screenshot ->
            merged[screenshot.shotId] = screenshot
        }
        _screenshots.value.forEach { screenshot ->
            if (!merged.containsKey(screenshot.shotId)) {
                merged[screenshot.shotId] = hydrateStoredScreenshot(screenshot)
            }
        }
        return sortScreenshotList(merged.values.toList())
    }

    private fun replaceScreenshotEntry(screenshot: Screenshot) {
        val currentList = _screenshots.value.toMutableList()
        val existingIndex = currentList.indexOfFirst { it.shotId == screenshot.shotId }
        if (existingIndex >= 0) {
            currentList[existingIndex] = screenshot
        } else {
            currentList.add(0, screenshot)
        }
        _screenshots.value = currentList
    }

    private fun closeChunkSession(sessionId: String) {
        val session = chunkSessions.remove(sessionId) ?: return
        try {
            session.outputStream.close()
        } catch (_: Exception) {
        }
    }

    private fun closeSessionsForShot(shotId: String) {
        val targetIds = chunkSessions.keys.filter { key ->
            val session = chunkSessions[key]
            session != null && session.shotId == shotId
        }
        for (sessionId in targetIds) {
            closeChunkSession(sessionId)
        }
    }

    private fun findExistingScreenshot(shotId: String): Screenshot? {
        return _screenshots.value.firstOrNull { it.shotId == shotId }
    }

    private fun cancelRequestTimeout() {
        requestTimeoutJob?.cancel()
        requestTimeoutJob = null
    }

    private fun markTransferActivity() {
        lastTransferActivityAt = System.currentTimeMillis()
    }

    private fun scheduleRequestTimeout(shotId: String) {
        cancelRequestTimeout()
        markTransferActivity()
        requestTimeoutJob = scope.launch(Dispatchers.IO) {
            while (currentRequestedShotId == shotId) {
                delay(1500)
                if (currentRequestedShotId != shotId) {
                    return@launch
                }
                if (System.currentTimeMillis() - lastTransferActivityAt > REQUEST_TIMEOUT_MS) {
                    val retries = requestRetryCounts[shotId] ?: 0
                    Log.w(TAG, "requestScreenshotData timeout: $shotId retries=$retries")
                    currentRequestedShotId = null
                    closeSessionsForShot(shotId)
                    if (retries < 2) {
                        requestRetryCounts[shotId] = retries + 1
                        markTransferFailed(shotId, "timeout retry=${retries + 1}")
                        requestNextPendingScreenshot()
                    } else {
                        markTransferFailed(shotId, "timeout exhausted")
                        pendingScreenshots.removeAll { it.shotId == shotId }
                        requestRetryCounts.remove(shotId)
                        requestNextPendingScreenshot()
                    }
                    return@launch
                }
            }
        }
    }

    private fun updateImageProgressText() {
        if (totalCount <= 0) {
            _receiveProgress.value = ""
            return
        }
        val completed = receivedCount.coerceAtMost(totalCount)
        val current = if (completed >= totalCount) totalCount else completed + 1
        _receiveProgress.value = "图片 $current/$totalCount"
    }

    private fun updateChunkProgressText(chunkReceived: Int, chunkTotal: Int) {
        updateChunkProgressText(chunkReceived, chunkTotal, 0L, 0L, System.currentTimeMillis())
    }

    private fun updateChunkProgressText(
        chunkReceived: Int,
        chunkTotal: Int,
        receivedBytes: Long,
        totalBytes: Long,
        startedAtMs: Long
    ) {
        val speedText = formatSpeed(receivedBytes, startedAtMs)
        val detailText = "分块 $chunkReceived/$chunkTotal  速度 $speedText"
        if (totalCount > 0) {
            val completed = receivedCount.coerceAtMost(totalCount)
            val current = if (completed >= totalCount) totalCount else completed + 1
            _receiveProgress.value = "图片 $current/$totalCount  $detailText"
            return
        }
        _receiveProgress.value = detailText
    }

    private fun formatBytes(bytes: Long): String {
        val value = bytes.toDouble()
        return when {
            value >= 1024 * 1024 -> String.format("%.1f MB", value / (1024 * 1024))
            value >= 1024 -> String.format("%.1f KB", value / 1024)
            else -> "${bytes} B"
        }
    }

    private fun formatSpeed(bytes: Long, startedAtMs: Long): String {
        val elapsedMs = (System.currentTimeMillis() - startedAtMs).coerceAtLeast(1L)
        val bytesPerSecond = bytes * 1000.0 / elapsedMs
        return when {
            bytesPerSecond >= 1024 * 1024 -> String.format("%.1f MB/s", bytesPerSecond / (1024 * 1024))
            bytesPerSecond >= 1024 -> String.format("%.1f KB/s", bytesPerSecond / 1024)
            else -> String.format("%.0f B/s", bytesPerSecond)
        }
    }

    private fun completePullSync() {
        cancelRequestTimeout()
        currentRequestedShotId = null
        requestRetryCounts.clear()
        _syncState.value = SyncState.Success(receivedCount)
        _receiveProgress.value = ""
        pendingScreenshots.clear()
        totalCount = 0
    }

    private fun chooseTransferProfile(shotId: String): TransferProfile {
        val record = readTransferRecord(shotId)
        if (record != null && !record.completed && record.chunkSize > 0) {
            val throttle = when {
                record.totalBytes >= 1024 * 1024 -> 18
                record.totalBytes >= 512 * 1024 -> 10
                else -> 6
            }
            val gcEvery = when {
                record.totalChunks >= 180 -> 4
                record.totalChunks >= 96 -> 6
                else -> 8
            }
            return TransferProfile(
                chunkSize = record.chunkSize,
                throttleMs = throttle,
                gcEvery = gcEvery
            )
        }

        return TransferProfile(
            chunkSize = 2560,
            throttleMs = 8,
            gcEvery = 8
        )
    }

    private fun resolveResumeStartIndex(shotId: String): Int {
        val rawRecord = readTransferRecord(shotId)
        if (rawRecord == null) {
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → 0 (no transfer record)")
            return 0
        }
        val record = normalizeTransferRecord(rawRecord)
        Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId raw=(lastChunk=${rawRecord.lastChunkNum}, completed=${rawRecord.completed}, status=${rawRecord.status}, totalChunks=${rawRecord.totalChunks}, totalBytes=${rawRecord.totalBytes}, chunkSize=${rawRecord.chunkSize})")
        Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId normalized=(lastChunk=${record.lastChunkNum}, completed=${record.completed}, status=${record.status})")
        if (record.completed) {
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → 0 (already completed)")
            return 0
        }
        val part = partialFile(shotId)
        if (!part.exists()) {
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → 0 (.part file not found)")
            clearTransferState(shotId, keepCompletedFile = true)
            return 0
        }
        if (record.chunkSize <= 0 || record.lastChunkNum < 0) {
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → 0 (invalid chunkSize=${record.chunkSize} or lastChunkNum=${record.lastChunkNum})")
            clearTransferState(shotId, keepCompletedFile = true)
            return 0
        }
        val expectedLength = (record.lastChunkNum + 1).toLong() * record.chunkSize.toLong()
        val partLength = part.length()
        if (partLength < expectedLength) {
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → 0 (.part length=$partLength < expected=$expectedLength, lastChunk=${record.lastChunkNum}, chunkSize=${record.chunkSize})")
            clearTransferState(shotId, keepCompletedFile = true)
            return 0
        }
        val resumeIndex = (record.lastChunkNum - 4).coerceAtLeast(0)
        Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId lastChunk=${record.lastChunkNum} → resumeIndex=$resumeIndex (back 4)")
        if (record.totalChunks > 0 && resumeIndex >= record.totalChunks) {
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → 0 (resumeIndex=$resumeIndex >= totalChunks=${record.totalChunks})")
            return 0
        }
        val keepBytes = resumeIndex.toLong() * record.chunkSize.toLong()
        try {
            RandomAccessFile(part, "rw").use { raf ->
                raf.setLength(keepBytes)
            }
            writeTransferRecord(
                record.copy(
                    lastChunkNum = resumeIndex - 1,
                    completed = false,
                    status = "failed",
                    updatedAtUnix = nowUnix()
                )
            )
            Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId truncated .part to $keepBytes bytes, updated record lastChunkNum=${resumeIndex - 1}")
        } catch (e: Exception) {
            Log.w(TAG, "Failed to prepare resume window for $shotId", e)
            clearTransferState(shotId, keepCompletedFile = true)
            return 0
        }
        Log.d(TAG, "resolveResumeStartIndex: shotId=$shotId → returning resumeIndex=$resumeIndex")
        return resumeIndex
    }

    private fun requestNextPendingScreenshot() {
        cancelRequestTimeout()

        val next = pendingScreenshots.firstOrNull() ?: run {
            completePullSync()
            return
        }

        val resumeIndex = resolveResumeStartIndex(next.shotId)
        val profile = chooseTransferProfile(next.shotId)

        currentRequestedShotId = next.shotId
        _syncState.value = SyncState.Receiving
        updateImageProgressText()
        scheduleRequestTimeout(next.shotId)
        Log.d(TAG, "requestNextPendingScreenshot: shotId=${next.shotId} startIndex=$resumeIndex chunkSize=${profile.chunkSize} throttleMs=${profile.throttleMs} gcEvery=${profile.gcEvery}")
        messageCenter.requestScreenshotData(
            shotId = next.shotId,
            startIndex = resumeIndex,
            chunkSize = profile.chunkSize,
            throttleMs = profile.throttleMs,
            gcEvery = profile.gcEvery
        )
    }

    private fun onPulledScreenshotReceived(shotId: String) {
        if (currentRequestedShotId != shotId) {
            return
        }

        cancelRequestTimeout()
        currentRequestedShotId = null
        requestRetryCounts.remove(shotId)
        pendingScreenshots.removeAll { it.shotId == shotId }
        if (pendingScreenshots.isEmpty()) {
            completePullSync()
        } else {
            requestNextPendingScreenshot()
        }
    }

    sealed class SyncState {
        object Idle : SyncState()
        object WaitingAck : SyncState()
        object Receiving : SyncState()
        data class Success(val count: Int) : SyncState()
        data class Error(val message: String) : SyncState()
    }

    init {
        loadStoredScreenshots()
        scope.launch(Dispatchers.IO) {
            messageCenter.messageFlow.collect { json ->
                handleMessage(json)
            }
        }
    }

    /**
     * 处理接收到的消息
     */
    private suspend fun handleMessage(json: JSONObject) {
        val type = json.optString("type")
        Log.d(TAG, "Received message: $type")

        when (type) {
            MessageType.SCREENSHOT_SYNC_REQUEST -> handleSyncRequest(json)
            MessageType.SCREENSHOT_DATA -> handleScreenshotData(json)
            MessageType.SCREENSHOT_CHUNK_START -> handleChunkStart(json)
            MessageType.SCREENSHOT_CHUNK_PART -> handleChunkPart(json)
            MessageType.SCREENSHOT_CHUNK_FINISH -> handleChunkFinish(json)
            MessageType.SCREENSHOT_SYNC_COMPLETE -> handleSyncComplete(json)
            MessageType.SCREENSHOT_LIST_DATA -> handleScreenshotListData(json)
        }
    }

    /**
     * 收到分片起始：建立会话并回 ACK
     */
    private fun handleChunkStart(json: JSONObject) {
        val sessionId = json.optString("sessionId")
        val shotId = json.optString("shotId")
        val total = json.optInt("total", 0)
        val totalBytes = json.optLong("size", 0L)
        val chunkSize = json.optInt("chunkSize", 0)
        val startIndex = json.optInt("startIndex", 0)
        Log.d(TAG, "handleChunkStart: shotId=$shotId startIndex=$startIndex total=$total chunkSize=$chunkSize totalBytes=$totalBytes")
        if (sessionId.isEmpty() || shotId.isEmpty() || total <= 0 || chunkSize <= 0) {
            Log.w(TAG, "Invalid chunkStart: sessionId=$sessionId shotId=$shotId total=$total chunkSize=$chunkSize")
            messageCenter.sendChunkAck(sessionId, "start", false)
            return
        }

        markTransferActivity()
        closeSessionsForShot(shotId)

        val finalFile = completedFile(shotId)
        val tempFile = partialFile(shotId)
        val resumeRecord = readTransferRecord(shotId)
        val resumeLastChunk = startIndex - 1

        if (startIndex > 0) {
            val expectedLength = startIndex.toLong() * chunkSize.toLong()
            val tempExists = tempFile.exists()
            val tempLen = if (tempExists) tempFile.length() else -1L
            val c1 = resumeRecord != null
            val c2 = resumeRecord?.completed == false
            val c3 = resumeRecord?.totalChunks == total
            val c4 = resumeRecord?.totalBytes == totalBytes
            val c5 = resumeRecord?.chunkSize == chunkSize
            val c6 = resumeRecord?.lastChunkNum == resumeLastChunk
            val c7 = tempExists
            val c8 = tempLen == expectedLength
            Log.d(TAG, "handleChunkStart resume validation for $shotId:")
            Log.d(TAG, "  [1] recordExists=$c1 lastChunk=${resumeRecord?.lastChunkNum} completed=${resumeRecord?.completed}")
            Log.d(TAG, "  [2] !completed=$c2")
            Log.d(TAG, "  [3] totalChunks==total: ${resumeRecord?.totalChunks}==$total → $c3")
            Log.d(TAG, "  [4] totalBytes==totalBytes: ${resumeRecord?.totalBytes}==$totalBytes → $c4")
            Log.d(TAG, "  [5] chunkSize==chunkSize: ${resumeRecord?.chunkSize}==$chunkSize → $c5")
            Log.d(TAG, "  [6] lastChunkNum==resumeLastChunk: ${resumeRecord?.lastChunkNum}==$resumeLastChunk → $c6")
            Log.d(TAG, "  [7] tempFileExists=$c7 tempLen=$tempLen")
            Log.d(TAG, "  [8] tempLen==expected: $tempLen==$expectedLength → $c8")
            val resumeValid = c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8
            if (!resumeValid) {
                clearTransferState(shotId, keepCompletedFile = true)
                Log.w(TAG, "Invalid resume state for $shotId startIndex=$startIndex (conditions above)")
                markTransferFailed(shotId, "invalid resume state")
                messageCenter.sendChunkAck(sessionId, "start", false)
                return
            }
            Log.d(TAG, "handleChunkStart: resume VALID for $shotId, continuing from startIndex=$startIndex")
        } else {
            Log.d(TAG, "handleChunkStart: startIndex=0, fresh transfer for $shotId")
            safeDelete(tempFile)
        }

        val outputStream = FileOutputStream(tempFile, true)

        val session = ChunkSession(
            shotId = shotId,
            capturedAt = json.optString("capturedAt"),
            total = total,
            totalBytes = totalBytes,
            chunkSize = chunkSize,
            tempFile = tempFile,
            finalFile = finalFile,
            outputStream = outputStream,
            resumeLastChunkNum = resumeLastChunk
        )

        chunkSessions[sessionId] = session
        writeTransferRecord(
            TransferRecord(
                shotId = shotId,
                capturedAt = session.capturedAt,
                totalChunks = total,
                totalBytes = totalBytes,
                chunkSize = chunkSize,
                lastChunkNum = resumeLastChunk,
                completed = false,
                status = "receiving",
                updatedAtUnix = nowUnix()
            )
        )

        val existing = findExistingScreenshot(shotId)
        replaceScreenshotEntry(
            hydrateStoredScreenshot(
                Screenshot(
                    shotId = shotId,
                    capturedAt = session.capturedAt.ifEmpty { existing?.capturedAt.orEmpty() },
                    capturedAtUnix = existing?.capturedAtUnix ?: 0L,
                    displayTitle = existing?.displayTitle ?: buildDisplayTitle(shotId, existing?.index ?: (receivedCount + 1)),
                    index = existing?.index ?: (receivedCount + 1),
                    totalChunks = total,
                    lastTransferFailed = false,
                    transferHint = ""
                )
            )
        )

        _syncState.value = SyncState.Receiving
        updateChunkProgressText(
            session.receivedCount,
            total,
            session.receivedBytes,
            totalBytes,
            session.startedAtMs
        )
        Log.d(TAG, "Chunk session start: $sessionId total=$total startIndex=$startIndex chunkSize=$chunkSize")
        messageCenter.sendChunkAck(sessionId, "start", true)
    }

    /**
     * 收到分片数据：解码后直接写入临时文件，回 ACK
     */
    private fun handleChunkPart(json: JSONObject) {
        val sessionId = json.optString("sessionId")
        val index = json.optInt("index", -1)
        val data = json.optString("d")
        val session = chunkSessions[sessionId]

        if (session == null) {
            Log.w(TAG, "chunkPart: session not found $sessionId")
            messageCenter.sendChunkAck(sessionId, "part", false, index)
            return
        }
        if (index < 0 || index >= session.total || data.isEmpty()) {
            Log.w(TAG, "chunkPart: invalid index=$index")
            messageCenter.sendChunkAck(sessionId, "part", false, index)
            return
        }
        if (index <= session.lastChunkNum) {
            messageCenter.sendChunkAck(sessionId, "part", true, index)
            return
        }
        if (index != session.lastChunkNum + 1) {
            Log.w(TAG, "chunkPart: non sequential index=$index expected=${session.lastChunkNum + 1}")
            messageCenter.sendChunkAck(sessionId, "part", false, index)
            return
        }

        try {
            val bytes = Base64.decode(data, Base64.DEFAULT)
            session.outputStream.write(bytes)
            session.lastChunkNum = index
            session.receivedCount = index + 1
            session.receivedBytes = session.tempFile.length()
            markTransferActivity()
            if (session.lastChunkNum == session.total - 1 || session.lastChunkNum - session.lastStateFlushChunkNum >= 4) {
                session.outputStream.flush()
                writeTransferRecord(
                    TransferRecord(
                        shotId = session.shotId,
                        capturedAt = session.capturedAt,
                        totalChunks = session.total,
                        totalBytes = session.totalBytes,
                        chunkSize = session.chunkSize,
                        lastChunkNum = session.lastChunkNum,
                        completed = false,
                        status = "receiving",
                        updatedAtUnix = nowUnix()
                    )
                )
                session.lastStateFlushChunkNum = session.lastChunkNum
            }
            val now = System.currentTimeMillis()
            if (index == session.total - 1 || now - session.lastUiUpdateAtMs >= 200L) {
                session.lastUiUpdateAtMs = now
                updateChunkProgressText(
                    session.receivedCount,
                    session.total,
                    session.receivedBytes,
                    session.totalBytes,
                    session.startedAtMs
                )

                val existing = findExistingScreenshot(session.shotId)
                replaceScreenshotEntry(
                    hydrateStoredScreenshot(
                        Screenshot(
                            shotId = session.shotId,
                            capturedAt = session.capturedAt.ifEmpty { existing?.capturedAt.orEmpty() },
                            capturedAtUnix = existing?.capturedAtUnix ?: 0L,
                            displayTitle = existing?.displayTitle ?: buildDisplayTitle(session.shotId, existing?.index ?: (receivedCount + 1)),
                            index = existing?.index ?: (receivedCount + 1),
                            lastChunkNum = session.lastChunkNum,
                            receivedChunks = session.receivedCount,
                            totalChunks = session.total,
                            receivedBytes = session.receivedBytes,
                            totalBytes = session.totalBytes,
                            lastTransferFailed = false,
                            transferHint = ""
                        )
                    )
                )
            }

            messageCenter.sendChunkAck(sessionId, "part", true, index)
        } catch (e: Exception) {
            Log.e(TAG, "chunkPart decode failed", e)
            markTransferFailed(session.shotId, e.message ?: "chunk decode failed")
            messageCenter.sendChunkAck(sessionId, "part", false, index)
        }
    }

    /**
     * 收到分片结束：校验并落盘完成，回 ACK
     */
    private fun handleChunkFinish(json: JSONObject) {
        val sessionId = json.optString("sessionId")
        val session = chunkSessions[sessionId]
        if (session == null) {
            Log.w(TAG, "chunkFinish: session not found $sessionId")
            messageCenter.sendChunkAck(sessionId, "finish", false)
            return
        }
        if (session.receivedCount != session.total || session.lastChunkNum != session.total - 1) {
            Log.w(TAG, "chunkFinish: incomplete ${session.receivedCount}/${session.total}")
            markTransferFailed(session.shotId, "chunk finish incomplete")
            messageCenter.sendChunkAck(sessionId, "finish", false)
            return
        }
        if (session.totalBytes > 0 && session.tempFile.length() != session.totalBytes) {
            Log.w(TAG, "chunkFinish: invalid size ${session.tempFile.length()}/${session.totalBytes}")
            markTransferFailed(session.shotId, "chunk finish invalid size")
            messageCenter.sendChunkAck(sessionId, "finish", false)
            return
        }

        try {
            session.outputStream.flush()
            session.outputStream.close()
            if (session.finalFile.exists()) {
                safeDelete(session.finalFile)
            }
            val moved = session.tempFile.renameTo(session.finalFile)
            if (!moved) {
                session.tempFile.copyTo(session.finalFile, overwrite = true)
                safeDelete(session.tempFile)
            }
            writeTransferRecord(
                TransferRecord(
                    shotId = session.shotId,
                    capturedAt = session.capturedAt,
                    totalChunks = session.total,
                    totalBytes = session.totalBytes,
                    chunkSize = session.chunkSize,
                    lastChunkNum = session.lastChunkNum,
                    completed = true,
                    status = "completed",
                    updatedAtUnix = nowUnix()
                )
            )

            receivedCount++
            val existing = findExistingScreenshot(session.shotId)
            val screenshot = Screenshot(
                shotId = session.shotId,
                capturedAt = session.capturedAt.ifEmpty { existing?.capturedAt.orEmpty() },
                capturedAtUnix = existing?.capturedAtUnix ?: (System.currentTimeMillis() / 1000),
                displayTitle = existing?.displayTitle ?: buildDisplayTitle(session.shotId, existing?.index ?: receivedCount),
                localFilePath = session.finalFile.absolutePath,
                index = existing?.index ?: receivedCount,
                lastChunkNum = session.lastChunkNum,
                receivedChunks = session.total,
                totalChunks = session.total,
                receivedBytes = session.totalBytes,
                totalBytes = session.totalBytes,
                isComplete = true,
                lastTransferFailed = false,
                transferHint = ""
            )

            replaceScreenshotEntry(screenshot)

            Log.d(TAG, "Chunk session done: ${session.shotId} bytes=${session.totalBytes}")
            messageCenter.sendChunkAck(sessionId, "finish", true)
            onPulledScreenshotReceived(session.shotId)
        } catch (e: Exception) {
            Log.e(TAG, "chunkFinish assemble failed", e)
            markTransferFailed(session.shotId, e.message ?: "chunk finish failed")
            messageCenter.sendChunkAck(sessionId, "finish", false)
        } finally {
            try {
                session.outputStream.close()
            } catch (_: Exception) {
            }
            chunkSessions.remove(sessionId)
        }
    }

    /**
     * 处理同步请求
     */
    private suspend fun handleSyncRequest(json: JSONObject) {
        val sessionId = json.optLong("sessionId", 0)
        val screenshotsArray = json.optJSONArray("screenshots")

        if (screenshotsArray == null || screenshotsArray.length() == 0) {
            Log.w(TAG, "Empty screenshot list")
            return
        }

        currentSessionId = sessionId
        pendingScreenshots.clear()
        receivedCount = 0
        totalCount = screenshotsArray.length()
        chunkSessions.clear()

        for (i in 0 until screenshotsArray.length()) {
            val item = screenshotsArray.getJSONObject(i)
            pendingScreenshots.add(
                hydrateStoredScreenshot(
                    Screenshot(
                        shotId = item.optString("shotId"),
                        capturedAt = item.optString("capturedAt"),
                        displayTitle = buildDisplayTitle(item.optString("shotId"), i + 1),
                        index = i + 1
                    )
                )
            )
        }

        _screenshots.value = mergeWithStoredScreenshots(pendingScreenshots)

        Log.d(TAG, "Sync request received: $totalCount screenshots")
        _syncState.value = SyncState.WaitingAck

        // 自动接受同步请求
        messageCenter.sendSyncAck(true)
    }

    /**
     * 处理旧协议截图数据
     */
    private suspend fun handleScreenshotData(json: JSONObject) {
        val shotId = json.optString("shotId")
        val capturedAt = json.optString("capturedAt")
        val imageData = json.optString("imageData")

        if (shotId.isEmpty() || imageData.isEmpty()) {
            Log.w(TAG, "Invalid screenshot data")
            return
        }

        try {
            val bytes = Base64.decode(imageData, Base64.DEFAULT)
            val finalFile = completedFile(shotId)
            finalFile.writeBytes(bytes)
            safeDelete(partialFile(shotId))
            writeTransferRecord(
                TransferRecord(
                    shotId = shotId,
                    capturedAt = capturedAt,
                    totalChunks = 1,
                    totalBytes = finalFile.length(),
                    chunkSize = finalFile.length().toInt().coerceAtLeast(1),
                    lastChunkNum = 0,
                    completed = true,
                    status = "completed",
                    updatedAtUnix = nowUnix()
                )
            )
            receivedCount++
            _syncState.value = SyncState.Receiving
            updateImageProgressText()
            replaceScreenshotEntry(
                Screenshot(
                    shotId = shotId,
                    capturedAt = capturedAt,
                    capturedAtUnix = System.currentTimeMillis() / 1000,
                    displayTitle = buildDisplayTitle(shotId, receivedCount),
                    localFilePath = finalFile.absolutePath,
                    index = receivedCount,
                    isComplete = true,
                    receivedBytes = finalFile.length(),
                    totalBytes = finalFile.length()
                )
            )
            messageCenter.sendDataAck(shotId)
            onPulledScreenshotReceived(shotId)
        } catch (e: Exception) {
            Log.e(TAG, "Failed to persist legacy screenshot payload", e)
        }
    }

    /**
     * 处理同步完成
     */
    private suspend fun handleSyncComplete(json: JSONObject) {
        val count = json.optInt("count", receivedCount)

        Log.d(TAG, "Sync completed: $count screenshots")
        _syncState.value = SyncState.Success(count)
        _receiveProgress.value = ""

        // 发送结果确认
        messageCenter.sendSyncResult(true, "接收完成")

        // 重置状态
        currentSessionId = 0
        pendingScreenshots.clear()
        receivedCount = 0
        totalCount = 0
    }

    /**
     * 处理截图列表数据（手机端主动请求时）
     */
    private fun handleScreenshotListData(json: JSONObject) {
        val screenshotsArray = json.optJSONArray("screenshots") ?: return

        val rawList = mutableListOf<Screenshot>()
        for (i in 0 until screenshotsArray.length()) {
            val item = screenshotsArray.getJSONObject(i)
            rawList.add(
                Screenshot(
                    shotId = item.optString("shotId"),
                    capturedAt = item.optString("capturedAt"),
                    capturedAtUnix = item.optLong("capturedAtUnix", 0),
                    displayTitle = buildDisplayTitle(item.optString("shotId"), item.optInt("index", i + 1)),
                    index = item.optInt("index", i + 1)
                )
            )
        }

        val sessionDisplayList = buildSessionDisplayList(rawList)
        pendingScreenshots = sessionDisplayList.filter { !it.isComplete || it.localFilePath.isEmpty() }.toMutableList()
        receivedCount = 0
        totalCount = pendingScreenshots.size
        chunkSessions.clear()
        currentRequestedShotId = null
        requestRetryCounts.clear()
        _screenshots.value = mergeWithStoredScreenshots(rawList)
        Log.d(TAG, "Screenshot list received: ${sessionDisplayList.size} items, pending=${pendingScreenshots.size}")

        if (pendingScreenshots.isEmpty()) {
            _syncState.value = SyncState.Success(sessionDisplayList.size)
            _receiveProgress.value = ""
            return
        }

        _syncState.value = SyncState.Receiving
        updateImageProgressText()
        requestNextPendingScreenshot()
    }

    /**
     * 请求从手表端获取截图列表
     */
    fun requestFromWatch() {
        scope.launch(Dispatchers.IO) {
            cancelRequestTimeout()
            currentRequestedShotId = null
            pendingScreenshots.clear()
            chunkSessions.clear()
            requestRetryCounts.clear()
            receivedCount = 0
            totalCount = 0
            loadStoredScreenshots()
            _syncState.value = SyncState.WaitingAck
            _receiveProgress.value = "正在获取截图列表…"
            messageCenter.requestScreenshotList()
        }
    }

    /**
     * 请求特定截图
     */
    fun requestScreenshot(shotId: String) {
        scope.launch(Dispatchers.IO) {
            val existing = completedFile(shotId)
            if (existing.exists()) {
                return@launch
            }
            val resumeIndex = resolveResumeStartIndex(shotId)
            val profile = chooseTransferProfile(shotId)
            currentRequestedShotId = shotId
            scheduleRequestTimeout(shotId)
            messageCenter.requestScreenshotData(
                shotId = shotId,
                startIndex = resumeIndex,
                chunkSize = profile.chunkSize,
                throttleMs = profile.throttleMs,
                gcEvery = profile.gcEvery
            )
        }
    }

    /**
     * 删除截图
     */
    fun deleteScreenshot(shotId: String) {
        closeSessionsForShot(shotId)
        clearTransferState(shotId, keepCompletedFile = false)
        val currentList = _screenshots.value.toMutableList()
        currentList.removeAll { it.shotId == shotId }
        _screenshots.value = currentList
        pendingScreenshots.removeAll { it.shotId == shotId }
        requestRetryCounts.remove(shotId)
    }

    /**
     * 清空所有截图
     */
    fun clearAll() {
        val activeSessionIds = chunkSessions.keys.toList()
        activeSessionIds.forEach { closeChunkSession(it) }
        transferRootDir.listFiles()?.forEach { safeDelete(it) }
        chunkSessions.clear()
        pendingScreenshots.clear()
        requestRetryCounts.clear()
        _screenshots.value = emptyList()
    }
}
