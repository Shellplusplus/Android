package com.shell.liangyi.security.ai

import org.bouncycastle.crypto.params.Ed25519PublicKeyParameters
import org.bouncycastle.crypto.signers.Ed25519Signer
import java.nio.charset.StandardCharsets
import java.security.MessageDigest
import java.util.Base64

object AiLicenseCrypto {
    const val ED25519 = "Ed25519"
    const val LICENSE_FORMAT = 2

    fun verifyLicense(license: AiLicense, issuerPublicKey: String): Boolean {
        if (license.format != LICENSE_FORMAT || license.signatureAlgorithm != ED25519) return false
        return verifyEd25519(
            issuerPublicKey = issuerPublicKey,
            payload = canonicalLicensePayload(license).toByteArray(StandardCharsets.UTF_8),
            signature = license.signature,
        )
    }

    fun verifyRegistry(registry: AiLicenseRegistry, issuerPublicKey: String): Boolean {
        if (registry.format != LICENSE_FORMAT || registry.signatureAlgorithm != ED25519) return false
        return verifyEd25519(
            issuerPublicKey = issuerPublicKey,
            payload = canonicalRegistryPayload(registry).toByteArray(StandardCharsets.UTF_8),
            signature = registry.signature,
        )
    }

    fun verifyEd25519(
        issuerPublicKey: String,
        payload: ByteArray,
        signature: String,
    ): Boolean {
        return runCatching {
            val keyBytes = decodeBase64Url(issuerPublicKey)
            val signatureBytes = decodeBase64Url(signature)
            if (keyBytes.size != 32 || signatureBytes.size != 64) return false
            val verifier = Ed25519Signer()
            verifier.init(false, Ed25519PublicKeyParameters(keyBytes, 0))
            verifier.update(payload, 0, payload.size)
            verifier.verifySignature(signatureBytes)
        }.getOrDefault(false)
    }

    fun canonicalLicensePayload(license: AiLicense): String = canonicalLicenseJson(license, includeSignature = false)

    fun canonicalLicenseDocument(license: AiLicense): String = canonicalLicenseJson(license, includeSignature = true)

    fun canonicalRegistryPayload(registry: AiLicenseRegistry): String {
        val entries = registry.licenses
            .sortedBy { it.licenseId }
            .joinToString(",") { entry ->
                "{" +
                    "\"licenseId\":" + quote(entry.licenseId) + "," +
                    "\"licenseSha256\":" + quote(entry.licenseSha256.lowercase()) + "," +
                    "\"revoked\":" + entry.revoked +
                    "}"
            }
        return "{" +
            "\"format\":" + registry.format + "," +
            "\"generatedAt\":" + registry.generatedAt + "," +
            "\"issuerKeyId\":" + quote(registry.issuerKeyId) + "," +
            "\"signatureAlgorithm\":" + quote(registry.signatureAlgorithm) + "," +
            "\"licenses\":[" + entries + "]" +
            "}"
    }

    fun licenseSha256(license: AiLicense): String = sha256Hex(
        canonicalLicenseDocument(license).toByteArray(StandardCharsets.UTF_8),
    )

    fun sha256Hex(value: ByteArray): String = MessageDigest
        .getInstance("SHA-256")
        .digest(value)
        .joinToString("") { byte -> (byte.toInt() and 0xff).toString(16).padStart(2, '0') }

    fun encodeBase64Url(value: ByteArray): String = Base64.getUrlEncoder().withoutPadding().encodeToString(value)

    fun decodeBase64Url(value: String): ByteArray = Base64.getUrlDecoder().decode(value)

    private fun canonicalLicenseJson(license: AiLicense, includeSignature: Boolean): String {
        val features = license.features.sorted().joinToString(",") { quote(it) }
        val base = "{" +
            "\"format\":" + license.format + "," +
            "\"licenseId\":" + quote(license.licenseId) + "," +
            "\"packageName\":" + quote(license.packageName) + "," +
            "\"deviceKeySha256\":" + quote(license.deviceKeySha256.lowercase()) + "," +
            "\"features\":[" + features + "]," +
            "\"issuedAt\":" + license.issuedAt + "," +
            "\"expiresAt\":" + license.expiresAt + "," +
            "\"issuerKeyId\":" + quote(license.issuerKeyId) + "," +
            "\"signatureAlgorithm\":" + quote(license.signatureAlgorithm)
        return if (includeSignature) {
            "$base,\"signature\":${quote(license.signature)}}"
        } else {
            "$base}"
        }
    }

    private fun quote(value: String): String =
        org.json.JSONObject.quote(value)
}
