package com.shell.liangyi.ui.screenshot

import android.content.Context
import android.widget.Toast
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import com.shell.liangyi.util.GallerySaver
import com.shell.liangyi.util.ImageProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
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
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    var actionInProgress by remember { mutableStateOf(false) }

    val resolvedPath = remember(shot?.localFilePath, shotId) {
        shot?.localFilePath?.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shotId)
    }

    val cacheDir = remember {
        File(shellViewModel.appContext().cacheDir, "processed").apply { mkdirs() }
    }

    val roundedPath by produceState<String?>(initialValue = null, resolvedPath, cacheDir) {
        value = null
        val inputPath = resolvedPath ?: return@produceState
        val inputFile = File(inputPath)
        if (!inputFile.exists()) {
            return@produceState
        }

        value = withContext(Dispatchers.IO) {
            val out = File(cacheDir, "rounded_${inputFile.name}")
            val shouldRegenerate = !out.exists() ||
                out.length() == 0L ||
                out.lastModified() < inputFile.lastModified()
            if (shouldRegenerate && !ImageProcessor.addRoundedCorners(inputPath, out.absolutePath)) {
                return@withContext null
            }
            out.absolutePath
        }
    }

    val gallerySaver = remember { GallerySaver(shellViewModel.appContext()) }

    ShellBackScaffold(
        title = "#${shot?.index ?: shotId}",
        onBack = { navController.popBackStack() }
    ) { innerPadding ->
        Column(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
            if (shot != null) {
                Spacer(modifier = Modifier.height(6.dp))
                Text(
                    text = shot.capturedAt,
                    modifier = Modifier.padding(start = 26.dp),
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
                    if (roundedPath != null) {
                        AsyncImage(
                            model = ImageRequest.Builder(shellViewModel.appContext())
                                .data(File(roundedPath!!))
                                .crossfade(true)
                                .build(),
                            contentDescription = stringResource(R.string.screenshot_preview),
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Fit
                        )
                    } else if (shot != null && !shot.isComplete) {
                        Text(
                            text = stringResource(
                                R.string.screenshot_transferring,
                                shot.receivedChunks,
                                shot.totalChunks
                            ),
                            fontSize = 14.sp,
                            color = Color.White
                        )
                    } else {
                        Text(
                            text = stringResource(R.string.no_preview),
                            fontSize = 14.sp,
                            color = colors.onSurfaceVariantSummary
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.weight(1f))

            ActionButton(
                text = stringResource(R.string.framed_screenshot),
                color = shellColors.primaryAction,
                enabled = !actionInProgress && resolvedPath != null && File(resolvedPath).exists(),
                onClick = {
                    val inputPath = resolvedPath ?: return@ActionButton
                    actionInProgress = true
                    scope.launch {
                        val result = withContext(Dispatchers.IO) {
                            val deviceFile = prepareDevice(context, cacheDir)
                                ?: return@withContext SaveResult.CompositeFailed
                            val out = File(cacheDir, "framed_${File(inputPath).name}")
                            if (!ImageProcessor.compositeWithFrame(inputPath, deviceFile.absolutePath, out.absolutePath)) {
                                return@withContext SaveResult.CompositeFailed
                            }
                            val fileName = "Shell++_framed_${shot?.index ?: System.currentTimeMillis()}"
                            if (gallerySaver.saveFileToGallery(out.absolutePath, fileName)) {
                                SaveResult.Success
                            } else {
                                SaveResult.SaveFailed
                            }
                        }
                        actionInProgress = false
                        Toast.makeText(
                            context,
                            when (result) {
                                SaveResult.Success -> context.getString(R.string.screenshot_saved)
                                SaveResult.CompositeFailed -> context.getString(R.string.composite_failed)
                                SaveResult.SaveFailed -> context.getString(R.string.save_failed)
                            },
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                }
            )
            Spacer(modifier = Modifier.height(8.dp))

            ActionButton(
                text = stringResource(R.string.screenshot_save),
                color = shellColors.primaryAction,
                enabled = !actionInProgress && resolvedPath != null,
                onClick = {
                    val inputPath = resolvedPath ?: return@ActionButton
                    actionInProgress = true
                    scope.launch {
                        val ok = withContext(Dispatchers.IO) {
                            val fileName = "Shell++_${shot?.index ?: System.currentTimeMillis()}"
                            gallerySaver.saveFileToGallery(inputPath, fileName)
                        }
                        actionInProgress = false
                        Toast.makeText(
                            context,
                            if (ok) context.getString(R.string.screenshot_saved) else context.getString(R.string.save_failed),
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                }
            )
            Spacer(modifier = Modifier.height(8.dp))

            ActionButton(
                text = stringResource(R.string.delete_screenshot),
                color = shellColors.destructiveAction,
                enabled = shot != null && !actionInProgress,
                onClick = {
                    shot?.shotId?.let { shellViewModel.deleteScreenshot(it) }
                    navController.popBackStack()
                }
            )
            Spacer(modifier = Modifier.height(13.dp))
        }
    }
}

private enum class SaveResult {
    Success,
    CompositeFailed,
    SaveFailed,
}

private fun prepareDevice(context: Context, cacheDir: File): File? {
    val out = File(cacheDir, "device_9pro.png")
    if (!out.exists()) {
        context.resources.openRawResource(R.raw.device_9pro).use { input ->
            out.outputStream().use { output -> input.copyTo(output) }
        }
    }
    return if (out.exists()) out else null
}

@Composable
private fun ActionButton(text: String, color: Color, enabled: Boolean, onClick: () -> Unit) {
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp),
        colors = CardColors(
            color = if (enabled) color else shellColors.disabledAction,
            contentColor = Color.White
        ),
        cornerRadius = 15.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text(
                text = text,
                fontSize = 17.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = FontFamily.Default,
                color = Color.White
            )
        }
    }
}
