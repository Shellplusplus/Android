package com.shell.liangyi.core.update

import org.json.JSONObject
import org.junit.Assert.assertEquals
import org.junit.Assert.assertThrows
import org.junit.Test

class GitHubReleaseParserTest {

    @Test
    fun parseReleaseSelectsMergedAssetAndParsesMetadata() {
        val json = JSONObject(
            """
            {
              "tag_name": "beta20",
              "name": "Shell++ beta20",
              "body": "min_supported_version_code: 18\n- 修复更新渠道\n- 优化界面",
              "published_at": "2026-07-04T12:34:56Z",
              "assets": [
                {
                  "name": "app-release.apk",
                  "browser_download_url": "https://example.com/release.apk"
                },
                {
                  "name": "shellpp-debug.apk",
                  "browser_download_url": "https://example.com/debug.apk"
                }
              ]
            }
            """.trimIndent()
        )

        val info = GitHubReleaseParser.parseRelease(
            json = json,
            preferredAssetName = GitHubReleaseParser.preferredAssetName(),
        )

        assertEquals("Shell++ beta20", info.latestVersion)
        assertEquals(20L, info.latestVersionCode)
        assertEquals("https://example.com/release.apk", info.downloadUrl)
        assertEquals("- 修复更新渠道\n- 优化界面", info.changelog)
        assertEquals(18L, info.minSupportedVersionCode)
        assertEquals("2026-07-04", info.releaseDate)
    }

    @Test
    fun parseReleasePrefersStructuredAndroidVersionMetadata() {
        val json = JSONObject(
            """
            {
              "tag_name": "release-2026-07-18",
              "name": "Shell++ unified release",
              "body": "<!-- android_version: 1.2.3 -->\n<!-- android_version_code: 10203 -->\n<!-- min_supported_version: 1.1.0 -->\n<!-- min_supported_version_code: 10100 -->\n\n- 修复更新检查",
              "assets": [{
                "name": "apk-app-release.apk",
                "browser_download_url": "https://example.com/app.apk"
              }]
            }
            """.trimIndent()
        )

        val info = GitHubReleaseParser.parseRelease(
            json = json,
            preferredAssetName = GitHubReleaseParser.preferredAssetName(),
        )

        assertEquals("1.2.3", info.latestVersion)
        assertEquals(10203L, info.latestVersionCode)
        assertEquals(10100L, info.minSupportedVersionCode)
        assertEquals("- 修复更新检查", info.changelog)
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
            preferredAssetName = GitHubReleaseParser.preferredAssetName(),
        )

        assertEquals(21L, info.latestVersionCode)
        assertEquals("https://example.com/fallback.apk", info.downloadUrl)
    }

    @Test
    fun preferredAssetNameUsesMergedReleaseAsset() {
        assertEquals(
            "app-release.apk",
            GitHubReleaseParser.preferredAssetName(),
        )
    }

    @Test
    fun parseReleaseRejectsNonHttpDownloadUrl() {
        val json = JSONObject(
            """
            {
              "tag_name": "beta22",
              "assets": [
                {
                  "name": "app-release.apk",
                  "browser_download_url": "file:///tmp/app-release.apk"
                }
              ]
            }
            """.trimIndent()
        )

        assertThrows(IllegalStateException::class.java) {
            GitHubReleaseParser.parseRelease(
                json = json,
                preferredAssetName = GitHubReleaseParser.preferredAssetName(),
            )
        }
    }

    @Test
    fun parseReleaseRejectsDownloadUrlWithoutHost() {
        val json = JSONObject(
            """
            {
              "tag_name": "beta23",
              "assets": [
                {
                  "name": "app-release.apk",
                  "browser_download_url": "https:///app-release.apk"
                }
              ]
            }
            """.trimIndent()
        )

        assertThrows(IllegalStateException::class.java) {
            GitHubReleaseParser.parseRelease(
                json = json,
                preferredAssetName = GitHubReleaseParser.preferredAssetName(),
            )
        }
    }
}
