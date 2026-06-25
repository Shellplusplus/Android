package com.shell.liangyi.ui.network

import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.input.nestedscroll.nestedScroll
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.components.ShellActionRow
import com.shell.liangyi.ui.components.ShellEmptyStateCard
import com.shell.liangyi.ui.components.ShellSectionCard
import com.shell.liangyi.ui.components.ShellSectionTitle
import com.shell.liangyi.ui.components.ShellStatusDot
import com.shell.liangyi.ui.components.ShellTopLevelScaffold
import com.shell.liangyi.ui.screenshot.ScreenshotPreviewDialog
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import top.yukonga.miuix.kmp.basic.ButtonDefaults
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.TextButton
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun NetworkTransferScreen(
    viewModel: ScreenshotViewModel,
    onBack: () -> Unit
) {
    val screenshots by viewModel.screenshots.collectAsState()
    val isRunning by viewModel.httpServerRunning.collectAsState(initial = false)
    val ip by viewModel.httpServerIp.collectAsState(initial = "")
    val port by viewModel.httpServerPort.collectAsState(initial = 0)
    val context = LocalContext.current

    var started by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        if (!started) {
            started = true
            viewModel.startHttpServer()
        }
    }

    ShellTopLevelScaffold(title = "网络传输") { paddingValues, scrollBehavior ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .nestedScroll(scrollBehavior.nestedScrollConnection),
            contentPadding = paddingValues
        ) {
            item {
                ShellSectionTitle("服务器状态")
            }
            item {
                ShellSectionCard {
                    WifiConnectionCard(
                        isRunning = isRunning,
                        ip = ip,
                        port = port,
                        onToggle = {
                            if (isRunning) viewModel.stopHttpServer() else viewModel.startHttpServer()
                        }
                    )
                }
            }

            item {
                ShellSectionTitle("使用说明")
            }
            item {
                ShellSectionCard {
                    ShellActionRow(
                        title = "手表端输入手机地址",
                        summary = if (isRunning && ip.isNotEmpty()) {
                            "在手表「网络传输」页输入 $ip:$port，然后开始发送截图。"
                        } else if (isRunning) {
                            "服务器已启动，正在获取本机地址。"
                        } else {
                            "先启动服务器，再到手表端输入地址。"
                        }
                    )
                }
            }

            item {
                ShellSectionTitle(
                    if (screenshots.isEmpty()) "已接收截图" else "已接收截图 · ${screenshots.size}"
                )
            }

            if (screenshots.isNotEmpty()) {
                item {
                    ShellSectionCard {
                        ShellActionRow(
                            title = "此页不重复渲染缩略图",
                            summary = "为减少切换页面时的卡顿，完整图片列表仅在「截图同步」页展示。这里保留文本记录和点按预览。"
                        )
                    }
                }
            }

            if (screenshots.isEmpty()) {
                item {
                    ShellEmptyStateCard(
                        title = "暂无截图",
                        summary = if (isRunning && ip.isNotEmpty()) {
                            "在手表「网络传输」页面输入 $ip:$port 并发送截图。"
                        } else if (isRunning) {
                            "等待获取 IP 地址。"
                        } else {
                            "点击上方按钮启动服务器。"
                        }
                    )
                }
            } else {
                items(screenshots) { shot ->
                    ShellSectionCard(
                        onClick = { viewModel.onScreenshotClick(shot) },
                        onLongClick = {
                            viewModel.deleteScreenshot(shot.shotId)
                            Toast.makeText(context, "已删除", Toast.LENGTH_SHORT).show()
                        }
                    ) {
                        WifiScreenshotRow(
                            screenshot = shot
                        )
                    }
                }
            }
        }
    }

    viewModel.previewScreenshot?.let { screenshot ->
        ScreenshotPreviewDialog(
            screenshot = screenshot,
            onDismiss = { viewModel.dismissPreview() },
            onSave = {
                viewModel.saveToGallery(screenshot) { success ->
                    Toast.makeText(
                        context,
                        if (success) "已保存到相册" else "保存失败",
                        Toast.LENGTH_SHORT
                    ).show()
                }
            },
            onDelete = {
                viewModel.deleteScreenshot(screenshot.shotId)
                viewModel.dismissPreview()
                Toast.makeText(context, "已删除", Toast.LENGTH_SHORT).show()
            }
        )
    }
}

@Composable
private fun WifiConnectionCard(
    isRunning: Boolean,
    ip: String,
    port: Int,
    onToggle: () -> Unit
) {
    val colors = MiuixTheme.colorScheme
    val statusText = when {
        isRunning && ip.isNotEmpty() -> "$ip:$port"
        isRunning -> "正在获取本机地址"
        else -> "服务器未启动"
    }
    val summary = when {
        isRunning && ip.isNotEmpty() -> "手表端输入这个地址后即可通过 Wi-Fi 直传截图。"
        isRunning -> "保持当前页面打开，稍后会自动显示可连接地址。"
        else -> "点击右侧按钮启动 HTTP 服务。"
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 18.dp, vertical = 16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        ShellStatusDot(if (isRunning) Color(0xFF4CAF50) else colors.error)
        Spacer(modifier = Modifier.width(12.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = statusText,
                color = colors.onSurface,
                fontSize = 17.sp,
                fontWeight = FontWeight.Medium
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = summary,
                color = colors.onSurfaceVariantSummary,
                fontSize = 13.sp
            )
        }
        Spacer(modifier = Modifier.width(12.dp))
        TextButton(
            text = if (isRunning) "停止" else "启动",
            onClick = onToggle,
            colors = ButtonDefaults.textButtonColorsPrimary()
        )
    }
}

@Composable
private fun WifiScreenshotRow(
    screenshot: Screenshot
) {
    val colors = MiuixTheme.colorScheme
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 18.dp, vertical = 16.dp)
    ) {
        Text(
            text = screenshot.displayTitle.ifEmpty { screenshot.shotId },
            color = colors.onSurface,
            fontSize = 16.sp,
            fontWeight = FontWeight.Medium,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
        Spacer(modifier = Modifier.height(4.dp))
        Text(
            text = screenshot.capturedAt,
            color = colors.onSurfaceVariantSummary,
            fontSize = 13.sp,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis
        )
        if (screenshot.transferHint.isNotEmpty()) {
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = screenshot.transferHint,
                color = colors.error,
                fontSize = 12.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
