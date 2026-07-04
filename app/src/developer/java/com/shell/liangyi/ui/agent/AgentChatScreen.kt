package com.shell.liangyi.ui.agent

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.imePadding
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.Send
import androidx.compose.material.icons.rounded.Add
import androidx.compose.material.icons.rounded.DeleteOutline
import androidx.compose.material.icons.rounded.History
import androidx.compose.material.icons.rounded.Settings
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import com.shell.liangyi.model.AgentApiConfig
import com.shell.liangyi.model.ChatMessage
import com.shell.liangyi.model.Conversation
import com.shell.liangyi.model.ExecState
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import androidx.compose.material3.Text as MaterialText

@Composable
fun AgentChatScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
    viewModel: AgentViewModel = viewModel(),
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
        if (conversations.isEmpty()) {
            viewModel.newConversation()
        }
    }

    val listState = rememberLazyListState()
    val messages = conversation?.messages.orEmpty()
    LaunchedEffect(messages.size, isSending) {
        val itemCount = messages.size + if (isSending) 1 else 0
        if (itemCount > 0) {
            listState.animateScrollToItem(itemCount - 1)
        }
    }

    ShellBackScaffold(
        title = "AI 助手",
        onBack = { navController.popBackStack() },
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .navigationBarsPadding()
                .imePadding()
                .padding(horizontal = 12.dp),
        ) {
            Spacer(modifier = Modifier.height(12.dp))
            AgentQuickActionStrip(
                onOpenHistory = { showHistory = true },
                onNewConversation = viewModel::newConversation,
                onOpenSettings = { showSettings = true },
            )

            errorMessage?.let { message ->
                Spacer(modifier = Modifier.height(12.dp))
                ErrorBanner(
                    message = message,
                    onDismiss = viewModel::clearError,
                )
            }

            Spacer(modifier = Modifier.height(12.dp))
            if (messages.isEmpty() && !isSending) {
                EmptyConversationCard(modifier = Modifier.weight(1f))
            } else {
                LazyColumn(
                    state = listState,
                    modifier = Modifier
                        .weight(1f)
                        .fillMaxWidth(),
                    contentPadding = PaddingValues(vertical = 4.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    items(messages, key = { it.id }) { message ->
                        MessageRow(
                            msg = message,
                            onConfirm = { viewModel.confirmExec(message.id) },
                            onReject = { viewModel.rejectExec(message.id) },
                        )
                    }
                    if (isSending) {
                        item {
                            AssistantTypingCard()
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(12.dp))
            ComposerBar(
                value = input,
                enabled = !isSending,
                onValueChange = { input = it },
                onSend = {
                    val text = input.trim()
                    if (text.isNotEmpty() && !isSending) {
                        viewModel.sendUserMessage(text)
                        input = ""
                    }
                },
            )
            Spacer(modifier = Modifier.height(12.dp))
        }
    }

    if (showHistory) {
        HistoryDialog(
            conversations = conversations,
            currentConversationId = conversation?.id,
            onSelect = { id ->
                viewModel.selectConversation(id)
                showHistory = false
            },
            onDelete = viewModel::deleteConversation,
            onDismiss = { showHistory = false },
        )
    }

    if (showSettings) {
        ApiConfigDialog(
            config = apiConfig,
            onSave = { baseUrl, token, model ->
                viewModel.updateApiConfig(baseUrl, token, model)
                showSettings = false
            },
            onDismiss = { showSettings = false },
        )
    }
}

@Composable
private fun AgentQuickActionStrip(
    onOpenHistory: () -> Unit,
    onNewConversation: () -> Unit,
    onOpenSettings: () -> Unit,
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        AgentQuickActionButton(
            icon = Icons.Rounded.History,
            label = "历史对话",
            onClick = onOpenHistory,
            modifier = Modifier.weight(1f),
        )
        AgentQuickActionButton(
            icon = Icons.Rounded.Add,
            label = "新建对话",
            onClick = onNewConversation,
            modifier = Modifier.weight(1f),
        )
        AgentQuickActionButton(
            icon = Icons.Rounded.Settings,
            label = "API 设置",
            onClick = onOpenSettings,
            modifier = Modifier.weight(1f),
        )
    }
}

@Composable
private fun AgentQuickActionButton(
    icon: ImageVector,
    label: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Row(
        modifier = modifier
            .clip(RoundedCornerShape(18.dp))
            .background(shellColors.cardBackground)
            .border(
                width = 1.dp,
                color = colors.outline.copy(alpha = 0.08f),
                shape = RoundedCornerShape(18.dp),
            )
            .clickable(onClick = onClick)
            .padding(horizontal = 12.dp, vertical = 12.dp),
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(
            modifier = Modifier
                .size(28.dp)
                .background(
                    color = shellColors.primaryAction.copy(alpha = 0.12f),
                    shape = CircleShape,
                ),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = label,
                tint = shellColors.primaryAction,
                modifier = Modifier.size(16.dp),
            )
        }
        Spacer(modifier = Modifier.size(8.dp))
        Text(
            text = label,
            fontSize = 13.sp,
            fontWeight = FontWeight.Medium,
            color = colors.onSurface,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

@Composable
private fun ErrorBanner(
    message: String,
    onDismiss: () -> Unit,
) {
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.destructiveAction.copy(alpha = 0.12f),
            contentColor = shellColors.destructiveAction,
        ),
        cornerRadius = 18.dp,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = message,
                modifier = Modifier.weight(1f),
                fontSize = 13.sp,
                color = shellColors.destructiveAction,
            )
            AgentActionButton(
                text = "知道了",
                style = AgentButtonStyle.Secondary,
                onClick = onDismiss,
            )
        }
    }
}

@Composable
private fun EmptyConversationCard(modifier: Modifier = Modifier) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 18.dp, vertical = 20.dp),
            verticalArrangement = Arrangement.Center,
        ) {
            Text(
                text = "开始一段新的助手对话",
                fontSize = 20.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "你可以直接让它分析日志、生成命令，或者帮你整理手环调试步骤。",
                fontSize = 14.sp,
                color = colors.onSurfaceVariantSummary,
            )
            Spacer(modifier = Modifier.height(18.dp))
            SuggestionChip(text = "帮我检查最近一次同步失败的原因")
            Spacer(modifier = Modifier.height(8.dp))
            SuggestionChip(text = "生成一个查看存储空间的命令")
            Spacer(modifier = Modifier.height(8.dp))
            SuggestionChip(text = "整理蓝牙连接排查步骤")
        }
    }
}

@Composable
private fun SuggestionChip(text: String) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.pageBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 16.dp,
    ) {
        Text(
            text = text,
            modifier = Modifier.padding(horizontal = 14.dp, vertical = 12.dp),
            fontSize = 13.sp,
            fontWeight = FontWeight.Medium,
            color = colors.onSurfaceVariantSummary,
        )
    }
}

@Composable
private fun MessageRow(
    msg: ChatMessage,
    onConfirm: () -> Unit,
    onReject: () -> Unit,
) {
    if (msg.role == "exec") {
        return
    }

    val isUser = msg.role == "user"
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val bubbleColor = if (isUser) {
        shellColors.primaryAction.copy(alpha = 0.14f)
    } else {
        shellColors.cardBackground
    }

    Column(
        modifier = Modifier.fillMaxWidth(),
        horizontalAlignment = if (isUser) Alignment.End else Alignment.Start,
    ) {
        Text(
            text = if (isUser) "你" else "助手",
            modifier = Modifier.padding(horizontal = 6.dp),
            fontSize = 12.sp,
            fontWeight = FontWeight.Medium,
            color = colors.onSurfaceVariantSummary,
        )
        Spacer(modifier = Modifier.height(4.dp))
        Card(
            modifier = Modifier.widthIn(max = 320.dp),
            colors = CardColors(
                color = bubbleColor,
                contentColor = colors.onSurface,
            ),
            cornerRadius = 20.dp,
        ) {
            Column(modifier = Modifier.padding(14.dp)) {
                Text(
                    text = msg.content.ifBlank { "空消息" },
                    fontSize = 15.sp,
                    color = colors.onSurface,
                )
                if (msg.execCommand != null) {
                    Spacer(modifier = Modifier.height(12.dp))
                    ExecCard(
                        msg = msg,
                        onConfirm = onConfirm,
                        onReject = onReject,
                    )
                }
            }
        }
    }
}

@Composable
private fun ExecCard(
    msg: ChatMessage,
    onConfirm: () -> Unit,
    onReject: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.pageBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(
                    text = "建议命令",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                )
                ExecStateChip(state = msg.execState)
            }
            Spacer(modifier = Modifier.height(8.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(
                        color = shellColors.previewBackground,
                        shape = RoundedCornerShape(14.dp),
                    )
                    .padding(12.dp),
            ) {
                Text(
                    text = "$ ${msg.execCommand.orEmpty()}",
                    fontFamily = FontFamily.Monospace,
                    fontSize = 13.sp,
                    color = Color.White,
                )
            }

            when (msg.execState) {
                ExecState.PENDING_CONFIRM -> {
                    Spacer(modifier = Modifier.height(12.dp))
                    Text(
                        text = "确认后会发送到手环执行。",
                        fontSize = 12.sp,
                        color = colors.onSurfaceVariantSummary,
                    )
                    Spacer(modifier = Modifier.height(12.dp))
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        AgentActionButton(
                            text = "运行",
                            style = AgentButtonStyle.Primary,
                            onClick = onConfirm,
                        )
                        AgentActionButton(
                            text = "取消",
                            style = AgentButtonStyle.Secondary,
                            onClick = onReject,
                        )
                    }
                }

                ExecState.RUNNING -> {
                    Spacer(modifier = Modifier.height(12.dp))
                    Text(
                        text = "正在手环上执行命令，请稍候。",
                        fontSize = 12.sp,
                        color = colors.onSurfaceVariantSummary,
                    )
                }

                ExecState.DONE,
                ExecState.FAILED -> {
                    Spacer(modifier = Modifier.height(12.dp))
                    if (!msg.execStdout.isNullOrBlank()) {
                        OutputBlock(
                            title = "标准输出",
                            content = msg.execStdout,
                            contentColor = colors.onSurface,
                        )
                    }
                    if (!msg.execStderr.isNullOrBlank()) {
                        if (!msg.execStdout.isNullOrBlank()) {
                            Spacer(modifier = Modifier.height(10.dp))
                        }
                        OutputBlock(
                            title = "错误输出",
                            content = msg.execStderr,
                            contentColor = shellColors.destructiveAction,
                        )
                    }
                    if (msg.execStdout.isNullOrBlank() && msg.execStderr.isNullOrBlank()) {
                        Text(
                            text = "命令已结束，没有返回内容。",
                            fontSize = 12.sp,
                            color = colors.onSurfaceVariantSummary,
                        )
                    }
                }

                ExecState.REJECTED -> {
                    Spacer(modifier = Modifier.height(12.dp))
                    Text(
                        text = "已取消执行这条命令。",
                        fontSize = 12.sp,
                        color = colors.onSurfaceVariantSummary,
                    )
                }

                ExecState.NONE -> Unit
            }
        }
    }
}

@Composable
private fun OutputBlock(
    title: String,
    content: String,
    contentColor: Color,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 14.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(10.dp),
        ) {
            Text(
                text = title,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = content,
                fontFamily = FontFamily.Monospace,
                fontSize = 12.sp,
                color = contentColor,
            )
        }
    }
}

@Composable
private fun ExecStateChip(state: ExecState) {
    val shellColors = ShellTheme.colors
    val accent = when (state) {
        ExecState.PENDING_CONFIRM -> shellColors.warning
        ExecState.RUNNING -> shellColors.primaryAction
        ExecState.DONE -> shellColors.success
        ExecState.FAILED -> shellColors.destructiveAction
        ExecState.REJECTED -> shellColors.secondaryText
        ExecState.NONE -> shellColors.secondaryText
    }
    val label = when (state) {
        ExecState.PENDING_CONFIRM -> "待确认"
        ExecState.RUNNING -> "执行中"
        ExecState.DONE -> "已完成"
        ExecState.FAILED -> "失败"
        ExecState.REJECTED -> "已取消"
        ExecState.NONE -> "未执行"
    }

    Box(
        modifier = Modifier
            .background(
                color = accent.copy(alpha = 0.14f),
                shape = RoundedCornerShape(999.dp),
            )
            .padding(horizontal = 10.dp, vertical = 4.dp),
    ) {
        Text(
            text = label,
            fontSize = 11.sp,
            fontWeight = FontWeight.Medium,
            color = accent,
        )
    }
}

@Composable
private fun AssistantTypingCard() {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.widthIn(max = 160.dp),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 20.dp,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 14.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            CircularProgressIndicator(
                modifier = Modifier.size(16.dp),
                strokeWidth = 2.dp,
            )
            Text(
                text = "助手正在思考…",
                fontSize = 13.sp,
                color = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun ComposerBar(
    value: String,
    enabled: Boolean,
    onValueChange: (String) -> Unit,
    onSend: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = Modifier.fillMaxWidth(),
        enabled = enabled,
        textStyle = TextStyle(
            color = colors.onSurface,
            fontSize = 15.sp,
            lineHeight = 21.sp,
        ),
        placeholder = {
            MaterialText("输入问题、命令需求或调试上下文…")
        },
        shape = RoundedCornerShape(24.dp),
        maxLines = 5,
        keyboardOptions = androidx.compose.foundation.text.KeyboardOptions(
            capitalization = KeyboardCapitalization.Sentences,
            imeAction = ImeAction.Send,
        ),
        keyboardActions = androidx.compose.foundation.text.KeyboardActions(onSend = { onSend() }),
        trailingIcon = {
            IconButton(
                enabled = enabled && value.isNotBlank(),
                onClick = onSend,
            ) {
                Icon(
                    imageVector = Icons.AutoMirrored.Rounded.Send,
                    contentDescription = "发送",
                    tint = if (enabled && value.isNotBlank()) {
                        shellColors.primaryAction
                    } else {
                        colors.onSurfaceVariantSummary
                    },
                )
            }
        },
        colors = OutlinedTextFieldDefaults.colors(
            focusedBorderColor = shellColors.primaryAction.copy(alpha = 0.32f),
            unfocusedBorderColor = colors.outline.copy(alpha = 0.14f),
            disabledBorderColor = colors.outline.copy(alpha = 0.10f),
            focusedContainerColor = Color.White,
            unfocusedContainerColor = Color.White,
            disabledContainerColor = Color.White,
            focusedTextColor = colors.onSurface,
            unfocusedTextColor = colors.onSurface,
            disabledTextColor = colors.onSurface,
            focusedPlaceholderColor = colors.onSurfaceVariantSummary,
            unfocusedPlaceholderColor = colors.onSurfaceVariantSummary,
            disabledPlaceholderColor = colors.onSurfaceVariantSummary,
            focusedTrailingIconColor = shellColors.primaryAction,
            unfocusedTrailingIconColor = colors.onSurfaceVariantSummary,
            disabledTrailingIconColor = colors.onSurfaceVariantSummary,
        ),
    )
}

private enum class AgentButtonStyle {
    Primary,
    Secondary,
    Destructive,
}

@Composable
private fun AgentActionButton(
    text: String,
    style: AgentButtonStyle,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val containerColor = when (style) {
        AgentButtonStyle.Primary -> shellColors.primaryAction
        AgentButtonStyle.Secondary -> shellColors.pageBackground
        AgentButtonStyle.Destructive -> shellColors.destructiveAction
    }
    val contentColor = when (style) {
        AgentButtonStyle.Primary,
        AgentButtonStyle.Destructive -> Color.White
        AgentButtonStyle.Secondary -> colors.onSurface
    }
    val borderColor = when (style) {
        AgentButtonStyle.Secondary -> colors.outline.copy(alpha = 0.18f)
        else -> Color.Transparent
    }

    Box(
        modifier = modifier
            .background(containerColor, RoundedCornerShape(14.dp))
            .border(1.dp, borderColor, RoundedCornerShape(14.dp))
            .clickable(onClick = onClick)
            .padding(horizontal = 14.dp, vertical = 10.dp),
        contentAlignment = Alignment.Center,
    ) {
        Text(
            text = text,
            fontSize = 13.sp,
            fontWeight = FontWeight.Medium,
            color = contentColor,
        )
    }
}

@Composable
private fun HistoryDialog(
    conversations: List<Conversation>,
    currentConversationId: String?,
    onSelect: (String) -> Unit,
    onDelete: (String) -> Unit,
    onDismiss: () -> Unit,
) {
    AgentDialog(
        title = "历史对话",
        subtitle = "切换已有会话，或清理不再需要的记录。",
        onDismiss = onDismiss,
        footer = {
            AgentActionButton(
                text = "关闭",
                style = AgentButtonStyle.Secondary,
                onClick = onDismiss,
                modifier = Modifier.fillMaxWidth(),
            )
        },
    ) {
        if (conversations.isEmpty()) {
            Text(
                text = "还没有历史对话。",
                fontSize = 14.sp,
                color = MiuixTheme.colorScheme.onSurfaceVariantSummary,
            )
        } else {
            LazyColumn(
                modifier = Modifier.heightIn(max = 320.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                items(conversations, key = { it.id }) { conversation ->
                    HistoryItem(
                        conversation = conversation,
                        selected = conversation.id == currentConversationId,
                        onSelect = { onSelect(conversation.id) },
                        onDelete = { onDelete(conversation.id) },
                    )
                }
            }
        }
    }
}

@Composable
private fun HistoryItem(
    conversation: Conversation,
    selected: Boolean,
    onSelect: () -> Unit,
    onDelete: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val shape = RoundedCornerShape(18.dp)
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(shape)
            .background(
                color = if (selected) {
                    shellColors.primaryAction.copy(alpha = 0.10f)
                } else {
                    shellColors.pageBackground
                },
                shape = shape,
            )
            .border(
                width = 1.dp,
                color = if (selected) {
                    shellColors.primaryAction.copy(alpha = 0.22f)
                } else {
                    colors.outline.copy(alpha = 0.08f)
                },
                shape = shape,
            )
            .clickable(onClick = onSelect)
            .padding(horizontal = 14.dp, vertical = 14.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Text(
                    text = conversation.title.ifBlank { "新对话" },
                    modifier = Modifier.weight(1f, fill = false),
                    fontSize = 15.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                if (selected) {
                    AgentInlineBadge(text = "当前")
                }
            }
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "${conversation.messages.count { it.role != "exec" }} 条消息 · ${formatConversationTime(conversation.createdAt)}",
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
        AgentIconActionButton(
            icon = Icons.Rounded.DeleteOutline,
            contentDescription = "删除对话",
            tint = shellColors.destructiveAction,
            onClick = onDelete,
        )
    }
}

@Composable
private fun ApiConfigDialog(
    config: AgentApiConfig,
    onSave: (String, String, String) -> Unit,
    onDismiss: () -> Unit,
) {
    var baseUrl by remember(config.baseUrl) { mutableStateOf(config.baseUrl) }
    var token by remember(config.token) { mutableStateOf(config.token) }
    var model by remember(config.model) { mutableStateOf(config.model) }

    AgentDialog(
        title = "AI API 设置",
        subtitle = "统一在这里配置模型服务地址、密钥和模型名称。",
        onDismiss = onDismiss,
        footer = {
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                AgentActionButton(
                    text = "取消",
                    style = AgentButtonStyle.Secondary,
                    onClick = onDismiss,
                    modifier = Modifier.weight(1f),
                )
                AgentActionButton(
                    text = "保存",
                    style = AgentButtonStyle.Primary,
                    onClick = { onSave(baseUrl.trim(), token.trim(), model.trim()) },
                    modifier = Modifier.weight(1f),
                )
            }
        },
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
            AgentConfigStatusCard(
                isConfigured = config.isConfigured,
                model = config.model,
            )
            AgentOutlinedField(
                value = baseUrl,
                onValueChange = { baseUrl = it },
                label = "Base URL",
                placeholder = "https://api.openai.com/v1",
                singleLine = true,
            )
            AgentOutlinedField(
                value = token,
                onValueChange = { token = it },
                label = "API Token",
                placeholder = "sk-...",
                singleLine = true,
                isPassword = true,
            )
            AgentOutlinedField(
                value = model,
                onValueChange = { model = it },
                label = "模型名称",
                placeholder = "gpt-4o-mini",
                singleLine = true,
            )
        }
    }
}

@Composable
private fun AgentConfigStatusCard(
    isConfigured: Boolean,
    model: String,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.pageBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 12.dp),
        ) {
            Text(
                text = if (isConfigured) "当前已连接模型" else "尚未完成 API 配置",
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = if (isConfigured) {
                    model.ifBlank { "已填写自定义模型" }
                } else {
                    "填写地址、密钥和模型名后，就可以直接开始对话。"
                },
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun AgentOutlinedField(
    value: String,
    onValueChange: (String) -> Unit,
    label: String,
    placeholder: String,
    singleLine: Boolean,
    isPassword: Boolean = false,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        label = { MaterialText(label) },
        placeholder = { MaterialText(placeholder) },
        singleLine = singleLine,
        visualTransformation = if (isPassword) PasswordVisualTransformation() else androidx.compose.ui.text.input.VisualTransformation.None,
        shape = RoundedCornerShape(18.dp),
        colors = OutlinedTextFieldDefaults.colors(
            focusedBorderColor = shellColors.primaryAction,
            unfocusedBorderColor = colors.outline.copy(alpha = 0.28f),
            disabledBorderColor = colors.outline.copy(alpha = 0.18f),
            focusedContainerColor = shellColors.pageBackground,
            unfocusedContainerColor = shellColors.pageBackground,
            focusedTextColor = colors.onSurface,
            unfocusedTextColor = colors.onSurface,
            focusedLabelColor = shellColors.primaryAction,
            unfocusedLabelColor = colors.onSurfaceVariantSummary,
            focusedPlaceholderColor = colors.onSurfaceVariantSummary,
            unfocusedPlaceholderColor = colors.onSurfaceVariantSummary,
        ),
        modifier = Modifier.fillMaxWidth(),
    )
}

@Composable
private fun AgentDialog(
    title: String,
    subtitle: String,
    onDismiss: () -> Unit,
    footer: @Composable () -> Unit,
    content: @Composable () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shape = RoundedCornerShape(30.dp)
    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false),
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 20.dp)
                .widthIn(max = 460.dp),
            colors = CardColors(
                color = ShellTheme.colors.cardBackground,
                contentColor = colors.onSurface,
            ),
            cornerRadius = 30.dp,
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .border(
                        width = 1.dp,
                        color = colors.outline.copy(alpha = 0.08f),
                        shape = shape,
                    )
                    .padding(22.dp),
            ) {
                Text(
                    text = title,
                    fontSize = 22.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                )
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    text = subtitle,
                    fontSize = 13.sp,
                    color = colors.onSurfaceVariantSummary,
                )
                Spacer(modifier = Modifier.height(18.dp))
                content()
                Spacer(modifier = Modifier.height(18.dp))
                footer()
            }
        }
    }
}

@Composable
private fun AgentInlineBadge(text: String) {
    val shellColors = ShellTheme.colors
    Box(
        modifier = Modifier
            .background(
                color = shellColors.primaryAction.copy(alpha = 0.14f),
                shape = RoundedCornerShape(999.dp),
            )
            .padding(horizontal = 10.dp, vertical = 4.dp),
    ) {
        Text(
            text = text,
            fontSize = 11.sp,
            fontWeight = FontWeight.Medium,
            color = shellColors.primaryAction,
        )
    }
}

@Composable
private fun AgentIconActionButton(
    icon: ImageVector,
    contentDescription: String,
    tint: Color,
    onClick: () -> Unit,
) {
    Box(
        modifier = Modifier
            .size(36.dp)
            .clip(CircleShape)
            .background(tint.copy(alpha = 0.10f))
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center,
    ) {
        Icon(
            imageVector = icon,
            contentDescription = contentDescription,
            tint = tint,
            modifier = Modifier.size(18.dp),
        )
    }
}

private fun formatConversationTime(timestamp: Long): String {
    val formatter = SimpleDateFormat("MM/dd HH:mm", Locale.getDefault())
    return formatter.format(Date(timestamp))
}
