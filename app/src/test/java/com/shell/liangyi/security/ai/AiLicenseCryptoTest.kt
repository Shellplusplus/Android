package com.shell.liangyi.security.ai

import org.bouncycastle.crypto.params.Ed25519PrivateKeyParameters
import org.bouncycastle.crypto.signers.Ed25519Signer
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class AiLicenseCryptoTest {
    private val privateKey = Ed25519PrivateKeyParameters(ByteArray(32) { (it + 1).toByte() }, 0)
    private val publicKey = AiLicenseCrypto.encodeBase64Url(privateKey.generatePublicKey().encoded)

    @Test
    fun verifiesLicenseAndRejectsTampering() {
        val unsigned = AiLicense(
            format = AiLicenseCrypto.LICENSE_FORMAT,
            licenseId = "ai-test-001",
            packageName = "com.shell.liangyi",
            deviceKeySha256 = "a".repeat(64),
            features = listOf("ai_assistant"),
            issuedAt = 1_700_000_000_000L,
            expiresAt = 1_800_000_000_000L,
            issuerKeyId = "ed25519-main-2026",
            signatureAlgorithm = AiLicenseCrypto.ED25519,
            signature = "",
        )
        val license = unsigned.copy(signature = sign(AiLicenseCrypto.canonicalLicensePayload(unsigned)))

        assertTrue(AiLicenseCrypto.verifyLicense(license, publicKey))
        assertFalse(AiLicenseCrypto.verifyLicense(license.copy(expiresAt = license.expiresAt + 1), publicKey))
    }

    @Test
    fun verifiesRegistryAndLicenseHash() {
        val unsigned = AiLicense(
            format = AiLicenseCrypto.LICENSE_FORMAT,
            licenseId = "ai-test-002",
            packageName = "com.shell.liangyi",
            deviceKeySha256 = "b".repeat(64),
            features = listOf("ai_assistant"),
            issuedAt = 1_700_000_000_000L,
            expiresAt = 1_800_000_000_000L,
            issuerKeyId = "ed25519-main-2026",
            signatureAlgorithm = AiLicenseCrypto.ED25519,
            signature = "",
        )
        val license = unsigned.copy(signature = sign(AiLicenseCrypto.canonicalLicensePayload(unsigned)))
        val unsignedRegistry = AiLicenseRegistry(
            format = AiLicenseCrypto.LICENSE_FORMAT,
            generatedAt = 1_700_000_100_000L,
            issuerKeyId = "ed25519-main-2026",
            signatureAlgorithm = AiLicenseCrypto.ED25519,
            licenses = listOf(
                AiLicenseRegistryEntry(
                    licenseId = license.licenseId,
                    licenseSha256 = AiLicenseCrypto.licenseSha256(license),
                    revoked = false,
                ),
            ),
            signature = "",
        )
        val registry = unsignedRegistry.copy(
            signature = sign(AiLicenseCrypto.canonicalRegistryPayload(unsignedRegistry)),
        )

        assertTrue(AiLicenseCrypto.verifyRegistry(registry, publicKey))
        assertTrue(
            AiLicenseCrypto.verifyRegistry(
                registry.copy(licenses = registry.licenses.map { it.copy(revoked = true) }),
                publicKey,
            ).not(),
        )
    }

    private fun sign(payload: String): String {
        val signer = Ed25519Signer()
        signer.init(true, privateKey)
        val bytes = payload.toByteArray(Charsets.UTF_8)
        signer.update(bytes, 0, bytes.size)
        return AiLicenseCrypto.encodeBase64Url(signer.generateSignature())
    }
}
