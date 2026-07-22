package com.shell.liangyi.security.ai

object AiLicenseRegistryPolicy {
    fun validateRegistryFreshness(
        registry: AiLicenseRegistry,
        license: AiLicense,
        lastVerifiedServerMs: Long,
    ): String? {
        if (registry.generatedAt <= 0L) return "授权清单时间无效"
        if (registry.generatedAt < license.issuedAt) return "授权清单早于授权签发时间"
        if (lastVerifiedServerMs > 0L && registry.generatedAt < lastVerifiedServerMs) {
            return "授权清单早于上次验证时间"
        }
        if (registry.licenses.map { it.licenseId }.distinct().size != registry.licenses.size) {
            return "授权清单包含重复授权 ID"
        }
        return null
    }
}
