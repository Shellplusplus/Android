package com.shell.liangyi.ui.diagnostics

import android.widget.Toast
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
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
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.FactCheck
import androidx.compose.material.icons.rounded.BugReport
import androidx.compose.material.icons.rounded.CheckCircleOutline
import androidx.compose.material.icons.rounded.DeleteSweep
import androidx.compose.material.icons.rounded.ErrorOutline
import androidx.compose.material.icons.rounded.FileDownload
import androidx.compose.material.icons.rounded.Info
import androidx.compose.material.icons.rounded.WarningAmber
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.core.diagnostics.DiagnosticCheckItem
import com.shell.liangyi.core.diagnostics.DiagnosticCheckStatus
import com.shell.liangyi.core.diagnostics.DiagnosticEvent
import com.shell.liangyi.core.diagnostics.DiagnosticSeverity
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.LiquidGlassConfirmDialog
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType

@Composable
fun DiagnosticsScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val context = LocalContext.current
    val events by shellViewModel.diagnosticEvents.collectAsStateWithLifecycle()
    val checks by shellViewModel.diagnosticChecks.collectAsStateWithLifecycle()
    val scrollBehavior = MiuixScrollBehavior()
    var clearDialogMounted by remember { mutableStateOf(false) }
    var clearDialogVisible by remember { mutableStateOf(false) }
    val exportLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.CreateDocument("application/zip"),
    ) { uri ->
        if (uri != null) shellViewModel.exportDiagnostics(uri)
    }

    LaunchedEffect(Unit) {
        shellViewModel.updateDiagnosticScene("diagnostics")
        shellViewModel.runDiagnosticSelfCheck()
        shellViewModel.diagnosticMessages.collect { message ->
            Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
        }
    }

    ShellBackScaffold(
        title = stringResource(R.string.diagnostics_title),
        onBack = { navController.popBackStack() },
        collapseTitleOnScroll = true,
        scrollBehavior = scrollBehavior,
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp),
            contentPadding = PaddingValues(
                top = innerPadding.calculateTopPadding() + 12.dp,
                bottom = innerPadding.calculateBottomPadding() + 24.dp,
            ),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            item { DiagnosticOverviewCard(events) }
            item {
                DiagnosticActions(
                    onSelfCheck = shellViewModel::runDiagnosticSelfCheck,
                    onExport = {
                        exportLauncher.launch("ShellPlus-diagnostics-${System.currentTimeMillis()}.zip")
                    },
                    onClear = {
                        clearDialogMounted = true
                        clearDialogVisible = true
                    },
                )
            }
            item {
                PrivacyCard()
            }
            if (checks.isNotEmpty()) {
                item { SectionLabel(stringResource(R.string.diagnostics_check_results)) }
                item { DiagnosticCheckCard(checks) }
            }
            item { SectionLabel(stringResource(R.string.diagnostics_recent_events)) }
            if (events.isEmpty()) {
                item { EmptyEventsCard() }
            } else {
                items(events, key = { it.id }) { event -> DiagnosticEventCard(event) }
            }
        }
    }

    if (clearDialogMounted) {
        LiquidGlassConfirmDialog(
            title = stringResource(R.string.diagnostics_clear_title),
            message = stringResource(R.string.diagnostics_clear_message),
            confirmText = stringResource(R.string.clear),
            dismissText = stringResource(R.string.cancel),
            visible = clearDialogVisible,
            onDismissRequest = { clearDialogVisible = false },
            onConfirm = {
                shellViewModel.clearDiagnostics()
                clearDialogVisible = false
            },
            onExitFinished = {
                if (!clearDialogVisible) clearDialogMounted = false
            },
        )
    }
}

@Composable
private fun DiagnosticOverviewCard(events: List<DiagnosticEvent>) {
    val colors = MiuixTheme.colorScheme
    val criticalCount = events.count { it.severity == DiagnosticSeverity.Critical }
    val errorCount = events.count { it.severity == DiagnosticSeverity.Error }
    val warningCount = events.count { it.severity == DiagnosticSeverity.Warning }
    val hasErrors = criticalCount + errorCount > 0
    val accent = if (hasErrors) ShellTheme.colors.danger else ShellTheme.colors.success

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = accent.copy(alpha = 0.14f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(46.dp)
                    .background(accent.copy(alpha = 0.18f), CircleShape),
                contentAlignment = Alignment.Center,
            ) {
                Icon(
                    imageVector = if (hasErrors) Icons.Rounded.BugReport else Icons.Rounded.CheckCircleOutline,
                    contentDescription = null,
                    modifier = Modifier.size(24.dp),
                    tint = accent,
                )
            }
            Spacer(Modifier.width(14.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = if (hasErrors) {
                        stringResource(R.string.diagnostics_attention_needed)
                    } else {
                        stringResource(R.string.diagnostics_no_errors)
                    },
                    fontSize = 18.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                )
                Spacer(Modifier.height(4.dp))
                Text(
                    text = stringResource(
                        R.string.diagnostics_event_summary,
                        criticalCount,
                        errorCount,
                        warningCount,
                    ),
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                )
            }
        }
    }
}

@Composable
private fun DiagnosticActions(
    onSelfCheck: () -> Unit,
    onExport: () -> Unit,
    onClear: () -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        DiagnosticActionCard(
            title = stringResource(R.string.diagnostics_run_check),
            summary = stringResource(R.string.diagnostics_run_check_summary),
            icon = Icons.AutoMirrored.Rounded.FactCheck,
            accent = ShellTheme.colors.primaryAction,
            onClick = onSelfCheck,
        )
        DiagnosticActionCard(
            title = stringResource(R.string.diagnostics_export),
            summary = stringResource(R.string.diagnostics_export_summary),
            icon = Icons.Rounded.FileDownload,
            accent = ShellTheme.colors.primaryAction,
            onClick = onExport,
        )
        DiagnosticActionCard(
            title = stringResource(R.string.diagnostics_clear),
            summary = stringResource(R.string.diagnostics_clear_summary),
            icon = Icons.Rounded.DeleteSweep,
            accent = ShellTheme.colors.destructiveAction,
            onClick = onClear,
        )
    }
}

@Composable
private fun DiagnosticActionCard(
    title: String,
    summary: String,
    icon: ImageVector,
    accent: Color,
    onClick: () -> Unit,
) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = ShellTheme.colors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Box(
                modifier = Modifier
                    .size(38.dp)
                    .background(accent.copy(alpha = 0.14f), CircleShape),
                contentAlignment = Alignment.Center,
            ) {
                Icon(icon, null, Modifier.size(20.dp), tint = accent)
            }
            Spacer(Modifier.width(12.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(title, fontSize = 16.sp, fontWeight = FontWeight.SemiBold, color = colors.onSurface)
                Spacer(Modifier.height(2.dp))
                Text(
                    summary,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                    maxLines = 2,
                    overflow = TextOverflow.Ellipsis,
                )
            }
        }
    }
}

@Composable
private fun PrivacyCard() {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(ShellTheme.colors.cardBackground, colors.onSurface),
        cornerRadius = 18.dp,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.Top,
        ) {
            Icon(
                Icons.Rounded.Info,
                null,
                Modifier.size(20.dp),
                tint = ShellTheme.colors.primaryAction,
            )
            Spacer(Modifier.width(10.dp))
            Text(
                stringResource(R.string.diagnostics_privacy_summary),
                modifier = Modifier.weight(1f),
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun DiagnosticCheckCard(checks: List<DiagnosticCheckItem>) {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(ShellTheme.colors.cardBackground, colors.onSurface),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp),
        ) {
            checks.forEach { check -> CheckRow(check) }
        }
    }
}

@Composable
private fun CheckRow(check: DiagnosticCheckItem) {
    val colors = MiuixTheme.colorScheme
    val accent = when (check.status) {
        DiagnosticCheckStatus.Passed -> ShellTheme.colors.success
        DiagnosticCheckStatus.Warning -> ShellTheme.colors.warning
        DiagnosticCheckStatus.Failed -> ShellTheme.colors.danger
    }
    val icon = when (check.status) {
        DiagnosticCheckStatus.Passed -> Icons.Rounded.CheckCircleOutline
        DiagnosticCheckStatus.Warning -> Icons.Rounded.WarningAmber
        DiagnosticCheckStatus.Failed -> Icons.Rounded.ErrorOutline
    }
    Row(verticalAlignment = Alignment.CenterVertically) {
        Icon(icon, null, Modifier.size(20.dp), tint = accent)
        Spacer(Modifier.width(10.dp))
        Column(modifier = Modifier.weight(1f)) {
            Text(check.name, fontSize = 15.sp, fontWeight = FontWeight.SemiBold, color = colors.onSurface)
            Spacer(Modifier.height(2.dp))
            Text(
                check.summary,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
            )
        }
    }
}

@Composable
private fun DiagnosticEventCard(event: DiagnosticEvent) {
    val colors = MiuixTheme.colorScheme
    val accent = when (event.severity) {
        DiagnosticSeverity.Warning -> ShellTheme.colors.warning
        DiagnosticSeverity.Error,
        DiagnosticSeverity.Critical -> ShellTheme.colors.danger
    }
    val time = remember(event.timestamp) {
        SimpleDateFormat("MM-dd HH:mm:ss", Locale.getDefault()).format(Date(event.timestamp))
    }
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = accent.copy(alpha = 0.12f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
        ) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(Icons.Rounded.ErrorOutline, null, Modifier.size(18.dp), tint = accent)
                Spacer(Modifier.width(8.dp))
                Text(
                    event.scene.ifBlank { event.category },
                    modifier = Modifier.weight(1f),
                    fontSize = 15.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                )
                Text(time, fontSize = 10.sp, fontWeight = FontWeight.Medium, color = colors.onSurfaceVariantSummary)
            }
            Spacer(Modifier.height(6.dp))
            Text(
                event.summary,
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurface,
                maxLines = 4,
                overflow = TextOverflow.Ellipsis,
            )
            Spacer(Modifier.height(6.dp))
            Text(
                "${event.code} · Android ${event.environment.androidVersion} (API ${event.environment.sdkInt}) · ${event.environment.network}",
                fontSize = 11.sp,
                fontWeight = FontWeight.Medium,
                color = colors.onSurfaceVariantSummary,
                maxLines = 2,
                overflow = TextOverflow.Ellipsis,
            )
        }
    }
}

@Composable
private fun EmptyEventsCard() {
    val colors = MiuixTheme.colorScheme
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .height(132.dp),
        colors = CardColors(ShellTheme.colors.cardBackground, colors.onSurface),
        cornerRadius = 18.dp,
    ) {
        Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Icon(
                    Icons.Rounded.CheckCircleOutline,
                    null,
                    Modifier.size(28.dp),
                    tint = ShellTheme.colors.success,
                )
                Spacer(Modifier.height(8.dp))
                Text(
                    stringResource(R.string.diagnostics_empty),
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Medium,
                    color = colors.onSurfaceVariantSummary,
                )
            }
        }
    }
}

@Composable
private fun SectionLabel(text: String) {
    Text(
        text = text,
        modifier = Modifier.padding(start = 4.dp, top = 4.dp),
        fontSize = 13.sp,
        fontWeight = FontWeight.SemiBold,
        color = ShellTheme.colors.mutedText,
    )
}
