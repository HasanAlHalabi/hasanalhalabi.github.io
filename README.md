# Career Roadmap Website

A static site of the Fresh Graduate Developer Career Roadmap (2025–2026):
Frontend, Backend, Mobile & Full-Stack paths, with a Lebanon focus.

## Stack
Next.js 15 (App Router, static export) · React 19 · TypeScript · Tailwind CSS v4 ·
next-themes · Vitest + React Testing Library.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
```

## Test
```bash
npm test         # run once
npm run test:watch
```

## Build (static export)
```bash
npm run build    # outputs static HTML/CSS/JS to ./out
npx serve out    # preview the exported site
```

The `out/` folder is a fully static site — host it on any static host
(Vercel, Netlify, GitHub Pages, S3, …) with no server.

## Structure
- `src/data/` — typed content (paths, quiz, lebanon, quick-start, site).
- `src/lib/` — pure logic (comparison sort/filter, quiz scoring) with unit tests.
- `src/components/` — UI + interactive islands (quiz, comparison table, theme, etc.).
- `src/app/` — App Router pages (home + 4 path pages + lebanon + quick-start).

## Content note
All salary and market figures are 2024–2026 ranges transcribed from the source
roadmap; treat them as ranges that shift with location, company tier, and market.
