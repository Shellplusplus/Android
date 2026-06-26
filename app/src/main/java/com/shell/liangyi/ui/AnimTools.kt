package com.shell.liangyi.ui

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally

// 严格参考 StatusBarLyric PortraitLayout 的动画曲线

object AnimTools {

    // 统一的缓动曲线（与参考项目一致）
    private val easing = CubicBezierEasing(0.12f, 0.38f, 0.2f, 1f)

    // 进入：仅右滑，500ms
    fun enterTransition(windowWidth: Int): EnterTransition {
        return slideInHorizontally(
            initialOffsetX = { windowWidth },
            animationSpec = tween(durationMillis = 500, easing = easing)
        )
    }

    // 退出：左滑 + 淡出到 0.5，500ms
    fun exitTransition(windowWidth: Int): ExitTransition {
        return slideOutHorizontally(
            targetOffsetX = { -windowWidth / 5 },
            animationSpec = tween(durationMillis = 500, easing = easing)
        ) + fadeOut(
            animationSpec = tween(durationMillis = 500),
            targetAlpha = 0.5f
        )
    }

    // 返回进入：左滑 + 从 0.5 淡入，500ms
    fun popEnterTransition(windowWidth: Int): EnterTransition {
        return slideInHorizontally(
            initialOffsetX = { -windowWidth / 5 },
            animationSpec = tween(durationMillis = 500, easing = easing)
        ) + fadeIn(
            animationSpec = tween(durationMillis = 500),
            initialAlpha = 0.5f
        )
    }

    // 返回退出：仅右滑，500ms
    fun popExitTransition(windowWidth: Int): ExitTransition {
        return slideOutHorizontally(
            targetOffsetX = { windowWidth },
            animationSpec = tween(durationMillis = 500, easing = easing)
        )
    }
}
