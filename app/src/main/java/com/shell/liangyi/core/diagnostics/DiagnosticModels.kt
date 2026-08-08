package com.shell.liangyi.core.diagnostics

import org.json.JSONObject

enum class DiagnosticSeverity {
    Warning,
    Error,
    Critical,
}

data class DiagnosticEnvironment(
    val appVersion: String,
    val appVersionCode: Long,
    val androidVersion: String,
    val sdkInt: Int,
    val manufacturer: String,
    val model: String,
    val abis: String,
    val locale: String,
    val timezone: String,
    val network: String,
    val networkValidated: Boolean,
    val networkMetered: Boolean,
    val networkVpn: Boolean,
    val freeStorageBytes: Long,
    val availableMemoryBytes: Long,
)

data class DiagnosticEvent(
    val id: String,
    val timestamp: Long,
    val severity: DiagnosticSeverity,
    val category: String,
    val scene: String,
    val code: String,
    val summary: String,
    val exceptionType: String = "",
    val stackTrace: String = "",
    val environment: DiagnosticEnvironment,
    val metadata: Map<String, String> = emptyMap(),
)

data class DiagnosticAlert(
    val eventId: String,
    val scene: String,
    val summary: String,
    val knownIssue: KnownDiagnosticIssue? = null,
)

enum class KnownDiagnosticIssue {
    StorageSpaceLow,
    ScreenshotDamaged,
    ScreenshotSaveFailed,
    ScreenshotTransferInterrupted,
    NearbyDevicePermission,
    WatchDisconnected,
    VpnInterference,
    LanTransferUnavailable,
    FileSaveFailed,
    UpdateNetworkFailed,
    UpdateInstallBlocked,
    DiagnosticExportFailed,
    LowMemory,
    AppNotResponding,
}

enum class DiagnosticCheckStatus {
    Passed,
    Warning,
    Failed,
}

data class DiagnosticCheckItem(
    val name: String,
    val status: DiagnosticCheckStatus,
    val summary: String,
)

internal fun DiagnosticEnvironment.toJson(): JSONObject = JSONObject().apply {
    put("appVersion", appVersion)
    put("appVersionCode", appVersionCode)
    put("androidVersion", androidVersion)
    put("sdkInt", sdkInt)
    put("manufacturer", manufacturer)
    put("model", model)
    put("abis", abis)
    put("locale", locale)
    put("timezone", timezone)
    put("network", network)
    put("networkValidated", networkValidated)
    put("networkMetered", networkMetered)
    put("networkVpn", networkVpn)
    put("freeStorageBytes", freeStorageBytes)
    put("availableMemoryBytes", availableMemoryBytes)
}

internal fun DiagnosticEvent.toJson(): JSONObject = JSONObject().apply {
    put("id", id)
    put("timestamp", timestamp)
    put("severity", severity.name)
    put("category", category)
    put("scene", scene)
    put("code", code)
    put("summary", summary)
    put("exceptionType", exceptionType)
    put("stackTrace", stackTrace)
    put("environment", environment.toJson())
    put("metadata", JSONObject(metadata))
}

internal fun diagnosticEventFromJson(json: JSONObject): DiagnosticEvent {
    val environmentJson = json.optJSONObject("environment") ?: JSONObject()
    val metadataJson = json.optJSONObject("metadata") ?: JSONObject()
    val metadata = buildMap {
        metadataJson.keys().forEach { key -> put(key, metadataJson.optString(key)) }
    }
    return DiagnosticEvent(
        id = json.optString("id"),
        timestamp = json.optLong("timestamp"),
        severity = runCatching {
            DiagnosticSeverity.valueOf(json.optString("severity"))
        }.getOrDefault(DiagnosticSeverity.Error),
        category = json.optString("category"),
        scene = json.optString("scene"),
        code = json.optString("code"),
        summary = json.optString("summary"),
        exceptionType = json.optString("exceptionType"),
        stackTrace = json.optString("stackTrace"),
        environment = DiagnosticEnvironment(
            appVersion = environmentJson.optString("appVersion"),
            appVersionCode = environmentJson.optLong("appVersionCode"),
            androidVersion = environmentJson.optString("androidVersion"),
            sdkInt = environmentJson.optInt("sdkInt"),
            manufacturer = environmentJson.optString("manufacturer"),
            model = environmentJson.optString("model"),
            abis = environmentJson.optString("abis"),
            locale = environmentJson.optString("locale"),
            timezone = environmentJson.optString("timezone"),
            network = environmentJson.optString("network", "Unknown"),
            networkValidated = environmentJson.optBoolean("networkValidated"),
            networkMetered = environmentJson.optBoolean("networkMetered"),
            networkVpn = environmentJson.optBoolean("networkVpn"),
            freeStorageBytes = environmentJson.optLong("freeStorageBytes"),
            availableMemoryBytes = environmentJson.optLong("availableMemoryBytes"),
        ),
        metadata = metadata,
    )
}
