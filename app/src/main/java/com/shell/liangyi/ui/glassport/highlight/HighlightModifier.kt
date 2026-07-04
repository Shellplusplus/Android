/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport.highlight

import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Outline
import androidx.compose.ui.graphics.Paint
import androidx.compose.ui.graphics.PaintingStyle
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawOutline
import androidx.compose.ui.graphics.drawscope.ContentDrawScope
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.translate
import androidx.compose.ui.graphics.layer.GraphicsLayer
import androidx.compose.ui.graphics.layer.drawLayer
import androidx.compose.ui.node.DrawModifierNode
import androidx.compose.ui.node.ModifierNodeElement
import androidx.compose.ui.node.invalidateDraw
import androidx.compose.ui.node.requireGraphicsContext
import androidx.compose.ui.platform.InspectorInfo
import androidx.compose.ui.unit.Density
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.util.fastCoerceAtMost
import com.shell.liangyi.ui.glassport.RuntimeShaderCacheImpl
import com.shell.liangyi.ui.glassport.internal.ShapeProvider
import com.shell.liangyi.ui.glassport.internal.blur
import com.shell.liangyi.ui.glassport.internal.clipOutline
import com.shell.liangyi.ui.glassport.internal.setRuntimeShader
import com.shell.liangyi.ui.glassport.isRuntimeShaderSupported
import kotlin.math.ceil

internal class HighlightElement(
    val shapeProvider: ShapeProvider,
    val highlight: () -> Highlight?,
) : ModifierNodeElement<HighlightNode>() {
    override fun create(): HighlightNode = HighlightNode(shapeProvider, highlight)

    override fun update(node: HighlightNode) {
        node.shapeProvider = shapeProvider
        node.highlight = highlight
        node.invalidateDraw()
    }

    override fun InspectorInfo.inspectableProperties() {
        name = "highlight"
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is HighlightElement) return false
        return shapeProvider == other.shapeProvider && highlight == other.highlight
    }

    override fun hashCode(): Int {
        var result = shapeProvider.hashCode()
        result = 31 * result + highlight.hashCode()
        return result
    }
}

internal class HighlightNode(
    var shapeProvider: ShapeProvider,
    var highlight: () -> Highlight?,
) : DrawModifierNode, Modifier.Node() {
    override val shouldAutoInvalidate: Boolean = false

    private var highlightLayer: GraphicsLayer? = null
    private val paint = Paint().apply { style = PaintingStyle.Stroke }
    private var clipPath: Path? = null
    private val runtimeShaderCache = RuntimeShaderCacheImpl()
    private var previousStyle: HighlightStyle? = null

    override fun ContentDrawScope.draw() {
        val resolvedHighlight = highlight()
        if (resolvedHighlight == null || resolvedHighlight.width.value <= 0f) {
            drawContent()
            return
        }

        drawContent()

        val layer = highlightLayer ?: return
        val safeSize = IntSize(
            ceil(size.width).toInt() + 2,
            ceil(size.height).toInt() + 2,
        )
        val outline = shapeProvider.shape.createOutline(size, layoutDirection, this as Density)
        val reusableClipPath = if (outline is Outline.Rounded) {
            clipPath ?: Path().also { clipPath = it }
        } else {
            null
        }

        configurePaint(resolvedHighlight)

        layer.alpha = resolvedHighlight.alpha
        layer.blendMode = resolvedHighlight.style.blendMode
        layer.record(safeSize) {
            translate(1f, 1f) {
                drawContext.canvas.save()
                drawContext.canvas.clipOutline(outline, reusableClipPath)
                drawContext.canvas.drawOutline(outline, paint)
                drawContext.canvas.restore()
            }
        }

        translate(-1f, -1f) {
            drawLayer(layer)
        }
    }

    override fun onAttach() {
        highlightLayer = requireGraphicsContext().createGraphicsLayer()
    }

    override fun onDetach() {
        highlightLayer?.let { requireGraphicsContext().releaseGraphicsLayer(it) }
        highlightLayer = null
        clipPath = null
        runtimeShaderCache.clear()
        previousStyle = null
    }

    private fun DrawScope.configurePaint(highlight: Highlight) {
        if (previousStyle != highlight.style) {
            previousStyle = highlight.style
        }
        paint.color = highlight.style.color
        paint.strokeWidth = ceil(highlight.width.toPx().fastCoerceAtMost(size.minDimension / 2f)) * 2f
        paint.blur(highlight.blurRadius.toPx())
        if (isRuntimeShaderSupported()) {
            paint.setRuntimeShader(
                with(highlight.style) {
                    createShader(
                        shape = shapeProvider.shape,
                        runtimeShaderCache = runtimeShaderCache,
                    )
                },
            )
        } else {
            paint.setRuntimeShader(null)
        }
    }
}
