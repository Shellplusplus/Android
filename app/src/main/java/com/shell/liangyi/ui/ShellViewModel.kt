package com.shell.liangyi.ui

import android.content.Context
import androidx.lifecycle.ViewModel
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.model.Screenshot
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow

class ShellViewModel : ViewModel() {

    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.Main)

    lateinit var wearMessageCenter: WearMessageCenter
        private set

    lateinit var screenshotReceiver: ScreenshotReceiver
        private set

    private var appCtx: Context? = null

    fun initialize(context: Context) {
        appCtx = context
        wearMessageCenter = WearMessageCenter.getInstance(context)
        wearMessageCenter.initialize()
        screenshotReceiver = ScreenshotReceiver(context, scope)
    }

    // ---- WearMessageCenter 状态 ----
    val connectionState: SharedFlow<com.shell.liangyi.core.ConnectionState>
        get() = wearMessageCenter.connectionState

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

    override fun onCleared() {
        super.onCleared()
        wearMessageCenter.destroy()
    }
}
