package com.shell.liangyi.core.diagnostics

internal object DiagnosticRedactor {
    private const val MAX_SUMMARY_LENGTH = 600
    private const val MAX_STACK_LENGTH = 12_000
    private const val MAX_METADATA_VALUE_LENGTH = 600

    private val secretAssignment = Regex(
        "(?i)(api[_-]?key|access[_-]?token|auth[_-]?token|authorization|password|secret|ipc[_-]?guard)\\s*[:=]\\s*[^\\s,;]+",
    )
    private val bearerToken = Regex("(?i)bearer\\s+[a-z0-9._~+/-]+=*")
    private val privatePath = Regex("/(?:data|storage|sdcard|mnt)/[^\\s,;]+")
    private val absolutePath = Regex("(?<![a-zA-Z0-9])/(?!/)[^\\s,;]+")
    private val ipv4Address = Regex("\\b(?:\\d{1,3}\\.){3}\\d{1,3}(?::\\d{1,5})?\\b")
    private val ipv6Address = Regex("(?i)\\b(?:[0-9a-f]{0,4}:){2,7}[0-9a-f]{0,4}\\b")
    private val macAddress = Regex("(?i)\\b(?:[0-9a-f]{2}[:-]){5}[0-9a-f]{2}\\b")
    private val urlCredentials = Regex("(?i)(https?://)[^/@\\s]+@")

    fun text(value: String, maxLength: Int = MAX_SUMMARY_LENGTH): String {
        return value
            .replace(secretAssignment) { match ->
                val key = match.groupValues[1]
                "$key=<redacted>"
            }
            .replace(bearerToken, "Bearer <redacted>")
            .replace(urlCredentials) { match -> "${match.groupValues[1]}<redacted>@" }
            .replace(privatePath, "<private-path>")
            .replace(absolutePath, "<private-path>")
            .replace(macAddress, "<mac-address>")
            .replace(ipv4Address, "<ip-address>")
            .replace(ipv6Address, "<ip-address>")
            .take(maxLength)
    }

    fun stack(value: String): String = text(value, MAX_STACK_LENGTH)

    fun metadata(values: Map<String, String>): Map<String, String> {
        return values.entries
            .asSequence()
            .filterNot { (key, _) -> isSensitiveKey(key) }
            .take(24)
            .associate { (key, value) ->
                text(key, 80) to text(value, MAX_METADATA_VALUE_LENGTH)
            }
    }

    private fun isSensitiveKey(key: String): Boolean {
        val normalized = key.lowercase()
        return normalized.contains("token") ||
            normalized.contains("password") ||
            normalized.contains("secret") ||
            normalized.contains("authorization") ||
            normalized.contains("guard") ||
            normalized.contains("command") ||
            normalized.contains("output") ||
            normalized.contains("content")
    }
}
