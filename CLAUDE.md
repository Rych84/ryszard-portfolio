# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server → http://localhost:3000
npm run build    # Production build (also runs TypeScript checks)
npm run lint     # ESLint
```

## Stack

- **Next.js 16** (App Router, `/src/app/`)
- **React 19** with `"use client"` components throughout
- **Tailwind CSS v4** — configured via `@theme` block in `globals.css`, NO `tailwind.config.ts`
- **Framer Motion v12** — stricter TypeScript types; use cubic bezier arrays for `ease`, not strings (e.g. `[0, 0, 0.2, 1]` not `"easeOut"`)
- **Lucide React v1** — social icons (Linkedin, Github) do not exist; use `ExternalLink` instead

## Architecture

Single-page portfolio assembled in `src/app/page.tsx`. All sections are separate client components in `src/components/`. Portfolio data (experience, skills, projects, blog posts) lives entirely in `src/data/portfolio.ts` — edit that file to update content.

### Section order
`Navigation → Hero → About → Timeline → Skills → Projects → Certifications → BlogPreview → Contact → Footer`

### CSS approach
Global base styles, card styles, button styles, and animation primitives are in `globals.css`. Individual components use inline `style` props for per-element colours and layout. Tailwind utility classes (`hidden`, `md:flex`, etc.) used only for responsive breakpoints.

### Font setup
Three fonts loaded via `next/font/google` in `layout.tsx`:
- `--font-syne` → headings (`font-family: var(--font-syne)`)
- `--font-dm-sans` → body (`font-family: var(--font-dm-sans)`)
- `--font-jetbrains-mono` → labels/code (`font-family: var(--font-jetbrains-mono)`)

### Assets
- Profile photo: `public/images/ryszard.jpg`
- Resume PDF: `public/Ryszard_Tomaszewski_Sr_SDET_Lead.pdf`
