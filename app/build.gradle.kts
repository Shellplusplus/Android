import java.util.Properties

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
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
    compileSdk = 34

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
        targetSdk = 34
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
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    kotlinOptions {
        jvmTarget = "11"
    }

    buildFeatures {
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.5.1"
    }
}

dependencies {
    // 小米穿戴 SDK（本地 aar，参考 varclass 的接入方式）
    implementation(fileTree(mapOf("dir" to "libs", "include" to listOf("*.aar", "*.jar"))))

    implementation(libs.androidx.appcompat)
    implementation(libs.androidx.core.ktx)
    implementation(libs.material)
    implementation(libs.kotlinx.coroutines.android)
    implementation(libs.coil.compose)
    implementation(libs.androidx.lifecycle.runtime.ktx)
    implementation(libs.androidx.lifecycle.viewmodel.ktx)
    implementation(libs.androidx.activity.compose)

    // Compose
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.ui.tooling.preview)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.lifecycle.viewmodel.compose)
    debugImplementation(libs.androidx.compose.ui.tooling)

    testImplementation(libs.junit)
    androidTestImplementation(libs.androidx.espresso.core)
    androidTestImplementation(libs.androidx.junit)
}
