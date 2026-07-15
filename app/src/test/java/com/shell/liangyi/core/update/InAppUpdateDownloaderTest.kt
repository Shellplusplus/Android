package com.shell.liangyi.core.update

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Test

class InAppUpdateDownloaderTest {

    @Test
    fun buildFileNameKeepsCleanApkNameAndVersion() {
        val name = InAppUpdateDownloader.buildFileName(
            url = "https://github.com/example/releases/download/v1/app-release.apk",
            versionName = "1.2.3",
        )

        assertEquals("app-release_1.2.3.apk", name)
    }

    @Test
    fun buildFileNameIgnoresQueryAndFragment() {
        val name = InAppUpdateDownloader.buildFileName(
            url = "https://example.com/download/ShellPlus.apk?token=a/b#frag",
            versionName = "beta 1",
        )

        assertEquals("ShellPlus_beta_1.apk", name)
    }

    @Test
    fun buildFileNameSanitizesDecodedPathTraversal() {
        val name = InAppUpdateDownloader.buildFileName(
            url = "https://example.com/releases/%2E%2E%2Foutside.apk",
            versionName = "../bad",
        )

        assertEquals("outside_bad.apk", name)
        assertFalse(name.contains('/'))
        assertFalse(name.contains('\\'))
        assertFalse(name.contains(".."))
    }

    @Test
    fun buildFileNameFallsBackForBlankParts() {
        val name = InAppUpdateDownloader.buildFileName(
            url = "https://example.com/releases/",
            versionName = "",
        )

        assertEquals("shellpp-update_latest.apk", name)
    }
}
