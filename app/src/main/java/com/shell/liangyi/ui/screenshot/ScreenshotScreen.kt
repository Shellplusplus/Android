package com.shell.liangyi.ui.screenshot

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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
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
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.components.IOSScaffold
import com.shell.liangyi.ui.components.InsetSection
import com.shell.liangyi.ui.theme.LocalIOSColors
import java.io.File

@Composable
fun ScreenshotScreen(
    viewModel: ScreenshotViewModel = viewModel(),
    onOpenSettings: () -> Unit,
    onOpenNetwork: () -> Unit = {}
) {
    val screenshots by viewModel.screenshots.collectAsState()
    val syncState by viewModel.syncState.collectAsState()
    val receiveProgress by viewModel.receiveProgress.collectAsState()
    val connectionState by viewModel.connectionState.collectAsState(initial = ConnectionState.DISCONNECTED)
    val context = LocalContext.current
    val c = LocalIOSColors.current

    IOSScaffold(
        title = "截图同步",
        trailing = {
            IconButton(onClick = onOpenNetwork) {
                Text(
                    text = "WiFi",
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Bold,
                    color = c.accent,
                    modifier = Modifier.padding(horizontal = 4.dp)
                )
            }
            IconButton(onClick = onOpenSettings) {
                Icon(
                    imageVector = Icons.Filled.Settings,
                    contentDescription = "设置",
                    tint = c.accent
                )
            }
        }
    ) {
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = PaddingValues(top = 4.dp, bottom = 32.dp)
        ) {
            // 连接状态
            item {
                InsetSection(footer = "进入设置可开启调试日志，排查连接问题。") {
                    ConnectionRow(connectionState) { viewModel.checkConnection() }
                }
            }

            // 从手表获取
            item {
                Spacer(modifier = Modifier.height(18.dp))
                PrimaryButton(
                    text = "从手表获取截图",
                    enabled = syncState !is ScreenshotReceiver.SyncState.Receiving,
                    onClick = { viewModel.requestFromWatch() }
                )
            }

            // 同步进度
            if (syncState !is ScreenshotReceiver.SyncState.Idle && receiveProgress.isNotEmpty()) {
                item { SyncBanner(syncState, receiveProgress) }
            }

            // 截图列表
            item {
                SectionHeader(
                    text = if (screenshots.isEmpty()) "截图" else "截图 · ${screenshots.size}"
                )
            }

            if (screenshots.isEmpty()) {
                item { EmptyState() }
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
                                ScreenshotCard(
                                    screenshot = shot,
                                    onClick = { viewModel.onScreenshotClick(shot) },
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
        ScreenshotPreviewDialog(
            screenshot = screenshot,
            onDismiss = { viewModel.dismissPreview() },
            onSave = {
                viewModel.saveToGallery(screenshot) { success ->
                    Toast.makeText(
                        context,
                        if (success) "已保存到相册" else "保存失败：图片数据无效",
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
private fun ConnectionRow(
    connectionState: ConnectionState,
    onRefresh: () -> Unit
) {
    val c = LocalIOSColors.current
    val statusColor = when (connectionState) {
        ConnectionState.CONNECTED -> c.green
        ConnectionState.CONNECTING -> Color(0xFFFF9F0A)
        ConnectionState.DISCONNECTED -> c.red
        ConnectionState.ERROR -> c.red
    }
    val statusText = when (connectionState) {
        ConnectionState.CONNECTED -> "已连接手表快应用"
        ConnectionState.CONNECTING -> "正在连接手表快应用…"
        ConnectionState.DISCONNECTED -> "手表快应用未连接"
        ConnectionState.ERROR -> "手表快应用连接错误"
    }
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(10.dp)
                .background(statusColor, CircleShape)
        )
        Spacer(modifier = Modifier.width(10.dp))
        Text(text = statusText, color = c.label, fontSize = 17.sp, modifier = Modifier.weight(1f))
        Text(
            text = "刷新",
            color = c.accent,
            fontSize = 17.sp,
            modifier = Modifier
                .clip(RoundedCornerShape(8.dp))
                .clickable { onRefresh() }
                .padding(horizontal = 8.dp, vertical = 4.dp)
        )
    }
}

@Composable
private fun PrimaryButton(text: String, enabled: Boolean, onClick: () -> Unit) {
    val c = LocalIOSColors.current
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp)
            .clip(RoundedCornerShape(14.dp))
            .background(if (enabled) c.accent else c.accent.copy(alpha = 0.4f))
            .clickable(enabled = enabled) { onClick() }
            .padding(vertical = 15.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(text = text, color = Color.White, fontSize = 17.sp, fontWeight = FontWeight.SemiBold)
    }
}

@Composable
private fun SyncBanner(syncState: ScreenshotReceiver.SyncState, progress: String) {
    val c = LocalIOSColors.current
    val tint = when (syncState) {
        is ScreenshotReceiver.SyncState.Success -> c.green
        is ScreenshotReceiver.SyncState.Error -> c.red
        else -> c.accent
    }
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(start = 16.dp, end = 16.dp, top = 16.dp)
            .clip(RoundedCornerShape(12.dp))
            .background(tint.copy(alpha = 0.12f))
            .padding(horizontal = 14.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (syncState is ScreenshotReceiver.SyncState.Receiving ||
            syncState is ScreenshotReceiver.SyncState.WaitingAck
        ) {
            CircularProgressIndicator(
                modifier = Modifier.size(16.dp),
                strokeWidth = 2.dp,
                color = tint
            )
            Spacer(modifier = Modifier.width(10.dp))
        }
        Text(text = progress, color = tint, fontSize = 15.sp, fontWeight = FontWeight.Medium)
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
private fun EmptyState() {
    val c = LocalIOSColors.current
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 40.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = "暂无截图", color = c.label, fontSize = 17.sp, fontWeight = FontWeight.Medium)
        Spacer(modifier = Modifier.height(6.dp))
        Text(
            text = "点击上方「从手表获取截图」开始同步",
            color = c.secondaryLabel,
            fontSize = 14.sp
        )
    }
}

@Composable
private fun ScreenshotCard(
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
