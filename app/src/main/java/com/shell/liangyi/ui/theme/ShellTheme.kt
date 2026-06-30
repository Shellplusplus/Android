package com.shell.liangyi.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Immutable
import androidx.compose.runtime.ReadOnlyComposable
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat
import top.yukonga.miuix.kmp.theme.Colors
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.theme.darkColorScheme
import top.yukonga.miuix.kmp.theme.lightColorScheme

@Immutable
data class ShellColors(
    val pageBackground: Color,
    val cardBackground: Color,
    val mutedText: Color,
    val secondaryText: Color,
    val previewBackground: Color,
    val primaryAction: Color,
    val destructiveAction: Color,
    val disabledAction: Color,
    val success: Color,
    val warning: Color,
    val danger: Color,
)

private val LocalShellColors = staticCompositionLocalOf {
    ShellColors(
        pageBackground = Color(0xFFF7F7F7),
        cardBackground = Color.White,
        mutedText = Color(0x66000000),
        secondaryText = Color(0x80000000),
        previewBackground = Color(0xFF3D3D3D),
        primaryAction = Color(0xFF3482FF),
        destructiveAction = Color(0xFFE94634),
        disabledAction = Color(0xFF9E9E9E),
        success = Color(0xFF00C853),
        warning = Color(0xFFFFA500),
        danger = Color(0xFFFF4D4F),
    )
}

object ShellTheme {
    val colors: ShellColors
        @Composable
        @ReadOnlyComposable
        get() = LocalShellColors.current
}

@Composable
fun ShellAppTheme(content: @Composable () -> Unit) {
    val isDark = isSystemInDarkTheme()
    val miuixColors = if (isDark) darkColorScheme() else lightColorScheme()
    val shellColors = shellColorScheme(miuixColors, isDark)
    val view = LocalView.current

    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as? Activity)?.window ?: return@SideEffect
            val backgroundColor = shellColors.pageBackground.toArgb()
            window.statusBarColor = backgroundColor
            window.navigationBarColor = backgroundColor
            WindowCompat.getInsetsController(window, view).apply {
                isAppearanceLightStatusBars = !isDark
                isAppearanceLightNavigationBars = !isDark
            }
        }
    }

    MiuixTheme(colors = miuixColors) {
        androidx.compose.runtime.CompositionLocalProvider(
            LocalShellColors provides shellColors,
            content = content
        )
    }
}

private fun shellColorScheme(colors: Colors, isDark: Boolean): ShellColors = ShellColors(
    pageBackground = colors.surface,
    cardBackground = colors.surfaceContainer,
    mutedText = colors.onSurfaceVariantActions,
    secondaryText = colors.onSurfaceVariantSummary,
    previewBackground = if (isDark) Color(0xFF151515) else Color(0xFF3D3D3D),
    primaryAction = colors.primary,
    destructiveAction = colors.error,
    disabledAction = colors.disabledSecondaryVariant,
    success = Color(0xFF22C55E),
    warning = Color(0xFFF59E0B),
    danger = Color(0xFFFF5A5F),
)
