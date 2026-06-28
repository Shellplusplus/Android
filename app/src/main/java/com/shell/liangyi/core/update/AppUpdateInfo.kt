package com.shell.liangyi.core.update

data class AppUpdateInfo(
    val latestVersion: String,
    val latestVersionCode: Long,
    val downloadUrl: String,
    val changelog: String,
    val minSupportedVersionCode: Long,
    val releaseDate: String,
)

data class UpdatePrompt(
    val info: AppUpdateInfo,
    val currentVersionName: String,
    val currentVersionCode: Long,
    val mandatory: Boolean,
)

sealed interface UpdateCheckResult {
    data class UpdateAvailable(val prompt: UpdatePrompt) : UpdateCheckResult
    data object UpToDate : UpdateCheckResult
    data class Failed(val message: String) : UpdateCheckResult
}
