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

    private const val CORNER_RADIUS_PX = 48f

    fun addRoundedCorners(inputPath: String, outputPath: String): Boolean {
        return try {
            val src = BitmapFactory.decodeFile(inputPath) ?: return false
            val result = addRoundedCornersToBitmap(src, CORNER_RADIUS_PX)
            src.recycle()
            val out = FileOutputStream(outputPath)
            result.compress(Bitmap.CompressFormat.PNG, 100, out)
            out.flush()
            out.close()
            result.recycle()
            true
        } catch (e: Exception) {
            false
        }
    }

    fun compositeWithFrame(screenshotPath: String, framePath: String, outputPath: String): Boolean {
        return try {
            val src = BitmapFactory.decodeFile(screenshotPath) ?: return false
            val frame = BitmapFactory.decodeFile(framePath) ?: run {
                src.recycle()
                return false
            }

            val canvasW = frame.width
            val canvasH = frame.height

            val result = Bitmap.createBitmap(canvasW, canvasH, Bitmap.Config.ARGB_8888)
            val canvas = Canvas(result)

            val rounded = addRoundedCornersToBitmap(src, CORNER_RADIUS_PX)
            src.recycle()

            canvas.drawBitmap(frame, 0f, 0f, null)
            frame.recycle()

            val offsetX = (canvasW - rounded.width) / 2f
            val offsetY = (canvasH - rounded.height) / 2f
            canvas.drawBitmap(rounded, offsetX, offsetY, null)
            rounded.recycle()

            val out = FileOutputStream(outputPath)
            result.compress(Bitmap.CompressFormat.PNG, 100, out)
            out.flush()
            out.close()
            result.recycle()
            true
        } catch (e: Exception) {
            false
        }
    }

    private fun addRoundedCornersToBitmap(src: Bitmap, radiusPx: Float): Bitmap {
        val w = src.width
        val h = src.height
        val result = Bitmap.createBitmap(w, h, Bitmap.Config.ARGB_8888)
        val canvas = Canvas(result)
        val paint = Paint(Paint.ANTI_ALIAS_FLAG)
        canvas.drawRoundRect(RectF(0f, 0f, w.toFloat(), h.toFloat()), radiusPx, radiusPx, paint)
        paint.xfermode = PorterDuffXfermode(PorterDuff.Mode.SRC_IN)
        canvas.drawBitmap(src, 0f, 0f, paint)
        return result
    }
}
