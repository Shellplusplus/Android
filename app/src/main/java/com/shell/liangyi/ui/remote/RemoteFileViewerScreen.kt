package com.shell.liangyi.ui.remote

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
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.rounded.Folder
import androidx.compose.material.icons.rounded.Image
import androidx.compose.material.icons.rounded.InsertDriveFile
import androidx.compose.material.icons.rounded.Subject
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.core.RemoteFileItem
import com.shell.liangyi.core.RemoteFileViewMode
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
    val state by shellViewModel.remoteFileViewerState.collectAsState()
    val scrollBehavior = MiuixScrollBehavior()
    val fileTooLarge = state.selectedSizeBytes > 3L * 1024L * 1024L

    LaunchedEffect(Unit) {
        shellViewModel.showRemoteFileList()
        shellViewModel.refreshRemoteFileViewerRoot()
    }

    ShellBackScaffold(
        title = stringResource(R.string.remote_file_viewer),
        onBack = {
            when (state.viewMode) {
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
            when (state.viewMode) {
                RemoteFileViewMode.LIST -> {
                    item {
                        RemoteHeadlineCard(
                            title = stringResource(R.string.remote_file_current_path),
                            summary = state.currentPath,
                            icon = Icons.Rounded.Folder,
                            highlight = true,
                            onClick = { shellViewModel.refreshRemoteFileViewerRoot() },
                        )
                    }
                    item {
                        RemoteHeadlineCard(
                            title = stringResource(R.string.remote_file_parent),
                            summary = parentPath(state.currentPath),
                            icon = Icons.Rounded.Folder,
                            onClick = { shellViewModel.listRemoteFilePath(parentPath(state.currentPath)) },
                        )
                    }
                    if (state.items.isEmpty()) {
                        item {
                            RemoteEmptyCard(
                                title = stringResource(R.string.remote_file_empty),
                                summary = if (state.isLoading) {
                                    stringResource(R.string.remote_file_loading)
                                } else {
                                    stringResource(R.string.remote_file_empty_desc)
                                },
                            )
                        }
                    } else {
                        items(state.items.size) { index ->
                            val item = state.items[index]
                            RemoteListCard(
                                title = item.name,
                                summary = buildFileSummary(item),
                                icon = if (item.isDir) Icons.Rounded.Folder else Icons.Rounded.InsertDriveFile,
                                onClick = {
                                    if (item.isDir) {
                                        shellViewModel.listRemoteFilePath(item.path)
                                    } else {
                                        shellViewModel.openRemoteFileInfo(item.path)
                                    }
                                },
                            )
                        }
                    }
                }

                RemoteFileViewMode.INFO -> {
                    item {
                        RemoteHeadlineCard(
                            title = state.selectedName.ifBlank { state.selectedPath },
                            summary = "${stringResource(R.string.remote_file_file_size)}: ${state.selectedSize}",
                            icon = Icons.Rounded.InsertDriveFile,
                            highlight = true,
                            onClick = { shellViewModel.showRemoteFileList() },
                        )
                    }
                    if (fileTooLarge) {
                        item {
                            RemoteEmptyCard(
                                title = stringResource(R.string.remote_file_too_large),
                                summary = stringResource(R.string.remote_file_too_large_desc),
                            )
                        }
                    } else {
                        item {
                            RemoteActionCard(
                                title = stringResource(R.string.remote_file_open_text),
                                summary = stringResource(R.string.remote_file_open_text_desc),
                                icon = Icons.Rounded.Subject,
                                onClick = shellViewModel::openRemoteFileText,
                            )
                        }
                        item {
                            RemoteActionCard(
                                title = stringResource(R.string.remote_file_open_hex),
                                summary = stringResource(R.string.remote_file_open_hex_desc),
                                icon = Icons.Rounded.InsertDriveFile,
                                onClick = { shellViewModel.openRemoteFileHex(0) },
                            )
                        }
                        item {
                            RemoteActionCard(
                                title = stringResource(R.string.remote_file_open_image),
                                summary = stringResource(R.string.remote_file_open_image_desc),
                                icon = Icons.Rounded.Image,
                                onClick = shellViewModel::openRemoteFileImage,
                            )
                        }
                    }
                }

                RemoteFileViewMode.TEXT,
                RemoteFileViewMode.HEX -> {
                    item {
                        RemoteHeadlineCard(
                            title = when (state.viewMode) {
                                RemoteFileViewMode.HEX -> stringResource(R.string.remote_file_open_hex)
                                else -> stringResource(R.string.remote_file_open_text)
                            },
                            summary = stringResource(R.string.remote_file_close_viewer),
                            icon = Icons.Rounded.Subject,
                            highlight = true,
                            onClick = shellViewModel::showRemoteFileInfo,
                        )
                    }
                    item {
                        RemoteTextContentCard(
                            text = if (state.isLoading) {
                                stringResource(R.string.remote_file_loading)
                            } else {
                                state.viewerText
                            },
                        )
                    }
                    if (state.viewMode == RemoteFileViewMode.HEX) {
                        item {
                            RemoteDualActionRow(
                                leftTitle = stringResource(R.string.remote_file_previous_page),
                                rightTitle = stringResource(R.string.remote_file_next_page),
                                onLeft = { shellViewModel.openRemoteFileHex((state.hexOffset - 128).coerceAtLeast(0)) },
                                onRight = { shellViewModel.openRemoteFileHex(state.hexOffset + 128) },
                            )
                        }
                    }
                }

                RemoteFileViewMode.IMAGE -> {
                    item {
                        RemoteHeadlineCard(
                            title = stringResource(R.string.remote_file_open_image),
                            summary = stringResource(R.string.remote_file_close_viewer),
                            icon = Icons.Rounded.Image,
                            highlight = true,
                            onClick = shellViewModel::showRemoteFileInfo,
                        )
                    }
                    item {
                        RemoteImageCard(
                            imagePath = state.viewerImagePath,
                            isLoading = state.isLoading,
                        )
                    }
                }
            }
            if (state.viewerErrorMessage.isNotBlank()) {
                item {
                    RemoteEmptyCard(
                        title = stringResource(R.string.remote_tool_request_failed),
                        summary = state.viewerErrorMessage,
                    )
                }
            }
            item { Spacer(modifier = Modifier.height(24.dp)) }
        }
    }
}

@Composable
private fun RemoteHeadlineCard(
    title: String,
    summary: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    highlight: Boolean = false,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val cardColor = if (highlight) {
        ShellTheme.colors.success.copy(alpha = 0.15f)
    } else {
        ShellTheme.colors.cardBackground
    }
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = cardColor, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Tilt,
    ) {
        Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 14.dp)) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(22.dp),
                tint = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = title,
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = summary,
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
                maxLines = 3,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun RemoteListCard(
    title: String,
    summary: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = ShellTheme.colors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Box(modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 14.dp)) {
            Column(modifier = Modifier.align(Alignment.CenterStart).padding(end = 30.dp)) {
                RowTitle(icon = icon, title = title)
                Spacer(modifier = Modifier.height(4.dp))
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
                modifier = Modifier.align(Alignment.CenterEnd).size(20.dp),
                tint = colors.outline,
            )
        }
    }
}

@Composable
private fun RemoteActionCard(
    title: String,
    summary: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    onClick: () -> Unit,
) {
    RemoteListCard(title = title, summary = summary, icon = icon, onClick = onClick)
}

@Composable
private fun RemoteTextContentCard(text: String) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = ShellTheme.colors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
    ) {
        Text(
            text = text.ifBlank { " " },
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            fontSize = 13.sp,
            lineHeight = 20.sp,
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
        cornerRadius = 18.dp,
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
                )
            } else {
                AsyncImage(
                    model = ImageRequest.Builder(androidx.compose.ui.platform.LocalContext.current)
                        .data(File(imagePath))
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
    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        RemoteSmallActionCard(
            modifier = Modifier.weight(1f),
            title = leftTitle,
            onClick = onLeft,
        )
        RemoteSmallActionCard(
            modifier = Modifier.weight(1f),
            title = rightTitle,
            onClick = onRight,
        )
    }
}

@Composable
private fun RemoteSmallActionCard(
    modifier: Modifier = Modifier,
    title: String,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = modifier,
        colors = CardColors(color = ShellTheme.colors.cardBackground, contentColor = colors.onSurface),
        cornerRadius = 16.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(vertical = 14.dp),
            contentAlignment = Alignment.Center,
        ) {
            Text(
                text = title,
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
        }
    }
}

@Composable
private fun RemoteEmptyCard(title: String, summary: String) {
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
private fun RowTitle(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    title: String,
) {
    val colors = MiuixTheme.colorScheme
    androidx.compose.foundation.layout.Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            modifier = Modifier.size(20.dp),
            tint = colors.onSurface,
        )
        Spacer(modifier = Modifier.width(12.dp))
        Text(
            text = title,
            fontSize = 16.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

private fun buildFileSummary(item: RemoteFileItem): String {
    return if (item.isDir) {
        item.path
    } else {
        "${item.size} · ${item.path}"
    }
}

private fun parentPath(path: String): String {
    if (path.isBlank() || path == "/") return "/"
    val trimmed = if (path.endsWith("/") && path.length > 1) path.dropLast(1) else path
    val index = trimmed.lastIndexOf('/')
    return if (index <= 0) "/" else trimmed.substring(0, index)
}
