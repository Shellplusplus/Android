package com.shell.liangyi.security.ai

import kotlin.math.abs

data class AiLicenseTimeInput(
    val nowElapsedMs: Long,
    val currentBoot: String,
    val verifiedElapsedMs: Long,
    val verifiedBoot: String,
    val nowWallMs: Long,
    val verifiedWallMs: Long,
    val verifiedServerMs: Long,
    val expiresAtMs: Long,
    val networkTimeMs: Long? = null,
    val supportsNetworkTimeClock: Boolean = false,
)

data class AiLicenseTimeDecision(
    val status: AiLicenseStatus,
    val graceRemainingMs: Long = 0L,
    val projectedServerMs: Long = 0L,
    val message: String,
)

object AiLicenseTimePolicy {
    const val GRACE_PERIOD_MS = 72L * 60L * 60L * 1000L
    private const val CLOCK_TOLERANCE_MS = 5L * 60L * 1000L
    private const val CLOCK_JUMP_TOLERANCE_MS = 24L * 60L * 60L * 1000L

    fun evaluate(input: AiLicenseTimeInput): AiLicenseTimeDecision {
        if (input.verifiedServerMs <= 0L || input.verifiedElapsedMs <= 0L) {
            return needsOnline("需要联网检查授权状态")
        }
        if (input.currentBoot == input.verifiedBoot && clockWasChanged(input)) {
            return needsOnline("检测到系统时间异常，请联网重新验证")
        }

        if (input.currentBoot == input.verifiedBoot && input.nowElapsedMs >= input.verifiedElapsedMs) {
            val elapsed = input.nowElapsedMs - input.verifiedElapsedMs
            val remaining = (GRACE_PERIOD_MS - elapsed).coerceAtLeast(0L)
            if (remaining > 0L) {
                val projectedServer = input.verifiedServerMs + elapsed
                return if (input.expiresAtMs > projectedServer) {
                    AiLicenseTimeDecision(
                        status = AiLicenseStatus.OFFLINE_GRACE,
                        graceRemainingMs = remaining,
                        projectedServerMs = projectedServer,
                        message = "GitHub 暂时不可访问，处于离线宽限期",
                    )
                } else {
                    AiLicenseTimeDecision(
                        status = AiLicenseStatus.EXPIRED,
                        projectedServerMs = projectedServer,
                        message = "AI 授权已过期",
                    )
                }
            }
        }

        if (input.supportsNetworkTimeClock && input.currentBoot != input.verifiedBoot) {
            val networkTime = input.networkTimeMs
            if (networkTime != null && networkTime >= input.verifiedServerMs) {
                val elapsed = networkTime - input.verifiedServerMs
                val remaining = (GRACE_PERIOD_MS - elapsed).coerceAtLeast(0L)
                if (remaining > 0L && input.expiresAtMs > networkTime) {
                    return AiLicenseTimeDecision(
                        status = AiLicenseStatus.OFFLINE_GRACE,
                        graceRemainingMs = remaining,
                        projectedServerMs = networkTime,
                        message = "重启后使用网络时间确认的离线宽限期",
                    )
                }
            }
        }
        return needsOnline("需要联网检查授权状态")
    }

    private fun needsOnline(message: String) = AiLicenseTimeDecision(
        status = AiLicenseStatus.NEEDS_ONLINE,
        message = message,
    )

    private fun clockWasChanged(input: AiLicenseTimeInput): Boolean {
        if (input.verifiedWallMs <= 0L) return false
        val wallDelta = input.nowWallMs - input.verifiedWallMs
        val elapsedDelta = input.nowElapsedMs - input.verifiedElapsedMs
        if (wallDelta < -CLOCK_TOLERANCE_MS) return true
        return abs(wallDelta - elapsedDelta) > CLOCK_JUMP_TOLERANCE_MS
    }
}
