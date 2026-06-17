# Shell++ Android

Android 端配套应用，用于与 Vela 手表连接和截图同步。

## 技术栈

- Kotlin + Jetpack Compose
- Material 3 + iOS 风格组件
- Gradle (Kotlin DSL)

## 模块结构

### core/

- `WearMessageCenter.kt` - 小米穿戴消息中心封装，处理手表与手机端的消息收发
- `ScreenshotReceiver.kt` - 接收手表端发送的截图数据

### ui/

- `about/AboutScreen.kt` - 关于页面，显示应用信息和贡献者
- `screenshot/` - 截图功能
  - `ScreenshotScreen.kt` - 截图列表页面
  - `ScreenshotViewModel.kt` - 截图数据管理
  - `ScreenshotPreviewDialog.kt` - 截图预览弹窗
- `settings/` - 设置功能
  - `SettingsScreen.kt` - 设置页面
  - `DebugLogScreen.kt` - 调试日志查看
- `components/IOSComponents.kt` - iOS 风格 UI 组件库
- `theme/` - Material 3 主题配置

### model/

- `Screenshot.kt` - 截图数据模型

### util/

- `GallerySaver.kt` - 图片保存到系统相册

## 构建

使用 Android Studio 打开 `android/` 目录，或命令行：

```bash
cd android
./gradlew assembleRelease
```

生成的 APK 位于 `app/build/outputs/apk/release/`。
