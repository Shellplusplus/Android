package com.shell.liangyi.core

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class MessageChunkGuardTest {

    @Test
    fun isValidMetadataAcceptsChunkInsideWideLimit() {
        assertTrue(
            MessageChunkGuard.isValidMetadata(
                id = "chunk-1",
                index = MessageChunkGuard.MAX_TOTAL_CHUNKS - 1,
                total = MessageChunkGuard.MAX_TOTAL_CHUNKS,
                hasData = true,
            ),
        )
    }

    @Test
    fun isValidMetadataRejectsInvalidIndicesAndEmptyData() {
        assertFalse(MessageChunkGuard.isValidMetadata("", 0, 1, hasData = true))
        assertFalse(MessageChunkGuard.isValidMetadata("chunk-1", -1, 1, hasData = true))
        assertFalse(MessageChunkGuard.isValidMetadata("chunk-1", 1, 1, hasData = true))
        assertFalse(MessageChunkGuard.isValidMetadata("chunk-1", 0, 1, hasData = false))
    }

    @Test
    fun isValidMetadataRejectsAbsurdTotalChunkCount() {
        assertFalse(
            MessageChunkGuard.isValidMetadata(
                id = "chunk-1",
                index = 0,
                total = MessageChunkGuard.MAX_TOTAL_CHUNKS + 1,
                hasData = true,
            ),
        )
    }
}
