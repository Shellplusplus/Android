package com.shell.liangyi.ui.fetch

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import android.net.Uri
import androidx.navigation.NavHostController
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.Routes
import com.shell.liangyi.ui.ShellViewModel
import coil.compose.AsyncImage
import coil.request.ImageRequest
import top.yukonga.miuix.kmp.basic.Text
import androidx.compose.ui.layout.ContentScale
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Scale: Figma 1080px → 360dp (÷3)

@Composable
fun FetchScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme

    val connectionState by shellViewModel.connectionState.collectAsState(initial = ConnectionState.DISCONNECTED)
    val screenshots by shellViewModel.screenshots.collectAsState()
    val syncState by shellViewModel.syncState.collectAsState(initial = ScreenshotReceiver.SyncState.Idle)
    val progress by shellViewModel.receiveProgress.collectAsState(initial = "")
    val isConnected = connectionState == ConnectionState.CONNECTED
    val isBusy = syncState is ScreenshotReceiver.SyncState.Receiving || syncState is ScreenshotReceiver.SyncState.WaitingAck

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            // 返回 — (88, 128) ÷3
            Spacer(modifier = Modifier.height(43.dp))
            Text(
                text = "←",
                modifier = Modifier.padding(start = 29.dp).clickable { navController.popBackStack() },
                fontSize = 13.sp,
                color = colors.onSurface
            )

            // 标题 — (79, 230) ÷3
            Spacer(modifier = Modifier.height(21.dp))
            Text(
                text = "局域网传输",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 30.sp,
                fontWeight = FontWeight.Normal,
                fontFamily = FontFamily.Default,
                color = colors.onSurface
            )

            // 状态卡片 — y=391 ÷3=130, gap=21dp
            Spacer(modifier = Modifier.height(14.dp))
            StatusCard(isConnected = isConnected, isBusy = isBusy, progress = progress)

            // 获取截图按钮 — y=623 ÷3=208, gap=23dp
            Spacer(modifier = Modifier.height(23.dp))
            ActionButton(
                text = if (isBusy) "同步中..." else if (isConnected) "获取截图" else "未连接",
                enabled = isConnected && !isBusy,
                onClick = { shellViewModel.requestFromWatch() }
            )

            // 已获取截图 — y=822 ÷3=274, gap=22dp
            Spacer(modifier = Modifier.height(22.dp))
            Text(
                text = "已获取截图",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = Color(0x66000000)
            )

            // 截图卡片 — y=925 ÷3=308, gap=12dp
            Spacer(modifier = Modifier.height(12.dp))
            if (screenshots.isNotEmpty()) {
                val previewShots = screenshots.take(2)
                Row(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 9.dp)
                ) {
                    previewShots.forEachIndexed { i, shot ->
                        if (i > 0) Spacer(modifier = Modifier.width(13.dp))
                        ScreenshotCard(
                            shot = shot,
                            modifier = Modifier.weight(1f),
                            onClick = { navController.navigate(Routes.screenshotDetail(Uri.encode(shot.shotId))) },
                            shellViewModel = shellViewModel
                        )
                    }
                    if (previewShots.size == 1) {
                            Spacer(modifier = Modifier.weight(1f))
                        }
                }
            } else {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 9.dp)
                        .height(214.dp)
                        .clip(RoundedCornerShape(15.dp))
                        .background(colors.surface),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "暂无截图",
                        fontSize = 16.sp,
                        color = colors.onSurface.copy(alpha = 0.4f)
                    )
                }
            }

            Spacer(modifier = Modifier.height(20.dp))
        }
    }
}

@Composable
private fun StatusCard(isConnected: Boolean, isBusy: Boolean, progress: String = "") {
    val colors = MiuixTheme.colorScheme
    val dotColor = when {
        isBusy -> Color(0xFFFFA500)
        isConnected -> Color(0xFF00C853)
        else -> Color(0xFFFF0000)
    }
    val statusText = when {
        isBusy -> "正在同步截图..."
        isConnected -> "已连接到快应用"
        else -> "设备端快应用未连接"
    }
    val cardHeight = if (isBusy && progress.isNotEmpty()) 80.dp else 56.dp

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(cardHeight)
            .clip(RoundedCornerShape(15.dp))
            .background(colors.surface)
    ) {
        Column(
            modifier = Modifier.fillMaxSize().padding(start = 13.dp, end = 13.dp, top = 12.dp, bottom = 12.dp)
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(10.dp)
                        .clip(CircleShape)
                        .background(dotColor)
                )
                Spacer(modifier = Modifier.width(13.dp))
                Text(
                    text = statusText,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }
            if (isBusy && progress.isNotEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = progress,
                    modifier = Modifier.padding(start = 23.dp),
                    fontSize = 12.sp,
                    color = colors.onSurface.copy(alpha = 0.6f)
                )
            }
        }
    }
}

@Composable
private fun ActionButton(text: String, enabled: Boolean, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(if (enabled) Color(0xFF3482FF) else Color(0xFF9E9E9E))
            .clickable(enabled = enabled, onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = Color.White
        )
    }
}

@Composable
private fun ScreenshotCard(shot: Screenshot, modifier: Modifier, onClick: () -> Unit, shellViewModel: ShellViewModel) {
    val colors = MiuixTheme.colorScheme

    val previewPath = remember(shot.shotId) { shellViewModel.getScreenshotFilePath(shot.shotId) }
    Box(
        modifier = modifier
            .height(214.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(colors.surface)
            .clickable(onClick = onClick)
    ) {
        // 手环预览
        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 9.dp)
                .width(112.dp)
                .height(160.dp)
                
                .background(Color(0xFF3D3D3D)),
            contentAlignment = Alignment.Center
        ) {
            if (previewPath != null) {
                AsyncImage(
                    model = ImageRequest.Builder(shellViewModel.appContext())
                        .data(java.io.File(previewPath))
                        .crossfade(true)
                        .build(),
                    contentDescription = null,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
            }
        }
        Text(
            text = "#" + shot.index,
            modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 18.dp),
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium,
            color = colors.onSurface
        )
        Text(
            text = shot.capturedAt,
            modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 4.dp),
            fontSize = 10.sp,
            fontWeight = FontWeight.Medium,
            color = Color(0x80000000)
        )
    }
}
