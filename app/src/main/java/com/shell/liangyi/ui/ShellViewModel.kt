package com.shell.liangyi.ui

import android.content.Context
import android.text.format.Formatter
import androidx.lifecycle.ViewModel
import com.shell.liangyi.R
import com.shell.liangyi.core.RemoteExecResult
import com.shell.liangyi.core.RemoteFileViewerState
import com.shell.liangyi.core.RemoteTerminalBridge
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
import com.shell.liangyi.security.ai.AiLicenseManager
import com.shell.liangyi.security.ai.AiLicenseState
import com.shell.liangyi.ui.terminal.RemoteTerminalGuard
import com.shell.liangyi.ui.terminal.RemoteTerminalResultKind
import com.shell.liangyi.ui.terminal.RemoteTerminalUiState
import com.shell.liangyi.ui.terminal.RemoteTerminalValidationError
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
import org.json.JSONArray
import java.util.Locale

class ShellViewModel : ViewModel() {

    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main)
    private var githubProxyManualSelection = false
    private var updateDownloadJob: Job? = null
    private var activeDownloadPrompt: UpdatePrompt? = null
    private lateinit var remoteTerminalBridge: RemoteTerminalBridge

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
    private var aiLicenseManager: AiLicenseManager? = null

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
    private val _aiLicenseState = MutableStateFlow(AiLicenseState())
    val aiLicenseState: StateFlow<AiLicenseState> = _aiLicenseState.asStateFlow()

    private val _updateMessages = MutableSharedFlow<String>(extraBufferCapacity = 1)
    val updateMessages = _updateMessages.asSharedFlow()
    private val _installUpdateRequests = MutableSharedFlow<String>(extraBufferCapacity = 1)
    val installUpdateRequests = _installUpdateRequests.asSharedFlow()
    private val _remoteTerminalUiState = MutableStateFlow(RemoteTerminalUiState())
    val remoteTerminalUiState = _remoteTerminalUiState.asStateFlow()
    private val _remoteTerminalMessages = MutableSharedFlow<String>(extraBufferCapacity = 1)
    val remoteTerminalMessages = _remoteTerminalMessages.asSharedFlow()

    fun initialize(context: Context) {
        appCtx = context
        aiLicenseManager = AiLicenseManager(context)
        _aiLicenseState.value = aiLicenseManager!!.currentState()
        onboardingStateStore = OnboardingStateStore.from(context)
        applyOnboardingState(onboardingStateStore.readState())
        applyOptionalUpdatePreferenceState(
            context,
            UpdateChecker.readOptionalUpdatePreferenceState(context),
        )
        wearMessageCenter = WearMessageCenter.getInstance(context)
        wearMessageCenter.initialize()
        remoteTerminalBridge = RemoteTerminalBridge(wearMessageCenter, scope)
        screenshotReceiver = ScreenshotReceiver(context, scope)
        remoteToolController = RemoteToolController(context, scope, wearMessageCenter)
        loadRemoteTerminalPreferences(context)
}
    fun refreshAiLicense() {
        val manager = aiLicenseManager ?: return
        scope.launch {
            _aiLicenseState.value = manager.refresh()
        }
    }

    fun importAiLicense(content: String): Result<AiLicenseState> {
        val result = aiLicenseManager?.importLicense(content)
            ?: Result.failure(IllegalStateException("应用尚未初始化"))
        result.onSuccess { _aiLicenseState.value = it }
        return result
    }

    fun exportAiLicenseRequest(): String =
        aiLicenseManager?.exportRequest() ?: throw IllegalStateException("应用尚未初始化")

    fun clearAiLicense() {
        aiLicenseManager?.clearLicense()
        _aiLicenseState.value = aiLicenseManager?.currentState() ?: AiLicenseState()
    }

    fun hasAiLicenseAccess(): Boolean = aiLicenseManager?.hasAccess() == true

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
    fun updateRemoteTerminalInput(value: String) {
        _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(input = value)
    }

    fun applyRemoteTerminalCommand(command: String) {
        _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(input = command)
    }

    fun toggleRemoteTerminalFavorite(command: String) {
        val context = appCtx ?: return
        val current = _remoteTerminalUiState.value.favorites.toMutableList()
        if (current.contains(command)) {
            current.remove(command)
        } else {
            current.add(0, command)
        }
        val normalized = normalizeRemoteTerminalList(current, limit = 12)
        _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(favorites = normalized)
        saveRemoteTerminalList(context, REMOTE_TERMINAL_FAVORITES_KEY, normalized)
    }

    fun sendRemoteTerminalCommand() {
        val command = _remoteTerminalUiState.value.input.trim()
        val validationError = RemoteTerminalGuard.validate(command)
        if (validationError != null) {
            scope.launch {
                _remoteTerminalMessages.emit(validationMessage(validationError))
            }
            if (command.isNotBlank()) {
                val output = buildString {
                    append("> ").append(command).append("\n\n")
                    append(validationMessage(validationError))
                }
                _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(
                    lastCommand = command,
                    hasResult = true,
                    resultKind = RemoteTerminalResultKind.Error,
                    output = output,
                    fullOutput = output,
                )
            }
            return
        }

        if (_remoteTerminalUiState.value.isRunning) {
            return
        }

        val context = appCtx ?: return
        val nextHistory = normalizeRemoteTerminalList(
            listOf(command) + _remoteTerminalUiState.value.history,
            limit = REMOTE_TERMINAL_HISTORY_LIMIT,
        )
        saveRemoteTerminalList(context, REMOTE_TERMINAL_HISTORY_KEY, nextHistory)
        _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(
            input = "",
            lastCommand = command,
            hasResult = true,
            isRunning = true,
            resultKind = RemoteTerminalResultKind.Waiting,
            history = nextHistory,
            output = "> $command\n\n等待手表返回执行结果...",
            fullOutput = "> $command\n\n等待手表返回执行结果...",
        )

        scope.launch {
            runCatching {
                withContext(Dispatchers.IO) {
                    remoteTerminalBridge.runCommand(command)
                }
            }.onSuccess { result ->
                val output = buildRemoteTerminalOutput(command, result)
                _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(
                    isRunning = false,
                    resultKind = if (result.timedOut || result.stderr.isNotBlank()) {
                        RemoteTerminalResultKind.Error
                    } else {
                        RemoteTerminalResultKind.Success
                    },
                    output = output,
                    fullOutput = output,
                )
                _remoteTerminalMessages.emit("命令已执行完成")
            }.onFailure { error ->
                val reason = remoteTerminalFailureMessage(error.message ?: "unknown")
                val output = buildString {
                    append("> ").append(command).append("\n\n")
                    append(reason)
                }
                _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(
                    isRunning = false,
                    resultKind = RemoteTerminalResultKind.Error,
                    output = output,
                    fullOutput = output,
                )
                _remoteTerminalMessages.emit(reason)
            }
        }
    }

    fun refreshRemoteFileViewerRoot() = remoteToolController.refreshFileViewerRoot()
    fun listRemoteFilePath(path: String) = remoteToolController.listFilePath(path)
    fun openRemoteFileInfo(path: String) = remoteToolController.openFileInfo(path)
    fun openRemoteFileText() = remoteToolController.openFileText()
    fun openRemoteFileHex(offset: Int) = remoteToolController.openFileHex(offset)
    fun openRemoteFileImage() = remoteToolController.openFileImage()
    fun showRemoteFileList() = remoteToolController.showFileList()
    fun showRemoteFileInfo() = remoteToolController.showFileInfo()
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

    private fun loadRemoteTerminalPreferences(context: Context) {
        val prefs = context.getSharedPreferences(REMOTE_TERMINAL_PREFS, Context.MODE_PRIVATE)
        _remoteTerminalUiState.value = _remoteTerminalUiState.value.copy(
            history = readRemoteTerminalList(
                raw = prefs.getString(REMOTE_TERMINAL_HISTORY_KEY, null),
                limit = REMOTE_TERMINAL_HISTORY_LIMIT,
            ),
            favorites = readRemoteTerminalList(
                raw = prefs.getString(REMOTE_TERMINAL_FAVORITES_KEY, null),
                limit = 12,
            ),
        )
    }

    private fun saveRemoteTerminalList(
        context: Context,
        key: String,
        values: List<String>,
    ) {
        context.getSharedPreferences(REMOTE_TERMINAL_PREFS, Context.MODE_PRIVATE)
            .edit()
            .putString(key, JSONArray(values).toString())
            .apply()
    }

    private fun readRemoteTerminalList(raw: String?, limit: Int): List<String> {
        if (raw.isNullOrBlank()) {
            return emptyList()
        }
        return runCatching {
            val array = JSONArray(raw)
            buildList {
                for (index in 0 until array.length()) {
                    val value = array.optString(index).trim()
                    if (value.isNotBlank() && !contains(value)) {
                        add(value)
                    }
                    if (size >= limit) {
                        break
                    }
                }
            }
        }.getOrDefault(emptyList())
    }

    private fun normalizeRemoteTerminalList(values: List<String>, limit: Int): List<String> {
        val normalized = ArrayList<String>(limit)
        for (value in values) {
            val trimmed = value.trim()
            if (trimmed.isBlank() || normalized.contains(trimmed)) {
                continue
            }
            normalized += trimmed
            if (normalized.size >= limit) {
                break
            }
        }
        return normalized
    }

    private fun validationMessage(error: RemoteTerminalValidationError): String = when (error) {
        RemoteTerminalValidationError.Empty -> "请输入命令后再发送"
        RemoteTerminalValidationError.ProtectedIpc -> "命令涉及受保护的 IPC 文件，已拒绝发送"
        RemoteTerminalValidationError.NestedScript -> "命令包含脚本链路或后台执行特征，已拒绝发送"
    }

    private fun remoteTerminalFailureMessage(reason: String): String = when (reason) {
        "blocked_ipc" -> "手表拒绝执行：命令涉及受保护的 IPC 文件"
        "blocked_nested" -> "手表拒绝执行：命令包含脚本链路或后台执行特征"
        "guard_missing" -> "手表后端安全令牌未就绪，请确认 Lua 后端正在运行"
        "screenshot_busy" -> "手表当前正在处理截图任务，请稍后重试"
        "bridge_busy" -> "手表桥接通道正忙，请稍后重试"
        "timeout" -> "等待手表执行结果超时"
        "no_ack" -> "手表未响应执行请求，请检查连接状态"
        "send_failed" -> "命令发送失败，请稍后重试"
        else -> "执行失败：$reason"
    }

    private fun buildRemoteTerminalOutput(
        command: String,
        result: RemoteExecResult,
    ): String {
        return buildString {
            append("> ").append(command).append("\n\n")
            if (result.stdout.isNotBlank()) {
                append(result.stdout)
            }
            if (result.stderr.isNotBlank()) {
                if (result.stdout.isNotBlank()) {
                    append("\n")
                }
                append("[stderr]\n")
                append(result.stderr)
            }
            if (result.stdout.isBlank() && result.stderr.isBlank()) {
                append("命令已执行，但没有返回输出。")
            }
            if (result.exitCode != null) {
                append("\n\n[exitcode] ").append(result.exitCode)
            }
            if (result.timedOut) {
                append("\n\n[timeout] 等待结果超时")
            }
        }
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
    private companion object {
        const val REMOTE_TERMINAL_PREFS = "remote_terminal_prefs"
        const val REMOTE_TERMINAL_HISTORY_KEY = "history"
        const val REMOTE_TERMINAL_FAVORITES_KEY = "favorites"
        const val REMOTE_TERMINAL_HISTORY_LIMIT = 5
    }
}
