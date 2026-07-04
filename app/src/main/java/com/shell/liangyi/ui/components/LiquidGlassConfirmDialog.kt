package com.shell.liangyi.ui.components

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicText
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.TransformOrigin
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.ui.glassport.Backdrop
import com.shell.liangyi.ui.glassport.drawBackdrop
import com.shell.liangyi.ui.glassport.effects.blur
import com.shell.liangyi.ui.glassport.effects.colorControls
import com.shell.liangyi.ui.glassport.effects.lens
import com.shell.liangyi.ui.glassport.highlight.Highlight
import kotlinx.coroutines.delay

private const val CONFIRM_DIALOG_EXIT_DURATION_MS = 180

@Composable
fun LiquidGlassConfirmDialog(
    title: String,
    message: String,
    confirmText: String,
    dismissText: String,
    visible: Boolean,
    onDismissRequest: () -> Unit,
    onConfirm: () -> Unit,
    onExitFinished: () -> Unit,
    backdrop: Backdrop? = null,
) {
    val isLightTheme = !isSystemInDarkTheme()
    val contentColor = if (isLightTheme) Color.Black else Color.White
    val accentColor = if (isLightTheme) Color(0xFF0088FF) else Color(0xFF0091FF)
    val containerColor = if (isLightTheme) {
        Color(0xFFFAFAFA).copy(alpha = 0.60f)
    } else {
        Color(0xFF121212).copy(alpha = 0.40f)
    }
    val dimColor = if (isLightTheme) {
        Color(0xFF29293A).copy(alpha = 0.23f)
    } else {
        Color(0xFF121212).copy(alpha = 0.56f)
    }
    val cardShape = remember { RoundedCornerShape(48.dp) }
    var animatedVisible by remember(title, message, confirmText, dismissText) {
        mutableStateOf(false)
    }
    val overlayAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 220 else 160,
            easing = FastOutSlowInEasing,
        ),
        label = "confirm_dialog_overlay_alpha",
    )
    val dialogAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 260 else CONFIRM_DIALOG_EXIT_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
        label = "confirm_dialog_alpha",
    )
    val dialogScale by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0.90f,
        animationSpec = if (animatedVisible) {
            spring(
                dampingRatio = 0.72f,
                stiffness = Spring.StiffnessLow,
            )
        } else {
            tween(CONFIRM_DIALOG_EXIT_DURATION_MS, easing = FastOutSlowInEasing)
        },
        label = "confirm_dialog_scale",
    )
    val dialogOffsetY by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else 30f,
        animationSpec = if (animatedVisible) {
            spring(
                dampingRatio = 0.82f,
                stiffness = Spring.StiffnessMediumLow,
            )
        } else {
            tween(CONFIRM_DIALOG_EXIT_DURATION_MS, easing = FastOutSlowInEasing)
        },
        label = "confirm_dialog_offset",
    )
    val dialogTiltX by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else -3f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 260 else CONFIRM_DIALOG_EXIT_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
        label = "confirm_dialog_tilt_x",
    )

    LaunchedEffect(title, message, confirmText, dismissText, visible) {
        animatedVisible = visible
    }

    LaunchedEffect(visible, title, message, confirmText, dismissText) {
        if (!visible) {
            delay(CONFIRM_DIALOG_EXIT_DURATION_MS.toLong())
            onExitFinished()
        }
    }

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center,
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .graphicsLayer { alpha = overlayAlpha }
                .background(dimColor)
                .clickable(
                    enabled = visible,
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    onClick = onDismissRequest,
                ),
        )
        Column(
            modifier = Modifier
                .padding(40.dp)
                .widthIn(max = 420.dp)
                .graphicsLayer {
                    alpha = dialogAlpha
                    scaleX = dialogScale
                    scaleY = dialogScale
                    translationY = dialogOffsetY
                    rotationX = dialogTiltX
                    transformOrigin = TransformOrigin(0.5f, 0.15f)
                }
                .clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    onClick = {},
                )
                .then(
                    if (backdrop != null) {
                        Modifier.drawBackdrop(
                            backdrop = backdrop,
                            shape = { cardShape },
                            effects = {
                                colorControls(
                                    brightness = if (isLightTheme) 0.2f else 0f,
                                    saturation = 1.5f,
                                )
                                blur(if (isLightTheme) 16.dp.toPx() else 8.dp.toPx())
                                lens(
                                    refractionHeight = 24.dp.toPx(),
                                    refractionAmount = 48.dp.toPx(),
                                    depthEffect = true,
                                )
                            },
                            highlight = { Highlight.Plain },
                            onDrawSurface = { drawRect(containerColor) },
                        )
                    } else {
                        Modifier
                            .clip(cardShape)
                            .background(
                                if (isLightTheme) Color.White else Color(0xFF1B1B1F),
                                cardShape,
                            )
                    }
                )
                .fillMaxWidth(),
        ) {
            BasicText(
                text = title,
                modifier = Modifier.padding(start = 28.dp, top = 24.dp, end = 28.dp, bottom = 12.dp),
                style = TextStyle(
                    color = contentColor,
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Medium,
                ),
            )
            BasicText(
                text = message,
                modifier = Modifier
                    .then(
                        if (isLightTheme) Modifier else Modifier.graphicsLayer(blendMode = BlendMode.Plus)
                    )
                    .padding(start = 24.dp, top = 12.dp, end = 24.dp, bottom = 12.dp),
                style = TextStyle(
                    color = contentColor.copy(alpha = 0.68f),
                    fontSize = 15.sp,
                ),
            )
            Row(
                modifier = Modifier
                    .padding(start = 24.dp, top = 12.dp, end = 24.dp, bottom = 24.dp)
                    .fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                ConfirmDialogActionButton(
                    text = dismissText,
                    containerColor = containerColor.copy(alpha = 0.2f),
                    contentColor = contentColor,
                    modifier = Modifier.weight(1f),
                    enabled = visible,
                    onClick = onDismissRequest,
                )
                ConfirmDialogActionButton(
                    text = confirmText,
                    containerColor = accentColor,
                    contentColor = Color.White,
                    modifier = Modifier.weight(1f),
                    enabled = visible,
                    onClick = onConfirm,
                )
            }
        }
    }
}

@Composable
private fun ConfirmDialogActionButton(
    text: String,
    containerColor: Color,
    contentColor: Color,
    modifier: Modifier = Modifier,
    enabled: Boolean,
    onClick: () -> Unit,
) {
    Row(
        modifier = modifier
            .clip(RoundedCornerShape(999.dp))
            .background(containerColor)
            .clickable(
                enabled = enabled,
                interactionSource = remember { MutableInteractionSource() },
                indication = null,
                onClick = onClick,
            )
            .height(48.dp)
            .padding(horizontal = 16.dp),
        horizontalArrangement = Arrangement.spacedBy(4.dp, Alignment.CenterHorizontally),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        BasicText(
            text = text,
            style = TextStyle(
                color = contentColor,
                fontSize = 16.sp,
            ),
        )
    }
}
