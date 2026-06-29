package com.shell.liangyi.ui

import android.content.Context
import androidx.lifecycle.ViewModel
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.core.WearMessageCenter
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

    private val _updateMessages = MutableSharedFlow<String>(extraBufferCapacity = 1)
    val updateMessages = _updateMessages.asSharedFlow()

    fun initialize(context: Context) {
        appCtx = context
        wearMessageCenter = WearMessageCenter.getInstance(context)
        wearMessageCenter.initialize()
        screenshotReceiver = ScreenshotReceiver(context, scope)
    }

    // ---- WearMessageCenter 状态 ----
    val connectionState: SharedFlow<com.shell.liangyi.core.ConnectionState>
        get() = wearMessageCenter.connectionState

    val logs: SharedFlow<List<com.shell.liangyi.core.LogEntry>>
        get() = wearMessageCenter.logs

    fun clearLogs() = wearMessageCenter.clearLogs()

    // ---- ScreenshotReceiver 状态 ----
    val screenshots: StateFlow<List<Screenshot>>
        get() = screenshotReceiver.screenshots

    val syncState: StateFlow<ScreenshotReceiver.SyncState>
        get() = screenshotReceiver.syncState

    val receiveProgress: StateFlow<String>
        get() = screenshotReceiver.receiveProgress

    val httpServerRunning: StateFlow<Boolean>
        get() = screenshotReceiver.httpServerRunning

    val httpServerIp: StateFlow<String>
        get() = screenshotReceiver.httpServerIp

    val httpServerPort: StateFlow<Int>
        get() = screenshotReceiver.httpServerPort

    // ---- 操作方法 ----
    fun requestFromWatch() = screenshotReceiver.requestFromWatch()
    fun ensureConnection() = wearMessageCenter.ensureConnection()
    fun requestScreenshot(shotId: String) = screenshotReceiver.requestScreenshot(shotId)
    fun deleteScreenshot(shotId: String) = screenshotReceiver.deleteScreenshot(shotId)
    fun startHttpServer(): String? = screenshotReceiver.startHttpServer()
    fun stopHttpServer() = screenshotReceiver.stopHttpServer()
    fun appContext(): Context = appCtx!!

    fun getScreenshotFilePath(shotId: String): String? {
        // 先用 stableShotKey 精确查找
        val safe = shotId.replace(Regex("[^A-Za-z0-9._-]"), "_")
        val hash = shotId.hashCode().toUInt().toString(16)
        val exactFile = java.io.File(appCtx!!.filesDir, "screenshot_sync/${safe}_$hash.png")
        if (exactFile.exists()) return exactFile.absolutePath

        // 兜底：扫描目录，匹配文件名包含 shotId 中时间戳和序号的 .png
        val dir = java.io.File(appCtx!!.filesDir, "screenshot_sync")
        if (!dir.exists()) return null
        // 提取 shotId 中的时间戳 (前14位) 和序号 (#后数字)
        val parts = shotId.split("#")
        val timestamp = parts.getOrElse(0) { "" }
        val seq = parts.getOrElse(1) { "" }
        return dir.listFiles()?.firstOrNull { f ->
            f.isFile && f.extension.equals("png", ignoreCase = true) &&
            f.name.contains(timestamp.take(14)) && f.name.contains(seq)
        }?.absolutePath
    }

    fun clearAll() = screenshotReceiver.clearAll()

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
                    _updatePrompt.value = result.prompt
                }
                is UpdateCheckResult.UpToDate -> {
                    if (_updatePrompt.value?.mandatory == true) {
                        _updatePrompt.value = null
                    }
                    if (manual) {
                        _updateMessages.tryEmit("当前已是最新版本")
                    }
                }
                is UpdateCheckResult.Failed -> {
                    if (manual) {
                        _updateMessages.tryEmit("检测更新失败：${result.message}")
                    }
                }
            }
        }
    }

    fun dismissUpdatePrompt() {
        _updatePrompt.value = null
    }

    override fun onCleared() {
        super.onCleared()
        wearMessageCenter.destroy()
    }
}
