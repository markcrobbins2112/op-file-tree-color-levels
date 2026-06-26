<!-- # TEMPLATE: DESIGN.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# Use this document as the single source of truth for the system's design patterns, constraints, and data flow. 
# Do not propose code or modifications that violate the patterns, structural layouts, or database schemas defined below.
-->

<!-- markdownlint-disable MD013 -->
# DESIGN

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔸 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#🗺️ System Topology & Context Map]] ^toc-topology
- [[#💻 High-Level Components & Communication]] ^toc-components
- [[#💾 Data Architecture & Schema Rules]] ^toc-data
- [[#📂 Core File Structure Layout]] ^toc-layout
- [[#🚦 Design Principles & Guardrails]] ^toc-guardrails
- [[#🚀 Go to...]] ^toc-goto

## 🗺️ System Topology & Context Map
[[#^toc-topology|TOC]]
- **Architecture Style:** {{Specify pattern, e.g., Modular Monolith, MVC, Layered Service Architecture}}
- **Primary Language Stack:** {{Specify base languages core, e.g., Node.js TypeScript, C#, AutoIt3}}
- **Frameworks & Core Runtimes:** {{List engine bindings or frameworks, e.g., Express, SQLite, .NET Core}}

## 💻 High-Level Components & Communication
[[#^toc-components|TOC]]
- **Frontend/Client:** {{Describe presentation tier or entry runner mechanism, e.g., CLI parsing, Web UI}}
- **Backend Core:** {{Describe engine state controller role, validation loops, and configuration mapping management}}
- **External Integration:** {{Specify OS endpoints, hardware hooks, APIs, or custom protocol link delivery handlers}}

---

## 💾 Data Architecture & Schema Rules
[[#^toc-data|TOC]]
- **Storage Type:** {{Specify persistence footprint, e.g., Flat JSON datasets, INI variables, Relational schemas}}
- **State Constraints:** {{Define hard configuration persistence parameters, e.g., Environment configuration isolation rules}}

## 📂 Core File Structure Layout
[[#^toc-layout|TOC]]
```text
📂 Project Root/
├── 📂 {{source_dir}}/     # Core business logic execution modules
├── 📂 {{tests_dir}}/      # Automated validation suites and fixture mock blocks
├── 📂 {{assets_dir}}/     # Graphic binaries, configuration templates, resources
└── 📂 docs/               # Technical specifications and human runbook maps
```

---

## 🚦 Design Principles & Guardrails
[[#^toc-guardrails|TOC]]
- **Dependency Minimization:** Avoid adding external packages/libraries unless natively impossible.
- **Separation of Concerns:** Keep presentation/UI entirely decoupled from system-level business logic.
- **Security Constraints:** {{Specify validation rules, e.g., Absolute sanitization metrics on incoming path parameters against injection mutations}}

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔸 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: DESIGN.template.md -->
