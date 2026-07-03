package com.shell.liangyi.ui

import android.content.Intent
import android.net.Uri
import android.os.Build
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBars
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Home
import androidx.compose.material.icons.rounded.Info
import androidx.compose.material.icons.rounded.Settings
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.shell.liangyi.R
import com.shell.liangyi.feature.AgentEntryPointProvider
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.bluetooth.BluetoothScreen
import com.shell.liangyi.ui.components.LiquidGlassBottomBar
import com.shell.liangyi.ui.components.LiquidGlassConfirmDialog
import com.shell.liangyi.ui.components.LiquidGlassInfoDialog
import com.shell.liangyi.ui.components.LiquidGlassTabItem
import com.shell.liangyi.ui.components.LiquidGlassUpdateDialog
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.components.rememberShellBlurBackdrop
import com.shell.liangyi.ui.fetch.FetchScreen
import com.shell.liangyi.ui.index.IndexScreen
import com.shell.liangyi.ui.screenshot.ScreenshotDetailScreen
import com.shell.liangyi.ui.screenshot.ScreenshotTimelineScreen
import com.shell.liangyi.ui.settings.SettingsScreen
import com.shell.liangyi.ui.settings.SettingsTabScreen
import com.shell.liangyi.ui.theme.ShellTheme
import kotlinx.coroutines.launch
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.blur.layerBackdrop
import top.yukonga.miuix.kmp.blur.rememberLayerBackdrop
import top.yukonga.miuix.kmp.theme.MiuixTheme
import kotlin.math.abs

object Routes {
    const val MAIN = "main"
    const val BLUETOOTH = "bluetooth"
    const val FETCH = "fetch"
    const val TERMINAL = "terminal"
    const val LOGS = "logs"
    const val SCREENSHOT_TIMELINE = "screenshot_timeline"
    const val SCREENSHOT_DETAIL = "screenshot_detail/{shotId}"

    fun screenshotDetail(shotId: String) = "screenshot_detail/$shotId"
}

@Composable
private fun rootTabItems(): List<LiquidGlassTabItem> = listOf(
    LiquidGlassTabItem(
        label = stringResource(R.string.tab_home),
        icon = Icons.Rounded.Home,
    ),
    LiquidGlassTabItem(
        label = stringResource(R.string.tab_settings),
        icon = Icons.Rounded.Settings,
    ),
    LiquidGlassTabItem(
        label = stringResource(R.string.tab_about),
        icon = Icons.Rounded.Info,
    ),
)

@Composable
fun ShellScreen(shellViewModel: ShellViewModel) {
    val navController = rememberNavController()
    val context = LocalContext.current
    val configuration = LocalConfiguration.current
    val density = LocalDensity.current
    val windowWidth = remember(configuration.screenWidthDp, density.density) {
        (configuration.screenWidthDp * density.density).toInt()
    }
    val rootBackdrop = rememberShellBlurBackdrop(enableBlur = Build.VERSION.SDK_INT >= Build.VERSION_CODES.S_V2)
    val updatePrompt by shellViewModel.updatePrompt.collectAsState()
    val skipOptionalUpdateInfoDialogVisible by shellViewModel.skipOptionalUpdateInfoDialogVisible.collectAsState()
    val deleteScreenshotConfirmShotId by shellViewModel.deleteScreenshotConfirmShotId.collectAsState()
    var displayedUpdatePrompt by remember { mutableStateOf(updatePrompt) }
    var updateDialogVisible by remember { mutableStateOf(updatePrompt != null) }
    var showMountedSkipOptionalInfoDialog by remember { mutableStateOf(skipOptionalUpdateInfoDialogVisible) }
    var animatedSkipOptionalInfoDialogVisible by remember {
        mutableStateOf(skipOptionalUpdateInfoDialogVisible)
    }
    var displayedDeleteScreenshotShotId by remember { mutableStateOf(deleteScreenshotConfirmShotId) }
    var deleteConfirmDialogVisible by remember { mutableStateOf(deleteScreenshotConfirmShotId != null) }

    LaunchedEffect(Unit) {
        shellViewModel.checkForUpdates(manual = false)
    }

    LaunchedEffect(Unit) {
        shellViewModel.updateMessages.collect { message ->
            android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show()
        }
    }

    LaunchedEffect(updatePrompt) {
        if (updatePrompt != null) {
            displayedUpdatePrompt = updatePrompt
            updateDialogVisible = true
        } else if (displayedUpdatePrompt != null) {
            updateDialogVisible = false
        }
    }

    LaunchedEffect(skipOptionalUpdateInfoDialogVisible) {
        if (skipOptionalUpdateInfoDialogVisible) {
            showMountedSkipOptionalInfoDialog = true
            animatedSkipOptionalInfoDialogVisible = true
        } else if (showMountedSkipOptionalInfoDialog) {
            animatedSkipOptionalInfoDialogVisible = false
        }
    }

    LaunchedEffect(deleteScreenshotConfirmShotId) {
        if (deleteScreenshotConfirmShotId != null) {
            displayedDeleteScreenshotShotId = deleteScreenshotConfirmShotId
            deleteConfirmDialogVisible = true
        } else if (displayedDeleteScreenshotShotId != null) {
            deleteConfirmDialogVisible = false
        }
    }

    Box(modifier = Modifier.fillMaxSize()) {
        NavHost(
            navController = navController,
            startDestination = Routes.MAIN,
            modifier = if (rootBackdrop != null) {
                Modifier
                    .fillMaxSize()
                    .layerBackdrop(rootBackdrop)
            } else {
                Modifier.fillMaxSize()
            },
            enterTransition = { AnimTools.enterTransition(windowWidth) },
            exitTransition = { AnimTools.exitTransition(windowWidth) },
            popEnterTransition = { AnimTools.popEnterTransition(windowWidth) },
            popExitTransition = { AnimTools.popExitTransition(windowWidth) },
        ) {
            composable(Routes.MAIN) {
                MainPagerScreen(
                    navController = navController,
                    shellViewModel = shellViewModel,
                )
            }
            composable(Routes.BLUETOOTH) {
                BluetoothScreen(
                    navController = navController,
                    shellViewModel = shellViewModel,
                )
            }
            composable(Routes.FETCH) {
                FetchScreen(
                    navController = navController,
                    shellViewModel = shellViewModel,
                )
            }
            composable(Routes.SCREENSHOT_TIMELINE) {
                ScreenshotTimelineScreen(
                    navController = navController,
                    shellViewModel = shellViewModel,
                )
            }
            composable(Routes.TERMINAL) {
                if (AgentEntryPointProvider.entryPoint.isEnabled) {
                    AgentEntryPointProvider.entryPoint.Screen(navController, shellViewModel)
                } else {
                    PlaceholderScreen(
                        title = stringResource(R.string.remote_terminal),
                        subtitle = stringResource(R.string.remote_terminal_developing),
                        navController = navController
                    )
                }
            }
            composable(Routes.LOGS) {
                SettingsScreen(navController, shellViewModel)
            }
            composable(Routes.SCREENSHOT_DETAIL) { backStackEntry ->
                val rawShotId = backStackEntry.arguments?.getString("shotId") ?: "0"
                val shotId = Uri.decode(rawShotId)
                ScreenshotDetailScreen(
                    shotId = shotId,
                    navController = navController,
                    shellViewModel = shellViewModel,
                )
            }
        }

        displayedUpdatePrompt?.let { prompt ->
            LiquidGlassUpdateDialog(
                prompt = prompt,
                visible = updateDialogVisible,
                onDismissRequest = { shellViewModel.dismissUpdatePrompt() },
                onConfirm = {
                    context.startActivity(
                        Intent(Intent.ACTION_VIEW, Uri.parse(prompt.info.downloadUrl)).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                    )
                    if (!prompt.mandatory) {
                        shellViewModel.dismissUpdatePrompt()
                    }
                },
                onExitFinished = {
                    if (!updateDialogVisible) {
                        displayedUpdatePrompt = null
                    }
                },
                backdrop = rootBackdrop,
            )
        }

        if (showMountedSkipOptionalInfoDialog) {
            LiquidGlassInfoDialog(
                title = stringResource(R.string.skip_optional_updates_info_title),
                message = stringResource(R.string.skip_optional_updates_info_message),
                buttonText = stringResource(R.string.acknowledge),
                visible = animatedSkipOptionalInfoDialogVisible,
                onDismissRequest = { shellViewModel.dismissSkipOptionalUpdateInfoDialog() },
                onExitFinished = {
                    if (!animatedSkipOptionalInfoDialogVisible) {
                        showMountedSkipOptionalInfoDialog = false
                    }
                },
                backdrop = rootBackdrop,
            )
        }

        displayedDeleteScreenshotShotId?.let { shotId ->
            LiquidGlassConfirmDialog(
                title = "确认删除",
                message = "删除后当前截图缓存将从本机移除，且无法恢复。确定继续吗？",
                confirmText = "删除",
                dismissText = "取消",
                visible = deleteConfirmDialogVisible,
                onDismissRequest = { shellViewModel.dismissDeleteScreenshotConfirm() },
                onConfirm = {
                    shellViewModel.deleteScreenshot(shotId)
                    shellViewModel.dismissDeleteScreenshotConfirm()
                    navController.popBackStack()
                },
                onExitFinished = {
                    if (!deleteConfirmDialogVisible) {
                        displayedDeleteScreenshotShotId = null
                    }
                },
                backdrop = rootBackdrop,
            )
        }
    }
}

@Composable
private fun MainPagerScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val rootTabItems = rootTabItems()
    val pagerState = rememberPagerState(
        initialPage = 0,
        pageCount = { rootTabItems.size },
    )
    val scope = rememberCoroutineScope()
    val navigationBarPadding = WindowInsets.navigationBars.asPaddingValues().calculateBottomPadding()
    val rootBottomPadding = 88.dp + navigationBarPadding
    val blurSupported = Build.VERSION.SDK_INT >= Build.VERSION_CODES.S_V2
    val pageBackground = ShellTheme.colors.pageBackground
    val liquidGlassBackdrop = if (blurSupported) {
        rememberLayerBackdrop {
            drawRect(pageBackground)
            drawContent()
        }
    } else {
        null
    }

    Box(modifier = Modifier.fillMaxSize()) {
        HorizontalPager(
            state = pagerState,
            beyondViewportPageCount = rootTabItems.lastIndex,
            modifier = if (liquidGlassBackdrop != null) {
                Modifier
                    .fillMaxSize()
                    .layerBackdrop(liquidGlassBackdrop)
            } else {
                Modifier.fillMaxSize()
            },
        ) { page ->
            when (page) {
                0 -> IndexScreen(
                    navController = navController,
                    shellViewModel = shellViewModel,
                    bottomContentPadding = rootBottomPadding,
                    onOpenLogs = { navController.navigate(Routes.LOGS) },
                )
                1 -> SettingsTabScreen(
                    shellViewModel = shellViewModel,
                    bottomContentPadding = rootBottomPadding,
                )
                2 -> AboutScreen(
                    showBackButton = false,
                    bottomContentPadding = rootBottomPadding,
                )
            }
        }

        LiquidGlassBottomBar(
            items = rootTabItems,
            selectedIndex = pagerState.currentPage,
            onSelectedIndexChange = { index ->
                scope.launch {
                    if (index == pagerState.currentPage && index == pagerState.targetPage) {
                        return@launch
                    }
                    pagerState.animateScrollToPage(
                        page = index,
                        animationSpec = tween(
                            durationMillis = 280 + abs(index - pagerState.currentPage) * 60,
                            easing = FastOutSlowInEasing,
                        ),
                    )
                }
            },
            backdrop = liquidGlassBackdrop,
            blurEnabled = blurSupported,
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(
                    start = 52.dp,
                    end = 52.dp,
                    bottom = 12.dp + navigationBarPadding,
                ),
        )
    }
}

@Composable
private fun PlaceholderScreen(title: String, subtitle: String, navController: NavHostController) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    ShellBackScaffold(
        title = title,
        onBack = { navController.popBackStack() },
    ) { innerPadding ->
        Column(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
            Spacer(modifier = Modifier.height(13.dp))
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp)
                    .height(56.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface,
                ),
                cornerRadius = 15.dp,
            ) {
                Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Text(
                        text = subtitle,
                        fontSize = 16.sp,
                        fontWeight = androidx.compose.ui.text.font.FontWeight.Medium,
                        color = shellColors.secondaryText,
                    )
                }
            }
        }
    }
}
