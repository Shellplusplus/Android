package com.shell.liangyi.ui.screenshot

import android.app.Application
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.LogEntry
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.util.GallerySaver
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class ScreenshotViewModel(application: Application) : AndroidViewModel(application) {

    companion object {
        private const val KEY_DEBUG_LOG = "debug_log_enabled"
    }

    private val wearMessageCenter = WearMessageCenter.getInstance(application)
    private val screenshotReceiver = ScreenshotReceiver(application, viewModelScope)
    private val gallerySaver = GallerySaver(application)

    val screenshots: StateFlow<List<Screenshot>> = screenshotReceiver.screenshots
    val syncState: StateFlow<ScreenshotReceiver.SyncState> = screenshotReceiver.syncState
    val receiveProgress: StateFlow<String> = screenshotReceiver.receiveProgress
    val httpServerRunning: StateFlow<Boolean> = screenshotReceiver.httpServerRunning
    val httpServerIp: StateFlow<String> = screenshotReceiver.httpServerIp
    val httpServerPort: StateFlow<Int> = screenshotReceiver.httpServerPort
    val connectionState: SharedFlow<ConnectionState> = wearMessageCenter.connectionState
    val logs: SharedFlow<List<LogEntry>> = wearMessageCenter.logs

    private val prefs = application.getSharedPreferences("shellplus_settings", Application.MODE_PRIVATE)

    var previewScreenshot by mutableStateOf<Screenshot?>(null)
        private set

    // 调试日志：设置里的可选开关，默认关闭
    var debugLogEnabled by mutableStateOf(prefs.getBoolean(KEY_DEBUG_LOG, false))
        private set

    init {
        viewModelScope.launch {
            screenshots.collect { items ->
                val currentPreview = previewScreenshot
                if (currentPreview == null) {
                    return@collect
                }

                val updated = items.firstOrNull { it.shotId == currentPreview.shotId }
                if (updated != null) {
                    previewScreenshot = updated
                } else if (items.none { it.shotId == currentPreview.shotId }) {
                    previewScreenshot = null
                }
            }
        }
    }

    fun updateDebugLogEnabled(enabled: Boolean) {
        debugLogEnabled = enabled
        prefs.edit().putBoolean(KEY_DEBUG_LOG, enabled).apply()
    }

    fun requestFromWatch() {
        screenshotReceiver.requestFromWatch()
    }

    fun requestScreenshot(shotId: String) {
        screenshotReceiver.requestScreenshot(shotId)
    }

    fun onScreenshotClick(screenshot: Screenshot) {
        previewScreenshot = screenshot
        if (screenshot.localFilePath.isEmpty() && screenshot.imageData.isEmpty()) {
            requestScreenshot(screenshot.shotId)
        }
    }

    fun dismissPreview() {
        previewScreenshot = null
    }

    fun saveToGallery(screenshot: Screenshot, onResult: (Boolean) -> Unit) {
        viewModelScope.launch {
            val success = withContext(Dispatchers.IO) {
                if (screenshot.localFilePath.isNotEmpty()) {
                    gallerySaver.saveFileToGallery(
                        screenshot.localFilePath,
                        "screenshot_${screenshot.shotId}"
                    )
                } else if (screenshot.imageData.isNotEmpty()) {
                    gallerySaver.saveBase64ToGallery(
                        screenshot.imageData,
                        "screenshot_${screenshot.shotId}"
                    )
                } else {
                    false
                }
            }
            onResult(success)
        }
    }

    fun deleteScreenshot(shotId: String) {
        screenshotReceiver.deleteScreenshot(shotId)
        if (previewScreenshot?.shotId == shotId) {
            previewScreenshot = null
        }
    }

    fun clearAll() {
        screenshotReceiver.clearAll()
    }

    fun checkConnection() {
        // 重新发现设备、拉起快应用并重新执行握手
        wearMessageCenter.ensureConnection()
    }

    fun startHttpServer(): String? {
        return screenshotReceiver.startHttpServer()
    }

    fun stopHttpServer() {
        screenshotReceiver.stopHttpServer()
    }

    fun clearLogs() {
        wearMessageCenter.clearLogs()
    }
}
