import java.util.Properties

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    id("org.jetbrains.kotlin.plugin.compose")
}

val localProps = Properties().apply {
    val localPropsFile = rootDir.resolve("local.properties")
    if (localPropsFile.exists()) {
        localPropsFile.inputStream().use { load(it) }
    }
}

val localSigningKeystore = rootDir.resolve("sign/Android.jks")
val localStorePassword = localProps.getProperty("shell.storePassword") ?: ""
val localKeyAlias = localProps.getProperty("shell.keyAlias") ?: "key"
val localKeyPassword = localProps.getProperty("shell.keyPassword") ?: ""
val hasSigningCredentials = localStorePassword.isNotBlank()
    && localKeyAlias.isNotBlank()
    && localKeyPassword.isNotBlank()

if (hasSigningCredentials && !localSigningKeystore.exists()) {
    logger.warn(
        "Signing credentials are configured in local.properties, but sign/Android.jks is missing. " +
            "Gradle will fall back to the default debug keystore for local builds. " +
            "If you need Xiaomi Wear permissions or stable interconnect identity, restore the original keystore."
    )
}

val hasLocalSigningConfig = localSigningKeystore.exists() && hasSigningCredentials

android {
    namespace = "com.shell.liangyi"
    compileSdk = 36


    signingConfigs {
        create("localShellSign") {
            if (hasLocalSigningConfig) {
                storeFile = localSigningKeystore
                storePassword = localStorePassword
                keyAlias = localKeyAlias
                keyPassword = localKeyPassword
            }
        }
    }

    defaultConfig {
        applicationId = "com.shell.liangyi"
        minSdk = 26
        targetSdk = 36
        versionCode = (System.getenv("VERSION_CODE") ?: "1").toInt()
        versionName = System.getenv("VERSION_NAME") ?: "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    // "standard" 是面向用户发布的版本，不包含手环 AI agent 助手；
    // "developer" 额外编译 src/developer 下的 agent 聊天/命令桥接代码。
    // 两个 flavor 都不能加 applicationIdSuffix —— interconnect 要求手机包名
    // 与快应用 manifest.json 的 package 字段（com.shell.liangyi）严格一致。
    flavorDimensions += "tier"
    productFlavors {
        create("standard") {
            dimension = "tier"
        }
        create("developer") {
            dimension = "tier"
        }
    }

    buildTypes {
        debug {
            if (hasLocalSigningConfig) {
                signingConfig = signingConfigs.getByName("localShellSign")
            }
        }
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            optimization {
                baselineProfile {
                    // Work around AGP/profgen failures while compiling inherited
                    // library baseline profiles during release packaging.
                    ignoreFromAllExternalDependencies = true
                }
            }
            if (hasLocalSigningConfig) {
                signingConfig = signingConfigs.getByName("localShellSign")
            }
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlin {
        compilerOptions {
            jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17)
        }
    }

    buildFeatures {
        buildConfig = true
        compose = true
    }
}

// Bypass MIUIX AAR metadata check requiring compileSdk 37
tasks.configureEach {
    if (name.startsWith("check") && name.endsWith("AarMetadata")) {
        enabled = false
    }
}

dependencies {
    // AndroidX
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.androidx.lifecycle.runtime)
    implementation(libs.androidx.lifecycle.viewmodel)
    implementation(libs.androidx.activity.compose)
    implementation(libs.navigation.compose)
    implementation(libs.coroutines.core)
    implementation(libs.coroutines.android)
    implementation(libs.coil.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.material3)
    implementation("androidx.compose.material:material-icons-extended")
    implementation(libs.androidx.compose.ui.tooling.preview)
    debugImplementation(libs.androidx.compose.ui.tooling)

    implementation(libs.material)

    // Xiaomi Wearable SDK (local AAR)
    implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.aar", "*.jar"))))

    // MIUIX
    implementation(libs.miuix.ui)
    implementation(libs.miuix.blur)
    implementation(libs.miuix.preference)
    implementation(libs.miuix.icons)

    testImplementation(libs.junit)
    testImplementation("org.json:json:20240303")
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}
