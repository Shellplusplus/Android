/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.effects

import androidx.compose.foundation.shape.AbsoluteRoundedCornerShape
import androidx.compose.foundation.shape.CornerBasedShape
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.util.fastCoerceAtLeast
import androidx.compose.ui.util.fastCoerceAtMost
import com.shell.liangyi.ui.glassport.BackdropEffectScope
import com.shell.liangyi.ui.glassport.internal.RoundedRectRefractionShaderString
import com.shell.liangyi.ui.glassport.internal.RuntimeShaderEffect
import com.shell.liangyi.ui.glassport.isRuntimeShaderSupported

fun BackdropEffectScope.lens(
    refractionHeight: Float,
    refractionAmount: Float,
    depthEffect: Boolean = false,
) {
    if (!isRuntimeShaderSupported()) return
    if (refractionHeight <= 0f || refractionAmount <= 0f) return
    if (padding > 0f) {
        padding = (padding - refractionHeight).fastCoerceAtLeast(0f)
    }
    val cornerRadii = cornerRadii ?: throw UnsupportedOperationException(
        "Only rounded corner shapes are supported in lens effects.",
    )
    val shader = obtainRuntimeShader("Refraction", RoundedRectRefractionShaderString).apply {
        setFloatUniform("size", size.width, size.height)
        setFloatUniform("offset", -padding, -padding)
        setFloatUniform("cornerRadii", cornerRadii)
        setFloatUniform("refractionHeight", refractionHeight)
        setFloatUniform("refractionAmount", -refractionAmount)
        setFloatUniform("depthEffect", if (depthEffect) 1f else 0f)
    }
    effect(RuntimeShaderEffect(shader, "content"))
}

private val BackdropEffectScope.cornerRadii: FloatArray?
    get() = when (val currentShape = shape) {
        is AbsoluteRoundedCornerShape -> {
            val maxRadius = size.minDimension / 2f
            floatArrayOf(
                currentShape.topStart.toPx(size, this).fastCoerceAtMost(maxRadius),
                currentShape.topEnd.toPx(size, this).fastCoerceAtMost(maxRadius),
                currentShape.bottomEnd.toPx(size, this).fastCoerceAtMost(maxRadius),
                currentShape.bottomStart.toPx(size, this).fastCoerceAtMost(maxRadius),
            )
        }

        is CornerBasedShape -> {
            val maxRadius = size.minDimension / 2f
            val isLtr = layoutDirection == LayoutDirection.Ltr
            val topLeft = if (isLtr) currentShape.topStart.toPx(size, this) else currentShape.topEnd.toPx(size, this)
            val topRight = if (isLtr) currentShape.topEnd.toPx(size, this) else currentShape.topStart.toPx(size, this)
            val bottomRight = if (isLtr) currentShape.bottomEnd.toPx(size, this) else currentShape.bottomStart.toPx(size, this)
            val bottomLeft = if (isLtr) currentShape.bottomStart.toPx(size, this) else currentShape.bottomEnd.toPx(size, this)
            floatArrayOf(
                topLeft.fastCoerceAtMost(maxRadius),
                topRight.fastCoerceAtMost(maxRadius),
                bottomRight.fastCoerceAtMost(maxRadius),
                bottomLeft.fastCoerceAtMost(maxRadius),
            )
        }

        else -> null
    }
