import java.util.Properties
import org.gradle.kotlin.dsl.named

@Suppress("DEPRECATION")
fun configureReleaseOptimization(buildType: com.android.build.api.dsl.ApplicationBuildType) {
    buildType.optimization {
        baselineProfile {
            // Work around AGP/profgen failures while compiling inherited
            // library baseline profiles during release packaging. AGP 8.13.2
            // still reports this ApplicationBuildType override as deprecated.
            ignoreFromAllExternalDependencies = true
        }
    }
}

plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
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

fun buildConfigString(value: String): String =
    "\"" + value.replace("\\", "\\\\").replace("\"", "\\\"") + "\""

val aiIssuerPublicKey = "IwhDUu5byrMvZSdRGtqVkx0XnHM9XAMr5yyJ7MQOSlw"
val aiLicenseRegistryUrl = "https://raw.githubusercontent.com/Shellplusplus/shellpplicense/main/registry.json"

if (aiIssuerPublicKey.isBlank()) {
    logger.warn(
        "AI license issuer public key is not configured. " +
            "Update aiIssuerPublicKey in app/build.gradle.kts."
    )
}

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

        buildConfigField("String", "AI_LICENSE_ISSUER_PUBLIC_KEY", buildConfigString(aiIssuerPublicKey))
        buildConfigField("String", "AI_LICENSE_REGISTRY_URL", buildConfigString(aiLicenseRegistryUrl))

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    // Ship one APK. The ordinary remote terminal is always available; the AI
    // assistant is gated at runtime by the signed license state.
    sourceSets["main"].java.srcDir("src/developer/java")

    buildTypes {
        debug {
            if (hasLocalSigningConfig) {
                signingConfig = signingConfigs.getByName("localShellSign")
            }
        }
        release {
            isMinifyEnabled = true
            isShrinkResources = true
            if (hasLocalSigningConfig) {
                signingConfig = signingConfigs.getByName("localShellSign")
            }
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }

    buildTypes.named<com.android.build.api.dsl.ApplicationBuildType>("release") {
        configureReleaseOptimization(this)
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

tasks.register("assembleStandardRelease") {
    group = "build"
    description = "Compatibility alias for the single release APK."
    dependsOn("assembleRelease")
}

dependencies {
    // AndroidX
    implementation(libs.androidx.core.ktx)
    implementation(libs.androidx.appcompat)
    implementation(libs.androidx.lifecycle.runtime)
    implementation(libs.androidx.lifecycle.runtime.compose)
    implementation(libs.androidx.lifecycle.viewmodel)
    implementation(libs.androidx.activity.compose)
    implementation(libs.navigation.compose)
    implementation(libs.navigationevent)
    implementation(libs.navigationevent.compose)
    implementation(libs.coroutines.core)
    implementation(libs.coroutines.android)
    implementation(libs.coil.compose)
    implementation(platform(libs.androidx.compose.bom))
    implementation(libs.androidx.compose.ui)
    implementation(libs.androidx.compose.ui.graphics)
    implementation(libs.androidx.compose.material3)
    implementation(libs.androidx.compose.material.icons.extended)
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
    implementation(libs.bouncycastle)

    testImplementation(libs.junit)
    testImplementation(libs.json)
    androidTestImplementation(libs.androidx.junit)
    androidTestImplementation(libs.androidx.espresso.core)
}
