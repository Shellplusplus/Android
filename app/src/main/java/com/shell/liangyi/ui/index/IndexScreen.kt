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
import androidx.navigation.NavHostController
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.ui.Routes
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Scale: Figma 1080px → 360dp (÷3)

@Composable
fun IndexScreen(navController: NavHostController
) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Image(
            painter = painterResource(id = R.drawable.setting),
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

            MenuCard("截图同步（蓝牙）", onClick = { navController.navigate("bluetooth") })
            Spacer(modifier = Modifier.height(10.dp))
            MenuCard("截图同步（局域网）", onClick = { navController.navigate("fetch") })
            Spacer(modifier = Modifier.height(10.dp))
            MenuCard("远程终端", onClick = { navController.navigate("terminal") })
            Spacer(modifier = Modifier.height(10.dp))
            MenuCard("关于", onClick = { navController.navigate("about") })
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
            .height(72.dp)
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
