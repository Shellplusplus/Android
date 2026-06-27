package com.shell.liangyi.core

import android.content.Context
import android.content.pm.PackageManager
import android.os.Handler
import android.os.Looper
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
import java.util.Timer
import java.util.TimerTask
import java.util.concurrent.ConcurrentHashMap

/**
 * 消息类型常量
 */
object MessageType {
    const val HANDSHAKE = "__hs__"

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

    // 连接保活
    const val HEARTBEAT = "heartbeat"
    const val HEARTBEAT_ACK = "heartbeatAck"
}

/**
 * 连接状态
 */
enum class ConnectionState {
    DISCONNECTED,
    CONNECTING,
    CONNECTED,
    ERROR
}

/**
 * 日志条目
 */
data class LogEntry(
    val timestamp: Long = System.currentTimeMillis(),
    val direction: String,
    val type: String,
    val message: String = ""
)

/**
 * 消息中心 - 管理与手表端（Vela 快应用）的通信。
 *
 * 连接流程按参考项目重构：
 * 发现设备 -> 校验权限 -> 注册监听器 -> 拉起手表快应用 -> 握手成功 -> 进入 CONNECTED。
 * 只有握手成功后，业务消息才允许发送。
 */
class WearMessageCenter private constructor(private val context: Context) {

    companion object {
        private const val TAG = "WearMessageCenter"
        private const val CHUNK_SIZE = 4096
        private const val WEAR_APP_ENTRY_URI = "/pages/index"
        private const val HANDSHAKE_TIMEOUT_MS = 3000L
        private const val HEARTBEAT_INTERVAL_MS = 5000L
        private const val HEARTBEAT_TIMEOUT_MS = 12000L
        private const val RECONNECT_DELAY_MS = 5000L

        @Volatile
        private var instance: WearMessageCenter? = null

        fun getInstance(context: Context): WearMessageCenter {
            return instance ?: synchronized(this) {
                instance ?: WearMessageCenter(context.applicationContext).also { instance = it }
            }
        }
    }

    private val _messageFlow = MutableSharedFlow<JSONObject>(extraBufferCapacity = 64)
    val messageFlow: SharedFlow<JSONObject> = _messageFlow.asSharedFlow()

    private val _connectionState = MutableSharedFlow<ConnectionState>(
        replay = 1,
        extraBufferCapacity = 8
    )
    val connectionState: SharedFlow<ConnectionState> = _connectionState.asSharedFlow()

    private val _logs = MutableSharedFlow<List<LogEntry>>(replay = 1, extraBufferCapacity = 8)
    val logs: SharedFlow<List<LogEntry>> = _logs.asSharedFlow()
    private val logEntries = mutableListOf<LogEntry>()
    private val maxLogEntries = 100

    private val chunkBuffers = ConcurrentHashMap<String, ChunkBuffer>()
    private val pendingReadyCallbacks = mutableListOf<(Boolean) -> Unit>()
    private val mainHandler = Handler(Looper.getMainLooper())
    private val appVersionCode by lazy { resolveAppVersionCode() }

    private var nodeApi: NodeApi? = null
    private var messageApi: MessageApi? = null
    private var authApi: AuthApi? = null
    private var currentNode: Node? = null
    private var hasDevicePermission = false
    private var listenerRegistered = false

    @Volatile
    private var currentState: ConnectionState = ConnectionState.DISCONNECTED
    @Volatile
    private var handshaked = false
    @Volatile
    private var handshakeInProgress = false

    private var heartbeatTimer: Timer? = null
    private var lastHeartbeatAck: Long = 0
    private var handshakeTimeoutRunnable: Runnable? = null
    private var reconnectRunnable: Runnable? = null

    private class ChunkBuffer(
        val total: Int,
        val parts: Array<ByteArray?>,
        var count: Int = 0
    )

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

    fun initialize() {
        Log.d(TAG, "Initializing WearMessageCenter")
        addLog("SYSTEM", "init", "消息中心初始化")

        nodeApi = Wearable.getNodeApi(context)
        messageApi = Wearable.getMessageApi(context)
        authApi = Wearable.getAuthApi(context)

        ensureSession(force = false)
    }

    fun ensureConnection() {
        if (nodeApi == null || messageApi == null || authApi == null) {
            initialize()
            return
        }
        addLog("SYSTEM", "ensure", "执行连接保活检查")
        ensureSession(force = true)
    }

    private fun ensureSession(force: Boolean, onReady: (Boolean) -> Unit = {}) {
        synchronized(this) {
            if (handshaked && currentState == ConnectionState.CONNECTED && !force) {
                onReady(true)
                return
            }
            pendingReadyCallbacks.add(onReady)
            if (handshakeInProgress) {
                return
            }
            handshakeInProgress = true
        }
        updateState(ConnectionState.CONNECTING)
        discoverAndPrepare(force)
    }

    private fun finishPendingReady(success: Boolean) {
        val callbacks = synchronized(this) {
            val copy = pendingReadyCallbacks.toList()
            pendingReadyCallbacks.clear()
            copy
        }
        callbacks.forEach { callback ->
            try {
                callback(success)
            } catch (_: Throwable) {
            }
        }
    }

    private fun discoverAndPrepare(force: Boolean) {
        val api = nodeApi
        if (api == null) {
            markDisconnected(ConnectionState.ERROR, "NodeApi 未初始化")
            return
        }

        api.connectedNodes
            .addOnSuccessListener { nodes ->
                if (nodes.isNullOrEmpty()) {
                    currentNode = null
                    hasDevicePermission = false
                    listenerRegistered = false
                    markDisconnected(ConnectionState.DISCONNECTED, "当前没有已连接设备")
                    return@addOnSuccessListener
                }

                val node = nodes[0]
                if (currentNode?.id != node.id) {
                    addLog("SYSTEM", "device", "找到设备 ${node.name} (${node.id})")
                    hasDevicePermission = false
                    listenerRegistered = false
                }
                currentNode = node
                ensurePermissionThenPrepare(force)
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "获取已连接设备失败", e)
                markDisconnected(ConnectionState.ERROR, e.message ?: "获取设备失败")
            }
    }

    private fun ensurePermissionThenPrepare(force: Boolean) {
        val node = currentNode ?: run {
            markDisconnected(ConnectionState.ERROR, "当前设备为空")
            return
        }
        if (hasDevicePermission) {
            prepareWearAppSession(force)
            return
        }

        val api = authApi ?: run {
            markDisconnected(ConnectionState.ERROR, "AuthApi 未初始化")
            return
        }
        val permissions = arrayOf(Permission.DEVICE_MANAGER, Permission.NOTIFY)

        addLog("SYSTEM", "permission", "检查穿戴权限中")
        api.checkPermissions(node.id, permissions)
            .addOnSuccessListener { results ->
                val allGranted = results != null && results.all { it == true }
                if (allGranted) {
                    hasDevicePermission = true
                    addLog("SYSTEM", "permission", "已具备必要权限")
                    prepareWearAppSession(force)
                } else {
                    requestPermission(node, force)
                }
            }
            .addOnFailureListener {
                requestPermission(node, force)
            }
    }

    private fun requestPermission(node: Node, force: Boolean) {
        val api = authApi ?: run {
            markDisconnected(ConnectionState.ERROR, "AuthApi 未初始化")
            return
        }

        api.requestPermission(node.id, Permission.DEVICE_MANAGER, Permission.NOTIFY)
            .addOnSuccessListener { granted ->
                if (granted != null && granted.isNotEmpty()) {
                    hasDevicePermission = true
                    addLog("SYSTEM", "permission", "权限申请成功")
                    prepareWearAppSession(force)
                } else {
                    markDisconnected(ConnectionState.ERROR, "用户未授予必要权限")
                }
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "申请权限失败", e)
                markDisconnected(ConnectionState.ERROR, e.message ?: "申请权限失败")
            }
    }

    private fun prepareWearAppSession(force: Boolean) {
        registerListenerIfNeeded(force) { success ->
            if (!success) {
                markDisconnected(ConnectionState.ERROR, "消息监听器注册失败")
                return@registerListenerIfNeeded
            }
            launchWearApp {
                startHandshake()
            }
        }
    }

    private fun registerListenerIfNeeded(force: Boolean, onDone: (Boolean) -> Unit) {
        if (listenerRegistered && !force) {
            onDone(true)
            return
        }

        val node = currentNode
        val api = messageApi
        if (node == null || api == null) {
            onDone(false)
            return
        }

        val doRegister = {
            api.addListener(node.id, messageListener)
                .addOnSuccessListener {
                    listenerRegistered = true
                    addLog("SYSTEM", "listener", "消息监听器注册成功")
                    onDone(true)
                }
                .addOnFailureListener { e ->
                    if (e.message?.contains("registered") == true) {
                        listenerRegistered = true
                        addLog("SYSTEM", "listener", "监听器已存在（忽略报错）")
                        onDone(true)
                    } else {
                        listenerRegistered = false
                        addLog("ERROR", "listener", e.message ?: "监听器注册失败")
                        onDone(false)
                    }
                }
        }

        api.removeListener(node.id)
            .addOnSuccessListener { doRegister() }
            .addOnFailureListener { doRegister() }
    }

    private fun launchWearApp(onComplete: () -> Unit) {
        val node = currentNode
        val api = nodeApi
        if (node == null || api == null) {
            onComplete()
            return
        }

        api.launchWearApp(node.id, WEAR_APP_ENTRY_URI)
            .addOnSuccessListener {
                addLog("SYSTEM", "launch", "已拉起手表快应用")
                onComplete()
            }
            .addOnFailureListener { e ->
                addLog("SYSTEM", "launch", "拉起手表快应用失败，继续尝试握手: ${e.message ?: "unknown"}")
                onComplete()
            }
    }

    private fun startHandshake() {
        clearHandshakeTimeout()

        val timeoutRunnable = Runnable {
            addLog("ERROR", "handshake", "握手超时")
            markDisconnected(ConnectionState.DISCONNECTED, "手表快应用未响应握手")
        }
        handshakeTimeoutRunnable = timeoutRunnable
        mainHandler.postDelayed(timeoutRunnable, HANDSHAKE_TIMEOUT_MS)

        val payload = JSONObject().apply {
            put("count", 0)
            put("version", appVersionCode)
        }
        sendDirect(MessageType.HANDSHAKE, payload, logTraffic = false) { success, error ->
            if (!success) {
                markDisconnected(ConnectionState.ERROR, error?.message ?: "发送握手失败")
            }
        }
    }

    private fun clearHandshakeTimeout() {
        handshakeTimeoutRunnable?.let { mainHandler.removeCallbacks(it) }
        handshakeTimeoutRunnable = null
    }

    private fun confirmConnected() {
        val wasConnected = handshaked && currentState == ConnectionState.CONNECTED
        clearHandshakeTimeout()
        cancelReconnect()
        handshakeInProgress = false
        handshaked = true
        lastHeartbeatAck = System.currentTimeMillis()
        if (!wasConnected) {
            updateState(ConnectionState.CONNECTED)
            startHeartbeatMonitor()
            finishPendingReady(true)
            return
        }
        updateState(ConnectionState.CONNECTED)
    }

    private fun markDisconnected(state: ConnectionState, reason: String) {
        clearHandshakeTimeout()
        stopHeartbeat()
        handshaked = false
        handshakeInProgress = false
        lastHeartbeatAck = 0
        updateState(state)
        if (reason.isNotEmpty()) {
            addLog(if (state == ConnectionState.ERROR) "ERROR" else "SYSTEM", "disconnect", reason)
        }
        finishPendingReady(false)
        if (state == ConnectionState.DISCONNECTED) {
            scheduleReconnect()
        }
    }

    private fun scheduleReconnect() {
        cancelReconnect()
        val runnable = Runnable {
            addLog("SYSTEM", "reconnect", "自动重连...")
            ensureSession(force = true)
        }
        reconnectRunnable = runnable
        mainHandler.postDelayed(runnable, RECONNECT_DELAY_MS)
    }

    private fun cancelReconnect() {
        reconnectRunnable?.let { mainHandler.removeCallbacks(it) }
        reconnectRunnable = null
    }

    private fun updateState(state: ConnectionState) {
        currentState = state
        _connectionState.tryEmit(state)
    }

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

    fun clearLogs() {
        synchronized(logEntries) {
            logEntries.clear()
            _logs.tryEmit(emptyList())
        }
    }

    fun getCurrentConnectionState(): ConnectionState = currentState

    private fun shouldLogTraffic(type: String): Boolean {
        return type != MessageType.HANDSHAKE &&
            type != MessageType.HEARTBEAT &&
            type != MessageType.HEARTBEAT_ACK
    }

    private fun startHeartbeatMonitor() {
        stopHeartbeat()
        heartbeatTimer = Timer()
        heartbeatTimer?.schedule(object : TimerTask() {
            override fun run() {
                val now = System.currentTimeMillis()
                if (handshaked && lastHeartbeatAck > 0 && now - lastHeartbeatAck > HEARTBEAT_TIMEOUT_MS) {
                    addLog("ERROR", "heartbeat", "心跳超时")
                    markDisconnected(ConnectionState.DISCONNECTED, "手表快应用心跳超时")
                    return
                }
                val payload = JSONObject().apply {
                    put("timestamp", now / 1000)
                }
                sendDirect(MessageType.HEARTBEAT, payload, logTraffic = false)
            }
        }, HEARTBEAT_INTERVAL_MS, HEARTBEAT_INTERVAL_MS)
    }

    fun stopHeartbeat() {
        heartbeatTimer?.cancel()
        heartbeatTimer = null
    }

    fun sendHeartbeat() {
        ensureSession(force = false) { success ->
            if (!success) {
                addLog("ERROR", "heartbeat", "连接未就绪，无法发送心跳")
                return@ensureSession
            }
            val payload = JSONObject().apply {
                put("timestamp", System.currentTimeMillis() / 1000)
            }
            sendDirect(MessageType.HEARTBEAT, payload, logTraffic = false)
        }
    }

    fun send(type: String, payload: JSONObject) {
        ensureSession(force = false) { success ->
            if (!success) {
                addLog("ERROR", type, "连接未建立，发送取消")
                return@ensureSession
            }
            sendDirect(type, payload, logTraffic = shouldLogTraffic(type))
        }
    }

    private fun sendDirect(
        type: String,
        payload: JSONObject,
        logTraffic: Boolean = true,
        onResult: ((Boolean, Exception?) -> Unit)? = null
    ) {
        payload.put("type", type)
        val message = payload.toString()
        if (logTraffic) {
            addLog("SEND", type, message.take(200))
        }
        sendEncodedMessage(message, onResult)
    }

    private fun sendEncodedMessage(
        message: String,
        onResult: ((Boolean, Exception?) -> Unit)? = null
    ) {
        if (message.length <= CHUNK_SIZE) {
            sendRaw(message.toByteArray(Charsets.UTF_8), onResult)
        } else {
            sendChunked(message, onResult)
        }
    }

    private fun sendRaw(
        bytes: ByteArray,
        onResult: ((Boolean, Exception?) -> Unit)? = null
    ) {
        val node = currentNode
        val api = messageApi
        if (node == null || api == null) {
            val error = IllegalStateException("当前无已连接设备")
            addLog("ERROR", "send", error.message ?: "发送失败")
            onResult?.invoke(false, error)
            return
        }

        api.sendMessage(node.id, bytes)
            .addOnSuccessListener {
                onResult?.invoke(true, null)
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "消息发送失败", e)
                addLog("ERROR", "send", e.message ?: "消息发送失败")
                onResult?.invoke(false, Exception(e))
            }
    }

    private fun sendChunked(
        message: String,
        onResult: ((Boolean, Exception?) -> Unit)? = null
    ) {
        val id = "chunk-${System.currentTimeMillis()}"
        val chunks = message.chunked(CHUNK_SIZE)
        val total = chunks.size

        fun sendNext(index: Int) {
            if (index >= total) {
                onResult?.invoke(true, null)
                return
            }

            val chunkJson = JSONObject().apply {
                put("__c", true)
                put("id", id)
                put("i", index)
                put("t", total)
                put("d", chunks[index])
            }
            sendRaw(chunkJson.toString().toByteArray(Charsets.UTF_8)) { success, error ->
                if (!success) {
                    onResult?.invoke(false, error)
                    return@sendRaw
                }
                sendNext(index + 1)
            }
        }

        sendNext(0)
    }

    fun onMessageReceived(message: String) {
        try {
            if (!message.trim().startsWith("{")) {
                addLog("RECEIVE", "text", message.take(200))
                return
            }

            val json = JSONObject(message)
            if (json.optBoolean("__c", false)) {
                handleChunk(json)
                return
            }

            val type = json.optString("type", "unknown")
            if (shouldLogTraffic(type)) {
                addLog("RECEIVE", type, message.take(200))
            }

            when (type) {
                MessageType.HANDSHAKE -> {
                    handleHandshake(json)
                    return
                }

                MessageType.HEARTBEAT -> {
                    handleHeartbeat()
                    return
                }

                MessageType.HEARTBEAT_ACK -> {
                    lastHeartbeatAck = System.currentTimeMillis()
                    if (!handshaked) {
                        confirmConnected()
                    }
                    return
                }
            }

            if (!handshaked) {
                confirmConnected()
            }
            _messageFlow.tryEmit(json)
        } catch (e: Exception) {
            Log.e(TAG, "Error parsing message: ${message.take(100)}", e)
            addLog("ERROR", "parse_error", e.message ?: "Unknown error")
        }
    }

    private fun handleHandshake(json: JSONObject) {
        val count = json.optInt("count", -1)
        if (count < 0) {
            return
        }

        lastHeartbeatAck = System.currentTimeMillis()
        if (count > 0) {
            confirmConnected()
        }

        if (count < 2) {
            val payload = JSONObject().apply {
                put("count", count + 1)
                put("version", appVersionCode)
            }
            sendDirect(MessageType.HANDSHAKE, payload, logTraffic = false)
        }
    }

    private fun resolveAppVersionCode(): Long {
        return try {
            val pkg = context.packageManager.getPackageInfo(context.packageName, 0)
            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
                pkg.longVersionCode
            } else {
                @Suppress("DEPRECATION")
                pkg.versionCode.toLong()
            }
        } catch (_: PackageManager.NameNotFoundException) {
            1L
        }
    }

    private fun handleHeartbeat() {
        lastHeartbeatAck = System.currentTimeMillis()
        if (!handshaked) {
            confirmConnected()
        }
        val payload = JSONObject().apply {
            put("timestamp", System.currentTimeMillis() / 1000)
        }
        sendDirect(MessageType.HEARTBEAT_ACK, payload, logTraffic = false)
    }

    private fun handleChunk(json: JSONObject) {
        try {
            val id = json.optString("id")
            val index = json.optInt("i", -1)
            val total = json.optInt("t", -1)
            val data = json.optString("d")

            if (id.isEmpty() || index < 0 || total <= 0 || index >= total || data.isEmpty()) {
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
                        if (part != null) {
                            out.write(part)
                        }
                    }
                    val fullText = out.toByteArray().toString(Charsets.UTF_8)
                    onMessageReceived(fullText)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "处理分片消息失败", e)
            addLog("ERROR", "chunk", e.message ?: "处理分片失败")
        }
    }

    fun sendSyncAck(accepted: Boolean) {
        val payload = JSONObject().apply {
            put("accepted", accepted)
        }
        send(MessageType.SCREENSHOT_SYNC_ACK, payload)
    }

    fun sendDataAck(shotId: String) {
        val payload = JSONObject().apply {
            put("shotId", shotId)
        }
        send(MessageType.SCREENSHOT_DATA_ACK, payload)
    }

    fun sendSyncResult(success: Boolean, message: String = "") {
        val payload = JSONObject().apply {
            put("success", success)
            if (message.isNotEmpty()) {
                put("message", message)
            }
        }
        send(MessageType.SCREENSHOT_SYNC_RESULT, payload)
    }

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

    fun requestScreenshotList() {
        send(MessageType.REQUEST_SCREENSHOT_LIST, JSONObject())
    }

    fun requestScreenshotData(
        shotId: String,
        startIndex: Int = 0,
        chunkSize: Int = 2560,
        throttleMs: Int = 8,
        gcEvery: Int = 8
    ) {
        val payload = JSONObject().apply {
            put("shotId", shotId)
            put("startIndex", startIndex.coerceAtLeast(0))
            put("chunkSize", chunkSize.coerceAtLeast(1024))
            put("throttleMs", throttleMs.coerceAtLeast(0))
            put("gcEvery", gcEvery.coerceAtLeast(1))
        }
        Log.d(TAG, "requestScreenshotData: shotId=$shotId startIndex=${startIndex.coerceAtLeast(0)} chunkSize=${chunkSize.coerceAtLeast(1024)}")
        send(MessageType.REQUEST_SCREENSHOT_DATA, payload)
    }

    fun destroy() {
        clearHandshakeTimeout()
        stopHeartbeat()
        chunkBuffers.clear()
        handshaked = false
        handshakeInProgress = false
        lastHeartbeatAck = 0
        finishPendingReady(false)

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
        updateState(ConnectionState.DISCONNECTED)
        addLog("SYSTEM", "destroy", "消息中心销毁")
    }
}
