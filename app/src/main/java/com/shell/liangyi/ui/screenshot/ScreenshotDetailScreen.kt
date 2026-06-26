package com.shell.liangyi.ui.screenshot

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Design Tokens (Figma: MIUIX/bule #9 detail, 1080×2340)

@Composable
fun ScreenshotDetailScreen(
    screenshotNumber: String,
    onBack: () -> Unit,
    onSave: () -> Unit,
    onDelete: () -> Unit
) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            // Back arrow — (88, 128.5)
            Spacer(modifier = Modifier.height(128.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(88.dp))
                Text(
                    text = "←",
                    modifier = Modifier.clickable(onClick = onBack),
                    fontSize = 38.sp,
                    color = colors.onSurface
                )
            }

            // Title "#9" — (79, 230)
            Spacer(modifier = Modifier.height(64.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(79.dp))
                Text(
                    text = "#$screenshotNumber",
                    modifier = Modifier.width(113.dp).height(126.dp),
                    fontSize = 90.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            // Screenshot preview — y=450, 504×720, #3D3D3D
            Spacer(modifier = Modifier.height(94.dp)) // 450-230-126 = 94
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 288.dp)
                    .height(720.dp)
                    .clip(RoundedCornerShape(48.dp))
                    .background(Color(0xFF3D3D3D))
            )

            Spacer(modifier = Modifier.weight(1f))

            // "保存到相册" button — y=1325, #3482FF
            ActionButton(
                text = "保存到相册",
                color = Color(0xFF3482FF),
                onClick = onSave
            )

            Spacer(modifier = Modifier.height(23.dp))

            // "删除截图" button — y=1505, #DD4031
            ActionButton(
                text = "删除截图",
                color = Color(0xFFDD4031),
                onClick = onDelete
            )

            Spacer(modifier = Modifier.height(40.dp))
        }
    }
}

@Composable
private fun ActionButton(text: String, color: Color, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 31.dp)
            .height(157.dp)
            .clip(RoundedCornerShape(45.dp))
            .background(color)
            .clickable(onClick = onClick),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = text,
            fontSize = 50.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = Color.White
        )
    }
}
