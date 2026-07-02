package com.shell.liangyi.ui.settings

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellRootTabScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Switch
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

@Composable
fun SettingsTabScreen(
    shellViewModel: ShellViewModel,
    bottomContentPadding: Dp = 0.dp,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val skipOptionalUpdatePrompts by shellViewModel.skipOptionalUpdatePrompts.collectAsState()
    val skipOptionalUpdateAvailable by shellViewModel.skipOptionalUpdateAvailable.collectAsState()
    val skipOptionalUpdateHint by shellViewModel.skipOptionalUpdateHint.collectAsState()

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
                onClick = {
                    if (skipOptionalUpdateAvailable) {
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
                            color = if (skipOptionalUpdateAvailable) {
                                colors.onSurface
                            } else {
                                colors.onSurface.copy(alpha = 0.62f)
                            },
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = skipOptionalUpdateHint,
                            fontSize = 12.sp,
                            color = if (skipOptionalUpdateAvailable) {
                                shellColors.secondaryText
                            } else {
                                shellColors.secondaryText.copy(alpha = 0.82f)
                            },
                        )
                    }
                    Switch(
                        checked = skipOptionalUpdatePrompts,
                        enabled = skipOptionalUpdateAvailable,
                        onCheckedChange = { checked ->
                            if (skipOptionalUpdateAvailable) {
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
                onClick = { shellViewModel.checkForUpdates(manual = true) },
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
            Spacer(modifier = Modifier.height(bottomContentPadding))
        }
    }
}
