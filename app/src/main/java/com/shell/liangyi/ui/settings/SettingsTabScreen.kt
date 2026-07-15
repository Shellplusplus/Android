package com.shell.liangyi.ui.settings

import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.shell.liangyi.R
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellRootTabScaffold
import com.shell.liangyi.ui.theme.ShellThemeMode
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Switch
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.preference.OverlayDropdownPreference
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
    val themeItems = listOf(
        stringResource(R.string.app_theme_follow_system),
        stringResource(R.string.app_theme_light),
        stringResource(R.string.app_theme_dark),
    )
    val previewModeSettingMessage = stringResource(R.string.preview_mode_setting_message)
    val skipOptionalUpdatePrompts by shellViewModel.skipOptionalUpdatePrompts.collectAsStateWithLifecycle()
    val skipOptionalUpdateAvailable by shellViewModel.skipOptionalUpdateAvailable.collectAsStateWithLifecycle()
    val skipOptionalUpdateHint by shellViewModel.skipOptionalUpdateHint.collectAsStateWithLifecycle()
    val themeMode by shellViewModel.themeMode.collectAsStateWithLifecycle()
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
    val themeLabel = when (effectiveThemeMode) {
        ShellThemeMode.FOLLOW_SYSTEM -> stringResource(R.string.app_theme_follow_system)
        ShellThemeMode.LIGHT -> stringResource(R.string.app_theme_light)
        ShellThemeMode.DARK -> stringResource(R.string.app_theme_dark)
    }
    val updateReminderLabel = if (effectiveSkipOptionalUpdatePrompts) {
        stringResource(R.string.settings_status_update_muted)
    } else {
        stringResource(R.string.settings_status_update_normal)
    }

    ShellRootTabScaffold(title = stringResource(R.string.settings)) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(top = 14.dp, bottom = bottomContentPadding + 18.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            item {
                SettingsOverviewCard(
                    themeLabel = themeLabel,
                    updateReminderLabel = updateReminderLabel,
                )
            }
            item {
                SettingsSectionHeader(
                    title = stringResource(R.string.settings_section_appearance),
                )
            }
            item {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 12.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface,
                    ),
                    cornerRadius = 18.dp,
                    insideMargin = PaddingValues(0.dp),
                ) {
                    OverlayDropdownPreference(
                        items = themeItems,
                        selectedIndex = when (effectiveThemeMode) {
                            ShellThemeMode.FOLLOW_SYSTEM -> 0
                            ShellThemeMode.LIGHT -> 1
                            ShellThemeMode.DARK -> 2
                        },
                        title = stringResource(R.string.app_theme_title),
                        summary = stringResource(R.string.app_theme_summary),
                        renderInRootScaffold = false,
                        onSelectedIndexChange = { index ->
                            val nextMode = when (index) {
                                1 -> ShellThemeMode.LIGHT
                                2 -> ShellThemeMode.DARK
                                else -> ShellThemeMode.FOLLOW_SYSTEM
                            }
                            if (previewMode) {
                                previewThemeMode = nextMode
                                Toast.makeText(
                                    context,
                                    previewModeSettingMessage,
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else {
                                shellViewModel.setThemeMode(nextMode)
                            }
                        },
                    )
                }
            }
            item {
                SettingsSectionHeader(
                    title = stringResource(R.string.settings_section_updates),
                )
            }
            item {
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 12.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface,
                    ),
                    cornerRadius = 18.dp,
                    insideMargin = PaddingValues(0.dp),
                ) {
                    SettingsSwitchRow(
                        title = stringResource(R.string.skip_optional_updates),
                        summary = skipOptionalUpdateHint,
                        checked = effectiveSkipOptionalUpdatePrompts,
                        enabled = effectiveSkipOptionalUpdateAvailable,
                        cornerRadius = 18.dp,
                        onClick = {
                            if (previewMode) {
                                previewSkipOptionalUpdatePrompts = !effectiveSkipOptionalUpdatePrompts
                                Toast.makeText(
                                    context,
                                    previewModeSettingMessage,
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else if (effectiveSkipOptionalUpdateAvailable) {
                                shellViewModel.setSkipOptionalUpdatePrompts(!skipOptionalUpdatePrompts)
                            } else {
                                shellViewModel.showSkipOptionalUpdateInfoDialog()
                            }
                        },
                        onCheckedChange = { checked ->
                            if (previewMode) {
                                previewSkipOptionalUpdatePrompts = checked
                                Toast.makeText(
                                    context,
                                    previewModeSettingMessage,
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else if (effectiveSkipOptionalUpdateAvailable) {
                                shellViewModel.setSkipOptionalUpdatePrompts(checked)
                            }
                        },
                    )
                    SettingsRowDivider()
                    SettingsActionRow(
                        title = stringResource(R.string.check_updates),
                        summary = stringResource(R.string.check_updates_summary),
                        cornerRadius = 18.dp,
                        onClick = {
                            if (previewMode) {
                                Toast.makeText(
                                    context,
                                    previewModeSettingMessage,
                                    Toast.LENGTH_SHORT,
                                ).show()
                            } else {
                                shellViewModel.checkForUpdates(manual = true)
                            }
                        },
                    )
                }
            }
            if (showRestartOnboardingEntry) {
                item {
                    SettingsSectionHeader(
                        title = stringResource(R.string.settings_section_guidance),
                    )
                }
                item {
                    Card(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 12.dp),
                        colors = CardColors(
                            color = shellColors.cardBackground,
                            contentColor = colors.onSurface,
                        ),
                        cornerRadius = 18.dp,
                        insideMargin = PaddingValues(0.dp),
                    ) {
                        SettingsActionRow(
                            title = stringResource(R.string.restart_onboarding),
                            summary = stringResource(R.string.restart_onboarding_summary),
                            cornerRadius = 18.dp,
                            onClick = {
                                if (previewMode) {
                                    Toast.makeText(
                                        context,
                                        previewModeSettingMessage,
                                        Toast.LENGTH_SHORT,
                                    ).show()
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

@Composable
private fun SettingsOverviewCard(
    themeLabel: String,
    updateReminderLabel: String,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp),
        colors = CardColors(
            color = shellColors.primaryAction.copy(alpha = if (ShellTheme.isDarkTheme) 0.22f else 0.12f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 16.dp),
        ) {
            Text(
                text = stringResource(R.string.settings_overview_title),
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = stringResource(R.string.settings_overview_summary),
                fontSize = 12.sp,
                color = shellColors.secondaryText,
            )
            Spacer(modifier = Modifier.height(14.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                SettingsStatusChip(
                    modifier = Modifier.weight(1f),
                    label = stringResource(R.string.settings_status_theme),
                    value = themeLabel,
                )
                SettingsStatusChip(
                    modifier = Modifier.weight(1f),
                    label = stringResource(R.string.settings_status_updates),
                    value = updateReminderLabel,
                )
            }
        }
    }
}

@Composable
private fun SettingsStatusChip(
    label: String,
    value: String,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Column(
        modifier = modifier
            .background(
                color = shellColors.cardBackground.copy(alpha = if (ShellTheme.isDarkTheme) 0.92f else 0.86f),
                shape = RoundedCornerShape(16.dp),
            )
            .padding(horizontal = 12.dp, vertical = 10.dp),
    ) {
        Text(
            text = label,
            fontSize = 10.sp,
            color = shellColors.mutedText,
        )
        Spacer(modifier = Modifier.height(3.dp))
        Text(
            text = value,
            fontSize = 13.sp,
            fontWeight = FontWeight.Medium,
            color = colors.onSurface,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

@Composable
private fun SettingsSectionHeader(
    title: String,
) {
    val shellColors = ShellTheme.colors

    Text(
        text = title,
        modifier = Modifier.padding(start = 28.dp),
        fontSize = 13.sp,
        fontWeight = FontWeight.SemiBold,
        color = shellColors.mutedText,
    )
}

@Composable
private fun SettingsSwitchRow(
    title: String,
    summary: String,
    checked: Boolean,
    enabled: Boolean,
    cornerRadius: Dp = 0.dp,
    onClick: () -> Unit,
    onCheckedChange: (Boolean) -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .background(shellColors.cardBackground),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = cornerRadius,
        onClick = onClick,
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
                    .padding(end = 12.dp),
            ) {
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    color = if (enabled) colors.onSurface else colors.onSurface.copy(alpha = 0.62f),
                )
                Spacer(modifier = Modifier.height(3.dp))
                Text(
                    text = summary,
                    fontSize = 12.sp,
                    color = if (enabled) {
                        shellColors.secondaryText
                    } else {
                        shellColors.secondaryText.copy(alpha = 0.82f)
                    },
                )
            }
            Switch(
                checked = checked,
                enabled = enabled,
                onCheckedChange = onCheckedChange,
            )
        }
    }
}

@Composable
private fun SettingsActionRow(
    title: String,
    summary: String,
    cornerRadius: Dp = 0.dp,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = cornerRadius,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 15.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Column(
                modifier = Modifier
                    .weight(1f)
                    .padding(end = 12.dp),
            ) {
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurface,
                )
                Spacer(modifier = Modifier.height(3.dp))
                Text(
                    text = summary,
                    fontSize = 12.sp,
                    color = shellColors.secondaryText,
                )
            }
        }
    }
}

@Composable
private fun SettingsRowDivider() {
    val colors = MiuixTheme.colorScheme

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp)
            .height(1.dp)
            .background(colors.onSurface.copy(alpha = 0.06f)),
    )
}
