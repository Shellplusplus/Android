package com.shell.liangyi.core

import kotlinx.coroutines.CompletableDeferred
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withTimeoutOrNull
import org.json.JSONObject
import java.util.concurrent.ConcurrentHashMap
import kotlin.random.Random

data class RemoteExecResult(
    val stdout: String,
    val stderr: String,
    val exitCode: Int?,
    val timedOut: Boolean,
)

class RemoteTerminalBridge(
    private val messageCenter: WearMessageCenter,
    scope: CoroutineScope,
) {
    private data class Pending(
        val ack: CompletableDeferred<Boolean>,
        val result: CompletableDeferred<RemoteExecResult>,
        var rejectReason: String? = null,
    )

    class BridgeException(message: String) : Exception(message)

    private val pendingByReqId = ConcurrentHashMap<String, Pending>()

    init {
        scope.launch(Dispatchers.IO) {
            messageCenter.messageFlow.collect { json -> handleMessage(json) }
        }
    }

    private fun handleMessage(json: JSONObject) {
        val type = json.optString("type")
        val reqId = json.optString("reqId")
        if (reqId.isBlank()) {
            return
        }
        val pending = pendingByReqId[reqId] ?: return
        when (type) {
            "execAck" -> {
                val accepted = json.optBoolean("accepted", false)
                if (!accepted) {
                    pending.rejectReason = json.optString("reason", "rejected")
                }
                pending.ack.complete(accepted)
            }

            "execResult" -> {
                pendingByReqId.remove(reqId)
                pending.result.complete(
                    RemoteExecResult(
                        stdout = json.optString("stdout", ""),
                        stderr = json.optString("stderr", ""),
                        exitCode = if (json.has("exitcode") && !json.isNull("exitcode")) {
                            json.optInt("exitcode")
                        } else {
                            null
                        },
                        timedOut = json.optBoolean("timedOut", false),
                    ),
                )
            }
        }
    }

    private suspend fun awaitReady(timeoutMs: Long = 6_000L): Boolean {
        val ready = CompletableDeferred<Boolean>()
        messageCenter.ensureConnectionReady { success ->
            ready.complete(success)
        }
        return withTimeoutOrNull(timeoutMs) { ready.await() } == true
    }

    private suspend fun runCommandOnce(command: String, timeoutMs: Long): RemoteExecResult {
        val reqId = "req-${System.currentTimeMillis()}-${Random.nextInt(10_000)}"
        val pending = Pending(
            ack = CompletableDeferred(),
            result = CompletableDeferred(),
        )
        pendingByReqId[reqId] = pending

        val payload = JSONObject().apply {
            put("reqId", reqId)
            put("cmd", command)
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

    suspend fun runCommand(command: String, timeoutMs: Long = 15_000L): RemoteExecResult {
        try {
            return runCommandOnce(command = command, timeoutMs = timeoutMs)
        } catch (error: BridgeException) {
            if (error.message != "no_ack") {
                throw error
            }
        }

        if (!awaitReady()) {
            throw BridgeException("no_ack")
        }
        return runCommandOnce(command = command, timeoutMs = timeoutMs)
    }
}

