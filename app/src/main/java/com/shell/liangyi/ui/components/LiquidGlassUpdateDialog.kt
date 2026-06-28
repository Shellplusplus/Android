package com.shell.liangyi.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicText
import androidx.compose.foundation.verticalScroll
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.shell.liangyi.core.update.UpdatePrompt

@Composable
fun LiquidGlassUpdateDialog(
    prompt: UpdatePrompt,
    onDismiss: () -> Unit,
    onConfirm: () -> Unit,
) {
    val isLightTheme = !isSystemInDarkTheme()
    val contentColor = if (isLightTheme) Color.Black else Color.White
    val accentColor = if (isLightTheme) Color(0xFF0088FF) else Color(0xFF0091FF)
    val containerColor = if (isLightTheme) Color.White else Color(0xFF1B1B1F)
    val dimColor = if (isLightTheme) Color(0xFF29293A).copy(0.23f) else Color(0xFF121212).copy(0.56f)

    Dialog(
        onDismissRequest = {
            if (!prompt.mandatory) onDismiss()
        },
        properties = DialogProperties(
            dismissOnBackPress = !prompt.mandatory,
            dismissOnClickOutside = !prompt.mandatory,
        )
    ) {
        Box(
            Modifier
                .fillMaxWidth()
                .background(dimColor)
        ) {
            Column(
                Modifier
                    .padding(24.dp)
                    .clip(RoundedCornerShape(32.dp))
                    .background(containerColor)
                    .fillMaxWidth()
            ) {
                BasicText(
                    text = "发现新版本",
                    modifier = Modifier.padding(start = 24.dp, top = 22.dp, end = 24.dp, bottom = 8.dp),
                    style = TextStyle(color = contentColor, fontSize = 24.sp, fontWeight = FontWeight.Medium)
                )
                BasicText(
                    text = "当前 ${prompt.currentVersionName} (${prompt.currentVersionCode})\n最新 ${prompt.info.latestVersion} (${prompt.info.latestVersionCode})\n发布日期 ${prompt.info.releaseDate}",
                    modifier = Modifier.padding(horizontal = 24.dp, vertical = 8.dp),
                    style = TextStyle(color = contentColor.copy(alpha = 0.72f), fontSize = 14.sp)
                )
                BasicText(
                    text = if (prompt.info.changelog.isBlank()) "暂无更新说明" else prompt.info.changelog,
                    modifier = Modifier
                        .then(if (isLightTheme) Modifier else Modifier.graphicsLayer(blendMode = BlendMode.Plus))
                        .padding(horizontal = 24.dp, vertical = 8.dp)
                        .heightIn(max = 200.dp)
                        .verticalScroll(rememberScrollState()),
                    style = TextStyle(color = contentColor.copy(alpha = 0.68f), fontSize = 15.sp)
                )
                Row(
                    Modifier
                        .padding(start = 24.dp, top = 12.dp, end = 24.dp, bottom = 24.dp)
                        .fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(16.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    if (!prompt.mandatory) {
                        Row(
                            Modifier
                                .clip(RoundedCornerShape(999.dp))
                                .background(if (isLightTheme) Color(0xFFF1F1F4) else Color(0xFF2A2A30))
                                .clickable(onClick = onDismiss)
                                .height(48.dp)
                                .weight(1f)
                                .padding(horizontal = 16.dp),
                            horizontalArrangement = Arrangement.Center,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            BasicText("稍后", style = TextStyle(contentColor, 16.sp))
                        }
                    }
                    Row(
                        Modifier
                            .clip(RoundedCornerShape(999.dp))
                            .background(accentColor)
                            .clickable(onClick = onConfirm)
                            .height(48.dp)
                            .weight(1f)
                            .padding(horizontal = 16.dp),
                        horizontalArrangement = Arrangement.Center,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        BasicText("下载更新", style = TextStyle(Color.White, 16.sp))
                    }
                }
            }
        }
    }
}
