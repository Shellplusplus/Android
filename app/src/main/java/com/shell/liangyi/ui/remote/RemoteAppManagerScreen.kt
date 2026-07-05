package com.shell.liangyi.ui.remote

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
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Apps
import androidx.compose.material.icons.rounded.Delete
import androidx.compose.material.icons.rounded.Refresh
import androidx.compose.material.icons.rounded.Visibility
import androidx.compose.material.icons.rounded.VisibilityOff
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.core.RemoteAppItem
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

private enum class PendingAppConfirm {
    HIDE_SELECTED,
    SHOW_SELECTED,
    DELETE_SELECTED,
    HIDE_ALL,
    SHOW_ALL,
}

@Composable
fun RemoteAppManagerScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val state by shellViewModel.remoteAppManagerState.collectAsState()
    val scrollBehavior = MiuixScrollBehavior()
    val selectableCount = state.apps.count { !it.locked }
    val selectedCount = state.selectedPackages.size
    val allSelected = selectableCount > 0 && selectableCount == selectedCount
    val hasSelection = selectedCount > 0
    var mountedConfirm by remember { mutableStateOf<PendingAppConfirm?>(null) }
    var confirmVisible by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        shellViewModel.refreshRemoteApps()
    }

    ShellBackScaffold(
        title = stringResource(R.string.remote_app_title),
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
                AppSummaryCard(
                    summary = "$selectedCount / ${state.apps.size}",
                    onRefresh = shellViewModel::refreshRemoteApps,
                )
            }
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    AppActionCard(
                        modifier = Modifier.weight(1f),
                        title = if (allSelected) {
                            stringResource(R.string.remote_app_deselect_all)
                        } else {
                            stringResource(R.string.remote_app_select_all)
                        },
                        icon = Icons.Rounded.Apps,
                        enabled = selectableCount > 0 && !state.isLoading,
                        onClick = shellViewModel::toggleAllRemoteApps,
                    )
                    AppActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_app_refresh),
                        icon = Icons.Rounded.Refresh,
                        enabled = !state.isLoading,
                        onClick = shellViewModel::refreshRemoteApps,
                    )
                }
            }
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    AppActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_app_hide_selected),
                        icon = Icons.Rounded.VisibilityOff,
                        enabled = hasSelection && !state.isLoading,
                        onClick = {
                            mountedConfirm = PendingAppConfirm.HIDE_SELECTED
                            confirmVisible = true
                        },
                    )
                    AppActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_app_show_selected),
                        icon = Icons.Rounded.Visibility,
                        enabled = hasSelection && !state.isLoading,
                        onClick = {
                            mountedConfirm = PendingAppConfirm.SHOW_SELECTED
                            confirmVisible = true
                        },
                    )
                }
            }
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    AppActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_app_delete_selected),
                        icon = Icons.Rounded.Delete,
                        enabled = hasSelection && !state.isLoading,
                        primary = true,
                        onClick = {
                            mountedConfirm = PendingAppConfirm.DELETE_SELECTED
                            confirmVisible = true
                        },
                    )
                    AppActionCard(
                        modifier = Modifier.weight(1f),
                        title = stringResource(R.string.remote_app_hide_all),
                        icon = Icons.Rounded.VisibilityOff,
                        enabled = selectableCount > 0 && !state.isLoading,
                        onClick = {
                            mountedConfirm = PendingAppConfirm.HIDE_ALL
                            confirmVisible = true
                        },
                    )
                }
            }
            item {
                AppActionCard(
                    modifier = Modifier.fillMaxWidth(),
                    title = stringResource(R.string.remote_app_show_all),
                    icon = Icons.Rounded.Visibility,
                    enabled = selectableCount > 0 && !state.isLoading,
                    onClick = {
                        mountedConfirm = PendingAppConfirm.SHOW_ALL
                        confirmVisible = true
                    },
                )
            }
            if (state.apps.isEmpty()) {
                item {
                    AppEmptyCard(
                        title = stringResource(R.string.remote_app_empty),
                        summary = if (state.isLoading) {
                            stringResource(R.string.remote_cache_loading)
                        } else {
                            stringResource(R.string.remote_app_empty_desc)
                        },
                    )
                }
            } else {
                items(state.apps.size) { index ->
                    val item = state.apps[index]
                    AppItemCard(
                        item = item,
                        selected = state.selectedPackages.contains(item.packageName),
                        onClick = { shellViewModel.toggleRemoteAppSelection(item.packageName) },
                    )
                }
            }
            item { Spacer(modifier = Modifier.height(24.dp)) }
        }
    }

    val confirmSpec = mountedConfirm
    if (confirmSpec != null) {
        LiquidGlassConfirmDialog(
            title = when (confirmSpec) {
                PendingAppConfirm.HIDE_SELECTED -> stringResource(R.string.remote_app_confirm_hide_selected)
                PendingAppConfirm.SHOW_SELECTED -> stringResource(R.string.remote_app_confirm_show_selected)
                PendingAppConfirm.DELETE_SELECTED -> stringResource(R.string.remote_app_confirm_delete_selected)
                PendingAppConfirm.HIDE_ALL -> stringResource(R.string.remote_app_confirm_hide_all)
                PendingAppConfirm.SHOW_ALL -> stringResource(R.string.remote_app_confirm_show_all)
            },
            message = when (confirmSpec) {
                PendingAppConfirm.HIDE_SELECTED -> stringResource(
                    R.string.remote_app_confirm_hide_selected_message,
                    selectedCount,
                )
                PendingAppConfirm.SHOW_SELECTED -> stringResource(
                    R.string.remote_app_confirm_show_selected_message,
                    selectedCount,
                )
                PendingAppConfirm.DELETE_SELECTED -> stringResource(
                    R.string.remote_app_confirm_delete_selected_message,
                    selectedCount,
                )
                PendingAppConfirm.HIDE_ALL -> stringResource(R.string.remote_app_confirm_hide_all_message)
                PendingAppConfirm.SHOW_ALL -> stringResource(R.string.remote_app_confirm_show_all_message)
            },
            confirmText = stringResource(R.string.confirm),
            dismissText = stringResource(R.string.cancel),
            visible = confirmVisible,
            onDismissRequest = { confirmVisible = false },
            onConfirm = {
                confirmVisible = false
                when (confirmSpec) {
                    PendingAppConfirm.HIDE_SELECTED -> shellViewModel.hideSelectedRemoteApps()
                    PendingAppConfirm.SHOW_SELECTED -> shellViewModel.showSelectedRemoteApps()
                    PendingAppConfirm.DELETE_SELECTED -> shellViewModel.deleteSelectedRemoteApps()
                    PendingAppConfirm.HIDE_ALL -> shellViewModel.hideAllRemoteApps()
                    PendingAppConfirm.SHOW_ALL -> shellViewModel.showAllRemoteApps()
                }
            },
            onExitFinished = {
                if (!confirmVisible) {
                    mountedConfirm = null
                }
            },
        )
    }
}

@Composable
private fun AppSummaryCard(
    summary: String,
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
                imageVector = Icons.Rounded.Apps,
                contentDescription = null,
                modifier = Modifier.size(22.dp),
                tint = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(12.dp))
            Text(
                text = stringResource(R.string.remote_app_title),
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = summary,
                fontSize = 22.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
        }
    }
}

@Composable
private fun AppActionCard(
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
                maxLines = 1,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun AppItemCard(
    item: RemoteAppItem,
    selected: Boolean,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    val containerColor = if (selected) {
        ShellTheme.colors.success.copy(alpha = 0.14f)
    } else {
        ShellTheme.colors.cardBackground
    }
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(color = containerColor, contentColor = colors.onSurface),
        cornerRadius = 18.dp,
        onClick = if (!item.locked) onClick else ({}),
        showIndication = !item.locked,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
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
                    text = appSubtitle(item = item, selected = selected),
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(999.dp))
                    .background(
                        if (item.locked) {
                            colors.surfaceContainer
                        } else if (selected) {
                            ShellTheme.colors.success.copy(alpha = 0.18f)
                        } else {
                            colors.surfaceContainer
                        },
                    )
                    .padding(horizontal = 10.dp, vertical = 6.dp),
            ) {
                Text(
                    text = when {
                        item.locked -> stringResource(R.string.remote_app_locked)
                        selected -> stringResource(R.string.remote_app_selected_hint)
                        else -> stringResource(R.string.remote_app_tap_to_select)
                    },
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurface,
                )
            }
        }
    }
}

@Composable
private fun AppEmptyCard(title: String, summary: String) {
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

@Composable
private fun appSubtitle(item: RemoteAppItem, selected: Boolean): String {
    return buildString {
        append(
            if (item.hidden) {
                stringResource(R.string.remote_app_hidden)
            } else {
                stringResource(R.string.remote_app_visible)
            },
        )
        append(" | ")
        append(
            when {
                item.locked -> stringResource(R.string.remote_app_locked)
                selected -> stringResource(R.string.remote_app_selected_hint)
                else -> stringResource(R.string.remote_app_tap_to_select)
            },
        )
    }
}
