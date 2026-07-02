package com.shell.liangyi.core.update

private const val OPTIONAL_UPDATE_UNLOCK_THRESHOLD = 3
private const val OPTIONAL_UPDATE_EXPIRY_OFFSET = 3L

data class OptionalUpdatePreferenceSnapshot(
    val skipOptionalPrompts: Boolean = false,
    val promptCountVersionCode: Long = 0L,
    val promptDisplayCount: Int = 0,
    val unlockVersionCode: Long = 0L,
    val enabledBaseVersionCode: Long = 0L,
    val latestSeenOptionalVersionCode: Long = 0L,
)

data class OptionalUpdatePreferenceState(
    val skipOptionalPrompts: Boolean,
    val skipOptionalUpdateAvailable: Boolean,
    val promptCountVersionCode: Long,
    val promptDisplayCount: Int,
    val unlockVersionCode: Long,
    val enabledBaseVersionCode: Long,
    val latestSeenOptionalVersionCode: Long,
)

internal object OptionalUpdatePreferenceStateMachine {

    fun normalize(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
    ): OptionalUpdatePreferenceSnapshot {
        var state = snapshot.copy(
            promptDisplayCount = snapshot.promptDisplayCount.coerceAtLeast(0),
        )

        if (state.promptCountVersionCode == 0L && state.promptDisplayCount != 0) {
            state = state.copy(promptDisplayCount = 0)
        }

        if (state.promptCountVersionCode in 1..currentVersionCode) {
            state = state.copy(
                promptCountVersionCode = 0L,
                promptDisplayCount = 0,
            )
        }

        if (state.unlockVersionCode in 1..currentVersionCode) {
            state = state.copy(unlockVersionCode = 0L)
        }

        if (state.enabledBaseVersionCode in 1..currentVersionCode) {
            state = state.copy(
                skipOptionalPrompts = false,
                enabledBaseVersionCode = 0L,
            )
        }

        if (state.skipOptionalPrompts && state.enabledBaseVersionCode == 0L) {
            state = state.copy(skipOptionalPrompts = false)
        }

        if (
            state.latestSeenOptionalVersionCode > 0L &&
            state.promptCountVersionCode > 0L &&
            state.promptCountVersionCode != state.latestSeenOptionalVersionCode
        ) {
            state = state.copy(
                promptCountVersionCode = state.latestSeenOptionalVersionCode,
                promptDisplayCount = 0,
            )
        }

        if (isExpired(state.enabledBaseVersionCode, state.latestSeenOptionalVersionCode)) {
            state = state.copy(
                skipOptionalPrompts = false,
                promptCountVersionCode = 0L,
                promptDisplayCount = 0,
                unlockVersionCode = 0L,
                enabledBaseVersionCode = 0L,
            )
        }

        if (isExpired(state.unlockVersionCode, state.latestSeenOptionalVersionCode)) {
            state = state.copy(
                promptCountVersionCode = 0L,
                promptDisplayCount = 0,
                unlockVersionCode = 0L,
            )
        }

        return state
    }

    fun onOptionalUpdateSeen(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
        latestVersionCode: Long,
    ): OptionalUpdatePreferenceSnapshot {
        if (latestVersionCode <= currentVersionCode) {
            return normalize(snapshot, currentVersionCode)
        }

        val normalized = normalize(snapshot, currentVersionCode)
        val nextState = if (normalized.promptCountVersionCode == latestVersionCode) {
            normalized.copy(latestSeenOptionalVersionCode = latestVersionCode)
        } else {
            normalized.copy(
                promptCountVersionCode = latestVersionCode,
                promptDisplayCount = 0,
                latestSeenOptionalVersionCode = latestVersionCode,
            )
        }
        return normalize(nextState, currentVersionCode)
    }

    fun onPromptDisplayed(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
        displayedVersionCode: Long,
    ): OptionalUpdatePreferenceSnapshot {
        if (displayedVersionCode <= currentVersionCode) {
            return normalize(snapshot, currentVersionCode)
        }

        val normalized = normalize(snapshot, currentVersionCode)
        val countingState = if (normalized.promptCountVersionCode == displayedVersionCode) {
            normalized
        } else {
            normalized.copy(
                promptCountVersionCode = displayedVersionCode,
                promptDisplayCount = 0,
            )
        }
        val nextCount = countingState.promptDisplayCount + 1
        val nextState = countingState.copy(
            promptDisplayCount = nextCount,
            unlockVersionCode = if (nextCount >= OPTIONAL_UPDATE_UNLOCK_THRESHOLD) {
                displayedVersionCode
            } else {
                countingState.unlockVersionCode
            },
            latestSeenOptionalVersionCode = maxOf(
                countingState.latestSeenOptionalVersionCode,
                displayedVersionCode,
            ),
        )
        return normalize(nextState, currentVersionCode)
    }

    fun onSkipToggleChanged(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
        enabled: Boolean,
    ): OptionalUpdatePreferenceSnapshot {
        val normalized = normalize(snapshot, currentVersionCode)
        if (!enabled) {
            return normalized.copy(
                skipOptionalPrompts = false,
                enabledBaseVersionCode = 0L,
            )
        }

        if (!isAvailable(normalized, currentVersionCode)) {
            return normalized.copy(
                skipOptionalPrompts = false,
                enabledBaseVersionCode = 0L,
            )
        }

        return normalized.copy(
            skipOptionalPrompts = true,
            enabledBaseVersionCode = normalized.unlockVersionCode,
        )
    }

    fun shouldSuppressOptionalPrompt(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
        latestVersionCode: Long,
    ): Boolean {
        val normalized = normalize(snapshot, currentVersionCode)
        if (!normalized.skipOptionalPrompts || normalized.enabledBaseVersionCode == 0L) {
            return false
        }
        if (latestVersionCode <= currentVersionCode) {
            return false
        }
        val latestSeen = maxOf(normalized.latestSeenOptionalVersionCode, latestVersionCode)
        return !isExpired(normalized.enabledBaseVersionCode, latestSeen)
    }

    fun toState(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
    ): OptionalUpdatePreferenceState {
        val normalized = normalize(snapshot, currentVersionCode)
        val available = isAvailable(normalized, currentVersionCode)
        return OptionalUpdatePreferenceState(
            skipOptionalPrompts = normalized.skipOptionalPrompts && available,
            skipOptionalUpdateAvailable = available,
            promptCountVersionCode = normalized.promptCountVersionCode,
            promptDisplayCount = normalized.promptDisplayCount,
            unlockVersionCode = normalized.unlockVersionCode,
            enabledBaseVersionCode = normalized.enabledBaseVersionCode,
            latestSeenOptionalVersionCode = normalized.latestSeenOptionalVersionCode,
        )
    }

    private fun isAvailable(
        snapshot: OptionalUpdatePreferenceSnapshot,
        currentVersionCode: Long,
    ): Boolean {
        val unlockVersionCode = snapshot.unlockVersionCode
        return unlockVersionCode > currentVersionCode &&
            !isExpired(unlockVersionCode, snapshot.latestSeenOptionalVersionCode)
    }

    private fun isExpired(
        baseVersionCode: Long,
        latestSeenOptionalVersionCode: Long,
    ): Boolean {
        return baseVersionCode > 0L &&
            latestSeenOptionalVersionCode >= baseVersionCode + OPTIONAL_UPDATE_EXPIRY_OFFSET
    }
}
