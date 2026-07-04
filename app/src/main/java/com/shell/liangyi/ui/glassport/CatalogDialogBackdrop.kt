/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport

import androidx.compose.runtime.Composable
import com.shell.liangyi.ui.glassport.backdrops.LayerBackdrop
import com.shell.liangyi.ui.glassport.backdrops.rememberLayerBackdrop

@Composable
fun rememberCatalogDialogBackdrop(enableBlur: Boolean = true): LayerBackdrop? {
    if (!enableBlur || !isRenderEffectSupported()) return null
    return rememberLayerBackdrop()
}
