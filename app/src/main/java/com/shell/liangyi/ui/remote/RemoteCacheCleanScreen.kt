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
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.CleaningServices
import androidx.compose.material.icons.rounded.Refresh
import androidx.compose.material.icons.rounded.Storage
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.core.RemoteCacheItem
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.LiquidGlassConfirmDialog
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

@Composable
fun RemoteCacheCleanScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val state by shellViewModel.remoteCacheCleanState.collectAsState()
    val scrollBehavior = MiuixScrollBehavior()
    var mountedConfirm by remember { mutableStateOf(false) }
    var confirmVisible by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        shellViewModel.refreshRemoteCacheStatus()
    }

    ShellBackScaffold(
        title = stringResource(R.string.remote_cache_title),
        onBack = { navController.popBackStack() },
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
                CacheSummaryCard(
                    totalSize = state.totalSize,
                    statusText = state.statusText,
                    onRefresh = shellViewModel::refreshRemoteCacheStatus,
                )
            }
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    CacheActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_cache_refresh),
                        icon = Icons.Rounded.Refresh,
                        enabled = !state.isLoading,
                        onClick = shellViewModel::refreshRemoteCacheStatus,
                    )
                    CacheActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_cache_clear),
                        icon = Icons.Rounded.CleaningServices,
                        enabled = !state.isLoading,
                        primary = true,
                        onClick = {
                            mountedConfirm = true
                            confirmVisible = true
                        },
                    )
                }
            }
            if (state.items.isEmpty()) {
                item {
                    CacheEmptyCard(
                        title = stringResource(R.string.remote_cache_empty),
                        summary = if (state.isLoading) {
                            stringResource(R.string.remote_cache_loading)
                        } else {
                            stringResource(R.string.remote_cache_empty_desc)
                        },
                    )
                }
            } else {
                items(state.items.size) { index ->
                    CacheItemCard(item = state.items[index])
                }
            }
            item { Spacer(modifier = Modifier.height(24.dp)) }
        }
    }

    if (mountedConfirm) {
        LiquidGlassConfirmDialog(
            title = stringResource(R.string.remote_cache_confirm_title),
            message = stringResource(R.string.remote_cache_confirm_message),
            confirmText = stringResource(R.string.confirm),
            dismissText = stringResource(R.string.cancel),
            visible = confirmVisible,
            onDismissRequest = { confirmVisible = false },
            onConfirm = {
                confirmVisible = false
                shellViewModel.clearRemoteCache()
            },
            onExitFinished = {
                if (!confirmVisible) {
                    mountedConfirm = false
                }
            },
        )
    }
}

@Composable
private fun CacheSummaryCard(
    totalSize: String,
    statusText: String,
    onRefresh: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.success.copy(alpha = 0.14f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        onClick = onRefresh,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Tilt,
    ) {
        Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 14.dp)) {
            Icon(
                imageVector = Icons.Rounded.CleaningServices,
                contentDescription = null,
                modifier = Modifier.size(22.dp),
                tint = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = stringResource(R.string.remote_cache_total),
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = totalSize,
                fontSize = 22.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = statusText,
                fontSize = 13.sp,
                color = colors.onSurfaceVariantSummary,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun CacheActionCard(
    title: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    enabled: Boolean,
    modifier: Modifier = Modifier,
    primary: Boolean = false,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val containerColor = when {
        !enabled -> colors.surfaceContainer
        primary -> ShellTheme.colors.primaryAction
        else -> ShellTheme.colors.cardBackground
    }
    val contentColor = if (primary && enabled) Color.White else colors.onSurface
    Card(
        modifier = modifier,
        colors = CardColors(color = containerColor, contentColor = contentColor),
        cornerRadius = 16.dp,
        onClick = if (enabled) onClick else ({}),
        showIndication = enabled,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center,
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                modifier = Modifier.size(18.dp),
                tint = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
            )
            Spacer(modifier = Modifier.size(8.dp))
            Text(
                text = title,
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                color = contentColor.copy(alpha = if (enabled) 1f else 0.72f),
            )
        }
    }
}

@Composable
private fun CacheItemCard(item: RemoteCacheItem) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier.size(38.dp),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = Icons.Rounded.Storage,
                    contentDescription = null,
                    modifier = Modifier.size(20.dp),
                    tint = colors.onSurface,
                )
            }
            Spacer(modifier = Modifier.size(12.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = item.name,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = item.size,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                )
            }
        }
    }
}

@Composable
private fun CacheEmptyCard(title: String, summary: String) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
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
