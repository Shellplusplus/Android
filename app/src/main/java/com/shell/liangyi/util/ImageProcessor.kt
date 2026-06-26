package com.shell.liangyi.util

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.PorterDuff
import android.graphics.PorterDuffXfermode
import android.graphics.Rect
import android.graphics.RectF
import java.io.File
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

            val out = FileOutputStream(outputPath)
            result.compress(Bitmap.CompressFormat.PNG, 100, out)
            out.flush()
            out.close()

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
            val frame = BitmapFactory.decodeFile(framePath) ?: run {
                screenshot.recycle()
                return false
            }

            val result = Bitmap.createBitmap(frame.width, frame.height, Bitmap.Config.ARGB_8888)
            val canvas = Canvas(result)

            val offsetX = (frame.width - screenshot.width) / 2f
            val offsetY = (frame.height - screenshot.height) / 2f
            canvas.drawBitmap(screenshot, offsetX, offsetY, null)

            canvas.drawBitmap(frame, 0f, 0f, null)

            val out = FileOutputStream(outputPath)
            result.compress(Bitmap.CompressFormat.PNG, 100, out)
            out.flush()
            out.close()

            screenshot.recycle()
            frame.recycle()
            result.recycle()
            true
        } catch (e: Exception) {
            false
        }
    }
}
