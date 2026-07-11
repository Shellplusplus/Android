package com.shell.liangyi.ai

import com.shell.liangyi.model.AgentApiConfig
import com.shell.liangyi.model.ChatMessage
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.nio.charset.StandardCharsets

/**
 * 手写的 OpenAI 兼容 chat completions 客户端。
 * 项目里没有 OkHttp/Retrofit/Gson 依赖，和 WearMessageCenter/HttpScreenshotServer
 * 全程用 HttpURLConnection + org.json，避免仅为 AI 功能引入额外网络依赖。
 */
object OpenAIClient {

    class ApiException(message: String) : Exception(message)

    suspend fun chatCompletion(config: AgentApiConfig, history: List<ChatMessage>): String =
        withContext(Dispatchers.IO) {
            val base = config.baseUrl.trimEnd('/')
            val url = URL("$base/chat/completions")
            val conn = url.openConnection() as HttpURLConnection
            try {
                conn.requestMethod = "POST"
                conn.doOutput = true
                conn.connectTimeout = 20000
                conn.readTimeout = 60000
                conn.setRequestProperty("Content-Type", "application/json; charset=utf-8")
                if (config.token.isNotBlank()) {
                    conn.setRequestProperty("Authorization", "Bearer ${config.token}")
                }

                val messages = JSONArray()
                messages.put(JSONObject().put("role", "system").put("content", AgentPrompts.SYSTEM_PROMPT))
                for (m in history) {
                    messages.put(JSONObject().put("role", apiRole(m)).put("content", apiContent(m)))
                }

                val body = JSONObject()
                    .put("model", config.model)
                    .put("messages", messages)

                conn.outputStream.use { it.write(body.toString().toByteArray(StandardCharsets.UTF_8)) }

                val code = conn.responseCode
                val stream = if (code in 200..299) conn.inputStream else conn.errorStream
                val text = stream?.bufferedReader(StandardCharsets.UTF_8)?.readText().orEmpty()

                if (code !in 200..299) {
                    throw ApiException("HTTP $code: ${text.take(300)}")
                }

                val choices = JSONObject(text).optJSONArray("choices")
                    ?: throw ApiException("响应缺少 choices 字段")
                if (choices.length() == 0) throw ApiException("choices 为空")
                val message = choices.getJSONObject(0).optJSONObject("message")
                    ?: throw ApiException("choice 缺少 message 字段")
                message.optString("content", "")
            } finally {
                conn.disconnect()
            }
        }

    private fun apiRole(m: ChatMessage): String = if (m.role == "exec") "user" else m.role

    private fun apiContent(m: ChatMessage): String {
        if (m.role != "exec") return m.content
        val sb = StringBuilder("[命令执行结果]\n$ ").append(m.execCommand ?: "").append('\n')
        if (!m.execStdout.isNullOrEmpty()) sb.append("stdout:\n").append(m.execStdout).append('\n')
        if (!m.execStderr.isNullOrEmpty()) sb.append("stderr:\n").append(m.execStderr).append('\n')
        if (m.execState.name == "REJECTED") sb.append("(用户取消了这条命令，未执行)\n")
        if (m.execState.name == "FAILED") sb.append("(命令执行失败或超时)\n")
        return sb.toString()
    }
}
