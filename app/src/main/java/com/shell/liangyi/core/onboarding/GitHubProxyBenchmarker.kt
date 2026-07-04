package com.shell.liangyi.core.onboarding

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.withContext
import java.net.HttpURLConnection
import java.net.URL

data class GitHubProxyBenchmarkResult(
    val sourceId: String,
    val latencyMs: Long?,
    val success: Boolean,
    val errorMessage: String? = null,
)

data class GitHubProxyBenchmarkUiState(
    val isRunning: Boolean = false,
    val results: List<GitHubProxyBenchmarkResult> = emptyList(),
    val fastestSourceId: String? = null,
    val lastRunAt: Long? = null,
)

object GitHubProxyBenchmarker {
    const val DEFAULT_PROBE_URL =
        "https://raw.githubusercontent.com/github/gitignore/main/Android.gitignore"

    suspend fun benchmarkBuiltInSources(
        probeUrl: String = DEFAULT_PROBE_URL,
        requester: suspend (String) -> Unit = { url -> requestProbe(url) },
    ): List<GitHubProxyBenchmarkResult> = coroutineScope {
        GitHubProxySources.builtInSources.map { source ->
            async {
                benchmarkSingleSource(
                    source = source,
                    probeUrl = probeUrl,
                    requester = requester,
                )
            }
        }.awaitAll()
    }

    fun fastestAvailableSourceId(results: List<GitHubProxyBenchmarkResult>): String? {
        return results
            .filter { it.success && it.latencyMs != null }
            .minByOrNull { it.latencyMs ?: Long.MAX_VALUE }
            ?.sourceId
    }

    private suspend fun benchmarkSingleSource(
        source: GitHubProxySource,
        probeUrl: String,
        requester: suspend (String) -> Unit,
    ): GitHubProxyBenchmarkResult {
        val targetUrl = GitHubUrlResolver.resolveDownloadUrl(
            selection = GitHubProxySelection(sourceId = source.id),
            originalUrl = probeUrl,
        )
        val startedAt = System.nanoTime()
        return runCatching {
            requester(targetUrl)
            val latencyMs = (System.nanoTime() - startedAt) / 1_000_000
            GitHubProxyBenchmarkResult(
                sourceId = source.id,
                latencyMs = latencyMs,
                success = true,
            )
        }.getOrElse { throwable ->
            GitHubProxyBenchmarkResult(
                sourceId = source.id,
                latencyMs = null,
                success = false,
                errorMessage = throwable.message,
            )
        }
    }

    private suspend fun requestProbe(url: String) = withContext(Dispatchers.IO) {
        val connection = (URL(url).openConnection() as HttpURLConnection).apply {
            instanceFollowRedirects = true
            requestMethod = "GET"
            connectTimeout = 5000
            readTimeout = 5000
            setRequestProperty("User-Agent", "ShellPlusPlus-Android")
            setRequestProperty("Accept", "*/*")
        }
        try {
            val responseCode = connection.responseCode
            if (responseCode !in 200..399) {
                throw IllegalStateException("HTTP $responseCode")
            }
            connection.inputStream.use { stream ->
                stream.read()
            }
        } finally {
            connection.disconnect()
        }
    }
}
