package com.shell.liangyi.ui

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.animation.core.CubicBezierEasing
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally

// 严格参考 StatusBarLyric/PortraitLayout 的动画配置
// 关键：popExitTransition 只用 slide，不加 fadeOut（避免返回卡顿）
object AnimTools {

    private val easing = CubicBezierEasing(0.12f, 0.38f, 0.2f, 1f)

    // enter: 新页面从右侧滑入
    fun enterTransition(windowWidth: Int): EnterTransition {
        return slideInHorizontally(
            initialOffsetX = { windowWidth },
            animationSpec = tween(500, easing = easing),
        )
    }

    // exit: 旧页面向左滑出 + 淡出
    fun exitTransition(windowWidth: Int): ExitTransition {
        return slideOutHorizontally(
            targetOffsetX = { -windowWidth / 5 },
            animationSpec = tween(500, easing = easing),
        ) + fadeOut(
            animationSpec = tween(500),
            targetAlpha = 0.5f,
        )
    }

    // popEnter: 旧页面从左侧滑回 + 淡入
    fun popEnterTransition(windowWidth: Int): EnterTransition {
        return slideInHorizontally(
            initialOffsetX = { -windowWidth / 5 },
            animationSpec = tween(500, easing = easing),
        ) + fadeIn(
            animationSpec = tween(500),
            initialAlpha = 0.5f,
        )
    }

    // popExit: 当前页面向右滑出（不加 fade，避免卡顿）
    fun popExitTransition(windowWidth: Int): ExitTransition {
        return slideOutHorizontally(
            targetOffsetX = { windowWidth },
            animationSpec = tween(500, easing = easing),
        )
    }
}
