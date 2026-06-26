package com.shell.liangyi.ui.index

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.*
import top.yukonga.miuix.kmp.theme.MiuixTheme
import com.shell.liangyi.ui.Routes

@Composable
fun IndexScreen(navController: NavHostController) {
    val colors = MiuixTheme.colorScheme

    Scaffold(
        containerColor = colors.surface
    ) {
        Box(
            modifier = Modifier.fillMaxSize()
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(horizontal = 16.dp)
            ) {
                // 标题
                Text(
                    text = "Shell++",
                    style = MiuixTheme.textStyles.title1,
                    color = colors.onBackground,
                    modifier = Modifier.padding(top = 82.dp, bottom = 24.dp)
                )

                // 列表项
                MenuItem(
                    title = "截图同步（蓝牙）",
                    onClick = { navController.navigate(Routes.BLUETOOTH) }
                )
                MenuItem(
                    title = "截图同步（局域网）",
                    onClick = { navController.navigate(Routes.FETCH) }
                )
                MenuItem(
                    title = "远程终端",
                    onClick = { navController.navigate(Routes.TERMINAL) }
                )
                MenuItem(
                    title = "关于",
                    onClick = { navController.navigate(Routes.ABOUT) }
                )
            }

            // 设置图标 — 独立于标题，更高
            IconButton(
                onClick = { /* TODO: 设置 */ },
                modifier = Modifier
                    .align(Alignment.TopEnd)
                    .padding(top = 48.dp, end = 16.dp)
                    .size(24.dp)
            ) {
                Icon(
                    painter = painterResource(com.shell.liangyi.R.drawable.set),
                    contentDescription = "设置",
                    modifier = Modifier.fillMaxSize()
                )
            }
        }
    }
}

@Composable
private fun MenuItem(title: String, onClick: () -> Unit) {
    val colors = MiuixTheme.colorScheme

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
            .clickable(onClick = onClick),
        colors = CardColors(
            color = colors.background,
            contentColor = colors.onSurface
        ),
        cornerRadius = 16.dp
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 20.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(
                text = title,
                style = MiuixTheme.textStyles.body1,
                color = colors.onSurface
            )
            Icon(
                imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                contentDescription = null,
                modifier = Modifier.size(20.dp),
                tint = colors.outline
            )
        }
    }
}
