package com.shell.liangyi.security.ai

import org.json.JSONArray
import org.json.JSONObject

data class AiLicense(
    val format: Int,
    val licenseId: String,
    val packageName: String,
    val deviceKeySha256: String,
    val features: List<String>,
    val issuedAt: Long,
    val expiresAt: Long,
    val issuerKeyId: String,
    val signatureAlgorithm: String,
    val signature: String,
) {
    fun toJson(): JSONObject = JSONObject().apply {
        put("format", format)
        put("licenseId", licenseId)
        put("packageName", packageName)
        put("deviceKeySha256", deviceKeySha256)
        put("features", JSONArray(features))
        put("issuedAt", issuedAt)
        put("expiresAt", expiresAt)
        put("issuerKeyId", issuerKeyId)
        put("signatureAlgorithm", signatureAlgorithm)
        put("signature", signature)
    }

    companion object {
        fun fromJson(text: String): AiLicense {
            val json = JSONObject(text)
            val featuresJson = json.optJSONArray("features") ?: JSONArray()
            val features = buildList {
                for (index in 0 until featuresJson.length()) {
                    add(featuresJson.optString(index))
                }
            }
            return AiLicense(
                format = json.optInt("format", 0),
                licenseId = json.optString("licenseId"),
                packageName = json.optString("packageName"),
                deviceKeySha256 = json.optString("deviceKeySha256"),
                features = features,
                issuedAt = json.optLong("issuedAt", 0L),
                expiresAt = json.optLong("expiresAt", 0L),
                issuerKeyId = json.optString("issuerKeyId"),
                signatureAlgorithm = json.optString("signatureAlgorithm"),
                signature = json.optString("signature"),
            )
        }
    }
}

data class AiLicenseRegistryEntry(
    val licenseId: String,
    val licenseSha256: String,
    val revoked: Boolean,
)

data class AiLicenseRegistry(
    val format: Int,
    val generatedAt: Long,
    val issuerKeyId: String,
    val signatureAlgorithm: String,
    val licenses: List<AiLicenseRegistryEntry>,
    val signature: String,
) {
    companion object {
        fun fromJson(text: String): AiLicenseRegistry {
            val json = JSONObject(text)
            val entriesJson = json.optJSONArray("licenses") ?: JSONArray()
            val entries = buildList {
                for (index in 0 until entriesJson.length()) {
                    val entry = entriesJson.optJSONObject(index) ?: continue
                    add(
                        AiLicenseRegistryEntry(
                            licenseId = entry.optString("licenseId"),
                            licenseSha256 = entry.optString("licenseSha256"),
                            revoked = entry.optBoolean("revoked", false),
                        ),
                    )
                }
            }
            return AiLicenseRegistry(
                format = json.optInt("format", 0),
                generatedAt = json.optLong("generatedAt", 0L),
                issuerKeyId = json.optString("issuerKeyId"),
                signatureAlgorithm = json.optString("signatureAlgorithm"),
                licenses = entries,
                signature = json.optString("signature"),
            )
        }
    }
}

data class AiLicenseRequest(
    val format: Int,
    val requestId: String,
    val packageName: String,
    val devicePublicKey: String,
    val deviceKeySha256: String,
    val createdAt: Long,
    val hardwareBacked: Boolean,
    val attestationChain: List<String>,
    val signatureAlgorithm: String,
    val signature: String,
) {
    fun toJson(): JSONObject = JSONObject().apply {
        put("format", format)
        put("requestId", requestId)
        put("packageName", packageName)
        put("devicePublicKey", devicePublicKey)
        put("deviceKeySha256", deviceKeySha256)
        put("createdAt", createdAt)
        put("hardwareBacked", hardwareBacked)
        put("attestationChain", JSONArray(attestationChain))
        put("signatureAlgorithm", signatureAlgorithm)
        put("signature", signature)
    }
}

enum class AiLicenseStatus {
    LOCKED,
    VALID,
    OFFLINE_GRACE,
    NEEDS_ONLINE,
    EXPIRED,
    REVOKED,
    INVALID,
}

data class AiLicenseState(
    val status: AiLicenseStatus = AiLicenseStatus.LOCKED,
    val message: String = "尚未导入 AI 授权",
    val licenseId: String = "",
    val expiresAt: Long = 0L,
    val lastVerifiedAt: Long = 0L,
    val graceRemainingMs: Long = 0L,
    val deviceFingerprint: String = "",
    val hardwareBacked: Boolean = false,
) {
    val canUse: Boolean
        get() = status == AiLicenseStatus.VALID || status == AiLicenseStatus.OFFLINE_GRACE
}
