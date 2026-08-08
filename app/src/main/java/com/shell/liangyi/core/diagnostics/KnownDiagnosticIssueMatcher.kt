package com.shell.liangyi.core.diagnostics

internal object KnownDiagnosticIssueMatcher {
    private const val LOW_STORAGE_THRESHOLD_BYTES = 128L * 1024 * 1024

    fun match(event: DiagnosticEvent): KnownDiagnosticIssue? {
        val category = event.category.lowercase()
        val code = event.code.lowercase()
        val summary = event.summary.lowercase()
        val exceptionType = event.exceptionType.lowercase()
        val searchable = "$code $summary $exceptionType"

        if (
            event.environment.freeStorageBytes in 1 until LOW_STORAGE_THRESHOLD_BYTES ||
            listOf("insufficient_space", "enospc", "no space left", "空间不足").any(searchable::contains)
        ) {
            return KnownDiagnosticIssue.StorageSpaceLow
        }

        if (
            event.environment.networkVpn &&
            (category == "app_update" || category == "screenshot_transfer")
        ) {
            return KnownDiagnosticIssue.VpnInterference
        }

        return when {
            category == "screenshot" && code in setOf(
                "invalidimage",
                "sourcemissing",
                "compositefailed",
            ) -> KnownDiagnosticIssue.ScreenshotDamaged

            category == "screenshot" && code in setOf(
                "storageunavailable",
                "mediastorefailure",
                "savefailed",
            ) -> KnownDiagnosticIssue.ScreenshotSaveFailed

            category == "screenshot_transfer" && code == "server_start_failed" ->
                KnownDiagnosticIssue.LanTransferUnavailable

            category == "screenshot_transfer" && code == "payload_persist_failed" ->
                KnownDiagnosticIssue.ScreenshotSaveFailed

            category == "screenshot_transfer" && code in setOf(
                "transfer_failed",
                "message_handle_failed",
            ) -> KnownDiagnosticIssue.ScreenshotTransferInterrupted

            category == "wear_connection" && listOf(
                "permission",
                "denied",
                "权限",
                "拒绝",
            ).any(searchable::contains) -> KnownDiagnosticIssue.NearbyDevicePermission

            category == "wear_connection" -> KnownDiagnosticIssue.WatchDisconnected

            category == "remote_tool" && code == "request_failed" ->
                KnownDiagnosticIssue.WatchDisconnected

            category == "file_transfer" && code in setOf(
                "destination_open_failed",
                "write_failed",
            ) -> KnownDiagnosticIssue.FileSaveFailed

            category == "file_transfer" -> KnownDiagnosticIssue.ScreenshotTransferInterrupted

            category == "app_update" && code in setOf(
                "update_check_failed",
                "update_download_failed",
            ) -> KnownDiagnosticIssue.UpdateNetworkFailed

            category == "app_update" && code == "installer_launch_failed" ->
                KnownDiagnosticIssue.UpdateInstallBlocked

            category == "diagnostic_export" && code == "export_failed" ->
                KnownDiagnosticIssue.DiagnosticExportFailed

            category == "process_exit" && code in setOf(
                "low_memory",
                "excessive_resource_usage",
            ) -> KnownDiagnosticIssue.LowMemory

            category == "app_crash" && "outofmemory" in searchable ->
                KnownDiagnosticIssue.LowMemory

            category == "process_exit" && code == "anr" ->
                KnownDiagnosticIssue.AppNotResponding

            else -> null
        }
    }
}
