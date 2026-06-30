package com.shell.liangyi.ui.components

import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
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
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.shell.liangyi.R
import com.shell.liangyi.core.update.UpdatePrompt
import kotlinx.coroutines.delay

private const val DIALOG_ANIMATION_DURATION_MS = 220

@Composable
fun LiquidGlassUpdateDialog(
    prompt: UpdatePrompt,
    visible: Boolean,
    onDismissRequest: () -> Unit,
    onConfirm: () -> Unit,
    onExitFinished: () -> Unit,
) {
    val isLightTheme = !isSystemInDarkTheme()
    val contentColor = if (isLightTheme) Color.Black else Color.White
    val accentColor = if (isLightTheme) Color(0xFF0088FF) else Color(0xFF0091FF)
    val containerColor = if (isLightTheme) Color.White else Color(0xFF1B1B1F)
    var animatedVisible by remember(prompt.info.latestVersionCode, prompt.mandatory) {
        mutableStateOf(false)
    }
    val dialogAlpha by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0f,
        animationSpec = tween(
            durationMillis = DIALOG_ANIMATION_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
    )
    val dialogScale by animateFloatAsState(
        targetValue = if (animatedVisible) 1f else 0.94f,
        animationSpec = tween(
            durationMillis = DIALOG_ANIMATION_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
    )
    val dialogOffsetY by animateFloatAsState(
        targetValue = if (animatedVisible) 0f else 18f,
        animationSpec = tween(
            durationMillis = DIALOG_ANIMATION_DURATION_MS,
            easing = FastOutSlowInEasing,
        ),
    )

    LaunchedEffect(prompt.info.latestVersionCode, prompt.mandatory, visible) {
        animatedVisible = visible
    }

    LaunchedEffect(visible, prompt.info.latestVersionCode, prompt.mandatory) {
        if (!visible) {
            delay(DIALOG_ANIMATION_DURATION_MS.toLong())
            onExitFinished()
        }
    }

    Dialog(
        onDismissRequest = {
            if (!prompt.mandatory && visible) onDismissRequest()
        },
        properties = DialogProperties(
            dismissOnBackPress = !prompt.mandatory,
            dismissOnClickOutside = !prompt.mandatory,
        )
    ) {
        Column(
            Modifier
                .padding(24.dp)
                .clip(RoundedCornerShape(32.dp))
                .background(containerColor)
                .graphicsLayer {
                    alpha = dialogAlpha
                    scaleX = dialogScale
                    scaleY = dialogScale
                    translationY = dialogOffsetY
                }
                .fillMaxWidth()
        ) {
            BasicText(
                text = stringResource(R.string.new_version_found),
                modifier = Modifier.padding(start = 24.dp, top = 22.dp, end = 24.dp, bottom = 8.dp),
                style = TextStyle(color = contentColor, fontSize = 24.sp, fontWeight = FontWeight.Medium)
            )
            BasicText(
                text = stringResource(
                    R.string.update_dialog_versions,
                    prompt.currentVersionName,
                    prompt.currentVersionCode.toString(),
                    prompt.info.latestVersion,
                    prompt.info.latestVersionCode.toString(),
                    prompt.info.releaseDate
                ),
                modifier = Modifier.padding(horizontal = 24.dp, vertical = 8.dp),
                style = TextStyle(color = contentColor.copy(alpha = 0.72f), fontSize = 14.sp)
            )
            BasicText(
                text = if (prompt.info.changelog.isBlank()) stringResource(R.string.no_update_notes) else prompt.info.changelog,
                modifier = Modifier
                    .then(if (isLightTheme) Modifier else Modifier.graphicsLayer(blendMode = BlendMode.Plus))
                    .padding(horizontal = 24.dp, vertical = 8.dp)
                    .heightIn(max = 200.dp)
                    .verticalScroll(rememberScrollState()),
                style = TextStyle(color = contentColor.copy(alpha = 0.68f), fontSize = 15.sp)
            )
            Row(
                Modifier
                    .padding(start = 24.dp, top = 12.dp, end = 24.dp, bottom = 24.dp)
                    .fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                if (!prompt.mandatory) {
                    Row(
                        Modifier
                            .clip(RoundedCornerShape(999.dp))
                            .background(if (isLightTheme) Color(0xFFF1F1F4) else Color(0xFF2A2A30))
                            .clickable(enabled = visible, onClick = onDismissRequest)
                            .height(48.dp)
                            .weight(1f)
                            .padding(horizontal = 16.dp),
                        horizontalArrangement = Arrangement.Center,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        BasicText(stringResource(R.string.later), style = TextStyle(contentColor, 16.sp))
                    }
                }
                Row(
                    Modifier
                        .clip(RoundedCornerShape(999.dp))
                        .background(accentColor)
                        .clickable(enabled = visible, onClick = onConfirm)
                        .height(48.dp)
                        .weight(1f)
                        .padding(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    BasicText(stringResource(R.string.download_update), style = TextStyle(Color.White, 16.sp))
                }
            }
        }
    }
}
