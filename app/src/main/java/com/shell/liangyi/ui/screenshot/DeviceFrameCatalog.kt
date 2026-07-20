package com.shell.liangyi.ui.screenshot

import androidx.annotation.RawRes
import androidx.annotation.StringRes
import com.shell.liangyi.R
import com.shell.liangyi.util.ImageProcessor
import java.util.Locale

data class DeviceFrameVariant(
    val id: String,
    @StringRes val labelRes: Int,
    @RawRes val resourceId: Int,
)

data class DeviceFrameSet(
    val id: String,
    @StringRes val modelNameRes: Int,
    val aliases: Set<String>,
    val placement: ImageProcessor.FramePlacement,
    val variants: List<DeviceFrameVariant>,
)

object DeviceFrameCatalog {
    private val frameSets = listOf(
        DeviceFrameSet(
            id = "9pro",
            modelNameRes = R.string.frame_model_band_9_pro,
            aliases = setOf("9pro", "band9pro", "xiaomiband9pro", "xiaomismartband9pro"),
            placement = ImageProcessor.FramePlacement(
                left = 252,
                top = 180,
                width = 336,
                height = 480,
                cornerRadiusPx = 48f,
            ),
            variants = listOf(
                DeviceFrameVariant(
                    id = "9pro_black",
                    labelRes = R.string.frame_style_black,
                    resourceId = R.raw.device_9pro_black,
                )
            ),
        ),
        DeviceFrameSet(
            id = "10pro",
            modelNameRes = R.string.frame_model_band_10_pro,
            aliases = setOf("10pro", "band10pro", "xiaomiband10pro", "xiaomismartband10pro"),
            placement = ImageProcessor.FramePlacement(
                left = 260,
                top = 195,
                width = 320,
                height = 450,
                cornerRadiusPx = 52f,
            ),
            variants = listOf(
                DeviceFrameVariant("10pro_black", R.string.frame_style_black, R.raw.device_10pro_black),
                DeviceFrameVariant("10pro_gray", R.string.frame_style_gray, R.raw.device_10pro_gray),
                DeviceFrameVariant("10pro_pink", R.string.frame_style_pink, R.raw.device_10pro_pink),
                DeviceFrameVariant("10pro_white", R.string.frame_style_white, R.raw.device_10pro_white),
                DeviceFrameVariant(
                    "10pro_cheese_white",
                    R.string.frame_style_cheese_white,
                    R.raw.device_10pro_cheese_white,
                ),
                DeviceFrameVariant("10pro_orange", R.string.frame_style_orange, R.raw.device_10pro_orange),
            ),
        ),
        DeviceFrameSet(
            id = "rw6",
            modelNameRes = R.string.frame_model_redmi_watch_6,
            aliases = setOf("rw6", "redmiwatch6"),
            placement = ImageProcessor.FramePlacement(
                left = 220,
                top = 185,
                width = 400,
                height = 470,
                cornerRadiusPx = 108f,
            ),
            variants = listOf(
                DeviceFrameVariant(
                    id = "rw6_black",
                    labelRes = R.string.frame_style_black,
                    resourceId = R.raw.device_rw6_black,
                )
            ),
        ),
    )

    fun resolve(productCode: String): DeviceFrameSet? {
        val normalized = normalizeProductCode(productCode)
        return frameSets.firstOrNull { normalized in it.aliases }
    }

    internal fun normalizeProductCode(productCode: String): String = productCode
        .trim()
        .lowercase(Locale.ROOT)
        .replace(Regex("[^a-z0-9]+"), "")
}
