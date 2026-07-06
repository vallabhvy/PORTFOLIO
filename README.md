# Vallabh Yelsangikar — Portfolio

[![Build and Deploy](https://github.com/vallabhvy/PORTFOLIO/actions/workflows/deploy.yml/badge.svg)](https://github.com/vallabhvy/PORTFOLIO/actions/workflows/deploy.yml)

**Live site:** [vallabhvy.github.io/PORTFOLIO](https://vallabhvy.github.io/PORTFOLIO/)

A minimalist, editorial portfolio built to show how I think about and build software — not to recreate a résumé on a webpage. Strictly black and white, typography-led, and calm.

## About

This is the source for my personal portfolio site. It tells the story behind the projects — billing systems, on-chain medical records, offline AI tooling, real-time chat, and more — through case-study layouts rather than icon walls and buzzwords.

**Sections:** Hero · About · Skills · Featured Work · Engineering Philosophy · Experience · Education & Learning · Contact

## Stack

| Layer | Tools |
| --- | --- |
| UI | React 18, TypeScript, Tailwind CSS v4 |
| Motion | Framer Motion |
| Build | Vite 5 |
| Icons | React Icons |

## Features

- Editorial, alternating project layouts with status badges (`Active`, `In progress`, `Early stage`)
- Animated typewriter hero, scroll reveals, and sticky nav with scroll progress
- Single source of truth for all copy in `src/data/content.ts`
- Downloadable résumé PDF from `public/`
- Accessible: skip link, semantic HTML, ARIA labels, keyboard navigation, `prefers-reduced-motion` support
- SEO: meta tags, Open Graph, JSON-LD structured data

## Getting started

**Prerequisites:** Node.js 20+

```bash
git clone https://github.com/vallabhvy/PORTFOLIO.git
cd PORTFOLIO
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Preview the production build locally |

> **Windows note:** If `npm install` fails with `ERR_INVALID_ARG_TYPE`, run  
> `$env:ComSpec = "C:\Windows\System32\cmd.exe"` then retry `npm install`.

## Project structure

```
src/
├── components/          Section components (Hero, About, Projects, …)
│   └── primitives/      Container, Section, Reveal, ButtonLink
├── data/content.ts      All copy, projects, skills, and links
├── hooks/               useTypewriter, useActiveSection
├── lib/                 Motion variants, cn helper
└── styles/index.css     Tailwind + design tokens
public/                  Static assets (favicon, robots.txt, résumé PDF)
```

Edit `src/data/content.ts` to update site content. Replace `public/Vallabh_V_Yelsangikar_resume.pdf` to update the downloadable résumé.

## Deployment

This repo is set up to deploy automatically on every push to `main`.

### GitHub Pages (recommended)

1. Push to `main` on [github.com/vallabhvy/PORTFOLIO](https://github.com/vallabhvy/PORTFOLIO)
2. Go to **Settings → Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` builds and publishes to  
   **https://vallabhvy.github.io/PORTFOLIO/**

The build sets `BASE_PATH=/PORTFOLIO/` so asset paths resolve correctly on GitHub Pages.

### Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Vite**
3. Deploy — no base path override needed (`vercel.json` included)

### Netlify

```bash
npm run build
# Publish directory: dist
```

Set **Build command** to `npm run build` and **Publish directory** to `dist`.

## License

Personal portfolio — source is public for reference. Content and design © Vallabh Yelsangikar.
