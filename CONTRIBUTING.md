# 参与贡献

感谢你参与 Shell++ Android。这个项目同时涉及 Android、Xiaomi Wearable 通信、文件传输和远程命令，改动时请优先保证协议兼容性与用户数据安全。

## 开始之前

- 阅读 [README.md](README.md) 和 [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)。
- 使用 JDK 17、Android SDK 36 和仓库自带的 Gradle Wrapper。
- 将 `local.properties.example` 复制为 `local.properties`，不要提交本机路径、签名材料或 token。
- 不要修改 `build/`、`app/build/`、`.gradle/` 等生成目录。
- 不要提交 APK、keystore、PEM 私钥、诊断报告或真实设备传输数据。

## 修改原则

- UI 优先复用 `ShellTheme`、`ShellBackScaffold`、`ShellRootTabScaffold` 和现有液态玻璃组件。
- 核心通信必须保留消息类型、分片编号、重试、断点恢复和来源校验语义。
- 远程终端及文件操作必须经过现有 guard；不要新增绕过校验的发送入口。
- 新增用户可见文案应进入 Android string resource，避免在 Compose 页面散落硬编码文案。
- 新增网络入口时应明确绑定地址、鉴权、大小限制、超时和日志脱敏策略。
- 第三方源码必须保留原版权头，并在 `THIRD_PARTY_NOTICES.md` 记录来源、版本和许可。

## 验证

优先运行与改动相关的最小检查：

```powershell
.\gradlew.bat test
```

涉及 Android 资源、Manifest、Compose 或依赖配置时，再运行：

```powershell
.\gradlew.bat assembleDebug
```

提交说明中请写明已执行的检查，以及无法执行检查的原因。涉及手表消息协议、截图传输、远程终端或更新安装时，还应说明真机验证范围。

## Pull Request 清单

- 改动聚焦且没有夹带本地或生成文件。
- 用户可见行为与文档保持一致。
- 新功能具有成功、失败、取消和恢复路径。
- 日志不包含 token、命令正文、文件正文、设备唯一标识或完整本地路径。
- 相关测试已更新，或说明暂时无法自动化覆盖的原因。
- 第三方代码和素材的许可已经确认并保留归因。

贡献到本仓库的项目代码将按仓库根目录的 GNU AGPL v3 许可发布；第三方内容仍遵循其原许可。
