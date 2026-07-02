package com.shell.liangyi.feature

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import com.shell.liangyi.ui.ShellViewModel

/** standard flavor：agent 助手完全不存在，Screen 不渲染任何内容。 */
object AgentEntryPointProvider {
    val entryPoint: AgentEntryPoint = object : AgentEntryPoint {
        override val isEnabled: Boolean = false

        @Composable
        override fun Screen(navController: NavHostController, shellViewModel: ShellViewModel) {}
    }
}
