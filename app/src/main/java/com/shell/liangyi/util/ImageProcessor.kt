package com.shell.liangyi.util

import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.Canvas
import android.graphics.Paint
import android.graphics.PorterDuff
import android.graphics.PorterDuffXfermode
import android.graphics.RectF
import androidx.core.graphics.createBitmap
import java.io.File

object ImageProcessor {

    private const val CORNER_RADIUS_PX = 48f

    data class FramePlacement(
        val left: Int,
        val top: Int,
        val width: Int,
        val height: Int,
        val cornerRadiusPx: Float,
    )

    fun addRoundedCorners(inputPath: String, outputPath: String): Boolean {
        var src: Bitmap? = null
        var result: Bitmap? = null
        return try {
            src = BitmapFactory.decodeFile(inputPath) ?: return false
            val roundedResult = addRoundedCornersToBitmap(src, CORNER_RADIUS_PX)
            result = roundedResult
            AtomicFileWriter.write(File(outputPath)) { out ->
                if (!roundedResult.compress(Bitmap.CompressFormat.PNG, 100, out)) {
                    throw IllegalStateException("Failed to encode rounded image")
                }
            }
            true
        } catch (e: Exception) {
            false
        } finally {
            src?.recycle()
            result?.recycle()
        }
    }

    fun compositeWithFrame(
        screenshotPath: String,
        framePath: String,
        outputPath: String,
        placement: FramePlacement? = null,
    ): Boolean {
        var src: Bitmap? = null
        var frame: Bitmap? = null
        var scaled: Bitmap? = null
        var rounded: Bitmap? = null
        var result: Bitmap? = null
        return try {
            src = BitmapFactory.decodeFile(screenshotPath) ?: return false
            frame = BitmapFactory.decodeFile(framePath) ?: return false

            val canvasW = frame.width
            val canvasH = frame.height

            val composited = createBitmap(canvasW, canvasH)
            result = composited
            val canvas = Canvas(composited)

            val targetWidth = placement?.width ?: src.width
            val targetHeight = placement?.height ?: src.height
            val scaledScreenshot = Bitmap.createScaledBitmap(src, targetWidth, targetHeight, true)
            if (scaledScreenshot !== src) {
                scaled = scaledScreenshot
            }
            val roundedScreenshot = addRoundedCornersToBitmap(
                scaledScreenshot,
                placement?.cornerRadiusPx ?: CORNER_RADIUS_PX,
            )
            rounded = roundedScreenshot

            canvas.drawBitmap(frame, 0f, 0f, null)

            val offsetX = placement?.left?.toFloat()
                ?: (canvasW - roundedScreenshot.width) / 2f
            val offsetY = placement?.top?.toFloat()
                ?: (canvasH - roundedScreenshot.height) / 2f
            canvas.drawBitmap(roundedScreenshot, offsetX, offsetY, null)

            AtomicFileWriter.write(File(outputPath)) { out ->
                if (!composited.compress(Bitmap.CompressFormat.PNG, 100, out)) {
                    throw IllegalStateException("Failed to encode framed image")
                }
            }
            true
        } catch (e: Exception) {
            false
        } finally {
            src?.recycle()
            frame?.recycle()
            scaled?.recycle()
            rounded?.recycle()
            result?.recycle()
        }
    }

    private fun addRoundedCornersToBitmap(src: Bitmap, radiusPx: Float): Bitmap {
        val w = src.width
        val h = src.height
        val result = createBitmap(w, h)
        val canvas = Canvas(result)
        val paint = Paint(Paint.ANTI_ALIAS_FLAG)
        canvas.drawRoundRect(RectF(0f, 0f, w.toFloat(), h.toFloat()), radiusPx, radiusPx, paint)
        paint.xfermode = PorterDuffXfermode(PorterDuff.Mode.SRC_IN)
        canvas.drawBitmap(src, 0f, 0f, paint)
        return result
    }
}
