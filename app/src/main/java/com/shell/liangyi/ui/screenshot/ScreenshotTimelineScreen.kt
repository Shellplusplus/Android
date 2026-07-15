package com.shell.liangyi.ui.screenshot

import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Downloading
import androidx.compose.material.icons.rounded.Image
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.R
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.Routes
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.io.File
import java.time.Instant
import java.time.LocalDate
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.Locale

@Composable
fun ScreenshotTimelineScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val screenshots by shellViewModel.screenshots.collectAsStateWithLifecycle()
    val groupedTimeline = remember(screenshots) { screenshots.toTimelineGroups() }
    val scrollBehavior = MiuixScrollBehavior()

    ShellBackScaffold(
        title = stringResource(R.string.screenshot_timeline),
        onBack = { navController.popBackStack() },
        collapseTitleOnScroll = true,
        scrollBehavior = scrollBehavior,
    ) { innerPadding ->
        if (screenshots.isEmpty()) {
            TimelineEmptyState(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding)
                    .padding(horizontal = 12.dp),
            )
            return@ShellBackScaffold
        }

        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 10.dp),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            item(span = { GridItemSpan(maxLineSpan) }) {
                Spacer(modifier = Modifier.height(12.dp))
            }
            groupedTimeline.forEachIndexed { index, group ->
                item(span = { GridItemSpan(maxLineSpan) }) {
                    TimelineHeader(
                        title = group.header,
                        summary = group.summary,
                        topPadding = if (index == 0) 0.dp else 8.dp,
                    )
                }
                items(
                    items = group.items,
                    key = { shot -> shot.shotId },
                ) { shot ->
                    TimelineScreenshotCard(
                        shot = shot,
                        shellViewModel = shellViewModel,
                        onClick = { navController.navigate(Routes.screenshotDetail(Uri.encode(shot.shotId))) },
                    )
                }
            }
            item(span = { GridItemSpan(maxLineSpan) }) {
                Spacer(modifier = Modifier.height(24.dp))
            }
        }
    }
}

private data class TimelineGroup(
    val header: String,
    val summary: String,
    val items: List<Screenshot>,
)

private fun List<Screenshot>.toTimelineGroups(): List<TimelineGroup> {
    if (isEmpty()) {
        return emptyList()
    }

    val today = LocalDate.now()
    val locale = Locale.getDefault()
    val monthDayFormatter = DateTimeFormatter.ofPattern("M月d日", locale)
    val fullDateFormatter = DateTimeFormatter.ofPattern("yyyy年M月d日", locale)

    return groupBy { screenshot ->
        Instant.ofEpochSecond(screenshot.capturedAtUnix)
            .atZone(ZoneId.systemDefault())
            .toLocalDate()
    }.toSortedMap(compareByDescending { it })
        .map { (date, items) ->
            val header = when (date) {
                today -> "今天"
                today.minusDays(1) -> "昨天"
                else -> if (date.year == today.year) {
                    date.format(monthDayFormatter)
                } else {
                    date.format(fullDateFormatter)
                }
            }
            TimelineGroup(
                header = header,
                summary = "${items.size} 张",
                items = items.sortedByDescending { it.capturedAtUnix },
            )
        }
}

@Composable
private fun TimelineHeader(
    title: String,
    summary: String,
    topPadding: Dp,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(top = topPadding, start = 2.dp, end = 2.dp),
        verticalAlignment = Alignment.Bottom,
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {
        Text(
            text = title,
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface,
        )
        Text(
            text = summary,
            fontSize = 12.sp,
            color = shellColors.secondaryText,
        )
    }
}

@Composable
private fun TimelineScreenshotCard(
    shot: Screenshot,
    shellViewModel: ShellViewModel,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val previewPath = remember(shot.localFilePath, shot.shotId) {
        shot.localFilePath.takeIf { it.isNotBlank() } ?: shellViewModel.getScreenshotFilePath(shot.shotId)
    }
    val footerText = shot.transferHint.ifBlank { shot.capturedAt }

    Column(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(start = 2.dp, end = 2.dp),
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .aspectRatio(336f / 480f)
                .background(colors.surfaceContainer, RoundedCornerShape(16.dp))
                .clip(RoundedCornerShape(16.dp)),
            contentAlignment = Alignment.Center,
        ) {
            if (previewPath != null) {
                AsyncImage(
                    model = ImageRequest.Builder(shellViewModel.appContext())
                        .data(File(previewPath))
                        .crossfade(true)
                        .build(),
                    contentDescription = null,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Fit,
                )
            } else {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(colors.surfaceContainer),
                    contentAlignment = Alignment.Center,
                ) {
                    Icon(
                        imageVector = Icons.Rounded.Downloading,
                        contentDescription = null,
                        modifier = Modifier.size(28.dp),
                        tint = colors.onSurfaceVariantSummary,
                    )
                }
            }
        }
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = shot.displayTitle.ifBlank { "#${shot.index}" },
            fontSize = 14.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
        Spacer(modifier = Modifier.height(3.dp))
        Text(
            text = footerText,
            fontSize = 10.sp,
            color = shellColors.secondaryText,
            maxLines = 1,
            overflow = TextOverflow.Ellipsis,
        )
    }
}

@Composable
private fun TimelineEmptyState(
    modifier: Modifier = Modifier,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Box(
        modifier = modifier,
        contentAlignment = Alignment.Center,
    ) {
        Card(
            modifier = Modifier.fillMaxWidth(),
            colors = CardColors(
                color = shellColors.cardBackground,
                contentColor = colors.onSurface,
            ),
            cornerRadius = 22.dp,
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 24.dp, vertical = 28.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                Box(
                    modifier = Modifier
                        .size(56.dp)
                        .clip(CircleShape)
                        .background(colors.surfaceContainer),
                    contentAlignment = Alignment.Center,
                ) {
                    Icon(
                        imageVector = Icons.Rounded.Image,
                        contentDescription = null,
                        modifier = Modifier.size(28.dp),
                        tint = colors.onSurfaceVariantSummary,
                    )
                }
                Text(
                    text = stringResource(R.string.screenshot_empty),
                    fontSize = 18.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                )
                Text(
                    text = stringResource(R.string.screenshot_timeline_empty_hint),
                    fontSize = 13.sp,
                    color = shellColors.secondaryText,
                )
            }
        }
    }
}
