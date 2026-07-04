# Shell++ QQ Webhook

这个目录提供一个很轻量的中转服务：

`GitHub Actions -> webhook -> NapCat OneBot HTTP API -> QQ 群`

它的职责很单一：

- 接收 GitHub Actions 发来的 HTTP POST
- 校验共享 token
- 把构建结果格式化成一条群消息
- 调用 NapCat 的 `send_group_msg`

如果你现在准备“从 0 开始重新配置 QQ 机器人”，建议严格按下面的顺序来，不要一上来就先配 GitHub。

## 0. 先确认整体架构

这个仓库里的“QQ 机器人”不是在 Android App 里直接登录 QQ。

实际链路是：

1. 你先在一台能稳定运行的机器上部署 NapCat
2. 开启 NapCat 的 OneBot 11 HTTP API
3. 再部署本目录下的 Go webhook 服务
4. 最后把 GitHub Actions 的通知发到这个 webhook

换句话说，真正和 QQ 连接的是 NapCat，本仓库只负责“转发通知”。

## 1. 准备条件

你至少需要：

- 一台能运行 NapCat 的机器
- 一个已经登录好的 QQ 账号
- 要接收通知的 QQ 群号
- 一台能运行本 Go 服务的 Linux 服务器，或直接和 NapCat 放在同一台机器上
- 一个能从 GitHub 访问到的 HTTPS 域名或反向代理入口

## 2. 配好 NapCat

你需要在 NapCat 里确认两件事：

- OneBot 11 HTTP API 已开启
- 你知道它的监听地址，例如 `http://127.0.0.1:3000`

如果你给 NapCat 配了 access token，后面把它填到 `NAPCAT_ACCESS_TOKEN`。

建议：

- NapCat 只监听 `127.0.0.1`
- webhook 服务也只监听 `127.0.0.1`
- 对外只暴露 Nginx / 宝塔反向代理出来的 HTTPS 地址

## 3. 部署 webhook 服务

### 方式 A：Debian / Ubuntu + systemd

在服务器上进入 `webhook/` 目录：

```bash
cd /path/to/shell-plus-plus-android/webhook
```

执行部署脚本：

```bash
chmod +x deploy-debian.sh
sudo ./deploy-debian.sh
```

脚本会自动：

- 编译 `shell-plus-plus-webhook`
- 创建 `/opt/shell-plus-plus-webhook/`
- 把 `.env.example` 复制成 `/opt/shell-plus-plus-webhook/.env`
- 安装 systemd 服务

然后编辑环境变量：

```bash
sudo nano /opt/shell-plus-plus-webhook/.env
```

示例：

```env
WEBHOOK_ADDR=127.0.0.1:18080
WEBHOOK_TOKEN=replace-with-a-long-random-token
QQ_GROUP_ID=123456789
NAPCAT_URL=http://127.0.0.1:3000
NAPCAT_ACCESS_TOKEN=
HTTP_TIMEOUT_SECONDS=10
```

改完重启：

```bash
sudo systemctl restart shell-plus-plus-webhook
sudo systemctl status shell-plus-plus-webhook
```

### 方式 B：Docker

构建镜像：

```bash
docker build -t shell-plus-plus-webhook ./webhook
```

运行容器：

```bash
docker run -d --name shell-plus-plus-webhook \
  -p 8080:8080 \
  -e QQ_GROUP_ID=123456789 \
  -e NAPCAT_URL=http://host.docker.internal:3000 \
  -e WEBHOOK_TOKEN=replace-with-a-long-random-token \
  shell-plus-plus-webhook
```

如果 NapCat 也跑在 Docker 里，优先把两个容器放到同一个 Docker network，再把 `NAPCAT_URL` 写成容器内可访问地址。

## 4. 先做本机联调

在接 GitHub 之前，先确认本地链路已经通了。

### 4.1 健康检查

如果你用的是上面的 systemd 示例配置：

```bash
curl http://127.0.0.1:18080/healthz
```

预期返回：

```text
ok
```

### 4.2 手动发一条测试通知

仓库里已经附带了测试 payload：

- [test-payload.json](/C:/Users/DefateStar/Desktop/1/shell-plus-plus-android/webhook/test-payload.json)

Windows PowerShell：

```powershell
.\send-test.ps1 -WebhookUrl "https://your-domain/github/actions" -WebhookToken "replace-with-a-long-random-token"
```

Linux / macOS：

```bash
./send-test.sh "https://your-domain/github/actions" "replace-with-a-long-random-token"
```

如果你只是本机测试，可以把 URL 换成：

```text
http://127.0.0.1:18080/github/actions
```

如果这一步成功，你应该已经能在 QQ 群里收到一条“Shell++ 仓库更新”消息。

## 5. 配反向代理

推荐把 webhook 只监听在本机，例如：

```text
127.0.0.1:18080
```

然后用宝塔 / Nginx 暴露一个 HTTPS 域名，例如：

```text
https://qqhook.your-domain.com/github/actions
```

反向代理目标指向：

```text
http://127.0.0.1:18080
```

## 6. 配 GitHub Secrets

仓库设置位置：

`Settings -> Secrets and variables -> Actions`

需要新增：

- `QQ_WEBHOOK_URL`
- `QQ_WEBHOOK_TOKEN`

示例：

```text
QQ_WEBHOOK_URL=https://qqhook.your-domain.com/github/actions
QQ_WEBHOOK_TOKEN=replace-with-a-long-random-token
```

这里的 `QQ_WEBHOOK_TOKEN` 必须和服务端 `.env` 里的 `WEBHOOK_TOKEN` 一致。

## 7. 当前工作流如何接入

本仓库的 GitHub Actions 已经接好了调用逻辑，文件是：

- [build.yml](/C:/Users/DefateStar/Desktop/1/shell-plus-plus-android/.github/workflows/build.yml)

工作流在 push 到 `android` 分支时会：

- 构建 APK
- 创建 release
- 在最后一步调用 webhook 发送 QQ 通知

也就是说，只要 NapCat、webhook 和 GitHub Secrets 都配对了，推一次 commit 就会自动发群消息。

## 8. 排查顺序

建议按这个顺序排查，不要跳着看：

1. NapCat 本机 HTTP API 是否可用
2. `GET /healthz` 是否正常
3. 手动测试 webhook 是否能发消息
4. GitHub Secrets 是否填对
5. 最后再看 GitHub Actions 实际运行日志

## 9. 常用排查命令

健康检查：

```bash
curl http://127.0.0.1:18080/healthz
```

查看 systemd 状态：

```bash
sudo systemctl status shell-plus-plus-webhook
```

查看最近日志：

```bash
sudo journalctl -u shell-plus-plus-webhook -n 100 --no-pager
```

查看 webhook 端口：

```bash
ss -ltnp | grep 18080
```

查看 NapCat 端口：

```bash
ss -ltnp | grep 3000
```

## 10. 环境变量说明

| 变量 | 必填 | 说明 |
| --- | --- | --- |
| `QQ_GROUP_ID` | 是 | 目标 QQ 群号 |
| `NAPCAT_URL` | 是 | NapCat HTTP 地址，例如 `http://127.0.0.1:3000` |
| `WEBHOOK_TOKEN` | 建议 | GitHub 调用 webhook 时带的共享 token |
| `NAPCAT_ACCESS_TOKEN` | 否 | 如果 NapCat 配了 access token，就在这里填写 |
| `WEBHOOK_ADDR` | 否 | webhook 监听地址，默认 `:8080` |
| `HTTP_TIMEOUT_SECONDS` | 否 | webhook 请求 NapCat 的超时时间，默认 `10` 秒 |

## 11. 重新配置时最容易踩的坑

- 没先验证 NapCat，直接去看 GitHub Actions
- `QQ_GROUP_ID` 填错成 QQ 号而不是群号
- `WEBHOOK_TOKEN` 两边不一致
- NapCat 监听在容器里，但 `NAPCAT_URL` 还写的是宿主机回环地址
- webhook 和 NapCat 都暴露公网，增加了不必要的风险

## 12. 最小重配清单

如果你只是想“重新从 0 拉起来”，最少做这 6 件事：

1. 让 NapCat 登录目标 QQ 账号
2. 打开 NapCat 的 OneBot HTTP API
3. 部署本目录下的 webhook 服务
4. 把 `.env` 中的 `QQ_GROUP_ID`、`NAPCAT_URL`、`WEBHOOK_TOKEN` 填好
5. 用测试脚本先手动打一条消息到群里
6. 再配置 GitHub Secrets 并推一次 commit 验证
