/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.highlight

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.Stable
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.drawscope.DrawScope
import com.shell.liangyi.ui.glassport.RuntimeShader
import com.shell.liangyi.ui.glassport.RuntimeShaderCache

@Immutable
interface HighlightStyle {
    val color: Color
    val blendMode: BlendMode

    fun DrawScope.createShader(
        shape: Shape,
        runtimeShaderCache: RuntimeShaderCache,
    ): RuntimeShader?

    @Immutable
    data class Plain(
        override val color: Color = Color.White.copy(alpha = 0.38f),
        override val blendMode: BlendMode = BlendMode.Plus,
    ) : HighlightStyle {
        override fun DrawScope.createShader(
            shape: Shape,
            runtimeShaderCache: RuntimeShaderCache,
        ): RuntimeShader? = null
    }

    companion object {
        @Stable
        val Plain: Plain = Plain()
    }
}
