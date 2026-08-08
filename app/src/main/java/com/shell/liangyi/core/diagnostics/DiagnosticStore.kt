package com.shell.liangyi.core.diagnostics

import android.content.Context
import android.util.Log
import com.shell.liangyi.util.AtomicFileWriter
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import org.json.JSONArray
import java.io.File

internal class DiagnosticStore(context: Context) {
    companion object {
        private const val TAG = "DiagnosticStore"
        private const val MAX_EVENTS = 200
        private const val RETENTION_MS = 7L * 24 * 60 * 60 * 1000
    }

    private val directory = File(context.filesDir, "diagnostics").apply { mkdirs() }
    private val eventsFile = File(directory, "events.json")
    private val lock = Any()
    private val _events = MutableStateFlow(loadEvents())
    val events: StateFlow<List<DiagnosticEvent>> = _events.asStateFlow()

    fun append(event: DiagnosticEvent) {
        synchronized(lock) {
            val cutoff = System.currentTimeMillis() - RETENTION_MS
            val updated = (listOf(event) + _events.value)
                .asSequence()
                .filter { it.timestamp >= cutoff }
                .distinctBy { it.id }
                .take(MAX_EVENTS)
                .toList()
            _events.value = updated
            persist(updated)
        }
    }

    fun clear() {
        synchronized(lock) {
            _events.value = emptyList()
            persist(emptyList())
        }
    }

    fun snapshot(): List<DiagnosticEvent> = _events.value

    private fun loadEvents(): List<DiagnosticEvent> {
        if (!eventsFile.exists()) return emptyList()
        return try {
            val json = JSONArray(eventsFile.readText(Charsets.UTF_8))
            val cutoff = System.currentTimeMillis() - RETENTION_MS
            buildList {
                for (index in 0 until json.length()) {
                    val event = diagnosticEventFromJson(json.getJSONObject(index))
                    if (event.timestamp >= cutoff && event.id.isNotBlank()) add(event)
                }
            }.sortedByDescending { it.timestamp }.take(MAX_EVENTS)
        } catch (error: Exception) {
            Log.e(TAG, "Failed to load diagnostic events", error)
            emptyList()
        }
    }

    private fun persist(events: List<DiagnosticEvent>) {
        try {
            val json = JSONArray()
            events.forEach { json.put(it.toJson()) }
            AtomicFileWriter.writeText(eventsFile, json.toString())
        } catch (error: Exception) {
            Log.e(TAG, "Failed to persist diagnostic events", error)
        }
    }
}
