package com.shell.liangyi.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

/**
 * MIUIX / HyperOS 灵感设计 Token（手动实现，不引入外部库）。
 *
 * 圆角体系: Card 16dp, Button 8dp, Dialog 24dp, Input 12dp
 * 字体层级: title1 32sp Bold, title2 24sp Bold, title3 20sp Medium,
 *            headline 18sp Medium, body1 16sp, body2 14sp, footnote 13sp, caption 12sp
 */
object MiuixTokens {
    val CardCorner = 16
    val ButtonCorner = 8
    val DialogCorner = 24
    val InputCorner = 12
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

// 原 iOS 深色 → MIUIX 深色调
private val DarkColors = IOSColors(
    groupedBackground = Color(0xFF0D0D0D),
    cardBackground = Color(0xFF1A1A1A),
    label = Color(0xFFFFFFFF),
    secondaryLabel = Color(0xFFB0B0B0),
    tertiaryLabel = Color(0xFF6E6E6E),
    separator = Color(0xFF2E2E2E),
    accent = Color(0xFF3482FF),
    green = Color(0xFF34C759),
    red = Color(0xFFFF453A),
    isDark = true
)

// 原 iOS 浅色 → MIUIX 浅色调
private val LightColors = IOSColors(
    groupedBackground = Color(0xFFF5F5F5),
    cardBackground = Color(0xFFFFFFFF),
    label = Color(0xFF1C1C1E),
    secondaryLabel = Color(0xFF5C5C5E),
    tertiaryLabel = Color(0xFFAEAEB0),
    separator = Color(0xFFE0E0E0),
    accent = Color(0xFF3482FF),
    green = Color(0xFF34C759),
    red = Color(0xFFFF3B30),
    isDark = false
)

val LocalIOSColors = androidx.compose.runtime.staticCompositionLocalOf { DarkColors }

@Composable
fun ShellPlusTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val iosColors = if (darkTheme) DarkColors else LightColors

    val colorScheme = if (darkTheme) {
        darkColorScheme(
            primary = iosColors.accent,
            background = iosColors.groupedBackground,
            surface = iosColors.cardBackground,
            onPrimary = Color.White,
            onBackground = iosColors.label,
            onSurface = iosColors.label,
            outline = iosColors.separator,
            outlineVariant = iosColors.tertiaryLabel
        )
    } else {
        lightColorScheme(
            primary = iosColors.accent,
            background = iosColors.groupedBackground,
            surface = iosColors.cardBackground,
            onPrimary = Color.White,
            onBackground = iosColors.label,
            onSurface = iosColors.label,
            outline = iosColors.separator,
            outlineVariant = iosColors.tertiaryLabel
        )
    }

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = iosColors.groupedBackground.toArgb()
            window.navigationBarColor = iosColors.groupedBackground.toArgb()
            WindowCompat.getInsetsController(window, view).apply {
                isAppearanceLightStatusBars = !darkTheme
                isAppearanceLightNavigationBars = !darkTheme
            }
        }
    }

    CompositionLocalProvider(LocalIOSColors provides iosColors) {
        MaterialTheme(colorScheme = colorScheme, content = content)
    }
}
