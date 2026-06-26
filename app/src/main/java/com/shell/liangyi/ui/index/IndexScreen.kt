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
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Scale: Figma 1080px → 360dp (÷3)

@Composable
fun IndexScreen(
    onNavigateToBluetooth: () -> Unit,
    onNavigateToFetch: () -> Unit,
    onNavigateToTerminal: () -> Unit,
    onNavigateToAbout: () -> Unit
) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Image(
            painter = painterResource(id = android.R.drawable.ic_menu_preferences),
            contentDescription = "Settings",
            modifier = Modifier
                .align(Alignment.TopEnd)
                .padding(end = 23.dp, top = 43.dp)
                .size(16.dp, 18.dp)
        )

        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(71.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(23.dp))
                Text(
                    text = "Shell++",
                    modifier = Modifier.width(108.dp).height(42.dp),
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            Spacer(modifier = Modifier.height(9.dp))

            MenuCard("截图同步（蓝牙）", onClick = onNavigateToBluetooth)
            Spacer(modifier = Modifier.height(10.dp))
            MenuCard("截图同步（局域网）", onClick = onNavigateToFetch)
            Spacer(modifier = Modifier.height(10.dp))
            MenuCard("远程终端", onClick = onNavigateToTerminal)
            Spacer(modifier = Modifier.height(10.dp))
            MenuCard("关于", onClick = onNavigateToAbout)
        }
    }
}

// Card: 1013×168 → 338×56dp, border 45→15dp
@Composable
private fun MenuCard(title: String, onClick: () -> Unit) {
    val colors = MiuixTheme.colorScheme
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 11.dp)
            .height(56.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(colors.surface)
            .clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier.fillMaxSize().padding(start = 13.dp, end = 13.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = title,
                fontSize = 16.sp,
                fontWeight = FontWeight.Medium,
                fontFamily = FontFamily.Default,
                color = colors.onSurface
            )
            Image(painter = painterResource(id = R.drawable.arrow_right), contentDescription = null, modifier = Modifier.size(7.dp, 12.dp))
        }
    }
}
