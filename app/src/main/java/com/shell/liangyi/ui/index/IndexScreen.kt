package com.shell.liangyi.ui.index

import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import com.shell.liangyi.R
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.*
import top.yukonga.miuix.kmp.theme.MiuixTheme
import com.shell.liangyi.ui.Routes

@Composable
fun IndexScreen(navController: NavHostController) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Scaffold(
        containerColor = shellColors.pageBackground
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 13.dp)
        ) {
            // 标题 + 设置按钮
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(start = 5.dp, top = 82.dp, end = 5.dp, bottom = 6.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "Shell++",
                    style = MiuixTheme.textStyles.title1,
                    color = colors.onBackground
                )
                Image(
                    painter = painterResource(id = R.drawable.set),
                    contentDescription = "设置",
                    modifier = Modifier
                        .size(16.dp, 18.dp)
                        .clickable { navController.navigate(Routes.SETTINGS) },
                    colorFilter = ColorFilter.tint(colors.onBackground),
                    contentScale = ContentScale.Fit
                )
            }

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
    }
}

@Composable
private fun MenuItem(title: String, onClick: () -> Unit) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface
        ),
        cornerRadius = 16.dp,
        onClick = onClick
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
