package com.shell.liangyi.ui.bluetooth

import android.net.Uri
import androidx.annotation.StringRes
import androidx.compose.foundation.background
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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Bluetooth
import androidx.compose.material.icons.rounded.Downloading
import androidx.compose.material.icons.rounded.Sync
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.Routes
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

@Composable
fun BluetoothScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
    isRootDestination: Boolean = false,
    bottomContentPadding: Dp = 0.dp,
) {
    val connectionState by shellViewModel.connectionState.collectAsState(initial = ConnectionState.DISCONNECTED)
    val screenshots by shellViewModel.screenshots.collectAsState()
    val syncState by shellViewModel.syncState.collectAsState(initial = ScreenshotReceiver.SyncState.Idle)
    val progress by shellViewModel.receiveProgress.collectAsState(initial = "")
    val isConnected = connectionState == ConnectionState.CONNECTED
    val isBusy = syncState is ScreenshotReceiver.SyncState.Receiving ||
        syncState is ScreenshotReceiver.SyncState.WaitingAck

    ShellBackScaffold(
        title = stringResource(R.string.bluetooth_transfer),
        onBack = { navController.popBackStack() },
        showBackButton = !isRootDestination,
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 12.dp)
        ) {
            Spacer(modifier = Modifier.height(12.dp))
            BluetoothHeroCard(
                connectionState = connectionState,
                isBusy = isBusy,
                progress = progress,
                screenshotCount = screenshots.size,
            )

            Spacer(modifier = Modifier.height(12.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                ActionButton(
                    modifier = Modifier.weight(1f),
                    text = stringResource(R.string.refresh_connection),
                    icon = Icons.Rounded.Sync,
                    enabled = true,
                    filled = false,
                    onClick = { shellViewModel.ensureConnection() }
                )
                ActionButton(
                    modifier = Modifier.weight(1f),
                    text = when {
                        isBusy -> stringResource(R.string.screenshot_syncing)
                        isConnected -> stringResource(R.string.fetch_screenshot)
                        else -> stringResource(R.string.disconnected)
                    },
                    icon = Icons.Rounded.Downloading,
                    enabled = isConnected && !isBusy,
                    filled = true,
                    onClick = { shellViewModel.requestFromWatch() }
                )
            }

            Spacer(modifier = Modifier.height(20.dp))
            SectionHeader(
                title = stringResource(R.string.fetched_screenshots),
                summary = if (screenshots.isEmpty()) {
                    stringResource(R.string.screenshot_empty_desc)
                } else {
                    stringResource(R.string.screenshot_count, screenshots.size)
                }
            )

            Spacer(modifier = Modifier.height(10.dp))
            if (screenshots.isNotEmpty()) {
                val previewShots = screenshots.take(2)
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    previewShots.forEach { shot ->
                        ScreenshotCard(
                            shot = shot,
                            modifier = Modifier.weight(1f),
                            onClick = { navController.navigate(Routes.screenshotDetail(Uri.encode(shot.shotId))) },
                            shellViewModel = shellViewModel
                        )
                    }
                    if (previewShots.size == 1) {
                        Spacer(modifier = Modifier.weight(1f))
                    }
                }
            } else {
                EmptyScreenshotCard()
            }

            Spacer(modifier = Modifier.height(20.dp + bottomContentPadding))
        }
    }
}

@Composable
private fun BluetoothHeroCard(
    connectionState: ConnectionState,
    isBusy: Boolean,
    progress: String,
    screenshotCount: Int,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val accent = when {
        isBusy -> shellColors.warning
        connectionState == ConnectionState.CONNECTED -> shellColors.success
        else -> shellColors.primaryAction
    }
    val title = when {
        isBusy -> stringResource(R.string.syncing_screenshots)
        connectionState == ConnectionState.CONNECTED -> stringResource(R.string.connected_to_quick_app)
        connectionState == ConnectionState.CONNECTING -> stringResource(R.string.connection_state_connecting)
        connectionState == ConnectionState.ERROR -> stringResource(R.string.connection_state_error)
        else -> stringResource(R.string.quick_app_not_connected)
    }
    val summary = when {
        isBusy && progress.isNotBlank() -> progress
        connectionState == ConnectionState.CONNECTED -> stringResource(R.string.quick_app_ready)
        connectionState == ConnectionState.CONNECTING -> stringResource(R.string.checking_wear_permissions)
        else -> stringResource(R.string.tap_refresh_connection)
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 22.dp,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(
                    brush = Brush.linearGradient(
                        colors = listOf(
                            accent.copy(alpha = 0.18f),
                            accent.copy(alpha = 0.05f),
                            shellColors.cardBackground
                        )
                    )
                )
                .padding(18.dp)
        ) {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.Top
                ) {
                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(6.dp)
                    ) {
                        StatusPill(
                            text = stringResource(connectionState.labelRes()),
                            dotColor = accent
                        )
                        Text(
                            text = title,
                            fontSize = 22.sp,
                            fontWeight = FontWeight.SemiBold,
                            color = colors.onSurface,
                            maxLines = 2,
                            overflow = TextOverflow.Ellipsis
                        )
                        Text(
                            text = summary,
                            fontSize = 13.sp,
                            color = colors.onSurfaceVariantSummary,
                            maxLines = 3,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                    Box(
                        modifier = Modifier
                            .padding(start = 12.dp)
                            .size(56.dp)
                            .clip(CircleShape)
                            .background(accent.copy(alpha = 0.14f)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Rounded.Bluetooth,
                            contentDescription = null,
                            modifier = Modifier.size(28.dp),
                            tint = accent
                        )
                    }
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = stringResource(R.string.connection_status),
                        value = stringResource(connectionState.labelRes())
                    )
                    MetricChip(
                        modifier = Modifier.weight(1f),
                        label = stringResource(R.string.fetched_screenshots),
                        value = screenshotCount.toString()
                    )
                }
            }
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
            contentColor = colors.onSurface
        ),
        cornerRadius = 999.dp,
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .clip(CircleShape)
                    .background(dotColor)
            )
            Text(
                text = text,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface
            )
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
            color = colors.surface.copy(alpha = 0.74f),
            contentColor = colors.onSurface
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 14.dp, vertical = 12.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                text = label,
                fontSize = 12.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Text(
                text = value,
                fontSize = 16.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@Composable
private fun ActionButton(
    text: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
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
            contentColor = contentColor
        ),
        cornerRadius = 18.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = contentColor.copy(alpha = if (enabled) 1f else 0.72f)
            )
            Spacer(modifier = Modifier.width(8.dp))
            Text(
                text = text,
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@Composable
private fun SectionHeader(
    title: String,
    summary: String,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    Column(
        modifier = Modifier.padding(horizontal = 2.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp)
    ) {
        Text(
            text = title,
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface
        )
        Text(
            text = summary,
            fontSize = 12.sp,
            color = shellColors.secondaryText,
            maxLines = 2,
            overflow = TextOverflow.Ellipsis
        )
    }
}

@Composable
private fun EmptyScreenshotCard() {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .height(220.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 22.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 20.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Box(
                modifier = Modifier
                    .size(56.dp)
                    .clip(CircleShape)
                    .background(colors.surfaceContainer),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Rounded.Downloading,
                    contentDescription = null,
                    modifier = Modifier.size(28.dp),
                    tint = colors.onSurfaceVariantSummary
                )
            }
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = stringResource(R.string.screenshot_empty),
                fontSize = 18.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = stringResource(R.string.screenshot_empty_desc),
                fontSize = 13.sp,
                color = shellColors.secondaryText,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@Composable
private fun ScreenshotCard(
    shot: Screenshot,
    modifier: Modifier,
    onClick: () -> Unit,
    shellViewModel: ShellViewModel,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val previewPath = remember(shot.localFilePath, shot.shotId) {
        shot.localFilePath.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shot.shotId)
    }
    val footerText = shot.transferHint.ifBlank { shot.capturedAt }

    Card(
        modifier = modifier.height(240.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 22.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(12.dp)
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(162.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(shellColors.previewBackground),
                contentAlignment = Alignment.Center
            ) {
                if (previewPath != null) {
                    AsyncImage(
                        model = ImageRequest.Builder(shellViewModel.appContext())
                            .data(java.io.File(previewPath))
                            .crossfade(true)
                            .build(),
                        contentDescription = null,
                        modifier = Modifier.fillMaxSize(),
                        contentScale = ContentScale.Crop
                    )
                } else {
                    Icon(
                        imageVector = Icons.Rounded.Bluetooth,
                        contentDescription = null,
                        modifier = Modifier.size(28.dp),
                        tint = Color.White.copy(alpha = 0.72f)
                    )
                }
            }
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = shot.displayTitle.ifBlank { "#${shot.index}" },
                fontSize = 17.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = footerText,
                fontSize = 11.sp,
                color = shellColors.secondaryText,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

@StringRes
private fun ConnectionState.labelRes(): Int = when (this) {
    ConnectionState.DISCONNECTED -> R.string.disconnected
    ConnectionState.CONNECTING -> R.string.connection_state_connecting
    ConnectionState.CONNECTED -> R.string.connected
    ConnectionState.ERROR -> R.string.connection_state_error
}
