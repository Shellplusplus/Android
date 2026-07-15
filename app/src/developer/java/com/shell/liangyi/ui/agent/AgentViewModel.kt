package com.shell.liangyi.ui.agent

import android.app.Application
import android.content.Context
import androidx.core.content.edit
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.shell.liangyi.ai.AgentPrompts
import com.shell.liangyi.ai.OpenAIClient
import com.shell.liangyi.core.AgentCommandBridge
import com.shell.liangyi.data.AgentConversationStore
import com.shell.liangyi.model.AgentApiConfig
import com.shell.liangyi.model.ChatMessage
import com.shell.liangyi.model.Conversation
import com.shell.liangyi.model.ExecState
import com.shell.liangyi.security.ai.AiLicenseManager
import com.shell.liangyi.ui.terminal.RemoteTerminalGuard
import com.shell.liangyi.ui.terminal.RemoteTerminalValidationError
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlin.coroutines.cancellation.CancellationException

class AgentViewModel(application: Application) : AndroidViewModel(application) {

    companion object {
        private const val PREFS_NAME = "agent_settings"
        private const val KEY_BASE_URL = "api_base_url"
        private const val KEY_TOKEN = "api_token"
        private const val KEY_MODEL = "api_model"
    }

    private val prefs = application.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val store = AgentConversationStore(application)
    private val bridge = AgentCommandBridge(application, viewModelScope)
    private val licenseManager = AiLicenseManager(application)
    private var assistantReplyJob: Job? = null

    private val _apiConfig = MutableStateFlow(loadApiConfig())
    val apiConfig: StateFlow<AgentApiConfig> = _apiConfig.asStateFlow()

    private val _conversations = MutableStateFlow(store.loadAll())
    val conversations: StateFlow<List<Conversation>> = _conversations.asStateFlow()

    private val _currentConversationId = MutableStateFlow(_conversations.value.firstOrNull()?.id)
    val currentConversationId: StateFlow<String?> = _currentConversationId.asStateFlow()

    private val _currentConversationFlow = MutableStateFlow(currentConversationValue())
    val currentConversationFlow: StateFlow<Conversation?> = _currentConversationFlow.asStateFlow()

    private val _isSending = MutableStateFlow(false)
    val isSending: StateFlow<Boolean> = _isSending.asStateFlow()

    private val _errorMessage = MutableStateFlow<String?>(null)
    val errorMessage: StateFlow<String?> = _errorMessage.asStateFlow()

    private fun currentConversationValue(): Conversation? =
        _conversations.value.find { it.id == _currentConversationId.value }

    private fun loadApiConfig(): AgentApiConfig = AgentApiConfig(
        baseUrl = prefs.getString(KEY_BASE_URL, "") ?: "",
        token = prefs.getString(KEY_TOKEN, "") ?: "",
        model = prefs.getString(KEY_MODEL, "") ?: "",
    )

    fun updateApiConfig(baseUrl: String, token: String, model: String) {
        val normalizedBaseUrl = AgentApiConfig.normalizeBaseUrl(baseUrl)
        prefs.edit {
            putString(KEY_BASE_URL, normalizedBaseUrl)
            putString(KEY_TOKEN, token)
            putString(KEY_MODEL, model)
        }
        _apiConfig.value = AgentApiConfig(normalizedBaseUrl, token, model)
    }

    fun newConversation() {
        val conversation = Conversation(
            id = "conv-${System.currentTimeMillis()}",
            title = "新对话",
            createdAt = System.currentTimeMillis(),
        )
        _conversations.value = listOf(conversation) + _conversations.value
        _currentConversationId.value = conversation.id
        _currentConversationFlow.value = conversation
        persist()
    }

    fun selectConversation(id: String) {
        _currentConversationId.value = id
        _currentConversationFlow.value = currentConversationValue()
    }

    fun deleteConversation(id: String) {
        _conversations.value = _conversations.value.filterNot { it.id == id }
        if (_currentConversationId.value == id) {
            _currentConversationId.value = _conversations.value.firstOrNull()?.id
        }
        _currentConversationFlow.value = currentConversationValue()
        persist()
    }

    private fun mutateCurrent(transform: (Conversation) -> Conversation) {
        mutateConversation(_currentConversationId.value ?: return, transform)
    }

    private fun mutateConversation(id: String, transform: (Conversation) -> Conversation) {
        _conversations.value = _conversations.value.map { conversation ->
            if (conversation.id == id) transform(conversation) else conversation
        }
        _currentConversationFlow.value = currentConversationValue()
        persist()
    }

    private fun persist() {
        store.saveAll(_conversations.value)
    }

    fun sendUserMessage(text: String) {
        if (text.isBlank()) return
        if (!licenseManager.hasAccess()) {
            _errorMessage.value = "AI 助手授权无效或需要联网验证"
            return
        }
        if (!_apiConfig.value.isConfigured) {
            _errorMessage.value = "请先在设置里填写 API 地址和模型名称"
            return
        }
        if (assistantReplyJob?.isActive == true) return
        if (_currentConversationId.value == null) {
            newConversation()
        }

        val userMessage = ChatMessage(
            id = "msg-${System.currentTimeMillis()}",
            role = "user",
            content = text,
            timestamp = System.currentTimeMillis(),
        )
        mutateCurrent { conversation ->
            val retitled = if (conversation.messages.isEmpty()) {
                conversation.copy(title = text.take(20))
            } else {
                conversation
            }
            retitled.copy(messages = retitled.messages + userMessage)
        }

        requestAssistantReply()
    }

    private fun requestAssistantReply(conversationId: String? = _currentConversationId.value) {
        if (assistantReplyJob?.isActive == true) return
        if (!licenseManager.hasAccess()) {
            _errorMessage.value = "AI 助手授权已失效，请重新验证"
            return
        }
        val targetConversationId = conversationId ?: return
        val history = _conversations.value.find { it.id == targetConversationId }?.messages ?: return
        _isSending.value = true
        _errorMessage.value = null
        assistantReplyJob = viewModelScope.launch {
            try {
                val reply = OpenAIClient.chatCompletion(_apiConfig.value, history)
                val execCommand = AgentPrompts.parseExecCommand(reply)
                val assistantMessage = ChatMessage(
                    id = "msg-${System.currentTimeMillis()}",
                    role = "assistant",
                    content = reply,
                    timestamp = System.currentTimeMillis(),
                    execCommand = execCommand,
                    execState = if (execCommand != null) ExecState.PENDING_CONFIRM else ExecState.NONE,
                )
                mutateConversation(targetConversationId) { it.copy(messages = it.messages + assistantMessage) }
            } catch (e: CancellationException) {
                throw e
            } catch (e: Exception) {
                _errorMessage.value = "请求模型失败：${e.message ?: "未知错误"}"
            } finally {
                assistantReplyJob = null
                _isSending.value = false
            }
        }
    }

    fun confirmExec(assistantMessageId: String) {
        if (assistantReplyJob?.isActive == true) return
        if (!licenseManager.hasAccess()) {
            _errorMessage.value = "AI 助手授权已失效，请重新验证"
            return
        }
        val conversationId = _currentConversationId.value ?: return
        val message = _conversations.value
            .find { it.id == conversationId }
            ?.messages
            ?.find { it.id == assistantMessageId }
            ?.takeIf { it.execState == ExecState.PENDING_CONFIRM }
            ?: return
        val command = message.execCommand ?: return
        val validationError = RemoteTerminalGuard.validate(command)
        if (validationError != null) {
            updateExecResult(
                conversationId = conversationId,
                assistantMessageId = assistantMessageId,
                state = ExecState.FAILED,
                stdout = "",
                stderr = agentValidationMessage(validationError),
            )
            appendExecTurnAndContinue(conversationId, assistantMessageId)
            return
        }

        setExecState(conversationId, assistantMessageId, ExecState.RUNNING)
        viewModelScope.launch {
            try {
                val result = bridge.runCommand(command)
                val state = if (result.timedOut) ExecState.FAILED else ExecState.DONE
                updateExecResult(conversationId, assistantMessageId, state, result.stdout, result.stderr)
                appendExecTurnAndContinue(conversationId, assistantMessageId)
            } catch (e: AgentCommandBridge.BridgeException) {
                updateExecResult(
                    conversationId = conversationId,
                    assistantMessageId = assistantMessageId,
                    state = ExecState.FAILED,
                    stdout = "",
                    stderr = e.message ?: "执行失败",
                )
                appendExecTurnAndContinue(conversationId, assistantMessageId)
            }
        }
    }

    fun rejectExec(assistantMessageId: String) {
        if (assistantReplyJob?.isActive == true) return
        val conversationId = _currentConversationId.value ?: return
        _conversations.value
            .find { it.id == conversationId }
            ?.messages
            ?.find { it.id == assistantMessageId }
            ?.takeIf { it.execState == ExecState.PENDING_CONFIRM }
            ?: return
        setExecState(conversationId, assistantMessageId, ExecState.REJECTED)
        appendExecTurnAndContinue(conversationId, assistantMessageId)
    }

    private fun setExecState(conversationId: String, assistantMessageId: String, state: ExecState) {
        mutateConversation(conversationId) { conversation ->
            conversation.copy(
                messages = conversation.messages.map { message ->
                    if (message.id == assistantMessageId) {
                        message.copy(execState = state)
                    } else {
                        message
                    }
                },
            )
        }
    }

    private fun updateExecResult(
        conversationId: String,
        assistantMessageId: String,
        state: ExecState,
        stdout: String,
        stderr: String,
    ) {
        mutateConversation(conversationId) { conversation ->
            conversation.copy(
                messages = conversation.messages.map { message ->
                    if (message.id == assistantMessageId) {
                        message.copy(
                            execState = state,
                            execStdout = stdout,
                            execStderr = stderr,
                        )
                    } else {
                        message
                    }
                },
            )
        }
    }

    private fun appendExecTurnAndContinue(conversationId: String, assistantMessageId: String) {
        val message = _conversations.value
            .find { it.id == conversationId }
            ?.messages
            ?.find { it.id == assistantMessageId }
            ?: return
        val execTurn = ChatMessage(
            id = "msg-${System.currentTimeMillis()}",
            role = "exec",
            content = "",
            timestamp = System.currentTimeMillis(),
            execCommand = message.execCommand,
            execState = message.execState,
            execStdout = message.execStdout,
            execStderr = message.execStderr,
        )
        mutateConversation(conversationId) { it.copy(messages = it.messages + execTurn) }
        requestAssistantReply(conversationId)
    }

    fun clearError() {
        _errorMessage.value = null
    }

    private fun agentValidationMessage(error: RemoteTerminalValidationError): String = when (error) {
        RemoteTerminalValidationError.Empty -> "AI 提议的命令为空，已拒绝执行"
        RemoteTerminalValidationError.ProtectedIpc -> "AI 提议的命令涉及受保护的 IPC 文件，已拒绝执行"
        RemoteTerminalValidationError.NestedScript -> "AI 提议的命令包含脚本链路或后台执行特征，已拒绝执行"
    }
}
