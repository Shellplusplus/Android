package com.shell.liangyi.core

internal object MessageChunkGuard {
    const val MAX_TOTAL_CHUNKS = 16_384

    fun isValidMetadata(id: String, index: Int, total: Int, hasData: Boolean): Boolean {
        return id.isNotEmpty() &&
            index >= 0 &&
            total in 1..MAX_TOTAL_CHUNKS &&
            index < total &&
            hasData
    }
}
