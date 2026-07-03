package com.shell.liangyi.ui.fetch

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.net.Uri
import android.widget.Toast
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.ContentCopy
import androidx.compose.material.icons.rounded.Downloading
import androidx.compose.material.icons.rounded.Wifi
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
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
import kotlinx.coroutines.delay
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@Composable
fun FetchScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
    isRootDestination: Boolean = false,
    bottomContentPadding: Dp = 0.dp,
) {
    val context = LocalContext.current
    var isLogExpanded by rememberSaveable { mutableStateOf(false) }
    val httpRunning by shellViewModel.httpServerRunning.collectAsState()
    val httpTransferInProgress by shellViewModel.httpTransferInProgress.collectAsState()
    val httpIp by shellViewModel.httpServerIp.collectAsState()
    val httpPort by shellViewModel.httpServerPort.collectAsState()
    val receiveProgress by shellViewModel.receiveProgress.collectAsState()
    val logs by shellViewModel.logs.collectAsState(initial = emptyList())
    val watchProductCode by shellViewModel.watchProductCode.collectAsState()
    val lanLogs = remember(logs) { logs.filter { it.direction == "HTTP" || it.type == "transfer" } }
    val screenshots by shellViewModel.screenshots.collectAsState()
    val isLanTransferBlocked = shellViewModel.isLanTransferBlocked(watchProductCode)
    val scrollBehavior = MiuixScrollBehavior()

    val serverAddress = if (httpRunning && httpIp.isNotEmpty()) "${httpIp}:${httpPort}" else ""
    val logSummary = when {
        httpTransferInProgress && receiveProgress.isNotBlank() -> receiveProgress
        serverAddress.isNotBlank() -> serverAddress
        lanLogs.isNotEmpty() -> lanLogs.first().message
        else -> stringResource(R.string.no_lan_transfer_logs)
    }

    LaunchedEffect(isLanTransferBlocked, httpRunning) {
        if (isLanTransferBlocked && httpRunning) {
            shellViewModel.stopHttpServer()
        }
    }

    ShellBackScaffold(
        title = stringResource(R.string.lan_transfer),
        onBack = { navController.popBackStack() },
        showBackButton = !isRootDestination,
        collapseTitleOnScroll = true,
        scrollBehavior = scrollBehavior,
    ) { innerPadding ->
        if (isLanTransferBlocked) {
            LanTransferBlockedState(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding)
            )
            return@ShellBackScaffold
        }

        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp)
        ) {
            item {
                Spacer(modifier = Modifier.height(12.dp))
            }
            item {
                LanHeroCard(
                    isRunning = httpRunning,
                    isTransferring = httpTransferInProgress,
                    address = serverAddress,
                    progress = receiveProgress,
                    screenshotCount = screenshots.size,
                )
            }
            item {
                Spacer(modifier = Modifier.height(12.dp))
            }
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    ActionButton(
                        modifier = Modifier.weight(1f),
                        text = stringResource(R.string.copy),
                        icon = Icons.Rounded.ContentCopy,
                        enabled = serverAddress.isNotBlank(),
                        filled = false,
                        onClick = {
                            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                            clipboard.setPrimaryClip(
                                ClipData.newPlainText("Shell++ LAN Address", serverAddress)
                            )
                            Toast.makeText(context, serverAddress, Toast.LENGTH_SHORT).show()
                        }
                    )
                    ActionButton(
                        modifier = Modifier.weight(1f),
                        text = if (httpRunning) stringResource(R.string.stop_server) else stringResource(R.string.start_server),
                        icon = Icons.Rounded.Wifi,
                        enabled = true,
                        filled = true,
                        onClick = {
                            if (httpRunning) shellViewModel.stopHttpServer()
                            else shellViewModel.startHttpServer()
                        }
                    )
                }
            }
            item {
                Spacer(modifier = Modifier.height(20.dp))
            }
            item {
                SectionHeader(
                    title = stringResource(R.string.lan_transfer_logs),
                    summary = logSummary
                )
            }
            item {
                Spacer(modifier = Modifier.height(10.dp))
            }
            item {
                LanTransferLogCard(
                    logs = lanLogs,
                    isExpanded = isLogExpanded,
                    onExpandToggle = { isLogExpanded = !isLogExpanded }
                )
            }
            item {
                Spacer(modifier = Modifier.height(20.dp))
            }
            item {
                SectionHeader(
                    title = stringResource(R.string.fetched_screenshots),
                    summary = if (screenshots.isEmpty()) {
                        stringResource(R.string.screenshot_empty_desc)
                    } else {
                        stringResource(R.string.screenshot_count, screenshots.size)
                    }
                )
            }
            item {
                Spacer(modifier = Modifier.height(10.dp))
            }
            item {
                if (screenshots.isNotEmpty()) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .horizontalScroll(rememberScrollState()),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        screenshots.forEach { shot ->
                            ScreenshotCard(
                                shot = shot,
                                modifier = Modifier.width(176.dp),
                                onClick = { navController.navigate(Routes.screenshotDetail(Uri.encode(shot.shotId))) },
                                shellViewModel = shellViewModel
                            )
                        }
                    }
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "左右滑动以查看更多截图",
                        fontSize = 11.sp,
                        color = Color(0xFF409EFF),
                        textAlign = TextAlign.Center,
                        modifier = Modifier.fillMaxWidth()
                    )
                } else {
                    EmptyScreenshotCard()
                }
            }
            item {
                Spacer(modifier = Modifier.height(20.dp + bottomContentPadding))
            }
        }
    }
}

@Composable
private fun LanHeroCard(
    isRunning: Boolean,
    isTransferring: Boolean,
    address: String,
    progress: String,
    screenshotCount: Int,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val accent = when {
        isTransferring -> shellColors.warning
        isRunning -> shellColors.success
        else -> shellColors.primaryAction
    }
    val statusText = when {
        isTransferring -> stringResource(R.string.syncing)
        isRunning -> stringResource(R.string.enabled_short)
        else -> stringResource(R.string.disabled_short)
    }
    val title = when {
        isTransferring -> stringResource(R.string.receiving_watch_screenshots)
        isRunning -> stringResource(R.string.server_started)
        else -> stringResource(R.string.server_not_started)
    }
    val summary = when {
        isTransferring && progress.isNotBlank() && address.isNotBlank() -> "$address\n$progress"
        isTransferring && progress.isNotBlank() -> progress
        address.isNotBlank() -> address
        else -> stringResource(R.string.action_lan_sync_summary)
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
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
                            shellColors.cardBackground
                        )
                    )
                )
                .padding(18.dp)
        ) {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.Top
                ) {
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        StatusPill(
                            text = statusText,
                            dotColor = accent
                        )
                        Text(
                            text = title,
                            fontSize = 22.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = colors.onSurface,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis
                        )
                        Text(
                            text = summary,
                            fontSize = 13.sp,
                            color = colors.onSurfaceVariantSummary,
                            maxLines = 3,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                    Box(
                        modifier = Modifier
                            .padding(start = 12.dp)
                            .size(56.dp)
                            .clip(CircleShape)
                            .background(accent.copy(alpha = 0.14f)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Rounded.Wifi,
                            contentDescription = null,
                            modifier = Modifier.size(28.dp),
                            tint = accent
                        )
                    }
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = stringResource(R.string.lan_service),
                        value = statusText
                    )
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = stringResource(R.string.fetched_screenshots),
                        value = screenshotCount.toString()
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
            contentColor = colors.onSurface
        ),
        cornerRadius = 999.dp,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(dotColor)
            )
            Text(
                text = text,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface
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
            contentColor = colors.onSurface
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 12.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = label,
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Text(
                text = value,
                fontSize = 16.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@Composable
private fun ActionButton(
    text: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
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
            contentColor = contentColor
        ),
        cornerRadius = 18.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = contentColor.copy(alpha = if (enabled) 1f else 0.72f)
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                text = text,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
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
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        Text(
            text = title,
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface
        )
        Text(
            text = summary,
            fontSize = 12.sp,
            color = shellColors.secondaryText,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis
        )
    }
}

@Composable
private fun EmptyScreenshotCard() {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .height(220.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Box(
                modifier = Modifier
                    .size(56.dp)
                    .clip(CircleShape)
                    .background(colors.surfaceContainer),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Rounded.Downloading,
                    contentDescription = null,
                    modifier = Modifier.size(28.dp),
                    tint = colors.onSurfaceVariantSummary
                )
            }
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = stringResource(R.string.screenshot_empty),
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = stringResource(R.string.screenshot_empty_desc),
                fontSize = 13.sp,
                color = shellColors.secondaryText,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
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
private fun LanTransferLogCard(
    logs: List<LogEntry>,
    isExpanded: Boolean,
    onExpandToggle: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val previewCount = 4
    val visibleLogs = remember(logs, isExpanded) {
        if (isExpanded) logs else logs.take(previewCount)
    }
    val showExpandHint = !isExpanded && logs.size > previewCount
    val showCollapseHint = isExpanded && logs.isNotEmpty()
    val hintAlpha by animateFloatAsState(
        targetValue = if (showExpandHint || showCollapseHint) 1f else 0f,
        animationSpec = tween(durationMillis = 180),
        label = "lanLogHintAlpha"
    )

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .then(
                when {
                    logs.isEmpty() -> Modifier
                    isExpanded -> Modifier
                    showExpandHint -> Modifier.height(224.dp)
                    else -> Modifier
                }
            ),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 22.dp
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 12.dp, vertical = 12.dp)
        ) {
            if (logs.isEmpty()) {
                LanLogEmptyState(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(vertical = 20.dp)
                        .align(Alignment.Center)
                )
                return@Box
            }

            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .then(if (showExpandHint) Modifier.fillMaxHeight() else Modifier)
                    .padding(top = 2.dp, bottom = if (showExpandHint || showCollapseHint) 40.dp else 2.dp),
                verticalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                visibleLogs.forEach { entry ->
                    LanLogItem(entry)
                }
            }

            if (showExpandHint) {
                Box(
                    modifier = Modifier
                        .align(Alignment.BottomCenter)
                        .fillMaxWidth()
                        .height(46.dp)
                        .alpha(hintAlpha)
                        .background(
                            Brush.verticalGradient(
                                colors = listOf(
                                    Color.Transparent,
                                    shellColors.cardBackground.copy(alpha = 0.94f)
                                )
                            )
                        ),
                    contentAlignment = Alignment.BottomCenter
                ) {
                    Card(
                        colors = CardColors(
                            color = Color.Transparent,
                            contentColor = shellColors.secondaryText
                        ),
                        onClick = onExpandToggle,
                        showIndication = true,
                        pressFeedbackType = PressFeedbackType.Sink
                        ) {
                        Text(
                            text = "\u70B9\u51FB\u67E5\u770B\u66F4\u591A\u65E5\u5FD7",
                            modifier = Modifier.padding(bottom = 8.dp),
                            fontSize = 11.sp,
                            color = shellColors.secondaryText
                        )
                    }
                }
            } else if (showCollapseHint) {
                Box(
                    modifier = Modifier
                        .align(Alignment.BottomCenter)
                        .fillMaxWidth()
                        .alpha(hintAlpha),
                    contentAlignment = Alignment.BottomCenter
                ) {
                    Card(
                        colors = CardColors(
                            color = Color.Transparent,
                            contentColor = shellColors.secondaryText
                        ),
                        onClick = onExpandToggle,
                        showIndication = true,
                        pressFeedbackType = PressFeedbackType.Sink
                    ) {
                        Text(
                            text = "\u6536\u8D77\u65E5\u5FD7",
                            modifier = Modifier.padding(top = 6.dp, bottom = 2.dp),
                            fontSize = 11.sp,
                            color = shellColors.secondaryText
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun LanLogItem(entry: LogEntry) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val time = remember(entry.timestamp) {
        SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(Date(entry.timestamp))
    }
    val accent = remember(entry.direction, entry.type, entry.message) {
        when {
            entry.direction.equals("ERROR", ignoreCase = true) ||
                entry.type.contains("error", ignoreCase = true) ||
                entry.message.contains("failed", ignoreCase = true) -> shellColors.danger
            entry.message.contains("complete", ignoreCase = true) ||
                entry.message.contains("started", ignoreCase = true) -> shellColors.success
            entry.message.contains("chunk", ignoreCase = true) ||
                entry.message.contains("receiving", ignoreCase = true) -> shellColors.warning
            else -> shellColors.primaryAction
        }
    }

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp, vertical = 7.dp)
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(999.dp))
                        .background(accent.copy(alpha = 0.14f))
                        .padding(horizontal = 8.dp, vertical = 4.dp)
                ) {
                    Text(
                        text = time,
                        fontSize = 10.sp,
                        fontFamily = FontFamily.Monospace,
                        color = accent
                    )
                }
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = entry.type.uppercase(Locale.ROOT),
                    fontSize = 10.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = shellColors.secondaryText,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
            }
            Text(
                text = entry.message,
                fontSize = 12.sp,
                lineHeight = 18.sp,
                color = colors.onSurface.copy(alpha = 0.82f),
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@Composable
private fun LanLogEmptyState(modifier: Modifier = Modifier) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Column(
        modifier = modifier,
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        Box(
            modifier = Modifier
                .size(52.dp)
                .clip(CircleShape)
                .background(colors.surface.copy(alpha = 0.92f)),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = Icons.Rounded.Wifi,
                contentDescription = null,
                modifier = Modifier.size(24.dp),
                tint = shellColors.secondaryText
            )
        }
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = stringResource(R.string.no_lan_transfer_logs),
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface
            )
            Text(
                text = stringResource(R.string.action_lan_sync_summary),
                fontSize = 12.sp,
                color = shellColors.secondaryText,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
                textAlign = TextAlign.Center
            )
        }
    }
}

@Composable
private fun ScreenshotCard(
    shot: Screenshot,
    modifier: Modifier,
    onClick: () -> Unit,
    shellViewModel: ShellViewModel,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val previewPath = remember(shot.localFilePath, shot.shotId) {
        shot.localFilePath.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shot.shotId)
    }
    val footerText = shot.transferHint.ifBlank { shot.capturedAt }

    Card(
        modifier = modifier.height(240.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 22.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(12.dp)
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(162.dp)
                    .clip(RoundedCornerShape(16.dp)),
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
                        contentScale = ContentScale.FillHeight
                    )
                } else {
                    Icon(
                        imageVector = Icons.Rounded.Downloading,
                        contentDescription = null,
                        modifier = Modifier.size(28.dp),
                        tint = Color.White.copy(alpha = 0.72f)
                    )
                }
            }
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = shot.displayTitle.ifBlank { "#${shot.index}" },
                fontSize = 17.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = footerText,
                fontSize = 11.sp,
                color = shellColors.secondaryText,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
