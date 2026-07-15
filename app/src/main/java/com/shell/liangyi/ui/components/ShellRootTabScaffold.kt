package com.shell.liangyi.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.add
import androidx.compose.foundation.layout.displayCutout
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.systemBars
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Scaffold
import top.yukonga.miuix.kmp.basic.TopAppBar
import top.yukonga.miuix.kmp.utils.MiuixPopupUtils

@Composable
fun ShellRootTabScaffold(
    title: String,
    modifier: Modifier = Modifier,
    actions: @Composable RowScope.() -> Unit = {},
    content: @Composable (PaddingValues) -> Unit,
) {
    val shellColors = ShellTheme.colors

    Scaffold(
        modifier = modifier.background(shellColors.pageBackground),
        topBar = {
            TopAppBar(
                color = shellColors.pageBackground,
                title = title,
                actions = actions,
            )
        },
        popupHost = {
            MiuixPopupUtils.Companion.MiuixPopupHost()
        },
        containerColor = shellColors.pageBackground,
        contentWindowInsets = WindowInsets.systemBars
            .add(WindowInsets.displayCutout)
            .only(WindowInsetsSides.Horizontal),
        content = content,
    )
}
