package com.shell.liangyi.ui.index

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.graphics.Color
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Design Tokens (Figma: MIUIX/index, 1080×2340)
// Scale: 1px = 1dp

@Composable
fun IndexScreen(
    onNavigateToBluetooth: () -> Unit,
    onNavigateToFetch: () -> Unit,
    onNavigateToTerminal: () -> Unit,
    onNavigateToAbout: () -> Unit
) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        // Setting icon (top-right)
        Image(
            painter = painterResource(id = android.R.drawable.ic_menu_manage),
            contentDescription = "Settings",
            modifier = Modifier
                .align(Alignment.TopEnd)
                .padding(end = 70.dp, top = 130.dp)
                .size(48.dp, 54.dp)
        )

        Column(modifier = Modifier.fillMaxSize()) {
            // Token: Shell++ title — (70, 214), 325×126
            Spacer(modifier = Modifier.height(214.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(70.dp))
                Text(
                    text = "Shell++",
                    modifier = Modifier.width(325.dp).height(126.dp),
                    fontSize = 90.sp,
                    fontWeight = FontWeight.Normal, // 400
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            // Token: card gap = 32dp between cards
            Spacer(modifier = Modifier.height(27.dp)) // 367-214-126 = 27

            // Card 1: 截图同步（蓝牙）
            MenuCard(
                title = "截图同步（蓝牙）",
                onClick = onNavigateToBluetooth
            )

            Spacer(modifier = Modifier.height(31.dp)) // 566-367-168 = 31

            // Card 2: 截图同步（局域网）
            MenuCard(
                title = "截图同步（局域网）",
                onClick = onNavigateToFetch
            )

            Spacer(modifier = Modifier.height(31.dp)) // 765-566-168 = 31

            // Card 3: 远程终端
            MenuCard(
                title = "远程终端",
                onClick = onNavigateToTerminal
            )

            Spacer(modifier = Modifier.height(31.dp)) // 964-765-168 = 31

            // Card 4: 关于
            MenuCard(
                title = "关于",
                onClick = onNavigateToAbout
            )
        }
    }
}

// Token: Card — 1013×168, 45dp borderRadius, white, padding left=40
@Composable
private fun MenuCard(title: String, onClick: () -> Unit) {
    val colors = MiuixTheme.colorScheme

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 34.dp, vertical = 0.dp)
            .height(168.dp)
            .clip(RoundedCornerShape(45.dp))
            .background(colors.surface)
            .clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier.fillMaxSize().padding(start = 40.dp, end = 40.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = title,
                fontSize = 48.sp,
                fontWeight = FontWeight.Medium, // 500
                fontFamily = FontFamily.Default,
                color = colors.onSurface
            )
            Text(
                text = "›",
                fontSize = 34.sp,
                color = Color(0xFF9E9E9E)
            )
        }
    }
}
