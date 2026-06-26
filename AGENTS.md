<!-- # TEMPLATE: AGENTS.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file defines your operational boundaries, tools, platforms, and roles.
# Adhere strictly to the boundaries and prompts defined for your assigned persona.
-->

<!-- markdownlint-disable MD013 -->
# AGENTS

## 📑 AI Primary Files
- 🔸 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔹 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

## 🔍 Table of Contents
- [[#💻 Application]] ^toc-application
- [[#⚙️ Platform]] ^toc-platform
- [[#👥 Core Agent Roster & Personas]] ^toc-roster
- [[#🛠️ Global Execution Rules & Governance]] ^toc-governance
- [[#🚫 File Restrictions]] ^toc-restrictions
- [[#📂 Project Context]] ^toc-context
- [[#🚦 Interaction Rules & Handoff Protocols]] ^toc-protocols
- [[#🏗️ Verification and Architecture Anchors]] ^toc-anchors
- [[#📦 Build]] ^toc-build
- [[#🎨 Code Styling and Preferences]] ^toc-styling
- [[#🚀 Go to...]] ^toc-goto

<!-- 
  INSTRUCTION: Specify the core objective / purpose of the application.
  Provide a concise 1-2 sentence description of what system is being built.
-->
## 💻 Application
[[#^toc-application|TOC]]
- {{Describe the core application/extension being built here, e.g., "A background utility extension to streamline cross-platform environment handoffs and directory mapping workflows."}}

<!-- 
  INSTRUCTION: List the environment, target runner, code editors, OS, 
  or platforms where this app compiles and executes.
-->
## ⚙️ Platform
[[#^toc-platform|TOC]]
- {{Specify platforms, e.g., Windows 10, macOS, Cursor, VS Code, Node.js runtime environment, etc.}}

---

## 👥 Core Agent Roster & Personas
[[#^toc-roster|TOC]]

### 1. {{Agent Role Name / e.g., Lead Architect}}
<!-- AI Purpose: Defines a specific AI persona, its strategic purpose, and operational mindset. -->
- **Persona Archetype:** {{e.g., Pragmatic, pedantic, security-focused expert code optimizer}}
- **Core Responsibility:** {{e.g., Designing system topology, verifying schema migrations, structural layouts}}
- **System Prompt / Identity:**
  ```text
  <!-- AI Format: Insert the exact system prompt block to copy/paste into your initialization context. -->
  You are an expert... Your goal is to... Always prioritize...
  ```

### 2. {{Agent Role Name / e.g., Quality Assurance Bot}}
- **Persona Archetype:** {{e.g., Edge-case hunter, test-driven development purist, validation engine}}
- **Core Responsibility:** {{e.g., Writing integration tests, finding runtime edge cases, verifying errors}}
- **System Prompt / Identity:**
  ```text
  You are an automated code auditor... Focus entirely on failure states...
  ```

---

## 🛠️ Global Execution Rules & Governance
[[#^toc-governance|TOC]]

<!-- 
  INSTRUCTION: Document strict instructions regarding what the AI can and cannot modify.
  This includes package.json rules, read-only third party vendor folders, etc.
-->
## 🚫 File Restrictions
[[#^toc-restrictions|TOC]]
- {{List any strict file edits rules, e.g., "Do not create new files unless requested", "Do not modify dependencies without human approval"}}

### Do NOT alter Files
- `!🌐index.md`
- `!🏗️setup.md`
- `.gitignore`
- {{List other critical files, e.g., LICENSE, core infrastructure configuration templates, etc.}}

### Inline Tasks
- {{Specify inline system tasks parser format, e.g., "Comments in the form of `;! {instructions}` or `//! {instructions}` found in source code are active AI Tasks"}}

<!-- 
  INSTRUCTION: Detail the environment context (e.g., test fixtures, sandboxing, 
  permissions, emulator settings, mock data rules).
-->
## 📂 Project Context
[[#^toc-context|TOC]]
- {{Describe any local development directories or resources, e.g., "The standalone mock database file layout is configured for sandbox execution loops only."}}

---

## 🚦 Interaction Rules & Handoff Protocols
[[#^toc-protocols|TOC]]

### Multi-Agent Communication Style
<!-- AI Purpose: Instructs the AI on how to pass tasks to other top-level signatures or ask for human validation. -->
- **Handoff Phrase:** Use `[HANDOFF -> AgentName]` when a task shifts out of your core responsibility scope.
- **Escalation Trigger:** Stop and request Human-in-the-Loop (`HITL`) confirmation if a proposed change disrupts primary system configurations, engine subkeys, or destructive file purges.

---

## 🏗️ Verification and Architecture Anchors
[[#^toc-anchors|TOC]]

<!-- 
  INSTRUCTION: List verification rules that MUST happen before complete cycles are closed.
  For example, running 'lint_applet' or 'compile_applet'.
-->
## 📦 Build
[[#^toc-build|TOC]]
- **Linter & Verification**: {{Provide check rules, e.g., "Always run compilation checks and execution verification routines before finishing your turn."}}

## 🎨 Code Styling and Preferences
[[#^toc-styling|TOC]]
- See [CODE](AIMD/CODE.md)

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔸 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔹 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

<!-- # TEMPLATE: AGENTS.template.md -->
