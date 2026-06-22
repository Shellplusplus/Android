package com.shell.liangyi.ui.screenshot

import android.util.Base64
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import coil.compose.AsyncImage
import coil.request.ImageRequest
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.theme.LocalIOSColors
import java.io.File

@Composable
fun ScreenshotPreviewDialog(
    screenshot: Screenshot,
    onDismiss: () -> Unit,
    onSave: () -> Unit,
    onDelete: () -> Unit
) {
    val c = LocalIOSColors.current
    val imageModel = remember(screenshot.localFilePath, screenshot.imageData) {
        if (screenshot.localFilePath.isNotEmpty()) {
            File(screenshot.localFilePath)
        } else if (screenshot.imageData.isNotEmpty()) {
            try {
                Base64.decode(screenshot.imageData, Base64.DEFAULT)
            } catch (e: Exception) {
                null
            }
        } else {
            null
        }
    }

    Dialog(onDismissRequest = onDismiss) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(12.dp)
                .clip(RoundedCornerShape(20.dp))
                .background(c.cardBackground)
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = screenshot.displayTitle.ifEmpty { screenshot.shotId },
                fontSize = 17.sp,
                fontWeight = FontWeight.SemiBold,
                color = c.label
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(text = screenshot.capturedAt, fontSize = 13.sp, color = c.secondaryLabel)
            if (screenshot.transferHint.isNotEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(text = screenshot.transferHint, fontSize = 12.sp, color = Color(0xFFFF453A))
            }

            Spacer(modifier = Modifier.height(14.dp))

            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .aspectRatio(1f)
                    .clip(RoundedCornerShape(14.dp))
                    .background(if (c.isDark) Color(0xFF2C2C2E) else Color(0xFFE5E5EA)),
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
                    Text(text = "无图片数据", color = c.secondaryLabel, fontSize = 15.sp)
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            FilledButton(text = "保存到相册", bg = c.accent, onClick = onSave)
            Spacer(modifier = Modifier.height(10.dp))
            FilledButton(text = "删除", bg = c.red, onClick = onDelete)
            Spacer(modifier = Modifier.height(10.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(14.dp))
                    .clickable { onDismiss() }
                    .padding(vertical = 13.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(text = "关闭", color = c.accent, fontSize = 17.sp)
            }
        }
    }
}

@Composable
private fun FilledButton(text: String, bg: Color, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(14.dp))
            .background(bg)
            .clickable { onClick() }
            .padding(vertical = 13.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(text = text, color = Color.White, fontSize = 17.sp, fontWeight = FontWeight.SemiBold)
    }
}
