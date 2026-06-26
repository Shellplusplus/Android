package com.shell.liangyi.ui.screenshot

import android.graphics.drawable.BitmapDrawable
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import coil.size.Size
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.io.File

@Composable
fun ScreenshotDetailScreen(
    shotId: String,
    navController: NavHostController,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val screenshots by shellViewModel.screenshots.collectAsState()
    val shot = screenshots.find { it.shotId == shotId }

    val resolvedPath = remember(shot, shotId) {
        when {
            !shot?.localFilePath.isNullOrEmpty() -> shot.localFilePath
            else -> {
                val dir = File(shellViewModel.appContext().filesDir, "screenshot_sync")
                val safeKey = shotId.replace(Regex("[^a-zA-Z0-9#_\\-]"), "_")
                val candidate = File(dir, "${safeKey}.png")
                if (candidate.exists()) candidate.absolutePath else null
            }
        }
    }

    val density = LocalDensity.current
    var imgNatW by remember { mutableIntStateOf(0) }
    var imgNatH by remember { mutableIntStateOf(0) }

    Box(modifier = Modifier.fillMaxSize().background(shellColors.pageBackground)) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(43.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(29.dp))
                Text(
                    text = "\u2190",
                    modifier = Modifier.clickable { navController.popBackStack() },
                    fontSize = 13.sp,
                    color = colors.onSurface
                )
            }

            Spacer(modifier = Modifier.height(21.dp))
            Text(
                text = "#${shot?.index ?: shotId}",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 30.sp,
                fontWeight = FontWeight.Normal,
                color = colors.onSurface
            )

            if (shot != null) {
                Text(
                    text = shot.capturedAt,
                    modifier = Modifier.padding(start = 26.dp, top = 4.dp),
                    fontSize = 10.sp,
                    color = shellColors.secondaryText
                )
            }

            Spacer(modifier = Modifier.height(16.dp))
            BoxWithConstraints(
                modifier = Modifier.fillMaxWidth(),
                contentAlignment = Alignment.Center
            ) {
                val containerW = with(density) { (maxWidth - 96.dp).toPx() }
                val containerH = with(density) { 400.dp.toPx() }

                val radius = if (imgNatW > 0 && imgNatH > 0) {
                    val scaleW = containerW / imgNatW
                    val scaleH = containerH / imgNatH
                    val scale = minOf(scaleW, scaleH, 1f)
                    val displayedW = imgNatW * scale
                    with(density) { (48f * displayedW / 336f).toDp() }
                } else 16.dp

                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 48.dp)
                        .heightIn(max = 400.dp)
                        .clip(RoundedCornerShape(radius)),
                    contentAlignment = Alignment.Center
                ) {
                    if (resolvedPath != null && File(resolvedPath).exists()) {
                        AsyncImage(
                            model = ImageRequest.Builder(shellViewModel.appContext())
                                .data(File(resolvedPath))
                                .size(Size.ORIGINAL)
                                .crossfade(true)
                                .build(),
                            contentDescription = "截图预览",
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Fit,
                            onSuccess = {
                                val bmp = (it.result.drawable as? BitmapDrawable)?.bitmap
                                if (bmp != null) {
                                    imgNatW = bmp.width
                                    imgNatH = bmp.height
                                }
                            }
                        )
                    } else if (shot != null && !shot.isComplete) {
                        Text(
                            text = "传输中 ${shot.receivedChunks}/${shot.totalChunks}",
                            fontSize = 14.sp,
                            color = Color.White
                        )
                    } else {
                        Text(
                            text = "暂无预览",
                            fontSize = 14.sp,
                            color = colors.onSurfaceVariantSummary
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.weight(1f))

            ActionButton(
                text = "保存到相册",
                color = shellColors.primaryAction,
                enabled = resolvedPath != null,
                onClick = { /* TODO: 保存到相册 */ }
            )
            Spacer(modifier = Modifier.height(8.dp))

            ActionButton(
                text = "删除截图",
                color = shellColors.destructiveAction,
                enabled = shot != null,
                onClick = {
                    shot?.shotId?.let { shellViewModel.deleteScreenshot(it) }
                    navController.popBackStack()
                }
            )
            Spacer(modifier = Modifier.height(13.dp))
        }
    }
}

@Composable
private fun ActionButton(text: String, color: Color, enabled: Boolean, onClick: () -> Unit) {
    val interactionSource = remember { MutableInteractionSource() }
    val shellColors = ShellTheme.colors
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(if (enabled) color else shellColors.disabledAction)
            .clickable(
                enabled = enabled,
                interactionSource = interactionSource,
                indication = null,
                onClick = onClick
            ),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = Color.White
        )
    }
}
