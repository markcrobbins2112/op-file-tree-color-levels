<!-- # TEMPLATE: CODE.template.md -->
<!-- 
# INSTRUCTIONS FOR THE HUMAN DEVELOPER:
# Any text bounded by double curly braces {{like this}} is a placeholder for you to fill out.
# Replace those placeholders with real paths, rules, and project constraints.
#
# INSTRUCTIONS FOR THE AI AGENT:
# This file governs programming guidelines, syntax conventions, indentation (tabs vs spaces), 
# ordering, and regions formatting. Every single code file must adhere strictly to these rules!
-->

<!-- markdownlint-disable MD013 -->
# CODE

## 📑 AI Primary Files
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔸 [CODE.md](CODE.md)
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
- [[#Implementation Guidelines]] ^toc-guidelines
- [[#Markdown Guidelines]] ^toc-markdown
- [[#Formatting & Syntax Style]] ^toc-syntax
- [[#🛡️ Robustness & Error-Handling Frameworks]] ^toc-errors
- [[#Regions Division Style]] ^toc-regions
- [[#🚀 Go to...]] ^toc-goto

## 🛠️ Implementation Guidelines
[[#^toc-guidelines|TOC]]
- **Encoding Safety**: Preserve UTF-8 signatures. Ensure icons, characters, emojis, and unicode symbols are written cleanly without corruption (mojibake).
- **Target Changes Only**: Avoid complete file rewrites. Prefer minor, highly precise surgical patches to retain existing code blocks and comments intact.

## 📝 Markdown Guidelines
[[#^toc-markdown|TOC]]
- Use dashes (`-`) instead of asterisks (`*`) for Bullet list items.
- Maintain UPPERCASE.md documents cleanly with alphabetical features lists, updated logs, and checked backlogs.

## ✒️ Formatting & Syntax Style
[[#^toc-syntax|TOC]]
- **Indentation**: {{Specify spacing preference [e.g., "Use tabs for indentation" or "Use 2 spaces"]}}
- **Braces and Blocks**: {{Specify structural block guidelines [e.g., "Always use braces for control expressions, never inline single-line statements without brackets"]}}
- **Naming Conventions**: {{Specify casing for variables, functions, and files [e.g., camelCase, PascalCase, snake_case]}}
- **Global Function Ordering**: {{Specify function ordering policies [e.g., "Order alphabetically" or "Listed immediately after dependencies"]}}

---

## 🛡️ Robustness & Error-Handling Frameworks
[[#^toc-errors|TOC]]
- **Primary Paradigm:** {{Specify failure capturing, e.g., Structured Try/Catch blocks, return tuples, or local error code checking values}}
- **Defensive Coding Checks:** Always validate that external dependencies, arguments, and file paths exist before performing destructive disk mutations.
- **Logging Integration:** Failures must write details to stderr or an internal diagnostics log before terminating execution.
- **Inline Comments:** Document the "Why" behind complex code logic or architectural workarounds. Do not explain obvious language features.

---

<!-- 
  INSTRUCTION: Specify standard regions delimiters (#region / #endregion) 
  and naming rules to group structures systematically.
-->
## 📂 Regions Division Style
[[#^toc-regions|TOC]]
- **Structures**: Wrap classes or data blocks inside system structures regions named `_globals`, `_classes`, or custom container dividers.
- **Example Regions Map**:
  ```text
  // #region _globals
  const g_settingX = "Value";
  // #endregion

  // #region _classes
  class Handler { ... }
  // #endregion
  ```

---
## 🚀 Go to...
[[#^toc-goto|TOC]]
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔸 [CODE.md](CODE.md)
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

<!-- # TEMPLATE: CODE.template.md -->
