package com.shell.liangyi.ui.settings

import android.content.Intent
import android.net.Uri
import android.widget.Toast
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.shell.liangyi.R
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.theme.ShellThemeMode
import top.yukonga.miuix.kmp.basic.BasicComponent
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Scaffold
import top.yukonga.miuix.kmp.basic.SmallTitle
import top.yukonga.miuix.kmp.basic.Switch
import top.yukonga.miuix.kmp.basic.TopAppBar
import top.yukonga.miuix.kmp.basic.rememberTopAppBarState
import top.yukonga.miuix.kmp.preference.OverlayDropdownPreference
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.MiuixPopupUtils
import top.yukonga.miuix.kmp.utils.overScrollVertical
import top.yukonga.miuix.kmp.utils.scrollEndHaptic

@Composable
fun SettingsTabScreen(
    shellViewModel: ShellViewModel,
    bottomContentPadding: Dp = 0.dp,
    previewMode: Boolean = false,
    showRestartOnboardingEntry: Boolean = true,
    onRestartOnboarding: (() -> Unit)? = null,
) {
    val context = LocalContext.current
    val qqGroupUrl = "https://qm.qq.com/q/OopppLfV28"
    val previewModeSettingMessage = stringResource(R.string.preview_mode_setting_message)

    val skipOptionalUpdatePrompts by shellViewModel.skipOptionalUpdatePrompts.collectAsStateWithLifecycle()
    val skipOptionalUpdateAvailable by shellViewModel.skipOptionalUpdateAvailable.collectAsStateWithLifecycle()
    val skipOptionalUpdateHint by shellViewModel.skipOptionalUpdateHint.collectAsStateWithLifecycle()
    val themeMode by shellViewModel.themeMode.collectAsStateWithLifecycle()
    val autoLaunchWearApp by shellViewModel.autoLaunchWearApp.collectAsStateWithLifecycle()

    val effectiveSkipOptionalUpdateAvailable = previewMode || skipOptionalUpdateAvailable

    var previewSkipOptionalUpdatePrompts by remember(previewMode, skipOptionalUpdatePrompts) {
        mutableStateOf(skipOptionalUpdatePrompts)
    }
    var previewThemeMode by remember(previewMode, themeMode) {
        mutableStateOf(themeMode)
    }
    var previewAutoLaunchWearApp by remember(previewMode, autoLaunchWearApp) {
        mutableStateOf(autoLaunchWearApp)
    }

    val effectiveSkipOptionalUpdatePrompts = if (previewMode) {
        previewSkipOptionalUpdatePrompts
    } else {
        skipOptionalUpdatePrompts
    }
    val effectiveThemeMode = if (previewMode) {
        previewThemeMode
    } else {
        themeMode
    }
    val effectiveAutoLaunchWearApp = if (previewMode) {
        previewAutoLaunchWearApp
    } else {
        autoLaunchWearApp
    }

    val themeItems = listOf(
        stringResource(R.string.app_theme_follow_system),
        stringResource(R.string.app_theme_light),
        stringResource(R.string.app_theme_dark),
    )
    val themeIndex = when (effectiveThemeMode) {
        ShellThemeMode.FOLLOW_SYSTEM -> 0
        ShellThemeMode.LIGHT -> 1
        ShellThemeMode.DARK -> 2
    }

    fun showPreviewToast() {
        Toast.makeText(context, previewModeSettingMessage, Toast.LENGTH_SHORT).show()
    }

    fun openUrl(url: String, failureMessage: String) {
        runCatching {
            context.startActivity(Intent(Intent.ACTION_VIEW, Uri.parse(url)))
        }.onFailure {
            Toast.makeText(context, failureMessage, Toast.LENGTH_SHORT).show()
        }
    }

    val scrollBehavior = MiuixScrollBehavior(rememberTopAppBarState())

    Scaffold(
        topBar = {
            TopAppBar(
                title = stringResource(R.string.settings),
                largeTitle = stringResource(R.string.settings),
                scrollBehavior = scrollBehavior,
            )
        },
        popupHost = { MiuixPopupUtils.Companion.MiuixPopupHost() },
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .overScrollVertical()
                .scrollEndHaptic()
                .nestedScroll(scrollBehavior.nestedScrollConnection),
            contentPadding = PaddingValues(
                top = paddingValues.calculateTopPadding(),
                bottom = bottomContentPadding + 24.dp,
            ),
        ) {
            item {
                SmallTitle(
                    text = stringResource(R.string.settings_section_appearance),
                    modifier = Modifier.padding(top = 12.dp),
                )
                Card(
                    modifier = Modifier.padding(horizontal = 12.dp),
                    insideMargin = PaddingValues(0.dp),
                ) {
                    OverlayDropdownPreference(
                        title = stringResource(R.string.app_theme_title),
                        summary = stringResource(R.string.app_theme_summary),
                        items = themeItems,
                        selectedIndex = themeIndex,
                        renderInRootScaffold = false,
                        onSelectedIndexChange = { index ->
                            val nextMode = when (index) {
                                1 -> ShellThemeMode.LIGHT
                                2 -> ShellThemeMode.DARK
                                else -> ShellThemeMode.FOLLOW_SYSTEM
                            }
                            if (previewMode) {
                                previewThemeMode = nextMode
                                showPreviewToast()
                            } else {
                                shellViewModel.setThemeMode(nextMode)
                            }
                        },
                    )
                }
            }

            item {
                SmallTitle(
                    text = stringResource(R.string.settings_section_connection),
                    modifier = Modifier.padding(top = 12.dp),
                )
                Card(
                    modifier = Modifier.padding(horizontal = 12.dp),
                    insideMargin = PaddingValues(0.dp),
                ) {
                    BasicComponent(
                        title = stringResource(R.string.auto_launch_wear_app_title),
                        summary = stringResource(R.string.auto_launch_wear_app_summary),
                        endActions = {
                            Switch(
                                checked = effectiveAutoLaunchWearApp,
                                onCheckedChange = { checked ->
                                    if (previewMode) {
                                        previewAutoLaunchWearApp = checked
                                        showPreviewToast()
                                    } else {
                                        shellViewModel.setAutoLaunchWearApp(checked)
                                    }
                                },
                            )
                        },
                    )
                }
            }

            item {
                SmallTitle(
                    text = stringResource(R.string.settings_section_updates),
                    modifier = Modifier.padding(top = 12.dp),
                )
                Card(
                    modifier = Modifier.padding(horizontal = 12.dp),
                    insideMargin = PaddingValues(0.dp),
                ) {
                    BasicComponent(
                        title = stringResource(R.string.skip_optional_updates),
                        summary = skipOptionalUpdateHint,
                        endActions = {
                            Switch(
                                checked = effectiveSkipOptionalUpdatePrompts,
                                enabled = effectiveSkipOptionalUpdateAvailable,
                                onCheckedChange = { checked ->
                                    if (previewMode) {
                                        previewSkipOptionalUpdatePrompts = checked
                                        showPreviewToast()
                                    } else if (effectiveSkipOptionalUpdateAvailable) {
                                        shellViewModel.setSkipOptionalUpdatePrompts(checked)
                                    }
                                },
                            )
                        },
                        onClick = {
                            when {
                                previewMode -> {
                                    previewSkipOptionalUpdatePrompts = !effectiveSkipOptionalUpdatePrompts
                                    showPreviewToast()
                                }

                                effectiveSkipOptionalUpdateAvailable -> {
                                    shellViewModel.setSkipOptionalUpdatePrompts(!skipOptionalUpdatePrompts)
                                }

                                else -> {
                                    shellViewModel.showSkipOptionalUpdateInfoDialog()
                                }
                            }
                        },
                    )
                    BasicComponent(
                        title = stringResource(R.string.check_updates),
                        summary = stringResource(R.string.check_updates_summary),
                        endActions = {
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                                contentDescription = null,
                                tint = MiuixTheme.colorScheme.onSurfaceVariantActions,
                            )
                        },
                        onClick = {
                            if (previewMode) {
                                showPreviewToast()
                            } else {
                                shellViewModel.checkForUpdates(manual = true)
                            }
                        },
                    )
                }
            }

            item {
                SmallTitle(
                    text = stringResource(R.string.settings_section_guidance),
                    modifier = Modifier.padding(top = 12.dp),
                )
                Card(
                    modifier = Modifier.padding(horizontal = 12.dp),
                    insideMargin = PaddingValues(0.dp),
                ) {
                    BasicComponent(
                        title = stringResource(R.string.join_qq_group),
                        summary = stringResource(R.string.join_qq_group_summary),
                        endActions = {
                            Icon(
                                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                                contentDescription = null,
                                tint = MiuixTheme.colorScheme.onSurfaceVariantActions,
                            )
                        },
                        onClick = {
                            if (previewMode) {
                                showPreviewToast()
                            } else {
                                openUrl(qqGroupUrl, context.getString(R.string.join_qq_group_failed))
                            }
                        },
                    )
                    if (showRestartOnboardingEntry) {
                        BasicComponent(
                            title = stringResource(R.string.restart_onboarding),
                            summary = stringResource(R.string.restart_onboarding_summary),
                            endActions = {
                                Icon(
                                    imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                                    contentDescription = null,
                                    tint = MiuixTheme.colorScheme.onSurfaceVariantActions,
                                )
                            },
                            onClick = {
                                if (previewMode) {
                                    showPreviewToast()
                                } else {
                                    onRestartOnboarding?.invoke()
                                }
                            },
                        )
                    }
                }
            }
        }
    }
}
