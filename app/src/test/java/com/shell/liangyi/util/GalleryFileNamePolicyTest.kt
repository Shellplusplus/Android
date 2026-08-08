package com.shell.liangyi.util

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class GalleryFileNamePolicyTest {

    @Test
    fun screenshotBaseNameKeepsTimestampAndSanitizesShotId() {
        val result = GalleryFileNamePolicy.screenshotBaseName(
            prefix = "Shell++",
            index = 3,
            shotId = "watch/shot:42",
            timestamp = 1_725_000_000_123,
        )

        assertTrue(result.contains("1725000000123"))
        assertFalse(result.contains('/'))
        assertFalse(result.contains(':'))
    }

    @Test
    fun uniquePngNameAddsSuffixWhenNamesAlreadyExist() {
        val existing = setOf("Shell++_1.png", "Shell++_1 (1).png")

        val result = GalleryFileNamePolicy.uniquePngName("Shell++_1", existing::contains)

        assertEquals("Shell++_1 (2).png", result)
    }

    @Test
    fun sanitizeFallsBackForBlankName() {
        assertEquals("ShellPP", GalleryFileNamePolicy.sanitize("   "))
    }
}
