package com.shell.liangyi.core.update

import org.json.JSONArray
import org.json.JSONObject

internal object GitHubReleaseParser {
    private val minSupportedVersionPattern = Regex(
        """(?im)^\s*(?:<!--\s*)?min_supported_version_code\s*[:=]\s*(\d+)\s*(?:-->)?\s*$"""
    )
    private val versionCodePattern = Regex("""(\d+)""")

    fun preferredAssetName(): String = "app-release.apk"

    fun parseRelease(json: JSONObject, preferredAssetName: String): AppUpdateInfo {
        val tagName = json.optString("tag_name", "")
        val releaseName = json.optString("name", "").ifBlank { tagName }
        val releaseBody = json.optString("body", "")
        val asset = selectAsset(
            assets = json.optJSONArray("assets") ?: JSONArray(),
            preferredAssetName = preferredAssetName,
        ) ?: throw IllegalStateException("Release does not contain a downloadable APK asset")
        val downloadUrl = asset.optString("browser_download_url", "")
        if (downloadUrl.isBlank()) {
            throw IllegalStateException("Release APK asset is missing a download URL")
        }

        return AppUpdateInfo(
            latestVersion = releaseName,
            latestVersionCode = extractVersionCode(tagName, releaseName),
            downloadUrl = downloadUrl,
            changelog = stripMetadataLines(releaseBody),
            minSupportedVersionCode = extractMinSupportedVersionCode(releaseBody),
            releaseDate = extractReleaseDate(json),
        )
    }

    private fun selectAsset(
        assets: JSONArray,
        preferredAssetName: String,
    ): JSONObject? {
        var fallbackApk: JSONObject? = null
        for (index in 0 until assets.length()) {
            val asset = assets.optJSONObject(index) ?: continue
            val name = asset.optString("name", "")
            if (name == preferredAssetName) {
                return asset
            }
            if (fallbackApk == null && name.endsWith(".apk", ignoreCase = true)) {
                fallbackApk = asset
            }
        }
        return fallbackApk
    }

    private fun extractVersionCode(
        tagName: String,
        releaseName: String,
    ): Long {
        val candidates = listOf(tagName, releaseName)
        for (candidate in candidates) {
            val match = versionCodePattern.findAll(candidate).lastOrNull() ?: continue
            return match.value.toLongOrNull()
                ?: throw IllegalStateException("Release version code is invalid")
        }
        throw IllegalStateException("Release does not contain a numeric version code")
    }

    private fun extractMinSupportedVersionCode(releaseBody: String): Long {
        return minSupportedVersionPattern.find(releaseBody)
            ?.groupValues
            ?.getOrNull(1)
            ?.toLongOrNull()
            ?: 0L
    }

    private fun stripMetadataLines(releaseBody: String): String {
        return releaseBody
            .lineSequence()
            .filterNot { minSupportedVersionPattern.matches(it) }
            .joinToString("\n")
            .trim()
    }

    private fun extractReleaseDate(json: JSONObject): String {
        val publishedAt = json.optString("published_at", "")
            .ifBlank { json.optString("created_at", "") }
        return publishedAt.substringBefore('T')
    }
}
