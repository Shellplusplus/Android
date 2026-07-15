package com.shell.liangyi.core

internal object RemoteBinaryTransferGuard {
    const val MAX_PREVIEW_IMAGE_BYTES: Long = 3L * 1024L * 1024L

    fun canStart(totalBytes: Long, totalChunks: Int): Boolean {
        return totalBytes in 1..MAX_PREVIEW_IMAGE_BYTES && totalChunks > 0
    }

    fun canAcceptChunk(
        receivedBytes: Long,
        chunkBytes: Int,
        totalBytes: Long,
    ): Boolean {
        if (chunkBytes <= 0 || receivedBytes < 0L || totalBytes <= 0L) {
            return false
        }
        val nextBytes = receivedBytes + chunkBytes
        return nextBytes <= totalBytes && nextBytes <= MAX_PREVIEW_IMAGE_BYTES
    }
}
