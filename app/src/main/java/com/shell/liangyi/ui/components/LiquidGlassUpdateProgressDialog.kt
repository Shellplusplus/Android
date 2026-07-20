package com.shell.liangyi.ui.components

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.TransformOrigin
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.core.update.UpdateDownloadUiState
import com.shell.liangyi.ui.glassport.Backdrop
import com.shell.liangyi.ui.glassport.drawBackdrop
import com.shell.liangyi.ui.glassport.effects.blur
import com.shell.liangyi.ui.glassport.effects.colorControls
import com.shell.liangyi.ui.glassport.effects.lens
import com.shell.liangyi.ui.glassport.highlight.Highlight
import com.shell.liangyi.ui.theme.ShellTheme
import kotlinx.coroutines.delay
import top.yukonga.miuix.kmp.basic.LinearProgressIndicator
import top.yukonga.miuix.kmp.basic.ProgressIndicatorDefaults
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

private const val UPDATE_PROGRESS_DIALOG_EXIT_DURATION_MS = 180

@Composable
fun LiquidGlassUpdateProgressDialog(
    state: UpdateDownloadUiState,
    visible: Boolean,
    onExitFinished: () -> Unit,
    backdrop: Backdrop? = null,
) {
    val isLightTheme = !ShellTheme.isDarkTheme
    val titleColor = if (isLightTheme) Color.Black else Color.White
    val secondaryColor = if (isLightTheme) Color.Black else Color.White
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
    val progressColors = ProgressIndicatorDefaults.progressIndicatorColors(
        foregroundColor = MiuixTheme.colorScheme.primary,
        backgroundColor = MiuixTheme.colorScheme.primary.copy(alpha = 0.16f),
    )
    var animatedVisible by remember {
        mutableStateOf(false)
    }
    val overlayAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 220 else 160,
            easing = FastOutSlowInEasing,
        ),
        label = "update_progress_overlay_alpha",
    )
    val dialogAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 260 else UPDATE_PROGRESS_DIALOG_EXIT_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
        label = "update_progress_dialog_alpha",
    )
    val dialogScale by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0.90f,
        animationSpec = if (animatedVisible) {
            spring(
                dampingRatio = 0.72f,
                stiffness = Spring.StiffnessLow,
            )
        } else {
            tween(UPDATE_PROGRESS_DIALOG_EXIT_DURATION_MS, easing = FastOutSlowInEasing)
        },
        label = "update_progress_dialog_scale",
    )
    val dialogOffsetY by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else 30f,
        animationSpec = if (animatedVisible) {
            spring(
                dampingRatio = 0.82f,
                stiffness = Spring.StiffnessMediumLow,
            )
        } else {
            tween(UPDATE_PROGRESS_DIALOG_EXIT_DURATION_MS, easing = FastOutSlowInEasing)
        },
        label = "update_progress_dialog_offset",
    )
    val dialogTiltX by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else -3f,
        animationSpec = tween(
            durationMillis = if (animatedVisible) 260 else UPDATE_PROGRESS_DIALOG_EXIT_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
        label = "update_progress_dialog_tilt_x",
    )

    LaunchedEffect(visible) {
        animatedVisible = visible
    }

    LaunchedEffect(visible) {
        if (!visible) {
            delay(UPDATE_PROGRESS_DIALOG_EXIT_DURATION_MS.toLong())
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
                .background(dimColor),
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
            verticalArrangement = Arrangement.spacedBy(14.dp),
        ) {
            Text(
                text = stringResource(R.string.update_downloading_title),
                modifier = Modifier.padding(start = 28.dp, top = 24.dp, end = 28.dp),
                fontSize = 24.sp,
                fontWeight = FontWeight.Medium,
                color = titleColor,
            )
            Text(
                text = state.versionLabel,
                modifier = Modifier.padding(horizontal = 28.dp),
                fontSize = 14.sp,
                color = secondaryColor.copy(alpha = 0.64f),
            )
            Text(
                text = state.statusText,
                modifier = Modifier.padding(horizontal = 28.dp),
                fontSize = 16.sp,
                fontWeight = FontWeight.Medium,
                color = secondaryColor.copy(alpha = 0.82f),
            )
            Text(
                text = state.detailText,
                modifier = Modifier.padding(horizontal = 28.dp),
                fontSize = 14.sp,
                color = secondaryColor.copy(alpha = 0.58f),
            )
            if (state.isIndeterminate) {
                LinearProgressIndicator(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 28.dp)
                        .height(6.dp)
                        .clip(RoundedCornerShape(999.dp)),
                    progress = null,
                    colors = progressColors,
                    height = 6.dp,
                )
            } else {
                LinearProgressIndicator(
                    progress = state.progress,
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 28.dp)
                        .height(6.dp)
                        .clip(RoundedCornerShape(999.dp)),
                    colors = progressColors,
                    height = 6.dp,
                )
            }
            Text(
                text = stringResource(R.string.update_wait_install_hint),
                modifier = Modifier.padding(start = 28.dp, end = 28.dp, bottom = 24.dp),
                fontSize = 13.sp,
                color = secondaryColor.copy(alpha = 0.5f),
            )
        }
    }
}
