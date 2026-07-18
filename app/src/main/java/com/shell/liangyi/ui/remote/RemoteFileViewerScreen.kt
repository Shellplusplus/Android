package com.shell.liangyi.ui.remote

import androidx.compose.foundation.background
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.collectIsPressedAsState
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.automirrored.rounded.Article
import androidx.compose.material.icons.automirrored.rounded.InsertDriveFile
import androidx.compose.material.icons.automirrored.rounded.Subject
import androidx.compose.material.icons.rounded.Folder
import androidx.compose.material.icons.rounded.Image
import androidx.compose.material.icons.rounded.Refresh
import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.SizeTransform
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.animation.togetherWith
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.RemoteFileItem
import com.shell.liangyi.core.RemoteFileViewMode
import com.shell.liangyi.core.RemoteFileViewerState
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import java.io.File

@Composable
fun RemoteFileViewerScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val state by shellViewModel.remoteFileViewerState.collectAsStateWithLifecycle()
    val connectionState by shellViewModel.connectionState.collectAsStateWithLifecycle(
        initialValue = ConnectionState.DISCONNECTED,
    )
    val scrollBehavior = MiuixScrollBehavior()
    val hasRemoteState = state.isLoading ||
        state.items.isNotEmpty() ||
        state.selectedPath.isNotBlank() ||
        state.currentPath != "/"
    val displayState = state
    val animatedContentState = remember(displayState) {
        RemoteViewerAnimatedState(displayState)
    }
    var hasTriggeredInitialLoad by remember { mutableStateOf(false) }

    LaunchedEffect(connectionState) {
        when (connectionState) {
            ConnectionState.CONNECTED -> {
                if (!hasTriggeredInitialLoad) {
                    hasTriggeredInitialLoad = true
                    if (!hasRemoteState) {
                        shellViewModel.refreshRemoteFileViewerRoot()
                    }
                }
            }

            ConnectionState.DISCONNECTED,
            ConnectionState.CONNECTING,
            ConnectionState.ERROR,
            -> {
                hasTriggeredInitialLoad = false
            }
        }
    }

    ShellBackScaffold(
        title = stringResource(R.string.remote_file_viewer),
        onBack = {
            when (displayState.viewMode) {
                RemoteFileViewMode.IMAGE,
                RemoteFileViewMode.TEXT,
                RemoteFileViewMode.HEX -> shellViewModel.showRemoteFileInfo()

                RemoteFileViewMode.INFO -> shellViewModel.showRemoteFileList()
                RemoteFileViewMode.LIST -> navController.popBackStack()
            }
        },
        collapseTitleOnScroll = true,
        scrollBehavior = scrollBehavior,
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            item { Spacer(modifier = Modifier.height(12.dp)) }
            item {
                FileHeroCard(
                    state = displayState,
                    connectionState = connectionState,
                )
            }
            item {
                FilePrimaryActions(
                    state = displayState,
                    onRefresh = {
                        when (displayState.viewMode) {
                            RemoteFileViewMode.LIST -> shellViewModel.listRemoteFilePath(displayState.currentPath)
                            RemoteFileViewMode.INFO -> shellViewModel.openRemoteFileInfo(displayState.selectedPath)
                            RemoteFileViewMode.TEXT -> shellViewModel.openRemoteFileText()
                            RemoteFileViewMode.HEX -> shellViewModel.openRemoteFileHex(displayState.hexOffset)
                            RemoteFileViewMode.IMAGE -> shellViewModel.openRemoteFileImage()
                        }
                    },
                    onSecondary = {
                        when (displayState.viewMode) {
                            RemoteFileViewMode.LIST -> shellViewModel.listRemoteFilePath(parentPath(displayState.currentPath))
                            RemoteFileViewMode.INFO -> shellViewModel.showRemoteFileList()
                            RemoteFileViewMode.TEXT,
                            RemoteFileViewMode.HEX,
                            RemoteFileViewMode.IMAGE -> shellViewModel.showRemoteFileInfo()
                        }
                    },
                )
            }

            item {
                AnimatedContent(
                    targetState = animatedContentState,
                    transitionSpec = {
                        val forward = targetState.navigationOrder >= initialState.navigationOrder
                        val enter = fadeIn(animationSpec = tween(durationMillis = 240)) +
                            slideInHorizontally(
                                animationSpec = tween(durationMillis = 280),
                                initialOffsetX = { fullWidth ->
                                    if (forward) fullWidth / 7 else -fullWidth / 7
                                },
                            )
                        val exit = fadeOut(animationSpec = tween(durationMillis = 200)) +
                            slideOutHorizontally(
                                animationSpec = tween(durationMillis = 240),
                                targetOffsetX = { fullWidth ->
                                    if (forward) -fullWidth / 9 else fullWidth / 9
                                },
                            )
                        enter togetherWith exit using SizeTransform(clip = false)
                    },
                    label = "remoteFileViewerContent",
                ) { target ->
                    RemoteFileModeContent(
                        state = target.snapshot,
                        onListItemClick = { item ->
                            if (item.isDir) {
                                shellViewModel.listRemoteFilePath(item.path)
                            } else {
                                shellViewModel.openRemoteFileInfo(item.path)
                            }
                        },
                        onOpenText = { targetState ->
                            shellViewModel.openRemoteFileText()
                        },
                        onOpenHex = { targetState ->
                            shellViewModel.openRemoteFileHex(0)
                        },
                        onOpenImage = { targetState ->
                            shellViewModel.openRemoteFileImage()
                        },
                        onPreviousHexPage = { targetState ->
                            shellViewModel.openRemoteFileHex((targetState.hexOffset - 128).coerceAtLeast(0))
                        },
                        onNextHexPage = { targetState ->
                            shellViewModel.openRemoteFileHex(targetState.hexOffset + 128)
                        },
                    )
                }
            }
            item { Spacer(modifier = Modifier.height(24.dp)) }
        }
    }
}

@Composable
private fun RemoteFileModeContent(
    state: RemoteFileViewerState,
    onListItemClick: (RemoteFileItem) -> Unit,
    onOpenText: (RemoteFileViewerState) -> Unit,
    onOpenHex: (RemoteFileViewerState) -> Unit,
    onOpenImage: (RemoteFileViewerState) -> Unit,
    onPreviousHexPage: (RemoteFileViewerState) -> Unit,
    onNextHexPage: (RemoteFileViewerState) -> Unit,
) {
    val fileTooLarge = state.selectedSizeBytes > 3L * 1024L * 1024L
    val isWaitingForInitialDirectory = state.viewMode == RemoteFileViewMode.LIST &&
        !state.hasLoadedCurrentPath &&
        state.items.isEmpty()

    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        when (state.viewMode) {
            RemoteFileViewMode.LIST -> {
                if (state.items.isEmpty()) {
                    FileEmptyCard(
                        title = if (isWaitingForInitialDirectory) {
                            stringResource(R.string.remote_file_status_loading)
                        } else {
                            stringResource(R.string.remote_file_empty)
                        },
                        summary = if (state.isLoading || isWaitingForInitialDirectory) {
                            stringResource(R.string.remote_file_loading)
                        } else {
                            stringResource(R.string.remote_file_empty_desc)
                        },
                    )
                } else {
                    Column(
                        modifier = Modifier.fillMaxWidth(),
                        verticalArrangement = Arrangement.spacedBy(0.dp),
                    ) {
                        state.items.forEachIndexed { index, item ->
                            RemoteListCard(
                                item = item,
                                depth = 0,
                                ancestorHasNext = emptyList(),
                                isFirstSibling = index == 0,
                                isLastSibling = index == state.items.lastIndex,
                                hasChildren = item.isDir,
                                isExpanded = false,
                                onClick = { onListItemClick(item) },
                            )
                        }
                    }
                }
            }

            RemoteFileViewMode.INFO -> {
                if (fileTooLarge) {
                    FileEmptyCard(
                        title = stringResource(R.string.remote_file_too_large),
                        summary = stringResource(R.string.remote_file_too_large_desc),
                    )
                } else {
                    RemoteActionCard(
                        title = stringResource(R.string.remote_file_open_text),
                        summary = stringResource(R.string.remote_file_open_text_desc),
                        icon = Icons.AutoMirrored.Rounded.Subject,
                        onClick = { onOpenText(state) },
                    )
                    RemoteActionCard(
                        title = stringResource(R.string.remote_file_open_hex),
                        summary = stringResource(R.string.remote_file_open_hex_desc),
                        icon = Icons.AutoMirrored.Rounded.Article,
                        onClick = { onOpenHex(state) },
                    )
                    RemoteActionCard(
                        title = stringResource(R.string.remote_file_open_image),
                        summary = stringResource(R.string.remote_file_open_image_desc),
                        icon = Icons.Rounded.Image,
                        onClick = { onOpenImage(state) },
                    )
                }
            }

            RemoteFileViewMode.TEXT,
            RemoteFileViewMode.HEX -> {
                RemoteTextContentCard(
                    text = if (state.isLoading) {
                        stringResource(R.string.remote_file_loading)
                    } else {
                        state.viewerText
                    },
                    monospace = state.viewMode == RemoteFileViewMode.HEX,
                )
                if (state.viewMode == RemoteFileViewMode.HEX) {
                    RemoteDualActionRow(
                        leftTitle = stringResource(R.string.remote_file_previous_page),
                        rightTitle = stringResource(R.string.remote_file_next_page),
                        onLeft = { onPreviousHexPage(state) },
                        onRight = { onNextHexPage(state) },
                    )
                }
            }

            RemoteFileViewMode.IMAGE -> {
                RemoteImageCard(
                    imagePath = state.viewerImagePath,
                    isLoading = state.isLoading,
                )
            }
        }

        if (state.viewerErrorMessage.isNotBlank()) {
            FileEmptyCard(
                title = stringResource(R.string.remote_tool_request_failed),
                summary = state.viewerErrorMessage,
            )
        }
    }
}

@Composable
private fun FileHeroCard(
    state: RemoteFileViewerState,
    connectionState: ConnectionState,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val accent = when {
        state.viewerErrorMessage.isNotBlank() -> shellColors.danger
        state.isLoading -> shellColors.warning
        connectionState == ConnectionState.CONNECTED -> shellColors.success
        else -> shellColors.primaryAction
    }
    val title = when {
        state.viewMode == RemoteFileViewMode.LIST -> modeLabel(state.viewMode)
        state.selectedName.isNotBlank() -> state.selectedName
        else -> modeLabel(state.viewMode)
    }
    val summary = currentDisplayPath(state)

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    brush = Brush.linearGradient(
                        colors = listOf(
                            accent.copy(alpha = 0.16f),
                            accent.copy(alpha = 0.05f),
                            shellColors.cardBackground,
                        ),
                    ),
                )
                .padding(18.dp),
        ) {
            Column(
                verticalArrangement = Arrangement.spacedBy(14.dp),
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.Top,
                ) {
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(6.dp),
                    ) {
                        StatusPill(
                            text = heroStatusLabel(state, connectionState),
                            dotColor = accent,
                        )
                        Text(
                            text = title,
                            fontSize = 21.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = colors.onSurface,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis,
                        )
                        Text(
                            text = summary,
                            fontSize = 13.sp,
                            color = colors.onSurfaceVariantSummary,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis,
                        )
                    }
                    Box(
                        modifier = Modifier
                            .padding(start = 12.dp)
                            .size(50.dp)
                            .clip(CircleShape)
                            .background(accent.copy(alpha = 0.14f)),
                        contentAlignment = Alignment.Center,
                    ) {
                        Icon(
                            imageVector = modeIcon(state.viewMode),
                            contentDescription = null,
                            modifier = Modifier.size(24.dp),
                            tint = accent,
                        )
                    }
                }
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = stringResource(R.string.connection_status),
                        value = stringResource(connectionState.labelRes()),
                    )
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = heroMetricLabel(state),
                        value = heroMetricValue(state),
                    )
                }
            }
        }
    }
}

@Composable
private fun MetricChip(
    label: String,
    value: String,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = modifier,
        colors = CardColors(
            color = colors.surface.copy(alpha = 0.78f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 11.dp),
            verticalArrangement = Arrangement.spacedBy(3.dp),
        ) {
            Text(
                text = label,
                fontSize = 11.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Text(
                text = value,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun heroStatusLabel(
    state: RemoteFileViewerState,
    connectionState: ConnectionState,
): String {
    return when {
        state.viewerErrorMessage.isNotBlank() -> stringResource(R.string.remote_file_status_error)
        state.isLoading -> stringResource(R.string.remote_file_status_loading)
        else -> stringResource(connectionState.labelRes())
    }
}

@Composable
private fun heroMetricLabel(state: RemoteFileViewerState): String {
    return when (state.viewMode) {
        RemoteFileViewMode.LIST -> stringResource(R.string.remote_file_entries)
        else -> stringResource(R.string.remote_file_file_size)
    }
}

@Composable
private fun heroMetricValue(state: RemoteFileViewerState): String {
    return when (state.viewMode) {
        RemoteFileViewMode.LIST -> state.items.size.toString()
        else -> state.selectedSize.ifBlank { "-" }
    }
}

@Composable
private fun FilePrimaryActions(
    state: RemoteFileViewerState,
    onRefresh: () -> Unit,
    onSecondary: () -> Unit,
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        ActionButton(
            modifier = Modifier.weight(1f),
            text = actionPrimaryLabel(state.viewMode),
            icon = Icons.Rounded.Refresh,
            enabled = !state.isLoading,
            filled = false,
            onClick = onRefresh,
        )
        ActionButton(
            modifier = Modifier.weight(1f),
            text = actionSecondaryLabel(state.viewMode),
            icon = Icons.Rounded.Folder,
            enabled = !state.isLoading,
            filled = true,
            onClick = onSecondary,
        )
    }
}

@Composable
private fun RemoteListCard(
    modifier: Modifier = Modifier,
    item: RemoteFileItem,
    depth: Int,
    ancestorHasNext: List<Boolean>,
    isFirstSibling: Boolean,
    isLastSibling: Boolean,
    hasChildren: Boolean,
    isExpanded: Boolean,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val density = LocalDensity.current
    val interactionSource = remember { MutableInteractionSource() }
    val pressed by interactionSource.collectIsPressedAsState()
    var entered by remember(item.id) { mutableStateOf(false) }
    val baseTreeAccent = when {
        item.isDir && hasChildren && isExpanded -> shellColors.primaryAction
        item.isDir -> shellColors.primaryAction.copy(alpha = 0.72f)
        else -> colors.outline
    }
    LaunchedEffect(item.id) {
        entered = true
    }
    val enterAlpha by animateFloatAsState(
        targetValue = if (entered) 1f else 0f,
        label = "treeRowEnterAlpha",
    )
    val enterOffset by animateDpAsState(
        targetValue = if (entered) 0.dp else 10.dp,
        label = "treeRowEnterOffset",
    )
    val rowHighlightColor by animateColorAsState(
        targetValue = if (pressed) {
            if (item.isDir) shellColors.primaryAction.copy(alpha = 0.08f) else colors.surface.copy(alpha = 0.55f)
        } else {
            Color.Transparent
        },
        label = "treeRowHighlight",
    )
    val treeAccentColor by animateColorAsState(
        targetValue = if (pressed) {
            if (item.isDir) shellColors.primaryAction else colors.onSurface
        } else {
            baseTreeAccent
        },
        label = "treeAccentColor",
    )
    val arrowTintColor by animateColorAsState(
        targetValue = if (pressed && item.isDir) treeAccentColor else colors.onSurfaceVariantSummary,
        label = "treeArrowTintColor",
    )
    val expandArrowRotation by animateFloatAsState(
        targetValue = if (item.isDir && hasChildren && isExpanded) 90f else 0f,
        label = "treeExpandArrowRotation",
    )
    Row(
        modifier = modifier
            .fillMaxWidth()
            .graphicsLayer {
                alpha = enterAlpha
                translationY = with(density) { enterOffset.toPx() }
            },
        verticalAlignment = Alignment.CenterVertically,
    ) {
        TreeConnector(
            depth = depth,
            ancestorHasNext = ancestorHasNext,
            isFirstSibling = isFirstSibling,
            isLastSibling = isLastSibling,
            accentColor = treeAccentColor,
            pressed = pressed,
        )
        Spacer(modifier = Modifier.width(6.dp))
        Row(
            modifier = Modifier
                .weight(1f)
                .clip(RoundedCornerShape(12.dp))
                .background(rowHighlightColor)
                .clickable(
                    interactionSource = interactionSource,
                    indication = null,
                    onClick = onClick,
                )
                .padding(horizontal = 6.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(38.dp)
                    .clip(RoundedCornerShape(14.dp))
                    .background(
                        if (item.isDir) {
                            treeAccentColor.copy(alpha = 0.14f)
                        } else {
                            colors.surface.copy(alpha = 0.62f)
                        },
                    ),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = if (item.isDir) Icons.Rounded.Folder else Icons.AutoMirrored.Rounded.InsertDriveFile,
                    contentDescription = null,
                    modifier = Modifier.size(18.dp),
                    tint = if (item.isDir) treeAccentColor else colors.onSurface,
                )
            }
            Spacer(modifier = Modifier.width(12.dp))
            Column(
                modifier = Modifier.weight(1f),
                verticalArrangement = Arrangement.spacedBy(2.dp),
            ) {
                Text(
                    text = item.name,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                Text(
                    text = buildFileSummary(item),
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            Icon(
                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                contentDescription = null,
                modifier = Modifier
                    .size(18.dp)
                    .graphicsLayer {
                        if (item.isDir && hasChildren) {
                            rotationZ = expandArrowRotation
                        }
                    },
                tint = arrowTintColor,
            )
        }
    }
}

@Composable
private fun TreeConnector(
    depth: Int,
    ancestorHasNext: List<Boolean>,
    isFirstSibling: Boolean,
    isLastSibling: Boolean,
    accentColor: Color,
    pressed: Boolean,
) {
    val trunkColor = accentColor.copy(alpha = 0.28f)
    val indentWidth = 14.dp
    val baseOffset = 8.dp
    val nodeScale by animateFloatAsState(
        targetValue = if (pressed) 1.16f else 1f,
        label = "treeNodeScale",
    )
    val nodeColor by animateColorAsState(
        targetValue = accentColor.copy(alpha = if (pressed) 1f else 0.88f),
        label = "treeNodeColor",
    )
    Box(
        modifier = Modifier
            .width(baseOffset + indentWidth * depth + 16.dp)
            .height(64.dp),
        contentAlignment = Alignment.Center,
    ) {
        Canvas(modifier = Modifier.matchParentSize()) {
            val base = baseOffset.toPx()
            val step = indentWidth.toPx()
            ancestorHasNext.forEachIndexed { level, hasNext ->
                if (hasNext) {
                    val x = base + step * level
                    drawLine(
                        color = trunkColor,
                        start = Offset(x, 0f),
                        end = Offset(x, size.height),
                        strokeWidth = 2.dp.toPx(),
                    )
                }
            }
            val centerX = base + step * depth
            val centerY = size.height * 0.5f
            val stroke = 2.dp.toPx()
            if (!isFirstSibling) {
                drawLine(
                    color = trunkColor,
                    start = Offset(centerX, 0f),
                    end = Offset(centerX, centerY),
                    strokeWidth = stroke,
                )
            }
            if (!isLastSibling) {
                drawLine(
                    color = trunkColor,
                    start = Offset(centerX, centerY),
                    end = Offset(centerX, size.height),
                    strokeWidth = stroke,
                )
            }
            drawLine(
                color = trunkColor,
                start = Offset(centerX, centerY),
                end = Offset(size.width, centerY),
                strokeWidth = stroke,
            )
        }
        Box(
            modifier = Modifier
                .size(8.dp)
                .graphicsLayer {
                    scaleX = nodeScale
                    scaleY = nodeScale
                }
                .clip(CircleShape)
                .background(nodeColor),
        )
    }
}

@Composable
private fun RemoteActionCard(
    title: String,
    summary: String,
    icon: ImageVector,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = shellColors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(40.dp)
                    .clip(RoundedCornerShape(14.dp))
                    .background(shellColors.primaryAction.copy(alpha = 0.14f)),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    modifier = Modifier.size(20.dp),
                    tint = shellColors.primaryAction,
                )
            }
            Spacer(modifier = Modifier.width(12.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                Spacer(modifier = Modifier.height(3.dp))
                Text(
                    text = summary,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            Icon(
                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                contentDescription = null,
                modifier = Modifier.size(20.dp),
                tint = colors.outline,
            )
        }
    }
}

@Composable
private fun RemoteTextContentCard(
    text: String,
    monospace: Boolean,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = ShellTheme.colors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 22.dp,
    ) {
        Text(
            text = text.ifBlank { " " },
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            fontSize = 13.sp,
            lineHeight = 20.sp,
            fontFamily = if (monospace) FontFamily.Monospace else null,
            color = colors.onSurface,
        )
    }
}

@Composable
private fun RemoteImageCard(
    imagePath: String,
    isLoading: Boolean,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = ShellTheme.colors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 22.dp,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(340.dp)
                .padding(12.dp),
            contentAlignment = Alignment.Center,
        ) {
            if (isLoading || imagePath.isBlank()) {
                Text(
                    text = stringResource(R.string.remote_file_loading),
                    fontSize = 14.sp,
                    color = colors.onSurfaceVariantSummary,
                    textAlign = TextAlign.Center,
                )
            } else {
                val modelData = if (imagePath.startsWith("android.resource://")) {
                    imagePath
                } else {
                    File(imagePath)
                }
                AsyncImage(
                    model = ImageRequest.Builder(androidx.compose.ui.platform.LocalContext.current)
                        .data(modelData)
                        .crossfade(true)
                        .build(),
                    contentDescription = stringResource(R.string.remote_file_open_image),
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Fit,
                )
            }
        }
    }
}

@Composable
private fun RemoteDualActionRow(
    leftTitle: String,
    rightTitle: String,
    onLeft: () -> Unit,
    onRight: () -> Unit,
) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        ActionButton(
            modifier = Modifier.weight(1f),
            text = leftTitle,
            icon = Icons.AutoMirrored.Rounded.Article,
            enabled = true,
            filled = false,
            onClick = onLeft,
        )
        ActionButton(
            modifier = Modifier.weight(1f),
            text = rightTitle,
            icon = Icons.AutoMirrored.Rounded.Article,
            enabled = true,
            filled = true,
            onClick = onRight,
        )
    }
}

@Composable
private fun FileEmptyCard(title: String, summary: String) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = ShellTheme.colors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
    ) {
        Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 18.dp)) {
            Text(
                text = title,
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = summary,
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun StatusPill(
    text: String,
    dotColor: Color,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        colors = CardColors(
            color = colors.surface.copy(alpha = 0.78f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 999.dp,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(dotColor),
            )
            Text(
                text = text,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface,
            )
        }
    }
}

@Composable
private fun ActionButton(
    text: String,
    icon: ImageVector,
    enabled: Boolean,
    filled: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val containerColor = when {
        !enabled && filled -> shellColors.disabledAction
        filled -> shellColors.primaryAction
        else -> colors.surfaceContainer
    }
    val contentColor = if (filled) Color.White else colors.onSurface

    Card(
        modifier = modifier.height(56.dp),
        colors = CardColors(
            color = containerColor,
            contentColor = contentColor,
        ),
        cornerRadius = 18.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                text = text,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun modeLabel(viewMode: RemoteFileViewMode): String {
    return when (viewMode) {
        RemoteFileViewMode.LIST -> stringResource(R.string.remote_file_mode_list)
        RemoteFileViewMode.INFO -> stringResource(R.string.remote_file_mode_info)
        RemoteFileViewMode.TEXT -> stringResource(R.string.remote_file_open_text)
        RemoteFileViewMode.HEX -> stringResource(R.string.remote_file_open_hex)
        RemoteFileViewMode.IMAGE -> stringResource(R.string.remote_file_open_image)
    }
}

@Composable
private fun actionPrimaryLabel(viewMode: RemoteFileViewMode): String {
    return when (viewMode) {
        RemoteFileViewMode.LIST -> stringResource(R.string.remote_file_refresh)
        RemoteFileViewMode.INFO,
        RemoteFileViewMode.TEXT,
        RemoteFileViewMode.HEX,
        RemoteFileViewMode.IMAGE -> stringResource(R.string.remote_file_reload)
    }
}

@Composable
private fun actionSecondaryLabel(viewMode: RemoteFileViewMode): String {
    return when (viewMode) {
        RemoteFileViewMode.LIST -> stringResource(R.string.remote_file_parent)
        RemoteFileViewMode.INFO -> stringResource(R.string.remote_file_back_to_list)
        RemoteFileViewMode.TEXT,
        RemoteFileViewMode.HEX,
        RemoteFileViewMode.IMAGE -> stringResource(R.string.remote_file_close_viewer)
    }
}

@Composable
private fun modeIcon(viewMode: RemoteFileViewMode): ImageVector {
    return when (viewMode) {
        RemoteFileViewMode.LIST -> Icons.Rounded.Folder
        RemoteFileViewMode.INFO -> Icons.AutoMirrored.Rounded.InsertDriveFile
        RemoteFileViewMode.TEXT -> Icons.AutoMirrored.Rounded.Subject
        RemoteFileViewMode.HEX -> Icons.AutoMirrored.Rounded.Article
        RemoteFileViewMode.IMAGE -> Icons.Rounded.Image
    }
}

@Composable
private fun statusSummaryText(state: RemoteFileViewerState): String {
    return when {
        state.viewerErrorMessage.isNotBlank() -> state.viewerErrorMessage
        state.isLoading -> stringResource(R.string.remote_file_loading)
        state.viewMode == RemoteFileViewMode.LIST -> stringResource(R.string.remote_file_entries_count, state.items.size)
        state.selectedSize.isNotBlank() -> {
            stringResource(R.string.remote_file_file_size) + ": " + state.selectedSize
        }
        else -> stringResource(R.string.action_file_viewer_summary)
    }
}

private fun currentDisplayPath(state: RemoteFileViewerState): String {
    return when {
        state.viewMode == RemoteFileViewMode.LIST -> state.currentPath
        state.selectedPath.isNotBlank() -> state.selectedPath
        else -> state.currentPath
    }
}

@Composable
private fun buildFileSummary(item: RemoteFileItem): String {
    return if (item.isDir) {
        stringResource(R.string.remote_file_folder_label)
    } else {
        item.size.ifBlank { stringResource(R.string.remote_file_file_label) }
    }
}

private fun parentPath(path: String): String {
    if (path.isBlank() || path == "/") return "/"
    val trimmed = if (path.endsWith("/") && path.length > 1) path.dropLast(1) else path
    val index = trimmed.lastIndexOf('/')
    return if (index <= 0) "/" else trimmed.substring(0, index)
}

private class RemoteViewerAnimatedState(
    val snapshot: RemoteFileViewerState,
) {
    val navigationOrder: Int
        get() = when (snapshot.viewMode) {
            RemoteFileViewMode.LIST -> 0
            RemoteFileViewMode.INFO -> 1
            RemoteFileViewMode.TEXT -> 2
            RemoteFileViewMode.HEX -> 3
            RemoteFileViewMode.IMAGE -> 4
        }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is RemoteViewerAnimatedState) return false
        return snapshot.viewMode == other.snapshot.viewMode &&
            snapshot.currentPath == other.snapshot.currentPath &&
            snapshot.selectedPath == other.snapshot.selectedPath &&
            snapshot.hexOffset == other.snapshot.hexOffset
    }

    override fun hashCode(): Int {
        var result = snapshot.viewMode.hashCode()
        result = 31 * result + snapshot.currentPath.hashCode()
        result = 31 * result + snapshot.selectedPath.hashCode()
        result = 31 * result + snapshot.hexOffset
        return result
    }
}

private fun ConnectionState.labelRes(): Int = when (this) {
    ConnectionState.DISCONNECTED -> R.string.disconnected
    ConnectionState.CONNECTING -> R.string.connection_state_connecting
    ConnectionState.CONNECTED -> R.string.connected
    ConnectionState.ERROR -> R.string.connection_state_error
}
