package com.shell.liangyi.ui.components

import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.Orientation
import androidx.compose.foundation.gestures.draggable
import androidx.compose.foundation.gestures.rememberDraggableState
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.Stable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.luminance
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.semantics.disabled
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.semantics
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.blur.Backdrop
import top.yukonga.miuix.kmp.blur.blur
import top.yukonga.miuix.kmp.blur.drawBackdrop
import top.yukonga.miuix.kmp.blur.layerBackdrop
import top.yukonga.miuix.kmp.blur.rememberLayerBackdrop
import top.yukonga.miuix.kmp.theme.MiuixTheme
import kotlin.math.roundToInt

@Stable
data class LiquidGlassTabItem(
    val label: String,
    val icon: ImageVector,
)

@Composable
fun LiquidGlassBottomBar(
    items: List<LiquidGlassTabItem>,
    selectedIndex: Int,
    onSelectedIndexChange: (Int) -> Unit,
    backdrop: Backdrop?,
    modifier: Modifier = Modifier,
    blurEnabled: Boolean = true,
    referenceSlots: Int = 4,
) {
    val colorScheme = MiuixTheme.colorScheme
    val isLightSurface = colorScheme.background.luminance() > 0.5f
    val accentColor = Color(0xFF0A84FF)
    val containerColor = if (blurEnabled) {
        colorScheme.surfaceContainer.copy(alpha = if (isLightSurface) 0.42f else 0.52f)
    } else {
        colorScheme.surfaceContainer
    }
    val glassShape = remember { RoundedCornerShape(32.dp) }
    val indicatorShape = remember { RoundedCornerShape(28.dp) }
    val actualBlurEnabled = blurEnabled && backdrop != null
    val tabsBackdrop = if (actualBlurEnabled) rememberLayerBackdrop() else null
    val combinedBackdrop = if (actualBlurEnabled && tabsBackdrop != null) {
        rememberCombinedBackdrop(backdrop, tabsBackdrop)
    } else {
        null
    }

    BoxWithConstraints(
        modifier = modifier,
        contentAlignment = Alignment.Center,
    ) {
        val density = LocalDensity.current
        val slotWidth = (((maxWidth - 24.dp) / referenceSlots).coerceAtMost(78.dp)).coerceAtLeast(68.dp)
        val barWidth = slotWidth * items.size + 8.dp
        val slotWidthPx = with(density) { slotWidth.toPx() }
        var isDragging by remember { mutableStateOf(false) }
        var dragIndex by remember(selectedIndex) { mutableFloatStateOf(selectedIndex.toFloat()) }
        val animatedIndex by animateFloatAsState(
            targetValue = if (isDragging) dragIndex else selectedIndex.toFloat(),
            animationSpec = spring(
                dampingRatio = Spring.DampingRatioMediumBouncy,
                stiffness = Spring.StiffnessMediumLow,
            ),
            label = "liquid_bar_index",
        )
        val draggableState = rememberDraggableState { delta ->
            if (slotWidthPx <= 0f) return@rememberDraggableState
            val deltaIndex = delta / slotWidthPx
            dragIndex = (dragIndex + deltaIndex).coerceIn(0f, items.lastIndex.toFloat())
        }

        Box(
            modifier = Modifier.width(barWidth),
            contentAlignment = Alignment.CenterStart,
        ) {
            Row(
                modifier = Modifier
                    .clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        onClick = {},
                    )
                    .then(
                        if (actualBlurEnabled) {
                            Modifier.drawBackdrop(
                                backdrop = backdrop,
                                shape = { glassShape },
                                effects = {
                                    vibrancy()
                                    blur(4.dp.toPx(), 4.dp.toPx())
                                    lens(
                                        refractionHeight = 24.dp.toPx(),
                                        refractionAmount = 20.dp.toPx(),
                                        depthEffect = true,
                                    )
                                },
                                onDrawSurface = { drawRect(containerColor) },
                            )
                        } else {
                            Modifier.background(containerColor, glassShape)
                        },
                    )
                    .clip(glassShape)
                    .height(64.dp)
                    .padding(4.dp)
                    .width(barWidth),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(0.dp),
            ) {
                items.forEachIndexed { index, item ->
                    LiquidGlassBottomBarItem(
                        item = item,
                        selected = index == selectedIndex,
                        accentColor = accentColor,
                        width = slotWidth,
                        onClick = { onSelectedIndexChange(index) },
                    )
                }
            }

            if (actualBlurEnabled && tabsBackdrop != null) {
                Row(
                    modifier = Modifier
                        .alpha(0f)
                        .layerBackdrop(tabsBackdrop)
                        .drawBackdrop(
                            backdrop = backdrop,
                            shape = { glassShape },
                            effects = {
                                vibrancy()
                                blur(4.dp.toPx(), 4.dp.toPx())
                                lens(
                                    refractionHeight = 24.dp.toPx(),
                                    refractionAmount = 20.dp.toPx(),
                                )
                            },
                            onDrawSurface = { drawRect(containerColor) },
                        )
                        .graphicsLayer(colorFilter = ColorFilter.tint(accentColor))
                        .clip(glassShape)
                        .height(56.dp)
                        .padding(horizontal = 4.dp)
                        .width(barWidth),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    items.forEach { item ->
                        LiquidGlassBottomBarItem(
                            item = item,
                            selected = true,
                            accentColor = accentColor,
                            width = slotWidth,
                            onClick = null,
                        )
                    }
                }

                Box(
                    modifier = Modifier
                        .padding(horizontal = 4.dp)
                        .graphicsLayer {
                            translationX = animatedIndex * slotWidthPx
                        }
                        .draggable(
                            state = draggableState,
                            orientation = Orientation.Horizontal,
                            onDragStarted = {
                                isDragging = true
                                dragIndex = animatedIndex
                            },
                            onDragStopped = {
                                val snappedIndex = dragIndex
                                    .roundToInt()
                                    .coerceIn(0, items.lastIndex)
                                isDragging = false
                                dragIndex = snappedIndex.toFloat()
                                if (snappedIndex != selectedIndex) {
                                    onSelectedIndexChange(snappedIndex)
                                }
                            },
                        )
                        .drawBackdrop(
                            backdrop = combinedBackdrop!!,
                            shape = { indicatorShape },
                            effects = {
                                lens(
                                    refractionHeight = 12.dp.toPx(),
                                    refractionAmount = 14.dp.toPx(),
                                    depthEffect = true,
                                    chromaticAberration = 0.35f,
                                )
                            },
                            onDrawSurface = {
                                drawRect(
                                    color = if (isLightSurface) {
                                        Color.Black.copy(alpha = 0.08f)
                                    } else {
                                        Color.White.copy(alpha = 0.10f)
                                    }
                                )
                            },
                        )
                        .height(56.dp)
                        .width(slotWidth),
                )
            } else {
                Box(
                    modifier = Modifier
                        .padding(horizontal = 4.dp)
                        .graphicsLayer {
                            translationX = animatedIndex * slotWidthPx
                        }
                        .draggable(
                            state = draggableState,
                            orientation = Orientation.Horizontal,
                            onDragStarted = {
                                isDragging = true
                                dragIndex = animatedIndex
                            },
                            onDragStopped = {
                                val snappedIndex = dragIndex
                                    .roundToInt()
                                    .coerceIn(0, items.lastIndex)
                                isDragging = false
                                dragIndex = snappedIndex.toFloat()
                                if (snappedIndex != selectedIndex) {
                                    onSelectedIndexChange(snappedIndex)
                                }
                            },
                        )
                        .clip(indicatorShape)
                        .background(accentColor.copy(alpha = 0.14f), indicatorShape)
                        .height(56.dp)
                        .width(slotWidth),
                )
            }
        }
    }
}

@Composable
private fun RowScope.LiquidGlassBottomBarItem(
    item: LiquidGlassTabItem,
    selected: Boolean,
    accentColor: Color,
    width: androidx.compose.ui.unit.Dp,
    onClick: (() -> Unit)?,
) {
    val contentColor = if (selected) accentColor else MiuixTheme.colorScheme.onSurface
    val iconScale by animateFloatAsState(
        targetValue = if (selected) 1.08f else 1f,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioNoBouncy,
            stiffness = Spring.StiffnessMedium,
        ),
        label = "liquid_tab_scale",
    )

    Column(
        modifier = Modifier
            .defaultMinSize(minWidth = width)
            .width(width)
            .height(56.dp)
            .clip(RoundedCornerShape(28.dp))
            .then(
                if (onClick != null) {
                    Modifier.clickable(
                        interactionSource = remember { MutableInteractionSource() },
                        indication = null,
                        role = Role.Tab,
                        onClick = onClick,
                    )
                } else {
                    Modifier.semantics {
                        disabled()
                    }
                }
            )
            .graphicsLayer {
                scaleX = iconScale
                scaleY = iconScale
            },
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(2.dp, Alignment.CenterVertically),
    ) {
        Icon(
            imageVector = item.icon,
            contentDescription = item.label,
            tint = contentColor,
        )
        Text(
            text = item.label,
            fontSize = 11.sp,
            fontWeight = if (selected) FontWeight.SemiBold else FontWeight.Medium,
            color = contentColor,
            maxLines = 1,
        )
    }
}
