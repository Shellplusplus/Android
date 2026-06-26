package com.shell.liangyi.util

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.PorterDuff
import android.graphics.PorterDuffXfermode
import android.graphics.RectF
import java.io.FileOutputStream

object ImageProcessor {

    fun addRoundedCorners(inputPath: String, outputPath: String, radiusPx: Float): Boolean {
        return try {
            val src = BitmapFactory.decodeFile(inputPath) ?: return false
            val w = src.width
            val h = src.height

            val result = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888)
            val canvas = Canvas(result)

            val paint = Paint(Paint.ANTI_ALIAS_FLAG)
            val rect = RectF(0f, 0f, w.toFloat(), h.toFloat())
            canvas.drawRoundRect(rect, radiusPx, radiusPx, paint)

            paint.xfermode = PorterDuffXfermode(PorterDuff.Mode.SRC_IN)
            canvas.drawBitmap(src, 0f, 0f, paint)

            FileOutputStream(outputPath).use { out ->
                result.compress(Bitmap.CompressFormat.PNG, 100, out)
            }

            src.recycle()
            result.recycle()
            true
        } catch (e: Exception) {
            false
        }
    }

    fun compositeWithFrame(screenshotPath: String, framePath: String, outputPath: String): Boolean {
        return try {
            val screenshot = BitmapFactory.decodeFile(screenshotPath) ?: return false
            val frameRaw = BitmapFactory.decodeFile(framePath) ?: run {
                screenshot.recycle()
                return false
            }

            val sw = screenshot.width
            val sh = screenshot.height

            val frame = Bitmap.createScaledBitmap(frameRaw, sw, sh, true)
            if (frame !== frameRaw) frameRaw.recycle()

            val result = Bitmap.createBitmap(sw, sh, Bitmap.Config.ARGB_8888)
            val canvas = Canvas(result)
            canvas.drawBitmap(screenshot, 0f, 0f, null)
            canvas.drawBitmap(frame, 0f, 0f, null)

            FileOutputStream(outputPath).use { out ->
                result.compress(Bitmap.CompressFormat.PNG, 100, out)
            }

            screenshot.recycle()
            frame.recycle()
            result.recycle()
            true
        } catch (e: Exception) {
            false
        }
    }
}
