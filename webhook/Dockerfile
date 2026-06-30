FROM golang:1.22-alpine AS builder

WORKDIR /src
COPY go.mod ./
COPY main.go ./
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -trimpath -ldflags="-s -w" -o /out/shell-plus-plus-webhook .

FROM alpine:3.20

RUN adduser -D -H webhook
USER webhook
COPY --from=builder /out/shell-plus-plus-webhook /usr/local/bin/shell-plus-plus-webhook

EXPOSE 8080
ENTRYPOINT ["shell-plus-plus-webhook"]
