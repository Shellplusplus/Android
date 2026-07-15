package com.shell.liangyi.data

import android.content.Context
import com.shell.liangyi.model.ChatMessage
import com.shell.liangyi.model.Conversation
import com.shell.liangyi.model.ExecState
import com.shell.liangyi.util.AtomicFileWriter
import org.json.JSONArray
import org.json.JSONObject
import java.io.File

/**
 * 对话历史纯 JSON 文件持久化：项目没有 Room/DataStore，量级也小，
 * 用 context.filesDir 下一份整体 JSON 文件即可，和 WearMessageCenter 等
 * 现有代码一样全程用 org.json。
 */
class AgentConversationStore(context: Context) {
    private val storeFile = File(context.filesDir, "agent_conversations.json")

    fun loadAll(): List<Conversation> {
        if (!storeFile.exists()) return emptyList()
        return try {
            val arr = JSONArray(storeFile.readText(Charsets.UTF_8))
            (0 until arr.length()).mapNotNull { i ->
                runCatching { conversationFromJson(arr.getJSONObject(i)) }.getOrNull()
            }
        } catch (e: Exception) {
            emptyList()
        }
    }

    fun saveAll(conversations: List<Conversation>) {
        val arr = JSONArray()
        conversations.forEach { arr.put(conversationToJson(it)) }
        runCatching {
            AtomicFileWriter.writeText(storeFile, arr.toString())
        }
    }

    private fun conversationToJson(c: Conversation): JSONObject = JSONObject().apply {
        put("id", c.id)
        put("title", c.title)
        put("createdAt", c.createdAt)
        val msgs = JSONArray()
        c.messages.forEach { msgs.put(messageToJson(it)) }
        put("messages", msgs)
    }

    private fun conversationFromJson(o: JSONObject): Conversation {
        val msgsArr = o.optJSONArray("messages") ?: JSONArray()
        val messages = (0 until msgsArr.length()).map { messageFromJson(msgsArr.getJSONObject(it)) }
        return Conversation(
            id = o.getString("id"),
            title = o.optString("title", ""),
            createdAt = o.optLong("createdAt", 0L),
            messages = messages
        )
    }

    private fun messageToJson(m: ChatMessage): JSONObject = JSONObject().apply {
        put("id", m.id)
        put("role", m.role)
        put("content", m.content)
        put("timestamp", m.timestamp)
        put("execCommand", m.execCommand)
        put("execState", m.execState.name)
        put("execStdout", m.execStdout)
        put("execStderr", m.execStderr)
    }

    private fun optNullableString(o: JSONObject, key: String): String? =
        if (o.has(key) && !o.isNull(key)) o.optString(key) else null

    private fun messageFromJson(o: JSONObject): ChatMessage = ChatMessage(
        id = o.getString("id"),
        role = o.getString("role"),
        content = o.optString("content", ""),
        timestamp = o.optLong("timestamp", 0L),
        execCommand = optNullableString(o, "execCommand"),
        execState = runCatching { ExecState.valueOf(o.optString("execState", "NONE")) }.getOrDefault(ExecState.NONE),
        execStdout = optNullableString(o, "execStdout"),
        execStderr = optNullableString(o, "execStderr")
    )
}
