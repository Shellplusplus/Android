package com.shell.liangyi.ui.settings

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
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
import com.shell.liangyi.ui.components.IOSScaffold
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import com.shell.liangyi.ui.theme.LocalIOSColors

@Composable
fun DebugLogScreen(
    viewModel: ScreenshotViewModel = viewModel(),
    onBack: () -> Unit
) {
    val logs by viewModel.logs.collectAsState(initial = emptyList())
    val c = LocalIOSColors.current
    val clipboardManager = LocalClipboardManager.current
    val context = LocalContext.current
    val allLogsText = remember(logs) { buildLogExportText(logs) }

    IOSScaffold(
        title = "\u901A\u4FE1\u65E5\u5FD7",
        onBack = onBack,
        trailing = {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = "\u590D\u5236\u5168\u90E8", color = c.accent, fontSize = 17.sp,
                    modifier = Modifier.clip(RoundedCornerShape(8.dp)).clickable {
                        if (logs.isEmpty()) {
                            Toast.makeText(context, "\u6682\u65E0\u65E5\u5FD7\u53EF\u590D\u5236", Toast.LENGTH_SHORT).show()
                        } else {
                            clipboardManager.setText(AnnotatedString(allLogsText))
                            Toast.makeText(context, "\u5DF2\u590D\u5236\u5168\u90E8\u65E5\u5FD7", Toast.LENGTH_SHORT).show()
                        }
                    }.padding(horizontal = 10.dp, vertical = 6.dp)
                )
                Text(
                    text = "\u6E05\u7A7A", color = c.accent, fontSize = 17.sp,
                    modifier = Modifier.clip(RoundedCornerShape(8.dp)).clickable { viewModel.clearLogs() }.padding(horizontal = 10.dp, vertical = 6.dp)
                )
            }
        }
    ) {
        if (logs.isEmpty()) {
            Box(modifier = Modifier.fillMaxSize().padding(top = 60.dp), contentAlignment = Alignment.TopCenter) {
                Text("\u6682\u65E0\u65E5\u5FD7", color = c.secondaryLabel, fontSize = 15.sp)
            }
        } else {
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(horizontal = 12.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(c.cardBackground)
            ) {
                items(logs) { entry -> LogRow(entry) }
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
            if (entry.message.isNotEmpty()) { append("\n"); append(entry.message) }
        }
    }
}

@Composable
private fun LogRow(entry: LogEntry) {
    val c = LocalIOSColors.current
    val directionColor = when (entry.direction) {
        "SEND" -> c.accent; "RECEIVE" -> c.green; "SYSTEM" -> Color(0xFFFF9F0A); "ERROR" -> c.red
        else -> c.secondaryLabel
    }
    val time = remember(entry.timestamp) {
        java.text.SimpleDateFormat("HH:mm:ss", java.util.Locale.getDefault()).format(java.util.Date(entry.timestamp))
    }
    Row(
        modifier = Modifier.fillMaxWidth().padding(horizontal = 14.dp, vertical = 7.dp),
        verticalAlignment = Alignment.Top
    ) {
        Text(text = time, color = c.tertiaryLabel, fontSize = 12.sp, fontFamily = FontFamily.Monospace)
        Spacer(modifier = Modifier.width(8.dp))
        Text(text = entry.direction, color = directionColor, fontSize = 12.sp, fontWeight = FontWeight.Bold,
            fontFamily = FontFamily.Monospace, modifier = Modifier.width(56.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(entry.type, color = c.label, fontSize = 13.sp, fontWeight = FontWeight.Medium)
            if (entry.message.isNotEmpty()) {
                Text(entry.message, color = c.secondaryLabel, fontSize = 12.sp,
                    fontFamily = FontFamily.Monospace, maxLines = 3, overflow = TextOverflow.Ellipsis)
            }
        }
    }
}
