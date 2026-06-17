package com.shell.liangyi

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.lifecycle.viewmodel.compose.viewModel
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.screenshot.ScreenshotScreen
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import com.shell.liangyi.ui.settings.DebugLogScreen
import com.shell.liangyi.ui.settings.SettingsScreen
import com.shell.liangyi.ui.theme.ShellPlusTheme

class MainActivity : ComponentActivity() {

    private lateinit var wearMessageCenter: WearMessageCenter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // 初始化消息中心（发现设备 -> 申请权限 -> 注册监听器）
        wearMessageCenter = WearMessageCenter.getInstance(this)
        wearMessageCenter.initialize()

        setContent {
            ShellPlusTheme {
                AppRoot()
            }
        }
    }

    override fun onResume() {
        super.onResume()
        // 界面可见时保活：重新检查设备连接并确保监听器注册
        wearMessageCenter.ensureConnection()
    }

    override fun onDestroy() {
        super.onDestroy()
        wearMessageCenter.destroy()
    }
}

private enum class Route { SCREENSHOTS, SETTINGS, ABOUT, DEBUG_LOG }

@Composable
private fun AppRoot() {
    // 共享同一个 ViewModel（Activity 作用域）
    val vm: ScreenshotViewModel = viewModel()
    var stack by remember { mutableStateOf(listOf(Route.SCREENSHOTS)) }

    fun push(route: Route) {
        stack = stack + route
    }

    fun pop() {
        if (stack.size > 1) stack = stack.dropLast(1)
    }

    BackHandler(enabled = stack.size > 1) { pop() }

    when (stack.last()) {
        Route.SCREENSHOTS -> ScreenshotScreen(
            viewModel = vm,
            onOpenSettings = { push(Route.SETTINGS) }
        )

        Route.SETTINGS -> SettingsScreen(
            viewModel = vm,
            onBack = { pop() },
            onOpenAbout = { push(Route.ABOUT) },
            onOpenDebugLog = { push(Route.DEBUG_LOG) }
        )

        Route.ABOUT -> AboutScreen(onBack = { pop() })

        Route.DEBUG_LOG -> DebugLogScreen(
            viewModel = vm,
            onBack = { pop() }
        )
    }
}
