package com.shell.liangyi.ui.about

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.runtime.Composable
import com.shell.liangyi.ui.components.ShellDetailScaffold
import com.shell.liangyi.ui.components.ShellSectionCard
import com.shell.liangyi.ui.components.ShellSectionTitle
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme

private val CONTRIBUTORS = listOf("@梁逸", "@IKUN-CXKPRO", "@无源流沙", "@NEORUAA", "@AzumaChiaki")

@Composable
fun AboutScreen(onBack: () -> Unit) {
    ShellDetailScaffold(
        title = "关于 Shell++",
        onBack = onBack
    ) { paddingValues ->
        LazyColumn(
            modifier = Modifier.fillMaxSize(),
            contentPadding = paddingValues
        ) {
            item {
                ShellSectionCard {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 20.dp, vertical = 24.dp),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Box(
                            modifier = Modifier
                                .size(92.dp)
                                .clip(androidx.compose.foundation.shape.RoundedCornerShape(24.dp))
                                .background(
                                    Brush.verticalGradient(
                                        listOf(Color(0xFF4A8CFF), Color(0xFF2C6BE0))
                                    )
                                ),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = ">_",
                                color = Color.White,
                                fontSize = 38.sp,
                                fontFamily = FontFamily.Monospace,
                                fontWeight = FontWeight.Bold
                            )
                        }
                        Spacer(modifier = Modifier.height(16.dp))
                        Text(
                            text = "Shell++",
                            color = MiuixTheme.colorScheme.onSurface,
                            fontSize = 28.sp,
                            fontWeight = FontWeight.Bold
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = "Beta 1",
                            color = MiuixTheme.colorScheme.onSurfaceVariantSummary,
                            fontSize = 15.sp
                        )
                    }
                }
            }

            item {
                ShellSectionTitle("参与开发")
            }
            CONTRIBUTORS.forEach { name ->
                item {
                    ShellSectionCard {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(horizontal = 18.dp, vertical = 16.dp)
                        ) {
                            Text(
                                text = name,
                                color = MiuixTheme.colorScheme.onSurface,
                                fontSize = 17.sp
                            )
                        }
                    }
                }
            }
        }
    }
}
