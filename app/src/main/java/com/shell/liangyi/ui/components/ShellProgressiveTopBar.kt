// Created: 2026-07-25
// Last modified: 2026-07-26
// Developer: DefateStar

package com.shell.liangyi.ui.components

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.shell.liangyi.ui.glassport.isRuntimeShaderSupported
import top.yukonga.miuix.kmp.blur.BlendColorEntry
import top.yukonga.miuix.kmp.blur.BlurDefaults
import top.yukonga.miuix.kmp.blur.LayerBackdrop
import top.yukonga.miuix.kmp.blur.ProgressiveBlur
import top.yukonga.miuix.kmp.blur.layerBackdrop
import top.yukonga.miuix.kmp.blur.progressiveTextureBlur
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun rememberShellProgressiveTopBarBackdrop(): LayerBackdrop? {
    if (!isRuntimeShaderSupported()) return null
    return rememberShellBlurBackdrop()
}

@Composable
fun ShellProgressiveTopBar(
    backdrop: LayerBackdrop?,
    bottomFadeHeight: Dp = 24.dp,
    content: @Composable (Color) -> Unit,
) {
    val blurActive = backdrop != null
    val barColor = if (blurActive) Color.Transparent else MiuixTheme.colorScheme.surface

    Box {
        if (backdrop != null) {
            Box(
                modifier = Modifier
                    .matchParentSize()
                    .progressiveTextureBlur(
                        backdrop = backdrop,
                        shape = RectangleShape,
                        gradient = ProgressiveBlur.Top.copy(curve = 2.2f),
                        blurRadius = 10f,
                        colors = BlurDefaults.blurColors(
                            blendColors = listOf(
                                BlendColorEntry(MiuixTheme.colorScheme.surface.copy(alpha = 0.3f)),
                            ),
                        ),
                    ),
            )
        }
        Column {
            content(barColor)
            if (bottomFadeHeight > 0.dp) {
                Spacer(modifier = Modifier.height(bottomFadeHeight))
            }
        }
    }
}

fun Modifier.shellTopBarBackdrop(backdrop: LayerBackdrop?): Modifier =
    if (backdrop != null) layerBackdrop(backdrop) else this
