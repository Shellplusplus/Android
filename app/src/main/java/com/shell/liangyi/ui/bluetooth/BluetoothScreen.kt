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
import androidx.compose.foundation.Image
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.sp
import androidx.compose.ui.res.painterResource
import com.shell.liangyi.R
import androidx.navigation.NavHostController
import com.shell.liangyi.ui.Routes
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Scale: Figma 1080px → 360dp (÷3)

@Composable
fun BluetoothScreen(navController: NavHostController
) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(43.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(29.dp))
                Image(
                    painter = painterResource(id = R.drawable.back),
                    contentDescription = "Back",
                    modifier = Modifier.size(18.dp, 13.dp).clickable(onClick = { navController.popBackStack() }),
                    contentScale = ContentScale.Fit
                )
            }

            Spacer(modifier = Modifier.height(21.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(26.dp))
                Text(
                    text = "蓝牙传输",
                    modifier = Modifier.width(120.dp).height(42.dp),
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            Spacer(modifier = Modifier.height(12.dp))
            StatusCard()

            Spacer(modifier = Modifier.height(33.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(26.dp))
                Text(
                    text = "已获取截图",
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = FontFamily.Default,
                    color = Color(0x66000000)
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 9.dp)
            ) {
                ScreenshotCard("#9", Modifier.weight(1f), onClick = { navController.navigate(Routes.screenshotDetail("9")) })
                Spacer(modifier = Modifier.width(12.dp))
                ScreenshotCard("#1", Modifier.weight(1f), onClick = { navController.navigate(Routes.screenshotDetail("1")) })
            }

            Spacer(modifier = Modifier.weight(1f))

            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 10.dp)
                    .height(52.dp)
                    .clip(RoundedCornerShape(15.dp))
                    .background(Color(0xFF3482FF))
                    .clickable(onClick = { /* TODO */ }),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = "获取截图",
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Medium,
                    fontFamily = FontFamily.Default,
                    color = Color.White
                )
            }
            Spacer(modifier = Modifier.height(13.dp))
        }
    }
}

@Composable
private fun StatusCard() {
    val colors = MiuixTheme.colorScheme
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(56.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(colors.surface)
    ) {
        Row(
            modifier = Modifier.fillMaxSize().padding(start = 13.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(10.dp)
                    .clip(CircleShape)
                    .background(Color(0xFFFF0000))
            )
            Spacer(modifier = Modifier.width(13.dp))
            Text(
                text = "设备端快应用未连接",
                fontSize = 16.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = FontFamily.Default,
                color = colors.onSurface
            )
        }
    }
}

@Composable
private fun ScreenshotCard(number: String, modifier: Modifier = Modifier, onClick: () -> Unit) {
    val colors = MiuixTheme.colorScheme
    Box(
        modifier = modifier
            .height(214.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(colors.surface)
            .clickable(onClick = onClick)
    ) {
        Box(
            modifier = Modifier
                .align(Alignment.TopCenter)
                .padding(top = 9.dp)
                .width(112.dp)
                .height(160.dp)
                .clip(RoundedCornerShape(16.dp))
                .background(Color(0xFF3D3D3D))
        )
        Text(
            text = number,
            modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 18.dp),
            fontSize = 17.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = colors.onSurface
        )
        Text(
            text = "YYYY-MM-DD HH:MM:SS",
            modifier = Modifier.align(Alignment.BottomCenter).padding(bottom = 4.dp),
            fontSize = 10.sp,
            fontWeight = FontWeight.Medium,
            fontFamily = FontFamily.Default,
            color = Color(0x80000000)
        )
    }
}
