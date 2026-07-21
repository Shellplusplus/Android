package com.shell.liangyi.core.update

import android.content.Context
import android.content.Intent
import android.provider.Settings
import androidx.core.content.FileProvider
import androidx.core.net.toUri
import java.io.File

object UpdateInstaller {

    fun canRequestPackageInstalls(context: Context): Boolean {
        return context.packageManager.canRequestPackageInstalls()
    }

    fun createInstallPermissionIntent(context: Context): Intent {
        return Intent(
            Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
            "package:${context.packageName}".toUri(),
        )
    }

    fun launchInstaller(
        context: Context,
        apkFilePath: String,
    ) {
        check(canRequestPackageInstalls(context)) { "Install unknown apps permission is not granted." }

        val apkFile = resolveInstallableApk(
            cacheDir = context.cacheDir,
            apkFilePath = apkFilePath,
        )

        val uri = FileProvider.getUriForFile(
            context,
            "${context.packageName}.fileprovider",
            apkFile,
        )

        context.startActivity(
            Intent(Intent.ACTION_VIEW).apply {
                setDataAndType(uri, "application/vnd.android.package-archive")
                addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
            },
        )
    }

    internal fun resolveInstallableApk(
        cacheDir: File,
        apkFilePath: String,
    ): File {
        val updatesDir = File(cacheDir, "updates").canonicalFile
        val apkFile = File(apkFilePath).canonicalFile
        require(apkFile.exists() && apkFile.isFile) { "APK file does not exist." }
        require(apkFile.extension.equals("apk", ignoreCase = true)) { "Update file is not an APK." }
        require(apkFile.isInside(updatesDir)) { "APK file is outside the update cache." }
        return apkFile
    }

    private fun File.isInside(parent: File): Boolean {
        return path == parent.path || path.startsWith(parent.path + File.separator)
    }
}
