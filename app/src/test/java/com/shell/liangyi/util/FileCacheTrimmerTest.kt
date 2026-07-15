package com.shell.liangyi.util

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test
import java.io.File
import java.nio.file.Files

class FileCacheTrimmerTest {

    @Test
    fun trimKeepsNewestFiles() {
        val root = Files.createTempDirectory("shellpp-file-cache").toFile()
        try {
            val old = cacheFile(root, "old.png", 1000L)
            val middle = cacheFile(root, "middle.png", 2000L)
            val newest = cacheFile(root, "newest.png", 3000L)

            val removed = FileCacheTrimmer.trim(root, maxFiles = 2)

            assertEquals(1, removed)
            assertFalse(old.exists())
            assertTrue(middle.exists())
            assertTrue(newest.exists())
        } finally {
            root.deleteRecursively()
        }
    }

    @Test
    fun trimIgnoresDirectories() {
        val root = Files.createTempDirectory("shellpp-file-cache").toFile()
        try {
            val nested = File(root, "nested").apply { mkdirs() }
            val file = cacheFile(root, "preview.png", 1000L)

            val removed = FileCacheTrimmer.trim(root, maxFiles = 1)

            assertEquals(0, removed)
            assertTrue(nested.exists())
            assertTrue(file.exists())
        } finally {
            root.deleteRecursively()
        }
    }

    @Test
    fun trimCanFilterEligibleFiles() {
        val root = Files.createTempDirectory("shellpp-file-cache").toFile()
        try {
            val oldApk = cacheFile(root, "old.apk", 1000L)
            val newApk = cacheFile(root, "new.apk", 2000L)
            val partial = cacheFile(root, "download.part", 3000L)

            val removed = FileCacheTrimmer.trim(root, maxFiles = 1) { file ->
                file.extension.equals("apk", ignoreCase = true)
            }

            assertEquals(1, removed)
            assertFalse(oldApk.exists())
            assertTrue(newApk.exists())
            assertTrue(partial.exists())
        } finally {
            root.deleteRecursively()
        }
    }

    private fun cacheFile(directory: File, name: String, modifiedAt: Long): File {
        return File(directory, name).apply {
            writeText(name)
            setLastModified(modifiedAt)
        }
    }
}
