package com.shell.liangyi.feature

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import com.shell.liangyi.ui.ShellViewModel

/**
 * 手环 AI agent 助手的统一入口。
 * AI 实现随单 APK 一起编译，但能否进入和执行 AI 功能必须由签名授权状态决定。
 */
interface AgentEntryPoint {
    val isEnabled: Boolean

    @Composable
    fun Screen(navController: NavHostController, shellViewModel: ShellViewModel)
}
