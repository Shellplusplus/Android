# 第三方软件与资源说明

Shell++ Android 项目代码使用 GNU AGPL v3 发布，但下列第三方内容不因此变更许可。本文用于归因和维护来源记录，不替代各上游的完整许可证文本。

## compose-miuix-ui / Miuix

- 上游：https://github.com/compose-miuix-ui/miuix
- 许可：Apache License 2.0
- 使用方式：Maven 依赖，以及仓库内 `miuix-blur/` 的固定源码快照
- 快照版本：`b459d861561e077c8eda6702abff2825c7f79098`
- 完整许可：`miuix-blur/LICENSE`
- 本地变更：见 `miuix-blur/UPSTREAM.md`

## AndroidLiquidGlass

- 上游：https://github.com/Kyant0/AndroidLiquidGlass
- 原作者：Kyant
- 许可：Apache License 2.0
- 使用方式：`app/src/main/java/com/shell/liangyi/ui/glassport/` 包含为本项目适配的 backdrop / liquid-glass 源码
- 归因：适配文件保留了原作版权和许可说明

## Xiaomi Wearable SDK

- 文件：`app/libs/xms-wearable-lib_1.4_release.aar`
- 提供方：Xiaomi
- 类型：厂商二进制 SDK，不属于 Shell++ 的 AGPL 源码
- SHA-256：`9C40FD1C5409BB948523D503AF71E2978AE522C35636AFE7D64F474C0F6BC195`

该 AAR 的使用和再分发受 Xiaomi 提供 SDK 时的条款约束。分叉、镜像或重新发布本仓库前，请自行确认你有权取得和分发该二进制；如无权分发，应从公开镜像中移除 AAR，并在本地按 Xiaomi 官方流程取得后放入 `app/libs/`。

## Gradle 依赖

其余 AndroidX、Kotlin、Coil、Bouncy Castle、Material 和 MIUIX 依赖由 Gradle 按 `gradle/libs.versions.toml` 解析。它们分别遵循各自上游许可证，不由本仓库的 AGPL 重新许可。发布二进制前，维护者应基于实际解析到的依赖版本生成并复核完整的开源许可清单。

## 项目图片与品牌

`app/src/main/res/` 下的应用图标、设备外框、封面和开发者头像属于项目资源或相应权利人。代码许可不自动授予第三方商标权、肖像权或与 Xiaomi / HyperOS 品牌相关的权利；再分发者应按自己的发布场景核实这些资源的使用权限。
