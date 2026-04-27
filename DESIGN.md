# Design Philosophy — Speedy Recovery

> The durable reference for how this site looks, why, and how to apply the
> direction to new sections or new pages without drifting.

---

## 1. The brand target

**"An established, family-run UK vehicle recovery operator with insurer
contracts and police pound work."**

Not a ride-share app. Not a SaaS startup. Not a designer portfolio. The
audience is three distinct groups arriving in three distinct states:

- **Stranded motorist** at the roadside, phone in hand, stressed. They
  need a phone number and a promise the truck is 25 minutes away.
- **Insurer / fleet dispatcher** (AA, FMG, broker claims handler).
  They're checking PAS43, O-Licence, cover area, response time.
- **Police pound customer** trying to get their car back before the
  storage fees compound. They need a clear "we handle the paperwork"
  signal.

All three trust **operational credibility** (PAS43, O-Licence, IVR, AA,
FMG partnership marks, 6-vehicle fleet, 7.5-ton recovery truck, HIAB)
over marketing polish. If a customer lands on the site and clocks
*the design*, we've failed. They should clock the **phone number**,
the **"PAS43 certified"** credential, a **photo of a flatbed on the
scene**, and **"24/7, no hedging"**.

---

## 2. The core rule

**Trust through operational credibility.**

Credentials are load-bearing, not decorative. "PAS43 2012 certified"
and "O-Licence holder" unlock insurer and pound business — they are
the reason this operator is chosen over the cheaper unlisted one.
Treat them as primary content, not badges in a footer.

**24/7 is absolute.** Never "out-of-hours on request." Never "most
nights." The phrase on the site is **"24 hours, every day."** If copy
hedges, it undermines the only differentiator that matters at 2am.

---

## 3. What to avoid (the tells)

### SaaS / startup tells
- **Icon-in-filled-primary-box feature cards** (3-up "coloured square +
  icon + title + bullets + arrow"). Textbook Tailwind-starter. Ours is
  photo-led or typography-led.
- **Gradient-mesh, noise, or blurred-blob backgrounds.**
- **Rounded-xl / rounded-2xl** buttons and cards. We use 0.375rem or
  0.5rem — borders and shadows carry, not corners.
- **"Get started free"** centred hero with a floating shadow-xl form
  card. Asymmetric left-content / right-asset is the home-hero pattern.
- **Scale-on-hover gimmicks** (icon scales 110%, arrow translate-x,
  bottom-border scales in). Reads as AI-generated Tailwind demo.
- **Purple → pink gradients**, neon accents, pastel UI-kit palettes.

### Designer / portfolio tells
- **Rubber stamps**, tape labels, monospace "№ 0042" job sheets, torn
  paper, noise/grain textures, blueprint grids, hand-scribble Caveat
  annotations. All rejected.
- **Tilted elements.** Nothing on a -2° angle.
- **Offset hard shadows** (`6px 6px 0 accent`) — designer flex.
- **Typographic splits** — don't mix italic serif + bold sans in one
  headline. Recovery H1s are declarative, not decorative.

### Recovery-industry-specific tells
- **Jokey emergency copy.** "Oops! Car trouble?" — no. The customer
  is stressed; matching the energy beats deflecting it.
- **Stock "traffic cone + warning triangle" hero imagery.** Reads as
  clip-art. The hero is a real flatbed on a real pickup.
- **"We love cars!"** register. This is work, not a hobby shop.
- **Chequered racing flags** anywhere on the site.
- **Overused exclamation marks.** One or none per paragraph.

### Generic trust-section tells
- **Centred flat colour-slab CTAs** (full-bleed primary-700 band with
  centred H2 and two buttons). Too landing-page-template. Ours are
  two-column with a flatbed photo or a direct-line phone panel.
- **Initials-only review cards.** Reviews lean hard into **Google
  branding** — Google logo, star rating, review count, "Verified
  Google review" footer, link out to the profile.
- **Shield icon alone** as a trust signal. Shield + "PAS43 Reg. 1234"
  as text is fine. Shield on its own reads as decoration.

### Accessibility & readability
- **16px (1rem) is the floor for readable content.** Prose, meta
  lines, addresses, stat captions, review timestamps, legal footers,
  card bodies, nav links, buttons — anything a customer might actually
  read, including under stress on a phone at the roadside. Body copy
  is 16px; leads 17–18px.
- **12px (0.75rem) is permitted only for uppercase tracked labels**
  (`.section-label`, phone-CTA meta, footer nav headings, draft
  markers). They are visual anchors, not reading text, and the
  uppercase + tracking keeps them legible at that size.
- **Nothing below 12px anywhere.** Not meta, not footnotes, not badges.
- **Low-contrast ghost text.** Bump until it reads in bright daylight
  on a cracked phone screen at the roadside.

---

## 4. What to use (the toolkit)

### Layout

- **Asymmetric over centred.** Left content, right asset (phone panel,
  flatbed photo, map, NAP card). Centred stacks read as template.
- **Alternating photo / content rows** for service-detail sections.
- **Vertical dividers between cells** for "why choose us," credentials,
  process steps — thin neutral-300 rules instead of stacking more
  shadow cards. Reads as "letterhead / formal document," which on a
  recovery operator is a trust signal.
- **Neutral-50 bands** in rhythm against white reading bands. Don't
  stack three neutral-50 sections in a row.

### Photography

Photos carry the trust. Every section that would otherwise be a
coloured block or an illustration gets a real photo instead — truck
on scene, driver at the pound gate, van on the forecourt, HIAB lifting,
flatbed winching. Dark panels (primary-900) with amber caption bars
over photos are an approved pattern.

- **Don't wash photos out.** No white-to-white gradient overlays.
  If text sits on a photo, use a **primary-900 → transparent** or
  **emergency-700 → transparent** gradient on the text side only.
- **Aspect ratios:** 4/3 or 3/2 for service cards; 3/2 or 16/9 for
  hero backgrounds; 4/5 for driver portraits.

### Typography

- **Barlow Condensed** (display, 700/800) for H1–H2. Tall, condensed,
  industrial — the recovery-yard signage register.
- **Barlow** (body, 400/500/600/700) at 16–17px minimum. 14–15px for
  secondary text and meta.
- **No italic / typographic-split headlines.** Recovery H1s are
  declarative: *"24/7 vehicle recovery across London + M25."* /
  *"Stuck on the hard shoulder? We're 25 minutes away."* /
  *"Police pound release, paperwork handled."*
- **Uppercase tracked labels** at 12px in **primary-700** on light
  backgrounds, **accent-400** on dark backgrounds, letter-spacing
  0.2em, font-weight 700. The `.section-label` / `.section-label-dark`
  pattern — meta heading on almost every section.

### Colour

- **Primary navy** — `primary-900` for credentials ribbon / dark
  sections, `primary-700` for content headings, `primary-600` for
  body links on white.
- **Amber** — `accent-500` is the **phone CTA** colour and the
  dark-panel accent. The amber-on-navy pairing is the trade-site
  "call me now" signal.
- **Oxblood** — `emergency-500` / `emergency-700` for 24/7 bands,
  police-pound mentions, the hard-shoulder urgency strip. Never
  bright saturated `red-600` — oxblood reads as "serious trade,"
  red-600 reads as "sale on now."
- **White** for primary reading bands; **neutral-50** for secondary
  bands; **neutral-900/950** for full-bleed dark sections.
- **Never:** purple gradients, pastel palettes, neon, SaaS hero
  gradients, chequered flag accents.

### Borders & shadows

- **Thin neutral-200 borders** on cards. No coloured stripes.
- **Subtle shadows only:**
  - Baseline `0 1px 2px rgba(0,0,0,0.04)`
  - Hover `0 4px 12px -4px rgba(0,0,0,0.06)`
  - Hero phone panels up to `0 20px 40px -12px rgba(0,0,0,0.35)`.
- **No offset hard shadows.**
- **Radius** 0.375rem (buttons, cards) or 0.5rem (panels). Never
  0.75rem or more.

### Motion

Minimal. A real recovery-yard site does not parallax.

- **Allowed:** 160–200ms colour/border transitions on hover; subtle
  photo zoom (max `scale(1.04)`) on card hover; one fade-up on hero
  load (600ms, 60–380ms stagger).
- **Banned:** scale-110 on icons, bottom-border rails, translate-x
  arrow gimmicks, scroll-triggered reveals, AOS, auto-advancing
  sliders.

### CTA patterns

- **Phone CTA** (primary): **amber filled button** with phone icon
  and a **two-line stack** — uppercase meta `"Call 24/7"` above the
  number `07850 900 005` in Barlow Condensed 800. Used in hero,
  credentials ribbon, mid-page CTAs, emergency band, sticky mobile
  bar. This is the only universal CTA shape.
- **Secondary CTA**: outline-ghost link (navy border, navy text) for
  "See service details" / "See areas covered."
- **Inline link CTA**: `See all services →` / `Area details →` —
  font-weight 700, primary-700, gap widens on hover.
- **Buttons are never `rounded-xl`.** Default 0.375rem.

### Trust signal hierarchy

Rank trust signals by what an insurer, a pound customer, and a
stranded motorist actually trust:

1. **PAS43 2012 certified + O-Licence holder + IVR** — the hard
   credentials that gate insurer work and pound recoveries. Named in
   text, not just iconised. These go in the credentials ribbon
   directly under the hero.
2. **AA + FMG partnership marks** — second-tier credibility,
   recognisable brand logos (not just words).
3. **Google reviews** — score + count + star row, "Verified Google
   review" footers, link to profile. Not initials-and-stars cards.
4. **Fleet specifics** — "6 recovery vehicles · 7.5-ton truck · HIAB"
   as a numbered stat strip. Concrete beats vague ("modern fleet").
5. **24/7, genuine** — "24 hours, every day." Stated absolute, not
   hedged.
6. **Locations** — verified GBP addresses at the footer and areas
   pages. The registered address is a trust signal in itself.

---

## 5. Applying this to a new section

Checklist when building a section from scratch:

1. **What trust does this build?** Credentials, reviews, fleet,
   response time, 24/7, paperwork handled. If "none," reconsider.
2. **What real photography slots in?** If the section is otherwise a
   coloured block, substitute a truck-on-scene / driver / yard photo.
3. **Is the layout asymmetric?** Centred stacks on coloured slabs are
   almost always the wrong answer.
4. **Is there a section label + bold condensed H2 + short lead?**
   That's the standard header rhythm.
5. **Are bullets plain-checkmark, no coloured bubbles?**
6. **Is the CTA the amber phone button or the ghost outline?**
   Never invent a new CTA shape.
7. **Is anything smaller than 12px?** Legal/meta under 14px?
8. **Have I introduced any banned tells** (stamps, tape, tilts,
   rounded-xl, scale-hover animations, stock clip-art, jokey copy)?

---

## 6. Applying this to a new page

For a new page (service, area, home, about):

1. **Open with a hero** — asymmetric content + asset (phone panel on
   home / flatbed photo on service / area map on location), followed
   by a credentials ribbon.
2. **Use alternating photo/content rows** when a page has 2–4
   parallel topics (e.g. service sub-categories on `specialist-recovery`).
3. **Use a divided-cells row** for 3–4 commitments or fleet stats.
4. **Reinforce Google reviews** mid-page.
5. **Include at least one amber phone CTA band** mid-page and another
   near the bottom. Alternate: two-column "with flatbed photo" CTA
   above, emergency-red 24/7 strip below.
6. **End with a FAQ → amber phone CTA pairing**, never a generic
   "contact us" form as the last thing on the page.

---

## 7. Source of truth

- **Tokens** live in `src/styles/global.css` under the `@theme` block.
- **Copy tone examples** live in this doc — if a new section needs a
  headline, echo the register of the examples above.
- **Component patterns:** look at the section components in
  `src/components/sections/`. Each pattern exists exactly once —
  if you find yourself creating a `SomethingAlt.astro`, you've
  missed the point of the rewrite.

If something shipping in the components conflicts with this document,
update this document — the components are the source of truth for
*what ships*, this doc is the source of truth for *why it ships that way*.
