package com.shell.liangyi.ui

import android.content.Context
import android.text.format.Formatter
import androidx.lifecycle.ViewModel
import com.shell.liangyi.R
import com.shell.liangyi.core.RemoteAppManagerState
import com.shell.liangyi.core.RemoteCacheCleanState
import com.shell.liangyi.core.RemoteFileViewerState
import com.shell.liangyi.core.RemoteToolController
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.core.onboarding.GitHubProxyBenchmarkUiState
import com.shell.liangyi.core.onboarding.GitHubProxyBenchmarker
import com.shell.liangyi.core.onboarding.GitHubProxySelection
import com.shell.liangyi.core.onboarding.GitHubProxySources
import com.shell.liangyi.core.onboarding.OnboardingState
import com.shell.liangyi.core.onboarding.OnboardingStateStore
import com.shell.liangyi.core.update.InAppUpdateDownloader
import com.shell.liangyi.core.update.OptionalUpdatePreferenceState
import com.shell.liangyi.core.update.UpdateCheckResult
import com.shell.liangyi.core.update.UpdateChecker
import com.shell.liangyi.core.update.UpdateDownloadUiState
import com.shell.liangyi.core.update.UpdatePrompt
import com.shell.liangyi.model.Screenshot
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.util.Locale

class ShellViewModel : ViewModel() {

    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main)
    private var githubProxyManualSelection = false
    private var updateDownloadJob: Job? = null
    private var activeDownloadPrompt: UpdatePrompt? = null

    lateinit var wearMessageCenter: WearMessageCenter
        private set

    lateinit var screenshotReceiver: ScreenshotReceiver
        private set

    lateinit var remoteToolController: RemoteToolController
        private set

    lateinit var onboardingStateStore: OnboardingStateStore
        private set

    private var appCtx: Context? = null
    private var autoUpdateChecked = false

    private val _showOnboarding = MutableStateFlow(false)
    val showOnboarding = _showOnboarding.asStateFlow()
    private val _selectedGitHubProxySourceId = MutableStateFlow(GitHubProxySources.ghfast.id)
    val selectedGitHubProxySourceId = _selectedGitHubProxySourceId.asStateFlow()
    private val _customGitHubProxyBaseUrl = MutableStateFlow("")
    val customGitHubProxyBaseUrl = _customGitHubProxyBaseUrl.asStateFlow()
    private val _gitHubProxyBenchmarkState = MutableStateFlow(GitHubProxyBenchmarkUiState())
    val gitHubProxyBenchmarkState = _gitHubProxyBenchmarkState.asStateFlow()
    private val _updatePrompt = MutableStateFlow<UpdatePrompt?>(null)
    val updatePrompt = _updatePrompt.asStateFlow()
    private val _updateDownloadState = MutableStateFlow(UpdateDownloadUiState())
    val updateDownloadState = _updateDownloadState.asStateFlow()
    private val _skipOptionalUpdatePrompts = MutableStateFlow(false)
    val skipOptionalUpdatePrompts = _skipOptionalUpdatePrompts.asStateFlow()
    private val _skipOptionalUpdateAvailable = MutableStateFlow(false)
    val skipOptionalUpdateAvailable = _skipOptionalUpdateAvailable.asStateFlow()
    private val _skipOptionalUpdateHint = MutableStateFlow("")
    val skipOptionalUpdateHint = _skipOptionalUpdateHint.asStateFlow()
    private val _skipOptionalUpdateInfoDialogVisible = MutableStateFlow(false)
    val skipOptionalUpdateInfoDialogVisible = _skipOptionalUpdateInfoDialogVisible.asStateFlow()
    private val _deleteScreenshotConfirmShotId = MutableStateFlow<String?>(null)
    val deleteScreenshotConfirmShotId = _deleteScreenshotConfirmShotId.asStateFlow()

    private val _updateMessages = MutableSharedFlow<String>(extraBufferCapacity = 1)
    val updateMessages = _updateMessages.asSharedFlow()
    private val _installUpdateRequests = MutableSharedFlow<String>(extraBufferCapacity = 1)
    val installUpdateRequests = _installUpdateRequests.asSharedFlow()

    fun initialize(context: Context) {
        appCtx = context
        onboardingStateStore = OnboardingStateStore.from(context)
        applyOnboardingState(onboardingStateStore.readState())
        applyOptionalUpdatePreferenceState(
            context,
            UpdateChecker.readOptionalUpdatePreferenceState(context),
        )
        wearMessageCenter = WearMessageCenter.getInstance(context)
        wearMessageCenter.initialize()
        screenshotReceiver = ScreenshotReceiver(context, scope)
        remoteToolController = RemoteToolController(context, scope, wearMessageCenter)
    }

    val connectionState: SharedFlow<com.shell.liangyi.core.ConnectionState>
        get() = wearMessageCenter.connectionState

    val logs: SharedFlow<List<com.shell.liangyi.core.LogEntry>>
        get() = wearMessageCenter.logs

    val watchProductCode: StateFlow<String>
        get() = wearMessageCenter.watchProductCode

    fun clearLogs() = wearMessageCenter.clearLogs()

    val screenshots: StateFlow<List<Screenshot>>
        get() = screenshotReceiver.screenshots

    val syncState: StateFlow<ScreenshotReceiver.SyncState>
        get() = screenshotReceiver.syncState

    val receiveProgress: StateFlow<String>
        get() = screenshotReceiver.receiveProgress

    val httpServerRunning: StateFlow<Boolean>
        get() = screenshotReceiver.httpServerRunning

    val httpTransferInProgress: StateFlow<Boolean>
        get() = screenshotReceiver.httpTransferInProgress

    val httpServerIp: StateFlow<String>
        get() = screenshotReceiver.httpServerIp

    val httpServerPort: StateFlow<Int>
        get() = screenshotReceiver.httpServerPort

    val remoteFileViewerState: StateFlow<RemoteFileViewerState>
        get() = remoteToolController.fileViewerState

    val remoteCacheCleanState: StateFlow<RemoteCacheCleanState>
        get() = remoteToolController.cacheCleanState

    val remoteAppManagerState: StateFlow<RemoteAppManagerState>
        get() = remoteToolController.appManagerState

    val remoteToolMessages: SharedFlow<String>
        get() = remoteToolController.messages

    fun requestFromWatch() = screenshotReceiver.requestFromWatch()
    fun ensureConnection() = wearMessageCenter.ensureConnection()
    fun requestScreenshot(shotId: String) = screenshotReceiver.requestScreenshot(shotId)
    fun deleteScreenshot(shotId: String) = screenshotReceiver.deleteScreenshot(shotId)
    fun showDeleteScreenshotConfirm(shotId: String) {
        _deleteScreenshotConfirmShotId.value = shotId
    }
    fun dismissDeleteScreenshotConfirm() {
        _deleteScreenshotConfirmShotId.value = null
    }
    fun startHttpServer(): String? {
        if (isLanTransferBlocked()) {
            return null
        }
        return screenshotReceiver.startHttpServer()
    }
    fun stopHttpServer() = screenshotReceiver.stopHttpServer()
    fun appContext(): Context = appCtx!!

    fun isLanTransferBlocked(productCode: String = watchProductCode.value): Boolean {
        val normalized = productCode
            .trim()
            .lowercase(Locale.ROOT)
            .replace(Regex("[^a-z0-9]+"), "")
        return normalized == "10pro" || normalized.contains("band10pro")
    }

    fun getScreenshotFilePath(shotId: String): String? {
        val existingPath = screenshotReceiver.screenshots.value
            .firstOrNull { it.shotId == shotId }
            ?.localFilePath
            ?.takeIf { it.isNotBlank() }
        return existingPath ?: screenshotReceiver.getLocalFilePath(shotId)
    }

    fun clearAll() = screenshotReceiver.clearAll()
    fun refreshRemoteFileViewerRoot() = remoteToolController.refreshFileViewerRoot()
    fun listRemoteFilePath(path: String) = remoteToolController.listFilePath(path)
    fun openRemoteFileInfo(path: String) = remoteToolController.openFileInfo(path)
    fun openRemoteFileText() = remoteToolController.openFileText()
    fun openRemoteFileHex(offset: Int) = remoteToolController.openFileHex(offset)
    fun openRemoteFileImage() = remoteToolController.openFileImage()
    fun showRemoteFileList() = remoteToolController.showFileList()
    fun showRemoteFileInfo() = remoteToolController.showFileInfo()
    fun refreshRemoteCacheStatus() = remoteToolController.refreshCacheStatus()
    fun clearRemoteCache() = remoteToolController.clearCache()
    fun refreshRemoteApps() = remoteToolController.refreshApps()
    fun toggleRemoteAppSelection(packageName: String) = remoteToolController.toggleAppSelection(packageName)
    fun toggleAllRemoteApps() = remoteToolController.toggleAllApps()
    fun hideSelectedRemoteApps() = remoteToolController.hideSelectedApps()
    fun showSelectedRemoteApps() = remoteToolController.showSelectedApps()
    fun hideAllRemoteApps() = remoteToolController.hideAllApps()
    fun showAllRemoteApps() = remoteToolController.showAllApps()
    fun deleteSelectedRemoteApps() = remoteToolController.deleteSelectedApps()

    fun restartOnboarding() {
        applyOnboardingState(onboardingStateStore.readState())
        _showOnboarding.value = true
    }

    fun completeOnboarding() {
        val benchmarkResult = _gitHubProxyBenchmarkState.value.results.firstOrNull {
            it.sourceId == _selectedGitHubProxySourceId.value && it.success
        }
        onboardingStateStore.saveProxySelection(
            selection = currentGitHubProxySelection(),
            benchmarkMs = benchmarkResult?.latencyMs,
            benchmarkAt = _gitHubProxyBenchmarkState.value.lastRunAt,
        )
        onboardingStateStore.setOnboardingCompleted(true)
        _showOnboarding.value = false
    }

    fun selectGitHubProxy(sourceId: String, fromUser: Boolean = true) {
        _selectedGitHubProxySourceId.value = GitHubProxySources.findById(sourceId).id
        if (fromUser) {
            githubProxyManualSelection = true
        }
    }

    fun updateCustomGitHubProxyBaseUrl(value: String, fromUser: Boolean = true) {
        _customGitHubProxyBaseUrl.value = value
        if (fromUser) {
            githubProxyManualSelection = true
        }
    }

    fun runGitHubProxyBenchmark(resetManualSelection: Boolean = false) {
        if (_gitHubProxyBenchmarkState.value.isRunning) return
        if (resetManualSelection) {
            githubProxyManualSelection = false
        }
        _gitHubProxyBenchmarkState.value = _gitHubProxyBenchmarkState.value.copy(
            isRunning = true,
        )
        scope.launch {
            val results = withContext(Dispatchers.IO) {
                GitHubProxyBenchmarker.benchmarkBuiltInSources()
            }
            val fastestSourceId = GitHubProxyBenchmarker.fastestAvailableSourceId(results)
            val lastRunAt = System.currentTimeMillis()
            _gitHubProxyBenchmarkState.value = GitHubProxyBenchmarkUiState(
                isRunning = false,
                results = results,
                fastestSourceId = fastestSourceId,
                lastRunAt = lastRunAt,
            )
            if ((!githubProxyManualSelection || resetManualSelection) && fastestSourceId != null) {
                _selectedGitHubProxySourceId.value = fastestSourceId
            }
        }
    }

    fun setSkipOptionalUpdatePrompts(skip: Boolean) {
        val context = appCtx ?: return
        val nextState = UpdateChecker.setSkipOptionalPrompts(context, skip)
        applyOptionalUpdatePreferenceState(context, nextState)
        if (nextState.skipOptionalPrompts && _updatePrompt.value?.mandatory == false) {
            _updatePrompt.value = null
        }
    }

    fun showSkipOptionalUpdateInfoDialog() {
        if (!_skipOptionalUpdateAvailable.value) {
            _skipOptionalUpdateInfoDialogVisible.value = true
        }
    }

    fun dismissSkipOptionalUpdateInfoDialog() {
        _skipOptionalUpdateInfoDialogVisible.value = false
    }

    fun checkForUpdates(manual: Boolean) {
        if (!manual && autoUpdateChecked) return
        if (!manual) autoUpdateChecked = true

        val context = appCtx ?: return
        val cachedMandatoryPrompt = UpdateChecker.cachedMandatoryPrompt(context)
        if (cachedMandatoryPrompt != null) {
            _updatePrompt.value = cachedMandatoryPrompt
        }

        scope.launch {
            when (val result = withContext(Dispatchers.IO) { UpdateChecker.check(context) }) {
                is UpdateCheckResult.UpdateAvailable -> {
                    if (!result.prompt.mandatory) {
                        if (!manual && UpdateChecker.shouldSkipOptionalPrompt(context, result.prompt.info.latestVersionCode)) {
                            applyOptionalUpdatePreferenceState(
                                context,
                                UpdateChecker.readOptionalUpdatePreferenceState(context),
                            )
                            return@launch
                        }
                        applyOptionalUpdatePreferenceState(
                            context,
                            UpdateChecker.recordOptionalUpdatePromptDisplayed(
                                context,
                                result.prompt.info.latestVersionCode,
                            ),
                        )
                    } else {
                        applyOptionalUpdatePreferenceState(
                            context,
                            UpdateChecker.readOptionalUpdatePreferenceState(context),
                        )
                    }
                    _updatePrompt.value = result.prompt
                }
                is UpdateCheckResult.UpToDate -> {
                    applyOptionalUpdatePreferenceState(
                        context,
                        UpdateChecker.readOptionalUpdatePreferenceState(context),
                    )
                    if (_updatePrompt.value?.mandatory == true) {
                        _updatePrompt.value = null
                    }
                    if (manual) {
                        _updateMessages.tryEmit(context.getString(R.string.already_latest_version))
                    }
                }
                is UpdateCheckResult.Failed -> {
                    applyOptionalUpdatePreferenceState(
                        context,
                        UpdateChecker.readOptionalUpdatePreferenceState(context),
                    )
                    if (manual) {
                        _updateMessages.tryEmit(
                            context.getString(R.string.update_check_failed, result.message)
                        )
                    }
                }
            }
        }
    }

    fun dismissUpdatePrompt() {
        _updatePrompt.value = null
    }

    fun startUpdateDownload(prompt: UpdatePrompt) {
        val context = appCtx ?: return
        if (updateDownloadJob?.isActive == true) return

        activeDownloadPrompt = prompt
        _updatePrompt.value = null
        _updateDownloadState.value = UpdateDownloadUiState(
            isVisible = true,
            versionLabel = buildUpdateVersionLabel(context, prompt),
            statusText = context.getString(R.string.update_preparing_download),
            detailText = "",
            progress = null,
            isIndeterminate = true,
        )

        updateDownloadJob = scope.launch {
            runCatching {
                withContext(Dispatchers.IO) {
                    InAppUpdateDownloader.downloadApk(
                        context = context,
                        url = prompt.info.downloadUrl,
                        versionName = prompt.info.latestVersion,
                    ) { downloadedBytes, totalBytes ->
                        _updateDownloadState.value = buildDownloadState(
                            context = context,
                            prompt = prompt,
                            downloadedBytes = downloadedBytes,
                            totalBytes = totalBytes,
                        )
                    }
                }
            }.onSuccess { apkFile ->
                _updateDownloadState.value = UpdateDownloadUiState(
                    isVisible = true,
                    versionLabel = buildUpdateVersionLabel(context, prompt),
                    statusText = context.getString(R.string.update_installing_status),
                    detailText = apkFile.name,
                    progress = 1f,
                    isIndeterminate = false,
                )
                _installUpdateRequests.emit(apkFile.absolutePath)
            }.onFailure { throwable ->
                _updateDownloadState.value = UpdateDownloadUiState()
                activeDownloadPrompt?.let { _updatePrompt.value = it }
                _updateMessages.tryEmit(
                    context.getString(
                        R.string.update_download_failed,
                        throwable.message ?: context.getString(R.string.update_download_failed_default),
                    ),
                )
            }
        }
    }

    fun onUpdateInstallerLaunched() {
        _updateDownloadState.value = UpdateDownloadUiState()
        activeDownloadPrompt = null
    }

    fun onUpdateInstallerLaunchFailed(message: String) {
        val context = appCtx ?: return
        _updateDownloadState.value = UpdateDownloadUiState()
        activeDownloadPrompt?.let { _updatePrompt.value = it }
        _updateMessages.tryEmit(
            context.getString(R.string.update_install_launch_failed, message),
        )
    }

    private fun applyOnboardingState(state: OnboardingState) {
        _showOnboarding.value = !state.completed
        _selectedGitHubProxySourceId.value = GitHubProxySources.findById(
            state.proxySelection.sourceId,
        ).id
        _customGitHubProxyBaseUrl.value = state.proxySelection.customBaseUrl
        _gitHubProxyBenchmarkState.value = GitHubProxyBenchmarkUiState(
            lastRunAt = state.lastBenchmarkAt,
        )
        githubProxyManualSelection = false
    }

    private fun currentGitHubProxySelection(): GitHubProxySelection {
        return GitHubProxySelection(
            sourceId = _selectedGitHubProxySourceId.value,
            customBaseUrl = _customGitHubProxyBaseUrl.value,
        )
    }

    private fun applyOptionalUpdatePreferenceState(
        context: Context,
        state: OptionalUpdatePreferenceState,
    ) {
        _skipOptionalUpdatePrompts.value = state.skipOptionalPrompts
        _skipOptionalUpdateAvailable.value = state.skipOptionalUpdateAvailable
        _skipOptionalUpdateHint.value = if (state.skipOptionalUpdateAvailable) {
            context.getString(R.string.skip_optional_updates_summary)
        } else {
            context.getString(
                R.string.skip_optional_updates_locked_summary,
                state.promptDisplayCount.coerceIn(0, 3),
            )
        }
        if (state.skipOptionalUpdateAvailable) {
            _skipOptionalUpdateInfoDialogVisible.value = false
        }
    }

    private fun buildDownloadState(
        context: Context,
        prompt: UpdatePrompt,
        downloadedBytes: Long,
        totalBytes: Long?,
    ): UpdateDownloadUiState {
        val progress = totalBytes
            ?.takeIf { it > 0L }
            ?.let { downloadedBytes.toFloat() / it.toFloat() }
            ?.coerceIn(0f, 1f)
        val downloadedText = Formatter.formatShortFileSize(context, downloadedBytes)
        val detailText = if (totalBytes != null) {
            context.getString(
                R.string.update_download_progress,
                ((progress ?: 0f) * 100).toInt().coerceIn(0, 100),
                downloadedText,
                Formatter.formatShortFileSize(context, totalBytes),
            )
        } else {
            context.getString(
                R.string.update_download_progress_unknown,
                downloadedText,
            )
        }

        return UpdateDownloadUiState(
            isVisible = true,
            versionLabel = buildUpdateVersionLabel(context, prompt),
            statusText = context.getString(R.string.update_downloading_status),
            detailText = detailText,
            progress = progress,
            isIndeterminate = totalBytes == null,
        )
    }

    private fun buildUpdateVersionLabel(
        context: Context,
        prompt: UpdatePrompt,
    ): String {
        return context.getString(
            R.string.update_download_version,
            prompt.info.latestVersion,
            prompt.info.latestVersionCode.toString(),
        )
    }

    override fun onCleared() {
        super.onCleared()
        updateDownloadJob?.cancel()
        if (::remoteToolController.isInitialized) {
            remoteToolController.destroy()
        }
        wearMessageCenter.destroy()
    }
}
