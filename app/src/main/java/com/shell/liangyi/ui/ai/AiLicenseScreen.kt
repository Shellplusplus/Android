package com.shell.liangyi.ui.ai

import android.content.ClipData
import android.content.Context
import android.content.Intent
import android.content.pm.ResolveInfo
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.content.FileProvider
import androidx.core.net.toUri
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
import com.shell.liangyi.BuildConfig
import com.shell.liangyi.security.ai.AiLicenseState
import com.shell.liangyi.security.ai.AiLicenseStatus
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import com.shell.liangyi.util.AtomicFileWriter
import com.shell.liangyi.util.FileCacheTrimmer
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.text.SimpleDateFormat
import java.util.Date
import java.util.LinkedHashSet
import java.util.Locale
import java.util.concurrent.TimeUnit
import java.io.File

private const val AI_LICENSE_REQUEST_CACHE_LIMIT = 5

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
                    toast(context, "授权文件已导入，请联网验证")
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
                    title = "发送授权申请邮件",
                    summary = "生成申请 JSON 附件后弹出系统选择器，选择 Outlook 或其他邮箱应用发送",
                    onClick = {
                        runCatching {
                            val requestContent = shellViewModel.exportAiLicenseRequest()
                            launchRequestMailChooser(
                                context = context,
                                requestContent = requestContent,
                                fileName = buildRequestFileName(state),
                                state = state,
                            )
                        }.onFailure {
                            toast(context, it.message ?: "无法拉起邮箱应用")
                        }
                    },
                )
            }
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
                    title = "重新检查 GitHub 状态",
                    summary = "联网确认授权是否存在、有效且未撤销",
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

private fun launchRequestMailChooser(
    context: Context,
    requestContent: String,
    fileName: String,
    state: AiLicenseState,
) {
    val requestDir = File(context.cacheDir, "ai-license").apply { mkdirs() }
    val requestFile = File(requestDir, fileName)
    AtomicFileWriter.writeText(requestFile, requestContent)
    FileCacheTrimmer.trim(requestDir, AI_LICENSE_REQUEST_CACHE_LIMIT) { file ->
        file.extension.equals("json", ignoreCase = true)
    }
    val requestUri = FileProvider.getUriForFile(
        context,
        "${context.packageName}.fileprovider",
        requestFile,
    )
    val mailQueryIntent = Intent(Intent.ACTION_SENDTO).apply {
        data = "mailto:".toUri()
    }
    val packageManager = context.packageManager
    val directMailPackages = packageManager
        .queryIntentActivities(mailQueryIntent, 0)
        .map { it.activityInfo.packageName }
    val attachmentSendIntent = Intent(Intent.ACTION_SEND).apply {
        type = "*/*"
        putExtra(Intent.EXTRA_STREAM, requestUri)
    }
    val attachmentCandidates = packageManager.queryIntentActivities(attachmentSendIntent, 0)
    val emailPackages = LinkedHashSet<String>().apply {
        addAll(directMailPackages)
        attachmentCandidates
            .filter { resolveInfo -> looksLikeMailApp(packageManager, resolveInfo) }
            .mapTo(this) { it.activityInfo.packageName }
    }
    val emailIntents = emailPackages.map { packageName ->
        Intent(Intent.ACTION_SEND).apply {
            type = "application/json"
            `package` = packageName
            putExtra(Intent.EXTRA_STREAM, requestUri)
            clipData = ClipData.newRawUri(fileName, requestUri)
            if (BuildConfig.AI_LICENSE_MAILBOX_ADDRESS.isNotBlank()) {
                putExtra(Intent.EXTRA_EMAIL, arrayOf(BuildConfig.AI_LICENSE_MAILBOX_ADDRESS))
            }
            putExtra(Intent.EXTRA_SUBJECT, buildMailSubject(state))
            putExtra(Intent.EXTRA_TEXT, buildMailBody(state))
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
    }
    require(emailIntents.isNotEmpty()) { "未找到可用的邮箱应用" }
    emailIntents.forEach { intent ->
        intent.`package`?.let { packageName ->
            context.grantUriPermission(packageName, requestUri, Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
    }
    val chooser = Intent.createChooser(emailIntents.first(), "选择邮箱应用").apply {
        if (emailIntents.size > 1) {
            putExtra(Intent.EXTRA_INITIAL_INTENTS, emailIntents.drop(1).toTypedArray())
        }
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
    context.startActivity(chooser)
}

private fun buildMailSubject(state: AiLicenseState): String {
    val suffix = state.deviceFingerprint.takeLast(8).ifBlank { "device" }
    return "Shell++ AI 授权申请 - $suffix"
}

private fun buildMailBody(state: AiLicenseState): String = buildString {
    append("你好，这是一份 Shell++ AI 助手授权申请。")
    append("\n\n")
    append("设备指纹：")
    append(state.deviceFingerprint.ifBlank { "未生成" })
    append("\n")
    append("硬件密钥：")
    append(if (state.hardwareBacked) "Trusted hardware" else "软件/未知")
    append("\n\n")
    append("申请 JSON 已作为附件附上，请直接签发并回邮授权文件。")
}

private fun looksLikeMailApp(
    packageManager: android.content.pm.PackageManager,
    resolveInfo: ResolveInfo,
): Boolean {
    val packageName = resolveInfo.activityInfo.packageName.lowercase(Locale.ROOT)
    val activityName = resolveInfo.activityInfo.name.lowercase(Locale.ROOT)
    val label = resolveInfo.loadLabel(packageManager).toString().lowercase(Locale.ROOT)
    val haystacks = listOf(packageName, activityName, label)
    val keywords = listOf(
        "mail",
        "email",
        "gmail",
        "outlook",
        "qqmail",
        "foxmail",
        "proton",
        "spark",
        "aqua",
        "yahoo",
        "netease",
        "邮箱",
        "邮件",
        "qq邮箱",
        "网易邮箱",
    )
    return haystacks.any { value -> keywords.any { keyword -> value.contains(keyword) } }
}

private fun toast(context: android.content.Context, message: String) {
    android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show()
}
