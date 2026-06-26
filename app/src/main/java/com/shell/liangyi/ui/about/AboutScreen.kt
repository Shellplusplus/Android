package com.shell.liangyi.ui.about

import androidx.compose.foundation.Image
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
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import com.shell.liangyi.R

// Scale: Figma 1080px → 360dp (÷3)

@Composable
fun AboutScreen(
    onBack: () -> Unit
) {
    val colors = MiuixTheme.colorScheme

    Box(modifier = Modifier.fillMaxSize().background(colors.background)) {
        Column(modifier = Modifier.fillMaxSize()) {
            Spacer(modifier = Modifier.height(43.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(29.dp))
                Image(
                    painter = painterResource(id = R.drawable.back_arrow),
                    contentDescription = "Back",
                    modifier = Modifier.size(18.dp, 13.dp).clickable(onClick = onBack),
                    contentScale = ContentScale.Fit
                )
            }

            Spacer(modifier = Modifier.height(21.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(26.dp))
                Text(
                    text = "关于",
                    modifier = Modifier.width(60.dp).height(42.dp),
                    fontSize = 30.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            // Cover with real background image
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp)
                    .height(171.dp)
                    .clip(RoundedCornerShape(15.dp))
            ) {
                Image(
                    painter = painterResource(id = R.drawable.cover_bg),
                    contentDescription = "Cover",
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
                Column(
                    modifier = Modifier.align(Alignment.BottomStart).padding(start = 9.dp, bottom = 9.dp)
                ) {
                    Text(
                        text = "Beta 1",
                        fontSize = 17.sp,
                        fontWeight = FontWeight.Medium,
                        fontFamily = FontFamily.Default,
                        color = Color(0x99FFFFFF)
                    )
                    Spacer(modifier = Modifier.height(3.dp))
                    Text(
                        text = "Shell++",
                        fontSize = 40.sp,
                        fontWeight = FontWeight.Bold,
                        fontFamily = FontFamily.Default,
                        color = Color.White
                    )
                }
            }

            Spacer(modifier = Modifier.height(14.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(27.dp))
                Text(
                    text = "开发者",
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = FontFamily.Default,
                    color = Color(0x66000000)
                )
            }

            Spacer(modifier = Modifier.height(6.dp))

            DeveloperCard()
        }
    }
}

@Composable
private fun DeveloperCard() {
    val colors = MiuixTheme.colorScheme
    val devs = listOf(
        Triple("AzumaChiaki", "Devloper", R.drawable.avatar_azumachiaki),
        Triple("IKUN-CXKPRO", "Devloper", R.drawable.avatar_ikun),
        Triple("梁逸", "Devloper", R.drawable.avatar_liangyi)
    )

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp)
            .height(200.dp)
            .clip(RoundedCornerShape(15.dp))
            .background(colors.surface)
    ) {
        Column(modifier = Modifier.padding(start = 16.dp, top = 15.dp)) {
            devs.forEachIndexed { i, (name, role, avatar) ->
                if (i > 0) Spacer(modifier = Modifier.height(9.dp))
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Image(
                        painter = painterResource(id = avatar),
                        contentDescription = name,
                        modifier = Modifier
                            .size(37.dp)
                            .clip(CircleShape),
                        contentScale = ContentScale.Crop
                    )
                    Spacer(modifier = Modifier.width(14.dp))
                    Column {
                        Text(
                            text = name,
                            fontSize = 15.sp,
                            fontWeight = FontWeight.Medium,
                            fontFamily = FontFamily.Default,
                            color = colors.onSurface
                        )
                        Text(
                            text = role,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Normal,
                            fontFamily = FontFamily.Default,
                            color = Color(0xFF9E9E9E)
                        )
                    }
                }
            }
        }
    }
}
