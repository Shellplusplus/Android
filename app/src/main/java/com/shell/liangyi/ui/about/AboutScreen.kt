package com.shell.liangyi.ui.about

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.add
import androidx.compose.foundation.layout.displayCutout
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import android.os.SystemClock
import androidx.activity.compose.LocalOnBackPressedDispatcherOwner
import com.shell.liangyi.BuildConfig
import com.shell.liangyi.R
import com.shell.liangyi.ui.components.ShellProgressiveTopBar
import com.shell.liangyi.ui.components.rememberShellProgressiveTopBarBackdrop
import com.shell.liangyi.ui.components.shellTopBarBackdrop
import com.shell.liangyi.ui.theme.ShellTheme
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
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
fun AboutScreen(
    showBackButton: Boolean = true,
    bottomContentPadding: Dp = 0.dp,
    previewMode: Boolean = false,
    onSecretUnlock: () -> Unit = {},
) {
    val scrollBehavior = MiuixScrollBehavior()
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val backdrop = rememberShellProgressiveTopBarBackdrop()
    val title = stringResource(R.string.about)
    val versionLabel = BuildConfig.VERSION_NAME
    val effectiveShowBackButton = showBackButton && !previewMode
    val backDispatcher = LocalOnBackPressedDispatcherOwner.current?.onBackPressedDispatcher
    var secretTapCount by remember { mutableIntStateOf(0) }
    var lastSecretTapAt by remember { mutableLongStateOf(0L) }

    val onSecretAreaClick = {
        val now = SystemClock.uptimeMillis()
        secretTapCount = if (now - lastSecretTapAt > 1_000L) 1 else secretTapCount + 1
        lastSecretTapAt = now
        if (secretTapCount >= 5) {
            secretTapCount = 0
            lastSecretTapAt = 0L
            onSecretUnlock()
        }
    }

    Scaffold(
        modifier = Modifier.background(shellColors.pageBackground),
        topBar = {
            ShellProgressiveTopBar(backdrop = backdrop) { barColor ->
                if (effectiveShowBackButton) {
                    SmallTopAppBar(
                        title = title,
                        color = barColor,
                        navigationIcon = {
                            IconButton(onClick = { backDispatcher?.onBackPressed() }) {
                                val layoutDirection = LocalLayoutDirection.current
                                Icon(
                                    modifier = Modifier.graphicsLayer {
                                        if (layoutDirection == LayoutDirection.Rtl) scaleX = -1f
                                    },
                                    imageVector = MiuixIcons.Back,
                                    contentDescription = null,
                                    tint = colors.onBackground,
                                )
                            }
                        },
                        scrollBehavior = scrollBehavior,
                    )
                } else {
                    TopAppBar(
                        color = barColor,
                        title = title,
                        scrollBehavior = scrollBehavior,
                    )
                }
            }
        },
        popupHost = {},
        containerColor = shellColors.pageBackground,
        contentWindowInsets = WindowInsets.systemBars
            .add(WindowInsets.displayCutout)
            .only(WindowInsetsSides.Horizontal),
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .shellTopBarBackdrop(backdrop),
        ) {
            AboutContent(
                innerPadding = innerPadding,
                bottomContentPadding = bottomContentPadding,
                title = title,
                versionLabel = versionLabel,
                scrollBehavior = scrollBehavior,
                onSecretAreaClick = onSecretAreaClick,
            )
        }
    }
}

@Composable
private fun AboutContent(
    innerPadding: PaddingValues,
    bottomContentPadding: Dp,
    title: String,
    versionLabel: String,
    scrollBehavior: ScrollBehavior,
    onSecretAreaClick: () -> Unit,
) {
    val shellColors = ShellTheme.colors

    LazyColumn(
        modifier = Modifier
            .nestedScroll(scrollBehavior.nestedScrollConnection),
        contentPadding = PaddingValues(
            top = innerPadding.calculateTopPadding(),
            bottom = innerPadding.calculateBottomPadding() + 13.dp + bottomContentPadding,
        ),
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        item {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 12.dp, vertical = 4.dp)
                    .height(171.dp)
                    .clip(androidx.compose.foundation.shape.RoundedCornerShape(15.dp))
                    .clickable(onClick = onSecretAreaClick),
            ) {
                HyperOSBackground()
                Column(
                    modifier = Modifier
                        .align(Alignment.BottomStart)
                        .padding(start = 9.dp, bottom = 9.dp),
                ) {
                    Text(
                        text = versionLabel,
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
        }

        item {
            Column {
                SectionTitle(stringResource(R.string.developers), shellColors.mutedText)
                Spacer(modifier = Modifier.height(4.dp))
                DeveloperCard()
            }
        }

        item {
            Column {
                SectionTitle(stringResource(R.string.open_source_components), shellColors.mutedText)
                Spacer(modifier = Modifier.height(4.dp))
                OpenSourceCard()
            }
        }

        item {
            Text(
                text = stringResource(R.string.open_source_notice),
                fontSize = 11.sp,
                fontFamily = FontFamily.Default,
                color = shellColors.mutedText,
                modifier = Modifier.padding(horizontal = 27.dp, vertical = 2.dp),
            )
        }
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
        OpenSourceLibrary(
            name = "MIUIX",
            license = "Apache-2.0",
            summary = stringResource(R.string.library_miuix),
        ),
        OpenSourceLibrary(
            name = "hyperos-bg",
            license = "MIT",
            summary = stringResource(R.string.library_hyperos_bg),
        ),
        OpenSourceLibrary(
            name = "Backdrop (AndroidLiquidGlass)",
            license = "Apache-2.0",
            summary = "Compose Multiplatform 液态玻璃效果组件库",
        ),
        OpenSourceLibrary(
            name = "Kotlin Coroutines",
            license = "Apache-2.0",
            summary = "协程与异步任务支持",
        ),
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
        Column(modifier = Modifier.padding(horizontal = 16.dp, vertical = 10.dp)) {
            libraries.forEachIndexed { index, library ->
                OpenSourceItem(
                    library = library,
                    titleColor = colors.onSurface,
                    summaryColor = colors.onSurfaceVariantSummary,
                    badgeContainerColor = colors.secondary.copy(alpha = 0.12f),
                    badgeTextColor = colors.secondary,
                )
                if (index < libraries.lastIndex) {
                    Spacer(modifier = Modifier.height(8.dp))
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(0.5.dp)
                            .background(shellColors.mutedText.copy(alpha = 0.16f)),
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                }
            }
        }
    }
}

private data class OpenSourceLibrary(
    val name: String,
    val license: String,
    val summary: String,
)

@Composable
private fun OpenSourceItem(
    library: OpenSourceLibrary,
    titleColor: Color,
    summaryColor: Color,
    badgeContainerColor: Color,
    badgeTextColor: Color,
) {
    Column(verticalArrangement = Arrangement.spacedBy(5.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = library.name,
                modifier = Modifier.weight(1f),
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                fontFamily = FontFamily.Default,
                color = titleColor,
            )
            Box(
                modifier = Modifier
                    .clip(androidx.compose.foundation.shape.RoundedCornerShape(999.dp))
                    .background(badgeContainerColor)
                    .padding(horizontal = 9.dp, vertical = 4.dp),
            ) {
                Text(
                    text = library.license,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.SemiBold,
                    fontFamily = FontFamily.Default,
                    color = badgeTextColor,
                )
            }
        }
        Text(
            text = library.summary,
            fontSize = 12.sp,
            fontWeight = FontWeight.Normal,
            fontFamily = FontFamily.Default,
            color = summaryColor,
            lineHeight = 17.sp,
        )
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
                            .clip(androidx.compose.foundation.shape.CircleShape),
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
