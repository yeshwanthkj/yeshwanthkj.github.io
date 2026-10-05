# Abinava Yeshwanth KJ — Research Portfolio

**AI • Agriculture • Water.** Personal research website built with Next.js (App Router), TypeScript and Tailwind CSS v4, exported as a static site and deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
```

## Where things live

```
data/                 ← ALL portfolio content (edit these, not the components)
  site.ts             name, intro, email, links, CV path, nav, journey, interests
  research.ts         featured projects + ongoing research
  publications.ts     papers, oral presentations, posters
  experience.ts       experience timeline + education
  field.ts            field-work activities + field photo slots
  leadership.ts       leadership roles + professional activities
  skills.ts           toolkit groups + earlier (foundation) projects
  types.ts            shapes of the data above
components/           reusable, data-driven sections
  graphics/           hand-built SVG schematics (ecosystem, field→grid, soil profile, Oklahoma map…)
public/
  cv/Abinava-Yeshwanth-KJ-CV.pdf   ← the CV served by every "Download CV" button
  images/field/                    ← put field photographs here
app/                  layout, metadata/SEO, icon, OpenGraph image, sitemap, robots
```

## Common updates

**Add a research project** — append an object to `data/research.ts`.
`featured: true` gives a large card (set `visual` to `"oasis" | "soil-profile" | "pipeline"` or `"none"`);
`featured: false` gives a compact card under *Current research directions*. Use `status: "ongoing"` for work without results yet.

**Add a publication** — append to `data/publications.ts` with `kind: "paper" | "oral" | "poster"`.
Entries are sorted by year automatically, filter counts update themselves, and your name is bolded automatically
(variants listed in `selfNames`). Only add `doi` when a real DOI exists.

**Replace the CV** — overwrite `public/cv/Abinava-Yeshwanth-KJ-CV.pdf` with the new file (same name). Nothing else changes.
Remove your phone number and membership IDs from the public copy first.

**Add field photos** — copy images into `public/images/field/`, then in `data/field.ts` set
`src: "/images/field/your-photo.jpg"` and a descriptive `alt` on each entry. Empty entries show a placeholder.

## Deploy

Every push to `main` builds and publishes the site via `.github/workflows/deploy.yml` (GitHub Actions → GitHub Pages).
If you later use a custom domain, update `site.url` in `data/site.ts`.
