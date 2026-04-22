# Content TODO — Affordable Speedy Recovery

Every placeholder currently in the codebase. Each entry: what's needed, where
it slots, and status. Grep for `[TK ` in `src/` to find live markers; grep for
`[DRAFT]` to find copy I've written that wants client review.

## From client (required to ship real content)

- [ ] **Owner name + company story** — `src/data/business.ts` (`ownerName`,
  `founded`) and `src/pages/about.astro` (the `[TK …]` paragraph). Target
  ~200–300 words: who founded it, when, why recovery, what makes this
  operator different from call-centre-routed alternatives.
- [ ] **Logo vector / high-res** — currently `public/favicon.svg` is the
  generic Astro icon. Replace with the business mark. Also needs a full-
  colour SVG at `src/assets/images/logo.svg` for header use (not yet wired).
- [ ] **Photography** — none on the site yet. Needed:
  - Hero image for home (`src/pages/index.astro` → `<Hero image={...} />`)
  - One photo per service hero (5 × `Hero image`) for
    `src/pages/services/[service].astro`
  - One photo per area hero (2 × `Hero image`) for
    `src/pages/areas/[location].astro`
  - Fleet montage (recovery truck, 12-ton, HIAB, flatbed) for the About /
    fleet sections
  - A social default OG image at `public/images/og-default.jpg` (1200 × 630)
- [ ] **3 Walmgate Road — postcode verification** — `src/data/locations.ts`
  (perivale entry: `address.postcode` is `[TK UB postcode]`). Also flip
  `verified: false` to `true` once Google Business Profile is verified.
- [ ] **Credential numbers decision** — `src/data/credentials.ts`.
  Entries for PAS43, O-Licence have `certNumber: "[TK …]"`. Decide whether
  to publish the actual numbers (higher trust signal but more spam risk for
  the registration) or keep them off-site. Set to `null` to hide entirely.
- [ ] **Real Google reviews** — `src/data/reviews.ts`. Replace the 3
  `[TK reviewer]` entries with real exports. Also set `reviewsSummary.isPlaceholder`
  to `false` once the averageRating and totalReviews match real data
  (removes the `aggregateRating` JSON-LD suppression in `utils/schema.ts`).
- [ ] **Google Business Profile URL** — `src/data/reviews.ts`
  (`reviewsSummary.googleProfileUrl`) for the "See all reviews on Google"
  link-out.
- [ ] **General contact email** — `src/data/business.ts` (`email.general`
  and `email.href`) and indirectly `src/pages/contact.astro`.
- [ ] **Privacy + terms effective dates + privacy email** —
  `src/pages/privacy.astro`, `src/pages/terms.astro`. Currently `[TK effective
  date]` and `[TK privacy email]`.
- [ ] **Current Metropolitan Police pound fees** —
  `src/pages/resources/metropolitan-police-pound-release-guide.astro`.
  Release fee and daily storage charge (`[TK current release fee]`,
  `[TK daily storage rate]`). Check Met Police site and update annually.
- [ ] **Storage daily rate** — `src/data/services.ts` vehicle-storage
  entry (`priceNote: "Rates from [TK storage daily rate] / day"`).

## Copy written by Claude, needs client review (`[DRAFT]`)

- [ ] Service long-descriptions × 5 — `src/data/services.ts`
  (`longDescription` on each entry). These render with a visible
  "Draft copy — to be reviewed by client" label in
  `src/components/sections/ServiceDetail.astro`. Remove the `[DRAFT]`
  prefix to dismiss the label.
- [ ] Location intros × 2 — `src/data/locations.ts` (`intro` on each
  entry). Same `[DRAFT]` label behaviour via `src/components/sections/LocationDetail.astro`.

## How to find all placeholders

```sh
# live [TK …] markers (shipped to production as italicised dashed-outline text)
grep -rn '\[TK ' src/ _TODO_CONTENT.md

# draft copy marked for client review
grep -rn '\[DRAFT\]' src/
```

Count these periodically and reconcile with this file. When the count
reaches zero the site is content-complete.
