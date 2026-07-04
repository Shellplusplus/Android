package com.shell.liangyi.core.onboarding

import android.content.Context
import java.net.URI

data class GitHubProxySource(
    val id: String,
    val title: String,
    val basePrefix: String,
    val supportsFullUrlPrefix: Boolean = true,
    val builtIn: Boolean = true,
)

data class GitHubProxySelection(
    val sourceId: String = GitHubProxySources.ghfast.id,
    val customBaseUrl: String = "",
)

object GitHubProxySources {
    val ghfast = GitHubProxySource(
        id = "ghfast",
        title = "ghfast",
        basePrefix = "https://ghfast.top/",
    )
    val ghproxy = GitHubProxySource(
        id = "ghproxy",
        title = "ghproxy",
        basePrefix = "https://gh-proxy.com/",
    )
    val gitwarp = GitHubProxySource(
        id = "gitwarp",
        title = "gitwarp",
        basePrefix = "https://proxy.gitwarp.com/",
    )
    val mirrorProxy = GitHubProxySource(
        id = "mirror-proxy.cxkpro.top",
        title = "mirror-proxy.cxkpro.top",
        basePrefix = "https://mirror-proxy.cxkpro.top/",
    )
    val custom = GitHubProxySource(
        id = "custom",
        title = "Custom",
        basePrefix = "",
        builtIn = false,
    )

    val builtInSources = listOf(ghfast, ghproxy, gitwarp, mirrorProxy)
    val allSources = builtInSources + custom

    fun findById(id: String?): GitHubProxySource {
        return allSources.firstOrNull { it.id == id } ?: ghfast
    }
}

object GitHubUrlResolver {

    fun normalizeCustomBaseUrl(raw: String): String {
        val trimmed = raw.trim()
        if (trimmed.isBlank()) return ""
        val withScheme = if ("://" in trimmed) trimmed else "https://$trimmed"
        return if (withScheme.endsWith("/")) withScheme else "$withScheme/"
    }

    fun resolveDownloadUrl(
        selection: GitHubProxySelection,
        originalUrl: String,
    ): String {
        if (originalUrl.isBlank()) return originalUrl
        if (!isGitHubResourceUrl(originalUrl)) return originalUrl

        val source = GitHubProxySources.findById(selection.sourceId)
        val prefix = if (source.id == GitHubProxySources.custom.id) {
            normalizeCustomBaseUrl(selection.customBaseUrl)
        } else {
            source.basePrefix
        }
        if (prefix.isBlank()) return originalUrl
        if (originalUrl.startsWith(prefix)) return originalUrl
        return prefix + originalUrl
    }

    fun resolveConfiguredDownloadUrl(
        context: Context,
        originalUrl: String,
    ): String {
        val selection = OnboardingStateStore.from(context).readState().proxySelection
        return resolveDownloadUrl(selection, originalUrl)
    }

    private fun isGitHubResourceUrl(url: String): Boolean {
        val host = runCatching { URI(url).host.orEmpty().lowercase() }
            .getOrDefault("")
        return host == "github.com" ||
            host.endsWith(".github.com") ||
            host == "raw.githubusercontent.com" ||
            host.endsWith(".githubusercontent.com") ||
            host == "objects.githubusercontent.com"
    }
}
