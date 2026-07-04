/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.internal

import androidx.compose.runtime.Immutable
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.LayoutDirection

@Immutable
internal class ShapeProvider(val shapeBlock: () -> Shape) {
    private var cachedShape: Shape? = null
    private var cachedOutline: Outline? = null
    private var cachedSize: Size = Size.Unspecified
    private var cachedLayoutDirection: LayoutDirection? = null
    private var cachedDensity: Float? = null

    val innerShape: Shape
        get() = shapeBlock()

    val shape = object : Shape {
        override fun createOutline(size: Size, layoutDirection: LayoutDirection, density: Density): Outline {
            val currentShape = shapeBlock()
            if (cachedShape != currentShape) {
                cachedShape = currentShape
                cachedOutline = null
            }
            if (cachedOutline == null ||
                cachedSize != size ||
                cachedLayoutDirection != layoutDirection ||
                cachedDensity != density.density
            ) {
                cachedSize = size
                cachedLayoutDirection = layoutDirection
                cachedDensity = density.density
                cachedOutline = currentShape.createOutline(size, layoutDirection, density)
            }
            return cachedOutline!!
        }
    }
}
