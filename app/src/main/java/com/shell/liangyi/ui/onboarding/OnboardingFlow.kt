package com.shell.liangyi.ui.onboarding

import android.graphics.PathMeasure
import android.graphics.RectF
import androidx.activity.compose.BackHandler
import androidx.activity.compose.PredictiveBackHandler
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.RadioButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawWithContent
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.graphics.nativeCanvas
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalConfiguration
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.shell.liangyi.R
import com.shell.liangyi.core.onboarding.GitHubProxyBenchmarkResult
import com.shell.liangyi.core.onboarding.GitHubProxyBenchmarkUiState
import com.shell.liangyi.core.onboarding.GitHubProxySources
import com.shell.liangyi.core.onboarding.GitHubUrlResolver
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.components.ShellRootTabScaffold
import com.shell.liangyi.ui.settings.SettingsTabScreen
import com.shell.liangyi.ui.theme.ShellTheme
import kotlinx.coroutines.launch
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import kotlin.coroutines.cancellation.CancellationException
import kotlin.math.absoluteValue
import android.graphics.Paint as AndroidPaint
import android.graphics.Path as AndroidPath

private const val OnboardingPageCount = 5
private val FloatingPagePillWidth = 69.dp
private val FloatingSummaryVerticalPadding = 13.dp
private val FloatingSummaryLineHeight = 18.sp
private val FloatingSharedControlHeight = 44.dp
private val FloatingSummaryMinWidth = 168.dp
private val FloatingSummaryMaxWidth = 360.dp

@Composable
fun OnboardingFlow(
    shellViewModel: ShellViewModel,
) {
    val shellColors = ShellTheme.colors
    val selectedSourceId by shellViewModel.selectedGitHubProxySourceId.collectAsState()
    val customBaseUrl by shellViewModel.customGitHubProxyBaseUrl.collectAsState()
    val benchmarkState by shellViewModel.gitHubProxyBenchmarkState.collectAsState()
    val pagerState = rememberPagerState(
        initialPage = 0,
        pageCount = { OnboardingPageCount },
    )
    val scope = rememberCoroutineScope()
    val density = LocalDensity.current
    val isCustomSelected = selectedSourceId == GitHubProxySources.custom.id
    val canContinueFromProxyPage = !isCustomSelected ||
        GitHubUrlResolver.normalizeCustomBaseUrl(customBaseUrl).isNotBlank()
    val canNavigateBack = pagerState.currentPage > 0
    var predictiveBackProgress by remember { mutableFloatStateOf(0f) }
    val pageProgress = (((pagerState.currentPage + pagerState.currentPageOffsetFraction)
        .coerceIn(0f, (OnboardingPageCount - 1).toFloat())) + 1f) / OnboardingPageCount.toFloat()
    val animatedPageProgress by animateFloatAsState(
        targetValue = pageProgress.coerceIn(0f, 1f),
        animationSpec = tween(durationMillis = 220),
        label = "onboarding_page_progress",
    )
    val pageSummary = when (pagerState.currentPage) {
        0 -> stringResource(R.string.onboarding_page_summary_welcome)
        1 -> stringResource(R.string.onboarding_page_summary_proxy)
        2 -> stringResource(R.string.onboarding_page_summary_settings)
        3 -> stringResource(R.string.onboarding_page_summary_about)
        else -> stringResource(R.string.onboarding_page_summary_end)
    }

    fun navigateToPage(page: Int) {
        scope.launch {
            pagerState.animateScrollToPage(
                page = page,
                animationSpec = tween(
                    durationMillis = 360,
                    easing = FastOutSlowInEasing,
                ),
            )
        }
    }

    fun navigateToPreviousPage() {
        if (!canNavigateBack) return
        navigateToPage((pagerState.currentPage - 1).coerceAtLeast(0))
    }

    LaunchedEffect(pagerState.currentPage, benchmarkState.results, benchmarkState.isRunning) {
        if (
            pagerState.currentPage == 1 &&
            benchmarkState.results.isEmpty() &&
            !benchmarkState.isRunning
        ) {
            shellViewModel.runGitHubProxyBenchmark()
        }
    }

    BackHandler(enabled = canNavigateBack) {
        navigateToPreviousPage()
    }

    PredictiveBackHandler(enabled = canNavigateBack) { progress ->
        try {
            progress.collect { backEvent ->
                predictiveBackProgress = backEvent.progress
            }
            predictiveBackProgress = 0f
            navigateToPreviousPage()
        } catch (_: CancellationException) {
            predictiveBackProgress = 0f
        }
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(shellColors.pageBackground)
            .windowInsetsPadding(WindowInsets.safeDrawing),
    ) {
        HorizontalPager(
            state = pagerState,
            userScrollEnabled = false,
            beyondViewportPageCount = OnboardingPageCount - 1,
            modifier = Modifier
                .fillMaxSize()
                .graphicsLayer {
                    val shiftPx = with(density) { 42.dp.toPx() } * predictiveBackProgress
                    translationX = shiftPx
                    scaleX = 1f - 0.035f * predictiveBackProgress
                    scaleY = 1f - 0.035f * predictiveBackProgress
                    alpha = 1f - 0.08f * predictiveBackProgress
                },
        ) { page ->
            val pageOffset = ((pagerState.currentPage - page) + pagerState.currentPageOffsetFraction)
                .absoluteValue
            val alpha = lerpFloat(0.8f, 1f, 1f - pageOffset.coerceIn(0f, 1f))
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .graphicsLayer {
                        this.alpha = alpha
                    },
            ) {
                when (page) {
                    0 -> WelcomePage()
                    1 -> ProxySelectionPage(
                        selectedSourceId = selectedSourceId,
                        customBaseUrl = customBaseUrl,
                        benchmarkState = benchmarkState,
                        onSelectSource = { sourceId ->
                            shellViewModel.selectGitHubProxy(sourceId)
                        },
                        onCustomBaseUrlChange = { value ->
                            shellViewModel.updateCustomGitHubProxyBaseUrl(value)
                        },
                        onRetest = {
                            shellViewModel.runGitHubProxyBenchmark(resetManualSelection = true)
                        },
                    )
                    2 -> SettingsTabScreen(
                        shellViewModel = shellViewModel,
                        bottomContentPadding = 154.dp,
                        previewMode = false,
                        showRestartOnboardingEntry = false,
                    )
                    3 -> AboutScreen(
                        showBackButton = false,
                        bottomContentPadding = 154.dp,
                        previewMode = false,
                    )
                    else -> EndPage()
                }
            }
        }

        FloatingOnboardingBar(
            pageIndex = pagerState.currentPage,
            totalPages = OnboardingPageCount,
            progress = animatedPageProgress,
            summary = pageSummary,
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(end = 18.dp, bottom = 18.dp)
                .navigationBarsPadding(),
            onNext = {
                if (pagerState.currentPage == 1 && !canContinueFromProxyPage) {
                    return@FloatingOnboardingBar
                }
                if (pagerState.currentPage >= OnboardingPageCount - 1) {
                    shellViewModel.completeOnboarding()
                } else {
                    navigateToPage(pagerState.currentPage + 1)
                }
            },
        )
    }
}

@Composable
private fun WelcomePage() {
    val shellColors = ShellTheme.colors

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 28.dp, vertical = 32.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.Start,
        verticalArrangement = Arrangement.Center,
    ) {
        Text(
            text = stringResource(R.string.onboarding_title),
            fontSize = 30.sp,
            fontWeight = FontWeight.Bold,
            color = MiuixTheme.colorScheme.onSurface,
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            text = stringResource(R.string.onboarding_subtitle),
            fontSize = 16.sp,
            lineHeight = 24.sp,
            color = shellColors.secondaryText,
        )
        Spacer(modifier = Modifier.height(160.dp))
    }
}

@Composable
private fun ProxySelectionPage(
    selectedSourceId: String,
    customBaseUrl: String,
    benchmarkState: GitHubProxyBenchmarkUiState,
    onSelectSource: (String) -> Unit,
    onCustomBaseUrlChange: (String) -> Unit,
    onRetest: () -> Unit,
) {
    val shellColors = ShellTheme.colors

    ShellRootTabScaffold(title = stringResource(R.string.onboarding_proxy_title)) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(horizontal = 20.dp)
                .verticalScroll(rememberScrollState()),
        ) {
            Spacer(modifier = Modifier.height(14.dp))
            Text(
                text = stringResource(R.string.onboarding_proxy_subtitle),
                fontSize = 13.sp,
                lineHeight = 19.sp,
                color = shellColors.secondaryText,
            )
            Spacer(modifier = Modifier.height(18.dp))

            if (benchmarkState.isRunning) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(10.dp),
                ) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(18.dp),
                        strokeWidth = 2.dp,
                    )
                    Text(
                        text = stringResource(R.string.onboarding_proxy_testing),
                        fontSize = 13.sp,
                        color = shellColors.secondaryText,
                    )
                }
                Spacer(modifier = Modifier.height(14.dp))
            } else if (benchmarkState.results.isNotEmpty() && benchmarkState.fastestSourceId == null) {
                Text(
                    text = stringResource(R.string.onboarding_proxy_test_failed),
                    fontSize = 13.sp,
                    lineHeight = 18.sp,
                    color = shellColors.warning,
                )
                Spacer(modifier = Modifier.height(14.dp))
            }

            GitHubProxySources.builtInSources.forEach { source ->
                val result = benchmarkState.results.firstOrNull { it.sourceId == source.id }
                ProxySourceCard(
                    title = source.title,
                    selected = selectedSourceId == source.id,
                    isFastest = benchmarkState.fastestSourceId == source.id,
                    result = result,
                    onClick = { onSelectSource(source.id) },
                )
                Spacer(modifier = Modifier.height(10.dp))
            }

            ProxySourceCard(
                title = GitHubProxySources.custom.title,
                selected = selectedSourceId == GitHubProxySources.custom.id,
                isFastest = false,
                result = null,
                onClick = { onSelectSource(GitHubProxySources.custom.id) },
            )

            if (selectedSourceId == GitHubProxySources.custom.id) {
                Spacer(modifier = Modifier.height(12.dp))
                OutlinedTextField(
                    value = customBaseUrl,
                    onValueChange = onCustomBaseUrlChange,
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(20.dp),
                    label = {
                        androidx.compose.material3.Text(
                            stringResource(R.string.onboarding_proxy_custom_label),
                        )
                    },
                    placeholder = {
                        androidx.compose.material3.Text(
                            stringResource(R.string.onboarding_proxy_custom_hint),
                        )
                    },
                    singleLine = true,
                )
            }

            Spacer(modifier = Modifier.height(16.dp))
            OutlinedButton(
                onClick = onRetest,
                border = BorderStroke(1.dp, shellColors.primaryAction),
                modifier = Modifier.fillMaxWidth(),
            ) {
                Text(
                    text = stringResource(R.string.onboarding_proxy_retest),
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Medium,
                    color = shellColors.primaryAction,
                )
            }
            Spacer(modifier = Modifier.height(160.dp))
        }
    }
}

@Composable
private fun ProxySourceCard(
    title: String,
    selected: Boolean,
    isFastest: Boolean,
    result: GitHubProxyBenchmarkResult?,
    onClick: () -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = if (selected) {
                shellColors.primaryAction.copy(alpha = 0.12f)
            } else {
                shellColors.cardBackground
            },
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
        onClick = onClick,
        showIndication = true,
        pressFeedbackType = PressFeedbackType.Sink,
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            RadioButton(
                selected = selected,
                onClick = null,
            )
            Spacer(modifier = Modifier.width(10.dp))
            Column(modifier = Modifier.weight(1f)) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                ) {
                    Text(
                        text = title,
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Medium,
                        color = colors.onSurface,
                    )
                    if (isFastest) {
                        Box(
                            modifier = Modifier
                                .clip(RoundedCornerShape(999.dp))
                                .background(shellColors.success.copy(alpha = 0.16f))
                                .padding(horizontal = 10.dp, vertical = 4.dp),
                        ) {
                            Text(
                                text = stringResource(R.string.onboarding_proxy_fastest),
                                fontSize = 11.sp,
                                fontWeight = FontWeight.SemiBold,
                                color = shellColors.success,
                            )
                        }
                    }
                }
                if (result != null) {
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = if (result.success && result.latencyMs != null) {
                            stringResource(R.string.onboarding_proxy_latency, result.latencyMs)
                        } else {
                            result.errorMessage ?: "Unavailable"
                        },
                        fontSize = 12.sp,
                        color = if (result.success) {
                            shellColors.secondaryText
                        } else {
                            shellColors.warning
                        },
                    )
                }
            }
        }
    }
}

@Composable
private fun EndPage() {
    val shellColors = ShellTheme.colors

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 28.dp, vertical = 32.dp)
            .verticalScroll(rememberScrollState()),
        horizontalAlignment = Alignment.Start,
        verticalArrangement = Arrangement.Center,
    ) {
        Text(
            text = stringResource(R.string.onboarding_end_title),
            fontSize = 30.sp,
            fontWeight = FontWeight.Bold,
            color = MiuixTheme.colorScheme.onSurface,
        )
        Spacer(modifier = Modifier.height(12.dp))
        Text(
            text = stringResource(R.string.onboarding_end_subtitle),
            fontSize = 16.sp,
            lineHeight = 24.sp,
            color = shellColors.secondaryText,
        )
        Spacer(modifier = Modifier.height(160.dp))
    }
}

@Composable
private fun FloatingOnboardingBar(
    pageIndex: Int,
    totalPages: Int,
    progress: Float,
    summary: String,
    modifier: Modifier = Modifier,
    onNext: () -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val configuration = LocalConfiguration.current
    val density = LocalDensity.current
    val textMeasurer = rememberTextMeasurer()
    val summaryTextStyle = remember(shellColors.secondaryText) {
        TextStyle(
            fontSize = 13.sp,
            lineHeight = FloatingSummaryLineHeight,
            color = shellColors.secondaryText,
        )
    }
    val summaryPillMaxWidth = remember(configuration.screenWidthDp) {
        (configuration.screenWidthDp.dp - 36.dp)
            .coerceAtLeast(FloatingSummaryMinWidth)
            .coerceAtMost(FloatingSummaryMaxWidth)
    }
    val summaryPillWidth = remember(
        summary,
        density,
        textMeasurer,
        summaryTextStyle,
        summaryPillMaxWidth,
    ) {
        with(density) {
            (
                textMeasurer.measure(
                    text = AnnotatedString(summary),
                    style = summaryTextStyle,
                    maxLines = 1,
                ).size.width.toDp() + 36.dp
            ).coerceIn(FloatingSummaryMinWidth, summaryPillMaxWidth)
        }
    }

    Column(
        modifier = modifier.wrapContentWidth(),
        horizontalAlignment = Alignment.End,
        verticalArrangement = Arrangement.spacedBy(10.dp),
    ) {
        Row(
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            ProgressOutlinePill(
                progress = progress,
                modifier = Modifier.size(
                    width = FloatingPagePillWidth,
                    height = FloatingSharedControlHeight,
                ),
            ) {
                Text(
                    text = "${pageIndex + 1}/$totalPages",
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                )
            }

            Box(
                modifier = Modifier
                    .shadow(
                        elevation = 12.dp,
                        shape = CircleShape,
                        ambientColor = Color.Black.copy(alpha = 0.15f),
                        spotColor = Color.Black.copy(alpha = 0.15f),
                    )
                    .size(FloatingSharedControlHeight)
                    .clip(CircleShape)
                    .background(shellColors.primaryAction)
                    .clickable(onClick = onNext),
                contentAlignment = Alignment.Center,
            ) {
                Text(
                    text = "→",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                )
            }
        }


        Card(
            modifier = Modifier
                .width(summaryPillWidth),
            colors = CardColors(
                color = shellColors.cardBackground.copy(alpha = 0.96f),
                contentColor = colors.onSurface,
            ),
            cornerRadius = 999.dp,
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 18.dp, vertical = FloatingSummaryVerticalPadding),
                contentAlignment = Alignment.CenterEnd,
            ) {
                Text(
                    text = summary,
                    fontSize = 13.sp,
                    lineHeight = FloatingSummaryLineHeight,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                    textAlign = TextAlign.End,
                    color = shellColors.secondaryText,
                )
            }
        }
    }
}

@Composable
private fun ProgressOutlinePill(
    progress: Float,
    modifier: Modifier = Modifier,
    content: @Composable BoxScope.() -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val strokeWidth = with(LocalDensity.current) { 3.dp.toPx() }
    val progressColor = shellColors.primaryAction
    val trackColor = shellColors.primaryAction.copy(alpha = 0.14f)

    Box(
        modifier = modifier
            .height(FloatingSharedControlHeight)
            .shadow(
                elevation = 12.dp,
                shape = RoundedCornerShape(999.dp),
                ambientColor = Color.Black.copy(alpha = 0.12f),
                spotColor = Color.Black.copy(alpha = 0.12f),
            )
            .clip(RoundedCornerShape(999.dp))
            .background(shellColors.cardBackground.copy(alpha = 0.96f))
            .drawWithContent {
                drawRoundRect(
                    color = trackColor,
                    cornerRadius = CornerRadius(size.height / 2f, size.height / 2f),
                    style = Stroke(width = strokeWidth),
                )
                drawContent()

                val rect = RectF(
                    strokeWidth / 2f,
                    strokeWidth / 2f,
                    size.width - strokeWidth / 2f,
                    size.height - strokeWidth / 2f,
                )
                val radius = rect.height() / 2f
                val androidPath = AndroidPath().apply {
                    addRoundRect(rect, radius, radius, AndroidPath.Direction.CW)
                }
                val measuredPath = PathMeasure(androidPath, false)
                val segmentPath = AndroidPath()
                measuredPath.getSegment(
                    0f,
                    measuredPath.length * progress.coerceIn(0f, 1f),
                    segmentPath,
                    true,
                )
                val paint = AndroidPaint().apply {
                    isAntiAlias = true
                    this.color = progressColor.toArgb()
                    style = AndroidPaint.Style.STROKE
                    this.strokeWidth = strokeWidth
                    strokeCap = AndroidPaint.Cap.ROUND
                    strokeJoin = AndroidPaint.Join.ROUND
                }
                drawIntoCanvas { canvas ->
                    canvas.nativeCanvas.drawPath(segmentPath, paint)
                }
            },
        contentAlignment = Alignment.Center,
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 20.dp),
            contentAlignment = Alignment.Center,
            content = content,
        )
    }
}

private fun lerpFloat(start: Float, stop: Float, fraction: Float): Float {
    return start + (stop - start) * fraction
}
