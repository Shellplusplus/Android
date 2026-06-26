package com.shell.liangyi.ui.about

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import kotlin.math.cos
import kotlin.math.sin

private data class BlobConfig(
    val baseX: Float,
    val baseY: Float,
    val radius: Float,
    val phaseX: Float,
    val phaseY: Float,
)

private val BLOB_CONFIGS = listOf(
    BlobConfig(0.8f, 0.2f, 0.65f, 0f, 1.2f),
    BlobConfig(0.8f, 0.9f, 0.6f, 1.8f, 0.4f),
    BlobConfig(0.2f, 0.9f, 0.55f, 3.1f, 2.0f),
    BlobConfig(0.2f, 0.2f, 0.5f, 4.5f, 3.6f),
)

private val LIGHT_COLORS = listOf(
    listOf(Color(0xFFFFE6F0), Color(0xFFFFD7E6), Color(0xFFF8BAD2), Color(0xFFA6A6FA)),
    listOf(Color(0xFF94BDFF), Color(0xFFFFE6EC), Color(0xFFBDBDFF), Color(0xFFF8C4D6)),
    listOf(Color(0xFFFADEE6), Color(0xFF99ADE6), Color(0xFFECEDFF), Color(0xFFB8BAFA)),
)

private val DARK_COLORS = listOf(
    listOf(Color(0x663410E0), Color(0x804C248C), Color(0x8000A3F5), Color(0x661C29D4)),
    listOf(Color(0x801226C9), Color(0x809E36AB), Color(0x801040D6), Color(0x800033C8)),
    listOf(Color(0x66944DBC), Color(0x661C29D4), Color(0x80A8429E), Color(0x80331FB3)),
)

@Composable
fun HyperOSBackground(modifier: Modifier = Modifier) {
    val isDark = isSystemInDarkTheme()
    val colors = remember(isDark) { if (isDark) DARK_COLORS else LIGHT_COLORS }

    val colorPeriod = remember(isDark) { if (isDark) 8f else 5f }
    val pointOffset = remember(isDark) { if (isDark) 0.4f else 0.2f }

    val transition = rememberInfiniteTransition(label = "hyperos_bg")
    val time by transition.animateFloat(
        initialValue = 0f,
        targetValue = 62.83f,
        animationSpec = infiniteRepeatable(
            animation = tween(15000, easing = LinearEasing),
            repeatMode = RepeatMode.Restart,
        ),
        label = "hyperos_time",
    )
    val stage by transition.animateFloat(
        initialValue = 0f,
        targetValue = 3f,
        animationSpec = infiniteRepeatable(
            animation = tween((colorPeriod * 2500 * 4 / 3).toInt(), easing = LinearEasing),
            repeatMode = RepeatMode.Restart,
        ),
        label = "hyperos_stage",
    )

    Canvas(modifier = modifier.fillMaxSize()) {
        val w = size.width
        val h = size.height

        val stageIdx = stage.toInt()
        val stageFrac = stage - stageIdx
        val startColors = colors[stageIdx % 3]
        val endColors = colors[(stageIdx + 1) % 3]

        BLOB_CONFIGS.forEachIndexed { i, cfg ->
            val cx = (cfg.baseX + sin(time + cfg.phaseX) * pointOffset) * w
            val cy = (cfg.baseY + cos(time + cfg.phaseY) * pointOffset) * h
            val r = cfg.radius * maxOf(w, h)

            val baseColor = lerpColor(startColors[i], endColors[i], stageFrac)
            drawCircle(
                brush = Brush.radialGradient(
                    colors = listOf(
                        baseColor.copy(alpha = baseColor.alpha * 0.85f),
                        baseColor.copy(alpha = baseColor.alpha * 0.3f),
                        Color.Transparent,
                    ),
                    center = Offset(cx, cy),
                    radius = r,
                ),
                radius = r,
                center = Offset(cx, cy),
            )
        }
    }
}

private fun lerpColor(a: Color, b: Color, t: Float): Color {
    val ct = t.coerceIn(0f, 1f)
    return Color(
        red = a.red + (b.red - a.red) * ct,
        green = a.green + (b.green - a.green) * ct,
        blue = a.blue + (b.blue - a.blue) * ct,
        alpha = a.alpha + (b.alpha - a.alpha) * ct,
    )
}
