package com.shell.liangyi.ui.screenshot

import android.content.Context
import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.rounded.AutoAwesome
import androidx.compose.material.icons.rounded.CheckCircleOutline
import androidx.compose.material.icons.rounded.DeleteOutline
import androidx.compose.material.icons.rounded.Download
import androidx.compose.material.icons.rounded.Schedule
import androidx.compose.material.icons.rounded.Sync
import androidx.compose.material.icons.rounded.Widgets
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.produceState
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellColors
import com.shell.liangyi.ui.theme.ShellTheme
import com.shell.liangyi.util.FileCacheTrimmer
import com.shell.liangyi.util.GallerySaver
import com.shell.liangyi.util.ImageProcessor
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import java.io.File
import kotlin.coroutines.cancellation.CancellationException

private const val PROCESSED_IMAGE_CACHE_LIMIT = 32

@Composable
fun ScreenshotDetailScreen(
    shotId: String,
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val screenshots by shellViewModel.screenshots.collectAsStateWithLifecycle()
    val shot = screenshots.find { it.shotId == shotId }
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    var actionInProgress by remember { mutableStateOf(false) }

    val resolvedPath = remember(shot?.localFilePath, shotId) {
        shot?.localFilePath?.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shotId)
    }
    val hasLocalFile = resolvedPath?.let { File(it).exists() } == true
    val transferRevision = shot?.let {
        "${it.isComplete}-${it.receivedChunks}-${it.receivedBytes}-${it.localFilePath}"
    }
    val cacheDir = remember {
        File(shellViewModel.appContext().cacheDir, "processed").apply {
            mkdirs()
            FileCacheTrimmer.trim(this, PROCESSED_IMAGE_CACHE_LIMIT)
        }
    }
    val roundedPath by produceState<String?>(initialValue = null, resolvedPath, transferRevision, cacheDir) {
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
            FileCacheTrimmer.trim(cacheDir, PROCESSED_IMAGE_CACHE_LIMIT)
            out.absolutePath
        }
    }

    val gallerySaver = remember { GallerySaver(shellViewModel.appContext()) }
    val displayTitle = shot?.displayTitle?.takeIf { it.isNotBlank() }
        ?: shot?.index?.takeIf { it > 0 }?.let { "#$it" }
        ?: "#$shotId"
    val statusVisual = detailStatusVisual(
        shot = shot,
        hasLocalFile = hasLocalFile,
        shellColors = ShellTheme.colors,
    )
    val screenshotSavedText = stringResource(R.string.screenshot_saved)
    val compositeFailedText = stringResource(R.string.composite_failed)
    val saveFailedText = stringResource(R.string.save_failed)

    ShellBackScaffold(
        title = displayTitle,
        onBack = { navController.popBackStack() }
    ) {
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 12.dp),
            contentPadding = PaddingValues(top = 12.dp, bottom = 24.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            item {
                PreviewActionCard(
                    title = stringResource(R.string.screenshot_preview),
                    subtitle = shot?.capturedAt?.ifBlank { shotId } ?: shotId,
                    status = statusVisual,
                    roundedPath = roundedPath,
                    shot = shot,
                    shellViewModel = shellViewModel,
                    hasLocalFile = hasLocalFile,
                    actionInProgress = actionInProgress,
                    onFrameClick = {
                        if (actionInProgress) return@PreviewActionCard
                        val inputPath = resolvedPath ?: return@PreviewActionCard
                        actionInProgress = true
                        scope.launch {
                            val result = try {
                                withContext(Dispatchers.IO) {
                                    val deviceFile = prepareDevice(context, cacheDir)
                                        ?: return@withContext SaveResult.CompositeFailed
                                    val out = File(cacheDir, "framed_${File(inputPath).name}")
                                    if (!ImageProcessor.compositeWithFrame(inputPath, deviceFile.absolutePath, out.absolutePath)) {
                                        return@withContext SaveResult.CompositeFailed
                                    }
                                    FileCacheTrimmer.trim(cacheDir, PROCESSED_IMAGE_CACHE_LIMIT)
                                    val fileName = "Shell++_framed_${shot?.index ?: System.currentTimeMillis()}"
                                    if (gallerySaver.saveFileToGallery(out.absolutePath, fileName)) {
                                        SaveResult.Success
                                    } else {
                                        SaveResult.SaveFailed
                                    }
                                }
                            } catch (error: Exception) {
                                if (error is CancellationException) {
                                    throw error
                                }
                                SaveResult.CompositeFailed
                            } finally {
                                actionInProgress = false
                            }
                            Toast.makeText(
                                context,
                                when (result) {
                                    SaveResult.Success -> screenshotSavedText
                                    SaveResult.CompositeFailed -> compositeFailedText
                                    SaveResult.SaveFailed -> saveFailedText
                                },
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                    },
                    onSaveClick = {
                        if (actionInProgress) return@PreviewActionCard
                        val inputPath = resolvedPath ?: return@PreviewActionCard
                        actionInProgress = true
                        scope.launch {
                            val ok = try {
                                withContext(Dispatchers.IO) {
                                    val fileName = "Shell++_${shot?.index ?: System.currentTimeMillis()}"
                                    gallerySaver.saveFileToGallery(inputPath, fileName)
                                }
                            } catch (error: Exception) {
                                if (error is CancellationException) {
                                    throw error
                                }
                                false
                            } finally {
                                actionInProgress = false
                            }
                            Toast.makeText(
                                context,
                                if (ok) screenshotSavedText else saveFailedText,
                                Toast.LENGTH_SHORT
                            ).show()
                        }
                    },
                    onDeleteClick = {
                        shot?.shotId?.let(shellViewModel::showDeleteScreenshotConfirm)
                    },
                )
            }

            item {
                DetailInfoCard(
                    shot = shot,
                    hasLocalFile = hasLocalFile,
                    status = statusVisual,
                )
            }
        }
    }
}

private data class DetailStatusVisual(
    val label: String,
    val description: String,
    val accentColor: Color,
    val cardColor: Color,
    val icon: ImageVector,
)

@Composable
private fun PreviewActionCard(
    title: String,
    subtitle: String,
    status: DetailStatusVisual,
    roundedPath: String?,
    shot: Screenshot?,
    shellViewModel: ShellViewModel,
    hasLocalFile: Boolean,
    actionInProgress: Boolean,
    onFrameClick: () -> Unit,
    onSaveClick: () -> Unit,
    onDeleteClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = status.cardColor,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = title,
                        fontSize = 18.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = colors.onSurface,
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = subtitle,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Medium,
                        color = colors.onSurfaceVariantSummary,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                    )
                }
                StatusBadge(status = status)
            }

            Spacer(modifier = Modifier.height(16.dp))
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 8.dp, vertical = 8.dp),
                horizontalArrangement = Arrangement.spacedBy(14.dp),
                verticalAlignment = Alignment.CenterVertically,
            ) {
                Box(
                    modifier = Modifier
                        .weight(1f)
                        .heightIn(min = 200.dp, max = 260.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    if (roundedPath != null) {
                        AsyncImage(
                            model = ImageRequest.Builder(shellViewModel.appContext())
                                .data(File(roundedPath))
                                .crossfade(true)
                                .build(),
                            contentDescription = stringResource(R.string.screenshot_preview),
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Fit,
                        )
                    } else if (shot != null && !shot.isComplete) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Icon(
                                imageVector = Icons.Rounded.Sync,
                                contentDescription = null,
                                modifier = Modifier.size(30.dp),
                                tint = Color.White.copy(alpha = 0.92f),
                            )
                            Spacer(modifier = Modifier.height(10.dp))
                            Text(
                                text = stringResource(
                                    R.string.screenshot_transferring,
                                    shot.receivedChunks,
                                    shot.totalChunks
                                ),
                                fontSize = 14.sp,
                                fontWeight = FontWeight.Medium,
                                color = colors.onSurface,
                            )
                        }
                    } else {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Icon(
                                imageVector = Icons.Rounded.Widgets,
                                contentDescription = null,
                                modifier = Modifier.size(30.dp),
                                tint = colors.onSurfaceVariantSummary,
                            )
                            Spacer(modifier = Modifier.height(10.dp))
                            Text(
                                text = stringResource(R.string.no_preview),
                                fontSize = 14.sp,
                                fontWeight = FontWeight.Medium,
                                color = colors.onSurfaceVariantSummary,
                            )
                        }
                    }
                }

                Column(
                    modifier = Modifier.width(164.dp),
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    CompactActionCard(
                        title = stringResource(R.string.framed_screenshot),
                        icon = Icons.Rounded.AutoAwesome,
                        accentColor = ShellTheme.colors.primaryAction,
                        enabled = !actionInProgress && hasLocalFile,
                        onClick = onFrameClick,
                    )
                    CompactActionCard(
                        title = stringResource(R.string.screenshot_save),
                        icon = Icons.Rounded.Download,
                        accentColor = ShellTheme.colors.primaryAction,
                        enabled = !actionInProgress && hasLocalFile,
                        onClick = onSaveClick,
                    )
                    CompactActionCard(
                        title = stringResource(R.string.delete_screenshot),
                        icon = Icons.Rounded.DeleteOutline,
                        accentColor = ShellTheme.colors.destructiveAction,
                        enabled = shot != null && !actionInProgress,
                        destructive = true,
                        onClick = onDeleteClick,
                    )
                }
            }

            if (!shot?.transferHint.isNullOrBlank()) {
                Spacer(modifier = Modifier.height(12.dp))
                Text(
                    text = shot.transferHint,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                )
            }
        }
    }
}

@Composable
private fun DetailInfoCard(
    shot: Screenshot?,
    hasLocalFile: Boolean,
    status: DetailStatusVisual,
) {
    val colors = MiuixTheme.colorScheme

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp),
        ) {
            Text(
                text = "传输详情",
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
            InfoRow(
                icon = Icons.Rounded.Schedule,
                label = "拍摄时间",
                value = shot?.capturedAt?.ifBlank { "未知" } ?: "未知",
            )
            InfoRow(
                icon = status.icon,
                label = "当前状态",
                value = status.description,
            )
            InfoRow(
                icon = Icons.Rounded.CheckCircleOutline,
                label = "本地缓存",
                value = if (hasLocalFile) "图片已就绪，可直接导出" else "尚未生成可用预览",
            )
            if (shot != null && shot.totalChunks > 0) {
                InfoRow(
                    icon = Icons.Rounded.Sync,
                    label = "分片进度",
                    value = "${shot.receivedChunks}/${shot.totalChunks}",
                )
            }
        }
    }
}

@Composable
private fun StatusBadge(status: DetailStatusVisual) {
    Card(
        colors = CardColors(
            color = status.accentColor.copy(alpha = 0.14f),
            contentColor = status.accentColor,
        ),
        cornerRadius = 999.dp,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .background(status.accentColor, CircleShape)
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                text = status.label,
                fontSize = 12.sp,
                fontWeight = FontWeight.SemiBold,
                color = status.accentColor,
            )
        }
    }
}

@Composable
private fun InfoRow(
    icon: ImageVector,
    label: String,
    value: String,
    trailing: String? = null,
) {
    val colors = MiuixTheme.colorScheme

    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Box(
            modifier = Modifier
                .size(38.dp)
                .background(colors.secondaryContainer, CircleShape),
            contentAlignment = Alignment.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = colors.onSecondaryContainer,
            )
        }
        Spacer(modifier = Modifier.width(12.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = label,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = value,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
        }
        if (!trailing.isNullOrBlank()) {
            Spacer(modifier = Modifier.width(12.dp))
            Text(
                text = trailing,
                fontSize = 11.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun CompactActionCard(
    title: String,
    icon: ImageVector,
    accentColor: Color,
    enabled: Boolean,
    onClick: () -> Unit,
    destructive: Boolean = false,
) {
    val colors = MiuixTheme.colorScheme
    val containerColor = when {
        !enabled -> ShellTheme.colors.cardBackground.copy(alpha = 0.72f)
        destructive -> accentColor.copy(alpha = 0.18f)
        else -> ShellTheme.colors.cardBackground
    }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .height(52.dp),
        colors = CardColors(
            color = containerColor,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 12.dp, vertical = 8.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(24.dp)
                    .background(
                        color = accentColor.copy(alpha = if (enabled) 0.14f else 0.08f),
                        shape = CircleShape,
                    ),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    modifier = Modifier.size(14.dp),
                    tint = if (enabled) accentColor else colors.outline,
                )
            }
            Text(
                modifier = Modifier.weight(1f),
                text = title,
                fontSize = 12.sp,
                fontWeight = FontWeight.SemiBold,
                color = if (enabled) colors.onSurface else colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Clip,
            )
            Icon(
                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                contentDescription = null,
                modifier = Modifier.size(14.dp),
                tint = if (enabled) colors.outline else colors.outline.copy(alpha = 0.45f),
            )
        }
    }
}

private fun detailStatusVisual(
    shot: Screenshot?,
    hasLocalFile: Boolean,
    shellColors: ShellColors,
): DetailStatusVisual {
    return when {
        shot == null -> DetailStatusVisual(
            label = "未找到",
            description = "当前截图记录不存在或已被删除",
            accentColor = shellColors.danger,
            cardColor = shellColors.danger.copy(alpha = 0.12f),
            icon = Icons.Rounded.DeleteOutline,
        )
        shot.isComplete && hasLocalFile -> DetailStatusVisual(
            label = "已就绪",
            description = "截图已完整接收，可以保存或生成带壳图",
            accentColor = shellColors.success,
            cardColor = shellColors.success.copy(alpha = 0.14f),
            icon = Icons.Rounded.CheckCircleOutline,
        )
        !shot.isComplete -> DetailStatusVisual(
            label = "传输中",
            description = "正在接收图片分片 ${shot.receivedChunks}/${shot.totalChunks}",
            accentColor = shellColors.warning,
            cardColor = shellColors.warning.copy(alpha = 0.16f),
            icon = Icons.Rounded.Sync,
        )
        else -> DetailStatusVisual(
            label = "待恢复",
            description = "记录仍在，但本地预览文件暂时不可用",
            accentColor = shellColors.warning,
            cardColor = shellColors.warning.copy(alpha = 0.16f),
            icon = Icons.Rounded.Widgets,
        )
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
