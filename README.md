# Muhammad Saeed — Portfolio

A clean, modern, white-theme portfolio website built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**.

The site is intentionally focused on the work itself — it showcases **portfolios with detailed case-study pages**, plus **Services** and **Experience** sections. There is no contact information or social links by design.

## Sections

- **Hero** — intro, focus areas, and headline stats
- **Selected Work** — a grid of platforms, each linking to a full case study
- **Case study pages** (`/work/[slug]`) — challenge → approach → highlights → outcome, with results and toolkit
- **Services** — what Muhammad offers and the deliverables for each
- **Experience** — a timeline of roles

## Editing content

All content is driven from a single file:

```
lib/data.ts
```

Update the `profile`, `services`, `projects`, and `experience` exports to change anything on the site — including adding/removing case studies. Each project's cover and case-study header use a CSS gradient (`accentFrom` / `accentTo`), so no image assets are required.

> The current content is realistic placeholder copy. Replace it with Muhammad's real projects and details.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (defaults to http://localhost:3000).

## Deploy on Netlify

1. Push this repo to GitHub, GitLab, or Bitbucket.
2. In the [Netlify dashboard](https://app.netlify.com/), choose **Add new site → Import an existing project** and connect the repo.
3. Netlify auto-detects Next.js 16 — no extra plugins or env vars are required for this site.
4. Click **Deploy**. Build command (`npm run build`) and Node 20 are set in `netlify.toml`.

All pages are statically generated, so the site is fast and works out of the box on Netlify’s Next.js runtime.

## Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

> **Note on the bundler:** `dev` and `build` are configured to use **Webpack** (`--webpack`). Next.js 16 defaults to Turbopack, but Turbopack crashed with an illegal-instruction error on this build machine's CPU. If you run on different hardware, you can remove the `--webpack` flags in `package.json` to use the faster Turbopack default.

## Tech

- Next.js 16 (App Router, async `params`, static generation via `generateStaticParams`)
- React 19.2
- Tailwind CSS v4
- Scroll-reveal animations via `IntersectionObserver` (respects `prefers-reduced-motion`)

## Project structure

```
app/
  layout.tsx            Root layout (fonts, metadata, header, footer)
  page.tsx              Home page (composes the sections)
  not-found.tsx         404 page
  work/[slug]/page.tsx  Case study detail (statically generated)
components/
  Header.tsx, Footer.tsx, Reveal.tsx, ProjectCard.tsx
  sections/             Hero, Work, Services, Experience
lib/
  data.ts               All site content
```
