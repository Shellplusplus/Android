package com.shell.liangyi.core.update

import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Test

class GitHubReleaseParserTest {

    @Test
    fun parseReleaseSelectsPreferredFlavorAssetAndParsesMetadata() {
        val json = JSONObject(
            """
            {
              "tag_name": "beta20",
              "name": "Shell++ beta20",
              "body": "min_supported_version_code: 18\n- 修复更新渠道\n- 优化界面",
              "published_at": "2026-07-04T12:34:56Z",
              "assets": [
                {
                  "name": "app-standard-release.apk",
                  "browser_download_url": "https://example.com/standard.apk"
                },
                {
                  "name": "app-developer-release.apk",
                  "browser_download_url": "https://example.com/developer.apk"
                }
              ]
            }
            """.trimIndent()
        )

        val info = GitHubReleaseParser.parseRelease(
            json = json,
            preferredAssetName = "app-developer-release.apk",
        )

        assertEquals("Shell++ beta20", info.latestVersion)
        assertEquals(20L, info.latestVersionCode)
        assertEquals("https://example.com/developer.apk", info.downloadUrl)
        assertEquals("- 修复更新渠道\n- 优化界面", info.changelog)
        assertEquals(18L, info.minSupportedVersionCode)
        assertEquals("2026-07-04", info.releaseDate)
    }

    @Test
    fun parseReleaseFallsBackToFirstApkWhenPreferredAssetMissing() {
        val json = JSONObject(
            """
            {
              "tag_name": "beta21",
              "assets": [
                {
                  "name": "shellpp-release.apk",
                  "browser_download_url": "https://example.com/fallback.apk"
                }
              ]
            }
            """.trimIndent()
        )

        val info = GitHubReleaseParser.parseRelease(
            json = json,
            preferredAssetName = "app-standard-release.apk",
        )

        assertEquals(21L, info.latestVersionCode)
        assertEquals("https://example.com/fallback.apk", info.downloadUrl)
    }

    @Test
    fun preferredAssetNameDefaultsToStandardFlavor() {
        assertEquals(
            "app-standard-release.apk",
            GitHubReleaseParser.preferredAssetNameForFlavor("standard"),
        )
        assertEquals(
            "app-standard-release.apk",
            GitHubReleaseParser.preferredAssetNameForFlavor("unexpected"),
        )
        assertEquals(
            "app-developer-release.apk",
            GitHubReleaseParser.preferredAssetNameForFlavor("developer"),
        )
    }
}
