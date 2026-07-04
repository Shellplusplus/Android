package com.shell.liangyi.ui.components

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
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
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.core.update.UpdateDownloadUiState
import top.yukonga.miuix.kmp.basic.LinearProgressIndicator
import top.yukonga.miuix.kmp.basic.ProgressIndicatorDefaults
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.blur.Backdrop
import top.yukonga.miuix.kmp.blur.blur
import top.yukonga.miuix.kmp.blur.colorControls
import top.yukonga.miuix.kmp.blur.drawBackdrop
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun LiquidGlassUpdateProgressDialog(
    state: UpdateDownloadUiState,
    backdrop: Backdrop? = null,
) {
    if (!state.isVisible) return

    val containerColor = Color(0xFFFAFAFA).copy(alpha = 0.60f)
    val dimColor = Color(0xFF29293A).copy(alpha = 0.23f)
    val cardShape = remember { RoundedCornerShape(48.dp) }
    val progressColors = ProgressIndicatorDefaults.progressIndicatorColors(
        foregroundColor = MiuixTheme.colorScheme.primary,
        backgroundColor = MiuixTheme.colorScheme.primary.copy(alpha = 0.16f),
    )
    val dialogAlpha by animateFloatAsState(
        targetValue = 1f,
        animationSpec = tween(durationMillis = 220, easing = FastOutSlowInEasing),
        label = "update_progress_dialog_alpha",
    )
    val dialogScale by animateFloatAsState(
        targetValue = 1f,
        animationSpec = tween(durationMillis = 220, easing = FastOutSlowInEasing),
        label = "update_progress_dialog_scale",
    )

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center,
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
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
                }
                .then(
                    if (backdrop != null) {
                        Modifier.drawBackdrop(
                            backdrop = backdrop,
                            shape = { cardShape },
                            effects = {
                                colorControls(
                                    brightness = 0.2f,
                                    saturation = 1.5f,
                                )
                                blur(16.dp.toPx())
                                lens(
                                    refractionHeight = 24.dp.toPx(),
                                    refractionAmount = 48.dp.toPx(),
                                    depthEffect = true,
                                )
                            },
                            onDrawSurface = { drawRect(containerColor) },
                        )
                    } else {
                        Modifier
                            .clip(cardShape)
                            .background(Color.White, cardShape)
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
                color = Color.Black,
            )
            Text(
                text = state.versionLabel,
                modifier = Modifier.padding(horizontal = 28.dp),
                fontSize = 14.sp,
                color = Color.Black.copy(alpha = 0.64f),
            )
            Text(
                text = state.statusText,
                modifier = Modifier.padding(horizontal = 28.dp),
                fontSize = 16.sp,
                fontWeight = FontWeight.Medium,
                color = Color.Black.copy(alpha = 0.82f),
            )
            Text(
                text = state.detailText,
                modifier = Modifier.padding(horizontal = 28.dp),
                fontSize = 14.sp,
                color = Color.Black.copy(alpha = 0.58f),
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
                color = Color.Black.copy(alpha = 0.5f),
            )
        }
    }
}
