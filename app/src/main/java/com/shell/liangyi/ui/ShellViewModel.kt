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

    fun initialize(context: Context) {
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

    // ---- 操作方法 ----
    fun requestFromWatch() = screenshotReceiver.requestFromWatch()
    fun requestScreenshot(shotId: String) = screenshotReceiver.requestScreenshot(shotId)
    fun deleteScreenshot(shotId: String) = screenshotReceiver.deleteScreenshot(shotId)
    fun clearAll() = screenshotReceiver.clearAll()

    override fun onCleared() {
        super.onCleared()
        wearMessageCenter.destroy()
    }
}
