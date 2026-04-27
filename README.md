# Speedy Recovery — Astro site

24/7 vehicle recovery site for Speedy Recovery (London + M25).

## Stack

- Astro 5 (static, trailing slashes, sitemap integration)
- Tailwind CSS 4 (tokens in `src/styles/global.css` `@theme` block)
- Barlow / Barlow Condensed via `@fontsource`
- Zod for content validation (`src/data/*.ts`)

## Commands

```sh
npm install        # install
npm run dev        # dev server on :4321
npm run build      # production build to dist/  (also runs astro check)
npm run preview    # serve the production build
```

## Where things live

- **Content & data** — `src/data/` (business, services, locations, credentials,
  faqs, reviews, navigation, seo). Every module is Zod-validated at import time —
  malformed data fails the build, not the render.
- **Pages** — `src/pages/`. Dynamic routes: `services/[service].astro`,
  `areas/[location].astro`.
- **Sections** — `src/components/sections/` (10 components). One pattern, one
  component: `Hero` with variant prop, one `PhoneCTA`, one `FAQ`, etc.
- **UI primitives** — `src/components/ui/` (`Button`, `Icon`, `Breadcrumbs`).
- **Layout** — `src/components/layout/` (`Header`, `Footer`, `MobileMenu`,
  `StickyCallBar`) and `src/layouts/BaseLayout.astro`.
- **Design philosophy** — `DESIGN.md` at repo root. Read before adding sections.
- **SEO / schema** — `src/utils/schema.ts` (JSON-LD builders), `src/utils/seo.ts`
  (title / canonical composers). `BaseLayout` requires `title`, `description`,
  `canonicalPath` — pages can't ship without them.

## Outstanding content

See `_TODO_CONTENT.md`. Every `[TK …]` marker and `[DRAFT]` block is listed
there with the file it slots into.

## Deployment

Static build → `dist/`. Deploy anywhere that serves static files. Site URL is
in `src/data/seo.ts` (used by `astro.config.mjs` for sitemap + canonicals).
