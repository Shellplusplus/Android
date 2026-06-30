package com.shell.liangyi.ui.bluetooth

import android.net.Uri
import androidx.compose.foundation.background
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
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
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
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

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
        Column(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
            Spacer(modifier = Modifier.height(14.dp))
            StatusCard(isConnected = isConnected, isBusy = isBusy, progress = progress)

            Spacer(modifier = Modifier.height(8.dp))
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp)
                    .height(40.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface
                ),
                cornerRadius = 15.dp,
                onClick = { shellViewModel.ensureConnection() },
                showIndication = true,
                pressFeedbackType = PressFeedbackType.Sink
            ) {
                Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Text(
                        text = stringResource(R.string.refresh_connection),
                        fontSize = 14.sp,
                        fontWeight = FontWeight.Medium,
                        color = colors.onSurface
                    )
                }
            }

            Spacer(modifier = Modifier.height(23.dp))
            ActionButton(
                text = when {
                    isBusy -> stringResource(R.string.screenshot_syncing)
                    isConnected -> stringResource(R.string.fetch_screenshot)
                    else -> stringResource(R.string.disconnected)
                },
                enabled = isConnected && !isBusy,
                onClick = { shellViewModel.requestFromWatch() }
            )

            Spacer(modifier = Modifier.height(22.dp))
            Text(
                text = stringResource(R.string.fetched_screenshots),
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText
            )

            Spacer(modifier = Modifier.height(12.dp))
            if (screenshots.isNotEmpty()) {
                val previewShots = screenshots.take(2)
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 9.dp)
                ) {
                    previewShots.forEachIndexed { i, shot ->
                        if (i > 0) Spacer(modifier = Modifier.width(13.dp))
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
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 9.dp)
                        .height(214.dp),
                    colors = CardColors(
                        color = shellColors.cardBackground,
                        contentColor = colors.onSurface
                    ),
                    cornerRadius = 15.dp
                ) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text(
                            text = stringResource(R.string.screenshot_empty),
                            fontSize = 16.sp,
                            color = colors.onSurface.copy(alpha = 0.4f)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp + bottomContentPadding))
        }
    }
}

@Composable
private fun StatusCard(
    isConnected: Boolean,
    isBusy: Boolean,
    progress: String = ""
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val dotColor = when {
        isBusy -> shellColors.warning
        isConnected -> shellColors.success
        else -> shellColors.danger
    }
    val statusText = when {
        isBusy -> stringResource(R.string.syncing_screenshots)
        isConnected -> stringResource(R.string.connected_to_quick_app)
        else -> stringResource(R.string.quick_app_not_connected)
    }
    val cardHeight = if (isBusy && progress.isNotBlank()) 80.dp else 56.dp

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(cardHeight),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(start = 13.dp, end = 13.dp, top = 12.dp, bottom = 12.dp)
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(10.dp)
                        .clip(CircleShape)
                        .background(dotColor)
                )
                Spacer(modifier = Modifier.width(13.dp))
                Text(
                    text = statusText,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Medium,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }
            if (isBusy && progress.isNotBlank()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = progress,
                    modifier = Modifier.padding(start = 23.dp),
                    fontSize = 12.sp,
                    color = colors.onSurface.copy(alpha = 0.6f)
                )
            }
        }
    }
}

@Composable
private fun ActionButton(text: String, enabled: Boolean, onClick: () -> Unit) {
    val shellColors = ShellTheme.colors
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp),
        colors = CardColors(
            color = if (enabled) shellColors.primaryAction else shellColors.disabledAction,
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

@Composable
private fun ScreenshotCard(
    shot: Screenshot,
    modifier: Modifier,
    onClick: () -> Unit,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val previewPath = remember(shot.localFilePath, shot.shotId) {
        shot.localFilePath.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shot.shotId)
    }
    Card(
        modifier = modifier.height(214.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier
                    .align(Alignment.TopCenter)
                    .padding(top = 9.dp)
                    .width(112.dp)
                    .height(160.dp)
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
                }
            }
            Text(
                text = "#${shot.index}",
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .padding(bottom = 18.dp),
                fontSize = 17.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface
            )
            Text(
                text = shot.capturedAt,
                modifier = Modifier
                    .align(Alignment.BottomCenter)
                    .padding(bottom = 4.dp),
                fontSize = 10.sp,
                fontWeight = FontWeight.Medium,
                color = shellColors.secondaryText
            )
        }
    }
}
