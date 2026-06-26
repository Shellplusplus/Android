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
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import com.shell.liangyi.ui.index.IndexScreen
import com.shell.liangyi.ui.bluetooth.BluetoothScreen
import com.shell.liangyi.ui.screenshot.ScreenshotDetailScreen
import com.shell.liangyi.ui.about.AboutScreen

private enum class Screen {
    INDEX, BLUETOOTH, FETCH, TERMINAL, SCREENSHOT_DETAIL, ABOUT
}

@Composable
fun ShellScreen() {
    var currentScreen by remember { mutableStateOf(Screen.INDEX) }
    var screenshotNumber by remember { mutableStateOf("9") }

    when (currentScreen) {
        Screen.INDEX -> IndexScreen(
            onNavigateToBluetooth = { currentScreen = Screen.BLUETOOTH },
            onNavigateToFetch = { currentScreen = Screen.FETCH },
            onNavigateToTerminal = { currentScreen = Screen.TERMINAL },
            onNavigateToAbout = { currentScreen = Screen.ABOUT }
        )
        Screen.BLUETOOTH -> BluetoothScreen(
            onBack = { currentScreen = Screen.INDEX },
            onGetScreenshot = { /* TODO */ },
            onOpenDetail = { num ->
                screenshotNumber = num
                currentScreen = Screen.SCREENSHOT_DETAIL
            }
        )
        Screen.FETCH -> PlaceholderScreen("截图同步（局域网）", "WiFi 传输功能开发中") { currentScreen = Screen.INDEX }
        Screen.TERMINAL -> PlaceholderScreen("远程终端", "远程终端功能开发中") { currentScreen = Screen.INDEX }
        Screen.SCREENSHOT_DETAIL -> ScreenshotDetailScreen(
            screenshotNumber = screenshotNumber,
            onBack = { currentScreen = Screen.BLUETOOTH },
            onSave = { /* TODO */ },
            onDelete = { /* TODO */ }
        )
        Screen.ABOUT -> AboutScreen(onBack = { currentScreen = Screen.INDEX })
    }
}

@Composable
private fun PlaceholderScreen(title: String, subtitle: String, onBack: () -> Unit) {
    val colors = MiuixTheme.colorScheme
    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(43.dp))
            Text(
                text = "←",
                modifier = Modifier.padding(start = 29.dp).clickable(onClick = onBack),
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
