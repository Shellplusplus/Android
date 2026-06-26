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

// Simple screen navigation
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
        Screen.FETCH -> PlaceholderScreen(
            title = "截图同步（局域网）",
            subtitle = "WiFi 传输功能开发中",
            onBack = { currentScreen = Screen.INDEX }
        )
        Screen.TERMINAL -> PlaceholderScreen(
            title = "远程终端",
            subtitle = "远程终端功能开发中",
            onBack = { currentScreen = Screen.INDEX }
        )
        Screen.SCREENSHOT_DETAIL -> ScreenshotDetailScreen(
            screenshotNumber = screenshotNumber,
            onBack = { currentScreen = Screen.BLUETOOTH },
            onSave = { /* TODO */ },
            onDelete = { /* TODO */ }
        )
        Screen.ABOUT -> AboutScreen(
            onBack = { currentScreen = Screen.INDEX }
        )
    }
}

@Composable
private fun PlaceholderScreen(title: String, subtitle: String, onBack: () -> Unit) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(128.dp))
            Text(
                text = "←",
                modifier = Modifier
                    .padding(start = 88.dp)
                    .clickable(onClick = onBack),
                fontSize = 38.sp,
                color = colors.onSurface
            )
            Spacer(modifier = Modifier.height(64.dp))
            Text(
                text = title,
                modifier = Modifier.padding(start = 79.dp),
                fontSize = 90.sp,
                fontWeight = FontWeight.Normal,
                color = colors.onSurface
            )
            Spacer(modifier = Modifier.height(40.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 34.dp)
                    .height(168.dp)
                    .clip(RoundedCornerShape(45.dp))
                    .background(colors.surface),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = subtitle,
                    fontSize = 48.sp,
                    fontWeight = FontWeight.Medium,
                    color = Color(0xFF9E9E9E)
                )
            }
        }
    }
}
