package com.shell.liangyi.core.update

import org.junit.Assert.assertEquals
import org.junit.Assert.assertThrows
import org.junit.Rule
import org.junit.Test
import org.junit.rules.TemporaryFolder
import java.io.File

class UpdateInstallerTest {

    @get:Rule
    val temporaryFolder = TemporaryFolder()

    @Test
    fun resolveInstallableApkAcceptsApkInsideUpdateCache() {
        val cacheDir = temporaryFolder.newFolder("cache")
        val updatesDir = File(cacheDir, "updates").apply { mkdirs() }
        val apkFile = File(updatesDir, "shellpp.apk").apply { writeText("apk") }

        val resolved = UpdateInstaller.resolveInstallableApk(cacheDir, apkFile.absolutePath)

        assertEquals(apkFile.canonicalFile, resolved)
    }

    @Test
    fun resolveInstallableApkRejectsNonApkFile() {
        val cacheDir = temporaryFolder.newFolder("cache")
        val updatesDir = File(cacheDir, "updates").apply { mkdirs() }
        val textFile = File(updatesDir, "shellpp.txt").apply { writeText("not apk") }

        assertThrows(IllegalArgumentException::class.java) {
            UpdateInstaller.resolveInstallableApk(cacheDir, textFile.absolutePath)
        }
    }

    @Test
    fun resolveInstallableApkRejectsFileOutsideUpdateCache() {
        val cacheDir = temporaryFolder.newFolder("cache")
        val outsideFile = temporaryFolder.newFile("outside.apk")

        assertThrows(IllegalArgumentException::class.java) {
            UpdateInstaller.resolveInstallableApk(cacheDir, outsideFile.absolutePath)
        }
    }

    @Test
    fun resolveInstallableApkRejectsSiblingDirectoryWithUpdatePrefix() {
        val cacheDir = temporaryFolder.newFolder("cache")
        File(cacheDir, "updates").mkdirs()
        val siblingDir = File(cacheDir, "updates_evil").apply { mkdirs() }
        val siblingApk = File(siblingDir, "shellpp.apk").apply { writeText("apk") }

        assertThrows(IllegalArgumentException::class.java) {
            UpdateInstaller.resolveInstallableApk(cacheDir, siblingApk.absolutePath)
        }
    }
}
