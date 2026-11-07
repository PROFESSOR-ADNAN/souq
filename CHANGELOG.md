# Changelog

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.0 (2026-11-07)


### Features

* complete SOUQ production-grade multi-vendor marketplace platform ([94fe1ad](https://github.com/PROFESSOR-ADNAN/souq/commit/94fe1ad59ededd69d449c16b5d059c042a245ff8))
* **deploy:** configure Vercel serverless API routing, connectDB caching, and updated admin seed ([4b91aeb](https://github.com/PROFESSOR-ADNAN/souq/commit/4b91aeb473add30e147fd0f284a6ed1187a90d61))
* **deploy:** generate full-stack server entrypoints for Vercel in web/dist and root ([f095814](https://github.com/PROFESSOR-ADNAN/souq/commit/f0958148e2f8930f73368ecfcffed5b169488e39))
* **web:** add rich authentic Ethiopian sample products and full catalog pages ([509ffae](https://github.com/PROFESSOR-ADNAN/souq/commit/509ffaef5bee76af92d82caa38409e69028be8a5))
* **web:** support dynamic VITE_API_URL environment variable ([783fa72](https://github.com/PROFESSOR-ADNAN/souq/commit/783fa72fac5331f78028151f5c4821dd82d48568))


### Bug Fixes

* **api:** resolve helmet TypeScript call signature incompatibility for Vercel build ([af56e9b](https://github.com/PROFESSOR-ADNAN/souq/commit/af56e9bbadacd0689ac17c0a5b66964ec7e3c653))
* **build:** precompile @souq/shared dist and order root build sequence for Vercel ([3cd7437](https://github.com/PROFESSOR-ADNAN/souq/commit/3cd74378c82998d12fd6500b5db2acb6af59cbad))
* **web:** resolve TypeScript strict build errors and add vite-env types for Vercel deployment ([9c51475](https://github.com/PROFESSOR-ADNAN/souq/commit/9c51475460431db85ec981d680dca5d9d9be91d8))

## [0.1.0] - 2026-11-01
### Added
- Complete architecture specification and 11 Architectural Decision Records (ADRs).
- Strict integer santim financial handling across domain entities.
- Two-phase inventory reservation algorithm and BullMQ delay queue.
- Chapa payment integration with server-side HMAC verification and idempotency keys.
- Order finite state machine with audit trails.
- Local dev Docker Compose setup with MongoDB single-node replica set, Redis, MinIO, and Mailpit.
- React 18 / Vite / Tailwind SPA with English and Amharic i18n support.
