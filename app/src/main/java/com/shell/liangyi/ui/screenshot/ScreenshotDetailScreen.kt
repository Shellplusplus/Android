package com.shell.liangyi.ui.screenshot

import android.widget.Toast
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.theme.ShellTheme
import com.shell.liangyi.util.GallerySaver
import com.shell.liangyi.util.ImageProcessor
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.io.File

private const val CORNER_RADIUS_PX = 48f

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
    val context = LocalContext.current

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

    val processedPath = remember(resolvedPath) {
        if (resolvedPath == null) null
        else {
            val cacheDir = File(shellViewModel.appContext().cacheDir, "processed_screenshots")
            cacheDir.mkdirs()
            val out = File(cacheDir, File(resolvedPath).nameWithoutExtension + "_rounded.png")
            if (out.exists()) out.absolutePath
            else if (ImageProcessor.addRoundedCorners(resolvedPath, out.absolutePath, CORNER_RADIUS_PX)) out.absolutePath
            else null
        }
    }

    val framePath = remember {
        val cacheDir = File(shellViewModel.appContext().cacheDir, "processed_screenshots")
        cacheDir.mkdirs()
        val out = File(cacheDir, "frame_336.png")
        if (!out.exists()) {
            val res = context.resources
            res.openRawResource(R.drawable.frame_336).use { input ->
                out.outputStream().use { output -> input.copyTo(output) }
            }
        }
        out.absolutePath
    }

    val gallerySaver = remember { GallerySaver(shellViewModel.appContext()) }

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
            Box(
                modifier = Modifier.fillMaxWidth(),
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 48.dp)
                        .heightIn(max = 400.dp),
                    contentAlignment = Alignment.Center
                ) {
                    if (processedPath != null && File(processedPath).exists()) {
                        AsyncImage(
                            model = ImageRequest.Builder(shellViewModel.appContext())
                                .data(File(processedPath))
                                .crossfade(true)
                                .build(),
                            contentDescription = "截图预览",
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Fit
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
                text = "带壳截图",
                color = shellColors.primaryAction,
                enabled = processedPath != null && File(processedPath).exists(),
                onClick = {
                    if (processedPath != null) {
                        val cacheDir = File(shellViewModel.appContext().cacheDir, "processed_screenshots")
                        val out = File(cacheDir, File(processedPath).nameWithoutExtension + "_framed.png")
                        val ok = ImageProcessor.compositeWithFrame(processedPath, framePath, out.absolutePath)
                        if (ok) {
                            val fileName = "Shell++_framed_${shot?.index ?: System.currentTimeMillis()}"
                            val saved = gallerySaver.saveFileToGallery(out.absolutePath, fileName)
                            Toast.makeText(context, if (saved) "已保存到相册" else "保存失败", Toast.LENGTH_SHORT).show()
                        } else {
                            Toast.makeText(context, "合成失败", Toast.LENGTH_SHORT).show()
                        }
                    }
                }
            )
            Spacer(modifier = Modifier.height(8.dp))

            ActionButton(
                text = "保存到相册",
                color = shellColors.primaryAction,
                enabled = processedPath != null,
                onClick = {
                    if (processedPath != null) {
                        val fileName = "Shell++_${shot?.index ?: System.currentTimeMillis()}"
                        val ok = gallerySaver.saveFileToGallery(processedPath, fileName)
                        Toast.makeText(context, if (ok) "已保存到相册" else "保存失败", Toast.LENGTH_SHORT).show()
                    }
                }
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
