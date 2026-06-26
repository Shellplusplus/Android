package com.shell.liangyi.ui.screenshot

import android.graphics.BitmapFactory
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.model.Screenshot
import com.shell.liangyi.ui.ShellViewModel
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import java.io.File

@Composable
fun ScreenshotDetailScreen(
    shotId: String,
    navController: NavHostController,
    shellViewModel: ShellViewModel
) {
    val colors = MiuixTheme.colorScheme
    val screenshots by shellViewModel.screenshots.collectAsState()
    val shot = screenshots.find { it.shotId == shotId }

    // 加载本地图片
    val bitmap = remember(shot?.localFilePath) {
        shot?.localFilePath?.let { path ->
            val file = File(path)
            if (file.exists()) {
                try { BitmapFactory.decodeFile(path)?.asImageBitmap() } catch (_: Exception) { null }
            } else null
        }
    }

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            // 返回
            Spacer(modifier = Modifier.height(43.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(29.dp))
                Text(
                    text = "←",
                    modifier = Modifier.clickable { navController.popBackStack() },
                    fontSize = 13.sp,
                    color = colors.onSurface
                )
            }

            // 标题
            Spacer(modifier = Modifier.height(21.dp))
            Text(
                text = "#${shot?.index ?: shotId}",
                modifier = Modifier.padding(start = 26.dp),
                fontSize = 30.sp,
                fontWeight = FontWeight.Normal,
                color = colors.onSurface
            )

            if (shot != null) {
                Text(
                    text = shot.capturedAt,
                    modifier = Modifier.padding(start = 26.dp, top = 4.dp),
                    fontSize = 10.sp,
                    color = Color(0x80000000)
                )
            }

            // 截图预览
            Spacer(modifier = Modifier.height(16.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 96.dp)
                    .height(240.dp)
                    .clip(RoundedCornerShape(16.dp))
                    .background(Color(0xFF3D3D3D)),
                contentAlignment = Alignment.Center
            ) {
                if (bitmap != null) {
                    Image(
                        bitmap = bitmap,
                        contentDescription = "截图预览",
                        modifier = Modifier.fillMaxSize(),
                        contentScale = ContentScale.Fit
                    )
                } else if (shot?.isComplete == false) {
                    Text(
                        text = "${shot.receivedChunks ?: 0}/${shot.totalChunks ?: 0}",
                        fontSize = 14.sp,
                        color = Color.White
                    )
                } else {
                    Text(
                        text = "暂无预览",
                        fontSize = 14.sp,
                        color = Color(0x80FFFFFF)
                    )
                }
            }

            Spacer(modifier = Modifier.weight(1f))

            // 保存到相册
            ActionButton(
                text = "保存到相册",
                color = Color(0xFF3482FF),
                enabled = bitmap != null,
                onClick = { /* TODO: 保存到相册 */ }
            )
            Spacer(modifier = Modifier.height(8.dp))

            // 删除截图
            ActionButton(
                text = "删除截图",
                color = Color(0xFFDD4031),
                enabled = shot != null,
                onClick = {
                    shot?.shotId?.let { shellViewModel.deleteScreenshot(it) }
                    navController.popBackStack()
                }
            )
            Spacer(modifier = Modifier.height(13.dp))
        }
    }
}

@Composable
private fun ActionButton(text: String, color: Color, enabled: Boolean, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 10.dp)
            .height(52.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(if (enabled) color else Color(0xFF9E9E9E))
            .clickable(enabled = enabled, onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = Color.White
        )
    }
}
