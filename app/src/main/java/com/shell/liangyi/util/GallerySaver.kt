package com.shell.liangyi.util

import android.content.ContentValues
import android.content.Context
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.net.Uri
import android.os.Build
import android.os.Environment
import android.provider.MediaStore
import android.util.Base64
import android.util.Log
import java.io.File

enum class GallerySaveResult {
    Success,
    PermissionDenied,
    SourceMissing,
    InvalidImage,
    StorageUnavailable,
    MediaStoreFailure,
}

/**
 * 保存图片到系统相册
 */
class GallerySaver(private val context: Context) {

    companion object {
        private const val TAG = "GallerySaver"
        private const val ALBUM_NAME = "ShellPlus"
    }

    private data class MediaStoreEntry(
        val collection: Uri,
        val values: ContentValues,
    )

    /**
     * 保存 Base64 编码的图片到相册
     *
     * @param base64Data Base64 编码的图片数据
     * @param fileName 文件名（不含扩展名）
     * @return 保存成功返回 true
     */
    fun saveBase64ToGallery(base64Data: String, fileName: String): Boolean {
        if (!hasStoragePermission()) return false
        return try {
            val imageBytes = Base64.decode(base64Data, Base64.DEFAULT)
            val bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size)
            if (bitmap == null) {
                Log.e(TAG, "Failed to decode bitmap")
                false
            } else {
                try {
                    saveBitmapToGallery(bitmap, fileName) == GallerySaveResult.Success
                } finally {
                    bitmap.recycle()
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error saving Base64 image", e)
            false
        }
    }

    fun saveFileToGallery(filePath: String, fileName: String): GallerySaveResult {
        if (!hasStoragePermission()) {
            Log.w(TAG, "Storage permission is required on this Android version")
            return GallerySaveResult.PermissionDenied
        }
        if (!isSharedStorageWritable()) {
            Log.w(TAG, "Shared storage is not writable: ${Environment.getExternalStorageState()}")
            return GallerySaveResult.StorageUnavailable
        }

        val file = File(filePath)
        if (!file.exists() || !file.isFile) {
            Log.e(TAG, "Source image file not found: $filePath")
            return GallerySaveResult.SourceMissing
        }
        if (file.length() <= 0L) {
            Log.e(TAG, "Source image file is empty: $filePath")
            return GallerySaveResult.InvalidImage
        }

        return try {
            val bitmap = BitmapFactory.decodeFile(file.absolutePath)
            if (bitmap == null) {
                Log.e(TAG, "Source image cannot be decoded: $filePath")
                GallerySaveResult.InvalidImage
            } else {
                try {
                    saveBitmapToGallery(bitmap, fileName)
                } finally {
                    bitmap.recycle()
                }
            }
        } catch (e: SecurityException) {
            Log.e(TAG, "Storage permission denied while reading source image", e)
            GallerySaveResult.PermissionDenied
        } catch (e: Exception) {
            Log.e(TAG, "Error decoding source image", e)
            GallerySaveResult.InvalidImage
        }
    }

    private fun saveBitmapToGallery(bitmap: Bitmap, fileName: String): GallerySaveResult {
        if (!hasStoragePermission()) return GallerySaveResult.PermissionDenied
        if (!isSharedStorageWritable()) return GallerySaveResult.StorageUnavailable

        val entry = createMediaStoreEntry(fileName)
            ?: return GallerySaveResult.StorageUnavailable
        val resolver = context.contentResolver
        var uri: Uri? = null

        return try {
            uri = resolver.insert(entry.collection, entry.values)
            if (uri == null) {
                Log.e(TAG, "Failed to create MediaStore entry")
                return GallerySaveResult.MediaStoreFailure
            }

            val targetUri = uri
            val encoded = resolver.openOutputStream(targetUri, "w")?.use { stream ->
                val compressed = bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream)
                stream.flush()
                compressed
            } ?: false
            if (!encoded) {
                Log.e(TAG, "Failed to encode image into MediaStore")
                deleteQuietly(targetUri)
                return GallerySaveResult.MediaStoreFailure
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                val publishValues = ContentValues().apply {
                    put(MediaStore.Images.Media.IS_PENDING, 0)
                }
                if (resolver.update(targetUri, publishValues, null, null) <= 0) {
                    Log.e(TAG, "Failed to publish pending MediaStore image: $targetUri")
                    deleteQuietly(targetUri)
                    return GallerySaveResult.MediaStoreFailure
                }
            }

            Log.d(TAG, "Image saved to gallery: $targetUri")
            GallerySaveResult.Success
        } catch (e: SecurityException) {
            Log.e(TAG, "Storage permission denied while saving image", e)
            uri?.let(::deleteQuietly)
            GallerySaveResult.PermissionDenied
        } catch (e: Exception) {
            Log.e(TAG, "Error saving image", e)
            uri?.let(::deleteQuietly)
            GallerySaveResult.MediaStoreFailure
        }
    }

    private fun createMediaStoreEntry(fileName: String): MediaStoreEntry? {
        val safeBaseName = GalleryFileNamePolicy.sanitize(fileName)
        val values = ContentValues().apply {
            put(MediaStore.Images.Media.MIME_TYPE, "image/png")
        }

        val collection = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            values.put(MediaStore.Images.Media.DISPLAY_NAME, "$safeBaseName.png")
            values.put(
                MediaStore.Images.Media.RELATIVE_PATH,
                "${Environment.DIRECTORY_PICTURES}/$ALBUM_NAME",
            )
            values.put(MediaStore.Images.Media.IS_PENDING, 1)
            MediaStore.Images.Media.getContentUri(MediaStore.VOLUME_EXTERNAL_PRIMARY)
        } else {
            val albumDir = File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),
                ALBUM_NAME,
            )
            if (!albumDir.exists() && !albumDir.mkdirs()) {
                Log.e(TAG, "Failed to create gallery directory: ${albumDir.absolutePath}")
                return null
            }
            val outputFile = File(
                albumDir,
                GalleryFileNamePolicy.uniquePngName(safeBaseName) { name ->
                    File(albumDir, name).exists()
                },
            )
            values.put(MediaStore.Images.Media.DISPLAY_NAME, outputFile.name)
            values.put(MediaStore.Images.Media.DATA, outputFile.absolutePath)
            MediaStore.Images.Media.EXTERNAL_CONTENT_URI
        }

        return MediaStoreEntry(collection, values)
    }

    private fun deleteQuietly(uri: Uri) {
        try {
            context.contentResolver.delete(uri, null, null)
        } catch (e: Exception) {
            Log.w(TAG, "Failed to clean up MediaStore entry: $uri", e)
        }
    }

    private fun isSharedStorageWritable(): Boolean {
        return Environment.getExternalStorageState() == Environment.MEDIA_MOUNTED
    }

    /**
     * 检查是否有写入外部存储的权限
     */
    fun hasStoragePermission(): Boolean {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            true
        } else {
            val permission = android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            context.checkSelfPermission(permission) == android.content.pm.PackageManager.PERMISSION_GRANTED
        }
    }
}
