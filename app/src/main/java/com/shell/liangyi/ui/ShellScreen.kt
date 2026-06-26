package com.shell.liangyi.ui

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

// Design Tokens (from Figma export)
// Token: TitleTopMargin = 214.dp
// Token: TitleLeftMargin = 71.dp
// Token: TitleWidth = 312.dp
// Token: TitleHeight = 119.dp
// Token: TitleFontSize = 90.sp
// Token: TitleFontWeight = 400 (Normal)
// Token: TitleFontFamily = MiSans (TODO)

@Composable
fun ShellScreen() {
    val colors = MiuixTheme.colorScheme

    Column(
        modifier = Modifier.fillMaxSize()
    ) {
        // Token: TitleTopMargin = 214.dp
        Spacer(modifier = Modifier.height(214.dp))

        // Token: TitleLeftMargin = 71.dp
        Row(modifier = Modifier.fillMaxWidth()) {
            Spacer(modifier = Modifier.width(71.dp))

            Text(
                text = "shell++",
                modifier = Modifier
                    .width(312.dp)   // Token: TitleWidth
                    .height(119.dp),  // Token: TitleHeight
                color = colors.onSurface,          // #ff000000 → onSurface
                fontSize = 90.sp,                  // Token: TitleFontSize
                fontWeight = FontWeight.Normal,    // 400
                fontFamily = FontFamily.Default,   // TODO: 加载 MiSans 自定义字体
                textAlign = TextAlign.Start        // gravity = "left|top"
            )
        }
    }
}
