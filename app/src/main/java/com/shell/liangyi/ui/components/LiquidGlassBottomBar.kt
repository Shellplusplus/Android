package com.shell.liangyi.ui.components

import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.EaseOut
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.defaultMinSize
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.Stable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.dropShadow
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.luminance
import androidx.compose.ui.graphics.shadow.Shadow
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.onGloballyPositioned
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.semantics.Role
import androidx.compose.ui.semantics.clearAndSetSemantics
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.util.fastCoerceIn
import androidx.compose.ui.util.fastRoundToInt
import androidx.compose.ui.util.lerp
import kotlinx.coroutines.flow.collectLatest
import kotlinx.coroutines.flow.drop
import kotlinx.coroutines.launch
import kotlin.math.PI
import kotlin.math.abs
import kotlin.math.cos
import kotlin.math.sign
import kotlin.math.sin
import kotlin.math.sqrt
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.blur.Backdrop
import top.yukonga.miuix.kmp.blur.blur
import top.yukonga.miuix.kmp.blur.drawBackdrop
import top.yukonga.miuix.kmp.blur.highlight.BloomStroke
import top.yukonga.miuix.kmp.blur.highlight.Highlight
import top.yukonga.miuix.kmp.blur.highlight.LightPosition
import top.yukonga.miuix.kmp.blur.highlight.LightSource
import top.yukonga.miuix.kmp.blur.layerBackdrop
import top.yukonga.miuix.kmp.blur.rememberLayerBackdrop
import top.yukonga.miuix.kmp.blur.sensor.rememberDeviceTilt
import top.yukonga.miuix.kmp.theme.MiuixTheme

internal val LocalLiquidBottomTabScale =
    staticCompositionLocalOf { { 1f } }

private val indicatorSpecularHighlight = Highlight(
    width = 1.dp,
    alpha = 1f,
    style = BloomStroke(
        color = Color.White.copy(alpha = 0.12f),
        innerBlurRadius = 2.dp,
        primaryLight = LightSource(
            position = LightPosition(0.5f, -0.3f, -0.05f),
            color = Color.White,
            intensity = 1f,
        ),
        secondaryLight = LightSource(
            position = LightPosition(0.5f, 0.8f, -0.5f),
            color = Color.White,
            intensity = 0.4f,
        ),
        dualPeak = true,
    ),
)

private const val LightRefX = 0.5f
private const val LightRefY = 0.7f
private const val GravityDirThresholdSq = 0.01f

@Stable
data class LiquidGlassTabItem(
    val label: String,
    val icon: ImageVector,
)

@Composable
private fun rememberGravityRotatedHighlight(
    base: Highlight,
    extraDegrees: Float = 0f,
): Highlight {
    val baseStyle = base.style as BloomStroke
    val tilt by rememberDeviceTilt()
    val rotatedPrimary = remember(tilt, baseStyle.primaryLight, extraDegrees) {
        val basePrimary = baseStyle.primaryLight
        val gx = tilt.gravityX
        val gy = tilt.gravityY
        val gravityMagnitudeSq = gx * gx + gy * gy
        val (lx0, ly0) = if (gravityMagnitudeSq > GravityDirThresholdSq) {
            val inverseMagnitude = 1f / sqrt(gravityMagnitudeSq)
            (gx * inverseMagnitude) to (gy * inverseMagnitude)
        } else {
            0f to -1f
        }
        val radians = extraDegrees * PI / 180.0
        val cosine = cos(radians).toFloat()
        val sine = sin(radians).toFloat()
        val lx = cosine * lx0 - sine * ly0
        val ly = sine * lx0 + cosine * ly0
        basePrimary.copy(
            position = LightPosition(
                x = LightRefX + lx,
                y = LightRefY + ly,
                z = basePrimary.position.z,
            ),
        )
    }
    return remember(base, rotatedPrimary) {
        base.copy(style = baseStyle.copy(primaryLight = rotatedPrimary))
    }
}

@Composable
fun LiquidGlassBottomBar(
    items: List<LiquidGlassTabItem>,
    selectedIndex: Int,
    onSelectedIndexChange: (Int) -> Unit,
    backdrop: Backdrop?,
    modifier: Modifier = Modifier,
    blurEnabled: Boolean = true,
    @Suppress("UNUSED_PARAMETER")
    referenceSlots: Int = 4,
) {
    val colorScheme = MiuixTheme.colorScheme
    val isLightTheme = colorScheme.background.luminance() > 0.5f
    val accentColor = Color(0xFF0088FF)
    val actualBlurEnabled = blurEnabled && backdrop != null
    val containerColor = if (actualBlurEnabled) {
        colorScheme.surfaceContainer.copy(alpha = 0.4f)
    } else {
        colorScheme.surfaceContainer
    }

    if (!actualBlurEnabled) {
        LiquidGlassBottomBarFallback(
            items = items,
            selectedIndex = selectedIndex,
            onSelectedIndexChange = onSelectedIndexChange,
            accentColor = accentColor,
            containerColor = containerColor,
            modifier = modifier,
        )
        return
    }

    val pillShape = remember { CircleShape }
    val tabsBackdrop = rememberLayerBackdrop()
    val density = LocalDensity.current
    val isLtr = LocalLayoutDirection.current == LayoutDirection.Ltr
    val animationScope = rememberCoroutineScope()
    var tabWidthPx by remember { mutableFloatStateOf(0f) }
    var totalWidthPx by remember { mutableFloatStateOf(0f) }

    val offsetAnimation = remember { Animatable(0f) }
    val rubberBandPx = with(density) { 4.dp.toPx() }
    val panelOffset by remember(rubberBandPx) {
        derivedStateOf {
            if (totalWidthPx == 0f) {
                0f
            } else {
                val fraction = (offsetAnimation.value / totalWidthPx).fastCoerceIn(-1f, 1f)
                rubberBandPx * fraction.sign * EaseOut.transform(abs(fraction))
            }
        }
    }

    var currentIndex by remember {
        mutableIntStateOf(selectedIndex)
    }

    class DampedDragAnimationHolder {
        var instance: DampedDragAnimation? = null
    }

    val holder = remember { DampedDragAnimationHolder() }

    val dampedDragAnimation = remember(animationScope, items.size, density, isLtr) {
        DampedDragAnimation(
            animationScope = animationScope,
            initialValue = selectedIndex.toFloat(),
            valueRange = 0f..items.lastIndex.toFloat(),
            visibilityThreshold = 0.001f,
            initialScale = 1f,
            pressedScale = 78f / 56f,
            canDrag = { offset ->
                val animation = holder.instance ?: return@DampedDragAnimation true
                if (tabWidthPx == 0f) return@DampedDragAnimation false

                val indicatorX = animation.value * tabWidthPx
                val padding = with(density) { 4.dp.toPx() }
                val globalTouchX = if (isLtr) {
                    padding + indicatorX + offset.x
                } else {
                    totalWidthPx - padding - tabWidthPx - indicatorX + offset.x
                }
                globalTouchX in 0f..totalWidthPx
            },
            onDragStarted = {},
            onDragStopped = {
                val targetIndex = targetValue.fastRoundToInt().fastCoerceIn(0, items.lastIndex)
                currentIndex = targetIndex
                animateToValue(targetIndex.toFloat())
                animationScope.launch {
                    offsetAnimation.animateTo(0f, spring(1f, 300f, 0.5f))
                }
            },
            onDrag = { _, dragAmount ->
                if (tabWidthPx > 0f) {
                    updateValue(
                        (targetValue + dragAmount.x / tabWidthPx * if (isLtr) 1f else -1f)
                            .fastCoerceIn(0f, items.lastIndex.toFloat()),
                    )
                    animationScope.launch {
                        offsetAnimation.snapTo(offsetAnimation.value + dragAmount.x)
                    }
                }
            },
        ).also { holder.instance = it }
    }

    androidx.compose.runtime.LaunchedEffect(selectedIndex) {
        currentIndex = selectedIndex
        if (
            dampedDragAnimation.pressProgress <= 0.001f &&
            abs(dampedDragAnimation.targetValue - selectedIndex.toFloat()) > 0.001f
        ) {
            dampedDragAnimation.animateToValue(selectedIndex.toFloat())
        }
    }
    androidx.compose.runtime.LaunchedEffect(dampedDragAnimation, selectedIndex) {
        snapshotFlow { currentIndex }
            .drop(1)
            .collectLatest { index ->
                if (index != selectedIndex) {
                    dampedDragAnimation.animateToValue(index.toFloat())
                    onSelectedIndexChange(index)
                }
            }
    }

    val interactiveHighlight = remember(animationScope, tabWidthPx, isLtr) {
        InteractiveHighlight(
            animationScope = animationScope,
            position = { size, _ ->
                Offset(
                    x = if (isLtr) {
                        (dampedDragAnimation.value + 0.5f) * tabWidthPx + panelOffset
                    } else {
                        size.width - (dampedDragAnimation.value + 0.5f) * tabWidthPx + panelOffset
                    },
                    y = size.height / 2f,
                )
            },
        )
    }

    val baseHighlight = rememberGravityRotatedHighlight(
        base = indicatorSpecularHighlight,
        extraDegrees = -45f,
    )
    val pillHighlight = rememberGravityRotatedHighlight(
        base = indicatorSpecularHighlight,
        extraDegrees = 90f,
    )
    val combinedBackdrop = rememberCombinedBackdrop(backdrop, tabsBackdrop)

    Box(
        modifier = modifier,
        contentAlignment = Alignment.CenterStart,
    ) {
        Row(
            modifier = Modifier
                .onGloballyPositioned { coordinates ->
                    totalWidthPx = coordinates.size.width.toFloat()
                    val contentWidthPx = totalWidthPx - with(density) { 8.dp.toPx() }
                    tabWidthPx = (contentWidthPx / items.size).coerceAtLeast(0f)
                }
                .graphicsLayer {
                    translationX = panelOffset
                }
                .dropShadow(
                    shape = pillShape,
                    shadow = Shadow(
                        radius = 10.dp,
                        color = Color.Black,
                        alpha = if (isLightTheme) 0.1f else 0.2f,
                    ),
                )
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    onClick = {},
                )
                .drawBackdrop(
                    backdrop = backdrop,
                    shape = { pillShape },
                    effects = {
                        vibrancy()
                        blur(4.dp.toPx(), 4.dp.toPx())
                        lens(
                            refractionHeight = 24.dp.toPx(),
                            refractionAmount = 24.dp.toPx(),
                        )
                    },
                    highlight = { baseHighlight.copy(alpha = 0.75f) },
                    layerBlock = {
                        val width = size.width.coerceAtLeast(1f)
                        val scale = lerp(
                            1f,
                            1f + 16.dp.toPx() / width,
                            dampedDragAnimation.pressProgress,
                        )
                        scaleX = scale
                        scaleY = scale
                    },
                    onDrawSurface = { drawRect(containerColor) },
                )
                .then(interactiveHighlight.modifier)
                .fillMaxWidth()
                .height(64.dp)
                .padding(4.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            items.forEachIndexed { index, item ->
                LiquidGlassBottomBarItem(
                    item = item,
                    onClick = { currentIndex = index },
                )
            }
        }

        CompositionLocalProvider(
            LocalLiquidBottomTabScale provides {
                lerp(1f, 1.2f, dampedDragAnimation.pressProgress)
            },
        ) {
            Row(
                modifier = Modifier
                    .clearAndSetSemantics {}
                    .alpha(0f)
                    .layerBackdrop(tabsBackdrop)
                    .graphicsLayer {
                        translationX = panelOffset
                    }
                    .drawBackdrop(
                        backdrop = backdrop,
                        shape = { pillShape },
                        effects = {
                            vibrancy()
                            blur(4.dp.toPx(), 4.dp.toPx())
                            lens(
                                refractionHeight = 24.dp.toPx(),
                                refractionAmount = 24.dp.toPx(),
                            )
                        },
                        onDrawSurface = { drawRect(containerColor) },
                    )
                    .then(interactiveHighlight.modifier)
                    .fillMaxWidth()
                    .height(56.dp)
                    .padding(horizontal = 4.dp)
                    .graphicsLayer(colorFilter = ColorFilter.tint(accentColor)),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                items.forEachIndexed { index, item ->
                    LiquidGlassBottomBarItem(
                        item = item,
                        onClick = { currentIndex = index },
                    )
                }
            }
        }

        if (tabWidthPx > 0f) {
            val tabWidthDp = with(density) { tabWidthPx.toDp() }
            Box(
                modifier = Modifier
                    .padding(horizontal = 4.dp)
                    .graphicsLayer {
                        val progressOffset = dampedDragAnimation.value * tabWidthPx
                        translationX = if (isLtr) {
                            progressOffset + panelOffset
                        } else {
                            -progressOffset + panelOffset
                        }
                    }
                    .then(interactiveHighlight.gestureModifier)
                    .then(dampedDragAnimation.modifier)
                    .drawBackdrop(
                        backdrop = combinedBackdrop,
                        shape = { pillShape },
                        effects = {
                            val progress = dampedDragAnimation.pressProgress
                            lens(
                                refractionHeight = 10.dp.toPx() * progress,
                                refractionAmount = 14.dp.toPx() * progress,
                                depthEffect = true,
                                chromaticAberration = 0.5f,
                            )
                        },
                        highlight = {
                            pillHighlight.copy(alpha = dampedDragAnimation.pressProgress)
                        },
                        layerBlock = {
                            scaleX = dampedDragAnimation.scaleX
                            scaleY = dampedDragAnimation.scaleY
                            val velocity = dampedDragAnimation.velocity / 10f
                            scaleX /= 1f - (velocity * 0.75f).fastCoerceIn(-0.2f, 0.2f)
                            scaleY *= 1f - (velocity * 0.25f).fastCoerceIn(-0.2f, 0.2f)
                        },
                        onDrawSurface = {
                            val progress = dampedDragAnimation.pressProgress
                            drawRect(
                                color = if (isLightTheme) {
                                    Color.Black.copy(alpha = 0.1f)
                                } else {
                                    Color.White.copy(alpha = 0.1f)
                                },
                                alpha = 1f - progress,
                            )
                            drawRect(Color.Black.copy(alpha = 0.03f * progress))
                        },
                    )
                    .innerShadow(shape = pillShape) {
                        InnerShadow(
                            radius = 8.dp * dampedDragAnimation.pressProgress,
                            color = Color.Black.copy(alpha = 0.15f),
                            alpha = dampedDragAnimation.pressProgress,
                        )
                    }
                    .height(56.dp)
                    .width(tabWidthDp),
            )
        }
    }
}

@Composable
private fun LiquidGlassBottomBarFallback(
    items: List<LiquidGlassTabItem>,
    selectedIndex: Int,
    onSelectedIndexChange: (Int) -> Unit,
    accentColor: Color,
    containerColor: Color,
    modifier: Modifier,
) {
    val glassShape = remember { CircleShape }
    val indicatorShape = remember { CircleShape }

    BoxWithConstraints(
        modifier = modifier,
        contentAlignment = Alignment.CenterStart,
    ) {
        val density = LocalDensity.current
        val tabWidth = maxWidth / items.size
        val tabWidthPx = with(density) { tabWidth.toPx() }
        val animatedIndex by animateFloatAsState(
            targetValue = selectedIndex.toFloat(),
            animationSpec = spring(
                dampingRatio = 0.85f,
                stiffness = 420f,
            ),
            label = "liquid_bar_fallback_index",
        )

        Box(contentAlignment = Alignment.CenterStart) {
            Row(
                modifier = Modifier
                    .background(containerColor, glassShape)
                    .clip(glassShape)
                    .fillMaxWidth()
                    .height(64.dp)
                    .padding(4.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                items.forEachIndexed { index, item ->
                    LiquidGlassBottomBarItem(
                        item = item,
                        selected = index == selectedIndex,
                        accentColor = accentColor,
                        onClick = { onSelectedIndexChange(index) },
                    )
                }
            }

            Box(
                modifier = Modifier
                    .padding(horizontal = 4.dp)
                    .graphicsLayer {
                        translationX = animatedIndex * tabWidthPx
                    }
                    .clip(indicatorShape)
                    .background(accentColor.copy(alpha = 0.14f), indicatorShape)
                    .height(56.dp)
                    .width(tabWidth),
            )
        }
    }
}

@Composable
private fun RowScope.LiquidGlassBottomBarItem(
    item: LiquidGlassTabItem,
    onClick: () -> Unit,
) {
    val scale = LocalLiquidBottomTabScale.current
    val contentColor = MiuixTheme.colorScheme.onSurface

    Column(
        modifier = Modifier
            .defaultMinSize(minWidth = 76.dp)
            .clip(CircleShape)
            .clickable(
                interactionSource = null,
                indication = null,
                role = Role.Tab,
                onClick = onClick,
            )
            .fillMaxHeight()
            .weight(1f)
            .graphicsLayer {
                val tabScale = scale()
                scaleX = tabScale
                scaleY = tabScale
            },
        verticalArrangement = Arrangement.spacedBy(1.dp, Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Icon(
            imageVector = item.icon,
            contentDescription = item.label,
            tint = contentColor,
        )
        Text(
            text = item.label,
            fontSize = 11.sp,
            lineHeight = 14.sp,
            fontWeight = FontWeight.Medium,
            color = contentColor,
            maxLines = 1,
            softWrap = false,
            overflow = TextOverflow.Visible,
        )
    }
}

@Composable
private fun RowScope.LiquidGlassBottomBarItem(
    item: LiquidGlassTabItem,
    selected: Boolean,
    accentColor: Color,
    onClick: () -> Unit,
) {
    val contentColor = if (selected) accentColor else MiuixTheme.colorScheme.onSurface
    val selectedScale by animateFloatAsState(
        targetValue = if (selected) 1.08f else 1f,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioNoBouncy,
            stiffness = Spring.StiffnessMedium,
        ),
        label = "liquid_tab_scale",
    )

    Column(
        modifier = Modifier
            .defaultMinSize(minWidth = 76.dp)
            .clip(CircleShape)
            .clickable(
                interactionSource = null,
                indication = null,
                role = Role.Tab,
                onClick = onClick,
            )
            .fillMaxHeight()
            .weight(1f)
            .graphicsLayer {
                scaleX = selectedScale
                scaleY = selectedScale
            },
        verticalArrangement = Arrangement.spacedBy(1.dp, Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Icon(
            imageVector = item.icon,
            contentDescription = item.label,
            tint = contentColor,
        )
        Text(
            text = item.label,
            fontSize = 11.sp,
            lineHeight = 14.sp,
            fontWeight = if (selected) FontWeight.SemiBold else FontWeight.Medium,
            color = contentColor,
            maxLines = 1,
            softWrap = false,
            overflow = TextOverflow.Visible,
        )
    }
}
