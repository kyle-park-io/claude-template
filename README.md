---
title: Claude Template
description: A starter template for Claude Code projects. Clone and customize to fit your needs.
author: Kyle (https://github.com/kyle-park-io)
date: 2026-03-30
---

# Claude Template

A ready-to-use Claude Code configuration template. Clone this repo and customize it to match your workflow.

## Getting Started

1. Clone this repository
2. Edit `.claude/settings.json` to adjust model, effort, and other preferences
3. Update `CLAUDE.template.md` with your project-specific instructions
4. Copy `.env.example` to `.env` and fill in required tokens

## Project Structure

```
.
├── .claude/
│   ├── settings.json        # Shared project settings (commit this)
│   └── settings.local.json  # Local personal overrides (gitignored)
├── docs/
│   └── PLUGINS.md           # Plugin setup and installation guide
├── .env.example             # Environment variable template
├── .gitignore
├── CLAUDE.template.md                # Claude Code development guidelines
└── README.md                # This file
```

## Configuration

### `.claude/settings.json`

Shared settings committed to the repo:

- `model` — Claude model to use (default: `claude-sonnet-4-6`)
- `thinkingEffort` — reasoning effort: `"low"`, `"medium"`, or `"high"`
- `enabledPlugins` — installed plugins

### `.claude/settings.local.json`

Personal local overrides. Not committed to the repo. Structure mirrors `settings.json`.

## Plugins

This template comes with a set of pre-installed plugins. See [docs/PLUGINS.md](docs/PLUGINS.md) for the full list and setup instructions.

## Plugin-based Workflow

This template uses **plugins** as the primary extension mechanism instead of manually wiring individual skills, hooks, and MCP servers in `settings.json`. Plugins bundle skills, hooks, MCP servers, and other capabilities together in a single installable unit.

- Add functionality by installing plugins: `claude plugins install <plugin>@claude-plugins-official`
- Remove functionality by uninstalling plugins: `claude plugins uninstall <plugin>`
- See [docs/PLUGINS.md](docs/PLUGINS.md) for the full list of installed plugins and setup instructions

## Customization

- Copy `CLAUDE.template.md` to `CLAUDE.md` and fill it in with your project's architecture, conventions, and development guidelines
- Adjust `thinkingEffort` in `settings.json` per task complexity
