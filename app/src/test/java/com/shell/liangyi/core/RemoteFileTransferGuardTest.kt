package com.shell.liangyi.core

import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class RemoteFileTransferGuardTest {
    @Test
    fun acceptsValidStart() {
        assertTrue(RemoteFileTransferGuard.canStart(32_768L, 12, 3_072))
    }

    @Test
    fun rejectsInvalidStartBounds() {
        assertFalse(RemoteFileTransferGuard.canStart(0L, 1, 3_072))
        assertFalse(RemoteFileTransferGuard.canStart(1_024L, 0, 3_072))
        assertFalse(RemoteFileTransferGuard.canStart(1_024L, 1, 512))
        assertFalse(
            RemoteFileTransferGuard.canStart(
                RemoteFileTransferGuard.MAX_TRANSFER_BYTES + 1L,
                1,
                3_072,
            ),
        )
    }

    @Test
    fun acceptsSequentialPart() {
        assertTrue(
            RemoteFileTransferGuard.canAcceptPart(
                expectedIndex = 2,
                index = 2,
                expectedPosition = 6_144L,
                position = 6_144L,
                expectedTotalParts = 12,
                declaredTotalParts = 12,
                receivedBytes = 6_144L,
                partBytes = 3_072,
                totalBytes = 32_768L,
            ),
        )
    }

    @Test
    fun rejectsGapPositionMismatchAndOverflow() {
        val valid = RemoteFileTransferGuard.canAcceptPart(
            expectedIndex = 2,
            index = 2,
            expectedPosition = 6_144L,
            position = 6_144L,
            expectedTotalParts = 12,
            declaredTotalParts = 12,
            receivedBytes = 6_144L,
            partBytes = 3_072,
            totalBytes = 32_768L,
        )
        assertTrue(valid)
        assertFalse(
            RemoteFileTransferGuard.canAcceptPart(
                expectedIndex = 2,
                index = 3,
                expectedPosition = 6_144L,
                position = 6_144L,
                expectedTotalParts = 12,
                declaredTotalParts = 12,
                receivedBytes = 6_144L,
                partBytes = 3_072,
                totalBytes = 32_768L,
            ),
        )
        assertFalse(
            RemoteFileTransferGuard.canAcceptPart(
                expectedIndex = 2,
                index = 2,
                expectedPosition = 6_144L,
                position = 6_145L,
                expectedTotalParts = 12,
                declaredTotalParts = 12,
                receivedBytes = 6_144L,
                partBytes = 3_072,
                totalBytes = 32_768L,
            ),
        )
        assertFalse(
            RemoteFileTransferGuard.canAcceptPart(
                expectedIndex = 11,
                index = 11,
                expectedPosition = 32_000L,
                position = 32_000L,
                expectedTotalParts = 12,
                declaredTotalParts = 12,
                receivedBytes = 32_000L,
                partBytes = 1_024,
                totalBytes = 32_768L,
            ),
        )
    }
}
