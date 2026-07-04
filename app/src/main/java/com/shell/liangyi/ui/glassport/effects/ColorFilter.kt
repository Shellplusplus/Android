/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.effects

import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.ColorMatrix
import androidx.compose.ui.graphics.ColorMatrixColorFilter
import com.shell.liangyi.ui.glassport.BackdropEffectScope
import com.shell.liangyi.ui.glassport.internal.ColorFilterEffect
import com.shell.liangyi.ui.glassport.isRenderEffectSupported

fun BackdropEffectScope.colorFilter(colorFilter: ColorFilter) {
    if (!isRenderEffectSupported()) return
    renderEffect = ColorFilterEffect(renderEffect, colorFilter)
}

fun BackdropEffectScope.colorControls(
    brightness: Float = 0f,
    contrast: Float = 1f,
    saturation: Float = 1f,
) {
    if (brightness == 0f && contrast == 1f && saturation == 1f) return
    colorFilter(colorControlsColorFilter(brightness, contrast, saturation))
}

private fun colorControlsColorFilter(
    brightness: Float = 0f,
    contrast: Float = 1f,
    saturation: Float = 1f,
): ColorFilter {
    val invSat = 1f - saturation
    val r = 0.213f * invSat
    val g = 0.715f * invSat
    val b = 0.072f * invSat
    val t = (0.5f - contrast * 0.5f + brightness) * 255f
    val cs = contrast * saturation
    val cr = contrast * r
    val cg = contrast * g
    val cb = contrast * b
    return ColorMatrixColorFilter(
        ColorMatrix(
            floatArrayOf(
                cr + cs, cg, cb, 0f, t,
                cr, cg + cs, cb, 0f, t,
                cr, cg, cb + cs, 0f, t,
                0f, 0f, 0f, 1f, 0f,
            ),
        ),
    )
}
