package main

import (
	"bytes"
	"context"
	"crypto/subtle"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"
)

const maxBodyBytes = 1 << 20

type config struct {
	Addr              string
	WebhookToken      string
	NapCatURL         string
	NapCatAccessToken string
	GroupID           int64
	HTTPTimeout       time.Duration
}

type actionsPayload struct {
	Repository    string `json:"repository"`
	Branch        string `json:"branch"`
	SHA           string `json:"sha"`
	Actor         string `json:"actor"`
	EventName     string `json:"event_name"`
	Workflow      string `json:"workflow"`
	RunNumber     string `json:"run_number"`
	RunURL        string `json:"run_url"`
	CommitMessage string `json:"commit_message"`
	CommitAuthor  string `json:"commit_author"`
	CompareURL    string `json:"compare_url"`
	Status        string `json:"status"`
}

type napCatMessage struct {
	GroupID int64  `json:"group_id"`
	Message string `json:"message"`
}

func main() {
	cfg, err := loadConfig()
	if err != nil {
		log.Fatal(err)
	}

	mux := http.NewServeMux()
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok\n"))
	})
	mux.HandleFunc("POST /github/actions", handleActions(cfg))

	server := &http.Server{
		Addr:              cfg.Addr,
		Handler:           requestLogger(mux),
		ReadHeaderTimeout: 5 * time.Second,
	}

	log.Printf("webhook service listening on %s", cfg.Addr)
	log.Fatal(server.ListenAndServe())
}

func loadConfig() (config, error) {
	groupID, err := strconv.ParseInt(strings.TrimSpace(os.Getenv("QQ_GROUP_ID")), 10, 64)
	if err != nil || groupID <= 0 {
		return config{}, errors.New("QQ_GROUP_ID must be a positive integer")
	}

	napCatURL := strings.TrimRight(strings.TrimSpace(os.Getenv("NAPCAT_URL")), "/")
	if napCatURL == "" {
		return config{}, errors.New("NAPCAT_URL is required")
	}

	timeout := 10 * time.Second
	if raw := strings.TrimSpace(os.Getenv("HTTP_TIMEOUT_SECONDS")); raw != "" {
		seconds, err := strconv.Atoi(raw)
		if err != nil || seconds <= 0 {
			return config{}, errors.New("HTTP_TIMEOUT_SECONDS must be a positive integer")
		}
		timeout = time.Duration(seconds) * time.Second
	}

	addr := strings.TrimSpace(os.Getenv("WEBHOOK_ADDR"))
	if addr == "" {
		addr = ":8080"
	}

	return config{
		Addr:              addr,
		WebhookToken:      os.Getenv("WEBHOOK_TOKEN"),
		NapCatURL:         napCatURL,
		NapCatAccessToken: os.Getenv("NAPCAT_ACCESS_TOKEN"),
		GroupID:           groupID,
		HTTPTimeout:       timeout,
	}, nil
}

func handleActions(cfg config) http.HandlerFunc {
	client := &http.Client{Timeout: cfg.HTTPTimeout}

	return func(w http.ResponseWriter, r *http.Request) {
		if !validToken(r, cfg.WebhookToken) {
			http.Error(w, "unauthorized", http.StatusUnauthorized)
			return
		}

		defer r.Body.Close()
		body, err := io.ReadAll(http.MaxBytesReader(w, r.Body, maxBodyBytes))
		if err != nil {
			http.Error(w, "request body is too large", http.StatusRequestEntityTooLarge)
			return
		}

		var payload actionsPayload
		if err := json.Unmarshal(body, &payload); err != nil {
			http.Error(w, "invalid json", http.StatusBadRequest)
			return
		}

		message := formatActionsMessage(payload)
		if err := sendGroupMessage(r.Context(), client, cfg, message); err != nil {
			log.Printf("failed to send napcat message: %v", err)
			http.Error(w, "failed to send message", http.StatusBadGateway)
			return
		}

		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		_, _ = w.Write([]byte(`{"ok":true}` + "\n"))
	}
}

func validToken(r *http.Request, expected string) bool {
	if expected == "" {
		return true
	}
	actual := r.Header.Get("X-Webhook-Token")
	if len(actual) != len(expected) {
		return false
	}
	return subtle.ConstantTimeCompare([]byte(actual), []byte(expected)) == 1
}

func formatActionsMessage(payload actionsPayload) string {
	status := strings.ToLower(strings.TrimSpace(payload.Status))
	statusText := "完成"
	switch status {
	case "success":
		statusText = "成功"
	case "failure":
		statusText = "失败"
	case "cancelled", "canceled":
		statusText = "已取消"
	}

	shortSHA := payload.SHA
	if len(shortSHA) > 7 {
		shortSHA = shortSHA[:7]
	}

	lines := []string{
		"📦 Shell++ 仓库更新",
		fmt.Sprintf("状态：%s", statusText),
	}
	appendLine := func(label, value string) {
		value = strings.TrimSpace(value)
		if value != "" {
			lines = append(lines, fmt.Sprintf("%s：%s", label, value))
		}
	}

	appendLine("仓库", payload.Repository)
	appendLine("分支", payload.Branch)
	appendLine("提交", shortSHA)
	appendLine("提交者", firstNonEmpty(payload.CommitAuthor, payload.Actor))
	appendLine("消息", payload.CommitMessage)

	workflow := strings.TrimSpace(payload.Workflow)
	if payload.RunNumber != "" {
		workflow = strings.TrimSpace(workflow + " #" + payload.RunNumber)
	}
	appendLine("工作流", workflow)
	appendLine("运行", payload.RunURL)
	appendLine("对比", payload.CompareURL)

	return strings.Join(lines, "\n")
}

func firstNonEmpty(values ...string) string {
	for _, value := range values {
		if strings.TrimSpace(value) != "" {
			return value
		}
	}
	return ""
}

func sendGroupMessage(ctx context.Context, client *http.Client, cfg config, message string) error {
	body, err := json.Marshal(napCatMessage{
		GroupID: cfg.GroupID,
		Message: message,
	})
	if err != nil {
		return err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, cfg.NapCatURL+"/send_group_msg", bytes.NewReader(body))
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", "application/json; charset=utf-8")
	if cfg.NapCatAccessToken != "" {
		req.Header.Set("Authorization", "Bearer "+cfg.NapCatAccessToken)
	}

	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		respBody, _ := io.ReadAll(io.LimitReader(resp.Body, 4096))
		return fmt.Errorf("napcat returned %s: %s", resp.Status, strings.TrimSpace(string(respBody)))
	}

	return nil
}

func requestLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s from %s in %s", r.Method, r.URL.Path, r.RemoteAddr, time.Since(start).Round(time.Millisecond))
	})
}
