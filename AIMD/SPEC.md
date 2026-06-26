<!-- # TEMPLATE: SPEC.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file tracks formal specifications, comparing originally requested guidelines 
# against actual implemented items. Document architectural challenges, optimization rules,
# compatibility constraints, and platform limits.
-->

<!-- markdownlint-disable MD013 -->
# SPEC

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔸 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

## 🔍 Table of Contents
- [[#🔗 External Application Protocols & URI Schemes]] ^toc-uri
- [[#💻 Native OS Integration Details]] ^toc-os
- [[#📋 Originally Requested Specifications]] ^toc-requested
- [[#🎯 Implemented Technical Concerns & Optimization Features]] ^toc-optimization
- [[#🚦 Internal Function Signatures & System Exit Codes]] ^toc-codes
- [[#Go to...]] ^toc-goto

This document compiles the user requirements and instructions from `AGENTS.md` and related files and provides detailed documentation of how the extension was architected and built.

---

## 🔗 External Application Protocols & URI Schemes
[[#^toc-uri|TOC]]

### {{Protocol/Application Name}} Link Contract
- **Target Schema:** `{{schema://action}}`
- **Query String Map:**

  | Parameter | Type | Required | Description / Constraints |
  | :--- | :--- | :--- | :--- |
  | `{{param1}}` | `{{String}}` | Yes | {{Absolute target path. Must be URL-encoded (UTF-8).}} |
  | `{{param2}}` | `{{String}}` | No | {{Optional workspace name override fallback logic.}} |

---

## 💻 Native OS Integration Details
[[#^toc-os|TOC]]

### Registry / Configuration Mappings
- **System Hook Target:** `{{HKEY_CLASSES_ROOT\Directory\shell\YourAction}}`
- **Properties Mapping:**
  - `{{KeyName}}` (Default): `"{{Action Display Name}}"`
  - `"{{Icon}}"`: `{{REG_SZ}}` absolute path to targeted graphic resource asset.

### File & Folder Attribute Masks
- **Configuration Context Target:** `{{filename.ext}}` (Must be set to `{{+H}}` Hidden and `{{+S}}` System).
- **Directory Workspace Parent:** Must have the `{{+R}}` Read-Only flag set for host engine processing loop.

---

## 📋 Originally Requested Specifications
[[#^toc-requested|TOC]]
- **{{Request Guideline Title}}**: {{Describe originally listed conditions, specifications, and layout bounds}}
- **{{Request Guideline Title}}**: {{Describe originally listed conditions, specifications, and layout bounds}}

---

## 🎯 Implemented Technical Concerns & Optimization Features
[[#^toc-optimization|TOC]]
- **{{Optimization / Safety Feature Name}}**:
  - **The Problem**: {{What technical pitfall, thread lock, crash threat, or memory leaks could occur}}
  - **The Solution / Code Implementation**: {{How the code solves this elegantly, citing direct modules, APIs, or loop wrappers used}}
- **{{Optimization / Safety Feature Name}}**:
  - **The Problem**: {{Details}}
  - **The Solution / Code Implementation**: {{Details}}

---

## 🚦 Internal Function Signatures & System Exit Codes
[[#^toc-codes|TOC]]

### Engine Error / Exit Status Codes

| Code (Integer) | Semantic Definition | Trigger Condition |
| :--- | :--- | :--- |
| `0` | `Success` | Complete flawless lifecycle termination. |
| `1` | `{{ERR_MISSING_ARGS}}` | Script executed without critical incoming command-line arguments. |
| `2` | `{{ERR_ENV_UNDEFINED}}` | Target environment variables were unreadable, corrupt, or blank. |
| `3` | `{{ERR_PATH_NOT_FOUND}}` | Physical asset disk lookup evaluation loop failed. |
| `4` | `{{ERR_LINK_COLLISION}}` | Colliding structural link or directory target already occupied. |

### Data Models & State Layouts
```ini
; Expected raw configuration template dataset example
[{{SectionHeader}}]
{{KeyName}}={{C:\Path\To\Asset.ext}}
{{IndexName}}={{0}}
```

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔸 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

<!-- # TEMPLATE: SPEC.template.md -->
