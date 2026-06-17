package com.shell.liangyi.ui.theme

import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color

/**
 * iOS 17 风格语义色板。
 * 通过 LocalIOSColors 注入，组件统一从这里取色，保证整体观感一致。
 */
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

val LightIOSColors = IOSColors(
    groupedBackground = Color(0xFFF2F2F7),
    cardBackground = Color(0xFFFFFFFF),
    label = Color(0xFF000000),
    secondaryLabel = Color(0x993C3C43),
    tertiaryLabel = Color(0x4D3C3C43),
    separator = Color(0x33545458),
    accent = Color(0xFF007AFF),
    green = Color(0xFF34C759),
    red = Color(0xFFFF3B30),
    isDark = false
)

val DarkIOSColors = IOSColors(
    groupedBackground = Color(0xFF000000),
    cardBackground = Color(0xFF1C1C1E),
    label = Color(0xFFFFFFFF),
    secondaryLabel = Color(0x99EBEBF5),
    tertiaryLabel = Color(0x4DEBEBF5),
    separator = Color(0x4D545458),
    accent = Color(0xFF0A84FF),
    green = Color(0xFF30D158),
    red = Color(0xFFFF453A),
    isDark = true
)

val LocalIOSColors = staticCompositionLocalOf { LightIOSColors }
