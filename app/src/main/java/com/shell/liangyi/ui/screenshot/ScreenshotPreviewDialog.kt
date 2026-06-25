package com.shell.liangyi.ui.screenshot

import android.util.Base64
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.state.ToggleableState
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.model.Screenshot
import java.io.File
import top.yukonga.miuix.kmp.basic.Button
import top.yukonga.miuix.kmp.basic.ButtonDefaults
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Checkbox
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.TextButton
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun ScreenshotPreviewDialog(
    screenshot: Screenshot,
    onDismiss: () -> Unit,
    onSave: () -> Unit,
    onDelete: () -> Unit,
    selectMode: Boolean = false,
    previewSelected: Boolean = false,
    onToggleSelection: (() -> Unit)? = null
) {
    val colors = MiuixTheme.colorScheme
    val imageModel = remember(screenshot.localFilePath, screenshot.imageData) {
        when {
            screenshot.localFilePath.isNotEmpty() -> File(screenshot.localFilePath)
            screenshot.imageData.isNotEmpty() -> {
                try {
                    Base64.decode(screenshot.imageData, Base64.DEFAULT)
                } catch (_: Exception) {
                    null
                }
            }

            else -> null
        }
    }

    Dialog(onDismissRequest = onDismiss) {
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp),
            cornerRadius = 20.dp,
            colors = CardColors(
                color = colors.surfaceContainer,
                contentColor = colors.onSurface
            )
        ) {
            Column(
                modifier = Modifier.padding(16.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(
                    text = screenshot.displayTitle.ifEmpty { screenshot.shotId },
                    fontSize = 20.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface
                )
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = screenshot.capturedAt,
                    fontSize = 13.sp,
                    color = colors.onSurfaceSecondary
                )
                if (screenshot.transferHint.isNotEmpty()) {
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = screenshot.transferHint,
                        fontSize = 12.sp,
                        color = colors.error
                    )
                }

                Spacer(modifier = Modifier.height(14.dp))

                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .aspectRatio(1f)
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .aspectRatio(1f)
                            .clip(RoundedCornerShape(16.dp))
                            .background(colors.surfaceContainer),
                        contentAlignment = Alignment.Center
                    ) {
                        if (imageModel != null) {
                            AsyncImage(
                                model = ImageRequest.Builder(LocalContext.current)
                                    .data(imageModel)
                                    .crossfade(true)
                                    .build(),
                                contentDescription = "截图预览",
                                modifier = Modifier.fillMaxWidth(),
                                contentScale = ContentScale.Fit
                            )
                        } else {
                            Text(
                                text = "无图片数据",
                                fontSize = 15.sp,
                                color = colors.onSurfaceSecondary
                            )
                        }
                    }

                    if (selectMode && onToggleSelection != null) {
                        Box(
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(8.dp)
                        ) {
                            Checkbox(
                                state = if (previewSelected) ToggleableState.On else ToggleableState.Off,
                                onClick = onToggleSelection
                            )
                        }
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                Button(
                    onClick = onSave,
                    modifier = Modifier.fillMaxWidth(),
                    cornerRadius = 8.dp,
                    colors = ButtonDefaults.buttonColorsPrimary()
                ) {
                    Text(
                        text = "保存到相册",
                        color = colors.onPrimary,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.SemiBold
                    )
                }

                Spacer(modifier = Modifier.height(10.dp))

                Button(
                    onClick = onDelete,
                    modifier = Modifier.fillMaxWidth(),
                    cornerRadius = 8.dp,
                    colors = ButtonDefaults.buttonColors(
                        color = colors.error,
                        disabledColor = colors.error.copy(alpha = 0.4f),
                        contentColor = Color.White,
                        disabledContentColor = Color.White.copy(alpha = 0.6f)
                    )
                ) {
                    Text(
                        text = "删除",
                        color = Color.White,
                        fontSize = 17.sp,
                        fontWeight = FontWeight.SemiBold
                    )
                }

                Spacer(modifier = Modifier.height(8.dp))

                TextButton(
                    text = "关闭",
                    onClick = onDismiss,
                    modifier = Modifier.fillMaxWidth(),
                    colors = ButtonDefaults.textButtonColorsPrimary(
                        color = Color.Transparent,
                        disabledColor = Color.Transparent,
                        textColor = colors.primary,
                        disabledTextColor = colors.primary.copy(alpha = 0.4f)
                    )
                )
            }
        }
    }
}
