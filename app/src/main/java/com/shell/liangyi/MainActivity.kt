package com.shell.liangyi

import android.os.Bundle
import androidx.activity.ComponentActivity
import com.shell.liangyi.core.WearMessageCenter

class MainActivity : ComponentActivity() {

    private lateinit var wearMessageCenter: WearMessageCenter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        wearMessageCenter = WearMessageCenter.getInstance(this)
        wearMessageCenter.initialize()
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
