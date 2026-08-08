# Shell++ Android 架构

## 范围

本仓库是手机侧 Android 客户端。手表端 Xiaomi Vela Quick App、外部命令执行器、AI 授权签发后台和发布中心不在本仓库中。

应用采用单 Activity + Jetpack Compose。`MainActivity` 创建 `ShellViewModel`，`ShellScreen` 负责根导航，各功能页面通过共享 ViewModel 和核心控制器读取连接、传输与缓存状态。

## 源码分层

```text
app/src/main/java/com/shell/liangyi/
├─ core/                 穿戴通信、截图、文件、终端、HTTP 与诊断
│  ├─ diagnostics/       自检、问题匹配、脱敏、持久化与导出
│  ├─ onboarding/        首次启动状态与 GitHub 代理配置
│  └─ update/            Release 解析、下载与安装
├─ feature/              可选功能入口边界
├─ model/                跨层数据模型
├─ security/ai/          AI 授权、设备身份、签名与撤销校验
├─ ui/                   Compose 页面、导航和共享组件
└─ util/                 原子写入、缓存裁剪、相册与图片处理

app/src/developer/java/com/shell/liangyi/
├─ ai/                   OpenAI 兼容接口客户端与提示词
├─ core/                 AI 到受控终端命令的桥接
├─ data/                 对话持久化
├─ feature/              AI 页面入口实现
├─ model/                对话和 API 配置模型
└─ ui/agent/             AI 对话页面与 ViewModel
```

`developer` 是历史命名，不是只在 debug 包启用的源码集。`app/build.gradle.kts` 当前将它加入 `main`，项目只产出一个正式 APK，AI 功能在运行时通过签名授权控制。

## 主要数据流

### 穿戴消息

1. `WearMessageCenter` 初始化 Xiaomi Wearable SDK、发现节点并维护连接状态。
2. 页面或控制器通过明确的消息类型发送请求。
3. 接收消息先经过类型、长度和上下文校验，再交给截图、文件或终端模块。
4. `DiagnosticManager` 记录适合用户诊断的事件；导出前由 `DiagnosticRedactor` 脱敏。

### 截图同步

1. `ScreenshotReceiver` 请求手表端截图索引。
2. 单张或批量传输按会话和分片编号接收。
3. 传输记录与 `.part` 文件共同支持断点恢复。
4. 完整文件通过原子写入进入应用缓存，并更新 UI 状态。
5. `GallerySaver` 和 `ImageProcessor` 负责相册导出与设备外框合成。

修改该链路时必须保持会话 ID、分片顺序、大小上限、重传和临时文件恢复语义一致。

### 远程命令与文件

- `RemoteTerminalBridge` 负责终端请求/响应关联。
- UI 和 AI 入口都必须经过 `RemoteTerminalGuard`，不得直接绕过校验发送命令。
- `RemoteToolController` 与 `FileTransferController` 处理目录、文本、图片和二进制文件传输。
- `RemoteBinaryTransferGuard`、`RemoteFileTransferGuard` 和 `MessageChunkGuard` 定义大小、路径与消息边界。

### 局域网截图服务

`HttpScreenshotServer` 是应用内轻量 HTTP 服务。它只用于用户主动开启的局域网上传流程。修改时应同时检查监听地址、请求大小、文件名规范化、原子写入、超时、并发和错误响应，避免路径穿越与内存放大。

### 更新

1. `UpdateChecker` 读取 GitHub 最新 Release。
2. `GitHubReleaseParser` 解析版本、更新日志和最低支持版本。
3. `InAppUpdateDownloader` 下载 APK 并维护进度。
4. `UpdateInstaller` 通过受控的 `FileProvider` URI 发起系统安装。

## 持久化与敏感数据

- SharedPreferences 保存连接偏好、引导状态、更新状态和功能选择。
- 应用私有目录保存截图缓存、分片恢复记录、诊断和 AI 对话。
- Android Keystore 保存 AI 设备身份私钥；私钥不应导出或写入日志。
- API key、签名密码、keystore、授权签发私钥和 CI token 都不属于源码配置。

## UI 约定

- 页面颜色从 `ShellTheme.colors` 和 `MiuixTheme.colorScheme` 获取。
- 内页优先使用 `ShellBackScaffold`，根 Tab 使用 `ShellRootTabScaffold`。
- 主导航使用 `LiquidGlassBottomBar`，模态反馈使用共享 `LiquidGlass*Dialog`。
- 标准页面横向间距以 `12.dp`、卡片内边距以 `16.dp` 为主。
- 重要操作信息优先完整可读，状态用浅色语义背景与高对比前景表达。

## 大文件维护顺序

以下文件承担多个职责，后续重构应采用“小步提取 + 测试保护”，不要一次性重写：

1. `core/ScreenshotReceiver.kt`：先提取恢复记录、会话模型和持久化。
2. `ui/onboarding/OnboardingFlow.kt`：按页面拆为独立 Composable 文件。
3. `ui/remote/RemoteFileViewerScreen.kt`：拆分状态卡、列表、预览和操作组件。
4. `ui/agent/AgentChatScreen.kt`：拆分消息列表、输入区和配置弹窗。
5. `core/WearMessageCenter.kt`：先提取消息模型和日志，再隔离 SDK 适配层。

每一步都应保持公开状态模型和协议行为不变，并优先补足相应单元测试。
