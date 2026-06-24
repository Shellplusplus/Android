package com.shell.liangyi.ui.network

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.ui.components.IOSScaffold
import com.shell.liangyi.ui.screenshot.ScreenshotViewModel
import com.shell.liangyi.ui.theme.LocalIOSColors

@Composable
fun NetworkTransferScreen(
    viewModel: ScreenshotViewModel,
    onBack: () -> Unit
) {
    val isRunning by viewModel.httpServerRunning.collectAsState(initial = false)
    val ip by viewModel.httpServerIp.collectAsState(initial = "")
    val port by viewModel.httpServerPort.collectAsState(initial = 0)
    val c = LocalIOSColors.current

    var started by remember { mutableStateOf(false) }

    // 打开页面时自动启动 HTTP 服务
    LaunchedEffect(Unit) {
        if (!started) {
            started = true
            viewModel.startHttpServer()
        }
    }

    IOSScaffold(
        title = "网络传输",
        onBack = onBack
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Spacer(modifier = Modifier.height(32.dp))

            // 状态指示器
            Row(
                verticalAlignment = Alignment.CenterVertically,
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(14.dp))
                    .background(c.groupedBackground)
                    .padding(16.dp)
            ) {
                Box(
                    modifier = Modifier
                        .size(14.dp)
                        .clip(CircleShape)
                        .background(
                            if (isRunning) Color(0xFF34C759)
                            else Color(0xFFFF3B30)
                        )
                )
                Spacer(modifier = Modifier.width(10.dp))
                Text(
                    text = if (isRunning) "服务器运行中" else "服务器未启动",
                    fontSize = 17.sp,
                    fontWeight = FontWeight.Medium,
                    color = c.label
                )
            }

            Spacer(modifier = Modifier.height(24.dp))

            // IP 地址显示区
            Text(
                text = "手机 IP 地址",
                fontSize = 14.sp,
                color = c.secondaryLabel,
                textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth()
            )

            Spacer(modifier = Modifier.height(8.dp))

            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(16.dp))
                    .background(c.groupedBackground)
                    .padding(vertical = 28.dp, horizontal = 20.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = if (isRunning && ip.isNotEmpty())
                        "$ip:$port"
                    else if (isRunning)
                        "正在获取 IP…"
                    else
                        "——",
                    fontSize = 36.sp,
                    fontWeight = FontWeight.Bold,
                    color = c.accent,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.fillMaxWidth()
                )
            }

            Spacer(modifier = Modifier.height(20.dp))

            // 提示信息
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(14.dp))
                    .background(c.groupedBackground)
                    .padding(16.dp)
            ) {
                Column {
                    Text(
                        text = "使用方法",
                        fontSize = 17.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = c.label
                    )
                    Spacer(modifier = Modifier.height(8.dp))
                    Text(
                        text = "1. 确保手机和手表连接同一 WiFi\n" +
                               "2. 在手表上打开「网络传输」页面\n" +
                               "3. 输入上方显示的 IP 地址和端口\n" +
                               "4. 选择截图后发送",
                        fontSize = 15.sp,
                        color = c.secondaryLabel,
                        lineHeight = 22.sp
                    )
                }
            }

            Spacer(modifier = Modifier.height(24.dp))

            // 重新获取 IP 按钮
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(14.dp))
                    .background(if (isRunning) c.groupedBackground else c.accent)
                    .clickable {
                        if (isRunning) {
                            viewModel.stopHttpServer()
                        } else {
                            viewModel.startHttpServer()
                        }
                    }
                    .padding(vertical = 14.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = if (isRunning) "停止服务器" else "启动服务器",
                    fontSize = 17.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = if (isRunning) Color(0xFFFF3B30) else Color.White
                )
            }
        }
    }
}
