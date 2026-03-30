---
description: Security guidance plugin usage and secure coding practices.
---

# Security Conventions

## Plugin

- `security-guidance@claude-plugins-official` is active
- Automatically warns about potential security issues when editing files
- Covers: command injection, XSS, unsafe code patterns, and more

## Rules

- Never ignore security warnings from the plugin — address them before committing
- Never commit secrets, tokens, or credentials — use `.env` and `.gitignore`
- Validate all external input at system boundaries (user input, API responses)
- Avoid unsafe patterns:
  - Command injection: never interpolate user input into shell commands
  - XSS: always sanitize output in HTML contexts
  - SQL injection: always use parameterized queries
- If unsure about security implications, ask before proceeding
