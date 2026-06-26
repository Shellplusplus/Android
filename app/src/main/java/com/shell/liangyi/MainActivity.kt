package com.shell.liangyi

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.shell.liangyi.core.WearMessageCenter
import com.shell.liangyi.ui.ShellScreen
import top.yukonga.miuix.kmp.theme.MiuixTheme

class MainActivity : ComponentActivity() {

    private lateinit var wearMessageCenter: WearMessageCenter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        wearMessageCenter = WearMessageCenter.getInstance(this)
        wearMessageCenter.initialize()

        setContent {
            MiuixTheme {
                ShellScreen()
            }
        }
    }

    override fun onResume() {
        super.onResume()
        wearMessageCenter.ensureConnection()
    }

    override fun onDestroy() {
        super.onDestroy()
        wearMessageCenter.destroy()
    }
}
