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
