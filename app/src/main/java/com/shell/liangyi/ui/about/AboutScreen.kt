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
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.ui.components.IOSScaffold
import com.shell.liangyi.ui.components.InsetSection
import com.shell.liangyi.ui.components.RowDivider
import com.shell.liangyi.ui.theme.LocalIOSColors

private val CONTRIBUTORS = listOf("@\u6881\u9038", "@IKUN-CXKPRO", "@\u65E0\u6E90\u6D41\u6C99", "@NEORUAA", "@AzumaChiaki")

@Composable
fun AboutScreen(onBack: () -> Unit) {
    val c = LocalIOSColors.current
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(c.groupedBackground)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Spacer(modifier = Modifier.height(20.dp))
        Box(
            modifier = Modifier.size(96.dp).clip(RoundedCornerShape(22.dp))
                .background(Brush.verticalGradient(listOf(Color(0xFF4A8CFF), Color(0xFF2C6BE0)))),
            contentAlignment = Alignment.Center
        ) { Text(">_", color = Color.White, fontSize = 40.sp, fontFamily = FontFamily.Monospace, fontWeight = FontWeight.Bold) }
        Spacer(modifier = Modifier.height(14.dp))
        Text("Shell++", color = c.label, fontSize = 28.sp, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(2.dp))
        Text("Beta 1  \u00B7  \u03B2", color = c.secondaryLabel, fontSize = 15.sp)
        Spacer(modifier = Modifier.height(28.dp))
        InsetSection(header = "\u53C2\u4E0E\u5F00\u53D1\u7684\u4EBA\u5458") {
            CONTRIBUTORS.forEachIndexed { index, name ->
                if (index > 0) RowDivider()
                Box(modifier = Modifier.fillMaxWidth().padding(horizontal = 16.dp, vertical = 13.dp)) {
                    Text(name, color = c.label, fontSize = 17.sp)
                }
            }
        }
        Spacer(modifier = Modifier.height(24.dp))
    }
}
