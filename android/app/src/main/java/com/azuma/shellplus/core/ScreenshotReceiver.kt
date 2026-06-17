package com.azuma.shellplus.core

import android.content.Context
import android.util.Log
import com.azuma.shellplus.model.Screenshot
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject

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
            MessageType.SCREENSHOT_SYNC_COMPLETE -> handleSyncComplete(json)
            MessageType.SCREENSHOT_LIST_DATA -> handleScreenshotListData(json)
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
