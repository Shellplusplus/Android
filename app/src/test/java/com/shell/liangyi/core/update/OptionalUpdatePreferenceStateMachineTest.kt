package com.shell.liangyi.core.update

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class OptionalUpdatePreferenceStateMachineTest {

    private val currentVersionCode = 10L

    @Test
    fun unlocksAfterSameOptionalPromptIsShownThreeTimes() {
        var snapshot = OptionalUpdatePreferenceSnapshot()
        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(
            snapshot = snapshot,
            currentVersionCode = currentVersionCode,
            latestVersionCode = 20L,
        )

        repeat(2) {
            snapshot = OptionalUpdatePreferenceStateMachine.onPromptDisplayed(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                displayedVersionCode = 20L,
            )
        }

        assertFalse(
            OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)
                .skipOptionalUpdateAvailable,
        )

        snapshot = OptionalUpdatePreferenceStateMachine.onPromptDisplayed(
            snapshot = snapshot,
            currentVersionCode = currentVersionCode,
            displayedVersionCode = 20L,
        )

        val state = OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)
        assertTrue(state.skipOptionalUpdateAvailable)
        assertEquals(20L, state.unlockVersionCode)
        assertEquals(3, state.promptDisplayCount)
    }

    @Test
    fun seeingOptionalUpdateWithoutShowingPromptDoesNotIncreaseCount() {
        val snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(
            snapshot = OptionalUpdatePreferenceSnapshot(),
            currentVersionCode = currentVersionCode,
            latestVersionCode = 20L,
        )

        val state = OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)
        assertEquals(0, state.promptDisplayCount)
        assertFalse(state.skipOptionalUpdateAvailable)
    }

    @Test
    fun newerOptionalVersionResetsPromptCount() {
        var snapshot = OptionalUpdatePreferenceSnapshot()
        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(
            snapshot = snapshot,
            currentVersionCode = currentVersionCode,
            latestVersionCode = 20L,
        )
        repeat(2) {
            snapshot = OptionalUpdatePreferenceStateMachine.onPromptDisplayed(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                displayedVersionCode = 20L,
            )
        }

        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(
            snapshot = snapshot,
            currentVersionCode = currentVersionCode,
            latestVersionCode = 21L,
        )

        val state = OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)
        assertEquals(21L, state.promptCountVersionCode)
        assertEquals(0, state.promptDisplayCount)
        assertFalse(state.skipOptionalUpdateAvailable)
    }

    @Test
    fun unlockedButDisabledStateExpiresAfterThreeVersions() {
        var snapshot = OptionalUpdatePreferenceSnapshot()
        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(snapshot, currentVersionCode, 20L)
        repeat(3) {
            snapshot = OptionalUpdatePreferenceStateMachine.onPromptDisplayed(snapshot, currentVersionCode, 20L)
        }

        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(snapshot, currentVersionCode, 22L)
        assertTrue(
            OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)
                .skipOptionalUpdateAvailable,
        )

        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(snapshot, currentVersionCode, 23L)

        val state = OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)
        assertFalse(state.skipOptionalUpdateAvailable)
        assertEquals(0L, state.unlockVersionCode)
        assertEquals(0, state.promptDisplayCount)
    }

    @Test
    fun enabledSkipSuppressesOptionalPromptUntilExpiry() {
        var snapshot = OptionalUpdatePreferenceSnapshot()
        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(snapshot, currentVersionCode, 20L)
        repeat(3) {
            snapshot = OptionalUpdatePreferenceStateMachine.onPromptDisplayed(snapshot, currentVersionCode, 20L)
        }
        snapshot = OptionalUpdatePreferenceStateMachine.onSkipToggleChanged(
            snapshot = snapshot,
            currentVersionCode = currentVersionCode,
            enabled = true,
        )

        assertTrue(
            OptionalUpdatePreferenceStateMachine.shouldSuppressOptionalPrompt(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                latestVersionCode = 20L,
            ),
        )

        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(snapshot, currentVersionCode, 22L)
        assertTrue(
            OptionalUpdatePreferenceStateMachine.shouldSuppressOptionalPrompt(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                latestVersionCode = 22L,
            ),
        )

        snapshot = OptionalUpdatePreferenceStateMachine.onOptionalUpdateSeen(snapshot, currentVersionCode, 23L)
        val state = OptionalUpdatePreferenceStateMachine.toState(snapshot, currentVersionCode)

        assertFalse(state.skipOptionalPrompts)
        assertFalse(state.skipOptionalUpdateAvailable)
        assertFalse(
            OptionalUpdatePreferenceStateMachine.shouldSuppressOptionalPrompt(
                snapshot = snapshot,
                currentVersionCode = currentVersionCode,
                latestVersionCode = 23L,
            ),
        )
    }
}
