package com.shell.liangyi.ui.theme

import android.app.Activity
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat
import top.yukonga.miuix.kmp.theme.ColorSchemeMode
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.theme.ThemeColorSpec
import top.yukonga.miuix.kmp.theme.ThemeController
import top.yukonga.miuix.kmp.theme.ThemePaletteStyle

@Composable
fun ShellPlusTheme(content: @Composable () -> Unit) {
    val controller = remember {
        ThemeController(
            colorSchemeMode = ColorSchemeMode.MonetSystem,
            paletteStyle = ThemePaletteStyle.TonalSpot,
            colorSpec = ThemeColorSpec.Spec2025
        )
    }
    val view = LocalView.current
    if (!view.isInEditMode) {
        val window = (view.context as Activity).window
        window.statusBarColor = Color(0xFF0D0D0D).toArgb()
        window.navigationBarColor = Color(0xFF0D0D0D).toArgb()
        WindowCompat.getInsetsController(window, view).apply {
            isAppearanceLightStatusBars = false
            isAppearanceLightNavigationBars = false
        }
    }
    MiuixTheme(controller = controller) { content() }
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
