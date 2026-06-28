package com.shell.liangyi.ui.about

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import com.shell.liangyi.R
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme

// Scale: Figma 1080px → 360dp (÷3)

@Composable
fun AboutScreen(navController: NavHostController
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    ShellBackScaffold(
        title = "\u5173\u4e8e",
        onBack = { navController.popBackStack() }
    ) { innerPadding ->
        Column(modifier = Modifier.padding(innerPadding).verticalScroll(rememberScrollState())) {
            Spacer(modifier = Modifier.height(12.dp))

            // Cover with HyperOS animated background
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp)
                    .height(171.dp)
                    .clip(RoundedCornerShape(15.dp))
            ) {
                HyperOSBackground()
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
                    color = shellColors.mutedText
                )
            }

            Spacer(modifier = Modifier.height(6.dp))

            DeveloperCard()

            Spacer(modifier = Modifier.height(14.dp))
            Row(modifier = Modifier.fillMaxWidth()) {
                Spacer(modifier = Modifier.width(27.dp))
                Text(
                    text = "开源组件",
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = FontFamily.Default,
                    color = shellColors.mutedText
                )
            }

            Spacer(modifier = Modifier.height(6.dp))

            OpenSourceCard()

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "本应用使用了上述开源项目，感谢所有贡献者。" +
                       "hyperos-bg 项目基于 MIT 许可证的 miuix 重新实现，" +
                       "相关版权归原作者所有。",
                fontSize = 11.sp,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText,
                modifier = Modifier.padding(horizontal = 27.dp)
            )

            Spacer(modifier = Modifier.height(13.dp))
        }
    }
}

@Composable
private fun OpenSourceCard() {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val libraries = listOf(
        "MIUIX (MIT) — HyperOS 设计系统",
        "hyperos-bg (MIT) — 动态背景效果",
        "Kotlin Coroutines (Apache-2.0)"
    )

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp
    ) {
        Column(modifier = Modifier.padding(start = 16.dp, top = 15.dp, end = 16.dp, bottom = 15.dp)) {
            libraries.forEachIndexed { i, text ->
                if (i > 0) Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = text,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface
                )
                if (i < libraries.lastIndex) {
                    Spacer(modifier = Modifier.height(8.dp))
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(0.5.dp)
                            .background(shellColors.mutedText.copy(alpha = 0.2f))
                    )
                }
            }
        }
    }
}

@Composable
private fun DeveloperCard() {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    val devs = listOf(
        Triple("AzumaChiaki", "Developer", R.drawable.avatar_azumachiaki),
        Triple("IKUN-CXKPRO", "Developer", R.drawable.avatar_ikun),
        Triple("梁逸", "Developer", R.drawable.avatar_liangyi)
    )

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 15.dp
    ) {
        Column(modifier = Modifier.padding(start = 16.dp, top = 15.dp, bottom = 15.dp)) {
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
                            color = colors.onSurfaceContainerVariant
                        )
                    }
                }
            }
        }
    }
}
