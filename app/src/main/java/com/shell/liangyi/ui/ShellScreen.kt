package com.shell.liangyi.ui

import android.content.Context
import android.net.Uri
import android.os.Build
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.SizeTransform
import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxSize
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
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalWindowInfo
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.shell.liangyi.R
import com.shell.liangyi.core.update.UpdateInstaller
import com.shell.liangyi.feature.AgentEntryPointProvider
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.ai.AiAuthorizedFeatureMode
import com.shell.liangyi.ui.ai.AiLicenseScreen
import com.shell.liangyi.ui.bluetooth.BluetoothScreen
import com.shell.liangyi.ui.components.LiquidGlassBottomBar
import com.shell.liangyi.ui.components.LiquidGlassConfirmDialog
import com.shell.liangyi.ui.components.LiquidGlassInfoDialog
import com.shell.liangyi.ui.components.LiquidGlassTabItem
import com.shell.liangyi.ui.components.LiquidGlassUpdateDialog
import com.shell.liangyi.ui.components.LiquidGlassUpdateProgressDialog
import com.shell.liangyi.ui.components.rememberShellBlurBackdrop
import com.shell.liangyi.ui.fetch.FetchScreen
import com.shell.liangyi.ui.glassport.rememberCatalogDialogBackdrop
import com.shell.liangyi.ui.index.IndexScreen
import com.shell.liangyi.ui.onboarding.OnboardingFlow
import com.shell.liangyi.ui.remote.RemoteFileViewerScreen
import com.shell.liangyi.ui.screenshot.ScreenshotDetailScreen
import com.shell.liangyi.ui.screenshot.ScreenshotTimelineScreen
import com.shell.liangyi.ui.settings.SettingsScreen
import com.shell.liangyi.ui.settings.SettingsTabScreen
import com.shell.liangyi.ui.terminal.RemoteTerminalScreen
import com.shell.liangyi.ui.theme.ShellTheme
import kotlinx.coroutines.Job
import kotlinx.coroutines.launch
import top.yukonga.miuix.kmp.blur.layerBackdrop
import top.yukonga.miuix.kmp.blur.rememberLayerBackdrop
import kotlin.math.abs
import com.shell.liangyi.ui.glassport.backdrops.layerBackdrop as catalogLayerBackdrop

object Routes {
    const val MAIN = "main"
    const val BLUETOOTH = "bluetooth"
    const val FETCH = "fetch"
    const val FILE_VIEWER = "file_viewer"
    const val TERMINAL = "terminal"
    const val AI_LICENSE = "ai_license"
    const val AI_ASSISTANT = "ai_assistant"
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
    val windowWidth = LocalWindowInfo.current.containerSize.width
    val rootBackdrop = rememberShellBlurBackdrop(enableBlur = Build.VERSION.SDK_INT >= Build.VERSION_CODES.S_V2)
    val catalogDialogBackdrop = rememberCatalogDialogBackdrop()
    val showOnboarding by shellViewModel.showOnboarding.collectAsStateWithLifecycle()
    val aiLicenseState by shellViewModel.aiLicenseState.collectAsStateWithLifecycle()
    val aiAuthorizedFeatureMode by shellViewModel.aiAuthorizedFeatureMode.collectAsStateWithLifecycle()
    val updatePrompt by shellViewModel.updatePrompt.collectAsStateWithLifecycle()
    val updateDownloadState by shellViewModel.updateDownloadState.collectAsStateWithLifecycle()
    val skipOptionalUpdateInfoDialogVisible by shellViewModel.skipOptionalUpdateInfoDialogVisible.collectAsStateWithLifecycle()
    val deleteScreenshotConfirmShotId by shellViewModel.deleteScreenshotConfirmShotId.collectAsStateWithLifecycle()
    val updateInstallLaunchFailedDefault = stringResource(R.string.update_install_launch_failed_default)
    val updateInstallPermissionRequired = stringResource(R.string.update_install_permission_required)
    var pendingInstallApkFilePath by rememberSaveable { mutableStateOf<String?>(null) }
    val installPermissionLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.StartActivityForResult(),
    ) {
        val apkFilePath = pendingInstallApkFilePath ?: return@rememberLauncherForActivityResult
        pendingInstallApkFilePath = null
        if (UpdateInstaller.canRequestPackageInstalls(context)) {
            launchUpdateInstaller(
                context = context,
                shellViewModel = shellViewModel,
                apkFilePath = apkFilePath,
                defaultErrorMessage = updateInstallLaunchFailedDefault,
            )
        } else {
            shellViewModel.onUpdateInstallerLaunchFailed(updateInstallPermissionRequired)
        }
    }
    var displayedUpdatePrompt by remember { mutableStateOf(updatePrompt) }
    var updateDialogVisible by remember { mutableStateOf(updatePrompt != null) }
    var displayedUpdateDownloadState by remember { mutableStateOf(updateDownloadState) }
    var updateProgressDialogVisible by remember { mutableStateOf(updateDownloadState.isVisible) }
    var showMountedSkipOptionalInfoDialog by remember { mutableStateOf(skipOptionalUpdateInfoDialogVisible) }
    var animatedSkipOptionalInfoDialogVisible by remember {
        mutableStateOf(skipOptionalUpdateInfoDialogVisible)
    }
    var displayedDeleteScreenshotShotId by remember { mutableStateOf(deleteScreenshotConfirmShotId) }
    var deleteConfirmDialogVisible by remember { mutableStateOf(deleteScreenshotConfirmShotId != null) }

    LaunchedEffect(showOnboarding) {
        if (!showOnboarding) {
            shellViewModel.refreshAiLicense()
            shellViewModel.checkForUpdates(manual = false)
        }
    }

    LaunchedEffect(Unit) {
        shellViewModel.updateMessages.collect { message ->
            android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show()
        }
    }

    LaunchedEffect(Unit) {
        shellViewModel.remoteToolMessages.collect { message ->
            android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show()
        }
    }

    LaunchedEffect(Unit) {
        shellViewModel.installUpdateRequests.collect { apkFilePath ->
            if (UpdateInstaller.canRequestPackageInstalls(context)) {
                launchUpdateInstaller(
                    context = context,
                    shellViewModel = shellViewModel,
                    apkFilePath = apkFilePath,
                    defaultErrorMessage = updateInstallLaunchFailedDefault,
                )
            } else {
                pendingInstallApkFilePath = apkFilePath
                runCatching {
                    installPermissionLauncher.launch(
                        UpdateInstaller.createInstallPermissionIntent(context),
                    )
                }.onFailure { throwable ->
                    pendingInstallApkFilePath = null
                    shellViewModel.onUpdateInstallerLaunchFailed(
                        throwable.message ?: updateInstallLaunchFailedDefault,
                    )
                }
            }
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

    LaunchedEffect(updateDownloadState) {
        if (updateDownloadState.isVisible) {
            displayedUpdateDownloadState = updateDownloadState
            updateProgressDialogVisible = true
        } else if (displayedUpdateDownloadState.isVisible) {
            updateProgressDialogVisible = false
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
        Box(
            modifier = Modifier
                .fillMaxSize()
                .then(
                    if (catalogDialogBackdrop != null) {
                        Modifier.catalogLayerBackdrop(catalogDialogBackdrop)
                    } else {
                        Modifier
                    },
                ),
        ) {
            AnimatedContent(
                targetState = showOnboarding,
                transitionSpec = {
                    val easing = CubicBezierEasing(0.2f, 0.85f, 0.2f, 1f)
                    if (targetState) {
                        (fadeIn(
                            animationSpec = tween(280, easing = easing),
                            initialAlpha = 0.75f,
                        ) + scaleIn(
                            animationSpec = tween(280, easing = easing),
                            initialScale = 0.985f,
                        )) togetherWith
                            (fadeOut(
                                animationSpec = tween(220, easing = easing),
                                targetAlpha = 0.92f,
                            ) + slideOutVertically(
                                animationSpec = tween(220, easing = easing),
                                targetOffsetY = { it / 24 },
                            ))
                    } else {
                        (fadeIn(
                            animationSpec = tween(360, easing = easing),
                            initialAlpha = 0.68f,
                        ) + slideInVertically(
                            animationSpec = tween(360, easing = easing),
                            initialOffsetY = { it / 18 },
                        ) + scaleIn(
                            animationSpec = tween(360, easing = easing),
                            initialScale = 0.992f,
                        )) togetherWith
                            (fadeOut(
                                animationSpec = tween(240, easing = easing),
                                targetAlpha = 0.86f,
                            ) + scaleOut(
                                animationSpec = tween(240, easing = easing),
                                targetScale = 1.008f,
                            ))
                    }.using(
                        SizeTransform(clip = false),
                    )
                },
                label = "onboarding_to_home_transition",
                modifier = Modifier.fillMaxSize(),
            ) { onboardingVisible ->
                if (onboardingVisible) {
                    OnboardingFlow(shellViewModel = shellViewModel)
                } else {
                    NavHost(
                        navController = navController,
                        startDestination = Routes.MAIN,
                        modifier = Modifier
                            .fillMaxSize()
                            .then(
                                if (rootBackdrop != null) {
                                    Modifier.layerBackdrop(rootBackdrop)
                                } else {
                                    Modifier
                                },
                            ),
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
                    composable(Routes.FILE_VIEWER) {
                        RemoteFileViewerScreen(
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
                        RemoteTerminalScreen(navController, shellViewModel)
                    }
                    composable(Routes.AI_ASSISTANT) {
                        if (
                            AgentEntryPointProvider.entryPoint.isEnabled &&
                            aiLicenseState.canUse &&
                            aiAuthorizedFeatureMode == AiAuthorizedFeatureMode.AiAssistant
                        ) {
                            AgentEntryPointProvider.entryPoint.Screen(navController, shellViewModel)
                        } else {
                            AiLicenseScreen(navController, shellViewModel)
                        }
                    }
                    composable(Routes.AI_LICENSE) {
                        AiLicenseScreen(
                            navController = navController,
                            shellViewModel = shellViewModel,
                        )
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
                }
            }
        }

        displayedUpdatePrompt?.let { prompt ->
            LiquidGlassUpdateDialog(
                prompt = prompt,
                visible = updateDialogVisible,
                onDismissRequest = { shellViewModel.dismissUpdatePrompt() },
                onConfirm = {
                    shellViewModel.startUpdateDownload(prompt)
                },
                onExitFinished = {
                    if (!updateDialogVisible) {
                        displayedUpdatePrompt = null
                    }
                },
                backdrop = catalogDialogBackdrop,
            )
        }

        if (displayedUpdateDownloadState.isVisible || updateProgressDialogVisible) {
            LiquidGlassUpdateProgressDialog(
                state = displayedUpdateDownloadState,
                visible = updateProgressDialogVisible,
                onExitFinished = {
                    if (!updateProgressDialogVisible) {
                        displayedUpdateDownloadState = displayedUpdateDownloadState.copy(isVisible = false)
                    }
                },
                backdrop = catalogDialogBackdrop,
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
                backdrop = catalogDialogBackdrop,
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
                backdrop = catalogDialogBackdrop,
            )
        }
    }
}

private fun launchUpdateInstaller(
    context: Context,
    shellViewModel: ShellViewModel,
    apkFilePath: String,
    defaultErrorMessage: String,
) {
    runCatching {
        UpdateInstaller.launchInstaller(context, apkFilePath)
    }.onSuccess {
        shellViewModel.onUpdateInstallerLaunched()
    }.onFailure { throwable ->
        shellViewModel.onUpdateInstallerLaunchFailed(
            throwable.message ?: defaultErrorMessage,
        )
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
    var pageAnimationJob by remember { mutableStateOf<Job?>(null) }
    var targetTabIndex by remember(rootTabItems.size) { mutableIntStateOf(0) }
    val navigationBarPadding = WindowInsets.navigationBars.asPaddingValues().calculateBottomPadding()
    val rootBottomPadding = 88.dp + navigationBarPadding
    val blurSupported = Build.VERSION.SDK_INT >= Build.VERSION_CODES.S_V2
    val pageBackground = ShellTheme.colors.pageBackground
    val selectedTabIndex = targetTabIndex
    val tabIndicatorPosition by remember(pagerState, rootTabItems.size) {
        derivedStateOf {
            (pagerState.currentPage + pagerState.currentPageOffsetFraction)
                .coerceIn(0f, rootTabItems.lastIndex.toFloat())
        }
    }
    val liquidGlassBackdrop = if (blurSupported) {
        rememberLayerBackdrop {
            drawRect(pageBackground)
            drawContent()
        }
    } else {
        null
    }

    LaunchedEffect(pagerState.isScrollInProgress, pagerState.targetPage, pagerState.settledPage, rootTabItems.size) {
        targetTabIndex = if (pagerState.isScrollInProgress) {
            pagerState.targetPage
        } else {
            pagerState.settledPage
        }.coerceIn(0, rootTabItems.lastIndex)
    }

    Box(modifier = Modifier.fillMaxSize()) {
        HorizontalPager(
            state = pagerState,
            beyondViewportPageCount = rootTabItems.lastIndex,
            overscrollEffect = null,
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
                    onRestartOnboarding = { shellViewModel.restartOnboarding() },
                )
                2 -> AboutScreen(
                    showBackButton = false,
                    bottomContentPadding = rootBottomPadding,
                    onSecretUnlock = { navController.navigate(Routes.AI_LICENSE) },
                )
            }
        }

        LiquidGlassBottomBar(
            items = rootTabItems,
            selectedIndex = selectedTabIndex,
            indicatorPosition = tabIndicatorPosition,
            onSelectedIndexChange = { index ->
                val coercedIndex = index.coerceIn(0, rootTabItems.lastIndex)
                if (coercedIndex == targetTabIndex && pageAnimationJob?.isActive == true) {
                    return@LiquidGlassBottomBar
                }
                targetTabIndex = coercedIndex
                if (coercedIndex == pagerState.settledPage && !pagerState.isScrollInProgress) {
                    return@LiquidGlassBottomBar
                }
                pageAnimationJob?.cancel()
                pageAnimationJob = scope.launch {
                    if (coercedIndex == pagerState.settledPage && !pagerState.isScrollInProgress) {
                        return@launch
                    }
                    val currentPosition = pagerState.currentPage + pagerState.currentPageOffsetFraction
                    val pageDistance = abs(coercedIndex - currentPosition)
                    pagerState.animateScrollToPage(
                        page = coercedIndex,
                        animationSpec = tween(
                            durationMillis = (240 + pageDistance * 80).toInt().coerceIn(220, 420),
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

