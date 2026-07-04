package com.shell.liangyi.core.onboarding

import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class GitHubProxyBenchmarkerTest {

    @Test
    fun benchmarkBuiltInSourcesMarksFailuresAndFindsFastestSource() = runBlocking {
        val results = GitHubProxyBenchmarker.benchmarkBuiltInSources { url ->
            when {
                url.startsWith(GitHubProxySources.ghfast.basePrefix) -> delay(40)
                url.startsWith(GitHubProxySources.ghproxy.basePrefix) -> delay(10)
                url.startsWith(GitHubProxySources.ghproxyCxkpro.basePrefix) -> delay(15)
                url.startsWith(GitHubProxySources.gitwarp.basePrefix) -> error("offline")
                url.startsWith(GitHubProxySources.mirrorProxy.basePrefix) -> delay(25)
            }
        }

        assertEquals(5, results.size)
        assertEquals("ghproxy", GitHubProxyBenchmarker.fastestAvailableSourceId(results))
        assertFalse(results.first { it.sourceId == "gitwarp" }.success)
        assertTrue(results.first { it.sourceId == "ghproxy" }.success)
        assertTrue(results.first { it.sourceId == "ghproxy.cxkpro.top" }.success)
    }
}
