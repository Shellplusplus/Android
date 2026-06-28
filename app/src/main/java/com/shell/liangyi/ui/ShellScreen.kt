package com.shell.liangyi.ui

import android.content.Intent
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import android.net.Uri
import androidx.navigation.compose.rememberNavController
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import com.shell.liangyi.ui.index.IndexScreen
import com.shell.liangyi.ui.bluetooth.BluetoothScreen
import com.shell.liangyi.ui.fetch.FetchScreen
import com.shell.liangyi.ui.screenshot.ScreenshotDetailScreen
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.components.LiquidGlassUpdateDialog
import com.shell.liangyi.ui.settings.SettingsScreen
import com.shell.liangyi.ui.components.ShellBackScaffold
import com.shell.liangyi.ui.theme.ShellTheme

object Routes {
    const val INDEX = "index"
    const val BLUETOOTH = "bluetooth"
    const val FETCH = "fetch"
    const val TERMINAL = "terminal"
    const val SCREENSHOT_DETAIL = "screenshot_detail/{shotId}"
    const val ABOUT = "about"
    const val SETTINGS = "settings"

    fun screenshotDetail(shotId: String) = "screenshot_detail/$shotId"
}

@Composable
fun ShellScreen(shellViewModel: ShellViewModel) {
    val navController = rememberNavController()
    val context = LocalContext.current
    val configuration = LocalConfiguration.current
    val density = LocalDensity.current
    val windowWidth = (configuration.screenWidthDp * density.density).toInt()
    val updatePrompt by shellViewModel.updatePrompt.collectAsState()

    LaunchedEffect(Unit) {
        shellViewModel.checkForUpdates(manual = false)
    }

    LaunchedEffect(Unit) {
        shellViewModel.updateMessages.collect { message ->
            android.widget.Toast.makeText(context, message, android.widget.Toast.LENGTH_SHORT).show()
        }
    }

    Box(modifier = Modifier.fillMaxSize()) {
        NavHost(
            navController = navController,
            startDestination = Routes.INDEX,
            enterTransition = { AnimTools.enterTransition(windowWidth) },
            exitTransition = { AnimTools.exitTransition(windowWidth) },
            popEnterTransition = { AnimTools.popEnterTransition(windowWidth) },
            popExitTransition = { AnimTools.popExitTransition(windowWidth) }
        ) {
            composable(Routes.INDEX) {
                IndexScreen(navController, shellViewModel)
            }
            composable(Routes.BLUETOOTH) {
                BluetoothScreen(navController, shellViewModel)
            }
            composable(Routes.FETCH) {
                FetchScreen(navController, shellViewModel)
            }
            composable(Routes.TERMINAL) {
                PlaceholderScreen("远程终端", "远程终端功能开发中", navController)
            }
            composable(Routes.SCREENSHOT_DETAIL) { backStackEntry ->
                val rawShotId = backStackEntry.arguments?.getString("shotId") ?: "0"
                val shotId = Uri.decode(rawShotId)
                ScreenshotDetailScreen(shotId, navController, shellViewModel)
            }
            composable(Routes.ABOUT) {
                AboutScreen(navController)
            }
            composable(Routes.SETTINGS) {
                SettingsScreen(navController, shellViewModel)
            }
        }

        updatePrompt?.let { prompt ->
            LiquidGlassUpdateDialog(
                prompt = prompt,
                onDismiss = { shellViewModel.dismissUpdatePrompt() },
                onConfirm = {
                    context.startActivity(
                        Intent(Intent.ACTION_VIEW, Uri.parse(prompt.info.downloadUrl)).apply {
                            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        }
                    )
                    if (!prompt.mandatory) {
                        shellViewModel.dismissUpdatePrompt()
                    }
                }
            )
        }
    }
}

@Composable
private fun PlaceholderScreen(title: String, subtitle: String, navController: NavHostController) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors
    ShellBackScaffold(
        title = title,
        onBack = { navController.popBackStack() }
    ) { innerPadding ->
        Column(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
            Spacer(modifier = Modifier.height(13.dp))
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 11.dp)
                    .height(56.dp),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface
                ),
                cornerRadius = 15.dp
            ) {
                Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                    Text(
                        text = subtitle,
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Medium,
                        color = shellColors.secondaryText
                    )
                }
            }
        }
    }
}
