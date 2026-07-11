# Shell++ AI license signer

This is a cross-platform Rust CLI for offline Ed25519 signing. The issuer private key is stored in an Argon2id + AES-256-GCM encrypted file. Keep that file outside the repository and on an offline machine.

## Build

Install Rust from [rustup.rs](https://rustup.rs/), then run:

```text
cargo build --release
```

The binary is written to `target/release/` with the platform-native executable suffix.

Launch the GUI directly by running the binary without arguments:

```text
shell-ai-license-signer
```

The GUI provides native file pickers and three tabs for key generation, license signing, and registry generation. The CLI remains available for automation, and `shell-ai-license-signer gui` explicitly opens the same interface.

## Commands

Generate an issuer key once:

```text
shell-ai-license-signer generate-key --private-key issuer.key.json --public-key issuer_public.txt
```

Configure the public key for Android builds:

```properties
shell.aiIssuerPublicKey=BASE64URL_RAW_ED25519_PUBLIC_KEY
shell.aiLicenseRegistryUrl=https://raw.githubusercontent.com/cat-5054/shellpplicense/main/registry.json
```

Verify a device request and sign a license:

```text
shell-ai-license-signer sign-license --private-key issuer.key.json --request request.json --license-id ai-device-001 --expires-at 1798761600000 --output license.json
```

Generate the public GitHub registry:

```text
shell-ai-license-signer sign-registry --private-key issuer.key.json --licenses license.json --output registry.json
```

Upload the generated `registry.json` to the root of the `main` branch in `cat-5054/shellpplicense`. The Android app reads it from:

```text
https://raw.githubusercontent.com/cat-5054/shellpplicense/main/registry.json
```

Revoke a license by keeping it in the registry and listing its ID:

```text
shell-ai-license-signer sign-registry --private-key issuer.key.json --licenses license.json --revoked ai-device-001 --output registry.json
```

## Cross-platform targets

The same source builds on Windows, Linux, and macOS. The repository workflow produces native artifacts for:

- `x86_64-pc-windows-msvc`
- `x86_64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
