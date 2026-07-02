package com.shell.liangyi.ui.agent

import android.app.Application
import android.content.Context
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
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

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

    private val _apiConfig = MutableStateFlow(loadApiConfig())
    val apiConfig: StateFlow<AgentApiConfig> = _apiConfig.asStateFlow()

    private val _conversations = MutableStateFlow(store.loadAll())
    val conversations: StateFlow<List<Conversation>> = _conversations.asStateFlow()

    private val _currentConversationId = MutableStateFlow(_conversations.value.firstOrNull()?.id)
    val currentConversationId: StateFlow<String?> = _currentConversationId.asStateFlow()

    // 每次 conversations/currentConversationId 变化时手动同步这个 flow，
    // 不引入 combine/stateIn 的额外样板
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
        model = prefs.getString(KEY_MODEL, "") ?: ""
    )

    fun updateApiConfig(baseUrl: String, token: String, model: String) {
        prefs.edit()
            .putString(KEY_BASE_URL, baseUrl)
            .putString(KEY_TOKEN, token)
            .putString(KEY_MODEL, model)
            .apply()
        _apiConfig.value = AgentApiConfig(baseUrl, token, model)
    }

    fun newConversation() {
        val conv = Conversation(
            id = "conv-" + System.currentTimeMillis(),
            title = "新对话",
            createdAt = System.currentTimeMillis()
        )
        _conversations.value = listOf(conv) + _conversations.value
        _currentConversationId.value = conv.id
        _currentConversationFlow.value = conv
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
        val id = _currentConversationId.value ?: return
        _conversations.value = _conversations.value.map { if (it.id == id) transform(it) else it }
        _currentConversationFlow.value = currentConversationValue()
        persist()
    }

    private fun persist() {
        store.saveAll(_conversations.value)
    }

    fun sendUserMessage(text: String) {
        if (text.isBlank()) return
        if (!_apiConfig.value.isConfigured) {
            _errorMessage.value = "请先在设置里填写 API 地址和模型名称"
            return
        }
        if (_currentConversationId.value == null) newConversation()

        val userMsg = ChatMessage(
            id = "msg-" + System.currentTimeMillis(),
            role = "user",
            content = text,
            timestamp = System.currentTimeMillis()
        )
        mutateCurrent { conv ->
            val retitled = if (conv.messages.isEmpty()) conv.copy(title = text.take(20)) else conv
            retitled.copy(messages = retitled.messages + userMsg)
        }

        requestAssistantReply()
    }

    private fun requestAssistantReply() {
        val history = currentConversationValue()?.messages ?: return
        _isSending.value = true
        _errorMessage.value = null
        viewModelScope.launch {
            try {
                val reply = OpenAIClient.chatCompletion(_apiConfig.value, history)
                val execCmd = AgentPrompts.parseExecCommand(reply)
                val assistantMsg = ChatMessage(
                    id = "msg-" + System.currentTimeMillis(),
                    role = "assistant",
                    content = reply,
                    timestamp = System.currentTimeMillis(),
                    execCommand = execCmd,
                    execState = if (execCmd != null) ExecState.PENDING_CONFIRM else ExecState.NONE
                )
                mutateCurrent { it.copy(messages = it.messages + assistantMsg) }
            } catch (e: Exception) {
                _errorMessage.value = "请求模型失败：${e.message}"
            } finally {
                _isSending.value = false
            }
        }
    }

    /** 用户在"待确认"卡片上点了运行。 */
    fun confirmExec(assistantMessageId: String) {
        val cmd = currentConversationValue()?.messages?.find { it.id == assistantMessageId }?.execCommand
            ?: return
        setExecState(assistantMessageId, ExecState.RUNNING)
        viewModelScope.launch {
            try {
                val result = bridge.runCommand(cmd)
                val state = if (result.timedOut) ExecState.FAILED else ExecState.DONE
                updateExecResult(assistantMessageId, state, result.stdout, result.stderr)
                appendExecTurnAndContinue(assistantMessageId)
            } catch (e: AgentCommandBridge.BridgeException) {
                updateExecResult(assistantMessageId, ExecState.FAILED, "", e.message ?: "执行失败")
                appendExecTurnAndContinue(assistantMessageId)
            }
        }
    }

    fun rejectExec(assistantMessageId: String) {
        setExecState(assistantMessageId, ExecState.REJECTED)
        appendExecTurnAndContinue(assistantMessageId)
    }

    private fun setExecState(assistantMessageId: String, state: ExecState) {
        mutateCurrent { conv ->
            conv.copy(messages = conv.messages.map {
                if (it.id == assistantMessageId) it.copy(execState = state) else it
            })
        }
    }

    private fun updateExecResult(assistantMessageId: String, state: ExecState, stdout: String, stderr: String) {
        mutateCurrent { conv ->
            conv.copy(messages = conv.messages.map {
                if (it.id == assistantMessageId) it.copy(execState = state, execStdout = stdout, execStderr = stderr) else it
            })
        }
    }

    /** 把执行结果作为一轮 exec 消息追加进对话，再自动请求模型总结/继续。 */
    private fun appendExecTurnAndContinue(assistantMessageId: String) {
        val msg = currentConversationValue()?.messages?.find { it.id == assistantMessageId } ?: return
        val execTurn = ChatMessage(
            id = "msg-" + System.currentTimeMillis(),
            role = "exec",
            content = "",
            timestamp = System.currentTimeMillis(),
            execCommand = msg.execCommand,
            execState = msg.execState,
            execStdout = msg.execStdout,
            execStderr = msg.execStderr
        )
        mutateCurrent { it.copy(messages = it.messages + execTurn) }
        requestAssistantReply()
    }

    fun clearError() {
        _errorMessage.value = null
    }
}
