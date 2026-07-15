package com.shell.liangyi.core.onboarding

import org.junit.Assert.assertEquals
import org.junit.Test

class GitHubUrlResolverTest {

    @Test
    fun resolveDownloadUrlPrefixesBuiltInProxyForGitHubResources() {
        val resolved = GitHubUrlResolver.resolveDownloadUrl(
            selection = GitHubProxySelection(sourceId = GitHubProxySources.ghfast.id),
            originalUrl = "https://github.com/example/repo/releases/download/app.apk",
        )

        assertEquals(
            "https://ghfast.top/https://github.com/example/repo/releases/download/app.apk",
            resolved,
        )
    }

    @Test
    fun resolveDownloadUrlLeavesNonGitHubUrlUntouched() {
        val resolved = GitHubUrlResolver.resolveDownloadUrl(
            selection = GitHubProxySelection(sourceId = GitHubProxySources.ghproxy.id),
            originalUrl = "https://example.com/app.apk",
        )

        assertEquals("https://example.com/app.apk", resolved)
    }

    @Test
    fun normalizeCustomBaseUrlAddsSchemeAndTrailingSlash() {
        assertEquals(
            "https://mirror.example.com/",
            GitHubUrlResolver.normalizeCustomBaseUrl("mirror.example.com"),
        )
        assertEquals(
            "https://mirror.example.com/path/",
            GitHubUrlResolver.normalizeCustomBaseUrl("https://mirror.example.com/path"),
        )
        assertEquals(
            "http://192.168.1.8:8080/",
            GitHubUrlResolver.normalizeCustomBaseUrl("http://192.168.1.8:8080"),
        )
    }

    @Test
    fun normalizeCustomBaseUrlRejectsNonHttpSchemesAndMissingHosts() {
        assertEquals("", GitHubUrlResolver.normalizeCustomBaseUrl("file:///tmp/proxy"))
        assertEquals("", GitHubUrlResolver.normalizeCustomBaseUrl("ftp://mirror.example.com"))
        assertEquals("", GitHubUrlResolver.normalizeCustomBaseUrl("https:///missing-host"))
    }

    @Test
    fun resolveDownloadUrlUsesNormalizedCustomBaseUrl() {
        val resolved = GitHubUrlResolver.resolveDownloadUrl(
            selection = GitHubProxySelection(
                sourceId = GitHubProxySources.custom.id,
                customBaseUrl = "proxy.example.com/download",
            ),
            originalUrl = "https://raw.githubusercontent.com/org/repo/main/file.txt",
        )

        assertEquals(
            "https://proxy.example.com/download/https://raw.githubusercontent.com/org/repo/main/file.txt",
            resolved,
        )
    }
}
