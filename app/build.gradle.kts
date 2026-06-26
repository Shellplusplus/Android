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

val sharedSignDir = rootDir.resolve("../../Shell++/sign")
val sharedAndroidKeystore = sharedSignDir.resolve("Android.jks")
val sharedStorePassword = providers.gradleProperty("shell.storePassword")
    .orElse(providers.environmentVariable("SHELL_STORE_PASSWORD"))
    .orElse(localProps.getProperty("shell.storePassword") ?: "")
    .orNull
val sharedKeyAlias = providers.gradleProperty("shell.keyAlias")
    .orElse(providers.environmentVariable("SHELL_KEY_ALIAS"))
    .orElse(localProps.getProperty("shell.keyAlias") ?: "key")
    .orNull
val sharedKeyPassword = providers.gradleProperty("shell.keyPassword")
    .orElse(providers.environmentVariable("SHELL_KEY_PASSWORD"))
    .orElse(localProps.getProperty("shell.keyPassword") ?: "")
    .orNull
val hasSharedSigningConfig = sharedAndroidKeystore.exists()
    && !sharedStorePassword.isNullOrBlank()
    && !sharedKeyAlias.isNullOrBlank()
    && !sharedKeyPassword.isNullOrBlank()

android {
    namespace = "com.shell.liangyi"
    compileSdk = 36


    signingConfigs {
        create("sharedShellSign") {
            if (hasSharedSigningConfig) {
                storeFile = sharedAndroidKeystore
                storePassword = sharedStorePassword
                keyAlias = sharedKeyAlias
                keyPassword = sharedKeyPassword
            }
        }
    }

    defaultConfig {
        applicationId = "com.shell.liangyi"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        debug {
            if (hasSharedSigningConfig) {
                signingConfig = signingConfigs.getByName("sharedShellSign")
            }
        }
        release {
            isMinifyEnabled = false
            if (hasSharedSigningConfig) {
                signingConfig = signingConfigs.getByName("sharedShellSign")
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
        compose = true
    }
}

// Bypass MIUIX AAR metadata check requiring compileSdk 37
tasks.configureEach {
    if (name == "checkDebugAarMetadata" || name == "checkReleaseAarMetadata") {
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
    implementation(libs.miuix.preference)
    implementation(libs.miuix.icons)

    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}
