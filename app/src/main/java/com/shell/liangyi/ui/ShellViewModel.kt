package com.shell.liangyi.ui

import android.content.Context
import androidx.lifecycle.ViewModel
import com.shell.liangyi.R
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.core.update.OptionalUpdatePreferenceState
import com.shell.liangyi.core.update.UpdateCheckResult
import com.shell.liangyi.core.update.UpdateChecker
import com.shell.liangyi.core.update.UpdatePrompt
import com.shell.liangyi.model.Screenshot
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
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

    lateinit var wearMessageCenter: WearMessageCenter
        private set

    lateinit var screenshotReceiver: ScreenshotReceiver
        private set

    private var appCtx: Context? = null
    private var autoUpdateChecked = false

    private val _updatePrompt = MutableStateFlow<UpdatePrompt?>(null)
    val updatePrompt = _updatePrompt.asStateFlow()
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

    fun initialize(context: Context) {
        appCtx = context
        applyOptionalUpdatePreferenceState(
            context,
            UpdateChecker.readOptionalUpdatePreferenceState(context),
        )
        wearMessageCenter = WearMessageCenter.getInstance(context)
        wearMessageCenter.initialize()
        screenshotReceiver = ScreenshotReceiver(context, scope)
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
        return normalized == "xiaomiband10pro" || normalized == "10pro"
    }

    fun getScreenshotFilePath(shotId: String): String? {
        val existingPath = screenshotReceiver.screenshots.value
            .firstOrNull { it.shotId == shotId }
            ?.localFilePath
            ?.takeIf { it.isNotBlank() }
        return existingPath ?: screenshotReceiver.getLocalFilePath(shotId)
    }

    fun clearAll() = screenshotReceiver.clearAll()

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

    override fun onCleared() {
        super.onCleared()
        wearMessageCenter.destroy()
    }
}
