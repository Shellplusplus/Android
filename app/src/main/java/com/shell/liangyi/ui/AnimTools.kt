package com.shell.liangyi.ui

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally

// 参考 StatusBarLyric/AnimTools + PortraitLayout 的动画曲线

object AnimTools {

    // 页面进入动画：从右侧滑入 + 淡入 + 缩放
    fun enterTransition(windowWidth: Int): EnterTransition {
        val easing = CubicBezierEasing(0.12f, 0.38f, 0.2f, 1f)
        return slideInHorizontally(
            initialOffsetX = { windowWidth },
            animationSpec = tween(500, easing = easing)
        ) + fadeIn(animationSpec = tween(500, easing = easing)) +
            scaleIn(
                initialScale = 0.95f,
                animationSpec = tween(500, easing = CubicBezierEasing(0.36f, 1.44f, 0.48f, 1f))
            )
    }

    // 页面退出动画：向左滑出 + 淡出 + 缩放
    fun exitTransition(windowWidth: Int): ExitTransition {
        val easing = CubicBezierEasing(0.12f, 0.38f, 0.2f, 1f)
        return slideOutHorizontally(
            targetOffsetX = { -windowWidth / 5 },
            animationSpec = tween(500, easing = easing)
        ) + fadeOut(animationSpec = tween(500), targetAlpha = 0.5f) +
            scaleOut(
                targetScale = 0.95f,
                animationSpec = tween(300, easing = CubicBezierEasing(0.36f, 1.44f, 0.48f, 1f))
            )
    }

    // 返回进入动画：从左侧滑入 + 淡入
    fun popEnterTransition(windowWidth: Int): EnterTransition {
        val easing = CubicBezierEasing(0.12f, 0.38f, 0.2f, 1f)
        return slideInHorizontally(
            initialOffsetX = { -windowWidth / 5 },
            animationSpec = tween(500, easing = easing)
        ) + fadeIn(animationSpec = tween(500), initialAlpha = 0.5f)
    }

    // 返回退出动画：向右滑出 + 淡出
    fun popExitTransition(windowWidth: Int): ExitTransition {
        val easing = CubicBezierEasing(0.12f, 0.38f, 0.2f, 1f)
        return slideOutHorizontally(
            targetOffsetX = { windowWidth },
            animationSpec = tween(500, easing = easing)
        )
    }
}
