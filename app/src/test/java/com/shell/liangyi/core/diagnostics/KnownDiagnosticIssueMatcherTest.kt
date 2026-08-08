package com.shell.liangyi.core.diagnostics

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class KnownDiagnosticIssueMatcherTest {
    @Test
    fun matchesKnownScreenshotSaveFailure() {
        val issue = KnownDiagnosticIssueMatcher.match(
            event(category = "screenshot", code = "MediaStoreFailure"),
        )

        assertEquals(KnownDiagnosticIssue.ScreenshotSaveFailed, issue)
    }

    @Test
    fun prioritizesLowStorageSignal() {
        val issue = KnownDiagnosticIssueMatcher.match(
            event(
                category = "file_transfer",
                code = "insufficient_space",
                freeStorageBytes = 64L * 1024 * 1024,
            ),
        )

        assertEquals(KnownDiagnosticIssue.StorageSpaceLow, issue)
    }

    @Test
    fun doesNotAttachSolutionToUnknownCrash() {
        val issue = KnownDiagnosticIssueMatcher.match(
            event(category = "app_crash", code = "uncaught_exception"),
        )

        assertNull(issue)
    }

    private fun event(
        category: String,
        code: String,
        freeStorageBytes: Long = 2L * 1024 * 1024 * 1024,
    ) = DiagnosticEvent(
        id = "event",
        timestamp = 1L,
        severity = DiagnosticSeverity.Error,
        category = category,
        scene = "test",
        code = code,
        summary = "测试异常",
        environment = DiagnosticEnvironment(
            appVersion = "1.0",
            appVersionCode = 1L,
            androidVersion = "16",
            sdkInt = 36,
            manufacturer = "Example",
            model = "Phone",
            abis = "arm64-v8a",
            locale = "zh-CN",
            timezone = "Asia/Shanghai",
            network = "Wi-Fi",
            networkValidated = true,
            networkMetered = false,
            networkVpn = false,
            freeStorageBytes = freeStorageBytes,
            availableMemoryBytes = 512L * 1024 * 1024,
        ),
    )
}
