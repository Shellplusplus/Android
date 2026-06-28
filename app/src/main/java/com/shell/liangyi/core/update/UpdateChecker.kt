package com.shell.liangyi.core.update

import android.content.Context
import androidx.core.content.pm.PackageInfoCompat
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

object UpdateChecker {
    private const val UPDATE_URL = "https://shellupdate.rth1.xyz/api.php"

    fun check(context: Context): UpdateCheckResult {
        return try {
            val connection = (URL(UPDATE_URL).openConnection() as HttpURLConnection).apply {
                requestMethod = "GET"
                connectTimeout = 15000
                readTimeout = 15000
                setRequestProperty("Accept", "application/json")
            }

            val body = connection.inputStream.use { input ->
                BufferedReader(InputStreamReader(input)).readText()
            }
            connection.disconnect()

            val json = JSONObject(body)
            val info = AppUpdateInfo(
                latestVersion = json.optString("latest_version", ""),
                latestVersionCode = json.optLong("latest_version_code", 0L),
                downloadUrl = json.optString("download_url", ""),
                changelog = json.optString("changelog", ""),
                minSupportedVersionCode = json.optLong("min_supported_version_code", 0L),
                releaseDate = json.optString("release_date", ""),
            )

            val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
            val currentVersionCode = PackageInfoCompat.getLongVersionCode(packageInfo)
            val currentVersionName = packageInfo.versionName ?: ""

            if (info.latestVersionCode > currentVersionCode) {
                UpdateCheckResult.UpdateAvailable(
                    UpdatePrompt(
                        info = info,
                        currentVersionName = currentVersionName,
                        currentVersionCode = currentVersionCode,
                        mandatory = currentVersionCode < info.minSupportedVersionCode,
                    )
                )
            } else {
                UpdateCheckResult.UpToDate
            }
        } catch (e: Exception) {
            UpdateCheckResult.Failed(e.message ?: "检测失败")
        }
    }
}
