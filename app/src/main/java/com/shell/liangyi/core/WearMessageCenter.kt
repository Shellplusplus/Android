package com.shell.liangyi.core

import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.PackageManager
import android.os.Handler
import android.os.Looper
import android.util.Base64
import android.util.Log
import com.shell.liangyi.core.diagnostics.DiagnosticManager
import androidx.annotation.StringRes
import com.shell.liangyi.R
import com.xiaomi.xms.wearable.Wearable
import com.xiaomi.xms.wearable.auth.AuthApi
import com.xiaomi.xms.wearable.auth.Permission
import com.xiaomi.xms.wearable.message.MessageApi
import com.xiaomi.xms.wearable.message.OnMessageReceivedListener
import com.xiaomi.xms.wearable.node.Node
import com.xiaomi.xms.wearable.node.NodeApi
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.util.concurrent.ConcurrentHashMap

/**
 * 消息类型常量
 */
object MessageType {
    const val HANDSHAKE = "__hs__"
    const val DEVICE_INFO = "deviceInfo"

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
    const val REQUEST_SCREENSHOT_BULK = "requestScreenshotBulk"
    const val SCREENSHOT_BULK_START = "screenshotBulkStart"
    const val SCREENSHOT_BULK_DATA = "screenshotBulkData"
    const val SCREENSHOT_BULK_ACK = "screenshotBulkAck"
    const val SCREENSHOT_BULK_FINISH = "screenshotBulkFinish"
    const val SCREENSHOT_BULK_ABORT = "screenshotBulkAbort"

    const val REMOTE_TOOL_REQUEST = "remoteToolRequest"
    const val REMOTE_TOOL_RESULT = "remoteToolResult"
    const val REMOTE_TOOL_BINARY_START = "remoteToolBinaryStart"
    const val REMOTE_TOOL_BINARY_CHUNK = "remoteToolBinaryChunk"
    const val REMOTE_TOOL_BINARY_FINISH = "remoteToolBinaryFinish"
    const val REMOTE_TOOL_BINARY_ABORT = "remoteToolBinaryAbort"
    const val REMOTE_TOOL_BINARY_ACK = "remoteToolBinaryAck"

    const val FILE_TRANSFER_REQUEST = "fileTransferRequest"
    const val FILE_TRANSFER_START = "fileTransferStart"
    const val FILE_TRANSFER_PART = "fileTransferPart"
    const val FILE_TRANSFER_ACK = "fileTransferAck"
    const val FILE_TRANSFER_ABORT = "fileTransferAbort"
    const val FILE_TRANSFER_RESULT = "fileTransferResult"

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
        private const val MAX_CONCURRENT_CHUNKS = 16
        private const val CHUNK_BUFFER_TTL_MS = 60_000L
        private const val WEAR_APP_ENTRY_URI = "/pages/index"
        private const val HANDSHAKE_TIMEOUT_MS = 3000L
        private const val HEARTBEAT_INTERVAL_MS = 5000L
        private const val HEARTBEAT_TIMEOUT_MS = 30000L
        private const val RECONNECT_DELAY_MS = 5000L
        private val TYPE_PREVIEW_REGEX = Regex(""""type"\s*:\s*"([^"]+)"""")

        @SuppressLint("StaticFieldLeak")
        @Volatile
        private var instance: WearMessageCenter? = null

        fun getInstance(context: Context): WearMessageCenter {
            return instance ?: synchronized(this) {
                instance ?: WearMessageCenter(context.applicationContext).also { instance = it }
            }
        }
    }

    private val _messageFlow = MutableSharedFlow<JSONObject>(replay = 32, extraBufferCapacity = 64)
    val messageFlow: SharedFlow<JSONObject> = _messageFlow.asSharedFlow()

    private val _connectionState = MutableSharedFlow<ConnectionState>(
        replay = 1,
        extraBufferCapacity = 8
    )
    val connectionState: SharedFlow<ConnectionState> = _connectionState.asSharedFlow()

    private val _logs = MutableSharedFlow<List<LogEntry>>(replay = 1, extraBufferCapacity = 8)
    val logs: SharedFlow<List<LogEntry>> = _logs.asSharedFlow()
    private val _watchProductCode = MutableStateFlow("")
    val watchProductCode: StateFlow<String> = _watchProductCode.asStateFlow()
    private val logEntries = mutableListOf<LogEntry>()
    private val maxLogEntries = 100

    private val chunkBuffers = ConcurrentHashMap<String, ChunkBuffer>()
    private val pendingReadyCallbacks = mutableListOf<(Boolean) -> Unit>()
    private val mainHandler = Handler(Looper.getMainLooper())
    private val appVersionCode by lazy { resolveAppVersionCode() }
    private fun tr(@StringRes resId: Int, vararg args: Any): String = context.getString(resId, *args)

    private var nodeApi: NodeApi? = null
    private var messageApi: MessageApi? = null
    private var authApi: AuthApi? = null
    private var currentNode: Node? = null
    private var hasDevicePermission = false
    private var listenerRegistered = false
    private var listenerNodeId: String? = null

    @Volatile
    private var currentState: ConnectionState = ConnectionState.DISCONNECTED
    @Volatile
    private var handshaked = false
    @Volatile
    private var handshakeInProgress = false

    private var heartbeatRunnable: Runnable? = null
    private var lastHeartbeatAck: Long = 0
    private var handshakeTimeoutRunnable: Runnable? = null
    private var reconnectRunnable: Runnable? = null

    private class ChunkBuffer(
        val total: Int,
        val parts: Array<ByteArray?>,
        var count: Int = 0,
        var updatedAt: Long = System.currentTimeMillis(),
    )

    private val messageListener = OnMessageReceivedListener { nodeId, bytes ->
        try {
            val text = String(bytes, Charsets.UTF_8)
            if (shouldLogRawTraffic(text)) {
                Log.d(TAG, "onMessageReceived nodeId=$nodeId length=${text.length}")
                addLog("RECEIVE", "raw", "nodeId=$nodeId len=${text.length} ${text.take(100)}")
            }
            onMessageReceived(text)
        } catch (e: Throwable) {
            Log.e(TAG, "Message listener internal error", Exception(e))
            addLog("ERROR", "listener_error", e.message ?: "Unknown error")
        }
    }

    fun initialize() {
        Log.d(TAG, "Initializing WearMessageCenter")
        addLog("SYSTEM", "init", tr(R.string.message_center_initialized))

        nodeApi = Wearable.getNodeApi(context)
        messageApi = Wearable.getMessageApi(context)
        authApi = Wearable.getAuthApi(context)

        ensureSession(force = false)
    }

    fun ensureConnection() {
        ensureConnectionReady()
    }

    fun ensureConnectionReady(onReady: (Boolean) -> Unit = {}) {
        if (nodeApi == null || messageApi == null || authApi == null) {
            initialize()
            ensureSession(force = true, onReady = onReady)
            return
        }
        addLog("SYSTEM", "ensure", tr(R.string.keepalive_check))
        ensureSession(force = true, onReady = onReady)
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
            markDisconnected(ConnectionState.ERROR, tr(R.string.node_api_not_initialized))
            return
        }

        api.connectedNodes
            .addOnSuccessListener { nodes ->
                if (nodes.isNullOrEmpty()) {
                    unregisterCurrentListener()
                    currentNode = null
                    hasDevicePermission = false
                    listenerRegistered = false
                    listenerNodeId = null
                    updateWatchProductCode("")
                    markDisconnected(ConnectionState.DISCONNECTED, tr(R.string.no_connected_devices))
                    return@addOnSuccessListener
                }

                val node = nodes[0]
                if (currentNode?.id != node.id) {
                    unregisterCurrentListener()
                    addLog("SYSTEM", "device", tr(R.string.device_found, node.name, node.id))
                    hasDevicePermission = false
                    listenerRegistered = false
                    updateWatchProductCode("")
                }
                currentNode = node
                ensurePermissionThenPrepare(force)
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "Failed to get connected devices", e)
                markDisconnected(ConnectionState.ERROR, e.message ?: tr(R.string.failed_get_devices))
            }
    }

    private fun ensurePermissionThenPrepare(force: Boolean) {
        val node = currentNode ?: run {
            markDisconnected(ConnectionState.ERROR, tr(R.string.current_device_empty))
            return
        }
        if (hasDevicePermission) {
            prepareWearAppSession(force)
            return
        }

        val api = authApi ?: run {
            markDisconnected(ConnectionState.ERROR, tr(R.string.auth_api_not_initialized))
            return
        }
        val permissions = arrayOf(Permission.DEVICE_MANAGER, Permission.NOTIFY)

        addLog("SYSTEM", "permission", tr(R.string.checking_wear_permissions))
        api.checkPermissions(node.id, permissions)
            .addOnSuccessListener { results ->
                if (!isCurrentNode(node.id)) {
                    return@addOnSuccessListener
                }
                val allGranted = results != null && results.all { it == true }
                if (allGranted) {
                    hasDevicePermission = true
                    addLog("SYSTEM", "permission", tr(R.string.required_permissions_granted))
                    prepareWearAppSession(force)
                } else {
                    requestPermission(node, force)
                }
            }
            .addOnFailureListener {
                if (!isCurrentNode(node.id)) {
                    return@addOnFailureListener
                }
                requestPermission(node, force)
            }
    }

    private fun requestPermission(node: Node, force: Boolean) {
        val api = authApi ?: run {
            markDisconnected(ConnectionState.ERROR, tr(R.string.auth_api_not_initialized))
            return
        }

        api.requestPermission(node.id, Permission.DEVICE_MANAGER, Permission.NOTIFY)
            .addOnSuccessListener { granted ->
                if (!isCurrentNode(node.id)) {
                    return@addOnSuccessListener
                }
                if (granted != null && granted.isNotEmpty()) {
                    hasDevicePermission = true
                    addLog("SYSTEM", "permission", tr(R.string.permission_request_success))
                    prepareWearAppSession(force)
                } else {
                    markDisconnected(ConnectionState.ERROR, tr(R.string.user_denied_required_permissions))
                }
            }
            .addOnFailureListener { e ->
                if (!isCurrentNode(node.id)) {
                    return@addOnFailureListener
                }
                Log.e(TAG, "Failed to request permissions", e)
                markDisconnected(ConnectionState.ERROR, e.message ?: tr(R.string.request_permission_failed))
            }
    }

    private fun prepareWearAppSession(force: Boolean) {
        registerListenerIfNeeded(force) { success ->
            if (!success) {
                markDisconnected(ConnectionState.ERROR, tr(R.string.message_listener_registration_failed))
                return@registerListenerIfNeeded
            }
            maybeLaunchWearApp {
                startHandshake()
            }
        }
    }

    private fun registerListenerIfNeeded(force: Boolean, onDone: (Boolean) -> Unit) {
        val node = currentNode
        val api = messageApi
        if (node == null || api == null) {
            onDone(false)
            return
        }

        if (listenerRegistered && listenerNodeId == node.id && !force) {
            onDone(true)
            return
        }

        val doRegister = {
            api.addListener(node.id, messageListener)
                .addOnSuccessListener {
                    if (!isCurrentNode(node.id)) {
                        return@addOnSuccessListener
                    }
                    listenerRegistered = true
                    listenerNodeId = node.id
                    addLog("SYSTEM", "listener", tr(R.string.message_listener_registered, node.id))
                    onDone(true)
                }
                .addOnFailureListener { e ->
                    if (!isCurrentNode(node.id)) {
                        return@addOnFailureListener
                    }
                    if (e.message?.contains("registered") == true) {
                        listenerRegistered = true
                        listenerNodeId = node.id
                        addLog("SYSTEM", "listener", tr(R.string.message_listener_already_exists))
                        onDone(true)
                    } else {
                        listenerRegistered = false
                        if (listenerNodeId == node.id) {
                            listenerNodeId = null
                        }
                        addLog("ERROR", "listener", e.message ?: tr(R.string.message_listener_registration_failed))
                        onDone(false)
                    }
                }
        }

        api.removeListener(node.id)
            .addOnSuccessListener {
                if (isCurrentNode(node.id)) {
                    doRegister()
                }
            }
            .addOnFailureListener {
                if (isCurrentNode(node.id)) {
                    doRegister()
                }
            }
    }

    private fun unregisterCurrentListener() {
        val nodeId = listenerNodeId ?: currentNode?.id ?: return
        val api = messageApi ?: return
        try {
            api.removeListener(nodeId)
                .addOnSuccessListener {
                    if (listenerNodeId == nodeId) {
                        listenerRegistered = false
                        listenerNodeId = null
                    }
                }
                .addOnFailureListener { e ->
                    Log.w(TAG, "Failed to remove listener for node $nodeId", e)
                }
        } catch (e: Exception) {
            Log.w(TAG, "Failed to remove listener for node $nodeId", e)
        }
    }

    private fun maybeLaunchWearApp(onComplete: () -> Unit) {
        if (!WearConnectionPreferences.isAutoLaunchWearAppEnabled(context)) {
            addLog("SYSTEM", "launch", tr(R.string.watch_app_launch_skipped))
            onComplete()
            return
        }
        val node = currentNode
        val api = nodeApi
        if (node == null || api == null) {
            onComplete()
            return
        }

        api.launchWearApp(node.id, WEAR_APP_ENTRY_URI)
            .addOnSuccessListener {
                if (!isCurrentNode(node.id)) {
                    return@addOnSuccessListener
                }
                addLog("SYSTEM", "launch", tr(R.string.watch_app_launched))
                onComplete()
            }
            .addOnFailureListener { e ->
                if (!isCurrentNode(node.id)) {
                    return@addOnFailureListener
                }
                addLog("SYSTEM", "launch", tr(R.string.watch_app_launch_failed_continue, e.message ?: "unknown"))
                onComplete()
            }
    }

    private fun isCurrentNode(nodeId: String): Boolean = currentNode?.id == nodeId

    private fun startHandshake() {
        clearHandshakeTimeout()

        val timeoutRunnable = Runnable {
            addLog("ERROR", "handshake", tr(R.string.handshake_timeout))
            markDisconnected(ConnectionState.DISCONNECTED, tr(R.string.watch_app_no_handshake_response))
        }
        handshakeTimeoutRunnable = timeoutRunnable
        mainHandler.postDelayed(timeoutRunnable, HANDSHAKE_TIMEOUT_MS)

        val payload = JSONObject().apply {
            put("count", 0)
            put("version", appVersionCode)
        }
        addLog("SEND", "handshake", tr(R.string.sending_handshake, currentNode?.id ?: "null"))
        sendDirect(MessageType.HANDSHAKE, payload, logTraffic = false) { success, error ->
            if (success) {
                addLog("SEND", "handshake", tr(R.string.handshake_sent_success))
            } else {
                addLog("ERROR", "handshake", tr(R.string.handshake_sent_failed, error?.message ?: "unknown"))
                markDisconnected(ConnectionState.ERROR, error?.message ?: tr(R.string.failed_to_send_handshake))
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
        if (state == ConnectionState.DISCONNECTED || state == ConnectionState.ERROR) {
            scheduleReconnect()
        }
    }

    private fun scheduleReconnect() {
        cancelReconnect()
        val runnable = Runnable {
            addLog("SYSTEM", "reconnect", tr(R.string.auto_reconnecting))
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
        if (direction == "ERROR") {
            DiagnosticManager.getInstance(context).reportFailure(
                category = "wear_connection",
                scene = "wear_message_center",
                code = type,
                summary = message.ifBlank { "手表连接或消息处理异常" },
            )
        }
    }

    fun addExternalLog(direction: String, type: String, message: String = "") {
        addLog(direction, type, message)
    }

    fun clearLogs() {
        synchronized(logEntries) {
            logEntries.clear()
            _logs.tryEmit(emptyList())
        }
    }

    fun snapshotLogs(): List<LogEntry> {
        return synchronized(logEntries) { logEntries.toList() }
    }

    private fun updateWatchProductCode(productCode: String) {
        val normalized = productCode.trim()
        if (_watchProductCode.value != normalized) {
            _watchProductCode.value = normalized
        }
    }

    fun getCurrentConnectionState(): ConnectionState = currentState

    private fun shouldLogTraffic(type: String): Boolean {
        return type != MessageType.HANDSHAKE &&
            type != MessageType.HEARTBEAT &&
            type != MessageType.HEARTBEAT_ACK &&
            type != MessageType.SCREENSHOT_BULK_DATA &&
            type != MessageType.SCREENSHOT_CHUNK_PART &&
            type != MessageType.REMOTE_TOOL_BINARY_CHUNK &&
            type != MessageType.REMOTE_TOOL_BINARY_ACK &&
            type != MessageType.FILE_TRANSFER_PART &&
            type != MessageType.FILE_TRANSFER_ACK
    }

    private fun shouldLogRawTraffic(message: String): Boolean {
        val match = TYPE_PREVIEW_REGEX.find(message) ?: return true
        return shouldLogTraffic(match.groupValues.getOrElse(1) { "" })
    }

    private fun startHeartbeatMonitor() {
        stopHeartbeat()
        val runnable = object : Runnable {
            override fun run() {
                if (heartbeatRunnable !== this) {
                    return
                }
                val now = System.currentTimeMillis()
                if (handshaked && lastHeartbeatAck > 0 && now - lastHeartbeatAck > HEARTBEAT_TIMEOUT_MS) {
                    addLog("ERROR", "heartbeat", tr(R.string.heartbeat_timeout))
                    markDisconnected(ConnectionState.DISCONNECTED, tr(R.string.watch_app_heartbeat_timeout))
                    return
                }
                val payload = JSONObject().apply {
                    put("timestamp", now / 1000)
                }
                sendDirect(MessageType.HEARTBEAT, payload, logTraffic = false)
                if (handshaked && currentState == ConnectionState.CONNECTED) {
                    mainHandler.postDelayed(this, HEARTBEAT_INTERVAL_MS)
                }
            }
        }
        heartbeatRunnable = runnable
        mainHandler.postDelayed(runnable, HEARTBEAT_INTERVAL_MS)
    }

    fun stopHeartbeat() {
        heartbeatRunnable?.let { mainHandler.removeCallbacks(it) }
        heartbeatRunnable = null
    }

    fun sendHeartbeat() {
        ensureSession(force = false) { success ->
            if (!success) {
                addLog("ERROR", "heartbeat", tr(R.string.heartbeat_not_ready))
                return@ensureSession
            }
            val payload = JSONObject().apply {
                put("timestamp", System.currentTimeMillis() / 1000)
            }
            sendDirect(MessageType.HEARTBEAT, payload, logTraffic = false)
        }
    }

    fun send(
        type: String,
        payload: JSONObject,
        onResult: ((Boolean, Exception?) -> Unit)? = null
    ) {
        ensureSession(force = false) { success ->
            if (!success) {
                val error = IllegalStateException(tr(R.string.connection_not_ready_send_cancelled))
                addLog("ERROR", type, error.message ?: tr(R.string.send_failed))
                onResult?.invoke(false, error)
                return@ensureSession
            }
            sendDirect(type, payload, logTraffic = shouldLogTraffic(type), onResult = onResult)
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
            val error = IllegalStateException(tr(R.string.no_connected_device))
            addLog("ERROR", "send", error.message ?: tr(R.string.send_failed))
            onResult?.invoke(false, error)
            return
        }

        Log.d(TAG, "sendRaw → node=${node.id} bytes=${bytes.size}")
        api.sendMessage(node.id, bytes)
            .addOnSuccessListener {
                Log.d(TAG, "sendRaw succeeded")
                onResult?.invoke(true, null)
            }
            .addOnFailureListener { e ->
                Log.e(TAG, "sendRaw failed: ${e.message}", e)
                addLog("ERROR", "send", e.message ?: tr(R.string.message_send_failed))
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

                MessageType.DEVICE_INFO -> {
                    handleDeviceInfo(json)
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
        val product = json.optString("product", "")
        addLog("RECEIVE", "handshake", tr(R.string.received_handshake, count))
        if (count < 0) {
            return
        }
        if (product.isNotBlank()) {
            updateWatchProductCode(product)
        }

        lastHeartbeatAck = System.currentTimeMillis()
        if (count > 0) {
            addLog("SYSTEM", "handshake", tr(R.string.handshake_confirmed, count))
            confirmConnected()
        }

        if (count < 2) {
            val payload = JSONObject().apply {
                put("count", count + 1)
                put("version", appVersionCode)
            }
            addLog("SEND", "handshake", tr(R.string.reply_handshake, count + 1))
            sendDirect(MessageType.HANDSHAKE, payload, logTraffic = false)
        }
    }

    private fun handleDeviceInfo(json: JSONObject) {
        val product = json.optString("product", "")
        if (product.isNotBlank()) {
            updateWatchProductCode(product)
            addLog("SYSTEM", "device_info", "product=$product")
        }
        if (!handshaked) {
            confirmConnected()
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

            if (!MessageChunkGuard.isValidMetadata(id, index, total, data.isNotEmpty())) {
                addLog("ERROR", "chunk", tr(R.string.invalid_chunk, id, index, total))
                return
            }

            pruneStaleChunkBuffers()
            if (chunkBuffers.size >= MAX_CONCURRENT_CHUNKS && !chunkBuffers.containsKey(id)) {
                addLog("ERROR", "chunk", "Too many concurrent chunk sessions, rejecting $id")
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
            if (buffer.total != total) {
                chunkBuffers.remove(id)
                addLog("ERROR", "chunk", "Chunk total mismatch for $id")
                return
            }

            synchronized(buffer) {
                buffer.updatedAt = System.currentTimeMillis()
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
            Log.e(TAG, "Failed to process chunk message", e)
            addLog("ERROR", "chunk", e.message ?: tr(R.string.chunk_processing_failed))
        }
    }

    private fun pruneStaleChunkBuffers() {
        val now = System.currentTimeMillis()
        var removed = 0
        chunkBuffers.entries.removeIf { (_, buffer) ->
            val stale = now - buffer.updatedAt > CHUNK_BUFFER_TTL_MS
            if (stale) {
                removed++
            }
            stale
        }
        if (removed > 0) {
            addLog("SYSTEM", "chunk", "Pruned $removed stale chunk session(s)")
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

    fun sendBulkAck(sessionId: String, ackIndex: Int, ok: Boolean, code: String = "") {
        val payload = JSONObject().apply {
            put("sessionId", sessionId)
            put("ackIndex", ackIndex)
            put("ok", ok)
            if (code.isNotBlank()) {
                put("code", code)
            }
        }
        send(MessageType.SCREENSHOT_BULK_ACK, payload)
    }

    fun sendBulkAbort(sessionId: String, code: String, detail: String = "") {
        val payload = JSONObject().apply {
            put("sessionId", sessionId)
            put("code", code)
            if (detail.isNotBlank()) {
                put("detail", detail)
            }
        }
        send(MessageType.SCREENSHOT_BULK_ABORT, payload)
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

    fun requestScreenshotBulk(
        sessionId: String,
        shotId: String,
        startIndex: Int = 0,
        chunkBytes: Int = 4096,
        windowSize: Int = 4,
        ackEvery: Int = 4
    ) {
        val payload = JSONObject().apply {
            put("sessionId", sessionId)
            put("shotId", shotId)
            put("startIndex", startIndex.coerceAtLeast(0))
            put("chunkBytes", chunkBytes.coerceAtLeast(1024))
            put("windowSize", windowSize.coerceAtLeast(1))
            put("ackEvery", ackEvery.coerceAtLeast(1))
        }
        Log.d(
            TAG,
            "requestScreenshotBulk: shotId=$shotId sessionId=$sessionId " +
                "startIndex=${startIndex.coerceAtLeast(0)} chunkBytes=${chunkBytes.coerceAtLeast(1024)} " +
                "windowSize=${windowSize.coerceAtLeast(1)} ackEvery=${ackEvery.coerceAtLeast(1)}"
        )
        send(MessageType.REQUEST_SCREENSHOT_BULK, payload)
    }

    fun sendRemoteToolBinaryAck(requestId: String, phase: String, ok: Boolean, index: Int = -1) {
        val payload = JSONObject().apply {
            put("requestId", requestId)
            put("phase", phase)
            put("ok", ok)
            if (index >= 0) {
                put("index", index)
            }
        }
        send(MessageType.REMOTE_TOOL_BINARY_ACK, payload)
    }

    fun sendRemoteToolBinaryAbort(requestId: String, code: String, detail: String = "") {
        val payload = JSONObject().apply {
            put("requestId", requestId)
            put("code", code)
            if (detail.isNotBlank()) {
                put("detail", detail)
            }
        }
        send(MessageType.REMOTE_TOOL_BINARY_ABORT, payload)
    }

    fun destroy() {
        clearHandshakeTimeout()
        stopHeartbeat()
        cancelReconnect()
        chunkBuffers.clear()
        handshaked = false
        handshakeInProgress = false
        lastHeartbeatAck = 0
        finishPendingReady(false)

        val nodeId = listenerNodeId ?: currentNode?.id
        val api = messageApi
        if (nodeId != null && api != null) {
            try {
                api.removeListener(nodeId)
            } catch (e: Exception) {
                Log.w(TAG, "Failed to remove listener", e)
            }
        }
        listenerRegistered = false
        listenerNodeId = null
        hasDevicePermission = false
        currentNode = null
        updateState(ConnectionState.DISCONNECTED)
        addLog("SYSTEM", "destroy", tr(R.string.message_center_destroyed))
    }
}
