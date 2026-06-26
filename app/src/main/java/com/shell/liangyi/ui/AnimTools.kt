package com.shell.liangyi.ui

import androidx.compose.animation.EnterTransition
import androidx.compose.animation.ExitTransition
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally

object AnimTools {

    fun enterTransition(windowWidth: Int): EnterTransition {
        return slideInHorizontally(
            initialOffsetX = { it / 4 },
            animationSpec = tween(300)
        ) + fadeIn(animationSpec = tween(300))
    }

    fun exitTransition(windowWidth: Int): ExitTransition {
        return slideOutHorizontally(
            targetOffsetX = { -it / 4 },
            animationSpec = tween(300)
        ) + fadeOut(animationSpec = tween(250))
    }

    fun popEnterTransition(windowWidth: Int): EnterTransition {
        return slideInHorizontally(
            initialOffsetX = { -it / 4 },
            animationSpec = tween(300)
        ) + fadeIn(animationSpec = tween(300))
    }

    fun popExitTransition(windowWidth: Int): ExitTransition {
        return slideOutHorizontally(
            targetOffsetX = { it / 4 },
            animationSpec = tween(300)
        ) + fadeOut(animationSpec = tween(250))
    }
}
