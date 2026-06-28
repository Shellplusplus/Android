package com.shell.liangyi.ui.settings

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.widget.Toast
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.shell.liangyi.core.LogEntry
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@Composable
fun SettingsScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val context = LocalContext.current
    val logs by shellViewModel.logs.collectAsState(initial = emptyList())

    ShellBackScaffold(
        title = "\u8bbe\u7f6e",
        onBack = { navController.popBackStack() },
        actions = {
            Row {
                    ActionSmallButton(text = "复制") { copyLogs(context, logs) }
                    Spacer(modifier = Modifier.width(8.dp))
                    ActionSmallButton(text = "清空") { shellViewModel.clearLogs() }
                    Spacer(modifier = Modifier.width(16.dp))
            }
        }
    ) { innerPadding ->
        Column(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = "连接与传输日志",
                modifier = Modifier.padding(start = 27.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText
            )

            Spacer(modifier = Modifier.height(6.dp))

            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface
                ),
                cornerRadius = 15.dp,
                onClick = { shellViewModel.checkForUpdates(manual = true) },
                showIndication = true,
                pressFeedbackType = PressFeedbackType.Sink
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 14.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = "检查更新",
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Medium,
                            color = colors.onSurface
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = "从 shellupdate.rth1.xyz 手动检测最新版本",
                            fontSize = 12.sp,
                            color = shellColors.secondaryText
                        )
                    }
                    Text(
                        text = "立即检查",
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Medium,
                        color = shellColors.primaryAction
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))

            if (logs.isEmpty()) {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 11.dp)
                        .height(200.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface
                    ),
                    cornerRadius = 15.dp
                ) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text(
                            text = "暂无日志",
                            fontSize = 14.sp,
                            color = colors.onSurface.copy(alpha = 0.4f)
                        )
                    }
                }
            } else {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 11.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface
                    ),
                    cornerRadius = 15.dp
                ) {
                    LazyColumn(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(8.dp)
                    ) {
                        items(logs) { entry ->
                            LogItem(entry)
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun LogItem(entry: LogEntry) {
    val time = remember(entry.timestamp) {
        SimpleDateFormat("HH:mm:ss.SSS", Locale.getDefault()).format(Date(entry.timestamp))
    }
    val dirColor = when (entry.direction) {
        "SEND" -> Color(0xFF4CAF50)
        "RECEIVE" -> Color(0xFF2196F3)
        "ERROR" -> Color(0xFFF44336)
        else -> Color(0xFF9E9E9E)
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 2.dp),
        verticalAlignment = Alignment.Top
    ) {
        Text(
            text = time,
            fontSize = 10.sp,
            fontFamily = FontFamily.Monospace,
            color = Color(0xFF888888),
            modifier = Modifier.width(75.dp)
        )
        Text(
            text = entry.direction,
            fontSize = 10.sp,
            fontFamily = FontFamily.Monospace,
            fontWeight = FontWeight.Bold,
            color = dirColor,
            modifier = Modifier.width(50.dp)
        )
        Text(
            text = entry.type,
            fontSize = 10.sp,
            fontFamily = FontFamily.Monospace,
            color = Color(0xFFAAAAAA),
            modifier = Modifier.width(70.dp)
        )
        Text(
            text = entry.message,
            fontSize = 10.sp,
            fontFamily = FontFamily.Monospace,
            color = Color(0xFFCCCCCC),
            maxLines = 3,
            overflow = TextOverflow.Ellipsis,
            modifier = Modifier.weight(1f)
        )
    }
}

@Composable
private fun ActionSmallButton(text: String, onClick: () -> Unit) {
    val shellColors = ShellTheme.colors
    Card(
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = MiuixTheme.colorScheme.onSurface
        ),
        cornerRadius = 10.dp,
        insideMargin = PaddingValues(horizontal = 12.dp, vertical = 6.dp),
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Text(
            text = text,
            fontSize = 13.sp,
            fontWeight = FontWeight.Medium,
            color = MiuixTheme.colorScheme.onSurface
        )
    }
}

private fun copyLogs(context: Context, logs: List<LogEntry>) {
    val sb = StringBuilder()
    val sdf = SimpleDateFormat("HH:mm:ss.SSS", Locale.getDefault())
    for (entry in logs) {
        sb.append("${sdf.format(Date(entry.timestamp))} [${entry.direction}] ${entry.type}: ${entry.message}\n")
    }
    val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    clipboard.setPrimaryClip(ClipData.newPlainText("Shell++ Logs", sb.toString()))
    Toast.makeText(context, "已复制 ${logs.size} 条日志", Toast.LENGTH_SHORT).show()
}
