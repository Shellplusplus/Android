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
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.FileInputStream

/**
 * 保存图片到系统相册
 */
class GallerySaver(private val context: Context) {

    companion object {
        private const val TAG = "GallerySaver"
        private const val ALBUM_NAME = "ShellPlus"
    }

    /**
     * 保存 Base64 编码的图片到相册
     *
     * @param base64Data Base64 编码的图片数据
     * @param fileName 文件名（不含扩展名）
     * @return 保存成功返回 true
     */
    fun saveBase64ToGallery(base64Data: String, fileName: String): Boolean {
        return try {
            // 解码 Base64
            val imageBytes = Base64.decode(base64Data, Base64.DEFAULT)

            // 转换为 Bitmap
            val bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size)
            if (bitmap == null) {
                Log.e(TAG, "Failed to decode bitmap")
                return false
            }

            try {
                saveBitmapToGallery(bitmap, fileName)
            } finally {
                bitmap.recycle()
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error saving image", e)
            false
        }
    }

    fun saveFileToGallery(filePath: String, fileName: String): Boolean {
        return try {
            val file = File(filePath)
            if (!file.exists() || !file.isFile) {
                Log.e(TAG, "Source image file not found: $filePath")
                return false
            }

            val contentValues = imageContentValues(fileName)

            val resolver = context.contentResolver
            var uri: Uri? = null

            try {
                uri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues)
                if (uri == null) {
                    Log.e(TAG, "Failed to create MediaStore entry for file")
                    return false
                }

                val targetUri = uri
                FileInputStream(file).use { input ->
                    val wrote = resolver.openOutputStream(targetUri)?.use { output ->
                        input.copyTo(output)
                        true
                    } ?: false
                    if (!wrote) {
                        Log.e(TAG, "Failed to open output stream for file")
                        resolver.delete(targetUri, null, null)
                        return false
                    }
                }

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    contentValues.clear()
                    contentValues.put(MediaStore.Images.Media.IS_PENDING, 0)
                    resolver.update(uri, contentValues, null, null)
                }

                Log.d(TAG, "Image file saved to gallery: $uri")
                true
            } catch (e: Exception) {
                Log.e(TAG, "Error saving image file", e)
                uri?.let { resolver.delete(it, null, null) }
                false
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error saving image file", e)
            false
        }
    }

    /**
     * 保存 Bitmap 到相册
     */
    private fun saveBitmapToGallery(bitmap: Bitmap, fileName: String): Boolean {
        val contentValues = imageContentValues(fileName)

        val resolver = context.contentResolver
        var uri: Uri? = null

        try {
            uri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues)

            if (uri == null) {
                Log.e(TAG, "Failed to create MediaStore entry")
                return false
            }

            // 写入图片数据
            val targetUri = uri
            val wrote = resolver.openOutputStream(targetUri)?.use { stream ->
                if (!bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream)) {
                    Log.e(TAG, "Failed to encode bitmap")
                    resolver.delete(targetUri, null, null)
                    return false
                }
                true
            } ?: false
            if (!wrote) {
                Log.e(TAG, "Failed to open output stream")
                resolver.delete(targetUri, null, null)
                return false
            }

            // 更新 pending 状态
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                contentValues.clear()
                contentValues.put(MediaStore.Images.Media.IS_PENDING, 0)
                resolver.update(uri, contentValues, null, null)
            }

            Log.d(TAG, "Image saved to gallery: $uri")
            return true

        } catch (e: Exception) {
            Log.e(TAG, "Error saving image", e)
            // 清理失败的条目
            uri?.let { resolver.delete(it, null, null) }
            return false
        }
    }

    private fun imageContentValues(fileName: String): ContentValues {
        val displayName = "$fileName.png"
        return ContentValues().apply {
            put(MediaStore.Images.Media.DISPLAY_NAME, displayName)
            put(MediaStore.Images.Media.MIME_TYPE, "image/png")

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                // 必须放在 Pictures/ 下，系统相册才会扫描收录
                put(
                    MediaStore.Images.Media.RELATIVE_PATH,
                    "${Environment.DIRECTORY_PICTURES}/$ALBUM_NAME"
                )
                put(MediaStore.Images.Media.IS_PENDING, 1)
            } else {
                val albumDir = File(
                    Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),
                    ALBUM_NAME,
                )
                if (!albumDir.exists()) {
                    albumDir.mkdirs()
                }
                put(MediaStore.Images.Media.DATA, File(albumDir, displayName).absolutePath)
            }
        }
    }

    /**
     * 检查是否有写入外部存储的权限
     */
    fun hasStoragePermission(): Boolean {
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            // Android 10+ 使用 Scoped Storage，不需要存储权限
            true
        } else {
            // Android 9 及以下需要存储权限
            val permission = android.Manifest.permission.WRITE_EXTERNAL_STORAGE
            context.checkSelfPermission(permission) == android.content.pm.PackageManager.PERMISSION_GRANTED
        }
    }
}
