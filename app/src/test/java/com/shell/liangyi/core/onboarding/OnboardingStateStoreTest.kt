package com.shell.liangyi.core.onboarding

import android.content.SharedPreferences
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test

class OnboardingStateStoreTest {

    @Test
    fun storeDefaultsToIncompleteOnboardingAndGhfastSelection() {
        val store = OnboardingStateStore(InMemorySharedPreferences())

        val state = store.readState()

        assertFalse(state.completed)
        assertEquals(GitHubProxySources.ghfast.id, state.proxySelection.sourceId)
        assertEquals("", state.proxySelection.customBaseUrl)
        assertNull(state.lastBenchmarkMs)
        assertNull(state.lastBenchmarkAt)
    }

    @Test
    fun storePersistsCompletionAndProxySelection() {
        val store = OnboardingStateStore(InMemorySharedPreferences())

        store.saveProxySelection(
            selection = GitHubProxySelection(
                sourceId = GitHubProxySources.custom.id,
                customBaseUrl = "proxy.example.com/base",
            ),
            benchmarkMs = 88L,
            benchmarkAt = 1234L,
        )
        store.setOnboardingCompleted(true)

        val state = store.readState()

        assertTrue(state.completed)
        assertEquals(GitHubProxySources.custom.id, state.proxySelection.sourceId)
        assertEquals("https://proxy.example.com/base/", state.proxySelection.customBaseUrl)
        assertEquals(88L, state.lastBenchmarkMs)
        assertEquals(1234L, state.lastBenchmarkAt)
    }

    @Test
    fun storeCanResetCompletionWithoutClearingSelection() {
        val store = OnboardingStateStore(InMemorySharedPreferences())
        store.saveProxySelection(
            selection = GitHubProxySelection(sourceId = GitHubProxySources.gitwarp.id),
        )
        store.setOnboardingCompleted(true)

        store.setOnboardingCompleted(false)

        val state = store.readState()
        assertFalse(state.completed)
        assertEquals(GitHubProxySources.gitwarp.id, state.proxySelection.sourceId)
    }

    @Test
    fun storeDropsInvalidCustomProxyBaseUrl() {
        val store = OnboardingStateStore(InMemorySharedPreferences())

        store.saveProxySelection(
            selection = GitHubProxySelection(
                sourceId = GitHubProxySources.custom.id,
                customBaseUrl = "file:///tmp/proxy",
            ),
        )

        val state = store.readState()
        assertEquals(GitHubProxySources.custom.id, state.proxySelection.sourceId)
        assertEquals("", state.proxySelection.customBaseUrl)
    }

    private class InMemorySharedPreferences : SharedPreferences {
        private val values = linkedMapOf<String, Any?>()

        override fun getAll(): MutableMap<String, *> = values.toMutableMap()

        override fun getString(key: String?, defValue: String?): String? {
            return values[key] as? String ?: defValue
        }

        override fun getStringSet(key: String?, defValues: MutableSet<String>?): MutableSet<String>? {
            @Suppress("UNCHECKED_CAST")
            return values[key] as? MutableSet<String> ?: defValues
        }

        override fun getInt(key: String?, defValue: Int): Int {
            return values[key] as? Int ?: defValue
        }

        override fun getLong(key: String?, defValue: Long): Long {
            return values[key] as? Long ?: defValue
        }

        override fun getFloat(key: String?, defValue: Float): Float {
            return values[key] as? Float ?: defValue
        }

        override fun getBoolean(key: String?, defValue: Boolean): Boolean {
            return values[key] as? Boolean ?: defValue
        }

        override fun contains(key: String?): Boolean = values.containsKey(key)

        override fun edit(): SharedPreferences.Editor = Editor(values)

        override fun registerOnSharedPreferenceChangeListener(
            listener: SharedPreferences.OnSharedPreferenceChangeListener?,
        ) = Unit

        override fun unregisterOnSharedPreferenceChangeListener(
            listener: SharedPreferences.OnSharedPreferenceChangeListener?,
        ) = Unit

        private class Editor(
            private val values: MutableMap<String, Any?>,
        ) : SharedPreferences.Editor {
            private val staged = linkedMapOf<String, Any?>()
            private var clearAll = false

            override fun putString(key: String?, value: String?): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = value
            }

            override fun putStringSet(
                key: String?,
                values: MutableSet<String>?,
            ): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = values
            }

            override fun putInt(key: String?, value: Int): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = value
            }

            override fun putLong(key: String?, value: Long): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = value
            }

            override fun putFloat(key: String?, value: Float): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = value
            }

            override fun putBoolean(key: String?, value: Boolean): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = value
            }

            override fun remove(key: String?): SharedPreferences.Editor = apply {
                staged[key.orEmpty()] = Removed
            }

            override fun clear(): SharedPreferences.Editor = apply {
                clearAll = true
            }

            override fun commit(): Boolean {
                apply()
                return true
            }

            override fun apply() {
                if (clearAll) {
                    values.clear()
                }
                staged.forEach { (key, value) ->
                    if (value === Removed) {
                        values.remove(key)
                    } else {
                        values[key] = value
                    }
                }
            }

            private object Removed
        }
    }
}
