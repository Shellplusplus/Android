package com.shell.liangyi.model

/**
 * 截图数据模型
 */
data class Screenshot(
    val shotId: String,
    val capturedAt: String,
    val capturedAtUnix: Long = 0,
    val imageData: String = "",
    val index: Int = 0
)
