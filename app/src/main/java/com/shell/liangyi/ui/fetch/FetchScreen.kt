package com.shell.liangyi.ui.fetch

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.interaction.MutableInteractionSource
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
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import android.net.Uri
import androidx.navigation.NavHostController
import com.shell.liangyi.core.LogEntry
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.Routes
import com.shell.liangyi.ui.ShellViewModel
import coil.compose.AsyncImage
import coil.request.ImageRequest
import top.yukonga.miuix.kmp.basic.Text
import androidx.compose.ui.layout.ContentScale
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@Composable
fun FetchScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    val httpRunning by shellViewModel.httpServerRunning.collectAsState()
    val httpIp by shellViewModel.httpServerIp.collectAsState()
    val httpPort by shellViewModel.httpServerPort.collectAsState()
    val receiveProgress by shellViewModel.receiveProgress.collectAsState()
    val logs by shellViewModel.logs.collectAsState(initial = emptyList())
    val lanLogs = remember(logs) { logs.filter { it.direction == "HTTP" || it.type == "transfer" }.take(6) }
    val screenshots by shellViewModel.screenshots.collectAsState()

    val serverAddress = if (httpRunning && httpIp.isNotEmpty()) "${httpIp}:${httpPort}" else ""

    Box(modifier = Modifier.fillMaxSize().background(shellColors.pageBackground)) {
        Column(modifier = Modifier.fillMaxSize().verticalScroll(rememberScrollState())) {
            // 返回
            Spacer(modifier = Modifier.height(43.dp))
            Text(
                text = "\u2190",
                modifier = Modifier.padding(start = 29.dp).clickable { navController.popBackStack() },
                fontSize = 13.sp,
                color = colors.onSurface
            )

            // 标题
            Spacer(modifier = Modifier.height(21.dp))
            Text(
                text = "\u5c40\u57df\u7f51\u4f20\u8f93",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 30.sp,
                fontWeight = FontWeight.Normal,
                fontFamily = FontFamily.Default,
                color = colors.onSurface
            )

            // 状态卡片
            Spacer(modifier = Modifier.height(14.dp))
            LanStatusCard(isRunning = httpRunning, address = serverAddress, progress = receiveProgress)

            // 操作按钮
            Spacer(modifier = Modifier.height(23.dp))
            ActionButton(
                text = if (httpRunning) "\u505c\u6b62\u670d\u52a1\u5668" else "\u542f\u52a8\u670d\u52a1\u5668",
                enabled = true,
                primary = httpRunning,
                onClick = {
                    if (httpRunning) shellViewModel.stopHttpServer()
                    else shellViewModel.startHttpServer()
                }
            )

            // 局域网传输日志
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = "局域网传输日志",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText
            )
            Spacer(modifier = Modifier.height(8.dp))
            LanTransferLogCard(logs = lanLogs)

            // 已获取截图
            Spacer(modifier = Modifier.height(18.dp))
            Text(
                text = "\u5df2\u83b7\u53d6\u622a\u56fe",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText
            )

            // 截图卡片
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
                        .background(shellColors.cardBackground),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "\u6682\u65e0\u622a\u56fe",
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
private fun LanStatusCard(isRunning: Boolean, address: String, progress: String) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val dotColor = if (isRunning) shellColors.success else shellColors.danger
    val statusText = if (isRunning) "\u670d\u52a1\u5668\u5df2\u542f\u52a8" else "\u670d\u52a1\u5668\u672a\u542f\u52a8"
    val cardHeight = when {
        progress.isNotEmpty() -> 104.dp
        isRunning && address.isNotEmpty() -> 80.dp
        else -> 56.dp
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(cardHeight)
            .clip(RoundedCornerShape(15.dp))
            .background(shellColors.cardBackground)
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
            if (isRunning && address.isNotEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = address,
                    modifier = Modifier.padding(start = 23.dp),
                    fontSize = 12.sp,
                    color = colors.onSurface.copy(alpha = 0.6f)
                )
            }
            if (progress.isNotEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = progress,
                    modifier = Modifier.padding(start = 23.dp),
                    fontSize = 11.sp,
                    color = shellColors.secondaryText,
                    maxLines = 2
                )
            }
        }
    }
}

@Composable
private fun LanTransferLogCard(logs: List<LogEntry>) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(126.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(shellColors.cardBackground)
    ) {
        if (logs.isEmpty()) {
            Text(
                text = "暂无局域网传输日志",
                modifier = Modifier.align(Alignment.Center),
                fontSize = 13.sp,
                color = colors.onSurface.copy(alpha = 0.4f)
            )
            return@Box
        }
        Column(
            modifier = Modifier.fillMaxSize().padding(horizontal = 10.dp, vertical = 8.dp)
        ) {
            logs.forEach { entry ->
                LanLogItem(entry)
            }
        }
    }
}

@Composable
private fun LanLogItem(entry: LogEntry) {
    val shellColors = ShellTheme.colors
    val time = remember(entry.timestamp) {
        SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(Date(entry.timestamp))
    }
    Row(
        modifier = Modifier.fillMaxWidth().padding(vertical = 1.dp),
        verticalAlignment = Alignment.Top
    ) {
        Text(
            text = time,
            fontSize = 10.sp,
            fontFamily = FontFamily.Monospace,
            color = shellColors.secondaryText,
            modifier = Modifier.width(54.dp)
        )
        Text(
            text = entry.message,
            fontSize = 10.sp,
            fontFamily = FontFamily.Monospace,
            color = MiuixTheme.colorScheme.onSurface.copy(alpha = 0.76f),
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
            modifier = Modifier.weight(1f)
        )
    }
}

@Composable
private fun ActionButton(text: String, enabled: Boolean, primary: Boolean, onClick: () -> Unit) {
    val interactionSource = remember { MutableInteractionSource() }
    val shellColors = ShellTheme.colors
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(if (primary) shellColors.primaryAction else shellColors.destructiveAction)
            .clickable(
                enabled = enabled,
                indication = null,
                interactionSource = interactionSource,
                onClick = onClick
            ),
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
    val shellColors = ShellTheme.colors
    val interactionSource = remember { MutableInteractionSource() }

    val previewPath = remember(shot.shotId) { shellViewModel.getScreenshotFilePath(shot.shotId) }
    Box(
        modifier = modifier
            .height(214.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(shellColors.cardBackground)
            .clickable(
                interactionSource = interactionSource,
                indication = null,
                onClick = onClick
            )
    ) {
        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 9.dp)
                .width(112.dp)
                .height(160.dp)
                .background(shellColors.previewBackground),
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
            color = shellColors.secondaryText
        )
    }
}
