package com.shell.liangyi.model

import java.net.URI

data class ChatMessage(
    val id: String,
    val role: String, // "user" | "assistant" | "exec"
    val content: String,
    val timestamp: Long,
    // 仅 role == "exec" 时有意义：模型提议的命令与执行状态
    val execCommand: String? = null,
    val execState: ExecState = ExecState.NONE,
    val execStdout: String? = null,
    val execStderr: String? = null
)

enum class ExecState { NONE, PENDING_CONFIRM, RUNNING, DONE, FAILED, REJECTED }

data class Conversation(
    val id: String,
    val title: String,
    val createdAt: Long,
    val messages: List<ChatMessage> = emptyList()
)

data class AgentApiConfig(
    val baseUrl: String = "",
    val token: String = "",
    val model: String = ""
) {
    val normalizedBaseUrl: String get() = normalizeBaseUrl(baseUrl)
    val isConfigured: Boolean get() = normalizedBaseUrl.isNotBlank() && model.isNotBlank()

    companion object {
        fun normalizeBaseUrl(value: String): String {
            val trimmed = value.trim().trimEnd('/')
            if (trimmed.isBlank()) return ""
            val uri = runCatching { URI(trimmed) }.getOrNull() ?: return ""
            val scheme = uri.scheme?.lowercase() ?: return ""
            if (scheme != "https" && scheme != "http") return ""
            if (uri.host.isNullOrBlank()) return ""
            return trimmed
        }
    }
}

data class ExecResult(
    val stdout: String,
    val stderr: String,
    val exitcode: Int?,
    val timedOut: Boolean
)
