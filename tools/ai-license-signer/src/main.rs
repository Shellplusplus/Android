use aes_gcm::{aead::Aead, Aes256Gcm, KeyInit, Nonce};
use anyhow::{bail, Context, Result};
use argon2::{Algorithm, Argon2, Params, Version};
use base64::{engine::general_purpose::URL_SAFE_NO_PAD, Engine as _};
use clap::{Parser, Subcommand};
use ed25519_dalek::{Signer, SigningKey};
use p256::ecdsa::{
    signature::Verifier, Signature as EcdsaSignature, VerifyingKey as EcdsaVerifyingKey,
};
use p256::pkcs8::DecodePublicKey;
use rand_core::{OsRng, RngCore};
use rpassword::prompt_password;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::{fs, path::PathBuf};

mod gui;

const LICENSE_FORMAT: i32 = 2;
const REQUEST_FORMAT: i32 = 1;
const ED25519: &str = "Ed25519";
const REQUEST_SIGNATURE_ALGORITHM: &str = "SHA256withECDSA";
const DEFAULT_KEY_ID: &str = "ed25519-main-2026";

#[derive(Parser)]
#[command(
    name = "shell-ai-license-signer",
    version,
    about = "Offline Shell++ AI license signer"
)]
struct Cli {
    #[command(subcommand)]
    command: Command,
}

#[derive(Subcommand)]
enum Command {
    Gui,
    GenerateKey {
        #[arg(long)]
        private_key: PathBuf,
        #[arg(long)]
        public_key: PathBuf,
    },
    SignLicense {
        #[arg(long)]
        private_key: PathBuf,
        #[arg(long)]
        request: PathBuf,
        #[arg(long)]
        license_id: String,
        #[arg(long)]
        expires_at: i64,
        #[arg(long)]
        issued_at: Option<i64>,
        #[arg(long, default_value = DEFAULT_KEY_ID)]
        key_id: String,
        #[arg(long)]
        output: PathBuf,
    },
    SignRegistry {
        #[arg(long)]
        private_key: PathBuf,
        #[arg(long, value_delimiter = ',')]
        licenses: Vec<PathBuf>,
        #[arg(long, value_delimiter = ',')]
        revoked: Vec<String>,
        #[arg(long)]
        generated_at: Option<i64>,
        #[arg(long, default_value = DEFAULT_KEY_ID)]
        key_id: String,
        #[arg(long)]
        output: PathBuf,
    },
}

#[derive(Debug, Serialize, Deserialize)]
struct EncryptedKeyFile {
    format: i32,
    algorithm: String,
    kdf: String,
    salt: String,
    nonce: String,
    ciphertext: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct DeviceRequest {
    format: i32,
    #[serde(rename = "requestId")]
    request_id: String,
    #[serde(rename = "packageName")]
    package_name: String,
    #[serde(rename = "devicePublicKey")]
    device_public_key: String,
    #[serde(rename = "deviceKeySha256")]
    device_key_sha256: String,
    #[serde(rename = "createdAt")]
    created_at: i64,
    #[serde(rename = "hardwareBacked")]
    hardware_backed: bool,
    #[serde(rename = "attestationChain")]
    attestation_chain: Vec<String>,
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: String,
    signature: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct License {
    format: i32,
    #[serde(rename = "licenseId")]
    license_id: String,
    #[serde(rename = "packageName")]
    package_name: String,
    #[serde(rename = "deviceKeySha256")]
    device_key_sha256: String,
    features: Vec<String>,
    #[serde(rename = "issuedAt")]
    issued_at: i64,
    #[serde(rename = "expiresAt")]
    expires_at: i64,
    #[serde(rename = "issuerKeyId")]
    issuer_key_id: String,
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: String,
    signature: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct RegistryEntry {
    #[serde(rename = "licenseId")]
    license_id: String,
    #[serde(rename = "licenseSha256")]
    license_sha256: String,
    revoked: bool,
}

#[derive(Debug, Serialize, Deserialize)]
struct Registry {
    format: i32,
    #[serde(rename = "generatedAt")]
    generated_at: i64,
    #[serde(rename = "issuerKeyId")]
    issuer_key_id: String,
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: String,
    licenses: Vec<RegistryEntry>,
    signature: String,
}

#[derive(Serialize)]
struct LicensePayload<'a> {
    format: i32,
    #[serde(rename = "licenseId")]
    license_id: &'a str,
    #[serde(rename = "packageName")]
    package_name: &'a str,
    #[serde(rename = "deviceKeySha256")]
    device_key_sha256: String,
    features: Vec<&'a str>,
    #[serde(rename = "issuedAt")]
    issued_at: i64,
    #[serde(rename = "expiresAt")]
    expires_at: i64,
    #[serde(rename = "issuerKeyId")]
    issuer_key_id: &'a str,
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: &'a str,
}

#[derive(Serialize)]
struct LicenseDocument<'a> {
    format: i32,
    #[serde(rename = "licenseId")]
    license_id: &'a str,
    #[serde(rename = "packageName")]
    package_name: &'a str,
    #[serde(rename = "deviceKeySha256")]
    device_key_sha256: String,
    features: Vec<&'a str>,
    #[serde(rename = "issuedAt")]
    issued_at: i64,
    #[serde(rename = "expiresAt")]
    expires_at: i64,
    #[serde(rename = "issuerKeyId")]
    issuer_key_id: &'a str,
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: &'a str,
    signature: &'a str,
}

#[derive(Serialize)]
struct RegistryPayload<'a> {
    format: i32,
    #[serde(rename = "generatedAt")]
    generated_at: i64,
    #[serde(rename = "issuerKeyId")]
    issuer_key_id: &'a str,
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: &'a str,
    licenses: &'a [RegistryEntry],
}

#[derive(Serialize)]
struct RequestPayload<'a> {
    format: i32,
    #[serde(rename = "requestId")]
    request_id: &'a str,
    #[serde(rename = "packageName")]
    package_name: &'a str,
    #[serde(rename = "devicePublicKey")]
    device_public_key: &'a str,
    #[serde(rename = "deviceKeySha256")]
    device_key_sha256: String,
    #[serde(rename = "createdAt")]
    created_at: i64,
    #[serde(rename = "hardwareBacked")]
    hardware_backed: bool,
    #[serde(rename = "attestationChain")]
    attestation_chain: &'a [String],
    #[serde(rename = "signatureAlgorithm")]
    signature_algorithm: &'a str,
}

fn main() -> Result<()> {
    if std::env::args_os().len() == 1 {
        return gui::run();
    }
    match Cli::parse().command {
        Command::Gui => gui::run(),
        Command::GenerateKey {
            private_key,
            public_key,
        } => generate_key(private_key, public_key),
        Command::SignLicense {
            private_key,
            request,
            license_id,
            expires_at,
            issued_at,
            key_id,
            output,
        } => sign_license(
            private_key,
            request,
            license_id,
            expires_at,
            issued_at,
            key_id,
            output,
        ),
        Command::SignRegistry {
            private_key,
            licenses,
            revoked,
            generated_at,
            key_id,
            output,
        } => sign_registry(private_key, licenses, revoked, generated_at, key_id, output),
    }
}

fn generate_key(private_path: PathBuf, public_path: PathBuf) -> Result<()> {
    let password = prompt_password("New issuer private key password: ")?;
    let confirmation = prompt_password("Confirm issuer private key password: ")?;
    if password != confirmation {
        bail!("passwords do not match")
    }
    generate_key_with_password(private_path, public_path, &password)
}

fn generate_key_with_password(
    private_path: PathBuf,
    public_path: PathBuf,
    password: &str,
) -> Result<()> {
    let signing_key = SigningKey::generate(&mut OsRng);
    write_encrypted_key(&private_path, &signing_key, &password)?;
    fs::write(
        &public_path,
        format!("{}\n", encode(signing_key.verifying_key().as_bytes())),
    )
    .with_context(|| format!("write public key: {}", public_path.display()))?;
    println!("public key written to {}", public_path.display());
    Ok(())
}

fn sign_license(
    private_path: PathBuf,
    request_path: PathBuf,
    license_id: String,
    expires_at: i64,
    issued_at: Option<i64>,
    key_id: String,
    output: PathBuf,
) -> Result<()> {
    let password = prompt_password("Issuer private key password: ")?;
    sign_license_with_password(
        private_path,
        request_path,
        license_id,
        expires_at,
        issued_at,
        key_id,
        output,
        &password,
    )
}

fn sign_license_with_password(
    private_path: PathBuf,
    request_path: PathBuf,
    license_id: String,
    expires_at: i64,
    issued_at: Option<i64>,
    key_id: String,
    output: PathBuf,
    password: &str,
) -> Result<()> {
    let request: DeviceRequest = read_json(&request_path)?;
    verify_request(&request)?;
    let signing_key = read_encrypted_key_with_password(&private_path, password)?;
    let mut license = License {
        format: LICENSE_FORMAT,
        license_id,
        package_name: request.package_name,
        device_key_sha256: request.device_key_sha256.to_lowercase(),
        features: vec!["ai_assistant".to_string()],
        issued_at: issued_at.unwrap_or_else(now_ms),
        expires_at,
        issuer_key_id: key_id,
        signature_algorithm: ED25519.to_string(),
        signature: String::new(),
    };
    license.signature = encode(
        &signing_key
            .sign(canonical_license_payload(&license).as_bytes())
            .to_bytes(),
    );
    write_pretty_json(&output, &license)?;
    println!("license written to {}", output.display());
    Ok(())
}

fn sign_registry(
    private_path: PathBuf,
    license_paths: Vec<PathBuf>,
    revoked: Vec<String>,
    generated_at: Option<i64>,
    key_id: String,
    output: PathBuf,
) -> Result<()> {
    let password = prompt_password("Issuer private key password: ")?;
    sign_registry_with_password(
        private_path,
        license_paths,
        revoked,
        generated_at,
        key_id,
        output,
        &password,
    )
}

fn sign_registry_with_password(
    private_path: PathBuf,
    license_paths: Vec<PathBuf>,
    revoked: Vec<String>,
    generated_at: Option<i64>,
    key_id: String,
    output: PathBuf,
    password: &str,
) -> Result<()> {
    if license_paths.is_empty() {
        bail!("at least one --licenses file is required")
    }
    let signing_key = read_encrypted_key_with_password(&private_path, password)?;
    let revoked: std::collections::HashSet<String> = revoked.into_iter().collect();
    let mut entries = Vec::new();
    for path in license_paths {
        let license: License = read_json(&path)?;
        entries.push(RegistryEntry {
            license_id: license.license_id.clone(),
            license_sha256: sha256_hex(canonical_license_document(&license).as_bytes()),
            revoked: revoked.contains(&license.license_id),
        });
    }
    entries.sort_by(|left, right| left.license_id.cmp(&right.license_id));
    let mut registry = Registry {
        format: LICENSE_FORMAT,
        generated_at: generated_at.unwrap_or_else(now_ms),
        issuer_key_id: key_id,
        signature_algorithm: ED25519.to_string(),
        licenses: entries,
        signature: String::new(),
    };
    registry.signature = encode(
        &signing_key
            .sign(canonical_registry_payload(&registry).as_bytes())
            .to_bytes(),
    );
    write_pretty_json(&output, &registry)?;
    println!("registry written to {}", output.display());
    Ok(())
}

fn verify_request(request: &DeviceRequest) -> Result<()> {
    if request.format != REQUEST_FORMAT {
        bail!("unsupported request format")
    }
    if request.signature_algorithm != REQUEST_SIGNATURE_ALGORITHM {
        bail!("unsupported request signature algorithm")
    }
    let public_key_bytes = decode(&request.device_public_key)?;
    let expected_hash = sha256_hex(&public_key_bytes);
    if expected_hash != request.device_key_sha256.to_lowercase() {
        bail!("device public key hash mismatch")
    }
    let verifying_key = EcdsaVerifyingKey::from_public_key_der(&public_key_bytes)
        .context("invalid Android EC public key")?;
    let signature = EcdsaSignature::from_der(&decode(&request.signature)?)
        .context("invalid ECDSA request signature")?;
    verifying_key
        .verify(canonical_request_payload(request).as_bytes(), &signature)
        .context("device request signature verification failed")?;
    Ok(())
}

fn canonical_license_payload(license: &License) -> String {
    let mut features = license
        .features
        .iter()
        .map(String::as_str)
        .collect::<Vec<_>>();
    features.sort_unstable();
    serde_json::to_string(&LicensePayload {
        format: license.format,
        license_id: &license.license_id,
        package_name: &license.package_name,
        device_key_sha256: license.device_key_sha256.to_lowercase(),
        features,
        issued_at: license.issued_at,
        expires_at: license.expires_at,
        issuer_key_id: &license.issuer_key_id,
        signature_algorithm: &license.signature_algorithm,
    })
    .expect("license payload serialization cannot fail")
}

fn canonical_license_document(license: &License) -> String {
    let mut features = license
        .features
        .iter()
        .map(String::as_str)
        .collect::<Vec<_>>();
    features.sort_unstable();
    serde_json::to_string(&LicenseDocument {
        format: license.format,
        license_id: &license.license_id,
        package_name: &license.package_name,
        device_key_sha256: license.device_key_sha256.to_lowercase(),
        features,
        issued_at: license.issued_at,
        expires_at: license.expires_at,
        issuer_key_id: &license.issuer_key_id,
        signature_algorithm: &license.signature_algorithm,
        signature: &license.signature,
    })
    .expect("license serialization cannot fail")
}

fn canonical_registry_payload(registry: &Registry) -> String {
    serde_json::to_string(&RegistryPayload {
        format: registry.format,
        generated_at: registry.generated_at,
        issuer_key_id: &registry.issuer_key_id,
        signature_algorithm: &registry.signature_algorithm,
        licenses: &registry.licenses,
    })
    .expect("registry payload serialization cannot fail")
}

fn canonical_request_payload(request: &DeviceRequest) -> String {
    serde_json::to_string(&RequestPayload {
        format: request.format,
        request_id: &request.request_id,
        package_name: &request.package_name,
        device_public_key: &request.device_public_key,
        device_key_sha256: request.device_key_sha256.to_lowercase(),
        created_at: request.created_at,
        hardware_backed: request.hardware_backed,
        attestation_chain: &request.attestation_chain,
        signature_algorithm: &request.signature_algorithm,
    })
    .expect("request payload serialization cannot fail")
}

fn write_encrypted_key(path: &PathBuf, key: &SigningKey, password: &str) -> Result<()> {
    let mut salt = [0u8; 16];
    let mut nonce = [0u8; 12];
    OsRng.fill_bytes(&mut salt);
    OsRng.fill_bytes(&mut nonce);
    let cipher = Aes256Gcm::new_from_slice(&derive_key(password, &salt))
        .expect("AES-256 key length is fixed");
    let nonce = Nonce::from(nonce);
    let ciphertext = cipher
        .encrypt(&nonce, key.to_bytes().as_slice())
        .map_err(|_| anyhow::anyhow!("encrypt issuer private key"))?;
    let file = EncryptedKeyFile {
        format: 1,
        algorithm: ED25519.to_string(),
        kdf: "Argon2id".to_string(),
        salt: encode(&salt),
        nonce: encode(&nonce),
        ciphertext: encode(&ciphertext),
    };
    write_pretty_json(path, &file)
}

fn read_encrypted_key_with_password(path: &PathBuf, password: &str) -> Result<SigningKey> {
    let file: EncryptedKeyFile = read_json(path)?;
    if file.format != 1 || file.algorithm != ED25519 || file.kdf != "Argon2id" {
        bail!("unsupported issuer key format")
    }
    let salt = decode(&file.salt)?;
    let nonce = decode(&file.nonce)?;
    let cipher = Aes256Gcm::new_from_slice(&derive_key(&password, &salt))
        .expect("AES-256 key length is fixed");
    let nonce_bytes: [u8; 12] = nonce
        .try_into()
        .map_err(|_| anyhow::anyhow!("invalid AES-GCM nonce length"))?;
    let nonce = Nonce::from(nonce_bytes);
    let private_key = cipher
        .decrypt(&nonce, decode(&file.ciphertext)?.as_slice())
        .map_err(|_| anyhow::anyhow!("decrypt issuer private key; password may be wrong"))?;
    let bytes: [u8; 32] = private_key
        .try_into()
        .map_err(|_| anyhow::anyhow!("invalid Ed25519 private key length"))?;
    Ok(SigningKey::from_bytes(&bytes))
}

fn derive_key(password: &str, salt: &[u8]) -> [u8; 32] {
    let params = Params::new(19 * 1024, 2, 1, Some(32)).expect("valid Argon2 parameters");
    let argon = Argon2::new(Algorithm::Argon2id, Version::V0x13, params);
    let mut output = [0u8; 32];
    argon
        .hash_password_into(password.as_bytes(), salt, &mut output)
        .expect("Argon2 parameters are valid");
    output
}

fn read_json<T: for<'de> Deserialize<'de>>(path: &PathBuf) -> Result<T> {
    let text = fs::read_to_string(path).with_context(|| format!("read {}", path.display()))?;
    serde_json::from_str(&text).with_context(|| format!("parse {}", path.display()))
}

fn write_pretty_json<T: Serialize>(path: &PathBuf, value: &T) -> Result<()> {
    let text = serde_json::to_string_pretty(value)? + "\n";
    fs::write(path, text).with_context(|| format!("write {}", path.display()))
}

fn encode(value: &[u8]) -> String {
    URL_SAFE_NO_PAD.encode(value)
}

fn decode(value: &str) -> Result<Vec<u8>> {
    URL_SAFE_NO_PAD
        .decode(value)
        .context("invalid base64url value")
}

fn sha256_hex(value: &[u8]) -> String {
    Sha256::digest(value)
        .iter()
        .map(|byte| format!("{byte:02x}"))
        .collect()
}

fn now_ms() -> i64 {
    std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .expect("system clock is before Unix epoch")
        .as_millis() as i64
}

#[cfg(test)]
mod tests {
    use super::*;

    fn test_license() -> License {
        License {
            format: LICENSE_FORMAT,
            license_id: "ai-test".to_string(),
            package_name: "com.shell.liangyi".to_string(),
            device_key_sha256: "AB".repeat(32),
            features: vec!["z_feature".to_string(), "ai_assistant".to_string()],
            issued_at: 1_700_000_000_000,
            expires_at: 1_800_000_000_000,
            issuer_key_id: DEFAULT_KEY_ID.to_string(),
            signature_algorithm: ED25519.to_string(),
            signature: String::new(),
        }
    }

    #[test]
    fn license_payload_is_signed_and_verified() {
        let mut license = test_license();
        let signing_key = SigningKey::from_bytes(&[7u8; 32]);
        license.signature = encode(
            &signing_key
                .sign(canonical_license_payload(&license).as_bytes())
                .to_bytes(),
        );
        let signature =
            ed25519_dalek::Signature::from_slice(&decode(&license.signature).unwrap()).unwrap();
        signing_key
            .verifying_key()
            .verify(canonical_license_payload(&license).as_bytes(), &signature)
            .unwrap();
    }

    #[test]
    fn license_document_sorts_features_for_android_compatibility() {
        let license = test_license();
        let document = canonical_license_document(&license);
        assert!(document.find("ai_assistant").unwrap() < document.find("z_feature").unwrap());
        assert!(document.contains("\"signature\":\"\""));
    }
}
