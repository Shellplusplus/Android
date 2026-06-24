package com.shell.liangyi

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.network.NetworkTransferScreen
import com.shell.liangyi.ui.screenshot.ScreenshotScreen
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import com.shell.liangyi.ui.settings.DebugLogScreen
import com.shell.liangyi.ui.settings.SettingsScreen
import com.shell.liangyi.ui.theme.LocalIOSColors
import com.shell.liangyi.ui.theme.ShellPlusTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {

    private lateinit var wearMessageCenter: WearMessageCenter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        wearMessageCenter = WearMessageCenter.getInstance(this)
        wearMessageCenter.initialize()

        setContent {
            ShellPlusTheme {
                AppRoot()
            }
        }
    }

    override fun onResume() {
        super.onResume()
        wearMessageCenter.ensureConnection()
    }

    override fun onDestroy() {
        super.onDestroy()
        wearMessageCenter.destroy()
    }
}

private enum class SubRoute { ABOUT, DEBUG_LOG }

@OptIn(androidx.compose.foundation.ExperimentalFoundationApi::class)
@Composable
private fun AppRoot() {
    val vm: ScreenshotViewModel = viewModel()
    val c = LocalIOSColors.current

    // 0=截图同步, 1=网络传输, 2=设置
    val tabs = listOf("截图同步", "网络传输", "设置")
    val pagerState = rememberPagerState(pageCount = { tabs.size })
    val coroutineScope = rememberCoroutineScope()

    // 设置页的子路由
    var subRoute by remember { mutableStateOf<SubRoute?>(null) }

    BackHandler(enabled = subRoute != null) { subRoute = null }

    Column(modifier = Modifier.fillMaxSize()) {
        // 页面内容
        Box(modifier = Modifier.weight(1f)) {
            if (subRoute == null) {
                HorizontalPager(
                    state = pagerState,
                    modifier = Modifier.fillMaxSize(),
                    userScrollEnabled = true
                ) { page ->
                    when (page) {
                        0 -> ScreenshotScreen(
                            viewModel = vm
                        )
                        1 -> NetworkTransferScreen(
                            viewModel = vm,
                            onBack = { /* 不需要，底部 tab 已满足 */ }
                        )
                        2 -> SettingsScreen(
                            viewModel = vm,
                            onBack = { /* 不需要 */ },
                            onOpenAbout = { subRoute = SubRoute.ABOUT },
                            onOpenDebugLog = { subRoute = SubRoute.DEBUG_LOG }
                        )
                    }
                }
            } else {
                when (subRoute) {
                    SubRoute.ABOUT -> AboutScreen(onBack = { subRoute = null })
                    SubRoute.DEBUG_LOG -> DebugLogScreen(
                        viewModel = vm,
                        onBack = { subRoute = null }
                    )
                    null -> {}
                }
            }
        }

        // 底部 Tab 栏
        if (subRoute == null) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(c.groupedBackground)
                    .padding(horizontal = 16.dp, vertical = 8.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceEvenly,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    tabs.forEachIndexed { index, title ->
                        val selected = pagerState.currentPage == index
                        Column(
                            modifier = Modifier
                                .clip(RoundedCornerShape(12.dp))
                                .clickable {
                                    coroutineScope.launch {
                                        pagerState.animateScrollToPage(index)
                                    }
                                }
                                .padding(horizontal = 16.dp, vertical = 8.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Text(
                                text = title,
                                fontSize = 14.sp,
                                fontWeight = if (selected) FontWeight.Bold else FontWeight.Normal,
                                color = if (selected) c.accent else c.secondaryLabel,
                                textAlign = TextAlign.Center
                            )
                            if (selected) {
                                Box(
                                    modifier = Modifier
                                        .width(24.dp)
                                        .height(3.dp)
                                        .offset(y = 4.dp)
                                        .clip(RoundedCornerShape(2.dp))
                                        .background(c.accent)
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}
