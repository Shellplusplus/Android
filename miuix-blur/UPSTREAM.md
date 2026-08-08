# Miuix Blur source snapshot

This module contains the Android and common source sets from
[`compose-miuix-ui/miuix`](https://github.com/compose-miuix-ui/miuix), fixed at commit
`b459d861561e077c8eda6702abff2825c7f79098`.

- Upstream module: `miuix-blur`
- Upstream license: Apache License 2.0
- Local build-only changes: the upstream multiplatform build script is replaced with the
  repository's Android-compatible Gradle configuration, the local minimum SDK remains 26,
  and the MIUIX shader AAR metadata check is disabled while the project remains on compile SDK 36.
- Source files retain their upstream copyright and SPDX headers.

The snapshot is included because the progressive blur API was available in upstream source but
had not yet been published in a Maven Central release. The rest of Miuix remains on version 0.9.3.
