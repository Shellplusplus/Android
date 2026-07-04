/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.internal

import android.graphics.BlurMaskFilter
import androidx.compose.ui.graphics.Paint
import com.shell.liangyi.ui.glassport.RuntimeShader
import com.shell.liangyi.ui.glassport.asAndroidRuntimeShader

internal fun Paint.blur(radius: Float) {
    asFrameworkPaint().maskFilter =
        if (radius > 0f) BlurMaskFilter(radius, BlurMaskFilter.Blur.NORMAL) else null
}

internal fun Paint.setRuntimeShader(runtimeShader: RuntimeShader?) {
    asFrameworkPaint().shader = runtimeShader?.asAndroidRuntimeShader()
}
