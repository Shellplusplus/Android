package com.shell.liangyi.core.update

import android.content.Context
import com.shell.liangyi.util.FileCacheTrimmer
import java.io.File
import java.io.FileOutputStream
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLDecoder
import java.nio.charset.StandardCharsets
import java.nio.file.AtomicMoveNotSupportedException
import java.nio.file.Files
import java.nio.file.StandardCopyOption

object InAppUpdateDownloader {
    private val UnsafeFileNameChars = Regex("[^A-Za-z0-9._-]")
    private val ApkSuffix = Regex("\\.apk$", RegexOption.IGNORE_CASE)
    private const val DEFAULT_BASE_NAME = "shellpp-update"
    private const val DEFAULT_VERSION_NAME = "latest"
    private const val MAX_BASE_NAME_LENGTH = 80
    private const val MAX_VERSION_NAME_LENGTH = 48
    private const val UPDATE_APK_CACHE_LIMIT = 3

    fun downloadApk(
        context: Context,
        url: String,
        versionName: String,
        onProgress: (downloadedBytes: Long, totalBytes: Long?) -> Unit,
    ): File {
        val updateDir = File(context.cacheDir, "updates")
        require(updateDir.exists() || updateDir.mkdirs()) { "Unable to create update cache directory." }
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
                FileOutputStream(tempFile).use { fileOutput ->
                    fileOutput.buffered().use { output ->
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
                    fileOutput.fd.sync()
                }
            }

            moveReplacing(tempFile, outputFile)
            FileCacheTrimmer.trim(updateDir, UPDATE_APK_CACHE_LIMIT) { file ->
                file.extension.equals("apk", ignoreCase = true)
            }

            return outputFile
        } catch (throwable: Throwable) {
            tempFile.delete()
            throw throwable
        } finally {
            connection.disconnect()
        }
    }

    internal fun buildFileName(url: String, versionName: String): String {
        val rawName = rawUrlFileName(url)
        val decodedName = runCatching {
            URLDecoder.decode(rawName, StandardCharsets.UTF_8.name())
        }.getOrDefault(rawName)
        val baseName = sanitizeFileName(ApkSuffix.replace(decodedName, ""), DEFAULT_BASE_NAME)
            .take(MAX_BASE_NAME_LENGTH)
        val normalizedVersion = sanitizeFileName(versionName, DEFAULT_VERSION_NAME)
            .take(MAX_VERSION_NAME_LENGTH)
        return "${baseName}_$normalizedVersion.apk"
    }

    private fun rawUrlFileName(url: String): String {
        return runCatching {
            URL(url).path.substringAfterLast('/')
        }.getOrDefault(
            url.substringBefore('?')
                .substringBefore('#')
                .substringAfterLast('/'),
        ).ifBlank { "$DEFAULT_BASE_NAME.apk" }
    }

    private fun sanitizeFileName(value: String, fallback: String): String {
        return value
            .trim()
            .replace(UnsafeFileNameChars, "_")
            .trim('.', '_', '-')
            .ifBlank { fallback }
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
