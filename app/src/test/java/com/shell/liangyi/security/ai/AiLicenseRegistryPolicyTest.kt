package com.shell.liangyi.security.ai

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class AiLicenseRegistryPolicyTest {
    private val license = AiLicense(
        format = AiLicenseCrypto.LICENSE_FORMAT,
        licenseId = "ai-device-001",
        packageName = "com.shell.liangyi",
        deviceKeySha256 = "a".repeat(64),
        features = listOf("ai_assistant"),
        issuedAt = 1_700_000_000_000L,
        expiresAt = 1_800_000_000_000L,
        issuerKeyId = "ed25519-main-2026",
        signatureAlgorithm = AiLicenseCrypto.ED25519,
        signature = "signature",
    )

    @Test
    fun rejectsRegistryOlderThanLastVerification() {
        val error = AiLicenseRegistryPolicy.validateRegistryFreshness(
            registry = registry(generatedAt = 1_700_000_100_000L),
            license = license,
            lastVerifiedServerMs = 1_700_000_200_000L,
        )

        assertEquals("授权清单早于上次验证时间", error)
    }

    @Test
    fun rejectsDuplicateLicenseIds() {
        val entry = AiLicenseRegistryEntry(
            licenseId = license.licenseId,
            licenseSha256 = "hash",
            revoked = false,
        )
        val error = AiLicenseRegistryPolicy.validateRegistryFreshness(
            registry = registry(licenses = listOf(entry, entry.copy(revoked = true))),
            license = license,
            lastVerifiedServerMs = 0L,
        )

        assertEquals("授权清单包含重复授权 ID", error)
    }

    @Test
    fun acceptsCurrentUniqueRegistry() {
        val error = AiLicenseRegistryPolicy.validateRegistryFreshness(
            registry = registry(generatedAt = 1_700_000_200_000L),
            license = license,
            lastVerifiedServerMs = 1_700_000_100_000L,
        )

        assertNull(error)
    }

    private fun registry(
        generatedAt: Long = 1_700_000_100_000L,
        licenses: List<AiLicenseRegistryEntry> = listOf(
            AiLicenseRegistryEntry(
                licenseId = license.licenseId,
                licenseSha256 = "hash",
                revoked = false,
            ),
        ),
    ): AiLicenseRegistry = AiLicenseRegistry(
        format = AiLicenseCrypto.LICENSE_FORMAT,
        generatedAt = generatedAt,
        issuerKeyId = "ed25519-main-2026",
        signatureAlgorithm = AiLicenseCrypto.ED25519,
        licenses = licenses,
        signature = "signature",
    )
}
