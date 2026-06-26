package com.shell.liangyi

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import com.shell.liangyi.ui.ShellScreen
import com.shell.liangyi.ui.ShellViewModel
import top.yukonga.miuix.kmp.theme.MiuixTheme

class MainActivity : ComponentActivity() {

    private val shellViewModel: ShellViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        shellViewModel.initialize(this)

        setContent {
            MiuixTheme {
                ShellScreen(shellViewModel)
            }
        }
    }

    override fun onResume() {
        super.onResume()
        shellViewModel.wearMessageCenter.ensureConnection()
    }
}
