package com.shell.liangyi.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import com.shell.liangyi.ui.index.IndexScreen
import com.shell.liangyi.ui.bluetooth.BluetoothScreen
import com.shell.liangyi.ui.screenshot.ScreenshotDetailScreen
import com.shell.liangyi.ui.about.AboutScreen

object Routes {
    const val INDEX = "index"
    const val BLUETOOTH = "bluetooth"
    const val FETCH = "fetch"
    const val TERMINAL = "terminal"
    const val SCREENSHOT_DETAIL = "screenshot_detail/{number}"
    const val ABOUT = "about"

    fun screenshotDetail(number: String) = "screenshot_detail/$number"
}

@Composable
fun ShellScreen() {
    val navController = rememberNavController()
    // 使用 px 值而非 dp，与参考项目 getWindowSize().width 一致
    val density = LocalDensity.current
    val windowWidthPx = with(density) { 360.dp.toPx() }.toInt()

    MiuixTheme {
        NavHost(
            navController = navController,
            startDestination = Routes.INDEX,
            enterTransition = { AnimTools.enterTransition(windowWidthPx) },
            exitTransition = { AnimTools.exitTransition(windowWidthPx) },
            popEnterTransition = { AnimTools.popEnterTransition(windowWidthPx) },
            popExitTransition = { AnimTools.popExitTransition(windowWidthPx) }
        ) {
            composable(Routes.INDEX) {
                IndexScreen(navController)
            }
            composable(Routes.BLUETOOTH) {
                BluetoothScreen(navController)
            }
            composable(Routes.FETCH) {
                PlaceholderScreen("截图同步（局域网）", "WiFi 传输功能开发中", navController)
            }
            composable(Routes.TERMINAL) {
                PlaceholderScreen("远程终端", "远程终端功能开发中", navController)
            }
            composable(Routes.SCREENSHOT_DETAIL) { backStackEntry ->
                val number = backStackEntry.arguments?.getString("number") ?: "9"
                ScreenshotDetailScreen(number, navController)
            }
            composable(Routes.ABOUT) {
                AboutScreen(navController)
            }
        }
    }
}

@Composable
private fun PlaceholderScreen(title: String, subtitle: String, navController: NavHostController) {
    val colors = MiuixTheme.colorScheme
    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(43.dp))
            Text(
                text = "←",
                modifier = Modifier.padding(start = 29.dp).clickable { navController.popBackStack() },
                fontSize = 13.sp,
                color = colors.onSurface
            )
            Spacer(modifier = Modifier.height(21.dp))
            Text(
                text = title,
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 30.sp,
                fontWeight = FontWeight.Normal,
                color = colors.onSurface
            )
            Spacer(modifier = Modifier.height(13.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp)
                    .height(56.dp)
                    .clip(RoundedCornerShape(15.dp))
                    .background(colors.surface),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = subtitle,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    color = Color(0xFF9E9E9E)
                )
            }
        }
    }
}
