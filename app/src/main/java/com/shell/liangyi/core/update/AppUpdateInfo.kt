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

data class UpdateDownloadUiState(
    val isVisible: Boolean = false,
    val versionLabel: String = "",
    val statusText: String = "",
    val detailText: String = "",
    val progress: Float? = null,
    val isIndeterminate: Boolean = true,
)

sealed interface UpdateCheckResult {
    data class UpdateAvailable(val prompt: UpdatePrompt) : UpdateCheckResult
    data object UpToDate : UpdateCheckResult
    data class Failed(val message: String) : UpdateCheckResult
}
