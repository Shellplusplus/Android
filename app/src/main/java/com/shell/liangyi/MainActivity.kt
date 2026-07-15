package com.shell.liangyi

import android.os.Bundle
import androidx.annotation.RequiresApi
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.compose.runtime.getValue
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.navigationevent.NavigationEventDispatcher
import androidx.navigationevent.NavigationEventDispatcherOwner
import androidx.navigationevent.OnBackInvokedDefaultInput
import androidx.navigationevent.setViewTreeNavigationEventDispatcherOwner
import com.shell.liangyi.ui.ShellScreen
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.theme.ShellAppTheme

class MainActivity : ComponentActivity() {

    private val shellViewModel: ShellViewModel by viewModels()
    private val navigationEventDispatcherOwner = object : NavigationEventDispatcherOwner {
        override val navigationEventDispatcher = NavigationEventDispatcher {
            onBackPressedDispatcher.onBackPressed()
        }
    }
    private var navigationEventInput: OnBackInvokedDefaultInput? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        window.decorView.setViewTreeNavigationEventDispatcherOwner(navigationEventDispatcherOwner)
        registerNavigationEventInput()
        shellViewModel.initialize(this)

        setContent {
            val themeMode by shellViewModel.themeMode.collectAsStateWithLifecycle()
            ShellAppTheme(themeMode = themeMode) {
                ShellScreen(shellViewModel)
            }
        }
    }

    override fun onResume() {
        super.onResume()
        shellViewModel.wearMessageCenter.ensureConnection()
    }

    override fun onDestroy() {
        navigationEventInput?.let(navigationEventDispatcherOwner.navigationEventDispatcher::removeInput)
        navigationEventInput = null
        navigationEventDispatcherOwner.navigationEventDispatcher.dispose()
        super.onDestroy()
    }

    @RequiresApi(33)
    private fun createNavigationEventInput(): OnBackInvokedDefaultInput {
        return OnBackInvokedDefaultInput(onBackInvokedDispatcher)
    }

    private fun registerNavigationEventInput() {
        if (android.os.Build.VERSION.SDK_INT < 33 || navigationEventInput != null) {
            return
        }

        val input = createNavigationEventInput()
        navigationEventDispatcherOwner.navigationEventDispatcher.addInput(
            input,
            NavigationEventDispatcher.PRIORITY_DEFAULT,
        )
        navigationEventInput = input
    }
}
