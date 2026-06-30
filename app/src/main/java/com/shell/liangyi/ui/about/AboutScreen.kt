package com.shell.liangyi.ui.about

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.components.ShellRootTabScaffold
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun AboutScreen(
    showBackButton: Boolean = true,
    bottomContentPadding: Dp = 0.dp,
) {
    if (showBackButton) {
        ShellBackScaffold(
            title = stringResource(R.string.about),
            onBack = {},
        ) { innerPadding ->
            AboutContent(
                innerPadding = innerPadding,
                bottomContentPadding = bottomContentPadding,
            )
        }
    } else {
        ShellRootTabScaffold(title = stringResource(R.string.about)) { innerPadding ->
            AboutContent(
                innerPadding = innerPadding,
                bottomContentPadding = bottomContentPadding,
            )
        }
    }
}

@Composable
private fun AboutContent(
    innerPadding: PaddingValues,
    bottomContentPadding: Dp,
) {
    val shellColors = ShellTheme.colors

    Column(
        modifier = Modifier
            .padding(innerPadding)
            .verticalScroll(rememberScrollState()),
    ) {
        Spacer(modifier = Modifier.height(12.dp))

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 12.dp)
                .height(171.dp)
                .clip(RoundedCornerShape(15.dp)),
        ) {
            HyperOSBackground()
            Column(
                modifier = Modifier
                    .align(Alignment.BottomStart)
                    .padding(start = 9.dp, bottom = 9.dp),
            ) {
                Text(
                    text = "Beta 1",
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Medium,
                    fontFamily = FontFamily.Default,
                    color = Color(0x99FFFFFF),
                )
                Spacer(modifier = Modifier.height(3.dp))
                Text(
                    text = "Shell++",
                    fontSize = 40.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Default,
                    color = Color.White,
                )
            }
        }

        Spacer(modifier = Modifier.height(14.dp))
        SectionTitle(stringResource(R.string.developers), shellColors.mutedText)
        Spacer(modifier = Modifier.height(6.dp))
        DeveloperCard()

        Spacer(modifier = Modifier.height(14.dp))
        SectionTitle(stringResource(R.string.open_source_components), shellColors.mutedText)
        Spacer(modifier = Modifier.height(6.dp))
        OpenSourceCard()

        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = stringResource(R.string.open_source_notice),
            fontSize = 11.sp,
            fontFamily = FontFamily.Default,
            color = shellColors.mutedText,
            modifier = Modifier.padding(horizontal = 27.dp),
        )

        Spacer(modifier = Modifier.height(13.dp + bottomContentPadding))
    }
}

@Composable
private fun SectionTitle(text: String, color: Color) {
    Row(modifier = Modifier.fillMaxWidth()) {
        Spacer(modifier = Modifier.width(27.dp))
        Text(
            text = text,
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
            fontFamily = FontFamily.Default,
            color = color,
        )
    }
}

@Composable
private fun OpenSourceCard() {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val libraries = listOf(
        stringResource(R.string.library_miuix),
        stringResource(R.string.library_hyperos_bg),
        "Kotlin Coroutines (Apache-2.0)",
    )

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 15.dp,
    ) {
        Column(modifier = Modifier.padding(start = 16.dp, top = 15.dp, end = 16.dp, bottom = 15.dp)) {
            libraries.forEachIndexed { index, text ->
                if (index > 0) {
                    Spacer(modifier = Modifier.height(8.dp))
                }
                Text(
                    text = text,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Normal,
                    fontFamily = FontFamily.Default,
                    color = colors.onSurface,
                )
                if (index < libraries.lastIndex) {
                    Spacer(modifier = Modifier.height(8.dp))
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(0.5.dp)
                            .background(shellColors.mutedText.copy(alpha = 0.2f)),
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
        Triple("LiangYi", "Developer", R.drawable.avatar_liangyi),
        Triple("DefateStar", "Developer", R.drawable.avatar_defatestar),
    )

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 12.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 15.dp,
    ) {
        Column(modifier = Modifier.padding(start = 16.dp, top = 15.dp, bottom = 15.dp)) {
            devs.forEachIndexed { index, (name, role, avatar) ->
                if (index > 0) {
                    Spacer(modifier = Modifier.height(9.dp))
                }
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Image(
                        painter = painterResource(id = avatar),
                        contentDescription = name,
                        modifier = Modifier
                            .size(37.dp)
                            .clip(CircleShape),
                        contentScale = ContentScale.Crop,
                    )
                    Spacer(modifier = Modifier.width(14.dp))
                    Column {
                        Text(
                            text = name,
                            fontSize = 15.sp,
                            fontWeight = FontWeight.Medium,
                            fontFamily = FontFamily.Default,
                            color = colors.onSurface,
                        )
                        Text(
                            text = role,
                            fontSize = 13.sp,
                            fontWeight = FontWeight.Normal,
                            fontFamily = FontFamily.Default,
                            color = colors.onSurfaceContainerVariant,
                        )
                    }
                }
            }
        }
    }
}
