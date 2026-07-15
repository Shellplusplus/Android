package com.shell.liangyi.model

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class AgentApiConfigTest {

    @Test
    fun normalizeBaseUrlKeepsHttpAndHttpsUrlsWithoutTrailingSlash() {
        assertEquals(
            "https://api.openai.com/v1",
            AgentApiConfig.normalizeBaseUrl(" https://api.openai.com/v1/ "),
        )
        assertEquals(
            "http://127.0.0.1:8080/v1",
            AgentApiConfig.normalizeBaseUrl("http://127.0.0.1:8080/v1/"),
        )
    }

    @Test
    fun normalizeBaseUrlRejectsUnsupportedSchemesAndMissingHosts() {
        assertEquals("", AgentApiConfig.normalizeBaseUrl("file:///tmp/model"))
        assertEquals("", AgentApiConfig.normalizeBaseUrl("ftp://example.com/v1"))
        assertEquals("", AgentApiConfig.normalizeBaseUrl("https:///missing-host"))
    }

    @Test
    fun isConfiguredRequiresValidBaseUrlAndModel() {
        assertTrue(
            AgentApiConfig(
                baseUrl = "https://api.openai.com/v1",
                model = "gpt-4o-mini",
            ).isConfigured,
        )
        assertFalse(
            AgentApiConfig(
                baseUrl = "file:///tmp/model",
                model = "gpt-4o-mini",
            ).isConfigured,
        )
        assertFalse(
            AgentApiConfig(
                baseUrl = "https://api.openai.com/v1",
                model = "",
            ).isConfigured,
        )
    }
}
