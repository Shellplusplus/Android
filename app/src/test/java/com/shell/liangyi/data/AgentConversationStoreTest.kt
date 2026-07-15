package com.shell.liangyi.data

import android.content.Context
import android.content.ContextWrapper
import com.shell.liangyi.model.ChatMessage
import com.shell.liangyi.model.Conversation
import com.shell.liangyi.model.ExecState
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.rules.TemporaryFolder
import java.io.File

class AgentConversationStoreTest {
    @get:Rule
    val tempFolder = TemporaryFolder()

    @Test
    fun saveAllPersistsConversationsWithExecMetadata() {
        val store = AgentConversationStore(tempContext())
        val conversation = Conversation(
            id = "chat-1",
            title = "设备检查",
            createdAt = 123L,
            messages = listOf(
                ChatMessage(
                    id = "msg-1",
                    role = "user",
                    content = "检查设备",
                    timestamp = 124L,
                ),
                ChatMessage(
                    id = "msg-2",
                    role = "exec",
                    content = "执行命令",
                    timestamp = 125L,
                    execCommand = "echo ok",
                    execState = ExecState.DONE,
                    execStdout = "ok",
                    execStderr = "",
                ),
            ),
        )

        store.saveAll(listOf(conversation))

        assertEquals(listOf(conversation), store.loadAll())
    }

    @Test
    fun loadAllReturnsEmptyListForCorruptJson() {
        val context = tempContext()
        File(context.filesDir, "agent_conversations.json").writeText("{broken", Charsets.UTF_8)
        val store = AgentConversationStore(context)

        assertTrue(store.loadAll().isEmpty())
    }

    private fun tempContext(): Context {
        val filesDir = tempFolder.newFolder("files")
        return object : ContextWrapper(null) {
            override fun getFilesDir(): File = filesDir
        }
    }
}
