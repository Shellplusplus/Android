package com.shell.liangyi.ui.terminal

enum class RemoteTerminalResultKind {
    Idle,
    Waiting,
    Success,
    Error,
}

enum class RemoteTerminalValidationError {
    Empty,
    ProtectedIpc,
    NestedScript,
}

data class RemoteTerminalQuickCommand(
    val command: String,
    val description: String,
    val dangerous: Boolean = false,
)

data class RemoteTerminalCommandCategory(
    val title: String,
    val summary: String,
    val commands: List<RemoteTerminalQuickCommand>,
)

data class RemoteTerminalUiState(
    val input: String = "",
    val lastCommand: String = "",
    val output: String = "连接就绪后，可以向手表发送命令。",
    val fullOutput: String = "",
    val hasResult: Boolean = false,
    val isRunning: Boolean = false,
    val resultKind: RemoteTerminalResultKind = RemoteTerminalResultKind.Idle,
    val history: List<String> = emptyList(),
    val favorites: List<String> = emptyList(),
)

object RemoteTerminalGuard {
    private val protectedPatterns = listOf(
        "cmd_request.json",
        "cmd_result.json",
        "screenshot_request.json",
        "screenshot_result.json",
        "file_request.json",
        "file_result.json",
        "bridge_state.json",
        "ipc_guard.json",
        "screenshot_history.json",
        "screenshot_preview_state.json",
        "screenshot_settings.json",
        "/data/quickapp/files/com.shell.liangyi",
        "/data/data/com.shell.liangyi",
        "internal://files/",
        "com.shell.liangyi",
    )

    private val nestedPrefixes = listOf(
        "sh ",
        "sh\t",
        "/bin/sh",
        "bash ",
        "bash\t",
        "/bin/bash",
        "busybox sh",
        "lua ",
        "lua\t",
        "/usr/bin/lua",
        "luac ",
        "python ",
        "python\t",
        "/usr/bin/python",
        "python3 ",
        "/usr/bin/python3",
        "node ",
        "node\t",
        "/usr/bin/node",
        "perl ",
        "perl\t",
        "/usr/bin/perl",
        "ruby ",
        "ruby\t",
        "/usr/bin/ruby",
        "php ",
        "php\t",
        "/usr/bin/php",
        "nohup ",
        "nohup\t",
        "setsid ",
        "setsid\t",
        "eval ",
        "eval\t",
        "exec ",
        "exec\t",
        "source ",
        "source\t",
        ". ",
    )

    private val dangerousPrefixes = RemoteTerminalCatalog.categories
        .flatMap { category -> category.commands }
        .filter { command -> command.dangerous }
        .map { command -> command.command.substringBefore(' ').lowercase() }
        .distinct()

    fun validate(command: String): RemoteTerminalValidationError? {
        val trimmed = command.trim()
        if (trimmed.isEmpty()) {
            return RemoteTerminalValidationError.Empty
        }

        val lower = trimmed.lowercase()
        if (protectedPatterns.any { lower.contains(it) } || trimmed.contains("../")) {
            return RemoteTerminalValidationError.ProtectedIpc
        }

        if (
            trimmed.contains('\n') ||
            trimmed.contains('\r') ||
            nestedPrefixes.any { lower.startsWith(it) } ||
            lower.startsWith("./") ||
            trimmed.contains('&') ||
            trimmed.contains('|') ||
            trimmed.contains(';') ||
            trimmed.contains('`') ||
            trimmed.contains("\$(")
        ) {
            return RemoteTerminalValidationError.NestedScript
        }

        return null
    }

    fun isDangerous(command: String): Boolean {
        val trimmed = command.trim().lowercase()
        if (trimmed.isBlank()) {
            return false
        }
        return dangerousPrefixes.any { prefix ->
            trimmed == prefix || trimmed.startsWith("$prefix ")
        }
    }
}

object RemoteTerminalCatalog {
    val categories: List<RemoteTerminalCommandCategory> = listOf(
        RemoteTerminalCommandCategory(
            title = "模板命令",
            summary = "手表端首页默认提供的常用命令",
            commands = listOf(
                RemoteTerminalQuickCommand("ls -l /", "查看根目录内容"),
                RemoteTerminalQuickCommand("ls -la /data", "查看 /data 目录详细信息"),
                RemoteTerminalQuickCommand("ps", "查看当前进程"),
                RemoteTerminalQuickCommand("free", "查看内存占用"),
                RemoteTerminalQuickCommand("df", "查看存储占用"),
                RemoteTerminalQuickCommand("uname -a", "查看系统信息"),
                RemoteTerminalQuickCommand("dmesg", "查看内核日志"),
                RemoteTerminalQuickCommand("uptime", "查看运行时长"),
                RemoteTerminalQuickCommand("ifconfig", "查看网络配置"),
                RemoteTerminalQuickCommand("help", "查看可用命令"),
            ),
        ),
        RemoteTerminalCommandCategory(
            title = "文件",
            summary = "文件与目录相关命令",
            commands = listOf(
                RemoteTerminalQuickCommand("ls", "列出目录内容"),
                RemoteTerminalQuickCommand("cat", "查看文件内容"),
                RemoteTerminalQuickCommand("cp", "复制文件"),
                RemoteTerminalQuickCommand("mv", "移动文件"),
                RemoteTerminalQuickCommand("rm", "删除文件", dangerous = true),
                RemoteTerminalQuickCommand("mkdir", "创建目录"),
                RemoteTerminalQuickCommand("pwd", "显示当前路径"),
                RemoteTerminalQuickCommand("dd", "按块读写数据", dangerous = true),
            ),
        ),
        RemoteTerminalCommandCategory(
            title = "系统",
            summary = "系统状态与控制命令",
            commands = listOf(
                RemoteTerminalQuickCommand("uname", "查看系统名称"),
                RemoteTerminalQuickCommand("uptime", "查看运行时长"),
                RemoteTerminalQuickCommand("date", "查看当前时间"),
                RemoteTerminalQuickCommand("dmesg", "查看系统日志"),
                RemoteTerminalQuickCommand("free", "查看内存占用"),
                RemoteTerminalQuickCommand("reboot", "重启设备", dangerous = true),
            ),
        ),
        RemoteTerminalCommandCategory(
            title = "进程",
            summary = "进程管理命令",
            commands = listOf(
                RemoteTerminalQuickCommand("ps", "查看当前进程"),
                RemoteTerminalQuickCommand("sleep", "延时命令"),
                RemoteTerminalQuickCommand("kill", "结束进程", dangerous = true),
            ),
        ),
        RemoteTerminalCommandCategory(
            title = "网络",
            summary = "网络排查命令",
            commands = listOf(
                RemoteTerminalQuickCommand("ifconfig", "查看网络配置"),
                RemoteTerminalQuickCommand("ping", "测试网络连通性"),
                RemoteTerminalQuickCommand("curl", "发起网络请求"),
                RemoteTerminalQuickCommand("nslookup", "查询域名解析"),
            ),
        ),
    )
}
