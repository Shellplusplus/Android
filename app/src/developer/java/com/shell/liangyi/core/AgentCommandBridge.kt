package com.shell.liangyi.core

import android.content.Context
import com.shell.liangyi.model.ExecResult
import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withTimeoutOrNull
import org.json.JSONObject
import java.util.concurrent.ConcurrentHashMap

/**
 * 手机 → 手环命令执行桥接，走 WearMessageCenter 现有的通用 messageFlow/send 通道，
 * 新增 3 个 type：execCommand（手机发）/ execAck / execResult（手环回）。
 * 协议与 main/ 的 agentCommandBridge.js 对应，reqId 用于匹配请求与响应。
 */
class AgentCommandBridge(
    context: Context,
    private val scope: CoroutineScope
) {
    private val messageCenter = WearMessageCenter.getInstance(context)

    private data class Pending(
        val ack: CompletableDeferred<Boolean>,
        val result: CompletableDeferred<ExecResult>,
        var rejectReason: String? = null
    )

    private val pendingByReqId = ConcurrentHashMap<String, Pending>()

    init {
        scope.launch(Dispatchers.IO) {
            messageCenter.messageFlow.collect { json -> handleMessage(json) }
        }
    }

    private fun handleMessage(json: JSONObject) {
        val type = json.optString("type")
        val reqId = json.optString("reqId")
        if (reqId.isEmpty()) return
        val pending = pendingByReqId[reqId] ?: return
        when (type) {
            "execAck" -> {
                val accepted = json.optBoolean("accepted", false)
                if (!accepted) pending.rejectReason = json.optString("reason", "rejected")
                pending.ack.complete(accepted)
            }
            "execResult" -> {
                pendingByReqId.remove(reqId)
                pending.result.complete(
                    ExecResult(
                        stdout = json.optString("stdout", ""),
                        stderr = json.optString("stderr", ""),
                        exitcode = if (json.has("exitcode") && !json.isNull("exitcode")) json.optInt("exitcode") else null,
                        timedOut = json.optBoolean("timedOut", false)
                    )
                )
            }
        }
    }

    class BridgeException(message: String) : Exception(message)

    private suspend fun awaitReady(timeoutMs: Long = 6000L): Boolean {
        val ready = CompletableDeferred<Boolean>()
        messageCenter.ensureConnectionReady { success ->
            ready.complete(success)
        }
        return withTimeoutOrNull(timeoutMs) { ready.await() } == true
    }

    private suspend fun runCommandOnce(cmd: String, timeoutMs: Long): ExecResult {
        val reqId = "req-" + System.currentTimeMillis() + "-" + (0..9999).random()
        val pending = Pending(CompletableDeferred(), CompletableDeferred())
        pendingByReqId[reqId] = pending

        val payload = JSONObject().apply {
            put("reqId", reqId)
            put("cmd", cmd)
            put("source", "shell-plus-plus-android")
        }
        messageCenter.send("execCommand", payload) { success, error ->
            if (!success) {
                pending.rejectReason = error?.message ?: "send_failed"
                pending.ack.complete(false)
            }
        }

        val accepted = withTimeoutOrNull(timeoutMs) { pending.ack.await() }
        if (accepted != true) {
            pendingByReqId.remove(reqId)
            throw BridgeException(pending.rejectReason ?: "no_ack")
        }

        val result = withTimeoutOrNull(timeoutMs) { pending.result.await() }
        pendingByReqId.remove(reqId)
        return result ?: throw BridgeException("timeout")
    }

    /** 发送一条命令到手环执行，等待 execAck + execResult。会抛出 BridgeException 表示被拒绝/超时。 */
    suspend fun runCommand(cmd: String, timeoutMs: Long = 15000L): ExecResult {
        try {
            return runCommandOnce(cmd, timeoutMs)
        } catch (e: BridgeException) {
            if (e.message != "no_ack") {
                throw e
            }
        }

        if (!awaitReady()) {
            throw BridgeException("no_ack")
        }
        return runCommandOnce(cmd, timeoutMs)
    }
}
