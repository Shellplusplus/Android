package com.shell.liangyi.ui.agent

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Add
import androidx.compose.material.icons.rounded.History
import androidx.compose.material.icons.automirrored.rounded.Send
import androidx.compose.material.icons.rounded.Settings
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import com.shell.liangyi.model.ChatMessage
import com.shell.liangyi.model.Conversation
import com.shell.liangyi.model.ExecState
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun AgentChatScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
    viewModel: AgentViewModel = viewModel()
) {
    val conversations by viewModel.conversations.collectAsState()
    val conversation by viewModel.currentConversationFlow.collectAsState()
    val isSending by viewModel.isSending.collectAsState()
    val errorMessage by viewModel.errorMessage.collectAsState()
    val apiConfig by viewModel.apiConfig.collectAsState()

    var showHistory by remember { mutableStateOf(false) }
    var showSettings by remember { mutableStateOf(false) }
    var input by remember { mutableStateOf("") }

    LaunchedEffect(Unit) {
        if (conversations.isEmpty()) viewModel.newConversation()
    }

    ShellBackScaffold(
        title = "AI 助手",
        onBack = { navController.popBackStack() },
        actions = {
            IconButton(onClick = { showHistory = true }) {
                Icon(Icons.Rounded.History, contentDescription = "历史对话")
            }
            IconButton(onClick = { viewModel.newConversation() }) {
                Icon(Icons.Rounded.Add, contentDescription = "新建对话")
            }
            IconButton(onClick = { showSettings = true }) {
                Icon(Icons.Rounded.Settings, contentDescription = "API 设置")
            }
        }
    ) { innerPadding ->
        Column(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
            errorMessage?.let { msg ->
                Card(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 11.dp, vertical = 4.dp),
                    colors = CardColors(
                        color = ShellTheme.colors.destructiveAction.copy(alpha = 0.15f),
                        contentColor = ShellTheme.colors.destructiveAction
                    ),
                    cornerRadius = 12.dp
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth().padding(10.dp),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text(msg, fontSize = 13.sp, color = ShellTheme.colors.destructiveAction)
                        TextButton(onClick = { viewModel.clearError() }) { Text("知道了") }
                    }
                }
            }

            val listState = rememberLazyListState()
            val messages = conversation?.messages.orEmpty()
            LaunchedEffect(messages.size) {
                if (messages.isNotEmpty()) listState.animateScrollToItem(messages.size - 1)
            }

            LazyColumn(
                state = listState,
                modifier = Modifier.weight(1f).fillMaxWidth(),
                contentPadding = androidx.compose.foundation.layout.PaddingValues(vertical = 8.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                items(messages, key = { it.id }) { msg ->
                    MessageRow(msg, onConfirm = { viewModel.confirmExec(msg.id) }, onReject = { viewModel.rejectExec(msg.id) })
                }
                if (isSending) {
                    item {
                        Row(
                            modifier = Modifier.fillMaxWidth().padding(horizontal = 14.dp),
                            horizontalArrangement = Arrangement.Start
                        ) {
                            CircularProgressIndicator(modifier = Modifier.height(18.dp).widthIn(max = 18.dp))
                        }
                    }
                }
            }

            Row(
                modifier = Modifier.fillMaxWidth().imePadding().padding(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                OutlinedTextField(
                    value = input,
                    onValueChange = { input = it },
                    modifier = Modifier.weight(1f),
                    placeholder = { Text("跟手环 agent 说点什么…") }
                )
                IconButton(
                    onClick = {
                        if (input.isNotBlank() && !isSending) {
                            viewModel.sendUserMessage(input.trim())
                            input = ""
                        }
                    }
                ) {
                    Icon(Icons.AutoMirrored.Rounded.Send, contentDescription = "发送")
                }
            }
        }
    }

    if (showHistory) {
        HistoryDialog(
            conversations = conversations,
            onSelect = { id -> viewModel.selectConversation(id); showHistory = false },
            onDelete = { id -> viewModel.deleteConversation(id) },
            onDismiss = { showHistory = false }
        )
    }

    if (showSettings) {
        ApiConfigDialog(
            baseUrl = apiConfig.baseUrl,
            token = apiConfig.token,
            model = apiConfig.model,
            onSave = { b, t, m -> viewModel.updateApiConfig(b, t, m); showSettings = false },
            onDismiss = { showSettings = false }
        )
    }
}

@Composable
private fun MessageRow(msg: ChatMessage, onConfirm: () -> Unit, onReject: () -> Unit) {
    if (msg.role == "exec") return // 执行结果已经内联展示在对应的 assistant 消息卡片里，不重复渲染

    val isUser = msg.role == "user"
    Row(
        modifier = Modifier.fillMaxWidth().padding(horizontal = 12.dp),
        horizontalArrangement = if (isUser) Arrangement.End else Arrangement.Start
    ) {
        Column(modifier = Modifier.widthIn(max = 280.dp)) {
            Card(
                colors = CardColors(
                    color = if (isUser) ShellTheme.colors.primaryAction.copy(alpha = 0.15f) else ShellTheme.colors.cardBackground,
                    contentColor = MiuixTheme.colorScheme.onSurface
                ),
                cornerRadius = 14.dp
            ) {
                Text(
                    text = msg.content.ifBlank { "（空）" },
                    modifier = Modifier.padding(10.dp),
                    fontSize = 15.sp
                )
            }

            if (msg.execCommand != null) {
                Spacer(modifier = Modifier.height(6.dp))
                ExecCard(msg, onConfirm, onReject)
            }
        }
    }
}

@Composable
private fun ExecCard(msg: ChatMessage, onConfirm: () -> Unit, onReject: () -> Unit) {
    Card(
        colors = CardColors(
            color = ShellTheme.colors.previewBackground,
            contentColor = MiuixTheme.colorScheme.onSurface
        ),
        cornerRadius = 12.dp
    ) {
        Column(modifier = Modifier.padding(10.dp)) {
            Text("$ " + msg.execCommand, fontFamily = FontFamily.Monospace, fontSize = 13.sp)
            when (msg.execState) {
                ExecState.PENDING_CONFIRM -> {
                    Spacer(modifier = Modifier.height(6.dp))
                    Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                        TextButton(onClick = onConfirm) { Text("运行", color = ShellTheme.colors.primaryAction) }
                        TextButton(onClick = onReject) { Text("取消", color = ShellTheme.colors.secondaryText) }
                    }
                }
                ExecState.RUNNING -> {
                    Spacer(modifier = Modifier.height(6.dp))
                    Text("正在手环上执行…", fontSize = 12.sp, color = ShellTheme.colors.secondaryText)
                }
                ExecState.DONE, ExecState.FAILED -> {
                    Spacer(modifier = Modifier.height(6.dp))
                    if (!msg.execStdout.isNullOrEmpty()) {
                        Text(msg.execStdout, fontFamily = FontFamily.Monospace, fontSize = 12.sp)
                    }
                    if (!msg.execStderr.isNullOrEmpty()) {
                        Text(
                            msg.execStderr,
                            fontFamily = FontFamily.Monospace,
                            fontSize = 12.sp,
                            color = ShellTheme.colors.destructiveAction
                        )
                    }
                    if (msg.execStdout.isNullOrEmpty() && msg.execStderr.isNullOrEmpty()) {
                        Text("(无输出)", fontSize = 12.sp, color = ShellTheme.colors.secondaryText)
                    }
                }
                ExecState.REJECTED -> {
                    Spacer(modifier = Modifier.height(6.dp))
                    Text("已取消", fontSize = 12.sp, color = ShellTheme.colors.secondaryText)
                }
                ExecState.NONE -> {}
            }
        }
    }
}

@Composable
private fun HistoryDialog(
    conversations: List<Conversation>,
    onSelect: (String) -> Unit,
    onDelete: (String) -> Unit,
    onDismiss: () -> Unit
) {
    AlertDialog(
        onDismissRequest = onDismiss,
        confirmButton = { TextButton(onClick = onDismiss) { Text("关闭") } },
        title = { Text("历史对话") },
        text = {
            LazyColumn(modifier = Modifier.height(320.dp)) {
                items(conversations, key = { it.id }) { conv ->
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(vertical = 8.dp),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = conv.title.ifBlank { "新对话" },
                            fontWeight = FontWeight.Medium,
                            modifier = Modifier.weight(1f).padding(end = 8.dp)
                        )
                        TextButton(onClick = { onSelect(conv.id) }) { Text("打开") }
                        TextButton(onClick = { onDelete(conv.id) }) {
                            Text("删除", color = MaterialTheme.colorScheme.error)
                        }
                    }
                }
            }
        }
    )
}

@Composable
private fun ApiConfigDialog(
    baseUrl: String,
    token: String,
    model: String,
    onSave: (String, String, String) -> Unit,
    onDismiss: () -> Unit
) {
    var b by remember { mutableStateOf(baseUrl) }
    var t by remember { mutableStateOf(token) }
    var m by remember { mutableStateOf(model) }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("AI API 设置") },
        text = {
            Column {
                OutlinedTextField(
                    value = b,
                    onValueChange = { b = it },
                    label = { Text("Base URL") },
                    placeholder = { Text("https://api.openai.com/v1") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = t,
                    onValueChange = { t = it },
                    label = { Text("API Token") },
                    singleLine = true,
                    visualTransformation = androidx.compose.ui.text.input.PasswordVisualTransformation(),
                    modifier = Modifier.fillMaxWidth()
                )
                Spacer(modifier = Modifier.height(8.dp))
                OutlinedTextField(
                    value = m,
                    onValueChange = { m = it },
                    label = { Text("模型名称") },
                    placeholder = { Text("gpt-4o-mini") },
                    singleLine = true,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        },
        confirmButton = {
            TextButton(onClick = { onSave(b.trim(), t.trim(), m.trim()) }) { Text("保存") }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) { Text("取消") }
        }
    )
}
