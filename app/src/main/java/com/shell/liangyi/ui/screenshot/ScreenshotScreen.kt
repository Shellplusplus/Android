package com.shell.liangyi.ui.screenshot

import android.util.Base64
import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.state.ToggleableState
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.model.Screenshot
import java.io.File
import top.yukonga.miuix.kmp.basic.Button
import top.yukonga.miuix.kmp.basic.ButtonDefaults
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Checkbox
import top.yukonga.miuix.kmp.basic.Scaffold
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.TextButton
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

private val PagePadding = 16.dp
private val CardCornerRadius = 16.dp
private val ButtonCornerRadius = 8.dp
private val ImageCornerRadius = 12.dp
private val GridSpacing = 12.dp
private val statusDotDisconnected = Color(0xFFFF4444)
private val statusDotConnected = Color(0xFF4CAF50)

@Composable
fun ScreenshotScreen(
    viewModel: ScreenshotViewModel = viewModel()
) {
    val screenshots by viewModel.screenshots.collectAsState()
    val syncState by viewModel.syncState.collectAsState()
    val receiveProgress by viewModel.receiveProgress.collectAsState()
    val connectionState by viewModel.connectionState.collectAsState(initial = ConnectionState.DISCONNECTED)
    val context = LocalContext.current
    val colors = MiuixTheme.colorScheme
    val gridState = rememberLazyGridState()

    var selectMode by rememberSaveable { mutableStateOf(false) }
    var selectedIds by rememberSaveable { mutableStateOf(setOf<String>()) }

    val previewScreenshot = viewModel.previewScreenshot
    val allSelected = screenshots.isNotEmpty() && selectedIds.size == screenshots.size

    fun exitSelectMode() {
        selectMode = false
        selectedIds = emptySet()
    }

    fun toggleShotSelection(item: Screenshot) {
        selectedIds = selectedIds.toMutableSet().apply {
            if (!add(item.shotId)) {
                remove(item.shotId)
            }
        }
        if (selectedIds.isEmpty()) {
            selectMode = false
        }
    }

    fun enterSelectMode(item: Screenshot) {
        selectMode = true
        selectedIds = selectedIds.toMutableSet().apply { add(item.shotId) }
    }

    fun toggleSelectAll() {
        selectedIds = if (allSelected) {
            emptySet()
        } else {
            screenshots.map { it.shotId }.toSet()
        }
        selectMode = selectedIds.isNotEmpty()
    }

    Scaffold(
        containerColor = colors.background,
        content = { innerPadding ->
            LazyVerticalGrid(
                columns = GridCells.Fixed(2),
                state = gridState,
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                contentPadding = PaddingValues(
                    start = PagePadding,
                    end = PagePadding,
                    top = 20.dp,
                    bottom = 28.dp
                ),
                verticalArrangement = Arrangement.spacedBy(GridSpacing),
                horizontalArrangement = Arrangement.spacedBy(GridSpacing)
            ) {
                item(span = { GridItemSpan(maxLineSpan) }) {
                    Text(
                        text = "截图同步",
                        color = colors.onBackground,
                        fontSize = 32.sp,
                        fontWeight = FontWeight.Bold
                    )
                }

                item(span = { GridItemSpan(maxLineSpan) }) {
                    ConnectionStatusCard(
                        connectionState = connectionState,
                        onRefresh = { viewModel.checkConnection() }
                    )
                }

                item(span = { GridItemSpan(maxLineSpan) }) {
                    Text(
                        text = "进入设置可开启调试日志，排查连接问题。",
                        color = colors.onBackgroundVariant,
                        fontSize = 14.sp,
                        modifier = Modifier.padding(horizontal = 4.dp)
                    )
                }

                item(span = { GridItemSpan(maxLineSpan) }) {
                    Button(
                        onClick = { viewModel.requestFromWatch() },
                        modifier = Modifier.fillMaxWidth(),
                        enabled = syncState !is ScreenshotReceiver.SyncState.Receiving,
                        cornerRadius = ButtonCornerRadius,
                        colors = ButtonDefaults.buttonColorsPrimary()
                    ) {
                        Text(
                            text = "从手表获取截图",
                            color = colors.onPrimary,
                            fontSize = 17.sp,
                            fontWeight = FontWeight.SemiBold
                        )
                    }
                }

                if (receiveProgress.isNotEmpty() && syncState !is ScreenshotReceiver.SyncState.Idle) {
                    item(span = { GridItemSpan(maxLineSpan) }) {
                        SyncProgressCard(syncState = syncState, progress = receiveProgress)
                    }
                }

                if (selectMode) {
                    item(span = { GridItemSpan(maxLineSpan) }) {
                        SelectionActionCard(
                            selectedCount = selectedIds.size,
                            allSelected = allSelected,
                            onToggleSelectAll = { toggleSelectAll() },
                            onDone = { exitSelectMode() }
                        )
                    }
                }

                item(span = { GridItemSpan(maxLineSpan) }) {
                    Text(
                        text = "截图 · ${screenshots.size}",
                        color = colors.onBackground,
                        fontSize = 24.sp,
                        fontWeight = FontWeight.Bold
                    )
                }

                if (screenshots.isEmpty()) {
                    item(span = { GridItemSpan(maxLineSpan) }) {
                        EmptyState()
                    }
                } else {
                    items(
                        items = screenshots,
                        key = { it.shotId }
                    ) { screenshot ->
                        ScreenshotGridCard(
                            screenshot = screenshot,
                            selected = selectedIds.contains(screenshot.shotId),
                            selectMode = selectMode,
                            onClick = { viewModel.onScreenshotClick(screenshot) },
                            onLongClick = {
                                if (selectMode) {
                                    toggleShotSelection(screenshot)
                                } else {
                                    enterSelectMode(screenshot)
                                }
                            },
                            onToggleSelection = { toggleShotSelection(screenshot) }
                        )
                    }
                }
            }
        }
    )

    previewScreenshot?.let { screenshot ->
        ScreenshotPreviewDialog(
            screenshot = screenshot,
            onDismiss = { viewModel.dismissPreview() },
            onSave = {
                viewModel.saveToGallery(screenshot) { success ->
                    Toast.makeText(
                        context,
                        if (success) "已保存到相册" else "保存失败：图片数据无效",
                        Toast.LENGTH_SHORT
                    ).show()
                }
            },
            onDelete = {
                viewModel.deleteScreenshot(screenshot.shotId)
                selectedIds = selectedIds - screenshot.shotId
                if (selectedIds.isEmpty()) {
                    selectMode = false
                }
                viewModel.dismissPreview()
                Toast.makeText(context, "已删除", Toast.LENGTH_SHORT).show()
            },
            selectMode = selectMode,
            previewSelected = selectedIds.contains(screenshot.shotId),
            onToggleSelection = { toggleShotSelection(screenshot) }
        )
    }
}

@Composable
private fun ConnectionStatusCard(
    connectionState: ConnectionState,
    onRefresh: () -> Unit
) {
    val colors = MiuixTheme.colorScheme
    val statusColor = when (connectionState) {
        ConnectionState.CONNECTED -> statusDotConnected
        ConnectionState.CONNECTING -> Color(0xFFFF9F0A)
        ConnectionState.DISCONNECTED,
        ConnectionState.ERROR -> statusDotDisconnected
    }
    val statusText = when (connectionState) {
        ConnectionState.CONNECTED -> "手表快应用已连接"
        ConnectionState.CONNECTING -> "正在连接手表快应用"
        ConnectionState.DISCONNECTED -> "手表快应用未连接"
        ConnectionState.ERROR -> "手表快应用连接错误"
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        cornerRadius = CardCornerRadius,
        colors = CardColors(
            color = colors.surface,
            contentColor = colors.onSurface
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(10.dp)
                    .clip(CircleShape)
                    .background(statusColor)
            )
            Spacer(modifier = Modifier.width(12.dp))
            Text(
                text = statusText,
                color = colors.onSurface,
                fontSize = 17.sp,
                modifier = Modifier.weight(1f)
            )
            TextButton(
                text = "刷新",
                onClick = onRefresh,
                colors = ButtonDefaults.textButtonColorsPrimary(
                    color = Color.Transparent,
                    disabledColor = Color.Transparent,
                    textColor = colors.primary,
                    disabledTextColor = colors.primary.copy(alpha = 0.4f)
                ),
                insideMargin = PaddingValues(horizontal = 0.dp, vertical = 0.dp),
                minWidth = 0.dp
            )
        }
    }
}

@Composable
private fun SyncProgressCard(
    syncState: ScreenshotReceiver.SyncState,
    progress: String
) {
    val colors = MiuixTheme.colorScheme
    val tint = when (syncState) {
        is ScreenshotReceiver.SyncState.Success -> statusDotConnected
        is ScreenshotReceiver.SyncState.Error -> colors.error
        else -> colors.primary
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        cornerRadius = CardCornerRadius,
        colors = CardColors(
            color = colors.surface,
            contentColor = colors.onSurface
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            if (syncState is ScreenshotReceiver.SyncState.Receiving ||
                syncState is ScreenshotReceiver.SyncState.WaitingAck
            ) {
                CircularProgressIndicator(
                    modifier = Modifier.size(16.dp),
                    strokeWidth = 2.dp,
                    color = tint
                )
                Spacer(modifier = Modifier.width(10.dp))
            }
            Text(
                text = progress,
                color = tint,
                fontSize = 15.sp,
                fontWeight = FontWeight.Medium
            )
        }
    }
}

@Composable
private fun SelectionActionCard(
    selectedCount: Int,
    allSelected: Boolean,
    onToggleSelectAll: () -> Unit,
    onDone: () -> Unit
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        cornerRadius = CardCornerRadius,
        colors = CardColors(
            color = colors.surface,
            contentColor = colors.onSurface
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextButton(
                text = if (allSelected) "取消全选" else "全选",
                onClick = onToggleSelectAll,
                colors = ButtonDefaults.textButtonColorsPrimary(
                    color = Color.Transparent,
                    disabledColor = Color.Transparent,
                    textColor = colors.primary,
                    disabledTextColor = colors.primary.copy(alpha = 0.4f)
                ),
                insideMargin = PaddingValues(0.dp),
                minWidth = 0.dp
            )
            Spacer(modifier = Modifier.width(12.dp))
            Text(
                text = "已选 $selectedCount",
                color = colors.onSurfaceSecondary,
                fontSize = 14.sp,
                modifier = Modifier.weight(1f)
            )
            TextButton(
                text = "完成",
                onClick = onDone,
                colors = ButtonDefaults.textButtonColorsPrimary(
                    color = Color.Transparent,
                    disabledColor = Color.Transparent,
                    textColor = colors.primary,
                    disabledTextColor = colors.primary.copy(alpha = 0.4f)
                ),
                insideMargin = PaddingValues(0.dp),
                minWidth = 0.dp
            )
        }
    }
}

@Composable
private fun EmptyState() {
    val colors = MiuixTheme.colorScheme
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = 48.dp, bottom = 24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "暂无截图",
            color = colors.onSurface,
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "点击上方「从手表获取截图」开始同步",
            color = colors.onSurfaceSecondary,
            fontSize = 14.sp
        )
    }
}

@Composable
private fun ScreenshotGridCard(
    screenshot: Screenshot,
    selected: Boolean,
    selectMode: Boolean,
    onClick: () -> Unit,
    onLongClick: () -> Unit,
    onToggleSelection: () -> Unit
) {
    val colors = MiuixTheme.colorScheme
    val imageModel = remember(screenshot.localFilePath, screenshot.imageData) {
        when {
            screenshot.localFilePath.isNotEmpty() -> File(screenshot.localFilePath)
            screenshot.imageData.isNotEmpty() -> {
                try {
                    Base64.decode(screenshot.imageData, Base64.DEFAULT)
                } catch (_: Exception) {
                    null
                }
            }

            else -> null
        }
    }
    val interactionSource = remember { MutableInteractionSource() }
    val pressed by interactionSource.collectIsPressedAsState()
    val scale = if (pressed) 0.97f else 1f

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .scale(scale),
        cornerRadius = CardCornerRadius,
        colors = CardColors(
            color = colors.surface,
            contentColor = colors.onSurface
        ),
        pressFeedbackType = PressFeedbackType.Sink,
        holdDownState = true,
        onClick = onClick,
        onLongPress = onLongClick
    ) {
        Box(modifier = Modifier.fillMaxWidth()) {
            Column(
                modifier = Modifier.padding(12.dp)
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .aspectRatio(1f)
                        .clip(RoundedCornerShape(ImageCornerRadius))
                        .background(colors.surfaceContainer),
                    contentAlignment = Alignment.Center
                ) {
                    if (imageModel != null) {
                        AsyncImage(
                            model = ImageRequest.Builder(LocalContext.current)
                                .data(imageModel)
                                .crossfade(true)
                                .build(),
                            contentDescription = "截图预览",
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Crop
                        )
                    } else {
                        CircularProgressIndicator(
                            modifier = Modifier.size(22.dp),
                            strokeWidth = 2.dp,
                            color = colors.primary
                        )
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                Text(
                    text = screenshot.displayTitle.ifEmpty { screenshot.shotId },
                    color = colors.onSurface,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )

                if (screenshot.transferHint.isNotEmpty()) {
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = screenshot.transferHint,
                        color = colors.error,
                        fontSize = 12.sp,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                }

                Spacer(modifier = Modifier.height(4.dp))

                Text(
                    text = screenshot.capturedAt,
                    color = colors.onSurfaceSecondary,
                    fontSize = 13.sp,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )
            }

            if (selectMode) {
                Box(
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .padding(10.dp)
                ) {
                    Checkbox(
                        state = if (selected) ToggleableState.On else ToggleableState.Off,
                        onClick = onToggleSelection
                    )
                }
            }
        }
    }
}
