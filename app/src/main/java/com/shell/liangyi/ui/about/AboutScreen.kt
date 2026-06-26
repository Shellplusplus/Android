package com.shell.liangyi.ui.about

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

// Design Tokens (Figma: MIUIX/About, 1080×2340)

@Composable
fun AboutScreen(
    onBack: () -> Unit
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

            // Title "关于" — (79, 230)
            Spacer(modifier = Modifier.height(64.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(79.dp))
                Text(
                    text = "关于",
                    modifier = Modifier.width(180.dp).height(126.dp),
                    fontSize = 90.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            // Cover section — y=391
            Spacer(modifier = Modifier.height(35.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 36.dp)
                    .height(512.dp)
                    .clip(RoundedCornerShape(45.dp))
                    .background(Color(0xFF3482FF)) // placeholder for cover image
            ) {
                Column(
                    modifier = Modifier.align(Alignment.BottomStart).padding(start = 26.dp, bottom = 26.dp)
                ) {
                    Text(
                        text = "Beta 1",
                        fontSize = 50.sp,
                        fontWeight = FontWeight.Medium,
                        fontFamily = FontFamily.Default,
                        color = Color(0x99FFFFFF) // rgba(255,255,255,0.6)
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "Shell++",
                        fontSize = 120.sp,
                        fontWeight = FontWeight.Bold, // 700
                        fontFamily = FontFamily.Default,
                        color = Color.White
                    )
                }
            }

            // "开发者" label
            Spacer(modifier = Modifier.height(42.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(80.dp))
                Text(
                    text = "开发者",
                    fontSize = 39.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = FontFamily.Default,
                    color = Color(0x66000000) // rgba(0,0,0,0.4)
                )
            }

            Spacer(modifier = Modifier.height(18.dp))

            // Developer card — 1013×601
            DeveloperCard()
        }
    }
}

@Composable
private fun DeveloperCard() {
    val colors = MiuixTheme.colorScheme
    val devs = listOf(
        Triple("AzumaChiaki", "Devloper", Color(0xFF9E9E9E)), // placeholder
        Triple("IKUN-CXKPRO", "Devloper", Color(0xFF9E9E9E)),
        Triple("梁逸", "Devloper", Color(0xFF9E9E9E))
    )

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 36.dp)
            .height(601.dp)
            .clip(RoundedCornerShape(45.dp))
            .background(colors.surface)
    ) {
        Column(modifier = Modifier.padding(start = 47.dp, top = 46.dp)) {
            devs.forEachIndexed { index, (name, role, roleColor) ->
                if (index > 0) {
                    Spacer(modifier = Modifier.height(26.dp))
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    // Avatar placeholder
                    Box(
                        modifier = Modifier
                            .size(110.dp)
                            .clip(CircleShape)
                            .background(Color(0xFFE0E0E0))
                    )
                    Spacer(modifier = Modifier.width(41.dp))
                    Column {
                        Text(
                            text = name,
                            fontSize = 44.sp,
                            fontWeight = FontWeight.Medium,
                            fontFamily = FontFamily.Default,
                            color = colors.onSurface
                        )
                        Text(
                            text = role,
                            fontSize = 40.sp,
                            fontWeight = FontWeight.Normal,
                            fontFamily = FontFamily.Default,
                            color = roleColor
                        )
                    }
                }
            }
        }
    }
}
