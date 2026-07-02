package com.shell.liangyi.model

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
    val isConfigured: Boolean get() = baseUrl.isNotBlank() && model.isNotBlank()
}

data class ExecResult(
    val stdout: String,
    val stderr: String,
    val exitcode: Int?,
    val timedOut: Boolean
)
