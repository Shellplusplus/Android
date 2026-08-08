# Shell++ Android

Shell++ Android 是 Shell++ / Xiaomi Vela 手表端的配套 Android 应用。它负责通过小米穿戴消息通道与手表通信，并提供截图同步、局域网直传、远程终端、远程文件查看、诊断和应用内更新等能力。

> 这是 Android 客户端仓库，不包含 Xiaomi Vela 手表端源码、AI 授权签发后台或发行签名私钥。

## 功能

- 连接 Vela 手表，获取截图列表并按需拉取图片
- 支持分片传输、断点恢复和批量截图同步
- 通过局域网 HTTP 服务接收 PNG 截图
- 预览、导出、加设备边框或清理本地截图缓存
- 向手表发送经过安全校验的单条终端命令
- 浏览并传输手表端文件
- 导出经过脱敏的诊断报告
- 检查 GitHub Release 并完成应用内更新
- 在有效的签名授权下使用可选 AI 助手

## 技术栈

- Kotlin `2.4.10`
- Android Gradle Plugin `9.1.1`
- JDK `17`
- Android `compileSdk 36` / `targetSdk 36` / `minSdk 26`
- Jetpack Compose、Material 3、Navigation Compose
- MIUIX / HyperOS 风格组件
- Kotlin Coroutines、Coil、Bouncy Castle
- Xiaomi Wearable SDK（本地 AAR）
- Gradle Kotlin DSL

## 项目结构

```text
.
├─ .github/workflows/           GitHub Actions 构建与发布流程
├─ app/
│  ├─ libs/                     Xiaomi Wearable SDK 等本地依赖
│  └─ src/
│     ├─ main/                  正式应用源码与资源
│     ├─ developer/             AI 助手实现；当前并入唯一正式 APK
│     ├─ test/                  JVM 单元测试
│     └─ androidTest/           Android 仪器测试
├─ docs/                        架构与维护文档
├─ gradle/                      Wrapper 与版本目录
├─ miuix-blur/                  固定上游版本的本地源码快照
├─ CONTRIBUTING.md              贡献流程
├─ SECURITY.md                  安全问题报告方式
└─ THIRD_PARTY_NOTICES.md       第三方代码与二进制说明
```

核心模块和数据流见 [架构说明](docs/ARCHITECTURE.md)。

## 开发环境

1. 安装 JDK 17，以及支持 AGP 9.1.1、Gradle 9.3.1 和 Android SDK 36 的 Android Studio。
2. 克隆仓库，并确认 `app/libs/xms-wearable-lib_1.4_release.aar` 存在。
3. 将 `local.properties.example` 复制为 `local.properties`，至少填写本机 `sdk.dir`。
4. 使用 Android Studio 同步 Gradle，或在命令行执行构建。

Windows PowerShell：

```powershell
.\gradlew.bat assembleDebug
```

macOS / Linux：

```bash
./gradlew assembleDebug
```

APK 默认输出到 `app/build/outputs/apk/`。版本号可通过 `VERSION_CODE` 和 `VERSION_NAME` 环境变量覆盖；未指定时分别为 `1` 和 `1.0`。

## 签名与手表通信

本地构建不要求项目的发行签名。需要自定义签名时，在仓库根目录放置 `sign/Android.jks`，并在 `local.properties` 配置：

```properties
shell.storePassword=your-store-password
shell.keyAlias=key
shell.keyPassword=your-key-password
```

签名文件与密码均不得提交。缺少完整签名配置时，Gradle 会使用默认调试签名。

Xiaomi Wearable SDK 的鉴权可能与应用包名、开发者平台配置和证书指纹绑定。自行编译的 APK 可以完成普通 Android 构建，但不保证能直接连接正式版手表应用；请使用你自己的小米开发者配置和签名进行联调。

## AI 授权配置

客户端只包含授权验证逻辑，不包含签发私钥或签发后台。默认发行配置内置公开的 Ed25519 验证公钥和公开授权清单地址；公钥不是秘密。

开发者可以在 `local.properties` 覆盖测试环境：

```properties
shell.aiIssuerPublicKey=BASE64URL_PUBLIC_KEY
shell.aiLicenseRegistryUrl=https://example.com/registry.json
```

正式授权清单默认地址：

```text
https://raw.githubusercontent.com/Shellplusplus/shellpplicense/main/registry.json
```

## 应用更新

客户端默认读取以下仓库的最新 GitHub Release：

```text
https://api.github.com/repos/Shellplusplus/Shellplusplus/releases/latest
```

Release `tag_name` 需要包含版本号。Release 正文可用 `min_supported_version_code: 18` 声明强制更新的最低版本，其余正文作为更新日志展示。下载器优先选择 `app-release.apk`。

## CI

- `.github/workflows/build.yml`：在 `main` / `android` 分支 push 或手动触发时构建并发布 APK。
- push 默认向当前仓库发布；手动触发时可指定其他 `owner/repo`。
- 发布到外部仓库时需要 `PUBLIC_SHELLPP_TOKEN`。
- `.github/workflows/public-release.yml`：由发布中心按指定源码引用和版本号构建公开产物。

仓库管理员还需在 Actions Secrets 中配置签名相关值。Secret 名称和完整说明见工作流文件；任何私钥、keystore、token 或密码都不应写入源码。

## 参与贡献

开始修改前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。安全漏洞请按 [SECURITY.md](SECURITY.md) 私下报告，不要在公开 Issue 中披露利用细节。

## 开源许可

Shell++ Android 的项目源码以 [GNU AGPL v3](LICENSE) 发布。仓库包含的第三方源码、依赖和厂商二进制仍遵循各自许可，详见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
