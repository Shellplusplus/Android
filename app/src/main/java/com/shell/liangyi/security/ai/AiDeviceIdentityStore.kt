package com.shell.liangyi.security.ai

import android.content.Context
import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyInfo
import android.security.keystore.KeyProperties
import java.nio.charset.StandardCharsets
import java.security.KeyFactory
import java.security.KeyPairGenerator
import java.security.KeyStore
import java.security.PrivateKey
import java.security.Signature
import java.security.spec.ECGenParameterSpec
import java.util.UUID

data class AiDeviceIdentity(
    val publicKey: String,
    val fingerprint: String,
    val hardwareBacked: Boolean,
    val attestationChain: List<String>,
)

class AiDeviceIdentityStore(private val context: Context) {
    companion object {
        private const val KEY_ALIAS = "shell_ai_device_identity_v2"
        private const val REQUEST_FORMAT = 1
        private const val REQUEST_SIGNATURE_ALGORITHM = "SHA256withECDSA"
    }

    fun identity(): AiDeviceIdentity {
        var keyStore = loadKeyStore()
        if (!keyStore.containsAlias(KEY_ALIAS)) {
            generateKeyPair()
            keyStore = loadKeyStore()
        }
        val privateKey = keyStore.getKey(KEY_ALIAS, null) as? PrivateKey
            ?: throw IllegalStateException("设备私钥不可用")
        val certificate = keyStore.getCertificate(KEY_ALIAS)
            ?: throw IllegalStateException("设备密钥证书不可用")
        val publicKeyBytes = certificate.publicKey.encoded
        val publicKey = AiLicenseCrypto.encodeBase64Url(publicKeyBytes)
        val fingerprint = AiLicenseCrypto.sha256Hex(publicKeyBytes)
        val hardwareBacked = runCatching {
            val keyFactory = KeyFactory.getInstance(privateKey.algorithm, "AndroidKeyStore")
            val keyInfo = keyFactory.getKeySpec(privateKey, KeyInfo::class.java)
            keyInfo.isInsideSecureHardware
        }.getOrDefault(false)
        val attestationChain = keyStore.getCertificateChain(KEY_ALIAS)
            ?.map { AiLicenseCrypto.encodeBase64Url(it.encoded) }
            .orEmpty()
        return AiDeviceIdentity(publicKey, fingerprint, hardwareBacked, attestationChain)
    }

    fun createRequest(): AiLicenseRequest {
        val identity = identity()
        val requestId = "request-${UUID.randomUUID()}"
        val createdAt = System.currentTimeMillis()
        val unsigned = AiLicenseRequest(
            format = REQUEST_FORMAT,
            requestId = requestId,
            packageName = context.packageName,
            devicePublicKey = identity.publicKey,
            deviceKeySha256 = identity.fingerprint,
            createdAt = createdAt,
            hardwareBacked = identity.hardwareBacked,
            attestationChain = identity.attestationChain,
            signatureAlgorithm = REQUEST_SIGNATURE_ALGORITHM,
            signature = "",
        )
        val signature = sign(canonicalRequestPayload(unsigned).toByteArray(StandardCharsets.UTF_8))
        return unsigned.copy(signature = AiLicenseCrypto.encodeBase64Url(signature))
    }

    private fun sign(payload: ByteArray): ByteArray {
        val privateKey = loadKeyStore().getKey(KEY_ALIAS, null) as? PrivateKey
            ?: throw IllegalStateException("设备私钥不可用")
        return Signature.getInstance(REQUEST_SIGNATURE_ALGORITHM).run {
            initSign(privateKey)
            update(payload)
            sign()
        }
    }

    private fun canonicalRequestPayload(request: AiLicenseRequest): String =
        "{" +
            "\"format\":" + request.format + "," +
            "\"requestId\":" + org.json.JSONObject.quote(request.requestId) + "," +
            "\"packageName\":" + org.json.JSONObject.quote(request.packageName) + "," +
            "\"devicePublicKey\":" + org.json.JSONObject.quote(request.devicePublicKey) + "," +
            "\"deviceKeySha256\":" + org.json.JSONObject.quote(request.deviceKeySha256.lowercase()) + "," +
            "\"createdAt\":" + request.createdAt + "," +
            "\"hardwareBacked\":" + request.hardwareBacked + "," +
            "\"attestationChain\":[" + request.attestationChain.joinToString(",") {
                org.json.JSONObject.quote(it)
            } + "]," +
            "\"signatureAlgorithm\":" + org.json.JSONObject.quote(request.signatureAlgorithm) +
            "}"

    private fun loadKeyStore(): KeyStore = KeyStore.getInstance("AndroidKeyStore").apply { load(null) }

    private fun generateKeyPair(): java.security.KeyPair {
        val generator = KeyPairGenerator.getInstance(KeyProperties.KEY_ALGORITHM_EC, "AndroidKeyStore")
        val base = KeyGenParameterSpec.Builder(
            KEY_ALIAS,
            KeyProperties.PURPOSE_SIGN or KeyProperties.PURPOSE_VERIFY,
        )
            .setAlgorithmParameterSpec(ECGenParameterSpec("secp256r1"))
            .setDigests(KeyProperties.DIGEST_SHA256)

        val generated = runCatching {
            generator.initialize(
                base.setAttestationChallenge(
                    ("Shell++ AI device identity:" + context.packageName)
                        .toByteArray(StandardCharsets.UTF_8),
                ).build(),
            )
            generator.generateKeyPair()
        }.getOrElse {
            val fallbackGenerator = KeyPairGenerator.getInstance(
                KeyProperties.KEY_ALGORITHM_EC,
                "AndroidKeyStore",
            )
            fallbackGenerator.initialize(base.build())
            fallbackGenerator.generateKeyPair()
        }
        return generated
    }
}
