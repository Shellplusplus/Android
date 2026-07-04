package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"
)

func TestFormatActionsMessage(t *testing.T) {
	payload := actionsPayload{
		Repository:    "DefateStar/shell-plus-plus-android",
		Branch:        "android",
		SHA:           "0123456789abcdef",
		Actor:         "runner",
		Workflow:      "Build & Release APK",
		RunNumber:     "42",
		RunURL:        "https://github.com/example/actions/runs/42",
		CommitMessage: "fix webhook flow",
		CommitAuthor:  "DefateStar",
		CompareURL:    "https://github.com/example/compare/a...b",
		Status:        "success",
	}

	message := formatActionsMessage(payload)

	expectedParts := []string{
		"📦 Shell++ 仓库更新",
		"状态：成功",
		"仓库：DefateStar/shell-plus-plus-android",
		"分支：android",
		"提交：0123456",
		"提交者：DefateStar",
		"消息：fix webhook flow",
		"工作流：Build & Release APK #42",
		"运行：https://github.com/example/actions/runs/42",
		"对比：https://github.com/example/compare/a...b",
	}

	for _, part := range expectedParts {
		if !strings.Contains(message, part) {
			t.Fatalf("message missing %q:\n%s", part, message)
		}
	}
}

func TestValidToken(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/github/actions", nil)
	req.Header.Set("X-Webhook-Token", "secret")

	if !validToken(req, "secret") {
		t.Fatal("expected token to validate")
	}

	if validToken(req, "different") {
		t.Fatal("expected mismatched token to fail")
	}

	if !validToken(req, "") {
		t.Fatal("expected empty configured token to allow request")
	}
}

func TestSendGroupMessage(t *testing.T) {
	var gotAuth string
	var gotBody string

	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path != "/send_group_msg" {
			t.Fatalf("unexpected path: %s", r.URL.Path)
		}

		gotAuth = r.Header.Get("Authorization")
		body := make([]byte, r.ContentLength)
		_, _ = r.Body.Read(body)
		gotBody = string(body)
		w.WriteHeader(http.StatusOK)
	}))
	defer server.Close()

	cfg := config{
		NapCatURL:         server.URL,
		NapCatAccessToken: "token-123",
		GroupID:           123456789,
		HTTPTimeout:       3 * time.Second,
	}

	client := &http.Client{Timeout: cfg.HTTPTimeout}
	if err := sendGroupMessage(t.Context(), client, cfg, "hello"); err != nil {
		t.Fatalf("sendGroupMessage returned error: %v", err)
	}

	if gotAuth != "Bearer token-123" {
		t.Fatalf("unexpected auth header: %q", gotAuth)
	}

	if !strings.Contains(gotBody, `"group_id":123456789`) {
		t.Fatalf("request body missing group id: %s", gotBody)
	}

	if !strings.Contains(gotBody, `"message":"hello"`) {
		t.Fatalf("request body missing message: %s", gotBody)
	}
}
