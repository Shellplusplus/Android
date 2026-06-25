package com.shell.liangyi.ui.settings

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.runtime.Composable
import androidx.lifecycle.viewmodel.compose.viewModel
import com.shell.liangyi.ui.components.ShellActionRow
import com.shell.liangyi.ui.components.ShellSectionCard
import com.shell.liangyi.ui.components.ShellSectionTitle
import com.shell.liangyi.ui.components.ShellSwitchRow
import com.shell.liangyi.ui.components.ShellTopLevelScaffold
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun SettingsScreen(
    viewModel: ScreenshotViewModel = viewModel(),
    onBack: () -> Unit,
    onOpenAbout: () -> Unit,
    onOpenDebugLog: () -> Unit
) {
    val debugEnabled = viewModel.debugLogEnabled

    ShellTopLevelScaffold(title = "设置") { paddingValues, scrollBehavior ->
        LazyColumn(
            modifier = androidx.compose.ui.Modifier
                .fillMaxSize()
                .nestedScroll(scrollBehavior.nestedScrollConnection),
            contentPadding = paddingValues
        ) {
            item {
                ShellSectionTitle("调试")
            }
            item {
                ShellSectionCard {
                    ShellSwitchRow(
                        title = "调试日志",
                        summary = "开启后记录与手表的通信往来，便于排查连接异常。",
                        checked = debugEnabled,
                        onCheckedChange = { viewModel.updateDebugLogEnabled(it) }
                    )
                }
            }
            if (debugEnabled) {
                item {
                    ShellSectionCard(onClick = onOpenDebugLog) {
                        ShellActionRow(
                            title = "查看通信日志",
                            summary = "支持一键复制全部日志并清空记录"
                        )
                    }
                }
            }

            item {
                ShellSectionTitle("关于")
            }
            item {
                ShellSectionCard(onClick = onOpenAbout) {
                    ShellActionRow(
                        title = "关于 Shell++",
                        summary = "版本信息与参与开发人员",
                        value = "Beta 1"
                    )
                }
            }

            item {
                ShellSectionTitle("说明")
            }
            item {
                ShellSectionCard {
                    ShellActionRow(
                        title = "当前界面风格",
                        summary = "已切换为参考 StatusBarLyric / Updater-KMP 的 MIUIX 页面结构。",
                        titleColor = MiuixTheme.colorScheme.onSurface,
                        summaryColor = MiuixTheme.colorScheme.onSurfaceVariantSummary
                    )
                }
            }
        }
    }
}
