/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.effects

import androidx.compose.ui.graphics.BlurEffect
import androidx.compose.ui.graphics.TileMode
import com.shell.liangyi.ui.glassport.BackdropEffectScope
import com.shell.liangyi.ui.glassport.isRenderEffectSupported

fun BackdropEffectScope.blur(
    radius: Float,
    edgeTreatment: TileMode = TileMode.Clamp,
) {
    if (!isRenderEffectSupported() || radius <= 0f) return
    if (edgeTreatment != TileMode.Clamp || renderEffect != null) {
        if (radius > padding) {
            padding = radius
        }
    }
    renderEffect = BlurEffect(renderEffect, radius, radius, edgeTreatment)
}
