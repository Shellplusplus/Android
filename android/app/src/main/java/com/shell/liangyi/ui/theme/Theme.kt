package com.shell.liangyi.ui.theme

import android.app.Activity
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.SideEffect
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalView
import androidx.core.view.WindowCompat

/**
 * iOS 17 风格主题：固定语义色板（不跟随 Material You 动态取色），
 * 保证圆角分组列表、强调蓝等观感稳定一致。
 */
@Composable
fun ShellPlusTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val iosColors = if (darkTheme) DarkIOSColors else LightIOSColors

    val colorScheme = if (darkTheme) {
        darkColorScheme(
            primary = iosColors.accent,
            background = iosColors.groupedBackground,
            surface = iosColors.cardBackground,
            onPrimary = androidx.compose.ui.graphics.Color.White,
            onBackground = iosColors.label,
            onSurface = iosColors.label
        )
    } else {
        lightColorScheme(
            primary = iosColors.accent,
            background = iosColors.groupedBackground,
            surface = iosColors.cardBackground,
            onPrimary = androidx.compose.ui.graphics.Color.White,
            onBackground = iosColors.label,
            onSurface = iosColors.label
        )
    }

    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as Activity).window
            window.statusBarColor = iosColors.groupedBackground.toArgb()
            window.navigationBarColor = iosColors.groupedBackground.toArgb()
            val controller = WindowCompat.getInsetsController(window, view)
            controller.isAppearanceLightStatusBars = !darkTheme
            controller.isAppearanceLightNavigationBars = !darkTheme
        }
    }

    CompositionLocalProvider(LocalIOSColors provides iosColors) {
        MaterialTheme(
            colorScheme = colorScheme,
            typography = Typography,
            content = content
        )
    }
}
