package com.shell.liangyi.core.diagnostics

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.graphics.BitmapFactory
import android.os.Build
import android.os.Environment
import com.shell.liangyi.core.ConnectionState
import java.io.File

internal object DiagnosticSelfCheck {
    private const val LOW_STORAGE_THRESHOLD_BYTES = 128L * 1024 * 1024

    fun run(context: Context, connectionState: ConnectionState): List<DiagnosticCheckItem> {
        return buildList {
            add(checkPrivateStorage(context))
            add(checkSharedStorage(context))
            add(checkFreeStorage(context))
            add(checkNetwork(context))
            add(checkWatchConnection(connectionState))
            add(checkScreenshotCache(context))
        }
    }

    private fun checkPrivateStorage(context: Context): DiagnosticCheckItem {
        return try {
            val probe = File.createTempFile("diagnostic-", ".tmp", context.cacheDir)
            probe.writeText("ok", Charsets.UTF_8)
            val valid = probe.readText(Charsets.UTF_8) == "ok"
            probe.delete()
            DiagnosticCheckItem(
                name = "应用存储",
                status = if (valid) DiagnosticCheckStatus.Passed else DiagnosticCheckStatus.Failed,
                summary = if (valid) "缓存目录读写正常" else "缓存目录写入后校验失败",
            )
        } catch (error: Exception) {
            DiagnosticCheckItem("应用存储", DiagnosticCheckStatus.Failed, error.message ?: "缓存目录不可写")
        }
    }

    private fun checkSharedStorage(context: Context): DiagnosticCheckItem {
        val mounted = Environment.getExternalStorageState() == Environment.MEDIA_MOUNTED
        val permissionGranted = Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q ||
            context.checkSelfPermission(Manifest.permission.WRITE_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED
        return when {
            !mounted -> DiagnosticCheckItem(
                "相册存储",
                DiagnosticCheckStatus.Failed,
                "共享存储当前未挂载",
            )
            !permissionGranted -> DiagnosticCheckItem(
                "相册存储",
                DiagnosticCheckStatus.Warning,
                "Android 8/9 尚未授予写入相册权限",
            )
            else -> DiagnosticCheckItem("相册存储", DiagnosticCheckStatus.Passed, "相册写入前置条件正常")
        }
    }

    private fun checkFreeStorage(context: Context): DiagnosticCheckItem {
        val freeBytes = context.filesDir.usableSpace
        val freeMb = freeBytes / 1024 / 1024
        return DiagnosticCheckItem(
            name = "剩余空间",
            status = if (freeBytes >= LOW_STORAGE_THRESHOLD_BYTES) {
                DiagnosticCheckStatus.Passed
            } else {
                DiagnosticCheckStatus.Warning
            },
            summary = "应用所在存储剩余 ${freeMb} MB",
        )
    }

    private fun checkNetwork(context: Context): DiagnosticCheckItem {
        val environment = collectEnvironment(context)
        return when {
            environment.network == "Offline" -> DiagnosticCheckItem(
                "网络环境",
                DiagnosticCheckStatus.Warning,
                "当前没有可用网络",
            )
            !environment.networkValidated -> DiagnosticCheckItem(
                "网络环境",
                DiagnosticCheckStatus.Warning,
                "${environment.network} 已连接，但系统尚未验证互联网可用",
            )
            else -> DiagnosticCheckItem(
                "网络环境",
                DiagnosticCheckStatus.Passed,
                "${environment.network} · ${if (environment.networkMetered) "计费网络" else "非计费网络"}",
            )
        }
    }

    private fun checkWatchConnection(connectionState: ConnectionState): DiagnosticCheckItem {
        return DiagnosticCheckItem(
            name = "手表连接",
            status = if (connectionState == ConnectionState.CONNECTED) {
                DiagnosticCheckStatus.Passed
            } else {
                DiagnosticCheckStatus.Warning
            },
            summary = if (connectionState == ConnectionState.CONNECTED) "握手连接正常" else "当前状态：$connectionState",
        )
    }

    private fun checkScreenshotCache(context: Context): DiagnosticCheckItem {
        val directory = File(context.filesDir, "screenshot_sync")
        val images = directory.listFiles { file ->
            file.isFile && file.extension.equals("png", ignoreCase = true)
        }.orEmpty()
        var invalidCount = 0
        images.forEach { file ->
            val options = BitmapFactory.Options().apply { inJustDecodeBounds = true }
            BitmapFactory.decodeFile(file.absolutePath, options)
            if (file.length() <= 0L || options.outWidth <= 0 || options.outHeight <= 0) invalidCount++
        }
        return when {
            invalidCount > 0 -> DiagnosticCheckItem(
                "截图缓存",
                DiagnosticCheckStatus.Failed,
                "发现 $invalidCount 个无法解码的截图文件",
            )
            else -> DiagnosticCheckItem(
                "截图缓存",
                DiagnosticCheckStatus.Passed,
                "${images.size} 个截图文件均可读取",
            )
        }
    }
}
