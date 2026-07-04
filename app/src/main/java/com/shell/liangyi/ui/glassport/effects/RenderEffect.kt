/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.effects

import androidx.compose.ui.graphics.RenderEffect
import com.shell.liangyi.ui.glassport.BackdropEffectScope
import com.shell.liangyi.ui.glassport.RuntimeShader
import com.shell.liangyi.ui.glassport.internal.RuntimeShaderEffect
import com.shell.liangyi.ui.glassport.internal.chain
import com.shell.liangyi.ui.glassport.isRenderEffectSupported
import com.shell.liangyi.ui.glassport.isRuntimeShaderSupported

fun BackdropEffectScope.effect(effect: RenderEffect) {
    if (!isRenderEffectSupported()) return
    renderEffect = renderEffect.chain(effect)
}

fun BackdropEffectScope.runtimeShaderEffect(
    key: String,
    shaderString: String,
    uniformShaderName: String,
    block: RuntimeShader.() -> Unit,
) {
    if (!isRuntimeShaderSupported()) return
    renderEffect = renderEffect.chain(
        RuntimeShaderEffect(
            runtimeShader = obtainRuntimeShader(key, shaderString).apply(block),
            uniformShaderName = uniformShaderName,
        ),
    )
}
