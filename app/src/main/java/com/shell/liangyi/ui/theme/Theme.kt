package com.shell.liangyi.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.theme.darkColorScheme
import top.yukonga.miuix.kmp.theme.lightColorScheme

@Composable
fun ShellPlusTheme(content: @Composable () -> Unit) {
    val isDarkTheme = isSystemInDarkTheme()
    val colors = remember(isDarkTheme) {
        if (isDarkTheme) darkColorScheme() else lightColorScheme()
    }
    val view = LocalView.current
    if (!view.isInEditMode) {
        val window = (view.context as Activity).window
        window.statusBarColor = colors.background.toArgb()
        window.navigationBarColor = colors.background.toArgb()
        window.isNavigationBarContrastEnforced = false
        WindowCompat.getInsetsController(window, view).apply {
            isAppearanceLightStatusBars = !isDarkTheme
            isAppearanceLightNavigationBars = !isDarkTheme
        }
    }
    MiuixTheme(colors = colors) { content() }
}

data class IOSColors(
    val groupedBackground: Color,
    val cardBackground: Color,
    val label: Color,
    val secondaryLabel: Color,
    val tertiaryLabel: Color,
    val separator: Color,
    val accent: Color,
    val green: Color,
    val red: Color,
    val isDark: Boolean
)

val LocalIOSColors = staticCompositionLocalOf {
    IOSColors(
        groupedBackground = Color(0xFF0D0D0D),
        cardBackground = Color(0xFF1A1A1A),
        label = Color.White,
        secondaryLabel = Color(0xFFB0B0B0),
        tertiaryLabel = Color(0xFF6E6E6E),
        separator = Color(0xFF2E2E2E),
        accent = Color(0xFF3482FF),
        green = Color(0xFF34C759),
        red = Color(0xFFFF453A),
        isDark = true
    )
}
