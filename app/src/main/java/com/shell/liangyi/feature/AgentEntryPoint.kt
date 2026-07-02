package com.shell.liangyi.feature

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import com.shell.liangyi.ui.ShellViewModel

/**
 * 手环 AI agent 助手的编译期可剥离入口。
 * 真实实现只存在于 developer flavor 的 source set 中；standard flavor
 * 下 [AgentEntryPointProvider] 解析到的是一个空实现，聊天界面/HTTP 客户端/
 * 命令桥接等代码在 standard 变体里根本不会被编译进去。
 */
interface AgentEntryPoint {
    val isEnabled: Boolean

    @Composable
    fun Screen(navController: NavHostController, shellViewModel: ShellViewModel)
}
