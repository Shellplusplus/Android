package com.azuma.shellplus.core

import android.content.Context
import android.util.Base64
import android.util.Log
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import org.json.JSONObject

/**
 * 消息类型常量
 */
object MessageType {
    // 手表端发起同步
    const val SCREENSHOT_SYNC_REQUEST = "screenshotSyncRequest"
    const val SCREENSHOT_SYNC_ACK = "screenshotSyncAck"
    const val SCREENSHOT_DATA = "screenshotData"
    const val SCREENSHOT_DATA_ACK = "screenshotDataAck"
    const val SCREENSHOT_SYNC_COMPLETE = "screenshotSyncComplete"
    const val SCREENSHOT_SYNC_RESULT = "screenshotSyncResult"

    // 手机端发起同步
    const val REQUEST_SCREENSHOT_LIST = "requestScreenshotList"
    const val SCREENSHOT_LIST_DATA = "screenshotListData"
    const val REQUEST_SCREENSHOT_DATA = "requestScreenshotData"
}

/**
 * 分片数据结构
 */
data class ChunkData(
    val id: String,
    val index: Int,
    val total: Int,
    val data: String,
    val encoding: String = ""
)

/**
 * 消息中心 - 管理与手表端的通信
 *
 * 注意：当前为模拟实现，需要根据实际小米穿戴 SDK 进行替换
 */
class WearMessageCenter private constructor(private val context: Context) {

    companion object {
        private const val TAG = "WearMessageCenter"
        private const val CHUNK_SIZE = 4096

        @Volatile
        private var instance: WearMessageCenter? = null

        fun getInstance(context: Context): WearMessageCenter {
            return instance ?: synchronized(this) {
                instance ?: WearMessageCenter(context.applicationContext).also { instance = it }
            }
        }
    }

    // 消息流
    private val _messageFlow = MutableSharedFlow<JSONObject>()
    val messageFlow: SharedFlow<JSONObject> = _messageFlow.asSharedFlow()

    // 分片缓冲区
    private val chunkBuffers = mutableMapOf<String, ChunkBuffer>()

    // 连接状态
    private val _connectionState = MutableSharedFlow<Boolean>()
    val connectionState: SharedFlow<Boolean> = _connectionState.asSharedFlow()

    private data class ChunkBuffer(
        var count: Int = 0,
        val total: Int,
        val parts: Array<String?>,
        val timestamp: Long = System.currentTimeMillis()
    )

    /**
     * 初始化消息中心
     */
    fun initialize() {
        Log.d(TAG, "Initializing WearMessageCenter")
        // TODO: 初始化小米穿戴 SDK
        // 这里需要根据实际 SDK 文档进行实现
    }

    /**
     * 发送消息
     */
    suspend fun send(type: String, payload: JSONObject) {
        payload.put("type", type)
        val message = payload.toString()

        if (message.length <= CHUNK_SIZE) {
            sendMessageDirect(message)
        } else {
            sendChunked(message)
        }
    }

    /**
     * 直接发送消息
     */
    private suspend fun sendMessageDirect(message: String) {
        Log.d(TAG, "Sending message: ${message.take(100)}...")
        // TODO: 通过小米穿戴 SDK 发送消息
        // MessageApi.sendMessage(message)
    }

    /**
     * 分片发送大消息
     */
    private suspend fun sendChunked(message: String) {
        val id = "chunk-${System.currentTimeMillis()}"
        val chunks = message.chunked(CHUNK_SIZE)
        val total = chunks.size

        Log.d(TAG, "Sending chunked message: ${chunks.size} chunks")

        chunks.forEachIndexed { index, chunk ->
            val chunkJson = JSONObject().apply {
                put("__c", true)
                put("id", id)
                put("i", index)
                put("t", total)
                put("d", chunk)
            }
            sendMessageDirect(chunkJson.toString())
        }
    }

    /**
     * 处理接收到的消息
     */
    fun onMessageReceived(message: String) {
        try {
            val json = JSONObject(message)

            // 检查是否为分片
            if (json.optBoolean("__c", false)) {
                handleChunk(json)
                return
            }

            // 触发消息流
            _messageFlow.tryEmit(json)
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing message: $message", e)
        }
    }

    /**
     * 处理分片数据
     */
    private fun handleChunk(json: JSONObject) {
        val id = json.optString("id")
        val index = json.optInt("i", -1)
        val total = json.optInt("t", -1)
        val data = json.optString("d")

        if (id.isEmpty() || index < 0 || total <= 0 || data.isEmpty()) {
            Log.w(TAG, "Invalid chunk data")
            return
        }

        var buffer = chunkBuffers[id]
        if (buffer == null) {
            buffer = ChunkBuffer(
                total = total,
                parts = arrayOfNulls(total)
            )
            chunkBuffers[id] = buffer
        }

        if (buffer.parts[index] != null) {
            Log.w(TAG, "Duplicate chunk: $id[$index]")
            return
        }

        buffer.parts[index] = data
        buffer.count++

        if (buffer.count == buffer.total) {
            // 所有分片到齐，组装完整消息
            val fullData = buffer.parts.joinToString("")
            chunkBuffers.remove(id)

            // 递归处理组装后的消息
            onMessageReceived(fullData)
        }
    }

    /**
     * 发送截图同步确认
     */
    suspend fun sendSyncAck(accepted: Boolean) {
        val payload = JSONObject().apply {
            put("accepted", accepted)
        }
        send(MessageType.SCREENSHOT_SYNC_ACK, payload)
    }

    /**
     * 发送截图数据确认
     */
    suspend fun sendDataAck(shotId: String) {
        val payload = JSONObject().apply {
            put("shotId", shotId)
        }
        send(MessageType.SCREENSHOT_DATA_ACK, payload)
    }

    /**
     * 发送同步结果
     */
    suspend fun sendSyncResult(success: Boolean, message: String = "") {
        val payload = JSONObject().apply {
            put("success", success)
            if (message.isNotEmpty()) {
                put("message", message)
            }
        }
        send(MessageType.SCREENSHOT_SYNC_RESULT, payload)
    }

    /**
     * 请求截图列表
     */
    suspend fun requestScreenshotList() {
        val payload = JSONObject()
        send(MessageType.REQUEST_SCREENSHOT_LIST, payload)
    }

    /**
     * 请求特定截图数据
     */
    suspend fun requestScreenshotData(shotId: String) {
        val payload = JSONObject().apply {
            put("shotId", shotId)
        }
        send(MessageType.REQUEST_SCREENSHOT_DATA, payload)
    }

    /**
     * 清理资源
     */
    fun destroy() {
        chunkBuffers.clear()
        // TODO: 清理小米穿戴 SDK 资源
    }
}
