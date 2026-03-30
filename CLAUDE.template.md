---
title: CLAUDE.md Template
description: Example development guidelines for Claude Code. Replace with your project-specific instructions.
author: Kyle (https://github.com/kyle-park-io)
date: 2026-03-30
---

# Project Guidelines

> Replace this file with your own project-specific instructions.
> Claude Code reads this file to understand your project context, conventions, and workflow.

## Project Overview

Briefly describe what this project does and its main goals.

## Architecture

Describe the high-level architecture and key components.

```
src/
├── api/        # API layer
├── services/   # Business logic
├── models/     # Data models
└── utils/      # Shared utilities
```

## Tech Stack

- **Language**: TypeScript
- **Framework**: (e.g. Express, Next.js)
- **Database**: (e.g. PostgreSQL, MongoDB)
- **Testing**: (e.g. Jest, Vitest)

## Development Conventions

- Use `camelCase` for variables and functions, `PascalCase` for classes and types
- Prefer `async/await` over promise chains
- Write tests for all business logic
- Keep functions small and focused — single responsibility

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Build
npm run build
```

## Notes for Claude

- Always run tests before marking a task as done
- Prefer editing existing files over creating new ones
- Do not add unnecessary comments or docstrings

## Plugin Usage

- When starting a new feature, use `feature-dev` to explore the codebase, plan architecture, and implement step by step.
- When working on UI/UX or frontend components, use `frontend-design` for design guidance and best practices.
- When working with a library or framework, use `context7` to fetch up-to-date documentation instead of relying on training data.
- When a logical chunk of code has been written, use `code-simplifier` to simplify for clarity and maintainability.
- When writing or debugging end-to-end tests, use `playwright`.
- Before creating a PR, run `code-review` for a quick overall review, then `pr-review-toolkit` for deeper analysis covering comments, tests, error handling, and type design.
- When committing, pushing, or creating a PR, use `commit-commands`.
- When managing GitHub issues, PRs, or repo operations, use `github`.
- At the end of a session, use `claude-md-management` to capture learnings and update CLAUDE.md.
