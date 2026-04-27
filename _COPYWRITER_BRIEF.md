# Speedy Recovery — Site Population & Copywriter Brief

## Context

The Speedy Recovery Astro site is **structurally complete** (every page route exists, every data file is wired, every component renders). What it lacks is **finalised content** — most service and area pages currently render developer-drafted copy flagged with `[DRAFT]` or contain `[TK …]` placeholder fields awaiting client confirmation. This plan does two jobs:

1. **Catalogues every placeholder and `[DRAFT]` block** still in the codebase so they can be filled in priority order.
2. **Provides a primary + secondary keyword brief for every service page (7) and area page (5)**, sourced live from DataForSEO, so the copywriter can write to real intent rather than guessing.

Strategic finding from the keyword research:  **"perivale car pound" is 1,300/mo (LOW competition, ~KD5) and "charlton car pound" is 1,900/mo**. Speedy Recovery operate from Walmgate Road, Perivale — so the police-pound-release service page + the Perivale area page can directly capture stranded-driver intent that no competitor has tightly optimised for. This is the single biggest commercial opportunity on the site.

---

## Part 1 — Placeholders & `[DRAFT]` blocks to populate

### A. Critical-path data (block production launch)

| File | Field | Current value | Action |
|------|-------|---------------|--------|
| `src/data/business.ts` | `email.general` + `email.href` | `[TK general email]` | Confirm and fill — drives footer, contact page, schema |
| `src/data/business.ts` | `ownerName` | `[TK owner name]` | Confirm — used in About + schema founder |
| `src/data/business.ts` | `founded` | `[TK founding year]` | Confirm — used in About copy |
| `src/data/locations.ts` (perivale) | `address.postcode` | `[TK UB postcode]` | **Verify with client + Google Business Profile** — required for LocalBusiness schema |
| `src/data/locations.ts` (perivale, greenford, ealing, hayes) | `verified` | `false` | Flip to `true` once GBP verified for each |
| `src/data/credentials.ts` | PAS43 + O-Licence `certNumber` | `[TK …]` | Decision: publish actual numbers or set to `null` |
| `src/data/reviews.ts` | 3 review entries (`author` + `text`) + `googleProfileUrl` | `[TK reviewer]` / `[TK real Google review …]` | Export real Google reviews; flip `isPlaceholder` to `false` once real averageRating + totalReviews are in |
| `src/pages/privacy.astro` | Effective date + privacy email | `[TK effective date]` / `[TK privacy email]` | Set to launch date and use confirmed email |
| `src/pages/terms.astro` | Effective date | `[TK effective date]` | Set to launch date |

### B. `[DRAFT]` copy blocks (developer wrote, client to review/revise)

These render with a visible **"Draft copy — to be reviewed by client"** banner via `ServiceDetail.astro` / `LocationDetail.astro`. Banner clears as soon as the `[DRAFT]` prefix is removed.

| File | Entry | Field(s) marked [DRAFT] |
|------|-------|------------------------|
| `src/data/services.ts` | `police-pound-release` | `gridDescription` + `longDescription` |
| `src/data/services.ts` | `vehicle-storage` | `gridDescription` + `longDescription` (also `priceNote: "Rates from [TK storage daily rate] / day"`) |
| `src/data/locations.ts` | `harrow` | `intro` |
| `src/data/locations.ts` | `perivale` | `intro` |
| `src/data/locations.ts` | `greenford` | `intro` |
| `src/data/locations.ts` | `ealing` | `intro` |
| `src/data/locations.ts` | `hayes` | `intro` |

### C. About page

`src/pages/about.astro` — body paragraphs reference `ownerName` + `founded`. Needs ~200–300 words of company story (founder, when started, why recovery, what makes them different from call-centre-routed alternatives) once the client supplies the basics.

### D. Imagery still placeholder

| Asset | Where it renders | Notes |
|-------|------------------|-------|
| Home hero photo | `src/pages/index.astro` → `<Hero image>` | Falls back to `[TK hero photograph]` text |
| Service hero photos × 7 | `src/pages/services/[service].astro` | All `heroImage` fields are `null` — falls back to gridImage or text |
| Location hero photos × 5 | `src/pages/areas/[location].astro` | All `heroImage` fields are `null` |
| Process step photos × 4 | `Process.astro` (renders on home + service pages) | Currently shows `[TK Step N photo]` |
| AreasCovered photos | `AreasCovered.astro` (home + service pages) | `[TK photo]` placeholders |
| Social OG image | `public/images/og-default.jpg` (1200 × 630) | Missing — referenced by `seo.ts` |
| Logo SVG | `public/favicon.svg` + `src/assets/images/logo.svg` | Currently generic Astro icon |

### E. Annual maintenance item

| File | Field | When |
|------|-------|------|
| `src/pages/resources/metropolitan-police-pound-release-guide.astro` | `[TK current release fee]` + `[TK daily storage rate]` | Update annually from Met Police website |

---

## Part 2 — Copywriter keyword brief

All volumes are UK Google Ads monthly searches (Apr 2026), location: United Kingdom. KD = keyword difficulty (0–100, lower = easier).

### Service pages (target London-level intent)

#### 1. `/services/car-recovery` — anchor money page

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | car recovery london | **1,000/mo** | MEDIUM, KD 17, £7.79 CPC | Cluster head; "vehicle recovery london" + "london car recovery" + "recovery car london" all share the same SERP and search volume |
| Secondary | vehicle recovery london | 1,000/mo | (synonym cluster) | Use both noun forms naturally — "car recovery" + "vehicle recovery" |
| Secondary | 24/7 recovery | 480/mo | MEDIUM | National head term — supports the always-on positioning |
| Secondary | 24 hour breakdown recovery | 170/mo | LOW | Use in H2/FAQ |
| Secondary | tow truck london | 140/mo | MEDIUM | Use in body, not H1 — Americanism but real volume |
| Secondary | breakdown recovery london | 140/mo | LOW | Natural variant |
| Secondary | car towing london | 90/mo | MEDIUM | Body/FAQ |
| Long-tail | car recovery west london | 90/mo | MEDIUM | Use as a subhead — ties to operating area |
| Long-tail | car recovery north london | 70/mo | MEDIUM | Mention in coverage paragraph |

**Brief**: H1 should target "Car & Vehicle Recovery London". Body needs to credibly cover van + motorbike + classic to support cross-link to specialist page. Lean hard on 24/7 + PAS43 + O-Licence as differentiators in the SERP.

#### 2. `/services/accident-recovery`

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | accident recovery service | **70/mo** | LOW, KD 2, £13.93 CPC | Tiny volume but very high commercial intent — insurer-funded jobs |
| Secondary | accident recovery near me | 210/mo | LOW, growing +23% YoY | Geo-implicit; on-page proximity signals matter |
| Secondary | accident recovery | 320/mo | LOW, KD 3 | Wider but mixed-intent (informational about recovering from accident) — use loosely |
| Secondary | car accident recovery / auto accident recovery | 110/mo each | LOW | Variants for body copy |
| Secondary | crash recovery | 70/mo | MEDIUM | Body copy |
| Secondary | accident damaged car recovery | very low | — | Long-tail for FAQ |

**Brief**: H1 "Accident Recovery, London + M25 — 24/7". Lead with insurance-approved positioning + AA/FMG partnerships. Address the emotional context: stranded, shocked, just had a crash. The "near me" volume is decent — make sure NAP and local proof are tight.

#### 3. `/services/police-pound-release` — **biggest commercial moat on the site**

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | perivale car pound | **1,300/mo** | LOW, KD ~5, £1.66 CPC | The Perivale pound IS the dominant Met operational pound — Speedy Recovery operate from Perivale |
| **Primary (tied)** | charlton car pound | **1,900/mo** | LOW, KD ~5, £2.33 CPC | Highest volume of any branded pound query in the cluster |
| Secondary | perivale pound | 140/mo | LOW | Stripped variant |
| Secondary | metropolitan police pound | (low measurable) | — | Generic head term |
| Secondary | release car from police pound | (low measurable) | — | Action intent — perfect H2 |
| Secondary | police impound car release | (low measurable) | — | Variant |
| Long-tail | wembley car pound, ealing impound, etc. | very low | — | List in coverage section to capture pound-name long tail |

**Brief**: This page should be structured as: (1) hero "Need your car back from Charlton or Perivale pound?", (2) what we do (collect, transport, deliver to your address), (3) the real release process (links into `/resources/metropolitan-police-pound-release-guide`), (4) FAQs with branded pound names ("Where is Perivale car pound?", "What time does Charlton pound open?"). The current `[DRAFT]` `longDescription` should be expanded to ~600 words.

> **Cross-link warning**: the resources page (`/resources/metropolitan-police-pound-release-guide`) is the informational anchor; the service page is the commercial CTA. Make sure the service page is the one that ranks for "perivale car pound" — informational intent guide tends to outrank commercial intent service unless the service page is well-optimised.

#### 4. `/services/specialist-recovery` — motorbike + EV + classic

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | motorbike recovery | **1,000/mo** | MEDIUM, £8.08 CPC | National head term — Speedy can compete in London cluster |
| Secondary | motorbike recovery near me | 720/mo | HIGH | Local pack play |
| Secondary | motorbike recovery service | 210/mo | HIGH | Variant |
| Secondary | motorbike breakdown recovery | 140/mo | MEDIUM | Variant |
| Secondary | motorbike recovery london | 110/mo | MEDIUM | Geo-modified |
| Secondary | electric vehicle breakdown | 30/mo | MEDIUM | EV intent — small but growing |
| Secondary | tesla recovery uk | 10/mo | MEDIUM, £20 CPC | Very high CPC = high commercial value |
| Secondary | keyless car recovery | very low | — | Mention in FAQ for completeness |

**Brief**: Lead the page with **motorbike recovery** since it dominates volume. Sub-sections for: EV/hybrid (battery isolation, low-loader requirement), keyless (push-start failure scenarios), motorbike (strap-down, soft-cradle). The single page covers all "specialist" cases. Lean on IVR-certified-driver credential as the differentiator vs. general recovery firms.

#### 5. `/services/vehicle-repossession` — **deprioritise / B2B framing**

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | car repossession | 320/mo | MEDIUM | **WARNING: dominated by buyer intent** ("repossessed cars for sale" 2,900/mo, "car repossession auctions uk" 590/mo) |
| Secondary | car repossession uk | 260/mo | HIGH | Mixed intent |
| Secondary | vehicle repossession services | very low | — | Only this is true service intent — and volume is negligible |

**Brief**: Don't optimise this page for SEO traffic. Frame it as a **B2B service page for finance houses, fleet operators, and solicitors** — keep the URL for direct/referral traffic and credibility but don't waste copywriter effort chasing consumer queries. Short-form page (300–400 words), focus on PAS43 + O-Licence + court-order process. Acknowledge in keyword document that this page is deliberately niche.

#### 6. `/services/supercar-classic-car-transportation`

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | classic car transport | **320/mo** | LOW, KD 4, £2.94 CPC | Excellent target — low difficulty, real volume, transactional intent |
| Secondary | classic car transport near me | 90/mo | MEDIUM | Use in H2 + NAP |
| Secondary | classic car transport uk | 70/mo | MEDIUM, KD 3 | National framing |
| Secondary | supercar recovery / luxury car recovery | 10/mo each | HIGH | Brand prestige terms — use in body |
| Secondary | enclosed car transport | (separate measurable) | — | Service feature — covered/enclosed flatbed |

**Brief**: H1 "Classic Car & Supercar Transport — Enclosed, Insured, London + UK-wide". Visuals matter here — needs photography of covered transport. Lean on the HIAB and largest 12-ton vehicle in the fleet. Hagerty / classic-insurer language ("agreed value", "concours-ready transport") signals competence to enthusiasts.

#### 7. `/services/vehicle-storage`

| Role | Keyword | Volume | Competition / KD | Notes |
|------|---------|--------|------------------|-------|
| **Primary** | vehicle storage london | **90/mo** | LOW, +256% YoY trend | Trend is the story — demand is multiplying year-on-year |
| Secondary | car storage london | (project memory cited 480/mo) | — | Verify against current data; treat as primary if confirmed |
| Secondary | secure car storage | (low measurable) | LOW | Body copy |
| Secondary | indoor car storage / long term car storage | (low measurable) | LOW | Use as FAQ subheads |

**Brief**: Strong momentum keyword but fragile head volume. Make the page rate-card-clear: per-day price, secure compound details, CCTV, insurance approval. Cross-link to Police Pound page (storage often follows pound release). Resolve the `[TK storage daily rate]` before launch — without a price, conversion intent collapses. Memory note: this is described as "real revenue stream their current site buries" — don't repeat the mistake.

---

### Area pages (target hyper-local intent)

**Strategic note**: Volumes for area-level service queries are very low (mostly 0–40/mo per measured query). The strategy for these pages is **NOT to chase keyword traffic** — it is to:

1. Reinforce local entity signal for Google Business Profile / local pack
2. Capture "near me" intent via geo-coordinates + NAP consistency
3. Provide trust-building proof (response times, real-fleet, recent jobs in that area)

The exception is **Perivale**, which shares its keyword footprint with "perivale car pound" (1,300/mo) — this page can directly serve high-volume commercial intent.

#### `/areas/harrow` (verified GBP base)

| Role | Keyword | Volume | Notes |
|------|---------|--------|-------|
| **Primary** | car recovery harrow | **40/mo** | MEDIUM comp, £12.79 CPC — high commercial value despite low volume |
| Secondary | recovery harrow | 30/mo | HIGH comp |
| Secondary | vehicle recovery harrow | 10/mo | HIGH comp |
| Secondary | breakdown recovery harrow | 10/mo | HIGH comp |
| Secondary | car recovery north harrow | very low | Mention — ties to Cardoc House address |
| Secondary | car recovery ha2 | very low | Postcode-specific — use in NAP/footer not body |

**Brief**: Real GBP-verified base — schema + NAP must be perfect. Mention specific Harrow landmarks (Northwick Park, Sudbury Hill, station) + adjoining areas (Wealdstone, Pinner, Stanmore) to capture borough-level proximity searches. ~400–500 word intro replacing the `[DRAFT]` block.

#### `/areas/perivale` — **highest-priority area page**

| Role | Keyword | Volume | Notes |
|------|---------|--------|-------|
| **Primary (commercial intent)** | perivale car pound | **1,300/mo** | LOW comp, KD ~5 — same intent as `/services/police-pound-release` |
| **Primary (service intent)** | car recovery perivale | 10/mo | LOW |
| Secondary | perivale recovery | 20/mo | MEDIUM |
| Secondary | perivale pound | 140/mo | LOW |
| Secondary | car recovery ub6 (assuming postcode) | very low | Postcode-specific |

**Brief**: This page can carry double duty — area landing page + secondary capture for "perivale car pound" intent. H1 should reference Perivale clearly. Include a "Need help with the Perivale car pound? →" CTA box that internal-links to the police-pound-release service page. ~500–600 word intro replacing `[DRAFT]`. **Resolve postcode placeholder + GBP verification before publishing**, otherwise schema is invalid.

#### `/areas/greenford` (coverage area, dispatched from Perivale)

| Role | Keyword | Volume | Notes |
|------|---------|--------|-------|
| **Primary** | car recovery greenford | not measurable in DataForSEO | Rely on local proximity ranking |
| Secondary | greenford recovery / tow truck near greenford | not measurable | — |

**Brief**: Treat as a local-proof page, not a keyword-targeted page. ~250–350 word intro. Mention specific Greenford streets + 15-min response time from Perivale base. Don't claim a Greenford operating address — `basedAt: "perivale"` correctly suppresses LocalBusiness schema, so honour that in copy.

#### `/areas/ealing` (coverage area, dispatched from Perivale)

| Role | Keyword | Volume | Notes |
|------|---------|--------|-------|
| **Primary** | car recovery ealing | not measurable | Local pack play only |
| Secondary | ealing recovery / ealing impound | not measurable | — |
| Secondary | car recovery w5 / w13 | not measurable | Postcode mentions in NAP context |

**Brief**: Same template as Greenford. Ealing has higher population density + more vehicles → higher latent demand even if not in keyword data. ~250–350 word intro. Mention West Ealing, Ealing Broadway, North Ealing, and the proximity of Hangar Lane gyratory (high accident incidence) as a credible reason to talk about accident recovery here.

#### `/areas/hayes` (coverage area, dispatched from Perivale)

| Role | Keyword | Volume | Notes |
|------|---------|--------|-------|
| **Primary** | car recovery hayes | not measurable | Local pack play only |
| Secondary | (none with measurable volume) | — | — |

**Brief**: Same template. Mention Heathrow proximity + UB3 postcode. Hayes-specific scenarios: airport collection-vehicle-stranded, A312/A4 breakdowns. ~250–350 word intro.

---

## Part 3 — Recommended order of operations for the copywriter

1. **First**: client supplies founder name, founding year, contact email, Perivale postcode. Without these, schema and trust elements stall.
2. **Then**: rewrite the 2 service `[DRAFT]` blocks (`police-pound-release`, `vehicle-storage`) — these are the biggest revenue plays.
3. **Then**: rewrite the 5 location `[DRAFT]` intros — Perivale first (carries pound-intent traffic), Harrow second (verified GBP), then the 3 coverage areas.
4. **Then**: write the About page narrative.
5. **Then**: collect real Google reviews, replace placeholders, flip `isPlaceholder` to `false`.
6. **Then**: photography and OG image (visual polish, not blocker).
7. **Always**: brief the copywriter to run new copy through the on-page-SEO skill rules (titles ≤60 chars, meta ≤155 chars, H1 includes primary keyword, etc.) and the `astro-code-review` skill against any data file edits.

---

## Critical files to be modified

```
src/data/business.ts         # owner, founded, email
src/data/locations.ts        # 5 intros, perivale postcode, GBP verification flips
src/data/services.ts         # 2 [DRAFT] blocks + storage rate; primary/secondary KW in <Layout> seo
src/data/credentials.ts      # PAS43 + O-Licence numbers (or null)
src/data/reviews.ts          # 3 reviews, GBP URL, isPlaceholder flag
src/pages/about.astro        # owner story body
src/pages/privacy.astro      # effective date + privacy email
src/pages/terms.astro        # effective date
src/pages/resources/metropolitan-police-pound-release-guide.astro  # annual fee update
```

## Verification

Before sign-off:

1. `grep -rn '\[TK ' src/` returns 0 matches.
2. `grep -rn '\[DRAFT\]' src/` returns 0 matches.
3. Run the `pre-publish` skill (Cloudflare-readiness check — sitemap, canonical URLs, redirects, schema).
4. Run the `astro-code-review` skill against `src/data/services.ts` and `src/data/locations.ts` after copywriter edits to catch hydration / SEO / TS regressions.
5. Manual spot-check: load each `/services/[slug]` and `/areas/[slug]` page in dev (`npm run dev`) and confirm no draft banners and no italicised dashed-outline placeholders render.
6. Submit each new service + area page to Google Search Console for indexing once `[DRAFT]` flags are cleared.
