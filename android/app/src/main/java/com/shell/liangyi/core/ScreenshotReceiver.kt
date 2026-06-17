package com.shell.liangyi.core

import android.content.Context
import android.util.Base64
import android.util.Log
import com.shell.liangyi.model.Screenshot
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject
import java.io.ByteArrayOutputStream

/**
 * 截图接收处理类
 */
class ScreenshotReceiver(
    private val context: Context,
    private val scope: CoroutineScope
) {
    companion object {
        private const val TAG = "ScreenshotReceiver"
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

    // 截图二进制分片接收会话（按 sessionId 缓存）
    private class ChunkSession(
        val shotId: String,
        val capturedAt: String,
        val total: Int
    ) {
        val parts: Array<ByteArray?> = arrayOfNulls(total)
        var receivedCount: Int = 0
    }

    private val chunkSessions = mutableMapOf<String, ChunkSession>()

    sealed class SyncState {
        object Idle : SyncState()
        object WaitingAck : SyncState()
        object Receiving : SyncState()
        data class Success(val count: Int) : SyncState()
        data class Error(val message: String) : SyncState()
    }

    init {
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
        val total = json.optInt("total", 0)
        if (sessionId.isEmpty() || total <= 0) {
            Log.w(TAG, "Invalid chunkStart")
            messageCenter.sendChunkAck(sessionId, "start", false)
            return
        }
        chunkSessions[sessionId] = ChunkSession(
            shotId = json.optString("shotId"),
            capturedAt = json.optString("capturedAt"),
            total = total
        )
        _syncState.value = SyncState.Receiving
        _receiveProgress.value = "接收中 0/$total"
        Log.d(TAG, "Chunk session start: $sessionId total=$total")
        messageCenter.sendChunkAck(sessionId, "start", true)
    }

    /**
     * 收到分片数据：解码并缓存，回 ACK
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

        try {
            val bytes = Base64.decode(data, Base64.DEFAULT)
            if (session.parts[index] == null) {
                session.parts[index] = bytes
                session.receivedCount++
            } else {
                // 重传：覆盖，不增加计数
                session.parts[index] = bytes
            }
            _receiveProgress.value = "接收中 ${session.receivedCount}/${session.total}"
            messageCenter.sendChunkAck(sessionId, "part", true, index)
        } catch (e: Exception) {
            Log.e(TAG, "chunkPart decode failed", e)
            messageCenter.sendChunkAck(sessionId, "part", false, index)
        }
    }

    /**
     * 收到分片结束：合并字节、生成截图，回 ACK
     */
    private fun handleChunkFinish(json: JSONObject) {
        val sessionId = json.optString("sessionId")
        val session = chunkSessions[sessionId]
        if (session == null) {
            Log.w(TAG, "chunkFinish: session not found $sessionId")
            messageCenter.sendChunkAck(sessionId, "finish", false)
            return
        }
        if (session.receivedCount != session.total) {
            Log.w(TAG, "chunkFinish: incomplete ${session.receivedCount}/${session.total}")
            // 不清理会话，允许重传缺失分片后再次 finish
            messageCenter.sendChunkAck(sessionId, "finish", false)
            return
        }

        try {
            val out = ByteArrayOutputStream()
            for (part in session.parts) {
                if (part != null) {
                    out.write(part)
                }
            }
            val fullBytes = out.toByteArray()
            val imageData = Base64.encodeToString(fullBytes, Base64.NO_WRAP)

            receivedCount++
            val screenshot = Screenshot(
                shotId = session.shotId,
                capturedAt = session.capturedAt,
                capturedAtUnix = System.currentTimeMillis() / 1000,
                imageData = imageData,
                index = receivedCount
            )

            val currentList = _screenshots.value.toMutableList()
            val existingIndex = currentList.indexOfFirst { it.shotId == session.shotId }
            if (existingIndex >= 0) {
                currentList[existingIndex] = screenshot
            } else {
                currentList.add(0, screenshot)
            }
            _screenshots.value = currentList

            Log.d(TAG, "Chunk session done: ${session.shotId} bytes=${fullBytes.size}")
            messageCenter.sendChunkAck(sessionId, "finish", true)
        } catch (e: Exception) {
            Log.e(TAG, "chunkFinish assemble failed", e)
            messageCenter.sendChunkAck(sessionId, "finish", false)
        } finally {
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

        for (i in 0 until screenshotsArray.length()) {
            val item = screenshotsArray.getJSONObject(i)
            pendingScreenshots.add(
                Screenshot(
                    shotId = item.optString("shotId"),
                    capturedAt = item.optString("capturedAt"),
                    index = i + 1
                )
            )
        }

        Log.d(TAG, "Sync request received: $totalCount screenshots")
        _syncState.value = SyncState.WaitingAck

        // 自动接受同步请求
        messageCenter.sendSyncAck(true)
    }

    /**
     * 处理截图数据
     */
    private suspend fun handleScreenshotData(json: JSONObject) {
        val shotId = json.optString("shotId")
        val capturedAt = json.optString("capturedAt")
        val imageData = json.optString("imageData")

        if (shotId.isEmpty() || imageData.isEmpty()) {
            Log.w(TAG, "Invalid screenshot data")
            return
        }

        receivedCount++
        _syncState.value = SyncState.Receiving
        _receiveProgress.value = "接收中 $receivedCount/$totalCount"

        // 更新或添加截图到列表
        val currentList = _screenshots.value.toMutableList()
        val existingIndex = currentList.indexOfFirst { it.shotId == shotId }

        val screenshot = Screenshot(
            shotId = shotId,
            capturedAt = capturedAt,
            capturedAtUnix = System.currentTimeMillis() / 1000,
            imageData = imageData,
            index = receivedCount
        )

        if (existingIndex >= 0) {
            currentList[existingIndex] = screenshot
        } else {
            currentList.add(0, screenshot)
        }

        _screenshots.value = currentList

        // 发送确认
        messageCenter.sendDataAck(shotId)

        Log.d(TAG, "Screenshot received: $shotId ($receivedCount/$totalCount)")
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

        val newList = mutableListOf<Screenshot>()
        for (i in 0 until screenshotsArray.length()) {
            val item = screenshotsArray.getJSONObject(i)
            newList.add(
                Screenshot(
                    shotId = item.optString("shotId"),
                    capturedAt = item.optString("capturedAt"),
                    capturedAtUnix = item.optLong("capturedAtUnix", 0),
                    index = item.optInt("index", i + 1)
                )
            )
        }

        _screenshots.value = newList
        Log.d(TAG, "Screenshot list received: ${newList.size} items")
    }

    /**
     * 请求从手表端获取截图列表
     */
    fun requestFromWatch() {
        scope.launch(Dispatchers.IO) {
            messageCenter.requestScreenshotList()
        }
    }

    /**
     * 请求特定截图
     */
    fun requestScreenshot(shotId: String) {
        scope.launch(Dispatchers.IO) {
            messageCenter.requestScreenshotData(shotId)
        }
    }

    /**
     * 删除截图
     */
    fun deleteScreenshot(shotId: String) {
        val currentList = _screenshots.value.toMutableList()
        currentList.removeAll { it.shotId == shotId }
        _screenshots.value = currentList
    }

    /**
     * 清空所有截图
     */
    fun clearAll() {
        _screenshots.value = emptyList()
    }
}
