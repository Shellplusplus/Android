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
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicText
import androidx.compose.foundation.verticalScroll
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
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.core.update.UpdatePrompt
import com.shell.liangyi.ui.glassport.Backdrop
import com.shell.liangyi.ui.glassport.drawBackdrop
import com.shell.liangyi.ui.glassport.effects.blur
import com.shell.liangyi.ui.glassport.effects.colorControls
import com.shell.liangyi.ui.glassport.effects.lens
import com.shell.liangyi.ui.glassport.highlight.Highlight
import kotlinx.coroutines.delay

private const val UPDATE_DIALOG_EXIT_DURATION_MS = 180

@Composable
fun LiquidGlassUpdateDialog(
    prompt: UpdatePrompt,
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
    var animatedVisible by remember(prompt.info.latestVersionCode, prompt.mandatory) {
        mutableStateOf(false)
    }
    val notes = if (prompt.info.changelog.isBlank()) {
        stringResource(R.string.no_update_notes)
    } else {
        prompt.info.changelog
    }
    val bodyText = buildString {
        append(
            stringResource(
                R.string.update_dialog_versions,
                prompt.currentVersionName,
                prompt.currentVersionCode.toString(),
                prompt.info.latestVersion,
                prompt.info.latestVersionCode.toString(),
                prompt.info.releaseDate,
            ),
        )
        append("\n\n")
        append(notes)
    }
    val overlayAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 220 else 160,
            easing = FastOutSlowInEasing,
        ),
        label = "update_dialog_overlay_alpha",
    )
    val dialogAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 260 else UPDATE_DIALOG_EXIT_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
        label = "update_dialog_alpha",
    )
    val dialogScale by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0.90f,
        animationSpec = if (animatedVisible) {
            spring(
                dampingRatio = 0.72f,
                stiffness = Spring.StiffnessLow,
            )
        } else {
            tween(
                durationMillis = UPDATE_DIALOG_EXIT_DURATION_MS,
                easing = FastOutSlowInEasing,
            )
        },
        label = "update_dialog_scale",
    )
    val dialogOffsetY by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else 30f,
        animationSpec = if (animatedVisible) {
            spring(
                dampingRatio = 0.82f,
                stiffness = Spring.StiffnessMediumLow,
            )
        } else {
            tween(
                durationMillis = UPDATE_DIALOG_EXIT_DURATION_MS,
                easing = FastOutSlowInEasing,
            )
        },
        label = "update_dialog_offset",
    )
    val dialogTiltX by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else -3f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 260 else UPDATE_DIALOG_EXIT_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
        label = "update_dialog_tilt_x",
    )

    LaunchedEffect(prompt.info.latestVersionCode, prompt.mandatory, visible) {
        animatedVisible = visible
    }

    LaunchedEffect(visible, prompt.info.latestVersionCode, prompt.mandatory) {
        if (!visible) {
            delay(UPDATE_DIALOG_EXIT_DURATION_MS.toLong())
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
                    enabled = !prompt.mandatory && visible,
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
                    transformOrigin = androidx.compose.ui.graphics.TransformOrigin(0.5f, 0.15f)
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
                text = stringResource(R.string.new_version_found),
                modifier = Modifier.padding(start = 28.dp, top = 24.dp, end = 28.dp, bottom = 12.dp),
                style = TextStyle(
                    color = contentColor,
                    fontSize = 24.sp,
                    fontWeight = FontWeight.Medium,
                ),
            )

            BasicText(
                text = bodyText,
                modifier = Modifier
                    .then(
                        if (isLightTheme) {
                            Modifier
                        } else {
                            Modifier.graphicsLayer(blendMode = BlendMode.Plus)
                        }
                    )
                    .padding(start = 24.dp, top = 12.dp, end = 24.dp, bottom = 12.dp)
                    .heightIn(max = 240.dp)
                    .verticalScroll(rememberScrollState()),
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
                if (!prompt.mandatory) {
                    DialogActionButton(
                        text = stringResource(R.string.later),
                        containerColor = containerColor.copy(alpha = 0.2f),
                        contentColor = contentColor,
                        modifier = Modifier.weight(1f),
                        enabled = visible,
                        onClick = onDismissRequest,
                    )
                }

                DialogActionButton(
                    text = stringResource(R.string.download_update),
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
private fun DialogActionButton(
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
