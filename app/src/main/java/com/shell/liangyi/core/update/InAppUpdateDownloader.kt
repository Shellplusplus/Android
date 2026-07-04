package com.shell.liangyi.core.update

import android.content.Context
import java.io.File
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLDecoder
import java.nio.charset.StandardCharsets

object InAppUpdateDownloader {

    fun downloadApk(
        context: Context,
        url: String,
        versionName: String,
        onProgress: (downloadedBytes: Long, totalBytes: Long?) -> Unit,
    ): File {
        val updateDir = File(context.cacheDir, "updates").apply { mkdirs() }
        val fileName = buildFileName(url, versionName)
        val outputFile = File(updateDir, fileName)
        val tempFile = File(updateDir, "$fileName.part")

        if (tempFile.exists()) {
            tempFile.delete()
        }

        val connection = (URL(url).openConnection() as HttpURLConnection).apply {
            instanceFollowRedirects = true
            requestMethod = "GET"
            connectTimeout = 15_000
            readTimeout = 30_000
            setRequestProperty("User-Agent", "ShellPlusPlus-Android")
            setRequestProperty("Accept", "application/vnd.android.package-archive,*/*")
        }

        try {
            val responseCode = connection.responseCode
            if (responseCode !in 200..299) {
                throw IllegalStateException("HTTP $responseCode")
            }

            val totalBytes = connection.contentLengthLong.takeIf { it > 0L }
            var downloadedBytes = 0L
            onProgress(downloadedBytes, totalBytes)

            connection.inputStream.use { input ->
                tempFile.outputStream().buffered().use { output ->
                    val buffer = ByteArray(DEFAULT_BUFFER_SIZE)
                    while (true) {
                        val read = input.read(buffer)
                        if (read <= 0) break
                        output.write(buffer, 0, read)
                        downloadedBytes += read
                        onProgress(downloadedBytes, totalBytes)
                    }
                    output.flush()
                }
            }

            if (outputFile.exists()) {
                outputFile.delete()
            }
            if (!tempFile.renameTo(outputFile)) {
                tempFile.copyTo(outputFile, overwrite = true)
                tempFile.delete()
            }

            return outputFile
        } catch (throwable: Throwable) {
            tempFile.delete()
            throw throwable
        } finally {
            connection.disconnect()
        }
    }

    private fun buildFileName(url: String, versionName: String): String {
        val rawName = URLDecoder.decode(
            url.substringAfterLast('/').ifBlank { "shellpp-update.apk" },
            StandardCharsets.UTF_8.name(),
        )
        val normalizedVersion = versionName.ifBlank { "latest" }
            .replace(Regex("[^A-Za-z0-9._-]"), "_")
        val baseName = rawName.removeSuffix(".apk").ifBlank { "shellpp-update" }
        return "${baseName}_$normalizedVersion.apk"
    }
}
