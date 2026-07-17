package com.shell.liangyi.ui.onboarding

import android.graphics.PathMeasure
import android.graphics.RectF
import android.widget.Toast
import androidx.activity.compose.BackHandler
import androidx.activity.compose.PredictiveBackHandler
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.WindowInsetsSides
import androidx.compose.foundation.layout.add
import androidx.compose.foundation.layout.displayCutout
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.only
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.systemBars
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.rounded.Refresh
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.ui.input.nestedscroll.nestedScroll
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.TextFieldColors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.blur
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
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.platform.LocalWindowInfo
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.shell.liangyi.R
import com.shell.liangyi.core.onboarding.GitHubProxyBenchmarkResult
import com.shell.liangyi.core.onboarding.GitHubProxyBenchmarkUiState
import com.shell.liangyi.core.onboarding.GitHubProxySources
import com.shell.liangyi.core.onboarding.GitHubUrlResolver
import com.shell.liangyi.ui.ShellViewModel
import com.shell.liangyi.ui.about.AboutScreen
import com.shell.liangyi.ui.settings.SettingsTabScreen
import com.shell.liangyi.ui.theme.ShellTheme
import kotlinx.coroutines.launch
import top.yukonga.miuix.kmp.basic.Card
import top.yukonga.miuix.kmp.basic.CardColors
import top.yukonga.miuix.kmp.basic.MiuixScrollBehavior
import top.yukonga.miuix.kmp.basic.Scaffold
import top.yukonga.miuix.kmp.basic.TopAppBar
import top.yukonga.miuix.kmp.basic.Text
import top.yukonga.miuix.kmp.theme.MiuixTheme
import top.yukonga.miuix.kmp.utils.overScrollVertical
import top.yukonga.miuix.kmp.utils.PressFeedbackType
import top.yukonga.miuix.kmp.utils.scrollEndHaptic
import kotlin.coroutines.cancellation.CancellationException
import kotlin.math.absoluteValue
import android.graphics.Paint as AndroidPaint
import android.graphics.Path as AndroidPath

private const val OnboardingPageCount = 6
private val FloatingPagePillWidth = 69.dp
private val FloatingSummaryHorizontalPadding = 18.dp
private val FloatingSummaryVerticalPadding = 13.dp
private val FloatingSummaryLineHeight = 18.sp
private val FloatingSharedControlHeight = 44.dp
private val FloatingSummaryMaxWidth = 360.dp

@Composable
fun OnboardingFlow(
    shellViewModel: ShellViewModel,
) {
    val context = LocalContext.current
    val shellColors = ShellTheme.colors
    val selectedSourceId by shellViewModel.selectedGitHubProxySourceId.collectAsStateWithLifecycle()
    val customBaseUrl by shellViewModel.customGitHubProxyBaseUrl.collectAsStateWithLifecycle()
    val benchmarkState by shellViewModel.gitHubProxyBenchmarkState.collectAsStateWithLifecycle()
    val pagerState = rememberPagerState(
        initialPage = 0,
        pageCount = { OnboardingPageCount },
    )
    val scope = rememberCoroutineScope()
    val density = LocalDensity.current
    val isCustomSelected = selectedSourceId == GitHubProxySources.custom.id
    var declarationReadProgress by remember { mutableFloatStateOf(0f) }
    val canContinueFromDeclarationPage = declarationReadProgress >= 0.999f
    val canContinueFromProxyPage = !isCustomSelected ||
        GitHubUrlResolver.normalizeCustomBaseUrl(customBaseUrl).isNotBlank()
    val canNavigateBack = pagerState.currentPage > 0
    var predictiveBackProgress by remember { mutableFloatStateOf(0f) }
    var pageProgress by remember { mutableFloatStateOf(1f / OnboardingPageCount.toFloat()) }
    val animatedPageProgress by animateFloatAsState(
        targetValue = pageProgress.coerceIn(0f, 1f),
        animationSpec = tween(durationMillis = 220),
        label = "onboarding_page_progress",
    )
    val pageSummary = when (pagerState.currentPage) {
        0 -> stringResource(R.string.onboarding_page_summary_welcome)
        1 -> stringResource(R.string.onboarding_page_summary_declaration)
        2 -> stringResource(R.string.onboarding_page_summary_proxy)
        3 -> stringResource(R.string.onboarding_page_summary_settings)
        4 -> stringResource(R.string.onboarding_page_summary_about)
        else -> stringResource(R.string.onboarding_page_summary_end)
    }

    LaunchedEffect(pagerState) {
        snapshotFlow {
            (((pagerState.currentPage + pagerState.currentPageOffsetFraction)
                .coerceIn(0f, (OnboardingPageCount - 1).toFloat())) + 1f) /
                OnboardingPageCount.toFloat()
        }.collect { progress ->
            pageProgress = progress
        }
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
            pagerState.currentPage == 2 &&
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
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .graphicsLayer {
                        val pageOffset = ((pagerState.currentPage - page) +
                            pagerState.currentPageOffsetFraction).absoluteValue
                        val alpha = lerpFloat(0.8f, 1f, 1f - pageOffset.coerceIn(0f, 1f))
                        this.alpha = alpha
                    },
            ) {
                when (page) {
                    0 -> WelcomePage()
                    1 -> DeclarationPage(
                        onReadProgressChange = { progress ->
                            declarationReadProgress = progress
                        },
                    )
                    2 -> ProxySelectionPage(
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
                    3 -> SettingsTabScreen(
                        shellViewModel = shellViewModel,
                        bottomContentPadding = 154.dp,
                        previewMode = false,
                        showRestartOnboardingEntry = false,
                    )
                    4 -> AboutScreen(
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
            nextButtonProgress = if (pagerState.currentPage == 1) {
                declarationReadProgress
            } else {
                1f
            },
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(end = 18.dp, bottom = 18.dp)
                .navigationBarsPadding(),
            onNext = {
                if (pagerState.currentPage == 1 && !canContinueFromDeclarationPage) {
                    Toast.makeText(
                        context,
                        context.getString(R.string.onboarding_declaration_toast),
                        Toast.LENGTH_SHORT,
                    ).show()
                    return@FloatingOnboardingBar
                }
                if (pagerState.currentPage == 2 && !canContinueFromProxyPage) {
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
private fun DeclarationPage(
    onReadProgressChange: (Float) -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val scrollBehavior = MiuixScrollBehavior()
    val scrollState = rememberScrollState()
    val title = stringResource(R.string.onboarding_declaration_title)
    val sections = listOf(
        OnboardingDeclarationSection(
            title = stringResource(R.string.onboarding_declaration_section_1_title),
            body = stringResource(R.string.onboarding_declaration_section_1_body),
        ),
        OnboardingDeclarationSection(
            title = stringResource(R.string.onboarding_declaration_section_2_title),
            body = stringResource(R.string.onboarding_declaration_section_2_body),
        ),
        OnboardingDeclarationSection(
            title = stringResource(R.string.onboarding_declaration_section_3_title),
            body = stringResource(R.string.onboarding_declaration_section_3_body),
        ),
        OnboardingDeclarationSection(
            title = stringResource(R.string.onboarding_declaration_section_4_title),
            body = stringResource(R.string.onboarding_declaration_section_4_body),
        ),
        OnboardingDeclarationSection(
            title = stringResource(R.string.onboarding_declaration_section_5_title),
            body = stringResource(R.string.onboarding_declaration_section_5_body),
        ),
        OnboardingDeclarationSection(
            title = stringResource(R.string.onboarding_declaration_section_6_title),
            body = stringResource(R.string.onboarding_declaration_section_6_body),
        ),
    )

    LaunchedEffect(scrollState) {
        snapshotFlow {
            val maxValue = scrollState.maxValue
            when {
                maxValue <= 0 -> 0f
                scrollState.value >= maxValue -> 1f
                else -> scrollState.value.toFloat() / maxValue.toFloat()
            }.coerceIn(0f, 1f)
        }.collect { progress ->
            onReadProgressChange(progress)
        }
    }

    Scaffold(
        modifier = Modifier.background(shellColors.pageBackground),
        topBar = {
            TopAppBar(
                color = shellColors.pageBackground,
                title = title,
                scrollBehavior = scrollBehavior,
            )
        },
        popupHost = {},
        containerColor = shellColors.pageBackground,
        contentWindowInsets = WindowInsets.systemBars
            .add(WindowInsets.displayCutout)
            .only(WindowInsetsSides.Horizontal),
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .verticalScroll(scrollState)
                .padding(
                    start = 12.dp,
                    top = innerPadding.calculateTopPadding() + 12.dp,
                    end = 12.dp,
                    bottom = 160.dp,
                ),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardColors(
                    color = shellColors.cardBackground,
                    contentColor = colors.onSurface,
                ),
                cornerRadius = 22.dp,
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 18.dp, vertical = 18.dp),
                ) {
                    sections.forEachIndexed { index, section ->
                        if (index > 0) {
                            Spacer(modifier = Modifier.height(14.dp))
                        }
                        if (index > 0) {
                            Box(
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(1.dp)
                                    .background(colors.onSurface.copy(alpha = 0.06f)),
                            )
                            Spacer(modifier = Modifier.height(14.dp))
                        }
                        DeclarationSectionCard(section = section)
                    }
                }
            }
        }
    }
}

@Composable
private fun DeclarationSectionCard(
    section: OnboardingDeclarationSection,
) {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    Column(
        modifier = Modifier.fillMaxWidth(),
    ) {
        Text(
            text = section.title,
            fontSize = 16.sp,
            fontWeight = FontWeight.SemiBold,
            color = colors.onSurface,
        )
        Spacer(modifier = Modifier.height(6.dp))
        Text(
            text = section.body,
            fontSize = 13.sp,
            lineHeight = 20.sp,
            color = shellColors.secondaryText,
        )
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
    val selectedSource = remember(selectedSourceId) { GitHubProxySources.findById(selectedSourceId) }
    val scrollBehavior = MiuixScrollBehavior()
    val listState = rememberLazyListState()
    val title = stringResource(R.string.onboarding_proxy_title)

    Scaffold(
        modifier = Modifier.background(shellColors.pageBackground),
        topBar = {
            TopAppBar(
                color = shellColors.pageBackground,
                title = title,
                scrollBehavior = scrollBehavior,
            )
        },
        popupHost = {},
        containerColor = shellColors.pageBackground,
        contentWindowInsets = WindowInsets.systemBars
            .add(WindowInsets.displayCutout)
            .only(WindowInsetsSides.Horizontal),
    ) { innerPadding ->
        LazyColumn(
            state = listState,
            modifier = Modifier
                .fillMaxSize()
                .scrollEndHaptic()
                .overScrollVertical()
                .nestedScroll(scrollBehavior.nestedScrollConnection)
                .padding(horizontal = 12.dp),
            contentPadding = PaddingValues(
                start = 0.dp,
                top = innerPadding.calculateTopPadding() + 12.dp,
                end = 0.dp,
                bottom = 160.dp,
            ),
            verticalArrangement = Arrangement.spacedBy(12.dp),
            overscrollEffect = null,
        ) {
            item {
                ProxyBenchmarkStatusCard(
                    selectedSourceTitle = selectedSource.title,
                    benchmarkState = benchmarkState,
                    onRetest = onRetest,
                )
            }
            items(GitHubProxySources.builtInSources.size) { index ->
                val source = GitHubProxySources.builtInSources[index]
                val result = benchmarkState.results.firstOrNull { it.sourceId == source.id }
                ProxySourceCard(
                    title = source.title,
                    selected = selectedSourceId == source.id,
                    isFastest = benchmarkState.fastestSourceId == source.id,
                    result = result,
                    onClick = { onSelectSource(source.id) },
                )
            }
            item {
                ProxySourceCard(
                    title = GitHubProxySources.custom.title,
                    selected = selectedSourceId == GitHubProxySources.custom.id,
                    isFastest = false,
                    result = null,
                    onClick = { onSelectSource(GitHubProxySources.custom.id) },
                )
            }
            if (selectedSourceId == GitHubProxySources.custom.id) {
                item {
                    ProxyCustomUrlCard(
                        customBaseUrl = customBaseUrl,
                        onCustomBaseUrlChange = onCustomBaseUrlChange,
                    )
                }
            }
        }
    }
}

@Composable
private fun ProxyBenchmarkStatusCard(
    selectedSourceTitle: String,
    benchmarkState: GitHubProxyBenchmarkUiState,
    onRetest: () -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val cardColor: Color
    val accentColor: Color
    val title: String
    val summary: String
    val showRetestButton: Boolean

    when {
        benchmarkState.isRunning -> {
            cardColor = shellColors.primaryAction.copy(alpha = 0.12f)
            accentColor = shellColors.primaryAction
            title = stringResource(R.string.onboarding_proxy_testing)
            summary = stringResource(R.string.onboarding_proxy_testing_summary)
            showRetestButton = false
        }
        benchmarkState.results.isNotEmpty() && benchmarkState.fastestSourceId == null -> {
            cardColor = shellColors.warning.copy(alpha = 0.14f)
            accentColor = shellColors.warning
            title = stringResource(R.string.onboarding_proxy_test_failed)
            summary = stringResource(R.string.onboarding_proxy_test_failed_summary)
            showRetestButton = true
        }
        benchmarkState.fastestSourceId != null -> {
            cardColor = shellColors.success.copy(alpha = 0.14f)
            accentColor = shellColors.success
            title = stringResource(R.string.onboarding_proxy_recommended_title)
            summary = stringResource(
                R.string.onboarding_proxy_recommended_summary,
                GitHubProxySources.findById(benchmarkState.fastestSourceId).title,
            )
            showRetestButton = true
        }
        else -> {
            cardColor = shellColors.cardBackground
            accentColor = colors.onSurface
            title = stringResource(R.string.onboarding_proxy_current_title)
            summary = selectedSourceTitle
            showRetestButton = true
        }
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = cardColor,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(end = if (showRetestButton) 46.dp else 0.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                if (benchmarkState.isRunning) {
                    CircularProgressIndicator(
                        modifier = Modifier.size(18.dp),
                        strokeWidth = 2.dp,
                        color = accentColor,
                    )
                } else {
                    Box(
                        modifier = Modifier
                            .size(10.dp)
                            .clip(CircleShape)
                            .background(accentColor),
                    )
                }
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = title,
                        fontSize = 15.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = colors.onSurface,
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = summary,
                        fontSize = 12.sp,
                        lineHeight = 17.sp,
                        color = shellColors.secondaryText,
                    )
                }
            }
            if (showRetestButton) {
                ProxyInlineActionButton(
                    enabled = !benchmarkState.isRunning,
                    onClick = onRetest,
                    modifier = Modifier.align(Alignment.BottomEnd),
                )
            }
        }
    }
}

@Composable
private fun onboardingOutlinedFieldColors(): TextFieldColors {
    val colors = MiuixTheme.colorScheme
    val shellColors = ShellTheme.colors

    return OutlinedTextFieldDefaults.colors(
        focusedBorderColor = shellColors.primaryAction.copy(alpha = 0.7f),
        unfocusedBorderColor = colors.outline.copy(alpha = 0.22f),
        disabledBorderColor = colors.outline.copy(alpha = 0.12f),
        focusedContainerColor = shellColors.pageBackground,
        unfocusedContainerColor = shellColors.pageBackground,
        disabledContainerColor = shellColors.pageBackground,
        focusedTextColor = colors.onSurface,
        unfocusedTextColor = colors.onSurface,
        disabledTextColor = colors.onSurface,
        cursorColor = shellColors.primaryAction,
        focusedLabelColor = shellColors.primaryAction,
        unfocusedLabelColor = shellColors.secondaryText,
        disabledLabelColor = shellColors.secondaryText,
        focusedPlaceholderColor = shellColors.secondaryText,
        unfocusedPlaceholderColor = shellColors.secondaryText,
        disabledPlaceholderColor = shellColors.secondaryText,
    )
}

@Composable
private fun ProxyCustomUrlCard(
    customBaseUrl: String,
    onCustomBaseUrlChange: (String) -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardColors(
            color = shellColors.cardBackground,
            contentColor = colors.onSurface,
        ),
        cornerRadius = 18.dp,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 14.dp),
        ) {
            Text(
                text = stringResource(R.string.onboarding_proxy_custom_label),
                fontSize = 15.sp,
                fontWeight = FontWeight.SemiBold,
                color = colors.onSurface,
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = stringResource(R.string.onboarding_proxy_custom_hint),
                fontSize = 12.sp,
                lineHeight = 17.sp,
                color = shellColors.secondaryText,
            )
            Spacer(modifier = Modifier.height(12.dp))
            OutlinedTextField(
                value = customBaseUrl,
                onValueChange = onCustomBaseUrlChange,
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(18.dp),
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
                colors = onboardingOutlinedFieldColors(),
            )
        }
    }
}

@Composable
private fun ProxyInlineActionButton(
    enabled: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val shellColors = ShellTheme.colors

    Box(
        modifier = modifier
            .size(34.dp)
            .clip(CircleShape)
            .background(
                if (enabled) {
                    shellColors.primaryAction.copy(alpha = 0.16f)
                } else {
                    shellColors.disabledAction.copy(alpha = 0.26f)
                },
            )
            .clickable(enabled = enabled, onClick = onClick)
            .border(
                width = 1.dp,
                color = if (enabled) {
                    shellColors.primaryAction.copy(alpha = 0.26f)
                } else {
                    Color.Transparent
                },
                shape = CircleShape,
            ),
        contentAlignment = Alignment.Center,
    ) {
        Icon(
            imageVector = Icons.Rounded.Refresh,
            contentDescription = stringResource(R.string.onboarding_proxy_retest),
            tint = if (enabled) {
                shellColors.primaryAction
            } else {
                shellColors.secondaryText.copy(alpha = 0.78f)
            },
            modifier = Modifier.size(18.dp),
        )
    }
}

@Composable
private fun ProxySelectionIndicator(selected: Boolean) {
    val shellColors = ShellTheme.colors

    Box(
        modifier = Modifier
            .size(24.dp)
            .clip(CircleShape)
            .border(
                width = 1.5.dp,
                color = if (selected) {
                    shellColors.primaryAction
                } else {
                    shellColors.secondaryText.copy(alpha = 0.35f)
                },
                shape = CircleShape,
            ),
        contentAlignment = Alignment.Center,
    ) {
        if (selected) {
            Box(
                modifier = Modifier
                    .size(10.dp)
                    .clip(CircleShape)
                    .background(shellColors.primaryAction),
            )
        }
    }
}

@Composable
private fun ProxyStatusBadge(
    text: String,
    background: Color,
    foreground: Color,
) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(999.dp))
            .background(background)
            .padding(horizontal = 10.dp, vertical = 4.dp),
    ) {
        Text(
            text = text,
            fontSize = 11.sp,
            fontWeight = FontWeight.SemiBold,
            color = foreground,
        )
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
    val cardShape = RoundedCornerShape(18.dp)

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .border(
                width = 1.dp,
                color = if (selected) {
                    shellColors.primaryAction.copy(alpha = 0.18f)
                } else {
                    Color.Transparent
                },
                shape = cardShape,
            ),
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
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            ProxySelectionIndicator(selected = selected)
            Column(
                modifier = Modifier
                    .weight(1f)
                    .heightIn(min = 42.dp),
                verticalArrangement = Arrangement.Center,
            ) {
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = colors.onSurface,
                )
                if (result != null) {
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = if (result.success && result.latencyMs != null) {
                            stringResource(R.string.onboarding_proxy_latency, result.latencyMs)
                        } else {
                            result.errorMessage ?: "Unavailable"
                        },
                        fontSize = 12.sp,
                        lineHeight = 17.sp,
                        color = if (result.success) {
                            shellColors.secondaryText
                        } else {
                            shellColors.warning
                        },
                    )
                }
            }
            Column(
                horizontalAlignment = Alignment.End,
                verticalArrangement = Arrangement.spacedBy(6.dp),
            ) {
                if (selected) {
                    ProxyStatusBadge(
                        text = stringResource(R.string.onboarding_proxy_badge_current),
                        background = shellColors.primaryAction.copy(alpha = 0.14f),
                        foreground = shellColors.primaryAction,
                    )
                }
                if (isFastest) {
                    ProxyStatusBadge(
                        text = stringResource(R.string.onboarding_proxy_fastest),
                        background = shellColors.success.copy(alpha = 0.16f),
                        foreground = shellColors.success,
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
    nextButtonProgress: Float,
    modifier: Modifier = Modifier,
    onNext: () -> Unit,
) {
    val shellColors = ShellTheme.colors
    val colors = MiuixTheme.colorScheme
    val containerWidth = LocalWindowInfo.current.containerSize.width
    val density = LocalDensity.current
    val textMeasurer = rememberTextMeasurer()
    val summarySwapProgress = remember { Animatable(1f) }
    var currentSummaryText by remember { mutableStateOf(summary) }
    var previousSummaryText by remember { mutableStateOf<String?>(null) }
    val summaryTextStyle = remember(shellColors.secondaryText) {
        TextStyle(
            fontSize = 13.sp,
            lineHeight = FloatingSummaryLineHeight,
            color = shellColors.secondaryText,
        )
    }
    val summaryPillMaxWidth = remember(containerWidth, density) {
        with(density) { containerWidth.toDp() - 36.dp }
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
                ).size.width.toDp() + FloatingSummaryHorizontalPadding * 2
            ).coerceAtMost(summaryPillMaxWidth)
        }
    }
    val animatedSummaryPillWidth by animateDpAsState(
        targetValue = summaryPillWidth,
        animationSpec = tween(durationMillis = 260, easing = FastOutSlowInEasing),
        label = "onboarding_summary_pill_width",
    )
    val animatedNextButtonProgress by animateFloatAsState(
        targetValue = nextButtonProgress.coerceIn(0f, 1f),
        animationSpec = tween(durationMillis = 220, easing = FastOutSlowInEasing),
        label = "onboarding_next_button_progress",
    )
    val transitionOffsetPx = with(density) { 10.dp.toPx() }
    val maxBlur = 7.dp

    LaunchedEffect(summary) {
        if (summary == currentSummaryText) {
            return@LaunchedEffect
        }
        previousSummaryText = currentSummaryText
        currentSummaryText = summary
        summarySwapProgress.snapTo(0f)
        summarySwapProgress.animateTo(
            targetValue = 1f,
            animationSpec = tween(durationMillis = 260, easing = FastOutSlowInEasing),
        )
        previousSummaryText = null
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
                    .background(shellColors.destructiveAction)
                    .clickable(onClick = onNext),
                contentAlignment = Alignment.Center,
            ) {
                Box(
                    modifier = Modifier.fillMaxSize(),
                ) {
                    Box(
                        modifier = Modifier
                            .fillMaxHeight()
                            .fillMaxWidth(animatedNextButtonProgress)
                            .background(shellColors.primaryAction)
                            .align(Alignment.CenterStart),
                    )
                }
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
                .width(animatedSummaryPillWidth),
            colors = CardColors(
                color = shellColors.cardBackground.copy(alpha = 0.96f),
                contentColor = colors.onSurface,
            ),
            cornerRadius = 999.dp,
        ) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(
                        horizontal = FloatingSummaryHorizontalPadding,
                        vertical = FloatingSummaryVerticalPadding,
                    ),
                contentAlignment = Alignment.CenterEnd,
            ) {
                previousSummaryText?.let { outgoingSummary ->
                    Text(
                        text = outgoingSummary,
                        fontSize = 13.sp,
                        lineHeight = FloatingSummaryLineHeight,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis,
                        textAlign = TextAlign.End,
                        color = shellColors.secondaryText,
                        modifier = Modifier
                            .align(Alignment.CenterEnd)
                            .graphicsLayer {
                                alpha = 1f - summarySwapProgress.value
                                translationX = -transitionOffsetPx * summarySwapProgress.value
                            }
                            .blur(maxBlur * summarySwapProgress.value),
                    )
                }
                Text(
                    text = currentSummaryText,
                    fontSize = 13.sp,
                    lineHeight = FloatingSummaryLineHeight,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis,
                    textAlign = TextAlign.End,
                    color = shellColors.secondaryText,
                    modifier = Modifier
                        .align(Alignment.CenterEnd)
                        .graphicsLayer {
                            alpha = summarySwapProgress.value
                            translationX = transitionOffsetPx * (1f - summarySwapProgress.value)
                        }
                        .blur(maxBlur * (1f - summarySwapProgress.value)),
                )
            }
        }
    }
}

private data class OnboardingDeclarationSection(
    val title: String,
    val body: String,
)

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
