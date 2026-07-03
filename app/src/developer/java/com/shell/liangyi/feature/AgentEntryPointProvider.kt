package com.shell.liangyi.feature

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.agent.AgentChatScreen

/** developer flavor：真实的 agent 聊天界面。 */
object AgentEntryPointProvider {
    val entryPoint: AgentEntryPoint = object : AgentEntryPoint {
        override val isEnabled: Boolean = true

        @Composable
        override fun Screen(navController: NavHostController, shellViewModel: ShellViewModel) {
            AgentChatScreen(navController = navController, shellViewModel = shellViewModel)
        }
    }
}
