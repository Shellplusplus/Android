package com.shell.liangyi.security.ai

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class AiLicenseTimePolicyTest {
    private val base = AiLicenseTimeInput(
        nowElapsedMs = 10_000L,
        currentBoot = "boot-1",
        verifiedElapsedMs = 1_000L,
        verifiedBoot = "boot-1",
        nowWallMs = 1_700_000_009_000L,
        verifiedWallMs = 1_700_000_000_000L,
        verifiedServerMs = 1_700_000_000_000L,
        expiresAtMs = 1_800_000_000_000L,
    )

    @Test
    fun dateRollbackDoesNotExtendGracePeriod() {
        val decision = AiLicenseTimePolicy.evaluate(base.copy(nowWallMs = base.verifiedWallMs - 10L * 60L * 1000L))
        assertEquals(AiLicenseStatus.NEEDS_ONLINE, decision.status)
    }

    @Test
    fun monotonicClockControlsSameBootGracePeriod() {
        val decision = AiLicenseTimePolicy.evaluate(base.copy(nowWallMs = base.verifiedWallMs + 10_000L))
        assertEquals(AiLicenseStatus.OFFLINE_GRACE, decision.status)
        assertTrue(decision.graceRemainingMs < AiLicenseTimePolicy.GRACE_PERIOD_MS)
    }

    @Test
    fun rebootNeedsNetworkTime() {
        val decision = AiLicenseTimePolicy.evaluate(base.copy(currentBoot = "boot-2"))
        assertEquals(AiLicenseStatus.NEEDS_ONLINE, decision.status)
    }

    @Test
    fun api33NetworkTimeCanContinueGraceAfterReboot() {
        val decision = AiLicenseTimePolicy.evaluate(
            base.copy(
                currentBoot = "boot-2",
                supportsNetworkTimeClock = true,
                networkTimeMs = base.verifiedServerMs + 60_000L,
            ),
        )
        assertEquals(AiLicenseStatus.OFFLINE_GRACE, decision.status)
    }
}
