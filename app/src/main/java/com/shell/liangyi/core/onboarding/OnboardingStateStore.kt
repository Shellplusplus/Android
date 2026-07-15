package com.shell.liangyi.core.onboarding

import android.content.Context
import android.content.SharedPreferences
import androidx.core.content.edit

data class OnboardingState(
    val completed: Boolean,
    val proxySelection: GitHubProxySelection,
    val lastBenchmarkMs: Long?,
    val lastBenchmarkAt: Long?,
)

class OnboardingStateStore(
    private val preferences: SharedPreferences,
) {

    fun readState(): OnboardingState {
        return OnboardingState(
            completed = preferences.getBoolean(KEY_ONBOARDING_COMPLETED, false),
            proxySelection = GitHubProxySelection(
                sourceId = GitHubProxySources.findById(
                    preferences.getString(
                        KEY_GITHUB_PROXY_SOURCE_ID,
                        GitHubProxySources.ghfast.id,
                    ),
                ).id,
                customBaseUrl = preferences.getString(
                    KEY_GITHUB_PROXY_CUSTOM_BASE_URL,
                    "",
                ).orEmpty(),
            ),
            lastBenchmarkMs = preferences
                .takeIf { it.contains(KEY_GITHUB_PROXY_LAST_BENCHMARK_MS) }
                ?.getLong(KEY_GITHUB_PROXY_LAST_BENCHMARK_MS, 0L),
            lastBenchmarkAt = preferences
                .takeIf { it.contains(KEY_GITHUB_PROXY_LAST_BENCHMARK_AT) }
                ?.getLong(KEY_GITHUB_PROXY_LAST_BENCHMARK_AT, 0L),
        )
    }

    fun setOnboardingCompleted(completed: Boolean) {
        preferences.edit {
            putBoolean(KEY_ONBOARDING_COMPLETED, completed)
        }
    }

    fun saveProxySelection(
        selection: GitHubProxySelection,
        benchmarkMs: Long? = null,
        benchmarkAt: Long? = null,
    ) {
        val normalizedCustomBaseUrl = GitHubUrlResolver.normalizeCustomBaseUrl(
            selection.customBaseUrl,
        )
        preferences.edit {
            putString(KEY_GITHUB_PROXY_SOURCE_ID, selection.sourceId)
            putString(KEY_GITHUB_PROXY_CUSTOM_BASE_URL, normalizedCustomBaseUrl)
            if (benchmarkMs != null) {
                putLong(KEY_GITHUB_PROXY_LAST_BENCHMARK_MS, benchmarkMs)
            } else {
                remove(KEY_GITHUB_PROXY_LAST_BENCHMARK_MS)
            }
            if (benchmarkAt != null) {
                putLong(KEY_GITHUB_PROXY_LAST_BENCHMARK_AT, benchmarkAt)
            } else {
                remove(KEY_GITHUB_PROXY_LAST_BENCHMARK_AT)
            }
        }
    }

    companion object {
        private const val PREFS_NAME = "shell_onboarding_state"
        const val KEY_ONBOARDING_COMPLETED = "onboarding_completed"
        const val KEY_GITHUB_PROXY_SOURCE_ID = "github_proxy_source_id"
        const val KEY_GITHUB_PROXY_CUSTOM_BASE_URL = "github_proxy_custom_base_url"
        const val KEY_GITHUB_PROXY_LAST_BENCHMARK_MS = "github_proxy_last_benchmark_ms"
        const val KEY_GITHUB_PROXY_LAST_BENCHMARK_AT = "github_proxy_last_benchmark_at"

        fun from(context: Context): OnboardingStateStore {
            return OnboardingStateStore(
                context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE),
            )
        }
    }
}
