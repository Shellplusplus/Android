package com.shell.liangyi.ui.ai

import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigation.NavHostController
import com.shell.liangyi.security.ai.AiLicenseState
import com.shell.liangyi.security.ai.AiLicenseStatus
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.concurrent.TimeUnit

@Composable
fun AiLicenseScreen(
    navController: NavHostController,
    shellViewModel: ShellViewModel,
) {
    val context = LocalContext.current
    val state by shellViewModel.aiLicenseState.collectAsStateWithLifecycle()
    var pendingRequestContent by remember { mutableStateOf<String?>(null) }
    val importLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.OpenDocument(),
    ) { uri ->
        if (uri == null) return@rememberLauncherForActivityResult
        runCatching {
            context.contentResolver.openInputStream(uri)?.bufferedReader(Charsets.UTF_8)?.use { it.readText() }
                ?: throw IllegalStateException("无法读取授权文件")
        }.fold(
            onSuccess = { content ->
                shellViewModel.importAiLicense(content).onFailure {
                    toast(context, it.message ?: "授权文件无效")
                }.onSuccess {
                    toast(context, "授权文件已导入，正在检查 GitHub 清单")
                    shellViewModel.refreshAiLicense()
                }
            },
            onFailure = { toast(context, it.message ?: "无法读取授权文件") },
        )
    }
    val exportLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.CreateDocument("application/json"),
    ) { uri ->
        val content = pendingRequestContent
        pendingRequestContent = null
        if (uri == null || content == null) return@rememberLauncherForActivityResult
        runCatching {
            context.contentResolver.openOutputStream(uri)?.use { output ->
                output.write(content.toByteArray(Charsets.UTF_8))
            } ?: throw IllegalStateException("无法写入导出文件")
        }.onSuccess {
            toast(context, "授权申请 JSON 已导出")
        }.onFailure {
            toast(context, it.message ?: "导出授权申请失败")
        }
    }

    LaunchedEffect(Unit) {
        shellViewModel.refreshAiLicense()
    }

    ShellBackScaffold(
        title = "AI 助手授权",
        onBack = { navController.popBackStack() },
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(horizontal = 12.dp, vertical = 12.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
        ) {
            item { LicenseStatusCard(state) }
            item {
                ActionCard(
                    title = "导出授权申请 JSON",
                    summary = "保存设备申请 JSON 文件，只导出设备公钥和申请签名，不会导出设备私钥",
                    onClick = {
                        runCatching {
                            pendingRequestContent = shellViewModel.exportAiLicenseRequest()
                            exportLauncher.launch(buildRequestFileName(state))
                        }.onFailure {
                            pendingRequestContent = null
                            toast(context, it.message ?: "无法生成申请包")
                        }
                    },
                )
            }
            item {
                ActionCard(
                    title = "导入签名授权",
                    summary = "选择维护者返回的 JSON 授权文件",
                    onClick = { importLauncher.launch(arrayOf("application/json", "text/plain")) },
                )
            }
            item {
                ActionCard(
                    title = "重新检查 GitHub 清单",
                    summary = "从公开仓库确认授权是否存在、有效且未撤销",
                    onClick = { shellViewModel.refreshAiLicense() },
                )
            }
            if (state.licenseId.isNotBlank()) {
                item {
                    ActionCard(
                        title = "清除本机授权",
                        summary = "只清除本机授权文件，不会删除设备密钥",
                        accent = ShellTheme.colors.destructiveAction,
                        onClick = { shellViewModel.clearAiLicense() },
                    )
                }
            }
        }
    }
}

@Composable
private fun LicenseStatusCard(state: AiLicenseState) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val accent = when (state.status) {
        AiLicenseStatus.VALID, AiLicenseStatus.OFFLINE_GRACE -> shellColors.success
        AiLicenseStatus.REVOKED, AiLicenseStatus.EXPIRED, AiLicenseStatus.INVALID -> shellColors.danger
        else -> shellColors.warning
    }
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = accent.copy(alpha = 0.13f),
            contentColor = colors.onSurface,
        ),
        cornerRadius = 22.dp,
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = statusTitle(state.status),
                fontSize = 20.sp,
                fontWeight = FontWeight.SemiBold,
                color = accent,
            )
            Spacer(modifier = Modifier.height(6.dp))
            Text(
                text = state.message,
                fontSize = 13.sp,
                color = colors.onSurfaceVariantSummary,
            )
            Spacer(modifier = Modifier.height(12.dp))
            DetailLine("设备指纹", state.deviceFingerprint.ifBlank { "生成中" })
            DetailLine("硬件密钥", if (state.hardwareBacked) "Trusted hardware" else "软件/未知")
            if (state.expiresAt > 0L) DetailLine("授权到期", formatTime(state.expiresAt))
            if (state.lastVerifiedAt > 0L) DetailLine("最近验证", formatTime(state.lastVerifiedAt))
            if (state.graceRemainingMs > 0L) {
                DetailLine("宽限剩余", formatDuration(state.graceRemainingMs))
            }
        }
    }
}

@Composable
private fun DetailLine(label: String, value: String) {
    val colors = MiuixTheme.colorScheme
    Column(modifier = Modifier.padding(top = 5.dp)) {
        Text(text = label, fontSize = 11.sp, color = colors.onSurfaceVariantSummary)
        Text(text = value, fontSize = 12.sp, color = colors.onSurface)
    }
}

@Composable
private fun ActionCard(
    title: String,
    summary: String,
    onClick: () -> Unit,
    accent: Color = ShellTheme.colors.primaryAction,
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
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = title, fontSize = 16.sp, fontWeight = FontWeight.SemiBold, color = accent)
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = summary, fontSize = 12.sp, color = colors.onSurfaceVariantSummary)
        }
    }
}

private fun statusTitle(status: AiLicenseStatus): String = when (status) {
    AiLicenseStatus.LOCKED -> "未解锁"
    AiLicenseStatus.VALID -> "已授权"
    AiLicenseStatus.OFFLINE_GRACE -> "离线宽限期"
    AiLicenseStatus.NEEDS_ONLINE -> "等待联网验证"
    AiLicenseStatus.EXPIRED -> "授权已过期"
    AiLicenseStatus.REVOKED -> "授权已撤销"
    AiLicenseStatus.INVALID -> "授权无效"
}

private fun formatTime(value: Long): String = SimpleDateFormat(
    "yyyy-MM-dd HH:mm",
    Locale.getDefault(),
).format(Date(value))

private fun formatDuration(value: Long): String {
    val hours = TimeUnit.MILLISECONDS.toHours(value)
    val minutes = TimeUnit.MILLISECONDS.toMinutes(value) % 60
    return "${hours} 小时 ${minutes} 分钟"
}

private fun buildRequestFileName(state: AiLicenseState): String {
    val suffix = state.deviceFingerprint
        .takeLast(8)
        .ifBlank { "device" }
        .lowercase(Locale.ROOT)
    val timestamp = SimpleDateFormat("yyyyMMdd-HHmmss", Locale.getDefault())
        .format(Date())
    return "shellpp-ai-request-$suffix-$timestamp.json"
}

private fun toast(context: android.content.Context, message: String) {
    android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show()
}
