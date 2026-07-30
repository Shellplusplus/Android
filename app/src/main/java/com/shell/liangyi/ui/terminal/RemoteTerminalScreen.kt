package com.shell.liangyi.ui.terminal

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.widget.Toast
import androidx.annotation.StringRes
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.Send
import androidx.compose.material.icons.rounded.ContentCopy
import androidx.compose.material.icons.rounded.Star
import androidx.compose.material.icons.rounded.StarBorder
import androidx.compose.material.icons.rounded.Sync
import androidx.compose.material.icons.rounded.Terminal
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

@Composable
fun RemoteTerminalScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val context = LocalContext.current
    val uiState by shellViewModel.remoteTerminalUiState.collectAsStateWithLifecycle()
    val connectionState by shellViewModel.connectionState.collectAsStateWithLifecycle(
        initialValue = ConnectionState.DISCONNECTED,
    )
    val scrollBehavior = MiuixScrollBehavior()

    LaunchedEffect(Unit) {
        shellViewModel.remoteTerminalMessages.collect { message ->
            Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
        }
    }

    ShellBackScaffold(
        title = stringResource(R.string.remote_terminal),
        onBack = { navController.popBackStack() },
        collapseTitleOnScroll = true,
        scrollBehavior = scrollBehavior,
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp),
            contentPadding = PaddingValues(
                top = innerPadding.calculateTopPadding(),
                bottom = innerPadding.calculateBottomPadding(),
            ),
            verticalArrangement = Arrangement.spacedBy(0.dp),
        ) {
            item {
                Spacer(modifier = Modifier.height(12.dp))
            }
            item {
                TerminalHeroCard(
                    connectionState = connectionState,
                    uiState = uiState,
                )
            }
            item {
                Spacer(modifier = Modifier.height(12.dp))
            }
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    ActionButton(
                        modifier = Modifier.weight(1f),
                        text = "刷新连接",
                        icon = Icons.Rounded.Sync,
                        enabled = !uiState.isRunning,
                        filled = false,
                        onClick = shellViewModel::ensureConnection,
                    )
                    ActionButton(
                        modifier = Modifier.weight(1f),
                        text = if (uiState.isRunning) "等待返回中" else "发送命令",
                        icon = Icons.AutoMirrored.Rounded.Send,
                        enabled = !uiState.isRunning,
                        filled = true,
                        onClick = shellViewModel::sendRemoteTerminalCommand,
                    )
                }
            }
            item {
                Spacer(modifier = Modifier.height(20.dp))
            }
            item {
                SectionHeader(
                    title = "命令输入",
                    summary = "标准端只保留和手表端一致的手动终端能力，不包含 AI 助手",
                )
            }
            item {
                Spacer(modifier = Modifier.height(10.dp))
            }
            item {
                InputCard(
                    uiState = uiState,
                    onInputChange = shellViewModel::updateRemoteTerminalInput,
                )
            }
            if (uiState.hasResult) {
                item {
                    Spacer(modifier = Modifier.height(20.dp))
                }
                item {
                    SectionHeader(
                        title = "执行结果",
                        summary = resultSummary(uiState),
                    )
                }
                item {
                    Spacer(modifier = Modifier.height(10.dp))
                }
                item {
                    ResultCard(
                        uiState = uiState,
                        onCopy = { copyText(context, uiState.fullOutput.ifBlank { uiState.output }) },
                    )
                }
            }
            if (uiState.history.isNotEmpty()) {
                item {
                    Spacer(modifier = Modifier.height(20.dp))
                }
                item {
                    SectionHeader(
                        title = "最近命令",
                        summary = "和手表端一样，只保留最近发送过的命令",
                    )
                }
                item {
                    Spacer(modifier = Modifier.height(10.dp))
                }
                item {
                    CommandGroupCard {
                        FlowRow(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp),
                        ) {
                            uiState.history.forEach { command ->
                                CommandChip(
                                    command = command,
                                    isFavorite = uiState.favorites.contains(command),
                                    onClick = { shellViewModel.applyRemoteTerminalCommand(command) },
                                    onToggleFavorite = { shellViewModel.toggleRemoteTerminalFavorite(command) },
                                )
                            }
                        }
                    }
                }
            }
            if (uiState.favorites.isNotEmpty()) {
                item {
                    Spacer(modifier = Modifier.height(20.dp))
                }
                item {
                    SectionHeader(
                        title = "收藏命令",
                        summary = "点一下即可回填到输入框，右侧星标可以取消收藏",
                    )
                }
                item {
                    Spacer(modifier = Modifier.height(10.dp))
                }
                item {
                    CommandGroupCard {
                        FlowRow(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp),
                        ) {
                            uiState.favorites.forEach { command ->
                                CommandChip(
                                    command = command,
                                    isFavorite = true,
                                    onClick = { shellViewModel.applyRemoteTerminalCommand(command) },
                                    onToggleFavorite = { shellViewModel.toggleRemoteTerminalFavorite(command) },
                                )
                            }
                        }
                    }
                }
            }
            RemoteTerminalCatalog.categories.forEach { category ->
                item {
                    Spacer(modifier = Modifier.height(20.dp))
                }
                item {
                    SectionHeader(
                        title = category.title,
                        summary = category.summary,
                    )
                }
                item {
                    Spacer(modifier = Modifier.height(10.dp))
                }
                item {
                    CommandGroupCard {
                        Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                            category.commands.forEach { preset ->
                                QuickCommandCard(
                                    command = preset.command,
                                    description = preset.description,
                                    dangerous = preset.dangerous,
                                    isFavorite = uiState.favorites.contains(preset.command),
                                    onUse = { shellViewModel.applyRemoteTerminalCommand(preset.command) },
                                    onToggleFavorite = {
                                        shellViewModel.toggleRemoteTerminalFavorite(preset.command)
                                    },
                                )
                            }
                        }
                    }
                }
            }
            item {
                Spacer(modifier = Modifier.height(20.dp))
            }
        }
    }
}

@Composable
private fun TerminalHeroCard(
    connectionState: ConnectionState,
    uiState: RemoteTerminalUiState,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val accent = when {
        uiState.isRunning -> shellColors.warning
        connectionState == ConnectionState.CONNECTED -> shellColors.success
        connectionState == ConnectionState.CONNECTING -> shellColors.warning
        connectionState == ConnectionState.ERROR -> shellColors.danger
        else -> shellColors.primaryAction
    }
    val title = when {
        uiState.isRunning -> "命令正在执行"
        connectionState == ConnectionState.CONNECTED -> "手表终端已就绪"
        connectionState == ConnectionState.CONNECTING -> "正在建立终端会话"
        connectionState == ConnectionState.ERROR -> "终端通道异常"
        else -> "等待手表连接"
    }
    val summary = when {
        uiState.isRunning && uiState.lastCommand.isNotBlank() -> "正在等待手表返回 `${uiState.lastCommand}` 的结果"
        connectionState == ConnectionState.CONNECTED -> "可以直接向手表发送单条命令，适合排查状态与执行基础调试"
        connectionState == ConnectionState.CONNECTING -> "请稍等几秒，连接建立后即可发送命令"
        connectionState == ConnectionState.ERROR -> "建议先回到首页刷新连接，再重新进入远程终端"
        else -> "当前还没有连接到手表，请先在首页完成连接"
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    brush = Brush.linearGradient(
                        colors = listOf(
                            accent.copy(alpha = 0.18f),
                            accent.copy(alpha = 0.05f),
                            shellColors.cardBackground,
                        ),
                    ),
                )
                .padding(18.dp),
        ) {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.Top,
                ) {
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(6.dp),
                    ) {
                        StatusPill(
                            text = stringResource(connectionState.labelRes()),
                            dotColor = accent,
                        )
                        Text(
                            text = title,
                            fontSize = 22.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = colors.onSurface,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis,
                        )
                        Text(
                            text = summary,
                            fontSize = 13.sp,
                            color = colors.onSurfaceVariantSummary,
                            maxLines = 3,
                            overflow = TextOverflow.Ellipsis,
                        )
                    }
                    Box(
                        modifier = Modifier
                            .padding(start = 12.dp)
                            .size(56.dp)
                            .clip(CircleShape)
                            .background(accent.copy(alpha = 0.14f)),
                        contentAlignment = Alignment.Center,
                    ) {
                        Icon(
                            imageVector = Icons.Rounded.Terminal,
                            contentDescription = null,
                            modifier = Modifier.size(28.dp),
                            tint = accent,
                        )
                    }
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = "最近命令",
                        value = uiState.history.size.toString(),
                    )
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = "收藏命令",
                        value = uiState.favorites.size.toString(),
                    )
                }
            }
        }
    }
}

@Composable
private fun StatusPill(
    text: String,
    dotColor: Color,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        colors = CardColors(
            color = colors.surface.copy(alpha = 0.78f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 999.dp,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(dotColor),
            )
            Text(
                text = text,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface,
            )
        }
    }
}

@Composable
private fun MetricChip(
    label: String,
    value: String,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = modifier,
        colors = CardColors(
            color = colors.surface.copy(alpha = 0.74f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 12.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp),
        ) {
            Text(
                text = label,
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Text(
                text = value,
                fontSize = 16.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun SectionHeader(
    title: String,
    summary: String,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    Column(
        modifier = Modifier.padding(horizontal = 2.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        Text(
            text = title,
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface,
        )
        Text(
            text = summary,
            fontSize = 12.sp,
            color = shellColors.secondaryText,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

@Composable
private fun InputCard(
    uiState: RemoteTerminalUiState,
    onInputChange: (String) -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            FlowRow(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp),
            ) {
                InputHintChip(text = "仅支持单条命令")
                InputHintChip(text = "禁止脚本链路")
                InputHintChip(text = "禁止后台执行")
            }
            TerminalInputField(
                value = uiState.input,
                onValueChange = onInputChange,
                enabled = !uiState.isRunning,
                keyboardOptions = KeyboardOptions(imeAction = ImeAction.Send),
            )
            Text(
                text = "支持点击下方模板命令快速回填，再根据需要微调后发送。",
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun TerminalInputField(
    value: String,
    onValueChange: (String) -> Unit,
    enabled: Boolean,
    keyboardOptions: KeyboardOptions,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = colors.surface.copy(alpha = 0.92f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(14.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            Text(
                text = "输入要发送到手表的命令",
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurfaceVariantSummary,
            )
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(colors.surfaceContainer.copy(alpha = 0.78f))
                    .border(
                        width = 1.dp,
                        color = if (enabled) {
                            shellColors.primaryAction.copy(alpha = 0.14f)
                        } else {
                            colors.outline.copy(alpha = 0.2f)
                        },
                        shape = RoundedCornerShape(16.dp),
                    )
                    .padding(horizontal = 14.dp, vertical = 12.dp),
            ) {
                BasicTextField(
                    value = value,
                    onValueChange = onValueChange,
                    modifier = Modifier.fillMaxWidth(),
                    enabled = enabled,
                    minLines = 4,
                    maxLines = 6,
                    textStyle = MiuixTheme.textStyles.body1.copy(
                        fontFamily = FontFamily.Monospace,
                        fontSize = 14.sp,
                        lineHeight = 20.sp,
                        color = colors.onSurface,
                    ),
                    keyboardOptions = keyboardOptions,
                    cursorBrush = SolidColor(shellColors.primaryAction),
                    decorationBox = { innerTextField ->
                        Box(modifier = Modifier.fillMaxWidth()) {
                            if (value.isBlank()) {
                                Text(
                                    text = "例如：ps、free、uname -a",
                                    fontSize = 14.sp,
                                    fontFamily = FontFamily.Monospace,
                                    color = colors.onSurfaceVariantSummary.copy(alpha = 0.78f),
                                )
                            }
                            innerTextField()
                        }
                    },
                )
            }
        }
    }
}

@Composable
private fun InputHintChip(text: String) {
    val colors = MiuixTheme.colorScheme
    Card(
        colors = CardColors(
            color = colors.surfaceContainer,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 999.dp,
    ) {
        Text(
            text = text,
            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
            fontSize = 11.sp,
            fontWeight = FontWeight.Medium,
            color = colors.onSurfaceVariantSummary,
        )
    }
}

@Composable
private fun ResultCard(
    uiState: RemoteTerminalUiState,
    onCopy: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val cardColor = when (uiState.resultKind) {
        RemoteTerminalResultKind.Success -> shellColors.success.copy(alpha = 0.14f)
        RemoteTerminalResultKind.Error -> shellColors.danger.copy(alpha = 0.12f)
        RemoteTerminalResultKind.Waiting -> shellColors.warning.copy(alpha = 0.14f)
        RemoteTerminalResultKind.Idle -> shellColors.cardBackground
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = cardColor,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = "最近一次输出",
                        fontSize = 17.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = colors.onSurface,
                    )
                    if (uiState.lastCommand.isNotBlank()) {
                        Text(
                            text = "$ ${uiState.lastCommand}",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Medium,
                            color = colors.onSurfaceVariantSummary,
                            fontFamily = FontFamily.Monospace,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis,
                        )
                    }
                }
                ActionIconButton(
                    icon = Icons.Rounded.ContentCopy,
                    contentDescription = "复制输出",
                    onClick = onCopy,
                )
            }
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(220.dp)
                    .verticalScroll(rememberScrollState()),
            ) {
                Text(
                    text = uiState.output,
                    fontSize = 12.sp,
                    lineHeight = 18.sp,
                    fontFamily = FontFamily.Monospace,
                    color = colors.onSurface,
                )
            }
        }
    }
}

@Composable
private fun CommandGroupCard(content: @Composable () -> Unit) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),
        ) {
            content()
        }
    }
}

@Composable
private fun QuickCommandCard(
    command: String,
    description: String,
    dangerous: Boolean,
    isFavorite: Boolean,
    onUse: () -> Unit,
    onToggleFavorite: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = if (dangerous) shellColors.danger.copy(alpha = 0.1f) else colors.surface.copy(alpha = 0.72f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        onClick = onUse,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = command,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = FontFamily.Monospace,
                    color = colors.onSurface,
                )
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = if (dangerous) "$description · 危险命令" else description,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            ActionIconButton(
                icon = if (isFavorite) Icons.Rounded.Star else Icons.Rounded.StarBorder,
                contentDescription = if (isFavorite) "取消收藏" else "加入收藏",
                tint = if (isFavorite) shellColors.warning else colors.onSurfaceVariantSummary,
                onClick = onToggleFavorite,
            )
        }
    }
}

@Composable
private fun CommandChip(
    command: String,
    isFavorite: Boolean,
    onClick: () -> Unit,
    onToggleFavorite: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        colors = CardColors(
            color = colors.surface.copy(alpha = 0.72f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 14.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = command,
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = FontFamily.Monospace,
                color = colors.onSurface,
            )
            Spacer(modifier = Modifier.width(8.dp))
            ActionIconButton(
                icon = if (isFavorite) Icons.Rounded.Star else Icons.Rounded.StarBorder,
                contentDescription = if (isFavorite) "取消收藏" else "加入收藏",
                tint = if (isFavorite) shellColors.warning else colors.onSurfaceVariantSummary,
                onClick = onToggleFavorite,
            )
        }
    }
}

@Composable
private fun ActionButton(
    text: String,
    icon: ImageVector,
    enabled: Boolean,
    filled: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val containerColor = when {
        !enabled && filled -> shellColors.disabledAction
        filled -> shellColors.primaryAction
        else -> colors.surfaceContainer
    }
    val contentColor = if (filled) Color.White else colors.onSurface

    Card(
        modifier = modifier.height(56.dp),
        colors = CardColors(
            color = containerColor,
            contentColor = contentColor,
        ),
        cornerRadius = 18.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                text = text,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun ActionIconButton(
    icon: ImageVector,
    contentDescription: String,
    tint: Color = MiuixTheme.colorScheme.onSurface,
    onClick: () -> Unit,
) {
    Card(
        colors = CardColors(
            color = Color.Transparent,
            contentColor = tint,
        ),
        cornerRadius = 12.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Box(
            modifier = Modifier.padding(6.dp),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = contentDescription,
                tint = tint,
            )
        }
    }
}

private fun resultSummary(uiState: RemoteTerminalUiState): String {
    return when (uiState.resultKind) {
        RemoteTerminalResultKind.Waiting -> "正在等待手表返回执行结果"
        RemoteTerminalResultKind.Success -> "命令执行完成，可以复制输出继续排查"
        RemoteTerminalResultKind.Error -> "这次执行返回了错误或异常信息，请结合输出继续分析"
        RemoteTerminalResultKind.Idle -> "暂时还没有执行过命令"
    }
}

private fun copyText(context: Context, text: String) {
    val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    clipboard.setPrimaryClip(ClipData.newPlainText("Shell++ Terminal Output", text))
    Toast.makeText(context, "输出已复制", Toast.LENGTH_SHORT).show()
}

@StringRes
private fun ConnectionState.labelRes(): Int = when (this) {
    ConnectionState.DISCONNECTED -> R.string.disconnected
    ConnectionState.CONNECTING -> R.string.connection_state_connecting
    ConnectionState.CONNECTED -> R.string.connected
    ConnectionState.ERROR -> R.string.connection_state_error
}
