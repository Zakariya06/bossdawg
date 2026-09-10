# CLAUDE.md

**Read [`AGENTS.md`](./AGENTS.md) in full before creating or modifying any page, component, or stylesheet.**

`AGENTS.md` is the single source of truth for this project's development and design rules. Nothing here restates it — this file exists only so the rules are loaded automatically.

Quick orientation (details and the binding rules are in `AGENTS.md`):

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, npm. Import alias `@/*` → `./src/*`.
- **Design tokens:** `src/app/globals.css` only. Tailwind v4 has no `tailwind.config.js`.
- **Shared components:** `src/components/`. Reuse before creating.
- **Verification gate:** `npm run build` must pass (it runs the TypeScript check).
