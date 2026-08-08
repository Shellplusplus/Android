package com.shell.liangyi.core.diagnostics

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class DiagnosticModelsTest {

    @Test
    fun eventJsonRoundTripPreservesDiagnosticFields() {
        val event = DiagnosticEvent(
            id = "event-1",
            timestamp = 1234L,
            severity = DiagnosticSeverity.Critical,
            category = "screenshot",
            scene = "screenshot_save",
            code = "MediaStoreFailure",
            summary = "保存失败",
            exceptionType = "java.io.IOException",
            stackTrace = "stack",
            environment = DiagnosticEnvironment(
                appVersion = "1.0",
                appVersionCode = 10,
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
                freeStorageBytes = 1024,
                availableMemoryBytes = 2048,
            ),
            metadata = mapOf("result" to "failed"),
        )

        val restored = diagnosticEventFromJson(event.toJson())

        assertEquals(event, restored)
        assertTrue(restored.environment.networkValidated)
    }
}
