package com.shell.liangyi.ui.ai

enum class AiAuthorizedFeatureMode(val storageValue: String) {
    RemoteTerminal("remote_terminal"),
    AiAssistant("ai_assistant"),
    ;

    companion object {
        fun fromStorage(value: String?): AiAuthorizedFeatureMode {
            return entries.firstOrNull { it.storageValue == value } ?: AiAssistant
        }
    }
}
