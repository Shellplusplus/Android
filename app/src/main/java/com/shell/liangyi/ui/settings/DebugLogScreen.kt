package com.shell.liangyi.ui.settings

import android.widget.Toast
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.shell.liangyi.core.LogEntry
import com.shell.liangyi.ui.components.ShellDetailScaffold
import com.shell.liangyi.ui.components.ShellEmptyStateCard
import com.shell.liangyi.ui.components.ShellSectionCard
import com.shell.liangyi.ui.components.ShellSectionTitle
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import top.yukonga.miuix.kmp.basic.ButtonDefaults
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.TextButton
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun DebugLogScreen(
    viewModel: ScreenshotViewModel = viewModel(),
    onBack: () -> Unit
) {
    val logs by viewModel.logs.collectAsState(initial = emptyList())
    val clipboardManager = LocalClipboardManager.current
    val context = LocalContext.current
    val allLogsText = remember(logs) { buildLogExportText(logs) }

    ShellDetailScaffold(
        title = "通信日志",
        onBack = onBack,
        actions = {
            TextButton(
                text = "复制",
                onClick = {
                    if (logs.isEmpty()) {
                        Toast.makeText(context, "暂无日志可复制", Toast.LENGTH_SHORT).show()
                    } else {
                        clipboardManager.setText(AnnotatedString(allLogsText))
                        Toast.makeText(context, "已复制全部日志", Toast.LENGTH_SHORT).show()
                    }
                },
                colors = ButtonDefaults.textButtonColorsPrimary()
            )
            TextButton(
                text = "清空",
                onClick = { viewModel.clearLogs() },
                colors = ButtonDefaults.textButtonColorsPrimary()
            )
        }
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = paddingValues
        ) {
            item {
                ShellSectionTitle("日志记录")
            }
            item {
                ShellSectionCard {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 18.dp, vertical = 16.dp)
                    ) {
                        Text(
                            text = "用于排查与手表之间的消息交互问题。",
                            color = MiuixTheme.colorScheme.onSurface,
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Medium
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "顶部可一键复制全部日志，关闭调试后不再记录。",
                            color = MiuixTheme.colorScheme.onSurfaceVariantSummary,
                            fontSize = 13.sp
                        )
                    }
                }
            }

            if (logs.isEmpty()) {
                item {
                    ShellEmptyStateCard(
                        title = "暂无日志",
                        summary = "开启调试日志后，这里会显示通信记录。"
                    )
                }
            } else {
                items(logs) { entry ->
                    ShellSectionCard {
                        LogRow(entry)
                    }
                }
            }
        }
    }
}

private fun buildLogExportText(logs: List<LogEntry>): String {
    val formatter = java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss", java.util.Locale.getDefault())
    return logs.joinToString(separator = "\n\n") { entry ->
        buildString {
            append("[")
            append(formatter.format(java.util.Date(entry.timestamp)))
            append("] ")
            append(entry.direction)
            append(" ")
            append(entry.type)
            if (entry.message.isNotEmpty()) {
                append("\n")
                append(entry.message)
            }
        }
    }
}

@Composable
private fun LogRow(entry: LogEntry) {
    val colors = MiuixTheme.colorScheme
    val directionColor = when (entry.direction) {
        "SEND" -> colors.primary
        "RECEIVE" -> Color(0xFF4CAF50)
        "SYSTEM" -> Color(0xFFFF9F0A)
        "ERROR" -> colors.error
        else -> colors.onSurfaceVariantActions
    }
    val time = remember(entry.timestamp) {
        java.text.SimpleDateFormat("HH:mm:ss", java.util.Locale.getDefault())
            .format(java.util.Date(entry.timestamp))
    }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 18.dp, vertical = 14.dp)
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = time,
                color = colors.onSurfaceVariantActions,
                fontSize = 12.sp,
                fontFamily = FontFamily.Monospace
            )
            Spacer(modifier = Modifier.padding(horizontal = 4.dp))
            Text(
                text = entry.direction,
                color = directionColor,
                fontSize = 12.sp,
                fontWeight = FontWeight.Bold,
                fontFamily = FontFamily.Monospace
            )
        }
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = entry.type,
            color = colors.onSurface,
            fontSize = 15.sp,
            fontWeight = FontWeight.Medium
        )
        if (entry.message.isNotEmpty()) {
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = entry.message,
                color = colors.onSurfaceVariantSummary,
                fontSize = 12.sp,
                fontFamily = FontFamily.Monospace,
                maxLines = 6,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
