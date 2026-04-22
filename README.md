# Shruti Devlekar, Portfolio

A single-page portfolio built with Astro and Tailwind. Minimal, fast, and easy to edit.

## Local development

```
npm install
npm run dev
```

The site runs at http://localhost:4321.

```
npm run build
npm run preview
```

## One thing you need to do before deploying

Drop your latest resume PDF into the `public/` folder and name it exactly:

```
public/Shruti_Devlekar_Resume.pdf
```

That file is what the "Download Resume" buttons link to. If you rename it or use a different path, update `src/data/profile.ts` accordingly.

## Where to edit content

All content lives in plain TypeScript files under `src/data/`. You never touch the component code to update content.

- `src/data/profile.ts` - Name, email, phone, LinkedIn, GitHub, resume path.
- `src/data/experience.ts` - Work history and internships. Add new roles by pushing to the array.
- `src/data/projects.ts` - All eight projects with tags, stacks, metrics, and descriptions.
- `src/data/publications.ts` - Journal publications list.
- `src/data/skills.ts` - Skills grouped by category.
- `src/data/education.ts` - Degrees and GPAs.

The visual layer lives under `src/components/` and should only need touching if you want to change the design.

## Colors and fonts

Palette and fonts are defined once in `tailwind.config.mjs`:

- Background: `#FAFAF7` (warm off white)
- Text primary: `#1A1A1A`
- Accent: `#B8533A` (muted terracotta)

Fonts are loaded from Google Fonts in `src/layouts/Base.astro`: Instrument Serif for headings, Inter for body, JetBrains Mono for stats and code chips.

## Deploying to Vercel (free)

1. Push this folder to a new GitHub repo (for example `portfolio` under your Shruti-1205 account).
2. Go to vercel.com, sign in with GitHub, click "Add New Project" and import the repo.
3. Vercel auto-detects Astro. Accept the defaults and click Deploy.
4. You get a live URL like `shruti-devlekar.vercel.app` within a minute.
5. Every future `git push` auto-redeploys.

Custom domain: add it later under Project Settings, DNS, whenever you want.

## Things to update on the live site later

- The Springer 2023 publication currently shows a placeholder title. Open `src/data/publications.ts` and replace the first publication entry title with the exact paper title once confirmed.
- If you want to hide the Community Dreams Foundation entry at any time, remove its object from the `experience` array in `src/data/experience.ts`.
- Add new projects by appending to the array in `src/data/projects.ts`. Required fields are documented in the `Project` interface at the top of that file.

## File tree

```
WEBSITE/
  public/
    favicon.svg
    robots.txt
    Shruti_Devlekar_Resume.pdf   (you add this)
  src/
    components/   (Nav, Hero, About, Experience, Projects, Publications, Skills, Education, Contact, Footer)
    data/         (all content as TypeScript)
    layouts/Base.astro
    pages/index.astro
    styles/global.css
  astro.config.mjs
  tailwind.config.mjs
  tsconfig.json
  package.json
```
