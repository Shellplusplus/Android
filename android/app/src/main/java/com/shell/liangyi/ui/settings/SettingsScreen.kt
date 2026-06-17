package com.shell.liangyi.ui.settings

import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Warning
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.foundation.layout.Column
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.shell.liangyi.ui.components.IOSNavRow
import com.shell.liangyi.ui.components.IOSScaffold
import com.shell.liangyi.ui.components.IOSToggleRow
import com.shell.liangyi.ui.components.InsetSection
import com.shell.liangyi.ui.components.RowDivider
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel

@Composable
fun SettingsScreen(
    viewModel: ScreenshotViewModel = viewModel(),
    onBack: () -> Unit,
    onOpenAbout: () -> Unit,
    onOpenDebugLog: () -> Unit
) {
    val debugEnabled = viewModel.debugLogEnabled

    IOSScaffold(title = "设置", onBack = onBack) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
        ) {
            InsetSection(
                header = "调试",
                footer = "开启后会记录与手表的通信往来，便于排查连接异常。关闭则不影响正常使用。"
            ) {
                IOSToggleRow(
                    title = "调试日志",
                    checked = debugEnabled,
                    onCheckedChange = { viewModel.updateDebugLogEnabled(it) },
                    icon = Icons.Filled.Warning,
                    iconBg = Color(0xFFFF9F0A)
                )
                if (debugEnabled) {
                    RowDivider(insetStart = 57.dp)
                    IOSNavRow(
                        title = "查看通信日志",
                        onClick = onOpenDebugLog
                    )
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            InsetSection {
                IOSNavRow(
                    title = "关于 Shell++",
                    icon = Icons.Filled.Info,
                    iconBg = Color(0xFF007AFF),
                    value = "Beta 1",
                    onClick = onOpenAbout
                )
            }
        }
    }
}
