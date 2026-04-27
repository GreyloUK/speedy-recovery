# Content TODO — Speedy Recovery

Every placeholder currently in the codebase. Each entry: what's needed, where
it slots, and status. Grep for `[TK ` in `src/` to find live markers; grep for
`[DRAFT]` to find copy I've written that wants client review.

## From client (required to ship real content)

- [x] **Owner name + company story** — Sam Shafi, founded 1995, second-generation family business.
- [ ] **Logo vector / high-res** — currently `public/favicon.svg` is the
  generic Astro icon. Replace with the business mark. Also needs a full-
  colour SVG at `src/assets/images/logo.svg` for header use (not yet wired).
- [ ] **Photography** — none on the site yet. Needed:
  - Hero image for home (`src/pages/index.astro` → `<Hero image={...} />`)
  - One photo per service hero (5 × `Hero image`) for
    `src/pages/services/[service].astro`
  - One photo per area hero (2 × `Hero image`) for
    `src/pages/areas/[location].astro`
  - Fleet montage (recovery truck, 7.5-ton, HIAB, flatbed) for the About /
    fleet sections
  - A social default OG image at `public/images/og-default.jpg` (1200 × 630)
- [x] **3 Walmgate Road — postcode** — set to UB6 7LH. GBP verification still pending, so `verified` remains `false`.
- [x] **Credential numbers decision** — PAS43 and O-Licence numbers hidden by setting `certNumber` to `null`.
- [x] **Real Google reviews / GBP URL** — static review placeholders removed; reviews will be handled by Elfsight.
- [x] **General contact email** — set to `info@affordablespeedyrecovery.co.uk`.
- [x] **Privacy + terms effective dates + privacy email** — set to 27 April 2026 and confirmed email.
- [x] **Current Metropolitan Police pound fees** — updated from GOV.UK/Home Office 2023 statutory charges.
- [x] **Storage daily rate** — client requested no public pricing; storage now uses quote-based wording.

## Copy written by Claude, needs client review (`[DRAFT]`)

- [x] Service long-descriptions × 2 — `police-pound-release` and `vehicle-storage` rewritten and `[DRAFT]` prefixes removed.
- [x] Location intros × 5 — Harrow, Perivale, Greenford, Ealing and Hayes rewritten and `[DRAFT]` prefixes removed.

## How to find all placeholders

```sh
# live [TK …] markers (shipped to production as italicised dashed-outline text)
grep -rn '\[TK ' src/ _TODO_CONTENT.md

# draft copy marked for client review
grep -rn '\[DRAFT\]' src/
```

Count these periodically and reconcile with this file. When the count
reaches zero the site is content-complete.
