package com.shell.liangyi.util

internal object GalleryFileNamePolicy {
    private const val MAX_BASE_NAME_LENGTH = 96
    private val invalidFileNameChars = Regex("[\\\\/:*?\"<>|\\u0000-\\u001F]")

    fun screenshotBaseName(
        prefix: String,
        index: Int,
        shotId: String,
        timestamp: Long,
    ): String {
        return sanitize("${prefix}_${index.coerceAtLeast(0)}_${timestamp}_${shotId.takeLast(24)}")
    }

    fun sanitize(fileName: String): String {
        return fileName
            .trim()
            .replace(invalidFileNameChars, "_")
            .trim('.', ' ')
            .take(MAX_BASE_NAME_LENGTH)
            .ifBlank { "ShellPP" }
    }

    fun uniquePngName(baseName: String, exists: (String) -> Boolean): String {
        val safeBaseName = sanitize(baseName)
        var candidate = "$safeBaseName.png"
        var suffix = 1
        while (exists(candidate)) {
            candidate = "$safeBaseName ($suffix).png"
            suffix++
        }
        return candidate
    }
}
