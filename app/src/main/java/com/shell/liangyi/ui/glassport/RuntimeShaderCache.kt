/*
 * Adapted from AndroidLiquidGlass-kmp backdrop module.
 * Original work copyright 2025 Kyant, licensed under Apache-2.0.
 */

package com.shell.liangyi.ui.glassport

sealed interface RuntimeShaderCache {
    fun obtainRuntimeShader(key: String, shaderString: String): RuntimeShader
}

internal class RuntimeShaderCacheImpl : RuntimeShaderCache {
    private val runtimeShaders = mutableMapOf<String, RuntimeShader>()

    override fun obtainRuntimeShader(key: String, shaderString: String): RuntimeShader {
        return runtimeShaders.getOrPut(key) { RuntimeShader(shaderString) }
    }

    fun clear() {
        runtimeShaders.clear()
    }
}
