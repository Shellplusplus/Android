package com.shell.liangyi.core.update

import android.content.Context
import androidx.core.content.edit
import androidx.core.content.pm.PackageInfoCompat
import com.shell.liangyi.R
import com.shell.liangyi.core.onboarding.GitHubUrlResolver
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

object UpdateChecker {
    private const val UPDATE_URL = "https://api.github.com/repos/DefateStar/public-shellpp/releases/latest"
    private const val PREFS_NAME = "shell_update_state"
    private const val KEY_SKIP_OPTIONAL_PROMPTS = "skip_optional_prompts"
    private const val KEY_OPTIONAL_PROMPT_COUNT_VERSION_CODE = "optional_prompt_count_version_code"
    private const val KEY_OPTIONAL_PROMPT_DISPLAY_COUNT = "optional_prompt_display_count"
    private const val KEY_OPTIONAL_SKIP_UNLOCK_VERSION_CODE = "optional_skip_unlock_version_code"
    private const val KEY_OPTIONAL_SKIP_ENABLED_BASE_VERSION_CODE = "optional_skip_enabled_base_version_code"
    private const val KEY_LATEST_SEEN_OPTIONAL_VERSION_CODE = "latest_seen_optional_version_code"
    private const val KEY_MANDATORY_CONFIRMED = "mandatory_confirmed"
    private const val KEY_LATEST_VERSION = "latest_version"
    private const val KEY_LATEST_VERSION_CODE = "latest_version_code"
    private const val KEY_DOWNLOAD_URL = "download_url"
    private const val KEY_CHANGELOG = "changelog"
    private const val KEY_MIN_SUPPORTED_VERSION_CODE = "min_supported_version_code"
    private const val KEY_RELEASE_DATE = "release_date"

    fun skipOptionalPrompts(context: Context): Boolean {
        return readOptionalUpdatePreferenceState(context).skipOptionalPrompts
    }

    fun readOptionalUpdatePreferenceState(context: Context): OptionalUpdatePreferenceState {
        val currentVersionCode = readCurrentVersion(context).code
        return updateOptionalUpdatePreferenceState(context, currentVersionCode) { snapshot ->
            OptionalUpdatePreferenceStateMachine.normalize(snapshot, currentVersionCode)
        }
    }

    fun setSkipOptionalPrompts(context: Context, skip: Boolean): OptionalUpdatePreferenceState {
        val currentVersionCode = readCurrentVersion(context).code
        return updateOptionalUpdatePreferenceState(context, currentVersionCode) { snapshot ->
            OptionalUpdatePreferenceStateMachine.onSkipToggleChanged(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                enabled = skip,
            )
        }
    }

    fun recordOptionalUpdatePromptDisplayed(
        context: Context,
        latestVersionCode: Long,
    ): OptionalUpdatePreferenceState {
        val currentVersionCode = readCurrentVersion(context).code
        return updateOptionalUpdatePreferenceState(context, currentVersionCode) { snapshot ->
            OptionalUpdatePreferenceStateMachine.onPromptDisplayed(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                displayedVersionCode = latestVersionCode,
            )
        }
    }

    fun shouldSkipOptionalPrompt(
        context: Context,
        latestVersionCode: Long,
    ): Boolean {
        val currentVersionCode = readCurrentVersion(context).code
        val snapshot = OptionalUpdatePreferenceStateMachine.normalize(
            readOptionalUpdatePreferenceSnapshot(context),
            currentVersionCode,
        )
        persistOptionalUpdatePreferenceSnapshot(context, snapshot)
        return OptionalUpdatePreferenceStateMachine.shouldSuppressOptionalPrompt(
            snapshot = snapshot,
            currentVersionCode = currentVersionCode,
            latestVersionCode = latestVersionCode,
        )
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
            info = applyConfiguredProxy(
                context,
                AppUpdateInfo(
                latestVersion = prefs.getString(KEY_LATEST_VERSION, "").orEmpty(),
                latestVersionCode = latestVersionCode,
                downloadUrl = downloadUrl,
                changelog = prefs.getString(KEY_CHANGELOG, "").orEmpty(),
                minSupportedVersionCode = minSupportedVersionCode,
                releaseDate = prefs.getString(KEY_RELEASE_DATE, "").orEmpty(),
                ),
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
                setRequestProperty("User-Agent", "ShellPlusPlus-Android")
                setRequestProperty("X-GitHub-Api-Version", "2022-11-28")
            }

            val body: String
            val responseCode: Int
            try {
                responseCode = connection.responseCode
                val responseStream = if (responseCode in 200..299) {
                    connection.inputStream
                } else {
                    connection.errorStream ?: connection.inputStream
                }
                body = responseStream.use { input ->
                    BufferedReader(InputStreamReader(input, Charsets.UTF_8)).readText()
                }
            } finally {
                connection.disconnect()
            }
            if (responseCode !in 200..299) {
                throw IllegalStateException("GitHub API $responseCode: ${body.take(200)}")
            }

            val preferredAssetName = GitHubReleaseParser.preferredAssetName()
            val info = GitHubReleaseParser.parseRelease(
                json = JSONObject(body),
                preferredAssetName = preferredAssetName,
            )
            val resolvedInfo = applyConfiguredProxy(context, info)

            val currentVersion = readCurrentVersion(context)
            val mandatory = currentVersion.code < info.minSupportedVersionCode
            syncOptionalUpdatePreferenceState(context, currentVersion.code)

            if (!mandatory && info.latestVersionCode > currentVersion.code) {
                updateOptionalUpdatePreferenceState(context, currentVersion.code) { snapshot ->
                    OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(
                        snapshot = snapshot,
                        currentVersionCode = currentVersion.code,
                        latestVersionCode = info.latestVersionCode,
                    )
                }
            }

            if (mandatory) {
                saveMandatoryPrompt(context, info)
            } else {
                clearMandatoryPrompt(context)
            }

            if (mandatory || info.latestVersionCode > currentVersion.code) {
                UpdateCheckResult.UpdateAvailable(
                    UpdatePrompt(
                        info = resolvedInfo,
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
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit {
            putBoolean(KEY_MANDATORY_CONFIRMED, true)
            putString(KEY_LATEST_VERSION, info.latestVersion)
            putLong(KEY_LATEST_VERSION_CODE, info.latestVersionCode)
            putString(KEY_DOWNLOAD_URL, info.downloadUrl)
            putString(KEY_CHANGELOG, info.changelog)
            putLong(KEY_MIN_SUPPORTED_VERSION_CODE, info.minSupportedVersionCode)
            putString(KEY_RELEASE_DATE, info.releaseDate)
        }
    }

    private fun clearMandatoryPrompt(context: Context) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit {
            remove(KEY_MANDATORY_CONFIRMED)
            remove(KEY_LATEST_VERSION)
            remove(KEY_LATEST_VERSION_CODE)
            remove(KEY_DOWNLOAD_URL)
            remove(KEY_CHANGELOG)
            remove(KEY_MIN_SUPPORTED_VERSION_CODE)
            remove(KEY_RELEASE_DATE)
        }
    }

    private fun syncOptionalUpdatePreferenceState(
        context: Context,
        currentVersionCode: Long,
    ): OptionalUpdatePreferenceState {
        return updateOptionalUpdatePreferenceState(context, currentVersionCode) { snapshot ->
            OptionalUpdatePreferenceStateMachine.normalize(snapshot, currentVersionCode)
        }
    }

    private fun updateOptionalUpdatePreferenceState(
        context: Context,
        currentVersionCode: Long,
        transform: (OptionalUpdatePreferenceSnapshot) -> OptionalUpdatePreferenceSnapshot,
    ): OptionalUpdatePreferenceState {
        val currentSnapshot = readOptionalUpdatePreferenceSnapshot(context)
        val nextSnapshot = OptionalUpdatePreferenceStateMachine.normalize(
            transform(currentSnapshot),
            currentVersionCode,
        )
        persistOptionalUpdatePreferenceSnapshot(context, nextSnapshot)
        return OptionalUpdatePreferenceStateMachine.toState(nextSnapshot, currentVersionCode)
    }

    private fun readOptionalUpdatePreferenceSnapshot(context: Context): OptionalUpdatePreferenceSnapshot {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        return OptionalUpdatePreferenceSnapshot(
            skipOptionalPrompts = prefs.getBoolean(KEY_SKIP_OPTIONAL_PROMPTS, false),
            promptCountVersionCode = prefs.getLong(KEY_OPTIONAL_PROMPT_COUNT_VERSION_CODE, 0L),
            promptDisplayCount = prefs.getInt(KEY_OPTIONAL_PROMPT_DISPLAY_COUNT, 0),
            unlockVersionCode = prefs.getLong(KEY_OPTIONAL_SKIP_UNLOCK_VERSION_CODE, 0L),
            enabledBaseVersionCode = prefs.getLong(KEY_OPTIONAL_SKIP_ENABLED_BASE_VERSION_CODE, 0L),
            latestSeenOptionalVersionCode = prefs.getLong(KEY_LATEST_SEEN_OPTIONAL_VERSION_CODE, 0L),
        )
    }

    private fun persistOptionalUpdatePreferenceSnapshot(
        context: Context,
        snapshot: OptionalUpdatePreferenceSnapshot,
    ) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE).edit {
            putBoolean(KEY_SKIP_OPTIONAL_PROMPTS, snapshot.skipOptionalPrompts)
            putLong(KEY_OPTIONAL_PROMPT_COUNT_VERSION_CODE, snapshot.promptCountVersionCode)
            putInt(KEY_OPTIONAL_PROMPT_DISPLAY_COUNT, snapshot.promptDisplayCount)
            putLong(KEY_OPTIONAL_SKIP_UNLOCK_VERSION_CODE, snapshot.unlockVersionCode)
            putLong(KEY_OPTIONAL_SKIP_ENABLED_BASE_VERSION_CODE, snapshot.enabledBaseVersionCode)
            putLong(KEY_LATEST_SEEN_OPTIONAL_VERSION_CODE, snapshot.latestSeenOptionalVersionCode)
        }
    }

    private fun readCurrentVersion(context: Context): CurrentVersion {
        val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
        return CurrentVersion(
            name = packageInfo.versionName ?: "",
            code = PackageInfoCompat.getLongVersionCode(packageInfo),
        )
    }

    private fun applyConfiguredProxy(
        context: Context,
        info: AppUpdateInfo,
    ): AppUpdateInfo {
        return info.copy(
            downloadUrl = GitHubUrlResolver.resolveConfiguredDownloadUrl(
                context = context,
                originalUrl = info.downloadUrl,
            ),
        )
    }

    private data class CurrentVersion(
        val name: String,
        val code: Long,
    )
}
