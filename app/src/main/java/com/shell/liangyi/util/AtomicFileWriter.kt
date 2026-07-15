package com.shell.liangyi.util

import java.io.File
import java.io.FileOutputStream
import java.nio.charset.Charset
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.StandardCopyOption

object AtomicFileWriter {
    fun writeText(file: File, text: String, charset: Charset = Charsets.UTF_8) {
        writeBytes(file, text.toByteArray(charset))
    }

    fun writeBytes(file: File, bytes: ByteArray) {
        write(file) { output ->
            output.write(bytes)
        }
    }

    fun write(file: File, writer: (FileOutputStream) -> Unit) {
        val directory = file.parentFile ?: File(".")
        require(directory.exists() || directory.mkdirs()) {
            "Unable to create parent directory: ${directory.absolutePath}"
        }

        val tempFile = File.createTempFile("${file.name}.", ".tmp", directory)
        try {
            FileOutputStream(tempFile).use { output ->
                writer(output)
                output.fd.sync()
            }
            moveReplacing(tempFile, file)
        } catch (throwable: Throwable) {
            tempFile.delete()
            throw throwable
        }
    }

    private fun moveReplacing(source: File, target: File) {
        try {
            Files.move(
                source.toPath(),
                target.toPath(),
                StandardCopyOption.ATOMIC_MOVE,
                StandardCopyOption.REPLACE_EXISTING,
            )
        } catch (_: AtomicMoveNotSupportedException) {
            Files.move(
                source.toPath(),
                target.toPath(),
                StandardCopyOption.REPLACE_EXISTING,
            )
        }
    }
}
