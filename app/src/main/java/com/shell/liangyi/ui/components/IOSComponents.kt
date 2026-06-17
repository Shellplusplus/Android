package com.shell.liangyi.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ColumnScope
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.KeyboardArrowLeft
import androidx.compose.material.icons.filled.KeyboardArrowRight
import androidx.compose.material3.Icon
import androidx.compose.material3.Switch
import androidx.compose.material3.SwitchDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.ui.theme.LocalIOSColors

/**
 * iOS 17 风格大标题页面脚手架：状态栏内边距 + 顶部导航行（可选返回/右侧）+ 大标题 + 内容区。
 */
@Composable
fun IOSScaffold(
    title: String,
    onBack: (() -> Unit)? = null,
    trailing: @Composable (() -> Unit)? = null,
    content: @Composable () -> Unit
) {
    val c = LocalIOSColors.current
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(c.groupedBackground)
    ) {
        Column(modifier = Modifier.statusBarsPadding()) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(44.dp)
            ) {
                if (onBack != null) {
                    Row(
                        modifier = Modifier
                            .align(Alignment.CenterStart)
                            .clip(RoundedCornerShape(8.dp))
                            .clickable { onBack() }
                            .padding(start = 8.dp, end = 12.dp, top = 6.dp, bottom = 6.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Filled.KeyboardArrowLeft,
                            contentDescription = "返回",
                            tint = c.accent,
                            modifier = Modifier.size(28.dp)
                        )
                        Text(
                            text = "返回",
                            color = c.accent,
                            fontSize = 17.sp
                        )
                    }
                }
                if (trailing != null) {
                    Box(
                        modifier = Modifier
                            .align(Alignment.CenterEnd)
                            .padding(end = 8.dp)
                    ) {
                        trailing()
                    }
                }
            }
            Text(
                text = title,
                color = c.label,
                fontSize = 34.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.padding(start = 16.dp, end = 16.dp, top = 2.dp, bottom = 8.dp)
            )
        }
        Box(modifier = Modifier.fillMaxSize()) {
            content()
        }
    }
}

/**
 * 圆角内嵌分组（带可选大写小标题与脚注）。
 */
@Composable
fun InsetSection(
    header: String? = null,
    footer: String? = null,
    content: @Composable ColumnScope.() -> Unit
) {
    val c = LocalIOSColors.current
    Column(modifier = Modifier.fillMaxWidth()) {
        if (header != null) {
            Text(
                text = header.uppercase(),
                color = c.secondaryLabel,
                fontSize = 13.sp,
                modifier = Modifier.padding(start = 32.dp, end = 32.dp, top = 14.dp, bottom = 6.dp)
            )
        }
        Column(
            modifier = Modifier
                .padding(horizontal = 16.dp)
                .fillMaxWidth()
                .clip(RoundedCornerShape(12.dp))
                .background(c.cardBackground)
        ) {
            content()
        }
        if (footer != null) {
            Text(
                text = footer,
                color = c.secondaryLabel,
                fontSize = 13.sp,
                modifier = Modifier.padding(start = 32.dp, end = 32.dp, top = 6.dp, bottom = 2.dp)
            )
        }
    }
}

/** 行内分隔线（左侧按 iOS 习惯内缩）。 */
@Composable
fun RowDivider(insetStart: Dp = 16.dp) {
    val c = LocalIOSColors.current
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(start = insetStart)
            .height(0.5.dp)
            .background(c.separator)
    )
}

/** iOS 风格彩色圆角图标徽标。 */
@Composable
private fun IconBadge(icon: ImageVector, bg: Color) {
    Box(
        modifier = Modifier
            .size(29.dp)
            .clip(RoundedCornerShape(7.dp))
            .background(bg),
        contentAlignment = Alignment.Center
    ) {
        Icon(
            imageVector = icon,
            contentDescription = null,
            tint = Color.White,
            modifier = Modifier.size(18.dp)
        )
    }
}

/** 可点击的导航行：左侧徽标 + 标题 +（右侧值）+ chevron。 */
@Composable
fun IOSNavRow(
    title: String,
    icon: ImageVector? = null,
    iconBg: Color = Color(0xFF8E8E93),
    value: String? = null,
    showChevron: Boolean = true,
    onClick: () -> Unit
) {
    val c = LocalIOSColors.current
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { onClick() }
            .heightIn(min = 48.dp)
            .padding(horizontal = 16.dp, vertical = 9.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (icon != null) {
            IconBadge(icon, iconBg)
            Spacer(modifier = Modifier.width(12.dp))
        }
        Text(
            text = title,
            color = c.label,
            fontSize = 17.sp,
            modifier = Modifier.weight(1f)
        )
        if (value != null) {
            Text(
                text = value,
                color = c.secondaryLabel,
                fontSize = 17.sp
            )
        }
        if (showChevron) {
            Spacer(modifier = Modifier.width(6.dp))
            Icon(
                imageVector = Icons.Filled.KeyboardArrowRight,
                contentDescription = null,
                tint = c.tertiaryLabel,
                modifier = Modifier.size(22.dp)
            )
        }
    }
}

/** 带开关的行。 */
@Composable
fun IOSToggleRow(
    title: String,
    checked: Boolean,
    onCheckedChange: (Boolean) -> Unit,
    icon: ImageVector? = null,
    iconBg: Color = Color(0xFF8E8E93),
    subtitle: String? = null
) {
    val c = LocalIOSColors.current
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .heightIn(min = 48.dp)
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        if (icon != null) {
            IconBadge(icon, iconBg)
            Spacer(modifier = Modifier.width(12.dp))
        }
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = title,
                color = c.label,
                fontSize = 17.sp
            )
            if (subtitle != null) {
                Text(
                    text = subtitle,
                    color = c.secondaryLabel,
                    fontSize = 13.sp
                )
            }
        }
        Spacer(modifier = Modifier.width(8.dp))
        Switch(
            checked = checked,
            onCheckedChange = onCheckedChange,
            colors = SwitchDefaults.colors(
                checkedThumbColor = Color.White,
                checkedTrackColor = c.green,
                uncheckedThumbColor = Color.White,
                uncheckedTrackColor = if (c.isDark) Color(0xFF39393D) else Color(0xFFE9E9EA),
                uncheckedBorderColor = Color.Transparent
            )
        )
    }
}
