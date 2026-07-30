package com.shell.liangyi.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.add
import androidx.compose.foundation.layout.displayCutout
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Icon
import top.yukonga.miuix.kmp.basic.IconButton
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Scaffold
import top.yukonga.miuix.kmp.basic.ScrollBehavior
import top.yukonga.miuix.kmp.basic.SmallTopAppBar
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.basic.TopAppBar
import top.yukonga.miuix.kmp.icon.MiuixIcons
import top.yukonga.miuix.kmp.icon.extended.Back
import top.yukonga.miuix.kmp.theme.MiuixTheme

@Composable
fun ShellBackScaffold(
    title: String,
    onBack: () -> Unit,
    modifier: Modifier = Modifier,
    showBackButton: Boolean = true,
    collapseTitleOnScroll: Boolean = false,
    scrollBehavior: ScrollBehavior = MiuixScrollBehavior(),
    actions: @Composable RowScope.() -> Unit = {},
    content: @Composable (PaddingValues) -> Unit
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val backdrop = rememberShellProgressiveTopBarBackdrop()

    Scaffold(
        modifier = modifier.background(shellColors.pageBackground),
        topBar = {
            ShellProgressiveTopBar(
                backdrop = backdrop,
                bottomFadeHeight = if (collapseTitleOnScroll) 24.dp else 0.dp,
            ) { barColor ->
                if (collapseTitleOnScroll) {
                    TopAppBar(
                        title = title,
                        color = barColor,
                        navigationIcon = {
                            if (showBackButton) {
                                IconButton(onClick = onBack) {
                                    val layoutDirection = LocalLayoutDirection.current
                                    Icon(
                                        modifier = Modifier.graphicsLayer {
                                            if (layoutDirection == LayoutDirection.Rtl) scaleX = -1f
                                        },
                                        imageVector = MiuixIcons.Back,
                                        contentDescription = null,
                                        tint = colors.onBackground
                                    )
                                }
                            } else {
                                Spacer(modifier = Modifier.width(40.dp))
                            }
                        },
                        actions = actions,
                        scrollBehavior = scrollBehavior,
                    )
                } else {
                    SmallTopAppBar(
                        title = "",
                        color = barColor,
                        navigationIcon = {
                            if (showBackButton) {
                                IconButton(onClick = onBack) {
                                    val layoutDirection = LocalLayoutDirection.current
                                    Icon(
                                        modifier = Modifier.graphicsLayer {
                                            if (layoutDirection == LayoutDirection.Rtl) scaleX = -1f
                                        },
                                        imageVector = MiuixIcons.Back,
                                        contentDescription = null,
                                        tint = colors.onBackground
                                    )
                                }
                            } else {
                                Spacer(modifier = Modifier.width(40.dp))
                            }
                        },
                        actions = actions
                    )
                }
            }
        },
        popupHost = {},
        contentWindowInsets = WindowInsets.systemBars.add(WindowInsets.displayCutout).only(WindowInsetsSides.Horizontal)
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .shellTopBarBackdrop(backdrop),
        ) {
            if (collapseTitleOnScroll) {
                content(innerPadding)
            } else {
                Column(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(innerPadding)
                ) {
                    Text(
                        text = title,
                        modifier = Modifier.padding(start = 26.dp, top = 12.dp),
                        fontSize = 30.sp,
                        fontWeight = FontWeight.Normal,
                        fontFamily = FontFamily.Default,
                        color = colors.onSurface
                    )
                    Box(modifier = Modifier.weight(1f)) {
                        content(PaddingValues(0.dp))
                    }
                }
            }
        }
    }
}
