package com.shell.liangyi.core

import android.content.Context

object WearConnectionPreferences {
    private const val PREFS_NAME = "wear_connection_prefs"
    private const val KEY_AUTO_LAUNCH_WEAR_APP = "auto_launch_wear_app"

    fun isAutoLaunchWearAppEnabled(context: Context): Boolean {
        return context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .getBoolean(KEY_AUTO_LAUNCH_WEAR_APP, true)
    }

    fun setAutoLaunchWearAppEnabled(context: Context, enabled: Boolean) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit()
            .putBoolean(KEY_AUTO_LAUNCH_WEAR_APP, enabled)
            .apply()
    }
}
