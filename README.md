# Shell++ Android

Shell++ Android 是 Shell++ / Vela 手表的 Android 端配套应用，负责把手表截图同步到手机，并提供局域网直传、截图预览导出、应用内更新检查，以及配套的发布通知能力。

## 当前功能

- 通过小米穿戴消息通道与手表建立连接，获取截图列表并按需拉取截图
- 内置轻量 HTTP 服务，支持同局域网下的 PNG 截图直传与分片上传
- 截图详情页支持预览、保存到系统相册、生成带机型边框版本、删除本地缓存
- 首页集中展示手表连接状态、截图缓存数量、LAN 服务状态与最近传输进度
- 设置页支持手动检查更新、跳过非强制更新提醒
- 关于页展示开发者信息与开源组件说明
- 通过 `website/update.json` 提供的更新元数据驱动应用内更新提示

说明：首页中的“远程终端”入口目前仍是占位页，尚未完成实现。

## 技术栈

- Kotlin `2.3.20`
- Android Gradle Plugin `8.9.1`
- Jetpack Compose + Navigation Compose
- Material 3 + MIUIX / HyperOS 风格组件
- Kotlin Coroutines + Coil
- 本地 AAR 形式接入 Xiaomi Wearable SDK
- Gradle Kotlin DSL

## 环境要求

- JDK `17`
- Android SDK `compileSdk 36`
- `targetSdk 36`
- `minSdk 26`
- 支持 AGP `8.9` / Kotlin `2.3` 的 Android Studio

## 项目结构

```text
.
├─ .github/
│  └─ workflows/
│     └─ build.yml                GitHub Actions：构建、发布、通知
├─ app/                           Android 应用模块
│  ├─ libs/                       本地 AAR / JAR 依赖
│  ├─ release/                    当前导出的发布产物
│  └─ src/
│     ├─ androidTest/             仪器测试
│     ├─ main/
│     │  ├─ java/com/shell/liangyi/
│     │  │  ├─ core/              手表通信、截图接收、HTTP 服务
│     │  │  │  └─ update/         应用内更新检查
│     │  │  ├─ model/             数据模型
│     │  │  ├─ ui/
│     │  │  │  ├─ about/          关于页
│     │  │  │  ├─ bluetooth/      蓝牙 / 穿戴通道截图同步页
│     │  │  │  ├─ components/     通用 Compose 组件
│     │  │  │  ├─ fetch/          LAN / HTTP 直传页
│     │  │  │  ├─ index/          首页状态面板
│     │  │  │  ├─ screenshot/     截图详情页
│     │  │  │  ├─ settings/       设置与日志入口
│     │  │  │  └─ theme/          主题与配色
│     │  │  └─ util/              相册保存、图片处理
│     │  └─ res/                  图片、字符串、主题、设备边框素材
│     └─ test/                    单元测试
├─ gradle/                        Gradle Wrapper 与版本目录
├─ sign/                          本地签名文件目录
├─ website/                       更新接口静态资源（`update.json`、`api.php`）
├─ webhook/                       GitHub Actions -> QQ 群通知服务（Go）
├─ build.gradle.kts               根构建脚本
├─ settings.gradle.kts            Gradle 模块配置
├─ gradle.properties              Gradle 全局参数
└─ README.md
```

## 关键模块

- `app/src/main/java/com/shell/liangyi/core/WearMessageCenter.kt`
  负责与手表侧建立消息通道、握手、保活、日志记录与指令发送。
- `app/src/main/java/com/shell/liangyi/core/ScreenshotReceiver.kt`
  负责截图列表同步、按图拉取、分片重传、断点恢复、本地缓存索引与同步进度维护。
- `app/src/main/java/com/shell/liangyi/core/HttpScreenshotServer.kt`
  零外部依赖的轻量 HTTP 服务，处理同局域网下的截图上传。
- `app/src/main/java/com/shell/liangyi/core/update/UpdateChecker.kt`
  读取远端更新信息并决定是否展示可选/强制更新提示。
- `app/src/main/java/com/shell/liangyi/ui/`
  Compose UI 层，包含首页、蓝牙同步页、LAN 传输页、设置页、关于页、截图详情页与通用组件。

## 构建

Windows PowerShell：

```powershell
.\gradlew.bat assembleRelease
```

macOS / Linux：

```bash
./gradlew assembleRelease
```

默认输出路径：

```text
app/build/outputs/apk/release/app-release.apk
```

如果需要调试包：

```powershell
.\gradlew.bat assembleDebug
```

应用版本号支持通过环境变量覆盖：

```text
VERSION_CODE
VERSION_NAME
```

未提供时默认分别为 `1` 和 `1.0`。

## 签名配置

项目默认从仓库根目录下的 `sign/Android.jks` 读取 keystore，并从 `local.properties` 读取签名密码：

```properties
shell.storePassword=your-store-password
shell.keyAlias=key
shell.keyPassword=your-key-password
```

如果 `sign/Android.jks` 或上述字段不完整，Gradle 不会启用 `localShellSign` 这套本地签名配置。

## AI 助手网站授权

AI 授权文件和公开清单使用 Ed25519 签名。签发流程已迁移到私有网站后台仓库 `YdefateStar/website`，不再使用本地 Rust 签发工具。该网站前端基于 `satnaing/shadcn-admin`，后端使用 Rust Axum；管理员登录后进入“AI 授权签发”页面即可初始化加密密钥、验证设备申请、签发授权和撤销授权。

网站部署后，在 `local.properties` 只需要配置网站公钥：

```properties
shell.aiIssuerPublicKey=网站“AI 授权签发”页面显示的 BASE64URL 公钥
```

Android 端当前已固定读取：

```text
http://154.12.85.206:3040/api/ai-license/registry
```

网站后台将签发私钥保存在服务器 `.runtime/ai-license/issuer.key.json` 的 Argon2id + AES-256-GCM 加密文件中。设备申请包只包含 Android Keystore 公钥、硬件证明信息和设备签名，不包含设备私钥。Android 导入授权后，会从网站的公开清单接口验证授权哈希、撤销状态和 Ed25519 签名。

网站后台接口：

- `GET /api/ai-license/registry`：公开清单，供 Android 读取。
- `GET /api/ai-license/status`：登录后查看签发密钥状态。
- `POST /api/ai-license/setup`：登录后初始化或验证签发私钥。
- `POST /api/ai-license/issue`：登录后验证设备申请并签发授权。
- `POST /api/ai-license/revoke`：登录后撤销授权。

## 更新接口

应用内更新检查默认请求：

```text
https://shellupdate.rth1.xyz/api.php
```

仓库中对应的静态更新源位于：

- `website/update.json`
- `website/api.php`

当前 `update.json` 需要至少包含以下字段：

```json
{
  "latest_version": "beta1",
  "latest_version_code": 1,
  "download_url": "https://example.com/app-release.apk",
  "changelog": "更新说明",
  "min_supported_version_code": 1,
  "release_date": "2026-06-28"
}
```

如果你要自托管更新服务，可以部署 `website/` 目录内容，并同步修改 `UpdateChecker.kt` 中的 `UPDATE_URL`。

## CI / 发布链路

- `.github/workflows/build.yml`
  在 `main` / `android` 分支 push 或手动触发时执行构建。
- 工作流会：
  - 解码签名文件
  - 生成 `local.properties`
  - 构建 release APK
  - 上传 artifact
  - 默认向公开仓库 `DefateStar/public-shellpp` 创建或更新 GitHub Release
  - 可选调用 `webhook/` 服务发送 QQ 群通知
- 手动触发时可通过 `release_repository` 输入临时覆盖发布目标仓库。
- 如果需要覆盖默认公开仓库，可配置仓库变量 `PUBLIC_RELEASE_REPOSITORY`。
- 当发布目标不是当前仓库时，必须配置 `PUBLIC_SHELLPP_TOKEN`，并确保该 token 对目标仓库具备 `Contents: Read and write` 权限。

`webhook/` 目录下是一个 Go `1.22` 服务，用于接收 GitHub Actions 的 POST 数据并转发给 NapCat / OneBot HTTP API。详细部署说明见 `webhook/README.md`。
