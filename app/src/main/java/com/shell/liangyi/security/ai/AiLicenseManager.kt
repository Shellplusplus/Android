package com.shell.liangyi.security.ai

import android.content.Context
import android.os.Build
import android.os.SystemClock
import android.provider.Settings
import androidx.core.content.edit
import com.shell.liangyi.BuildConfig
import com.shell.liangyi.core.onboarding.GitHubUrlResolver
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.withContext
import kotlin.coroutines.cancellation.CancellationException
import java.net.HttpURLConnection
import java.net.URL

class AiLicenseManager(context: Context) {
    companion object {
        private const val PREFS_NAME = "ai_license_state"
        private const val KEY_LICENSE = "license"
        private const val KEY_LAST_VERIFIED_SERVER_MS = "last_verified_server_ms"
        private const val KEY_LAST_VERIFIED_ELAPSED_MS = "last_verified_elapsed_ms"
        private const val KEY_LAST_VERIFIED_WALL_MS = "last_verified_wall_ms"
        private const val KEY_LAST_VERIFIED_BOOT = "last_verified_boot"
        private const val AI_FEATURE = "ai_assistant"

        private const val STATUS_LOCKED = "尚未导入 AI 授权"
    }

    private val appContext = context.applicationContext
    private val prefs = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val deviceIdentityStore = AiDeviceIdentityStore(appContext)
    private val _state = MutableStateFlow(initialState())
    val state: StateFlow<AiLicenseState> = _state.asStateFlow()

    fun currentState(): AiLicenseState {
        val license = loadLicense() ?: return publish(
            initialState().copy(message = STATUS_LOCKED),
        )
        val identity = runCatching { deviceIdentityStore.identity() }.getOrNull()
            ?: return publish(invalidState(license, "设备密钥不可用"))
        val localError = validateLicense(license, identity.fingerprint)
        if (localError != null) return publish(invalidState(license, localError))
        val status = evaluateOffline(license, identity)
        return publish(status)
    }

    fun hasAccess(): Boolean = currentState().canUse

    fun deviceIdentity(): AiDeviceIdentity = deviceIdentityStore.identity()

    fun exportRequest(): String = deviceIdentityStore.createRequest().toJson().toString(2)

    fun importLicense(text: String): Result<AiLicenseState> = runCatching {
        val license = AiLicense.fromJson(text)
        val identity = deviceIdentityStore.identity()
        val issuerKey = issuerPublicKey(license.issuerKeyId)
            ?: throw IllegalArgumentException(issuerKeyError(license.issuerKeyId))
        require(AiLicenseCrypto.verifyLicense(license, issuerKey)) { "授权签名无效" }
        require(license.packageName == appContext.packageName) { "授权包名不匹配" }
        require(license.deviceKeySha256.equals(identity.fingerprint, ignoreCase = true)) {
            "授权未绑定当前设备"
        }
        require(AI_FEATURE in license.features) { "授权不包含 AI 助手功能" }
        require(license.expiresAt > license.issuedAt) { "授权有效期无效" }
        prefs.edit {
            putString(KEY_LICENSE, AiLicenseCrypto.canonicalLicenseDocument(license))
        }
        clearVerificationCache()
        val state = currentState().copy(
            status = AiLicenseStatus.NEEDS_ONLINE,
            message = "授权已导入，请联网检查 GitHub 清单",
            deviceFingerprint = identity.fingerprint,
            hardwareBacked = identity.hardwareBacked,
        )
        publish(state)
    }

    fun clearLicense() {
        prefs.edit {
            remove(KEY_LICENSE)
        }
        clearVerificationCache()
        _state.value = initialState()
    }

    suspend fun refresh(): AiLicenseState = withContext(Dispatchers.IO) {
        val license = loadLicense() ?: return@withContext publish(initialState())
        val identity = runCatching { deviceIdentityStore.identity() }.getOrNull()
            ?: return@withContext publish(invalidState(license, "设备密钥不可用"))
        val localError = validateLicense(license, identity.fingerprint)
        if (localError != null) return@withContext publish(invalidState(license, localError))

        try {
            val registry = fetchRegistry()
            val issuerKey = issuerPublicKey(registry.issuerKeyId)
                ?: return@withContext publish(invalidState(license, issuerKeyError(registry.issuerKeyId)))
            if (!AiLicenseCrypto.verifyRegistry(registry, issuerKey)) {
                return@withContext publish(invalidState(license, "授权清单签名无效"))
            }
            if (registry.issuerKeyId != license.issuerKeyId) {
                return@withContext publish(invalidState(license, "授权与清单签发密钥不一致"))
            }
            val lastVerifiedServerMs = prefs.getLong(KEY_LAST_VERIFIED_SERVER_MS, 0L)
            val registryError = AiLicenseRegistryPolicy.validateRegistryFreshness(
                registry = registry,
                license = license,
                lastVerifiedServerMs = lastVerifiedServerMs,
            )
            if (registryError != null) {
                return@withContext publishOnlineFailure(license, registryError)
            }
            val entry = registry.licenses.firstOrNull { it.licenseId == license.licenseId }
                ?: return@withContext publishRevokedAndClear(license, identity, "授权未在 GitHub 清单中")
            if (entry.revoked) {
                return@withContext publishRevokedAndClear(license, identity, "授权已被撤销")
            }
            if (!entry.licenseSha256.equals(AiLicenseCrypto.licenseSha256(license), ignoreCase = true)) {
                return@withContext publishOnlineFailure(license, "授权文件与清单哈希不一致")
            }
            if (license.expiresAt <= registry.generatedAt) {
                return@withContext publishExpiredAndClear(license, identity)
            }
            saveVerification(registry.generatedAt)
            publish(
                AiLicenseState(
                    status = AiLicenseStatus.VALID,
                    message = "授权有效，GitHub 清单已确认",
                    licenseId = license.licenseId,
                    expiresAt = license.expiresAt,
                    lastVerifiedAt = registry.generatedAt,
                    deviceFingerprint = identity.fingerprint,
                    hardwareBacked = identity.hardwareBacked,
                ),
            )
        } catch (error: CancellationException) {
            throw error
        } catch (error: Exception) {
            publish(evaluateOffline(license, identity, error.message ?: "GitHub 不可访问"))
        }
    }

    private fun evaluateOffline(
        license: AiLicense,
        identity: AiDeviceIdentity,
        failureMessage: String = "需要联网检查 GitHub 清单",
    ): AiLicenseState {
        val verifiedServerMs = prefs.getLong(KEY_LAST_VERIFIED_SERVER_MS, 0L)
        val verifiedElapsedMs = prefs.getLong(KEY_LAST_VERIFIED_ELAPSED_MS, 0L)
        val verifiedBoot = prefs.getString(KEY_LAST_VERIFIED_BOOT, "").orEmpty()
        if (verifiedServerMs <= 0L || verifiedElapsedMs <= 0L || verifiedBoot.isBlank()) {
            return AiLicenseState(
                status = AiLicenseStatus.NEEDS_ONLINE,
                message = failureMessage,
                licenseId = license.licenseId,
                expiresAt = license.expiresAt,
                deviceFingerprint = identity.fingerprint,
                hardwareBacked = identity.hardwareBacked,
            )
        }
        val currentElapsed = SystemClock.elapsedRealtime()
        val currentBoot = bootMarker()
        val networkTime = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            runCatching { SystemClock.currentNetworkTimeClock().millis() }.getOrNull()
        } else {
            null
        }
        val decision = AiLicenseTimePolicy.evaluate(
            AiLicenseTimeInput(
                nowElapsedMs = currentElapsed,
                currentBoot = currentBoot,
                verifiedElapsedMs = verifiedElapsedMs,
                verifiedBoot = verifiedBoot,
                nowWallMs = System.currentTimeMillis(),
                verifiedWallMs = prefs.getLong(KEY_LAST_VERIFIED_WALL_MS, 0L),
                verifiedServerMs = verifiedServerMs,
                expiresAtMs = license.expiresAt,
                networkTimeMs = networkTime,
                supportsNetworkTimeClock = Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU,
            ),
        )
        return when (decision.status) {
            AiLicenseStatus.EXPIRED -> expiredState(license, identity)
            else -> AiLicenseState(
                status = decision.status,
                message = if (decision.message == "需要联网检查 GitHub 清单") failureMessage else decision.message,
                licenseId = license.licenseId,
                expiresAt = license.expiresAt,
                lastVerifiedAt = verifiedServerMs,
                graceRemainingMs = decision.graceRemainingMs,
                deviceFingerprint = identity.fingerprint,
                hardwareBacked = identity.hardwareBacked,
            )
        }
    }

    private fun fetchRegistry(): AiLicenseRegistry {
        val url = GitHubUrlResolver.resolveConfiguredDownloadUrl(
            appContext,
            BuildConfig.AI_LICENSE_REGISTRY_URL,
        )
        val connection = (URL(url).openConnection() as HttpURLConnection).apply {
            requestMethod = "GET"
            connectTimeout = 15000
            readTimeout = 15000
            setRequestProperty("Accept", "application/json")
            setRequestProperty("User-Agent", "ShellPlusPlus-AI-License")
        }
        return try {
            val code = connection.responseCode
            val body = (if (code in 200..299) connection.inputStream else connection.errorStream)
                ?.bufferedReader(Charsets.UTF_8)
                ?.use { it.readText() }
                .orEmpty()
            if (code !in 200..299) throw IllegalStateException("GitHub HTTP $code")
            AiLicenseRegistry.fromJson(body)
        } finally {
            connection.disconnect()
        }
    }

    private fun validateLicense(license: AiLicense, fingerprint: String): String? {
        val issuerKey = issuerPublicKey(license.issuerKeyId) ?: return "未知的签发密钥"
        if (!AiLicenseCrypto.verifyLicense(license, issuerKey)) return "授权签名无效"
        if (license.packageName != appContext.packageName) return "授权包名不匹配"
        if (!license.deviceKeySha256.equals(fingerprint, ignoreCase = true)) return "授权未绑定当前设备"
        if (AI_FEATURE !in license.features) return "授权不包含 AI 助手功能"
        if (license.expiresAt <= license.issuedAt) return "授权有效期无效"
        return null
    }

    private fun issuerPublicKey(keyId: String): String? {
        if (keyId != "ed25519-main-2026") return null
        return BuildConfig.AI_LICENSE_ISSUER_PUBLIC_KEY.takeIf { it.isNotBlank() }
    }

    private fun issuerKeyError(keyId: String): String {
        if (keyId != "ed25519-main-2026") return "未知的签发密钥: $keyId"
        return if (BuildConfig.AI_LICENSE_ISSUER_PUBLIC_KEY.isBlank()) {
            "当前构建未配置 AI 签发公钥"
        } else {
            "AI 签发公钥不可用"
        }
    }

    private fun loadLicense(): AiLicense? = prefs.getString(KEY_LICENSE, null)?.let {
        runCatching { AiLicense.fromJson(it) }.getOrNull()
    }

    private fun initialState(): AiLicenseState {
        val identity = runCatching { deviceIdentityStore.identity() }.getOrNull()
        return AiLicenseState(
            deviceFingerprint = identity?.fingerprint.orEmpty(),
            hardwareBacked = identity?.hardwareBacked == true,
        )
    }

    private fun invalidState(license: AiLicense, message: String): AiLicenseState = AiLicenseState(
        status = AiLicenseStatus.INVALID,
        message = message,
        licenseId = license.licenseId,
        expiresAt = license.expiresAt,
        deviceFingerprint = runCatching { deviceIdentityStore.identity().fingerprint }.getOrDefault(""),
        hardwareBacked = runCatching { deviceIdentityStore.identity().hardwareBacked }.getOrDefault(false),
    )

    private fun revokedState(
        license: AiLicense,
        identity: AiDeviceIdentity,
        message: String,
    ): AiLicenseState = AiLicenseState(
        status = AiLicenseStatus.REVOKED,
        message = message,
        licenseId = license.licenseId,
        expiresAt = license.expiresAt,
        deviceFingerprint = identity.fingerprint,
        hardwareBacked = identity.hardwareBacked,
    )

    private fun publishOnlineFailure(license: AiLicense, message: String): AiLicenseState {
        clearVerificationCache()
        return publish(invalidState(license, message))
    }

    private fun publishRevokedAndClear(
        license: AiLicense,
        identity: AiDeviceIdentity,
        message: String,
    ): AiLicenseState {
        clearVerificationCache()
        return publish(revokedState(license, identity, message))
    }

    private fun publishExpiredAndClear(
        license: AiLicense,
        identity: AiDeviceIdentity,
    ): AiLicenseState {
        clearVerificationCache()
        return publish(expiredState(license, identity))
    }

    private fun expiredState(license: AiLicense, identity: AiDeviceIdentity): AiLicenseState = AiLicenseState(
        status = AiLicenseStatus.EXPIRED,
        message = "AI 授权已过期",
        licenseId = license.licenseId,
        expiresAt = license.expiresAt,
        deviceFingerprint = identity.fingerprint,
        hardwareBacked = identity.hardwareBacked,
    )

    private fun publish(value: AiLicenseState): AiLicenseState {
        _state.value = value
        return value
    }

    private fun saveVerification(serverMs: Long) {
        val nowElapsed = SystemClock.elapsedRealtime()
        prefs.edit {
            putLong(KEY_LAST_VERIFIED_SERVER_MS, serverMs)
            putLong(KEY_LAST_VERIFIED_ELAPSED_MS, nowElapsed)
            putLong(KEY_LAST_VERIFIED_WALL_MS, System.currentTimeMillis())
            putString(KEY_LAST_VERIFIED_BOOT, bootMarker())
        }
    }

    private fun clearVerificationCache() {
        prefs.edit {
            remove(KEY_LAST_VERIFIED_SERVER_MS)
            remove(KEY_LAST_VERIFIED_ELAPSED_MS)
            remove(KEY_LAST_VERIFIED_WALL_MS)
            remove(KEY_LAST_VERIFIED_BOOT)
        }
    }

    private fun bootMarker(): String {
        val bootCount = runCatching {
            Settings.Global.getString(appContext.contentResolver, Settings.Global.BOOT_COUNT)
        }.getOrNull()
        return bootCount?.takeIf { it.isNotBlank() } ?: "elapsed:${SystemClock.elapsedRealtime() / 1000L}"
    }
}
