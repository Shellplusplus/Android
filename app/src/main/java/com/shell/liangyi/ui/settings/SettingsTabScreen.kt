package com.shell.liangyi.ui.settings

import android.widget.Toast
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellRootTabScaffold
import com.shell.liangyi.ui.theme.ShellThemeMode
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Switch
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.preference.RadioButtonLocation
import top.yukonga.miuix.kmp.preference.RadioButtonPreference
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

@Composable
fun SettingsTabScreen(
    shellViewModel: ShellViewModel,
    bottomContentPadding: Dp = 0.dp,
    previewMode: Boolean = false,
    showRestartOnboardingEntry: Boolean = true,
    onRestartOnboarding: (() -> Unit)? = null,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val context = LocalContext.current
    val skipOptionalUpdatePrompts by shellViewModel.skipOptionalUpdatePrompts.collectAsState()
    val skipOptionalUpdateAvailable by shellViewModel.skipOptionalUpdateAvailable.collectAsState()
    val skipOptionalUpdateHint by shellViewModel.skipOptionalUpdateHint.collectAsState()
    val themeMode by shellViewModel.themeMode.collectAsState()
    val effectiveSkipOptionalUpdateAvailable = previewMode || skipOptionalUpdateAvailable
    var previewSkipOptionalUpdatePrompts by remember(previewMode, skipOptionalUpdatePrompts) {
        mutableStateOf(skipOptionalUpdatePrompts)
    }
    var previewThemeMode by remember(previewMode, themeMode) {
        mutableStateOf(themeMode)
    }
    val effectiveSkipOptionalUpdatePrompts = if (previewMode) {
        previewSkipOptionalUpdatePrompts
    } else {
        skipOptionalUpdatePrompts
    }
    val effectiveThemeMode = if (previewMode) previewThemeMode else themeMode

    ShellRootTabScaffold(title = stringResource(R.string.settings)) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
        ) {
            Spacer(modifier = Modifier.height(14.dp))
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface,
                ),
                cornerRadius = 15.dp,
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 14.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    Text(
                        text = stringResource(R.string.app_theme_title),
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Medium,
                        color = colors.onSurface,
                    )
                    Text(
                        text = stringResource(R.string.app_theme_summary),
                        fontSize = 12.sp,
                        color = shellColors.secondaryText,
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    ThemeModeOption(
                        title = stringResource(R.string.app_theme_follow_system),
                        summary = stringResource(R.string.app_theme_follow_system_summary),
                        selected = effectiveThemeMode == ShellThemeMode.FOLLOW_SYSTEM,
                        onClick = {
                            if (previewMode) {
                                previewThemeMode = ShellThemeMode.FOLLOW_SYSTEM
                                Toast.makeText(
                                    context,
                                    context.getString(R.string.preview_mode_setting_message),
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else {
                                shellViewModel.setThemeMode(ShellThemeMode.FOLLOW_SYSTEM)
                            }
                        },
                    )
                    ThemeModeOption(
                        title = stringResource(R.string.app_theme_light),
                        summary = stringResource(R.string.app_theme_light_summary),
                        selected = effectiveThemeMode == ShellThemeMode.LIGHT,
                        onClick = {
                            if (previewMode) {
                                previewThemeMode = ShellThemeMode.LIGHT
                                Toast.makeText(
                                    context,
                                    context.getString(R.string.preview_mode_setting_message),
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else {
                                shellViewModel.setThemeMode(ShellThemeMode.LIGHT)
                            }
                        },
                    )
                    ThemeModeOption(
                        title = stringResource(R.string.app_theme_dark),
                        summary = stringResource(R.string.app_theme_dark_summary),
                        selected = effectiveThemeMode == ShellThemeMode.DARK,
                        onClick = {
                            if (previewMode) {
                                previewThemeMode = ShellThemeMode.DARK
                                Toast.makeText(
                                    context,
                                    context.getString(R.string.preview_mode_setting_message),
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else {
                                shellViewModel.setThemeMode(ShellThemeMode.DARK)
                            }
                        },
                    )
                }
            }
            Spacer(modifier = Modifier.height(10.dp))
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface,
                ),
                cornerRadius = 15.dp,
                onClick = {
                    if (previewMode) {
                        previewSkipOptionalUpdatePrompts = !effectiveSkipOptionalUpdatePrompts
                        Toast.makeText(
                            context,
                            context.getString(R.string.preview_mode_setting_message),
                            Toast.LENGTH_SHORT,
                        ).show()
                    } else if (effectiveSkipOptionalUpdateAvailable) {
                        shellViewModel.setSkipOptionalUpdatePrompts(!skipOptionalUpdatePrompts)
                    } else {
                        shellViewModel.showSkipOptionalUpdateInfoDialog()
                    }
                },
                showIndication = true,
                pressFeedbackType = PressFeedbackType.Sink,
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 14.dp),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Column(
                        modifier = Modifier
                            .weight(1f)
                            .padding(end = 10.dp),
                    ) {
                        Text(
                            text = stringResource(R.string.skip_optional_updates),
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Medium,
                            color = if (effectiveSkipOptionalUpdateAvailable) {
                                colors.onSurface
                            } else {
                                colors.onSurface.copy(alpha = 0.62f)
                            },
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = skipOptionalUpdateHint,
                            fontSize = 12.sp,
                            color = if (effectiveSkipOptionalUpdateAvailable) {
                                shellColors.secondaryText
                            } else {
                                shellColors.secondaryText.copy(alpha = 0.82f)
                            },
                        )
                    }
                    Switch(
                        checked = effectiveSkipOptionalUpdatePrompts,
                        enabled = effectiveSkipOptionalUpdateAvailable,
                        onCheckedChange = { checked ->
                            if (previewMode) {
                                previewSkipOptionalUpdatePrompts = checked
                                Toast.makeText(
                                    context,
                                    context.getString(R.string.preview_mode_setting_message),
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else if (effectiveSkipOptionalUpdateAvailable) {
                                shellViewModel.setSkipOptionalUpdatePrompts(checked)
                            }
                        },
                    )
                }
            }
            Spacer(modifier = Modifier.height(10.dp))
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface,
                ),
                cornerRadius = 15.dp,
                onClick = {
                    if (previewMode) {
                        Toast.makeText(
                            context,
                            context.getString(R.string.preview_mode_setting_message),
                            Toast.LENGTH_SHORT,
                        ).show()
                    } else {
                        shellViewModel.checkForUpdates(manual = true)
                    }
                },
                showIndication = true,
                pressFeedbackType = PressFeedbackType.Sink,
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 16.dp),
                    contentAlignment = Alignment.CenterStart,
                ) {
                    Column {
                        Text(
                            text = stringResource(R.string.check_updates),
                            fontSize = 16.sp,
                            fontWeight = FontWeight.Medium,
                            color = colors.onSurface,
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = stringResource(R.string.check_updates_summary),
                            fontSize = 12.sp,
                            color = shellColors.secondaryText,
                        )
                    }
                }
            }
            if (showRestartOnboardingEntry) {
                Spacer(modifier = Modifier.height(10.dp))
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 11.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface,
                    ),
                    cornerRadius = 15.dp,
                    onClick = {
                        if (previewMode) {
                            Toast.makeText(
                                context,
                                context.getString(R.string.preview_mode_setting_message),
                                Toast.LENGTH_SHORT,
                            ).show()
                        } else {
                            onRestartOnboarding?.invoke()
                        }
                    },
                    showIndication = true,
                    pressFeedbackType = PressFeedbackType.Sink,
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 16.dp),
                        contentAlignment = Alignment.CenterStart,
                    ) {
                        Column {
                            Text(
                                text = stringResource(R.string.restart_onboarding),
                                fontSize = 16.sp,
                                fontWeight = FontWeight.Medium,
                                color = colors.onSurface,
                            )
                            Spacer(modifier = Modifier.height(2.dp))
                            Text(
                                text = stringResource(R.string.restart_onboarding_summary),
                                fontSize = 12.sp,
                                color = shellColors.secondaryText,
                            )
                        }
                    }
                }
            }
            Spacer(modifier = Modifier.height(bottomContentPadding))
        }
    }
}

@Composable
private fun ThemeModeOption(
    title: String,
    summary: String,
    selected: Boolean,
    onClick: () -> Unit,
) {
    RadioButtonPreference(
        title = title,
        selected = selected,
        onClick = onClick,
        summary = summary,
        radioButtonLocation = RadioButtonLocation.End,
    )
}
