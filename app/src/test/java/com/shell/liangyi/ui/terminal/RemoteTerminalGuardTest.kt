package com.shell.liangyi.ui.terminal

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class RemoteTerminalGuardTest {

    @Test
    fun validateAllowsOrdinarySingleCommand() {
        assertNull(RemoteTerminalGuard.validate("ls -la /data"))
        assertNull(RemoteTerminalGuard.validate("uname -a"))
    }

    @Test
    fun validateRejectsProtectedIpcPaths() {
        assertEquals(
            RemoteTerminalValidationError.ProtectedIpc,
            RemoteTerminalGuard.validate("cat internal://files/cmd_request.json"),
        )
        assertEquals(
            RemoteTerminalValidationError.ProtectedIpc,
            RemoteTerminalGuard.validate("ls /data/data/com.shell.liangyi"),
        )
    }

    @Test
    fun validateRejectsScriptChainingAndBackgroundExecution() {
        assertEquals(
            RemoteTerminalValidationError.NestedScript,
            RemoteTerminalGuard.validate("ls /; reboot"),
        )
        assertEquals(
            RemoteTerminalValidationError.NestedScript,
            RemoteTerminalGuard.validate("sleep 10 &"),
        )
        assertEquals(
            RemoteTerminalValidationError.NestedScript,
            RemoteTerminalGuard.validate("cat /proc/version | grep Linux"),
        )
    }

    @Test
    fun validateRejectsInteractiveInterpreterCommands() {
        assertEquals(RemoteTerminalValidationError.NestedScript, RemoteTerminalGuard.validate("sh"))
        assertEquals(RemoteTerminalValidationError.NestedScript, RemoteTerminalGuard.validate("lua"))
        assertEquals(RemoteTerminalValidationError.NestedScript, RemoteTerminalGuard.validate("python3"))
        assertEquals(RemoteTerminalValidationError.NestedScript, RemoteTerminalGuard.validate("node"))
        assertEquals(RemoteTerminalValidationError.NestedScript, RemoteTerminalGuard.validate("exec"))
    }
}
