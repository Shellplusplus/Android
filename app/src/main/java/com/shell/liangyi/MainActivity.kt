package com.shell.liangyi

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Image
import androidx.compose.material.icons.outlined.Settings
import androidx.compose.material.icons.outlined.Wifi
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.network.NetworkTransferScreen
import com.shell.liangyi.ui.screenshot.ScreenshotScreen
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import com.shell.liangyi.ui.settings.DebugLogScreen
import com.shell.liangyi.ui.settings.SettingsScreen
import com.shell.liangyi.ui.theme.ShellPlusTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.NavigationBar
import top.yukonga.miuix.kmp.basic.NavigationBarDisplayMode
import top.yukonga.miuix.kmp.basic.NavigationBarItem
import top.yukonga.miuix.kmp.theme.MiuixTheme

class MainActivity : ComponentActivity() {

    private lateinit var wearMessageCenter: WearMessageCenter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

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
        wearMessageCenter.ensureConnection()
    }

    override fun onDestroy() {
        super.onDestroy()
        wearMessageCenter.destroy()
    }
}

private enum class SubRoute { ABOUT, DEBUG_LOG }

@Composable
private fun AppRoot() {
    val vm: ScreenshotViewModel = viewModel()
    val colors = MiuixTheme.colorScheme

    val tabs = listOf("截图同步", "网络传输", "设置")
    var selectedTab by remember { mutableIntStateOf(0) }

    var subRoute by remember { mutableStateOf<SubRoute?>(null) }

    BackHandler(enabled = subRoute != null) { subRoute = null }

    Column(modifier = Modifier.fillMaxSize()) {
        Box(modifier = Modifier.weight(1f)) {
            if (subRoute == null) {
                when (selectedTab) {
                    0 -> ScreenshotScreen(
                        viewModel = vm
                    )
                    1 -> NetworkTransferScreen(
                        viewModel = vm,
                        onBack = { }
                    )
                    2 -> SettingsScreen(
                        viewModel = vm,
                        onBack = { },
                        onOpenAbout = { subRoute = SubRoute.ABOUT },
                        onOpenDebugLog = { subRoute = SubRoute.DEBUG_LOG }
                    )
                }
            } else {
                when (subRoute) {
                    SubRoute.ABOUT -> AboutScreen(onBack = { subRoute = null })
                    SubRoute.DEBUG_LOG -> DebugLogScreen(
                        viewModel = vm,
                        onBack = { subRoute = null }
                    )
                    null -> {}
                }
            }
        }

        if (subRoute == null) {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 12.dp),
                cornerRadius = 24.dp,
                colors = CardColors(
                    color = colors.surfaceContainer,
                    contentColor = colors.onSurface
                )
            ) {
                NavigationBar(
                    modifier = Modifier.fillMaxWidth(),
                    color = colors.surfaceContainer,
                    showDivider = false,
                    defaultWindowInsetsPadding = false,
                    mode = NavigationBarDisplayMode.IconAndText
                ) {
                    tabs.forEachIndexed { index, title ->
                        val icon = when (index) {
                            0 -> Icons.Outlined.Image
                            1 -> Icons.Outlined.Wifi
                            else -> Icons.Outlined.Settings
                        }
                        NavigationBarItem(
                            selected = selectedTab == index,
                            onClick = {
                                selectedTab = index
                            },
                            icon = icon,
                            label = title
                        )
                    }
                }
            }
        }
    }
}
