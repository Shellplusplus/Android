package com.shell.liangyi.ui.screenshot

import android.app.Application
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.shell.liangyi.core.ScreenshotReceiver
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.util.GallerySaver
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch

class ScreenshotViewModel(application: Application) : AndroidViewModel(application) {

    private val screenshotReceiver = ScreenshotReceiver(application, viewModelScope)
    private val gallerySaver = GallerySaver(application)

    val screenshots: StateFlow<List<Screenshot>> = screenshotReceiver.screenshots
    val syncState: StateFlow<ScreenshotReceiver.SyncState> = screenshotReceiver.syncState
    val receiveProgress: StateFlow<String> = screenshotReceiver.receiveProgress

    var previewScreenshot by mutableStateOf<Screenshot?>(null)
        private set

    fun requestFromWatch() {
        screenshotReceiver.requestFromWatch()
    }

    fun requestScreenshot(shotId: String) {
        screenshotReceiver.requestScreenshot(shotId)
    }

    fun onScreenshotClick(screenshot: Screenshot) {
        previewScreenshot = screenshot
    }

    fun dismissPreview() {
        previewScreenshot = null
    }

    fun saveToGallery(screenshot: Screenshot) {
        viewModelScope.launch {
            if (screenshot.imageData.isNotEmpty()) {
                gallerySaver.saveBase64ToGallery(
                    screenshot.imageData,
                    "screenshot_${screenshot.shotId}"
                )
            }
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
}
