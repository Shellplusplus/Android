package com.shell.liangyi.ui.fetch

import android.net.Uri
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.core.LogEntry
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.Routes
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import kotlinx.coroutines.delay

@Composable
fun FetchScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
    isRootDestination: Boolean = false,
    bottomContentPadding: Dp = 0.dp,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    val httpRunning by shellViewModel.httpServerRunning.collectAsState()
    val httpIp by shellViewModel.httpServerIp.collectAsState()
    val httpPort by shellViewModel.httpServerPort.collectAsState()
    val receiveProgress by shellViewModel.receiveProgress.collectAsState()
    val logs by shellViewModel.logs.collectAsState(initial = emptyList())
    val watchProductCode by shellViewModel.watchProductCode.collectAsState()
    val lanLogs = remember(logs) { logs.filter { it.direction == "HTTP" || it.type == "transfer" }.take(6) }
    val screenshots by shellViewModel.screenshots.collectAsState()
    val isLanTransferBlocked = shellViewModel.isLanTransferBlocked(watchProductCode)

    val serverAddress = if (httpRunning && httpIp.isNotEmpty()) "${httpIp}:${httpPort}" else ""

    LaunchedEffect(isLanTransferBlocked, httpRunning) {
        if (isLanTransferBlocked && httpRunning) {
            shellViewModel.stopHttpServer()
        }
    }

    ShellBackScaffold(
        title = stringResource(R.string.lan_transfer),
        onBack = { navController.popBackStack() },
        showBackButton = !isRootDestination,
    ) { innerPadding ->
        if (isLanTransferBlocked) {
            LanTransferBlockedState(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding)
            )
            return@ShellBackScaffold
        }

        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
        ) {
            Spacer(modifier = Modifier.height(14.dp))
            LanStatusCard(isRunning = httpRunning, address = serverAddress, progress = receiveProgress)

            Spacer(modifier = Modifier.height(23.dp))
            ActionButton(
                text = if (httpRunning) stringResource(R.string.stop_server) else stringResource(R.string.start_server),
                enabled = true,
                primary = httpRunning,
                onClick = {
                    if (httpRunning) shellViewModel.stopHttpServer()
                    else shellViewModel.startHttpServer()
                }
            )

            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = stringResource(R.string.lan_transfer_logs),
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText
            )
            Spacer(modifier = Modifier.height(8.dp))
            LanTransferLogCard(logs = lanLogs)

            Spacer(modifier = Modifier.height(18.dp))
            Text(
                text = stringResource(R.string.fetched_screenshots),
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText
            )

            Spacer(modifier = Modifier.height(12.dp))
            if (screenshots.isNotEmpty()) {
                val previewShots = screenshots.take(2)
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 9.dp)
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
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 9.dp)
                        .height(214.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface
                    ),
                    cornerRadius = 15.dp
                ) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text(
                            text = stringResource(R.string.screenshot_empty),
                            fontSize = 16.sp,
                            color = colors.onSurface.copy(alpha = 0.4f)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp + bottomContentPadding))
        }
    }
}

@Composable
private fun LanTransferBlockedState(modifier: Modifier = Modifier) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    var showFinalState by rememberSaveable { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        showFinalState = false
        delay(220)
        showFinalState = true
    }

    val iconSize by animateDpAsState(
        targetValue = if (showFinalState) 74.dp else 10.dp,
        animationSpec = tween(durationMillis = 520),
        label = "lanBlockedIconSize"
    )
    val borderWidth by animateDpAsState(
        targetValue = if (showFinalState) 3.dp else 0.dp,
        animationSpec = tween(durationMillis = 460),
        label = "lanBlockedBorderWidth"
    )
    val fillAlpha by animateFloatAsState(
        targetValue = if (showFinalState) 0f else 1f,
        animationSpec = tween(durationMillis = 420),
        label = "lanBlockedFillAlpha"
    )
    val crossAlpha by animateFloatAsState(
        targetValue = if (showFinalState) 1f else 0f,
        animationSpec = tween(durationMillis = 240, delayMillis = 220),
        label = "lanBlockedCrossAlpha"
    )
    val crossScale by animateFloatAsState(
        targetValue = if (showFinalState) 1f else 0.7f,
        animationSpec = tween(durationMillis = 280, delayMillis = 220),
        label = "lanBlockedCrossScale"
    )
    val textAlpha by animateFloatAsState(
        targetValue = if (showFinalState) 1f else 0f,
        animationSpec = tween(durationMillis = 260, delayMillis = 300),
        label = "lanBlockedTextAlpha"
    )

    Box(
        modifier = modifier.background(ShellTheme.colors.pageBackground),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(horizontal = 32.dp)
        ) {
            Box(
                modifier = Modifier
                    .size(iconSize)
                    .clip(CircleShape)
                    .background(shellColors.danger.copy(alpha = fillAlpha))
                    .border(
                        width = borderWidth,
                        color = shellColors.danger,
                        shape = CircleShape
                    ),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "\u274C",
                    fontSize = 24.sp,
                    color = shellColors.danger,
                    modifier = Modifier.graphicsLayer {
                        alpha = crossAlpha
                        scaleX = crossScale
                        scaleY = crossScale
                    }
                )
            }

            Spacer(modifier = Modifier.height(22.dp))
            Text(
                text = "\u62B1\u6B49\uFF0C\u60A8\u4F7F\u7528\u7684\u5C0F\u7C73\u624B\u73AF10Pro\u6682\u65F6\u4E0D\u53EF\u4F7F\u7528\u8BE5\u4F20\u8F93\u65B9\u5F0F",
                fontSize = 15.sp,
                lineHeight = 22.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface.copy(alpha = 0.82f),
                textAlign = TextAlign.Center,
                modifier = Modifier
                    .fillMaxWidth()
                    .alpha(textAlpha)
            )
        }
    }
}

@Composable
private fun LanStatusCard(isRunning: Boolean, address: String, progress: String) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val dotColor = if (isRunning) shellColors.success else shellColors.danger
    val statusText = if (isRunning) stringResource(R.string.server_started) else stringResource(R.string.server_not_started)
    val cardHeight = when {
        progress.isNotEmpty() -> 104.dp
        isRunning && address.isNotEmpty() -> 80.dp
        else -> 56.dp
    }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(cardHeight),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(start = 13.dp, end = 13.dp, top = 12.dp, bottom = 12.dp)
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
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(126.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            if (logs.isEmpty()) {
                Text(
                    text = stringResource(R.string.no_lan_transfer_logs),
                    modifier = Modifier.align(Alignment.Center),
                    fontSize = 13.sp,
                    color = colors.onSurface.copy(alpha = 0.4f)
                )
                return@Box
            }
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(horizontal = 10.dp, vertical = 8.dp)
            ) {
                logs.forEach { entry ->
                    LanLogItem(entry)
                }
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
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 1.dp),
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
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp),
        colors = CardColors(
            color = if (primary) shellColors.primaryAction else shellColors.destructiveAction,
            contentColor = Color.White
        ),
        cornerRadius = 15.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text(
                text = text,
                fontSize = 17.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = FontFamily.Default,
                color = Color.White
            )
        }
    }
}

@Composable
private fun ScreenshotCard(
    shot: Screenshot,
    modifier: Modifier,
    onClick: () -> Unit,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val previewPath = remember(shot.localFilePath, shot.shotId) {
        shot.localFilePath.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shot.shotId)
    }
    Card(
        modifier = modifier.height(214.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
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
                text = "#${shot.index}",
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .padding(bottom = 18.dp),
                fontSize = 17.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface
            )
            Text(
                text = shot.capturedAt,
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .padding(bottom = 4.dp),
                fontSize = 10.sp,
                fontWeight = FontWeight.Medium,
                color = shellColors.secondaryText
            )
        }
    }
}
