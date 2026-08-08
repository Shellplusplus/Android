package com.shell.liangyi.core.diagnostics

import android.app.ActivityManager
import android.app.ApplicationExitInfo
import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.core.content.edit
import com.shell.liangyi.core.ConnectionState
import com.shell.liangyi.core.LogEntry
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import java.io.PrintWriter
import java.io.InputStreamReader
import java.io.StringWriter
import java.util.Locale
import java.util.TimeZone
import java.util.UUID

class DiagnosticManager private constructor(context: Context) {
    companion object {
        private const val TAG = "DiagnosticManager"
        private const val PREFS_NAME = "diagnostic_preferences"
        private const val LAST_EXIT_TIMESTAMP_KEY = "last_exit_timestamp"
        private const val LAST_ALERTED_EVENT_KEY = "last_alerted_event"

        @Volatile
        private var instance: DiagnosticManager? = null

        fun getInstance(context: Context): DiagnosticManager {
            return instance ?: synchronized(this) {
                instance ?: DiagnosticManager(context.applicationContext).also { instance = it }
            }
        }
    }

    private val appContext = context.applicationContext
    private val store = DiagnosticStore(appContext)
    private val preferences = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val _activeAlert = MutableStateFlow<DiagnosticAlert?>(null)
    val activeAlert: StateFlow<DiagnosticAlert?> = _activeAlert.asStateFlow()
    val events: StateFlow<List<DiagnosticEvent>> = store.events
    private var currentScene: String = "app_start"
    private var initialized = false

    @Synchronized
    fun initialize() {
        if (initialized) return
        initialized = true
        restorePendingCrashAlert()
        captureHistoricalExitReasons()
        installCrashHandler()
    }

    fun updateCurrentScene(scene: String) {
        currentScene = DiagnosticRedactor.text(scene.ifBlank { "unknown" }, 120)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            val activityManager = appContext.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
            runCatching {
                activityManager.setProcessStateSummary(currentScene.toByteArray(Charsets.UTF_8))
            }
        }
    }

    @Synchronized
    fun reportFailure(
        category: String,
        scene: String = currentScene,
        code: String,
        summary: String,
        throwable: Throwable? = null,
        metadata: Map<String, String> = emptyMap(),
        severity: DiagnosticSeverity = DiagnosticSeverity.Error,
        showDialog: Boolean = true,
    ): DiagnosticEvent {
        val sanitizedCategory = DiagnosticRedactor.text(category, 80)
        val sanitizedScene = DiagnosticRedactor.text(scene, 120)
        val sanitizedCode = DiagnosticRedactor.text(code, 100)
        val sanitizedSummary = DiagnosticRedactor.text(summary)
        val recentDuplicate = store.snapshot().firstOrNull { recent ->
            recent.category == sanitizedCategory &&
                recent.scene == sanitizedScene &&
                recent.code == sanitizedCode &&
                recent.summary == sanitizedSummary &&
                System.currentTimeMillis() - recent.timestamp <= 3_000L
        }
        if (recentDuplicate != null) {
            if (showDialog && _activeAlert.value == null) {
                _activeAlert.value = recentDuplicate.toAlert()
            }
            return recentDuplicate
        }
        val stack = throwable?.let {
            StringWriter().also { writer ->
                it.printStackTrace(PrintWriter(writer))
            }.toString()
        }.orEmpty()
        val event = DiagnosticEvent(
            id = UUID.randomUUID().toString(),
            timestamp = System.currentTimeMillis(),
            severity = severity,
            category = sanitizedCategory,
            scene = sanitizedScene,
            code = sanitizedCode,
            summary = sanitizedSummary,
            exceptionType = throwable?.javaClass?.name.orEmpty(),
            stackTrace = DiagnosticRedactor.stack(stack),
            environment = collectEnvironment(appContext),
            metadata = DiagnosticRedactor.metadata(metadata),
        )
        store.append(event)
        if (showDialog && _activeAlert.value == null) {
            _activeAlert.value = event.toAlert()
        }
        return event
    }

    fun dismissAlert() {
        _activeAlert.value?.let { alert ->
            preferences.edit { putString(LAST_ALERTED_EVENT_KEY, alert.eventId) }
        }
        _activeAlert.value = null
    }

    fun clear() {
        dismissAlert()
        store.clear()
    }

    fun runSelfCheck(connectionState: ConnectionState): List<DiagnosticCheckItem> {
        return DiagnosticSelfCheck.run(appContext, connectionState)
    }

    fun exportReport(logs: List<LogEntry>, userNote: String = ""): ByteArray {
        return DiagnosticReportExporter.create(
            context = appContext,
            events = store.snapshot(),
            connectionLogs = logs,
            userNote = userNote,
        )
    }

    private fun restorePendingCrashAlert() {
        val lastAlerted = preferences.getString(LAST_ALERTED_EVENT_KEY, "").orEmpty()
        val recentCrash = store.snapshot().firstOrNull {
            it.category == "app_crash" &&
                it.id != lastAlerted &&
                System.currentTimeMillis() - it.timestamp <= 24L * 60 * 60 * 1000
        }
        if (recentCrash != null) {
            _activeAlert.value = recentCrash.toAlert()
        }
    }

    private fun installCrashHandler() {
        val previousHandler = Thread.getDefaultUncaughtExceptionHandler()
        Thread.setDefaultUncaughtExceptionHandler { thread, throwable ->
            try {
                reportFailure(
                    category = "app_crash",
                    scene = currentScene,
                    code = "uncaught_exception",
                    summary = throwable.message ?: "应用发生未捕获异常",
                    throwable = throwable,
                    metadata = mapOf("thread" to thread.name),
                    severity = DiagnosticSeverity.Critical,
                    showDialog = false,
                )
            } catch (diagnosticError: Throwable) {
                Log.e(TAG, "Failed to persist uncaught exception", diagnosticError)
            } finally {
                previousHandler?.uncaughtException(thread, throwable)
            }
        }
    }

    private fun captureHistoricalExitReasons() {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.R) return
        captureHistoricalExitReasonsApi30()
    }

    @RequiresApi(Build.VERSION_CODES.R)
    private fun captureHistoricalExitReasonsApi30() {
        val activityManager = appContext.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
        val lastTimestamp = preferences.getLong(LAST_EXIT_TIMESTAMP_KEY, 0L)
        val exitReasons = runCatching {
            activityManager.getHistoricalProcessExitReasons(appContext.packageName, 0, 8)
        }.getOrElse {
            Log.w(TAG, "Failed to read historical process exits", it)
            return
        }
        val unprocessedExitReasons = exitReasons.filter { it.timestamp > lastTimestamp }
        val newestTimestamp = unprocessedExitReasons.maxOfOrNull { it.timestamp } ?: lastTimestamp
        val actionableExitReasons = unprocessedExitReasons
            .filter {
                isActionableExitReason(it.reason) &&
                    System.currentTimeMillis() - it.timestamp <= 7L * 24 * 60 * 60 * 1000
            }
            .sortedBy { it.timestamp }
        actionableExitReasons
            .forEach { exitInfo ->
                val event = DiagnosticEvent(
                    id = "exit-${exitInfo.timestamp}-${exitInfo.reason}",
                    timestamp = exitInfo.timestamp,
                    severity = if (
                        exitInfo.reason == ApplicationExitInfo.REASON_CRASH ||
                        exitInfo.reason == ApplicationExitInfo.REASON_CRASH_NATIVE ||
                        exitInfo.reason == ApplicationExitInfo.REASON_ANR
                    ) DiagnosticSeverity.Critical else DiagnosticSeverity.Warning,
                    category = "process_exit",
                    scene = processStateScene(exitInfo),
                    code = exitReasonName(exitInfo.reason),
                    summary = DiagnosticRedactor.text(
                        exitInfo.description?.takeIf { it.isNotBlank() }
                            ?: "应用进程异常退出：${exitReasonName(exitInfo.reason)}",
                    ),
                    stackTrace = if (exitInfo.reason == ApplicationExitInfo.REASON_ANR) {
                        readAnrTrace(exitInfo)
                    } else {
                        ""
                    },
                    environment = collectEnvironment(appContext),
                    metadata = DiagnosticRedactor.metadata(
                        mapOf(
                            "importance" to exitInfo.importance.toString(),
                            "pssKb" to exitInfo.pss.toString(),
                            "rssKb" to exitInfo.rss.toString(),
                            "status" to exitInfo.status.toString(),
                            "environmentCapturedAfterRestart" to "true",
                        ),
                    ),
                )
                store.append(event)
            }
        actionableExitReasons.lastOrNull()?.let { latestExit ->
            if (_activeAlert.value == null) {
                val latestEvent = store.snapshot().firstOrNull {
                    it.id == "exit-${latestExit.timestamp}-${latestExit.reason}"
                }
                if (latestEvent != null) {
                    _activeAlert.value = latestEvent.toAlert()
                }
            }
        }
        if (newestTimestamp > lastTimestamp) {
            preferences.edit { putLong(LAST_EXIT_TIMESTAMP_KEY, newestTimestamp) }
        }
    }

    @RequiresApi(Build.VERSION_CODES.R)
    private fun processStateScene(exitInfo: ApplicationExitInfo): String {
        return exitInfo.processStateSummary
            ?.toString(Charsets.UTF_8)
            ?.takeIf { it.isNotBlank() }
            ?: "previous_process"
    }

    @RequiresApi(Build.VERSION_CODES.R)
    private fun readAnrTrace(exitInfo: ApplicationExitInfo): String {
        return runCatching {
            exitInfo.traceInputStream?.use { input ->
                InputStreamReader(input, Charsets.UTF_8).use { reader ->
                    val buffer = CharArray(4_096)
                    val output = StringBuilder()
                    while (output.length < 64_000) {
                        val read = reader.read(buffer, 0, minOf(buffer.size, 64_000 - output.length))
                        if (read <= 0) break
                        output.append(buffer, 0, read)
                    }
                    DiagnosticRedactor.stack(output.toString())
                }
            }.orEmpty()
        }.getOrElse {
            Log.w(TAG, "Failed to read ANR trace", it)
            ""
        }
    }

    @RequiresApi(Build.VERSION_CODES.R)
    private fun isActionableExitReason(reason: Int): Boolean = when (reason) {
        ApplicationExitInfo.REASON_ANR,
        ApplicationExitInfo.REASON_CRASH,
        ApplicationExitInfo.REASON_CRASH_NATIVE,
        ApplicationExitInfo.REASON_EXCESSIVE_RESOURCE_USAGE,
        ApplicationExitInfo.REASON_INITIALIZATION_FAILURE,
        ApplicationExitInfo.REASON_LOW_MEMORY -> true
        else -> false
    }

    @RequiresApi(Build.VERSION_CODES.R)
    private fun exitReasonName(reason: Int): String = when (reason) {
        ApplicationExitInfo.REASON_ANR -> "anr"
        ApplicationExitInfo.REASON_CRASH -> "java_crash"
        ApplicationExitInfo.REASON_CRASH_NATIVE -> "native_crash"
        ApplicationExitInfo.REASON_EXCESSIVE_RESOURCE_USAGE -> "excessive_resource_usage"
        ApplicationExitInfo.REASON_INITIALIZATION_FAILURE -> "initialization_failure"
        ApplicationExitInfo.REASON_LOW_MEMORY -> "low_memory"
        else -> "exit_$reason"
    }

    private fun DiagnosticEvent.toAlert(): DiagnosticAlert = DiagnosticAlert(
        eventId = id,
        scene = scene,
        summary = summary,
        knownIssue = KnownDiagnosticIssueMatcher.match(this),
    )
}

@Suppress("DEPRECATION")
internal fun collectEnvironment(context: Context): DiagnosticEnvironment {
    val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
    val versionCode = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        packageInfo.longVersionCode
    } else {
        packageInfo.versionCode.toLong()
    }
    val runtime = Runtime.getRuntime()
    val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
    val capabilities = connectivityManager.activeNetwork?.let(connectivityManager::getNetworkCapabilities)
    val transports = buildList {
        if (capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) == true) add("Wi-Fi")
        if (capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) == true) add("Cellular")
        if (capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET) == true) add("Ethernet")
        if (capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_BLUETOOTH) == true) add("Bluetooth")
        if (capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_VPN) == true) add("VPN")
    }
    return DiagnosticEnvironment(
        appVersion = packageInfo.versionName.orEmpty(),
        appVersionCode = versionCode,
        androidVersion = Build.VERSION.RELEASE.orEmpty(),
        sdkInt = Build.VERSION.SDK_INT,
        manufacturer = Build.MANUFACTURER.orEmpty(),
        model = Build.MODEL.orEmpty(),
        abis = Build.SUPPORTED_ABIS.take(3).joinToString(","),
        locale = Locale.getDefault().toLanguageTag(),
        timezone = TimeZone.getDefault().id,
        network = transports.joinToString("+").ifBlank { "Offline" },
        networkValidated = capabilities?.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED) == true,
        networkMetered = capabilities != null &&
            !capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_NOT_METERED),
        networkVpn = capabilities?.hasTransport(NetworkCapabilities.TRANSPORT_VPN) == true,
        freeStorageBytes = context.filesDir.usableSpace,
        availableMemoryBytes = runtime.maxMemory() - (runtime.totalMemory() - runtime.freeMemory()),
    )
}
