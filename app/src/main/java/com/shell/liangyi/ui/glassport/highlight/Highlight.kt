/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.highlight

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Immutable
data class Highlight(
    val width: Dp = 0.5.dp,
    val blurRadius: Dp = width / 2f,
    val alpha: Float = 1f,
    val style: HighlightStyle = HighlightStyle.Plain,
) {
    companion object {
        @Stable
        val Plain: Highlight = Highlight(style = HighlightStyle.Plain)
    }
}
