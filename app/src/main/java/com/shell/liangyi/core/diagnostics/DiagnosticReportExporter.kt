package com.shell.liangyi.core.diagnostics

import android.content.Context
import com.shell.liangyi.core.LogEntry
import org.json.JSONArray
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale
import java.util.TimeZone
import java.util.zip.ZipEntry
import java.util.zip.ZipOutputStream

internal object DiagnosticReportExporter {
    fun create(
        context: Context,
        events: List<DiagnosticEvent>,
        connectionLogs: List<LogEntry>,
        userNote: String,
    ): ByteArray {
        val environment = collectEnvironment(context)
        return ByteArrayOutputStream().use { bytes ->
            ZipOutputStream(bytes).use { zip ->
                zip.writeText("report.json", buildReport(environment, events).toString(2))
                zip.writeText(
                    "events.jsonl",
                    events.joinToString("\n") { it.toJson().toString() },
                )
                zip.writeText("connection.log", buildConnectionLog(connectionLogs))
                if (userNote.isNotBlank()) {
                    zip.writeText("user-note.txt", DiagnosticRedactor.text(userNote, 4_000))
                }
                zip.writeText("privacy.txt", privacyNotice())
            }
            bytes.toByteArray()
        }
    }

    private fun buildReport(
        environment: DiagnosticEnvironment,
        events: List<DiagnosticEvent>,
    ): JSONObject = JSONObject().apply {
        put("formatVersion", 1)
        put("generatedAt", System.currentTimeMillis())
        put("environment", environment.toJson())
        put("eventCount", events.size)
        put(
            "eventSummary",
            JSONObject().apply {
                DiagnosticSeverity.entries.forEach { severity ->
                    put(severity.name, events.count { it.severity == severity })
                }
            },
        )
        put("categories", JSONArray(events.map { it.category }.distinct()))
    }

    private fun buildConnectionLog(logs: List<LogEntry>): String {
        val format = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", Locale.US).apply {
            timeZone = TimeZone.getDefault()
        }
        return logs.joinToString("\n") { entry ->
            val message = DiagnosticRedactor.text(entry.message, 1_000)
            "${format.format(Date(entry.timestamp))} [${entry.direction}] ${entry.type}: $message"
        }
    }

    private fun privacyNotice(): String = """
        Shell++ 诊断报告由用户主动导出，仅保存在用户选择的位置。

        报告包含：应用和 Android 版本、设备厂商与型号、ABI、语言和时区、内存与存储概况、网络类型与可用性、结构化异常、脱敏调用栈、应用内连接传输日志。

        报告不应包含：API Key、授权令牌、IPC guard、终端命令与输出、AI 对话、文件正文、截图内容、Wi-Fi SSID/BSSID、IP、MAC、设备序列号。
    """.trimIndent()

    private fun ZipOutputStream.writeText(name: String, content: String) {
        putNextEntry(ZipEntry(name))
        write(content.toByteArray(Charsets.UTF_8))
        closeEntry()
    }
}
