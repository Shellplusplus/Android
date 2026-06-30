package com.shell.liangyi.model

import androidx.compose.runtime.Immutable

/**
 * 截图数据模型
 */
@Immutable
data class Screenshot(
    val shotId: String,
    val capturedAt: String,
    val capturedAtUnix: Long = 0,
    val displayTitle: String = "",
    val imageData: String = "",
    val localFilePath: String = "",
    val index: Int = 0,
    val lastChunkNum: Int = -1,
    val receivedChunks: Int = 0,
    val totalChunks: Int = 0,
    val receivedBytes: Long = 0,
    val totalBytes: Long = 0,
    val isComplete: Boolean = false,
    val lastTransferFailed: Boolean = false,
    val transferHint: String = ""
)
