package com.shell.liangyi.core

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class RemoteBinaryTransferGuardTest {

    @Test
    fun canStartAcceptsPositiveSizeWithinLimit() {
        assertTrue(RemoteBinaryTransferGuard.canStart(totalBytes = 1024L, totalChunks = 1))
        assertTrue(
            RemoteBinaryTransferGuard.canStart(
                totalBytes = RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES,
                totalChunks = 8,
            ),
        )
    }

    @Test
    fun canStartRejectsInvalidOrTooLargeTransfer() {
        assertFalse(RemoteBinaryTransferGuard.canStart(totalBytes = 0L, totalChunks = 1))
        assertFalse(RemoteBinaryTransferGuard.canStart(totalBytes = 1024L, totalChunks = 0))
        assertFalse(
            RemoteBinaryTransferGuard.canStart(
                totalBytes = RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES + 1,
                totalChunks = 1,
            ),
        )
    }

    @Test
    fun canAcceptChunkRejectsOverflowBeyondDeclaredTotal() {
        assertTrue(
            RemoteBinaryTransferGuard.canAcceptChunk(
                receivedBytes = 512L,
                chunkBytes = 512,
                totalBytes = 1024L,
            ),
        )
        assertFalse(
            RemoteBinaryTransferGuard.canAcceptChunk(
                receivedBytes = 800L,
                chunkBytes = 512,
                totalBytes = 1024L,
            ),
        )
    }

    @Test
    fun canAcceptChunkAllowsExactlyMaxPreviewSize() {
        assertTrue(
            RemoteBinaryTransferGuard.canAcceptChunk(
                receivedBytes = RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES - 1,
                chunkBytes = 1,
                totalBytes = RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES,
            ),
        )
        assertFalse(
            RemoteBinaryTransferGuard.canAcceptChunk(
                receivedBytes = RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES,
                chunkBytes = 1,
                totalBytes = RemoteBinaryTransferGuard.MAX_PREVIEW_IMAGE_BYTES + 1,
            ),
        )
    }
}
