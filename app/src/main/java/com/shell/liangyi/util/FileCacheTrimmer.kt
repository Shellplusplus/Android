package com.shell.liangyi.util

import java.io.File

internal object FileCacheTrimmer {
    fun trim(
        directory: File,
        maxFiles: Int,
        fileFilter: (File) -> Boolean = { true },
    ): Int {
        if (maxFiles <= 0 || !directory.exists() || !directory.isDirectory) {
            return 0
        }
        val files = directory.listFiles()
            .orEmpty()
            .filter { it.isFile }
            .filter(fileFilter)
            .sortedWith(compareByDescending<File> { it.lastModified() }.thenByDescending { it.name })
        val staleFiles = files.drop(maxFiles)
        staleFiles.forEach { it.delete() }
        return staleFiles.size
    }
}
