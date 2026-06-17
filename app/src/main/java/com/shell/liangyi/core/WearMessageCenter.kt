package com.shell.liangyi.core

import android.content.Context
import android.util.Base64
import android.util.Log
import com.xiaomi.xms.wearable.Wearable
import com.xiaomi.xms.wearable.auth.AuthApi
import com.xiaomi.xms.wearable.auth.Permission
import com.xiaomi.xms.wearable.message.MessageApi
import com.xiaomi.xms.wearable.message.OnMessageReceivedListener
import com.xiaomi.xms.wearable.node.Node
import com.xiaomi.xms.wearable.node.NodeApi
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.asSharedFlow
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.util.concurrent.ConcurrentHashMap

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

    // 截图二进制分片自有协议（手表 -> 手机）
    const val SCREENSHOT_CHUNK_START = "screenshotChunkStart"
    const val SCREENSHOT_CHUNK_PART = "screenshotChunkPart"
    const val SCREENSHOT_CHUNK_FINISH = "screenshotChunkFinish"
    const val SCREENSHOT_CHUNK_ACK = "screenshotChunkAck"

    // 手机端发起同步
    const val REQUEST_SCREENSHOT_LIST = "requestScreenshotList"
    const val SCREENSHOT_LIST_DATA = "screenshotListData"
    const val REQUEST_SCREENSHOT_DATA = "requestScreenshotData"

    // 连接状态
    const val HEARTBEAT = "heartbeat"
    const val HEARTBEAT_ACK = "heartbeatAck"
}

/**
 * 连接状态
 */
enum class ConnectionState {
    DISCONNECTED,  // 未连接
    CONNECTING,    // 连接中
    CONNECTED,     // 已连接
    ERROR          // 连接错误
}

/**
 * 日志条目
 */
data class LogEntry(
    val timestamp: Long = System.currentTimeMillis(),
    val direction: String,  // "SEND" / "RECEIVE" / "SYSTEM" / "ERROR"
    val type: String,
    val message: String = ""
)

/**
 * 消息中心 - 管理与手表端（Vela 快应用）的通信
 *
 * 通过小米穿戴 SDK（com.xiaomi.xms.wearable）与手表端建立连接：
 * 发现已连接设备 -> 申请/校验权限 -> 注册消息监听器 -> 收发消息。
 * 实现参考 varclass 中已验证可用的 WearMessageCenter 写法。
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

    // 消息流（用 extraBufferCapacity 避免订阅者尚未就绪时丢消息）
    private val _messageFlow = MutableSharedFlow<JSONObject>(extraBufferCapacity = 64)
    val messageFlow: SharedFlow<JSONObject> = _messageFlow.asSharedFlow()

    // 连接状态（replay=1，新订阅者可立即拿到最新状态）
    private val _connectionState = MutableSharedFlow<ConnectionState>(
        replay = 1,
        extraBufferCapacity = 8
    )
    val connectionState: SharedFlow<ConnectionState> = _connectionState.asSharedFlow()

    // 日志（replay=1，调试面板订阅时可立即拿到当前日志）
    private val _logs = MutableSharedFlow<List<LogEntry>>(replay = 1, extraBufferCapacity = 8)
    val logs: SharedFlow<List<LogEntry>> = _logs.asSharedFlow()
    private val logEntries = mutableListOf<LogEntry>()
    private val maxLogEntries = 100

    // 分片缓冲区
    private val chunkBuffers = ConcurrentHashMap<String, ChunkBuffer>()

    // 小米穿戴 SDK
    private var nodeApi: NodeApi? = null
    private var messageApi: MessageApi? = null
    private var authApi: AuthApi? = null
    private var currentNode: Node? = null
    private var hasDevicePermission = false
    private var listenerRegistered = false

    @Volatile
    private var currentState: ConnectionState = ConnectionState.DISCONNECTED

    // 心跳定时器
    private var heartbeatTimer: java.util.Timer? = null
    private var lastHeartbeatAck: Long = 0

    private class ChunkBuffer(
        val total: Int,
        val parts: Array<ByteArray?>,
        var count: Int = 0,
        val timestamp: Long = System.currentTimeMillis()
    )

    // 全局消息监听器：收到字节 -> 转字符串 -> 走统一处理逻辑
    private val messageListener = OnMessageReceivedListener { nodeId, bytes ->
        try {
            val text = String(bytes, Charsets.UTF_8)
            Log.d(TAG, "onMessageReceived nodeId=$nodeId length=${text.length}")
            onMessageReceived(text)
        } catch (e: Throwable) {
            Log.e(TAG, "消息监听器内部异常", Exception(e))
            addLog("ERROR", "listener_error", e.message ?: "Unknown error")
        }
    }

    /**
     * 初始化消息中心：获取 SDK，发现设备并完成权限/监听器注册
     */
    fun initialize() {
        Log.d(TAG, "Initializing WearMessageCenter")
        addLog("SYSTEM", "init", "消息中心初始化")

        nodeApi = Wearable.getNodeApi(context)
        messageApi = Wearable.getMessageApi(context)
        authApi = Wearable.getAuthApi(context)

        updateState(ConnectionState.CONNECTING)
        discoverAndRegister(force = false)
    }

    /**
     * 保活：每次界面可见时调用，重新检查设备连接并确保监听器注册
     */
    fun ensureConnection() {
        if (nodeApi == null) {
            // 尚未初始化，先初始化
            initialize()
            return
        }
        addLog("SYSTEM", "ensure", "执行连接保活检查")
        discoverAndRegister(force = true)
    }

    /**
     * 发现已连接设备，并在成功后完成权限校验与监听器注册
     */
    private fun discoverAndRegister(force: Boolean) {
        val api = nodeApi ?: return
        api.connectedNodes
            .addOnSuccessListener { nodes ->
                if (nodes.isNullOrEmpty()) {
                    Log.w(TAG, "当前没有已连接设备")
                    addLog("SYSTEM", "no_device", "当前没有已连接设备")
                    currentNode = null
                    hasDevicePermission = false
                    listenerRegistered = false
                    updateState(ConnectionState.DISCONNECTED)
                    return@addOnSuccessListener
                }
                val node = nodes[0]
                if (currentNode?.id != node.id) {
                    addLog("SYSTEM", "device", "找到设备 ${node.name} (${node.id})")
                    // 设备发生变化，之前的权限与监听状态作废
                    hasDevicePermission = false
                    listenerRegistered = false
                }
                currentNode = node
                ensurePermissionAndRegister(force)
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "获取已连接设备失败", e)
                addLog("ERROR", "connected_nodes", e.message ?: "获取设备失败")
                updateState(ConnectionState.ERROR)
            }
    }

    // ================= 权限 & 注册监听 =================

    private fun ensurePermissionAndRegister(force: Boolean) {
        val node = currentNode ?: return
        if (hasDevicePermission) {
            registerListenerIfNeeded(force)
            return
        }
        val api = authApi ?: return
        val permissions = arrayOf(Permission.DEVICE_MANAGER, Permission.NOTIFY)

        addLog("SYSTEM", "permission", "检查穿戴权限中")
        api.checkPermissions(node.id, permissions)
            .addOnSuccessListener { results ->
                val allGranted = results != null && results.all { it == true }
                if (allGranted) {
                    hasDevicePermission = true
                    addLog("SYSTEM", "permission", "已具备必要权限")
                    registerListenerIfNeeded(force)
                } else {
                    requestPermission(node)
                }
            }
            .addOnFailureListener { e ->
                Log.w(TAG, "检查权限失败，尝试申请", e)
                addLog("SYSTEM", "permission", "检查权限失败，尝试申请")
                requestPermission(node)
            }
    }

    private fun requestPermission(node: Node) {
        val api = authApi ?: return
        api.requestPermission(node.id, Permission.DEVICE_MANAGER, Permission.NOTIFY)
            .addOnSuccessListener { granted ->
                if (granted != null && granted.isNotEmpty()) {
                    hasDevicePermission = true
                    addLog("SYSTEM", "permission", "权限申请成功")
                    registerListenerIfNeeded(force = true)
                } else {
                    addLog("ERROR", "permission", "用户未授予必要权限")
                    updateState(ConnectionState.ERROR)
                }
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "申请权限失败", e)
                addLog("ERROR", "permission", e.message ?: "申请权限失败")
                updateState(ConnectionState.ERROR)
            }
    }

    private fun registerListenerIfNeeded(force: Boolean) {
        if (listenerRegistered && !force) {
            updateState(ConnectionState.CONNECTED)
            return
        }
        val node = currentNode ?: return
        val api = messageApi ?: return

        // 先移除旧监听器，无论成功失败都重新注册（避免重复注册报错）
        val doRegister = {
            api.addListener(node.id, messageListener)
                .addOnSuccessListener {
                    listenerRegistered = true
                    addLog("SYSTEM", "listener", "消息监听器注册成功")
                    updateState(ConnectionState.CONNECTED)
                }
                .addOnFailureListener { e ->
                    if (e.message?.contains("registered") == true) {
                        // 监听器其实已存在，视为成功
                        listenerRegistered = true
                        addLog("SYSTEM", "listener", "监听器已存在（忽略报错）")
                        updateState(ConnectionState.CONNECTED)
                    } else {
                        listenerRegistered = false
                        addLog("ERROR", "listener", e.message ?: "监听器注册失败")
                        updateState(ConnectionState.ERROR)
                    }
                }
        }

        val task = api.removeListener(node.id)
        task.addOnSuccessListener { doRegister() }
        task.addOnFailureListener { doRegister() }
    }

    private fun updateState(state: ConnectionState) {
        currentState = state
        _connectionState.tryEmit(state)
    }

    /**
     * 添加日志
     */
    private fun addLog(direction: String, type: String, message: String = "") {
        val entry = LogEntry(
            direction = direction,
            type = type,
            message = message
        )
        synchronized(logEntries) {
            logEntries.add(0, entry)
            if (logEntries.size > maxLogEntries) {
                logEntries.removeAt(logEntries.lastIndex)
            }
            _logs.tryEmit(logEntries.toList())
        }
    }

    /**
     * 清空日志
     */
    fun clearLogs() {
        synchronized(logEntries) {
            logEntries.clear()
            _logs.tryEmit(emptyList())
        }
    }

    /**
     * 获取当前连接状态
     */
    fun getCurrentConnectionState(): ConnectionState = currentState

    /**
     * 启动心跳
     */
    fun startHeartbeat() {
        stopHeartbeat()
        heartbeatTimer = java.util.Timer()
        heartbeatTimer?.schedule(object : java.util.TimerTask() {
            override fun run() {
                sendHeartbeat()
            }
        }, 0, 5000) // 每5秒发送一次心跳
    }

    /**
     * 停止心跳
     */
    fun stopHeartbeat() {
        heartbeatTimer?.cancel()
        heartbeatTimer = null
    }

    /**
     * 发送心跳
     */
    fun sendHeartbeat() {
        val payload = JSONObject().apply {
            put("timestamp", System.currentTimeMillis() / 1000)
        }
        send(MessageType.HEARTBEAT, payload)
    }

    /**
     * 发送消息（自动补充 type 字段，超过单包上限时分片发送）
     */
    fun send(type: String, payload: JSONObject) {
        payload.put("type", type)
        val message = payload.toString()
        addLog("SEND", type, message.take(200))

        if (message.length <= CHUNK_SIZE) {
            sendRaw(message.toByteArray(Charsets.UTF_8))
        } else {
            sendChunked(message)
        }
    }

    /**
     * 通过小米穿戴 SDK 发送原始字节
     */
    private fun sendRaw(bytes: ByteArray) {
        val node = currentNode
        val api = messageApi
        if (node == null || api == null) {
            Log.w(TAG, "发送失败：当前无已连接设备")
            addLog("ERROR", "send", "发送失败：当前无已连接设备")
            return
        }
        api.sendMessage(node.id, bytes)
            .addOnFailureListener { e ->
                Log.e(TAG, "消息发送失败", e)
                addLog("ERROR", "send", e.message ?: "消息发送失败")
            }
    }

    /**
     * 分片发送大消息
     */
    private fun sendChunked(message: String) {
        val id = "chunk-${System.currentTimeMillis()}"
        val chunks = message.chunked(CHUNK_SIZE)
        val total = chunks.size
        Log.d(TAG, "Sending chunked message: $total chunks")

        chunks.forEachIndexed { index, chunk ->
            val chunkJson = JSONObject().apply {
                put("__c", true)
                put("id", id)
                put("i", index)
                put("t", total)
                put("d", chunk)
            }
            sendRaw(chunkJson.toString().toByteArray(Charsets.UTF_8))
        }
    }

    /**
     * 处理接收到的消息
     */
    fun onMessageReceived(message: String) {
        try {
            // 仅在像 JSON 时才解析，避免把普通文本误判
            if (!message.trim().startsWith("{")) {
                addLog("RECEIVE", "text", message.take(200))
                return
            }
            val json = JSONObject(message)

            // 检查是否为分片
            if (json.optBoolean("__c", false)) {
                handleChunk(json)
                return
            }

            val type = json.optString("type", "unknown")
            addLog("RECEIVE", type, message.take(200))

            // 处理心跳响应
            if (type == MessageType.HEARTBEAT_ACK) {
                lastHeartbeatAck = System.currentTimeMillis()
                updateState(ConnectionState.CONNECTED)
            }

            // 触发消息流
            _messageFlow.tryEmit(json)
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing message: ${message.take(100)}", e)
            addLog("ERROR", "parse_error", e.message ?: "Unknown error")
        }
    }

    /**
     * 处理分片数据（支持 base64 编码的分片，e="b64"）
     */
    private fun handleChunk(json: JSONObject) {
        try {
            val id = json.optString("id")
            val index = json.optInt("i", -1)
            val total = json.optInt("t", -1)
            val data = json.optString("d")

            if (id.isEmpty() || index < 0 || total <= 0 || index >= total || data.isEmpty()) {
                Log.w(TAG, "Invalid chunk data")
                addLog("ERROR", "chunk", "非法分片 id=$id i=$index t=$total")
                return
            }

            val partBytes = if (json.optString("e") == "b64") {
                Base64.decode(data, Base64.DEFAULT)
            } else {
                data.toByteArray(Charsets.UTF_8)
            }

            val buffer = chunkBuffers.getOrPut(id) {
                ChunkBuffer(total = total, parts = arrayOfNulls(total))
            }

            synchronized(buffer) {
                if (buffer.parts[index] == null) {
                    buffer.parts[index] = partBytes
                    buffer.count++
                }

                if (buffer.count == buffer.total) {
                    chunkBuffers.remove(id)
                    val out = ByteArrayOutputStream()
                    for (part in buffer.parts) {
                        if (part != null) out.write(part)
                    }
                    val fullText = out.toByteArray().toString(Charsets.UTF_8)
                    Log.d(TAG, "分片消息组装完成 id=$id length=${fullText.length}")
                    // 递归处理组装后的完整消息
                    onMessageReceived(fullText)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "处理分片消息失败", e)
            addLog("ERROR", "chunk", e.message ?: "处理分片失败")
        }
    }

    /**
     * 发送截图同步确认
     */
    fun sendSyncAck(accepted: Boolean) {
        val payload = JSONObject().apply {
            put("accepted", accepted)
        }
        send(MessageType.SCREENSHOT_SYNC_ACK, payload)
    }

    /**
     * 发送截图数据确认
     */
    fun sendDataAck(shotId: String) {
        val payload = JSONObject().apply {
            put("shotId", shotId)
        }
        send(MessageType.SCREENSHOT_DATA_ACK, payload)
    }

    /**
     * 发送同步结果
     */
    fun sendSyncResult(success: Boolean, message: String = "") {
        val payload = JSONObject().apply {
            put("success", success)
            if (message.isNotEmpty()) {
                put("message", message)
            }
        }
        send(MessageType.SCREENSHOT_SYNC_RESULT, payload)
    }

    /**
     * 发送截图分片 ACK（自有分片协议）
     */
    fun sendChunkAck(sessionId: String, phase: String, ok: Boolean, index: Int = -1) {
        val payload = JSONObject().apply {
            put("sessionId", sessionId)
            put("phase", phase)
            put("ok", ok)
            if (index >= 0) {
                put("index", index)
            }
        }
        send(MessageType.SCREENSHOT_CHUNK_ACK, payload)
    }

    /**
     * 请求截图列表
     */
    fun requestScreenshotList() {
        send(MessageType.REQUEST_SCREENSHOT_LIST, JSONObject())
    }

    /**
     * 请求特定截图数据
     */
    fun requestScreenshotData(shotId: String) {
        val payload = JSONObject().apply {
            put("shotId", shotId)
        }
        send(MessageType.REQUEST_SCREENSHOT_DATA, payload)
    }

    /**
     * 清理资源
     */
    fun destroy() {
        stopHeartbeat()
        chunkBuffers.clear()
        val node = currentNode
        val api = messageApi
        if (node != null && api != null) {
            try {
                api.removeListener(node.id)
            } catch (e: Exception) {
                Log.w(TAG, "移除监听器失败", e)
            }
        }
        listenerRegistered = false
        addLog("SYSTEM", "destroy", "消息中心销毁")
    }
}
