// Copyright 2026, compose-miuix-ui contributors
// SPDX-License-Identifier: Apache-2.0

plugins {
    alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.kotlin.compose)
}

kotlin {
    androidTarget()

    sourceSets {
        commonMain.dependencies {
            api(libs.miuix.shader)
            implementation(libs.jetbrains.compose.foundation)
        }
    }
}

android {
    namespace = "top.yukonga.miuix.kmp.blur"
    compileSdk = 36

    defaultConfig {
        minSdk = 26
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

tasks.configureEach {
    if (name.startsWith("check") && name.endsWith("AarMetadata")) {
        enabled = false
    }
}
