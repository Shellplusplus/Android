package com.azuma.shellplus.util

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
import java.io.IOException

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

            // 保存到相册
            saveBitmapToGallery(bitmap, fileName)
        } catch (e: Exception) {
            Log.e(TAG, "Error saving image", e)
            false
        }
    }

    /**
     * 保存 Bitmap 到相册
     */
    private fun saveBitmapToGallery(bitmap: Bitmap, fileName: String): Boolean {
        val contentValues = ContentValues().apply {
            put(MediaStore.Images.Media.DISPLAY_NAME, "$fileName.png")
            put(MediaStore.Images.Media.MIME_TYPE, "image/png")

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                put(MediaStore.Images.Media.RELATIVE_PATH, "$ALBUM_NAME/Screenshots")
                put(MediaStore.Images.Media.IS_PENDING, 1)
            } else {
                put(
                    MediaStore.Images.Media.DATA,
                    Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES)
                        .toString() + "/$ALBUM_NAME/Screenshots/$fileName.png"
                )
            }
        }

        val resolver = context.contentResolver
        var uri: Uri? = null

        try {
            uri = resolver.insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, contentValues)

            if (uri == null) {
                Log.e(TAG, "Failed to create MediaStore entry")
                return false
            }

            // 写入图片数据
            resolver.openOutputStream(uri)?.use { outputStream ->
                bitmap.compress(Bitmap.CompressFormat.PNG, 100, outputStream)
            }

            // 更新 pending 状态
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                contentValues.clear()
                contentValues.put(MediaStore.Images.Media.IS_PENDING, 0)
                resolver.update(uri, contentValues, null, null)
            }

            Log.d(TAG, "Image saved to gallery: $uri")
            return true

        } catch (e: IOException) {
            Log.e(TAG, "Error saving image", e)
            // 清理失败的条目
            uri?.let { resolver.delete(it, null, null) }
            return false
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
