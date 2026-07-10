package com.shell.liangyi.ui.index

// Layout adapted from SukiSU Ultra's GPL-3.0 HomeMiuix screen for Shell++ state data.

import androidx.annotation.StringRes
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.add
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.displayCutout
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.background
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.automirrored.rounded.Article
import androidx.compose.material.icons.rounded.Apps
import androidx.compose.material.icons.rounded.Bluetooth
import androidx.compose.material.icons.rounded.CheckCircleOutline
import androidx.compose.material.icons.rounded.CleaningServices
import androidx.compose.material.icons.rounded.ErrorOutline
import androidx.compose.material.icons.rounded.Folder
import androidx.compose.material.icons.rounded.Terminal
import androidx.compose.material.icons.rounded.Wifi
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.ui.Routes
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Scaffold
import top.yukonga.miuix.kmp.basic.ScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.TopAppBar
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import top.yukonga.miuix.kmp.utils.overScrollVertical
import top.yukonga.miuix.kmp.utils.scrollEndHaptic

@Composable
fun IndexScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
    bottomContentPadding: Dp = 0.dp,
    onOpenLogs: () -> Unit = { navController.navigate(Routes.LOGS) },
) {
    val connectionState by shellViewModel.connectionState.collectAsState(initial = ConnectionState.DISCONNECTED)
    val watchProductCode by shellViewModel.watchProductCode.collectAsState()
    val screenshots by shellViewModel.screenshots.collectAsState()
    val syncState by shellViewModel.syncState.collectAsState(initial = ScreenshotReceiver.SyncState.Idle)
    val receiveProgress by shellViewModel.receiveProgress.collectAsState(initial = "")
    val httpRunning by shellViewModel.httpServerRunning.collectAsState()
    val httpIp by shellViewModel.httpServerIp.collectAsState()
    val httpPort by shellViewModel.httpServerPort.collectAsState()
    val scrollBehavior = MiuixScrollBehavior()
    val bottomInnerPadding = 16.dp + bottomContentPadding
    val isBusy = syncState is ScreenshotReceiver.SyncState.Receiving ||
        syncState is ScreenshotReceiver.SyncState.WaitingAck

    Scaffold(
        topBar = {
            TopBar(
                onOpenLogs = onOpenLogs,
                scrollBehavior = scrollBehavior,
            )
        },
        popupHost = { },
        containerColor = ShellTheme.colors.pageBackground,
        contentWindowInsets = WindowInsets.systemBars
            .add(WindowInsets.displayCutout)
            .only(WindowInsetsSides.Horizontal),
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxHeight()
                .scrollEndHaptic()
                .overScrollVertical()
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp),
            contentPadding = innerPadding,
            overscrollEffect = null,
        ) {
            item {
                Column(
                    modifier = Modifier.padding(vertical = 12.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(12.dp),
                ) {
                    StatusCard(
                        state = HomeState(
                            connectionState = connectionState,
                            watchProductCode = watchProductCode,
                            isBusy = isBusy,
                            receiveProgress = receiveProgress,
                            screenshotCount = screenshots.size,
                            httpRunning = httpRunning,
                            httpAddress = if (httpRunning && httpIp.isNotBlank()) "$httpIp:$httpPort" else "",
                        ),
                        actions = HomeActions(
                            onRefreshConnection = shellViewModel::ensureConnection,
                            onOpenLan = { navController.navigate(Routes.FETCH) },
                            onOpenTimeline = { navController.navigate(Routes.SCREENSHOT_TIMELINE) },
                        ),
                    )
                    ActionList(navController)
                    InfoCard(
                        connectionState = connectionState,
                        screenshotCount = screenshots.size,
                        httpRunning = httpRunning,
                        httpAddress = if (httpRunning && httpIp.isNotBlank()) {
                            "$httpIp:$httpPort"
                        } else {
                            stringResource(R.string.not_enabled)
                        },
                    )
                    Spacer(Modifier.height(bottomInnerPadding))
                }
            }
        }
    }
}

private data class HomeState(
    val connectionState: ConnectionState,
    val watchProductCode: String,
    val isBusy: Boolean,
    val receiveProgress: String,
    val screenshotCount: Int,
    val httpRunning: Boolean,
    val httpAddress: String,
) {
    val isConnected: Boolean = connectionState == ConnectionState.CONNECTED
    val displayWatchProductCode: String = watchProductCode
        .replace(Regex("\\bSmart\\b", RegexOption.IGNORE_CASE), "")
        .replace(Regex("\\s+"), " ")
        .trim()
}

private data class HomeActions(
    val onRefreshConnection: () -> Unit,
    val onOpenLan: () -> Unit,
    val onOpenTimeline: () -> Unit,
)

private data class HomeActionItem(
    val title: String,
    val icon: ImageVector,
    val onClick: () -> Unit,
)

@Composable
private fun TopBar(
    onOpenLogs: () -> Unit,
    scrollBehavior: ScrollBehavior,
) {
    val colors = MiuixTheme.colorScheme
    TopAppBar(
        color = ShellTheme.colors.pageBackground,
        title = "Shell++",
        actions = {
            Card(
                modifier = Modifier
                    .padding(end = 10.dp)
                    .size(34.dp),
                colors = CardColors(
                    color = Color.Transparent,
                    contentColor = colors.onBackground,
                ),
                cornerRadius = 12.dp,
                onClick = onOpenLogs,
                showIndication = true,
                pressFeedbackType = PressFeedbackType.Sink,
            ) {
                Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Icon(
                        imageVector = Icons.AutoMirrored.Rounded.Article,
                        contentDescription = stringResource(R.string.logs),
                        modifier = Modifier.size(18.dp),
                        tint = colors.onBackground,
                    )
                }
            }
        },
        scrollBehavior = scrollBehavior,
    )
}

@Composable
private fun StatusCard(
    state: HomeState,
    actions: HomeActions,
) {
    BoxWithConstraints(modifier = Modifier.fillMaxWidth()) {
        val squareSize = ((maxWidth - 12.dp) / 2).coerceIn(156.dp, 220.dp)
        val miniCardHeight = (squareSize - 12.dp) / 2

        Row(
            modifier = Modifier
                .fillMaxWidth()
                .height(squareSize),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            MainConnectionCard(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight(),
                state = state,
                onClick = actions.onRefreshConnection,
            )
            Column(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight(),
            ) {
                CounterCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(miniCardHeight),
                    title = stringResource(R.string.screenshot_list),
                    value = state.screenshotCount.toString(),
                    summary = if (state.screenshotCount > 0) {
                        stringResource(R.string.cached)
                    } else {
                        stringResource(R.string.pending_fetch)
                    },
                    onClick = actions.onOpenTimeline,
                )
                Spacer(Modifier.height(12.dp))
                CounterCard(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(miniCardHeight),
                    title = stringResource(R.string.lan),
                    value = if (state.httpRunning) {
                        stringResource(R.string.enabled_short)
                    } else {
                        stringResource(R.string.disabled_short)
                    },
                    summary = if (state.httpRunning) {
                        stringResource(R.string.direct_transfer_service)
                    } else {
                        stringResource(R.string.not_enabled)
                    },
                    onClick = actions.onOpenLan,
                )
            }
        }
    }
}

@Composable
private fun MainConnectionCard(
    modifier: Modifier,
    state: HomeState,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val accentColor = when {
        state.isBusy -> shellColors.warning
        state.isConnected -> shellColors.success
        else -> shellColors.danger
    }
    val cardColor = when {
        state.isBusy -> shellColors.warning.copy(alpha = 0.18f)
        state.isConnected -> shellColors.success.copy(alpha = 0.18f)
        else -> shellColors.danger.copy(alpha = 0.14f)
    }
    val title = when {
        state.isBusy -> stringResource(R.string.syncing)
        state.isConnected -> stringResource(R.string.connected)
        else -> stringResource(R.string.disconnected)
    }
    val summary = when {
        state.isBusy && state.receiveProgress.isNotBlank() -> state.receiveProgress
        state.isBusy -> stringResource(R.string.receiving_watch_screenshots)
        state.isConnected -> ""
        else -> stringResource(R.string.tap_refresh_connection)
    }
    val icon = if (state.isConnected || state.isBusy) {
        Icons.Rounded.CheckCircleOutline
    } else {
        Icons.Rounded.ErrorOutline
    }

    Card(
        modifier = modifier,
        colors = CardColors(color = cardColor, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Tilt,
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .offset(38.dp, 45.dp),
                contentAlignment = Alignment.BottomEnd,
            ) {
                Icon(
                    modifier = Modifier.size(170.dp),
                    imageVector = icon,
                    tint = accentColor.copy(alpha = 0.72f),
                    contentDescription = null,
                )
            }
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
            ) {
                Text(
                    modifier = Modifier.fillMaxWidth(),
                    text = state.displayWatchProductCode.ifBlank { stringResource(R.string.watch_connection) },
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    modifier = Modifier.fillMaxWidth(),
                    text = title,
                    fontSize = 26.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                )
                if (summary.isNotBlank()) {
                    Spacer(Modifier.height(4.dp))
                    Text(
                        modifier = Modifier.fillMaxWidth(),
                        text = summary,
                        fontSize = 13.sp,
                        fontWeight = FontWeight.Medium,
                        color = colors.onSurfaceVariantSummary,
                        maxLines = 3,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
            }
        }
    }
}

@Composable
private fun CounterCard(
    modifier: Modifier,
    title: String,
    value: String,
    summary: String,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = modifier,
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        insideMargin = PaddingValues(16.dp),
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Tilt,
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.Start,
        ) {
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = title,
                fontWeight = FontWeight.Medium,
                fontSize = 15.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = value,
                fontSize = 26.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = summary,
                fontWeight = FontWeight.Medium,
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun ActionList(navController: NavHostController) {
    val actions = listOf(
        HomeActionItem(
            stringResource(R.string.action_bluetooth_sync_title),
            Icons.Rounded.Bluetooth,
        ) { navController.navigate(Routes.BLUETOOTH) },
        HomeActionItem(
            stringResource(R.string.action_lan_sync_title),
            Icons.Rounded.Wifi,
        ) { navController.navigate(Routes.FETCH) },
        HomeActionItem(
            stringResource(R.string.action_file_viewer_title),
            Icons.Rounded.Folder,
        ) { navController.navigate(Routes.FILE_VIEWER) },
        HomeActionItem(
            stringResource(R.string.action_cache_clean_title),
            Icons.Rounded.CleaningServices,
        ) { navController.navigate(Routes.CACHE_CLEAN) },
        HomeActionItem(
            stringResource(R.string.action_app_manager_title),
            Icons.Rounded.Apps,
        ) { navController.navigate(Routes.APP_MANAGER) },
        HomeActionItem(
            stringResource(R.string.action_remote_terminal_title),
            Icons.Rounded.Terminal,
        ) { navController.navigate(Routes.TERMINAL) },
    )

    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        actions.chunked(2).forEach { rowItems ->
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                verticalAlignment = Alignment.Top,
            ) {
                rowItems.forEach { item ->
                    ActionCard(
                        modifier = Modifier
                            .weight(1f)
                            .heightIn(min = 68.dp),
                        title = item.title,
                        icon = item.icon,
                        onClick = item.onClick,
                    )
                }
                if (rowItems.size == 1) {
                    Spacer(modifier = Modifier.weight(1f))
                }
            }
        }
    }
}

@Composable
private fun ActionCard(
    modifier: Modifier = Modifier,
    title: String,
    icon: ImageVector,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = modifier,
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .defaultMinSize(minHeight = 68.dp)
                .padding(horizontal = 14.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(24.dp),
                tint = colors.onSurface,
            )
            Spacer(Modifier.width(12.dp))
            Text(
                modifier = Modifier.weight(1f),
                text = title,
                fontSize = 16.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(Modifier.width(8.dp))
            Icon(
                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun InfoCard(
    connectionState: ConnectionState,
    screenshotCount: Int,
    httpRunning: Boolean,
    httpAddress: String,
) {
    @Composable
    fun InfoText(
        title: String,
        content: String,
        bottomPadding: Dp = 20.dp,
    ) {
        val colors = MiuixTheme.colorScheme
        Text(
            text = title,
            fontSize = MiuixTheme.textStyles.headline1.fontSize,
            fontWeight = FontWeight.Medium,
            color = colors.onSurface,
        )
        Text(
            text = content,
            fontSize = MiuixTheme.textStyles.body2.fontSize,
            color = colors.onSurfaceVariantSummary,
            modifier = Modifier.padding(top = 2.dp, bottom = bottomPadding),
            maxLines = 2,
            overflow = TextOverflow.Ellipsis,
        )
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = MiuixTheme.colorScheme.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            InfoText(
                title = stringResource(R.string.connection_status),
                content = stringResource(connectionState.labelRes())
            )
            InfoText(
                title = stringResource(R.string.screenshot_cache),
                content = stringResource(R.string.screenshot_count, screenshotCount)
            )
            InfoText(
                title = stringResource(R.string.lan_service),
                content = if (httpRunning) httpAddress else stringResource(R.string.not_enabled),
                bottomPadding = 0.dp,
            )
        }
    }
}

@StringRes
private fun ConnectionState.labelRes(): Int = when (this) {
    ConnectionState.DISCONNECTED -> R.string.disconnected
    ConnectionState.CONNECTING -> R.string.connection_state_connecting
    ConnectionState.CONNECTED -> R.string.connected
    ConnectionState.ERROR -> R.string.connection_state_error
}
