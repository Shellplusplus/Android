package com.shell.liangyi.core.update

import android.content.Context
import android.content.Intent
import androidx.core.content.FileProvider
import java.io.File

object UpdateInstaller {

    fun launchInstaller(
        context: Context,
        apkFilePath: String,
    ) {
        val apkFile = File(apkFilePath)
        require(apkFile.exists()) { "APK file does not exist." }

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
}
