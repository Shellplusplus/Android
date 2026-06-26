package com.shell.liangyi.ui.bluetooth

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
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

// Design Tokens (Figma: MIUIX/bule, 1080×2340)

@Composable
fun BluetoothScreen(
    onBack: () -> Unit,
    onGetScreenshot: () -> Unit,
    onOpenDetail: (String) -> Unit
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

            // Title "蓝牙传输" — (79, 230)
            Spacer(modifier = Modifier.height(64.dp)) // 230-128-38 = 64
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(79.dp))
                Text(
                    text = "蓝牙传输",
                    modifier = Modifier.width(360.dp).height(126.dp),
                    fontSize = 90.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            // Status card — y=391
            Spacer(modifier = Modifier.height(35.dp)) // 391-230-126 = 35
            StatusCard()

            // "已获取截图" label — y=822
            Spacer(modifier = Modifier.height(165.dp)) // 822-168(button)-... 
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(78.dp))
                Text(
                    text = "已获取截图",
                    fontSize = 39.sp,
                    fontWeight = FontWeight.SemiBold, // 600
                    fontFamily = FontFamily.Default,
                    color = Color(0x66000000) // rgba(0,0,0,0.4)
                )
            }

            Spacer(modifier = Modifier.height(48.dp))

            // Screenshot cards row
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 27.dp)
            ) {
                ScreenshotCard(
                    number = "#9",
                    onClick = { onOpenDetail("9") }
                )
                Spacer(modifier = Modifier.width(36.dp))
                ScreenshotCard(
                    number = "#1",
                    onClick = { onOpenDetail("1") }
                )
            }

            Spacer(modifier = Modifier.weight(1f))

            // "获取截图" button — y=623 (relative to bottom area)
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 31.dp)
                    .height(157.dp)
                    .clip(RoundedCornerShape(45.dp))
                    .background(Color(0xFF3482FF))
                    .clickable(onClick = onGetScreenshot),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "获取截图",
                    fontSize = 50.sp,
                    fontWeight = FontWeight.Medium,
                    fontFamily = FontFamily.Default,
                    color = Color.White
                )
            }
            Spacer(modifier = Modifier.height(40.dp))
        }
    }
}

@Composable
private fun StatusCard() {
    val colors = MiuixTheme.colorScheme

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 34.dp)
            .height(168.dp)
            .clip(RoundedCornerShape(45.dp))
            .background(colors.surface)
    ) {
        Row(
            modifier = Modifier.fillMaxSize().padding(start = 40.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Red dot
            Box(
                modifier = Modifier
                    .size(30.dp)
                    .clip(CircleShape)
                    .background(Color(0xFFFF0000))
            )
            Spacer(modifier = Modifier.width(40.dp))
            Text(
                text = "设备端快应用未连接",
                fontSize = 48.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = FontFamily.Default,
                color = colors.onSurface
            )
        }
    }
}

@Composable
private fun ScreenshotCard(number: String, onClick: () -> Unit) {
    val colors = MiuixTheme.colorScheme

    Box(
        modifier = Modifier
            .width(491.dp)
            .height(643.dp)
            .clip(RoundedCornerShape(45.dp))
            .background(colors.surface)
            .clickable(onClick = onClick)
    ) {
        // Handwatch preview — 336×480, #3D3D3D
        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 26.dp)
                .width(336.dp)
                .height(480.dp)
                .clip(RoundedCornerShape(48.dp))
                .background(Color(0xFF3D3D3D))
        )
        // Screenshot number
        Text(
            text = number,
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 53.dp),
            fontSize = 50.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = colors.onSurface
        )
        // Timestamp
        Text(
            text = "YYYY-MM-DD HH:MM:SS",
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 11.dp),
            fontSize = 30.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = Color(0x80000000) // rgba(0,0,0,0.5)
        )
    }
}
