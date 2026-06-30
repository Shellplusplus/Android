package com.shell.liangyi.core.update

import android.content.Context
import androidx.core.content.pm.PackageInfoCompat
import com.shell.liangyi.R
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

object UpdateChecker {
    private const val UPDATE_URL = "https://shellupdate.rth1.xyz/api.php"
    private const val PREFS_NAME = "shell_update_state"
    private const val KEY_SKIP_OPTIONAL_PROMPTS = "skip_optional_prompts"
    private const val KEY_MANDATORY_CONFIRMED = "mandatory_confirmed"
    private const val KEY_LATEST_VERSION = "latest_version"
    private const val KEY_LATEST_VERSION_CODE = "latest_version_code"
    private const val KEY_DOWNLOAD_URL = "download_url"
    private const val KEY_CHANGELOG = "changelog"
    private const val KEY_MIN_SUPPORTED_VERSION_CODE = "min_supported_version_code"
    private const val KEY_RELEASE_DATE = "release_date"

    fun skipOptionalPrompts(context: Context): Boolean {
        return context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .getBoolean(KEY_SKIP_OPTIONAL_PROMPTS, false)
    }

    fun setSkipOptionalPrompts(context: Context, skip: Boolean) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .putBoolean(KEY_SKIP_OPTIONAL_PROMPTS, skip)
            .apply()
    }

    fun cachedMandatoryPrompt(context: Context): UpdatePrompt? {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        if (!prefs.getBoolean(KEY_MANDATORY_CONFIRMED, false)) return null

        val currentVersion = readCurrentVersion(context)
        val latestVersionCode = prefs.getLong(KEY_LATEST_VERSION_CODE, 0L)
        val minSupportedVersionCode = prefs.getLong(KEY_MIN_SUPPORTED_VERSION_CODE, 0L)
        val downloadUrl = prefs.getString(KEY_DOWNLOAD_URL, "").orEmpty()

        if (
            minSupportedVersionCode <= currentVersion.code ||
            latestVersionCode <= currentVersion.code ||
            downloadUrl.isBlank()
        ) {
            clearMandatoryPrompt(context)
            return null
        }

        return UpdatePrompt(
            info = AppUpdateInfo(
                latestVersion = prefs.getString(KEY_LATEST_VERSION, "").orEmpty(),
                latestVersionCode = latestVersionCode,
                downloadUrl = downloadUrl,
                changelog = prefs.getString(KEY_CHANGELOG, "").orEmpty(),
                minSupportedVersionCode = minSupportedVersionCode,
                releaseDate = prefs.getString(KEY_RELEASE_DATE, "").orEmpty(),
            ),
            currentVersionName = currentVersion.name,
            currentVersionCode = currentVersion.code,
            mandatory = true,
        )
    }

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

            val currentVersion = readCurrentVersion(context)
            val mandatory = currentVersion.code < info.minSupportedVersionCode

            if (mandatory) {
                saveMandatoryPrompt(context, info)
            } else {
                clearMandatoryPrompt(context)
            }

            if (mandatory || info.latestVersionCode > currentVersion.code) {
                UpdateCheckResult.UpdateAvailable(
                    UpdatePrompt(
                        info = info,
                        currentVersionName = currentVersion.name,
                        currentVersionCode = currentVersion.code,
                        mandatory = mandatory,
                    )
                )
            } else {
                UpdateCheckResult.UpToDate
            }
        } catch (e: Exception) {
            UpdateCheckResult.Failed(
                e.message ?: context.getString(R.string.update_check_failed_default)
            )
        }
    }

    private fun saveMandatoryPrompt(context: Context, info: AppUpdateInfo) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .putBoolean(KEY_MANDATORY_CONFIRMED, true)
            .putString(KEY_LATEST_VERSION, info.latestVersion)
            .putLong(KEY_LATEST_VERSION_CODE, info.latestVersionCode)
            .putString(KEY_DOWNLOAD_URL, info.downloadUrl)
            .putString(KEY_CHANGELOG, info.changelog)
            .putLong(KEY_MIN_SUPPORTED_VERSION_CODE, info.minSupportedVersionCode)
            .putString(KEY_RELEASE_DATE, info.releaseDate)
            .apply()
    }

    private fun clearMandatoryPrompt(context: Context) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val skipOptionalPrompts = prefs.getBoolean(KEY_SKIP_OPTIONAL_PROMPTS, false)
        prefs.edit().clear().apply()
        if (skipOptionalPrompts) {
            prefs.edit()
                .putBoolean(KEY_SKIP_OPTIONAL_PROMPTS, true)
                .apply()
        }
    }

    private fun readCurrentVersion(context: Context): CurrentVersion {
        val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
        return CurrentVersion(
            name = packageInfo.versionName ?: "",
            code = PackageInfoCompat.getLongVersionCode(packageInfo),
        )
    }

    private data class CurrentVersion(
        val name: String,
        val code: Long,
    )
}
