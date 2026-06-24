package com.shell.liangyi.ui.network

import android.util.Base64
import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Text
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
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.ui.components.IOSScaffold
import com.shell.liangyi.ui.components.InsetSection
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.theme.LocalIOSColors
import java.io.File

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
    val c = LocalIOSColors.current

    var started by remember { mutableStateOf(false) }

    // 打开页面时自动启动
    LaunchedEffect(Unit) {
        if (!started) {
            started = true
            viewModel.startHttpServer()
        }
    }

    IOSScaffold(title = "网络传输") {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(top = 4.dp, bottom = 32.dp)
        ) {
            // 连接状态
            item {
                InsetSection {
                    WifiConnectionRow(
                        isRunning = isRunning,
                        ip = ip,
                        port = port,
                        onToggle = {
                            if (isRunning) viewModel.stopHttpServer()
                            else viewModel.startHttpServer()
                        }
                    )
                }
            }

            // 截图列表
            item {
                SectionHeader(
                    text = if (screenshots.isEmpty()) "已接收截图" else "已接收截图 · ${screenshots.size}"
                )
            }

            if (screenshots.isEmpty()) {
                item { WifiEmptyState(ip, port, isRunning) }
            } else {
                items(screenshots.chunked(2)) { rowItems ->
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 6.dp),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        for (shot in rowItems) {
                            Box(modifier = Modifier.weight(1f)) {
                                WifiScreenshotCard(
                                    screenshot = shot,
                                    onClick = {
                                        // 预览
                                        viewModel.onScreenshotClick(shot)
                                    },
                                    onLongClick = {
                                        viewModel.deleteScreenshot(shot.shotId)
                                        Toast.makeText(context, "已删除", Toast.LENGTH_SHORT).show()
                                    }
                                )
                            }
                        }
                        if (rowItems.size == 1) {
                            Spacer(modifier = Modifier.weight(1f))
                        }
                    }
                }
            }
        }
    }

    // 预览对话框
    viewModel.previewScreenshot?.let { screenshot ->
        com.shell.liangyi.ui.screenshot.ScreenshotPreviewDialog(
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
private fun WifiConnectionRow(
    isRunning: Boolean,
    ip: String,
    port: Int,
    onToggle: () -> Unit
) {
    val c = LocalIOSColors.current
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(10.dp)
                .background(if (isRunning) c.green else c.red, CircleShape)
        )
        Spacer(modifier = Modifier.width(10.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = if (isRunning && ip.isNotEmpty()) "$ip:$port" else if (isRunning) "正在获取 IP…" else "服务器未启动",
                color = c.label,
                fontSize = 17.sp
            )
            if (isRunning && ip.isNotEmpty()) {
                Text(
                    text = "手表端输入此地址即可连接",
                    color = c.secondaryLabel,
                    fontSize = 13.sp
                )
            }
        }
        Text(
            text = if (isRunning) "停止" else "启动",
            color = if (isRunning) c.red else c.accent,
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium,
            modifier = Modifier
                .clip(RoundedCornerShape(8.dp))
                .clickable { onToggle() }
                .padding(horizontal = 8.dp, vertical = 4.dp)
        )
    }
}

@Composable
private fun SectionHeader(text: String) {
    val c = LocalIOSColors.current
    Text(
        text = text.uppercase(),
        color = c.secondaryLabel,
        fontSize = 13.sp,
        modifier = Modifier.padding(start = 32.dp, end = 32.dp, top = 22.dp, bottom = 8.dp)
    )
}

@Composable
private fun WifiEmptyState(ip: String, port: Int, isRunning: Boolean) {
    val c = LocalIOSColors.current
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 40.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "暂无截图",
            color = c.label,
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium
        )
        Spacer(modifier = Modifier.height(6.dp))
        Text(
            text = if (isRunning && ip.isNotEmpty())
                "在手表「网络传输」页面输入 $ip:$port 并发送截图"
            else if (isRunning)
                "等待获取 IP 地址…"
            else
                "点击「启动」开启服务器",
            color = c.secondaryLabel,
            fontSize = 14.sp
        )
    }
}

@Composable
private fun WifiScreenshotCard(
    screenshot: Screenshot,
    onClick: () -> Unit,
    onLongClick: () -> Unit
) {
    val c = LocalIOSColors.current
    val imageModel = remember(screenshot.localFilePath, screenshot.imageData) {
        if (screenshot.localFilePath.isNotEmpty()) {
            File(screenshot.localFilePath)
        } else if (screenshot.imageData.isNotEmpty()) {
            try {
                Base64.decode(screenshot.imageData, Base64.DEFAULT)
            } catch (e: Exception) {
                null
            }
        } else {
            null
        }
    }
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(c.cardBackground)
            .clickable { onClick() }
            .padding(6.dp)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .aspectRatio(1f)
                .clip(RoundedCornerShape(11.dp))
                .background(if (c.isDark) Color(0xFF2C2C2E) else Color(0xFFE5E5EA)),
            contentAlignment = Alignment.Center
        ) {
            if (imageModel != null) {
                AsyncImage(
                    model = ImageRequest.Builder(LocalContext.current)
                        .data(imageModel)
                        .crossfade(true)
                        .build(),
                    contentDescription = "截图",
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
            } else {
                CircularProgressIndicator(modifier = Modifier.size(22.dp), strokeWidth = 2.dp)
            }
        }
        Text(
            text = screenshot.displayTitle.ifEmpty { screenshot.shotId },
            color = c.label,
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
            modifier = Modifier.padding(start = 4.dp, top = 6.dp)
        )
        if (screenshot.transferHint.isNotEmpty()) {
            Text(
                text = screenshot.transferHint,
                color = Color(0xFFFF453A),
                fontSize = 11.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
                modifier = Modifier.padding(start = 4.dp, top = 2.dp)
            )
        }
        Text(
            text = screenshot.capturedAt,
            color = c.secondaryLabel,
            fontSize = 12.sp,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
            modifier = Modifier.padding(start = 4.dp, top = 2.dp, bottom = 2.dp)
        )
    }
}
