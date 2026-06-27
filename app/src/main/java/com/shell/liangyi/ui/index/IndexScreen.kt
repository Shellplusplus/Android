package com.shell.liangyi.ui.index

// Layout adapted from SukiSU Ultra's GPL-3.0 HomeMiuix screen for Shell++ state data.

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.add
import androidx.compose.foundation.layout.displayCutout
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.rounded.Bluetooth
import androidx.compose.material.icons.rounded.CheckCircleOutline
import androidx.compose.material.icons.rounded.ErrorOutline
import androidx.compose.material.icons.rounded.Info
import androidx.compose.material.icons.rounded.PhotoLibrary
import androidx.compose.material.icons.rounded.Terminal
import androidx.compose.material.icons.rounded.Wifi
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
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
    shellViewModel: ShellViewModel
) {
    val connectionState by shellViewModel.connectionState.collectAsState(initial = ConnectionState.DISCONNECTED)
    val screenshots by shellViewModel.screenshots.collectAsState()
    val syncState by shellViewModel.syncState.collectAsState(initial = ScreenshotReceiver.SyncState.Idle)
    val receiveProgress by shellViewModel.receiveProgress.collectAsState(initial = "")
    val httpRunning by shellViewModel.httpServerRunning.collectAsState()
    val httpIp by shellViewModel.httpServerIp.collectAsState()
    val httpPort by shellViewModel.httpServerPort.collectAsState()
    val scrollBehavior = MiuixScrollBehavior()
    val bottomInnerPadding = 16.dp
    val isBusy = syncState is ScreenshotReceiver.SyncState.Receiving ||
        syncState is ScreenshotReceiver.SyncState.WaitingAck

    Scaffold(
        topBar = {
            TopBar(
                navController = navController,
                scrollBehavior = scrollBehavior
            )
        },
        popupHost = { },
        containerColor = ShellTheme.colors.pageBackground,
        contentWindowInsets = WindowInsets.systemBars.add(WindowInsets.displayCutout).only(WindowInsetsSides.Horizontal)
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxHeight()
                .scrollEndHaptic()
                .overScrollVertical()
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp),
            contentPadding = innerPadding,
            overscrollEffect = null
        ) {
            item {
                Column(
                    modifier = Modifier.padding(vertical = 12.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    StatusCard(
                        state = HomeState(
                            connectionState = connectionState,
                            isBusy = isBusy,
                            receiveProgress = receiveProgress,
                            screenshotCount = screenshots.size,
                            httpRunning = httpRunning,
                            httpAddress = if (httpRunning && httpIp.isNotBlank()) "$httpIp:$httpPort" else ""
                        ),
                        actions = HomeActions(
                            onRefreshConnection = shellViewModel::ensureConnection,
                            onOpenBluetooth = { navController.navigate(Routes.BLUETOOTH) },
                            onOpenLan = { navController.navigate(Routes.FETCH) }
                        )
                    )
                    ActionList(navController)
                    InfoCard(
                        connectionState = connectionState,
                        screenshotCount = screenshots.size,
                        httpRunning = httpRunning,
                        httpAddress = if (httpRunning && httpIp.isNotBlank()) "$httpIp:$httpPort" else "未启动"
                    )
                    LearnMoreCard(navController)
                    Spacer(Modifier.height(bottomInnerPadding))
                }
            }
        }
    }
}

private data class HomeState(
    val connectionState: ConnectionState,
    val isBusy: Boolean,
    val receiveProgress: String,
    val screenshotCount: Int,
    val httpRunning: Boolean,
    val httpAddress: String
) {
    val isConnected: Boolean = connectionState == ConnectionState.CONNECTED
}

private data class HomeActions(
    val onRefreshConnection: () -> Unit,
    val onOpenBluetooth: () -> Unit,
    val onOpenLan: () -> Unit
)

@Composable
private fun TopBar(
    navController: NavHostController,
    scrollBehavior: ScrollBehavior
) {
    val colors = MiuixTheme.colorScheme
    TopAppBar(
        color = ShellTheme.colors.pageBackground,
        title = "Shell++",
        actions = {
            Image(
                painter = painterResource(id = R.drawable.set),
                contentDescription = "设置",
                modifier = Modifier
                    .padding(end = 10.dp)
                    .size(34.dp)
                    .padding(8.dp)
                    .clickable { navController.navigate(Routes.SETTINGS) },
                colorFilter = ColorFilter.tint(colors.onBackground),
                contentScale = ContentScale.Fit
            )
        },
        scrollBehavior = scrollBehavior
    )
}

@Composable
private fun StatusCard(
    state: HomeState,
    actions: HomeActions
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .height(IntrinsicSize.Min),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        MainConnectionCard(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight(),
            state = state,
            onClick = actions.onRefreshConnection
        )
        Column(
            modifier = Modifier
                .weight(1f)
                .fillMaxHeight()
        ) {
            CounterCard(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f),
                title = "截图",
                value = state.screenshotCount.toString(),
                summary = if (state.screenshotCount > 0) "已缓存" else "待获取",
                onClick = actions.onOpenBluetooth
            )
            Spacer(Modifier.height(12.dp))
            CounterCard(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f),
                title = "局域网",
                value = if (state.httpRunning) "开" else "关",
                summary = if (state.httpRunning) "直传服务" else "未启动",
                onClick = actions.onOpenLan
            )
        }
    }
}

@Composable
private fun MainConnectionCard(
    modifier: Modifier,
    state: HomeState,
    onClick: () -> Unit
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
        state.isBusy -> "正在同步"
        state.isConnected -> "已连接"
        else -> "未连接"
    }
    val summary = when {
        state.isBusy && state.receiveProgress.isNotBlank() -> state.receiveProgress
        state.isBusy -> "正在接收手表截图"
        state.isConnected -> "快应用通信已就绪"
        else -> "点击刷新连接"
    }
    val icon = if (state.isConnected || state.isBusy) Icons.Rounded.CheckCircleOutline else Icons.Rounded.ErrorOutline

    Card(
        modifier = modifier,
        colors = CardColors(color = cardColor, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Tilt
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .offset(38.dp, 45.dp),
                contentAlignment = Alignment.BottomEnd
            ) {
                Icon(
                    modifier = Modifier.size(170.dp),
                    imageVector = icon,
                    tint = accentColor.copy(alpha = 0.72f),
                    contentDescription = null
                )
            }
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp)
            ) {
                Text(
                    modifier = Modifier.fillMaxWidth(),
                    text = "手表连接",
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    modifier = Modifier.fillMaxWidth(),
                    text = title,
                    fontSize = 26.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    modifier = Modifier.fillMaxWidth(),
                    text = summary,
                    fontSize = 13.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 3,
                    overflow = TextOverflow.Ellipsis
                )
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
    onClick: () -> Unit
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = modifier,
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 18.dp,
        insideMargin = PaddingValues(16.dp),
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Tilt
    ) {
        Column(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.Start
        ) {
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = title,
                fontWeight = FontWeight.Medium,
                fontSize = 15.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = value,
                fontSize = 26.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = summary,
                fontWeight = FontWeight.Medium,
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@Composable
private fun ActionList(navController: NavHostController) {
    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(12.dp)
    ) {
        ActionCard(
            title = "截图同步（蓝牙）",
            summary = "通过小米穿戴消息通道获取截图",
            icon = Icons.Rounded.Bluetooth,
            onClick = { navController.navigate(Routes.BLUETOOTH) }
        )
        ActionCard(
            title = "截图同步（局域网）",
            summary = "启动手机端 HTTP 服务，使用 WiFi 直传截图",
            icon = Icons.Rounded.Wifi,
            onClick = { navController.navigate(Routes.FETCH) }
        )
        ActionCard(
            title = "远程终端",
            summary = "命令执行与调试能力",
            icon = Icons.Rounded.Terminal,
            onClick = { navController.navigate(Routes.TERMINAL) }
        )
    }
}

@Composable
private fun ActionCard(
    title: String,
    summary: String,
    icon: ImageVector,
    onClick: () -> Unit
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(26.dp),
                tint = colors.onSurface
            )
            Spacer(Modifier.width(14.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
                Spacer(Modifier.height(2.dp))
                Text(
                    text = summary,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis
                )
            }
            Icon(
                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                contentDescription = null,
                modifier = Modifier.size(20.dp),
                tint = colors.outline
            )
        }
    }
}

@Composable
private fun InfoCard(
    connectionState: ConnectionState,
    screenshotCount: Int,
    httpRunning: Boolean,
    httpAddress: String
) {
    @Composable
    fun InfoText(
        title: String,
        content: String,
        bottomPadding: Dp = 20.dp
    ) {
        val colors = MiuixTheme.colorScheme
        Text(
            text = title,
            fontSize = MiuixTheme.textStyles.headline1.fontSize,
            fontWeight = FontWeight.Medium,
            color = colors.onSurface
        )
        Text(
            text = content,
            fontSize = MiuixTheme.textStyles.body2.fontSize,
            color = colors.onSurfaceVariantSummary,
            modifier = Modifier.padding(top = 2.dp, bottom = bottomPadding),
            maxLines = 2,
            overflow = TextOverflow.Ellipsis
        )
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = MiuixTheme.colorScheme.onSurface
        ),
        cornerRadius = 18.dp
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            InfoText(title = "应用", content = "Shell++ Android")
            InfoText(title = "连接状态", content = connectionState.label())
            InfoText(title = "截图缓存", content = "${screenshotCount} 张")
            InfoText(title = "局域网服务", content = if (httpRunning) httpAddress else "未启动", bottomPadding = 0.dp)
        }
    }
}

@Composable
private fun LearnMoreCard(navController: NavHostController) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 18.dp,
        onClick = { navController.navigate(Routes.ABOUT) },
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 18.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                imageVector = Icons.Rounded.Info,
                contentDescription = null,
                modifier = Modifier.size(24.dp),
                tint = colors.onSurface
            )
            Spacer(Modifier.width(14.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = "关于 Shell++",
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface
                )
                Text(
                    text = "查看版本、开源信息与贡献者",
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary
                )
            }
            Icon(
                imageVector = Icons.Rounded.PhotoLibrary,
                contentDescription = null,
                modifier = Modifier.size(1.dp),
                tint = Color.Transparent
            )
        }
    }
}

private fun ConnectionState.label(): String = when (this) {
    ConnectionState.DISCONNECTED -> "未连接"
    ConnectionState.CONNECTING -> "连接中"
    ConnectionState.CONNECTED -> "已连接"
    ConnectionState.ERROR -> "连接异常"
}
