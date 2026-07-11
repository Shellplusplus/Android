use anyhow::{anyhow, Context, Result};
use chrono::{Duration, Local, NaiveDateTime, TimeZone};
use eframe::egui::{self, Color32, RichText, TextEdit};
use rfd::FileDialog;
use std::path::PathBuf;

use super::{
    generate_key_with_password, sign_license_with_password, sign_registry_with_password,
    DEFAULT_KEY_ID,
};

pub fn run() -> Result<()> {
    let options = eframe::NativeOptions {
        viewport: egui::ViewportBuilder::default()
            .with_inner_size([980.0, 720.0])
            .with_min_inner_size([760.0, 560.0]),
        ..Default::default()
    };
    eframe::run_native(
        "Shell++ AI 授权签发器",
        options,
        Box::new(|creation_context| {
            configure_chinese_font(&creation_context.egui_ctx);
            Ok(Box::new(LicenseSignerApp::default()))
        }),
    )
    .map_err(|error| anyhow!("图形界面运行失败：{error}"))
}

fn configure_chinese_font(context: &egui::Context) {
    let Some(font_bytes) = load_system_chinese_font() else {
        return;
    };

    let mut fonts = egui::FontDefinitions::default();
    fonts.font_data.insert(
        "shell_cjk".to_string(),
        std::sync::Arc::new(egui::FontData::from_owned(font_bytes)),
    );
    for family in [egui::FontFamily::Proportional, egui::FontFamily::Monospace] {
        if let Some(fonts_for_family) = fonts.families.get_mut(&family) {
            fonts_for_family.insert(0, "shell_cjk".to_string());
        }
    }
    context.set_fonts(fonts);
}

fn load_system_chinese_font() -> Option<Vec<u8>> {
    let candidates: &[&str] = if cfg!(target_os = "windows") {
        &[
            r"C:\Windows\Fonts\msyh.ttf",
            r"C:\Windows\Fonts\simhei.ttf",
            r"C:\Windows\Fonts\NotoSansSC-VF.ttf",
        ]
    } else if cfg!(target_os = "macos") {
        &[
            "/System/Library/Fonts/PingFang.ttc",
            "/System/Library/Fonts/STHeiti Light.ttc",
            "/Library/Fonts/Arial Unicode.ttf",
        ]
    } else {
        &[
            "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
            "/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttf",
            "/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc",
        ]
    };

    candidates.iter().find_map(|path| std::fs::read(path).ok())
}

#[derive(Clone, Copy, PartialEq, Eq)]
enum Tab {
    Key,
    License,
    Registry,
}

struct LicenseSignerApp {
    tab: Tab,
    private_key_path: String,
    public_key_path: String,
    key_password: String,
    key_password_confirmation: String,
    license_private_key_path: String,
    license_request_path: String,
    license_id: String,
    license_expires_at: String,
    license_issued_at: String,
    license_key_id: String,
    license_output_path: String,
    registry_private_key_path: String,
    registry_license_paths: Vec<PathBuf>,
    registry_revoked_ids: String,
    registry_generated_at: String,
    registry_key_id: String,
    registry_output_path: String,
    status: String,
    status_is_error: bool,
}

impl Default for LicenseSignerApp {
    fn default() -> Self {
        let expires_at = (Local::now() + Duration::days(30))
            .format("%Y-%m-%d %H:%M")
            .to_string();
        Self {
            tab: Tab::Key,
            private_key_path: "issuer.key.json".to_string(),
            public_key_path: "issuer_public.txt".to_string(),
            key_password: String::new(),
            key_password_confirmation: String::new(),
            license_private_key_path: "issuer.key.json".to_string(),
            license_request_path: String::new(),
            license_id: "ai-device-001".to_string(),
            license_expires_at: expires_at,
            license_issued_at: String::new(),
            license_key_id: DEFAULT_KEY_ID.to_string(),
            license_output_path: "license.json".to_string(),
            registry_private_key_path: "issuer.key.json".to_string(),
            registry_license_paths: Vec::new(),
            registry_revoked_ids: String::new(),
            registry_generated_at: String::new(),
            registry_key_id: DEFAULT_KEY_ID.to_string(),
            registry_output_path: "registry.json".to_string(),
            status: "就绪。签发私钥不会离开本机。".to_string(),
            status_is_error: false,
        }
    }
}

impl eframe::App for LicenseSignerApp {
    fn update(&mut self, context: &egui::Context, _frame: &mut eframe::Frame) {
        egui::TopBottomPanel::top("header").show(context, |ui| {
            ui.add_space(10.0);
            ui.horizontal(|ui| {
                ui.heading(RichText::new("Shell++ AI 授权签发器").strong());
                ui.label(RichText::new("Ed25519 · Argon2id · AES-256-GCM").weak());
            });
            ui.label("用于设备绑定 AI 授权的离线签发工具。");
            ui.add_space(10.0);
        });

        egui::TopBottomPanel::bottom("status").show(context, |ui| {
            ui.add_space(6.0);
            let color = if self.status_is_error {
                Color32::from_rgb(210, 70, 70)
            } else {
                Color32::from_rgb(70, 150, 100)
            };
            ui.label(RichText::new(&self.status).color(color));
            ui.add_space(6.0);
        });

        egui::CentralPanel::default().show(context, |ui| {
            ui.horizontal(|ui| {
                ui.selectable_value(&mut self.tab, Tab::Key, "1  生成密钥");
                ui.selectable_value(&mut self.tab, Tab::License, "2  签发授权");
                ui.selectable_value(&mut self.tab, Tab::Registry, "3  生成授权清单");
            });
            ui.separator();
            egui::ScrollArea::vertical().show(ui, |ui| match self.tab {
                Tab::Key => self.key_tab(ui),
                Tab::License => self.license_tab(ui),
                Tab::Registry => self.registry_tab(ui),
            });
        });
    }
}

impl LicenseSignerApp {
    fn key_tab(&mut self, ui: &mut egui::Ui) {
        section_title(ui, "创建签发密钥");
        ui.label("签发私钥使用 Argon2id + AES-256-GCM 加密，请保存于离线环境。");
        ui.add_space(10.0);
        path_row(ui, "加密私钥文件", &mut self.private_key_path, false);
        path_row(ui, "公钥输出文件", &mut self.public_key_path, false);
        password_row(ui, "密码", &mut self.key_password);
        password_row(ui, "确认密码", &mut self.key_password_confirmation);
        ui.add_space(8.0);
        if ui
            .add_enabled(
                !self.key_password.is_empty()
                    && self.key_password == self.key_password_confirmation,
                egui::Button::new("生成加密 Ed25519 密钥"),
            )
            .clicked()
        {
            self.run_action("生成签发密钥", |app| {
                generate_key_with_password(
                    PathBuf::from(&app.private_key_path),
                    PathBuf::from(&app.public_key_path),
                    &app.key_password,
                )
            });
        }
        if !self.key_password.is_empty() && self.key_password != self.key_password_confirmation {
            ui.colored_label(Color32::from_rgb(210, 70, 70), "两次密码不一致。");
        }
        security_note(
            ui,
            "公钥可以复制到 local.properties；不要发布加密私钥文件。",
        );
    }

    fn license_tab(&mut self, ui: &mut egui::Ui) {
        section_title(ui, "签发设备授权");
        ui.label("签发前会验证设备申请签名和设备公钥哈希。");
        ui.add_space(10.0);
        path_row(ui, "加密私钥文件", &mut self.license_private_key_path, true);
        path_row(ui, "设备申请 JSON", &mut self.license_request_path, true);
        text_row(ui, "授权 ID", &mut self.license_id);
        text_row(ui, "到期时间（本地）", &mut self.license_expires_at);
        text_row(ui, "签发时间（可选）", &mut self.license_issued_at);
        text_row(ui, "签发密钥 ID", &mut self.license_key_id);
        path_row(ui, "授权输出文件", &mut self.license_output_path, false);
        password_row(ui, "私钥密码", &mut self.key_password);
        ui.add_space(8.0);
        if ui.button("签发授权").clicked() {
            self.run_action("签发授权", |app| {
                let expires_at = parse_datetime(&app.license_expires_at)?
                    .ok_or_else(|| anyhow!("必须填写授权到期时间"))?;
                let issued_at = parse_datetime(&app.license_issued_at)?;
                sign_license_with_password(
                    PathBuf::from(&app.license_private_key_path),
                    PathBuf::from(&app.license_request_path),
                    app.license_id.trim().to_string(),
                    expires_at,
                    issued_at,
                    app.license_key_id.trim().to_string(),
                    PathBuf::from(&app.license_output_path),
                    &app.key_password,
                )
            });
        }
        security_note(
            ui,
            "授权 ID 和哈希还需要发布到签名后的 GitHub 清单中，否则 App 不会启用 AI。",
        );
    }

    fn registry_tab(&mut self, ui: &mut egui::Ui) {
        section_title(ui, "生成 GitHub 授权清单");
        ui.label("请加入所有有效授权文件；Android 会将缺失的授权视为已撤销。");
        ui.add_space(10.0);
        path_row(
            ui,
            "加密私钥文件",
            &mut self.registry_private_key_path,
            true,
        );
        ui.horizontal(|ui| {
            ui.label(egui::RichText::new("授权文件").strong());
            if ui.button("添加文件…").clicked() {
                if let Some(files) = FileDialog::new()
                    .add_filter("JSON 文件", &["json"])
                    .pick_files()
                {
                    self.registry_license_paths.extend(files);
                }
            }
            if ui.button("清空").clicked() {
                self.registry_license_paths.clear();
            }
        });
        for path in &self.registry_license_paths {
            ui.label(format!("• {}", path.display()));
        }
        text_row(ui, "已撤销 ID（逗号分隔）", &mut self.registry_revoked_ids);
        text_row(ui, "生成时间（可选）", &mut self.registry_generated_at);
        text_row(ui, "签发密钥 ID", &mut self.registry_key_id);
        path_row(ui, "清单输出文件", &mut self.registry_output_path, false);
        password_row(ui, "私钥密码", &mut self.key_password);
        ui.add_space(8.0);
        if ui.button("签名并生成清单").clicked() {
            self.run_action("生成授权清单", |app| {
                let generated_at = parse_datetime(&app.registry_generated_at)?;
                let revoked = app
                    .registry_revoked_ids
                    .split(',')
                    .map(str::trim)
                    .filter(|id| !id.is_empty())
                    .map(ToOwned::to_owned)
                    .collect();
                sign_registry_with_password(
                    PathBuf::from(&app.registry_private_key_path),
                    app.registry_license_paths.clone(),
                    revoked,
                    generated_at,
                    app.registry_key_id.trim().to_string(),
                    PathBuf::from(&app.registry_output_path),
                    &app.key_password,
                )
            });
        }
        security_note(
            ui,
            "请确认清单内容后再上传 registry.json；签发私钥必须保持离线。",
        );
    }

    fn run_action<F>(&mut self, label: &str, action: F)
    where
        F: FnOnce(&Self) -> Result<()>,
    {
        match action(self) {
            Ok(()) => {
                self.status = format!("{label}成功。");
                self.status_is_error = false;
            }
            Err(error) => {
                self.status = format!("{label}失败：{error:#}");
                self.status_is_error = true;
            }
        }
    }
}

fn section_title(ui: &mut egui::Ui, title: &str) {
    ui.heading(RichText::new(title).strong());
}

fn text_row(ui: &mut egui::Ui, label: &str, value: &mut String) {
    ui.horizontal(|ui| {
        ui.label(egui::RichText::new(label).strong());
        ui.add(TextEdit::singleline(value).desired_width(430.0));
    });
    ui.add_space(4.0);
}

fn password_row(ui: &mut egui::Ui, label: &str, value: &mut String) {
    ui.horizontal(|ui| {
        ui.label(egui::RichText::new(label).strong());
        ui.add(
            TextEdit::singleline(value)
                .password(true)
                .desired_width(430.0),
        );
    });
    ui.add_space(4.0);
}

fn path_row(ui: &mut egui::Ui, label: &str, value: &mut String, open: bool) {
    ui.horizontal(|ui| {
        ui.label(egui::RichText::new(label).strong());
        ui.add(TextEdit::singleline(value).desired_width(430.0));
        if ui.button("选择…").clicked() {
            let selected = if open {
                FileDialog::new().pick_file()
            } else {
                FileDialog::new().set_file_name(value.as_str()).save_file()
            };
            if let Some(path) = selected {
                *value = path.to_string_lossy().into_owned();
            }
        }
    });
    ui.add_space(4.0);
}

fn security_note(ui: &mut egui::Ui, message: &str) {
    ui.add_space(14.0);
    ui.label(RichText::new(message).italics().weak());
}

fn parse_datetime(value: &str) -> Result<Option<i64>> {
    if value.trim().is_empty() {
        return Ok(None);
    }
    let parsed = NaiveDateTime::parse_from_str(value.trim(), "%Y-%m-%d %H:%M")
        .with_context(|| format!("日期时间格式无效：{}", value.trim()))?;
    Local
        .from_local_datetime(&parsed)
        .single()
        .map(|date| Some(date.timestamp_millis()))
        .ok_or_else(|| anyhow!("当前时区下的时间不明确"))
}
