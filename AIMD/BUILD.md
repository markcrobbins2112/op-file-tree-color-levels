<!-- # TEMPLATE: BUILD.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file serves as the system construction guide. It must document building blocks,
# dependencies installation commands, target directory structures, packing pipelines,
# and runtime execution.
-->

<!-- markdownlint-disable MD013 -->
# BUILD

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
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
- [[#📋 Prerequisites & Toolchain Setup]] ^toc-prereq
- [[#🛠️ Build & Packaging Pipeline]] ^toc-pipeline
- [[#🚀 Execution & Packing Commands]] ^toc-commands
- [[#🧪 Post-Build Verification Rules]] ^toc-verify
- [[#🚀 Go to...]] ^toc-goto

## 📋 Prerequisites & Toolchain Setup
[[#^toc-prereq|TOC]]
- **Compiler/Runtime:** {{Specify runtime, e.g., Node.js v20.x, GCC v13.2, Aut2Exe v3.3+}}
- **Global System Variables Required:**
  - `{{VARIABLE_NAME}}`: {{Paths to external headers, global dependencies, or binary compiler folders}}

---

<!-- 
  INSTRUCTION: Detail the high-level architecture of the build system.
  Mention variables compilation pathways, compiler tools, preprocessors, etc.
-->
## 🛠️ Build & Packaging Pipeline
[[#^toc-pipeline|TOC]]
- {{Describe the compilation pipeline here, with step-by-step logic detailing how source code converts into running software}}

### 📦 Key Components
- **`{{Component Path}}`**: {{Purpose of this file/directory inside the compilation chain}}
- **`{{Compiler Tooling}}`**: {{Dependencies, binary packages, or transpilers required for completion}}

---

<!-- 
  INSTRUCTION: List the literal, usable CLI shell commands for restoring packages, 
  launching development modes, linting files, and packaging production bundles.
-->
## 🚀 Execution & Packing Commands
[[#^toc-commands|TOC]]
- **Install Dependencies**:
  ```bash
  {{Package manager install command, e.g., npm install}}
  ```
- **Local Dev Server / Watch Mode**:
  ```bash
  {{Command for local standalone sandbox running, e.g., npm run dev}}
  ```
- **Verification / Linting**:
  ```bash
  {{Command for automated quality checks, e.g., npm run lint}}
  ```
- **Production Package Compilation**:
  ```bash
  {{Command to build distribution bundles, e.g., npm run build}}
  ```

---

## 🧪 Post-Build Verification Rules
[[#^toc-verify|TOC]]
- 1. **Size Checking:** Verify that the output executable or bundle size is greater than `0 KB`.
- 2. **Path Verification:** Check that the output file is located exactly within the target distribution directory layout.
- 3. **Smoke Test Command:** `{{Enter a simple CLI verification test, e.g., bin\app.exe --version}}`

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: BUILD.template.md -->
