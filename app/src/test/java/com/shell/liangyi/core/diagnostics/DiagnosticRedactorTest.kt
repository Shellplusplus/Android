package com.shell.liangyi.core.diagnostics

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class DiagnosticRedactorTest {

    @Test
    fun textRemovesSecretsAndPrivatePaths() {
        val result = DiagnosticRedactor.text(
            "authorization=Bearer-secret token=abc /data/user/0/com.shell.liangyi/files/test.txt 192.168.1.8:8080 AA:BB:CC:DD:EE:FF",
        )

        assertFalse(result.contains("Bearer-secret"))
        assertFalse(result.contains("token=abc"))
        assertFalse(result.contains("com.shell.liangyi"))
        assertTrue(result.contains("<redacted>"))
        assertTrue(result.contains("<private-path>"))
        assertTrue(result.contains("<ip-address>"))
        assertTrue(result.contains("<mac-address>"))
    }

    @Test
    fun metadataDropsSensitiveFields() {
        val result = DiagnosticRedactor.metadata(
            mapOf(
                "scene" to "screenshot_save",
                "authToken" to "secret",
                "terminalCommand" to "rm something",
            ),
        )

        assertEquals(mapOf("scene" to "screenshot_save"), result)
    }
}
