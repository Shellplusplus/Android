# Shell++ QQ Webhook

这个服务用于接收 GitHub Actions 的 HTTP POST，把提交/构建信息格式化后转发给 NapCat 的 OneBot HTTP API，最终发送到 QQ 群。

## 环境变量

| 变量 | 必填 | 说明 |
| --- | --- | --- |
| `QQ_GROUP_ID` | 是 | 要发送消息的 QQ 群号 |
| `NAPCAT_URL` | 是 | NapCat HTTP 地址，例如 `http://127.0.0.1:3000` |
| `WEBHOOK_TOKEN` | 建议 | GitHub Actions 调用本服务时使用的共享密钥 |
| `NAPCAT_ACCESS_TOKEN` | 否 | NapCat 配置了 access token 时填写 |
| `WEBHOOK_ADDR` | 否 | 服务监听地址，默认 `:8080` |
| `HTTP_TIMEOUT_SECONDS` | 否 | 调 NapCat 的超时时间，默认 `10` |

## 本地运行

```bash
cd webhook
go run .
```

## Docker 运行

```bash
docker build -t shell-plus-plus-webhook ./webhook
docker run -d --name shell-plus-plus-webhook \
  -p 8080:8080 \
  -e QQ_GROUP_ID=123456789 \
  -e NAPCAT_URL=http://host.docker.internal:3000 \
  -e WEBHOOK_TOKEN=replace-with-a-long-random-token \
  shell-plus-plus-webhook
```

如果 NapCat 和本服务在同一台 Linux 主机上并且都跑在 Docker 中，建议把两者放到同一个 Docker network，然后把 `NAPCAT_URL` 写成 NapCat 容器名对应的地址。

## Debian 13 + 宝塔 + NapCat 部署

这种环境最省心的方式是：

- Go webhook 直接作为原生 Linux 进程运行
- NapCat 保持你现在的安装方式不变
- 宝塔站点/Nginx 只做 HTTPS 反向代理
- webhook 和 NapCat 都只监听 `127.0.0.1`

### 1. 编译 Linux 二进制

如果你在 Windows 本地编译：

```bash
cd webhook
set GOOS=linux
set GOARCH=amd64
go build -trimpath -ldflags="-s -w" -o shell-plus-plus-webhook .
```

如果你直接在 Debian 服务器上编译：

```bash
cd /www/wwwroot/shell-plus-plus-android/webhook
go build -trimpath -ldflags="-s -w" -o shell-plus-plus-webhook .
```

### 2. 建议目录

```bash
/opt/shell-plus-plus-webhook/
  shell-plus-plus-webhook
  .env
```

### 3. 环境变量文件

`/opt/shell-plus-plus-webhook/.env`

```env
WEBHOOK_ADDR=127.0.0.1:18080
WEBHOOK_TOKEN=replace-with-a-long-random-token
QQ_GROUP_ID=123456789
NAPCAT_URL=http://127.0.0.1:3000
NAPCAT_ACCESS_TOKEN=
HTTP_TIMEOUT_SECONDS=10
```

也可以直接从仓库里的 [`.env.example`](C:/Users/DefateStar/Desktop/1/shell-plus-plus-android/webhook/.env.example) 复制。

说明：

- `WEBHOOK_ADDR` 建议只监听本机，不直接暴露公网
- `NAPCAT_URL` 建议填本机地址，避免额外网络链路
- 如果你的 NapCat HTTP 端口不是 `3000`，这里改成实际端口

### 4. systemd 托管

把 [shell-plus-plus-webhook.service.example](/C:/Users/DefateStar/Desktop/1/shell-plus-plus-android/webhook/shell-plus-plus-webhook.service.example) 放到服务器上的 `/etc/systemd/system/shell-plus-plus-webhook.service`，再执行：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now shell-plus-plus-webhook
sudo systemctl status shell-plus-plus-webhook
```

如果你已经把 `webhook/` 目录传到 Debian 服务器，也可以直接运行仓库里的 `deploy-debian.sh`：

```bash
cd /path/to/webhook
chmod +x deploy-debian.sh
sudo ./deploy-debian.sh
```

### 5. 宝塔反向代理

在宝塔中新建一个站点，例如 `qqhook.your-domain.com`，然后给这个站点配反向代理：

- 目标 URL：`http://127.0.0.1:18080`
- 需要转发的路径：`/`
- 建议开启 HTTPS

外部实际访问地址就是：

```text
https://qqhook.your-domain.com/github/actions
```

### 6. GitHub Secrets

仓库里配置：

- `QQ_WEBHOOK_URL=https://qqhook.your-domain.com/github/actions`
- `QQ_WEBHOOK_TOKEN=replace-with-a-long-random-token`

### 7. 联调顺序

建议按这个顺序排查：

1. 先确认 NapCat 本机 HTTP API 可用
2. 再确认 webhook 的 `GET /healthz` 可访问
3. 然后用 `curl` 手动调用 `/github/actions`
4. 最后再推一个 commit 让 GitHub Actions 真正触发

### 8. 常用排查命令

```bash
curl http://127.0.0.1:18080/healthz
sudo systemctl status shell-plus-plus-webhook
sudo journalctl -u shell-plus-plus-webhook -n 100 --no-pager
ss -ltnp | grep 18080
ss -ltnp | grep 3000
```

## GitHub Secrets

在仓库的 `Settings -> Secrets and variables -> Actions` 添加：

- `QQ_WEBHOOK_URL`：本服务公网地址，例如 `https://example.com/github/actions`
- `QQ_WEBHOOK_TOKEN`：与服务端 `WEBHOOK_TOKEN` 相同

## 手动测试

```bash
curl -X POST http://127.0.0.1:8080/github/actions \
  -H "Content-Type: application/json" \
  -H "X-Webhook-Token: replace-with-a-long-random-token" \
  -d '{
    "repository": "owner/shell-plus-plus-android",
    "branch": "android",
    "sha": "0123456789abcdef",
    "actor": "DefateStar",
    "workflow": "Build & Release APK",
    "run_number": "1",
    "run_url": "https://github.com/owner/repo/actions/runs/1",
    "commit_message": "test notify",
    "commit_author": "DefateStar",
    "status": "success"
  }'
```
