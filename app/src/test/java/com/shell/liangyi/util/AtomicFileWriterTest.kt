package com.shell.liangyi.util

import org.junit.Assert.assertArrayEquals
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Test
import java.io.File
import java.nio.file.Files

class AtomicFileWriterTest {

    @Test
    fun writeTextCreatesParentDirectoryAndStoresUtf8Text() {
        val root = Files.createTempDirectory("shellpp-atomic-writer").toFile()
        try {
            val target = File(root, "nested/state.json")

            AtomicFileWriter.writeText(target, """{"status":"完成"}""")

            assertEquals("""{"status":"完成"}""", target.readText(Charsets.UTF_8))
        } finally {
            root.deleteRecursively()
        }
    }

    @Test
    fun writeBytesReplacesExistingFile() {
        val root = Files.createTempDirectory("shellpp-atomic-writer").toFile()
        try {
            val target = File(root, "image.png").apply {
                writeBytes(byteArrayOf(1, 2, 3))
            }

            AtomicFileWriter.writeBytes(target, byteArrayOf(4, 5, 6, 7))

            assertArrayEquals(byteArrayOf(4, 5, 6, 7), target.readBytes())
        } finally {
            root.deleteRecursively()
        }
    }

    @Test
    fun writeTextLeavesNoSiblingTempFilesAfterSuccess() {
        val root = Files.createTempDirectory("shellpp-atomic-writer").toFile()
        try {
            val target = File(root, "record.json")

            AtomicFileWriter.writeText(target, "{}")

            assertFalse(root.listFiles().orEmpty().any { it.name.endsWith(".tmp") })
        } finally {
            root.deleteRecursively()
        }
    }

    @Test
    fun writeKeepsExistingFileAndRemovesTempFileWhenWriterFails() {
        val root = Files.createTempDirectory("shellpp-atomic-writer").toFile()
        try {
            val target = File(root, "record.json").apply {
                writeText("old", Charsets.UTF_8)
            }

            runCatching {
                AtomicFileWriter.write(target) { output ->
                    output.write("new".toByteArray(Charsets.UTF_8))
                    throw IllegalStateException("boom")
                }
            }

            assertEquals("old", target.readText(Charsets.UTF_8))
            assertFalse(root.listFiles().orEmpty().any { it.name.endsWith(".tmp") })
        } finally {
            root.deleteRecursively()
        }
    }
}
