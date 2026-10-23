@AGENTS.md

# Nabila Shahirah — Portfolio

Personal portfolio for Nur Nabila Shahirah (CS, Multimedia Computing, UPM). Deployed at
https://nabilashahirah.vercel.app. Single page, styled after zaitro.com but with a **black + pink** theme.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build (run before saying a change is done)
- `npx eslint app components lib` — lint
- Dev-server quirk: edits to `app/globals.css` sometimes don't hot-reload. If a style change
  doesn't show, make a second small edit to the file (or restart `npm run dev`) before debugging.

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4 (only for `@import`; styling is
plain CSS classes), lucide-react icons. Fonts via `next/font/google`: Space Grotesk (`--font-grotesk`),
Inter (`--font-inter`), JetBrains Mono (`--font-jetbrains`).

## Where things live

- `app/page.tsx` — section order: Hero → Tapes → StatsBand → Works → About (+ roles) → Fingerprint
  (skills) → Command (leadership + photo wall) → Weight (awards) → Freelance → FAQ → Connect (CTA + footer).
- `app/globals.css` — the whole design system: colour tokens in `:root`, component classes
  (`.card`, `.mock`, `.feature`, `.steps`, `.btn`, `.tape`, `.neon`, …). Prefer adding classes here
  over inline styles.
- `lib/constants.ts` — shared content: `STATS`, `STACK_TAGS`, `SKILL_CLUSTERS`,
  `LEADERSHIP_TIMELINE`, `AWARDS`.
- `components/sections/Works.tsx` — project data (`CATEGORIES`: Mobile, Web, Freelance) + layout.
- `components/sections/FAQ.tsx`, `About.tsx` (facts + "Roles I'm open to" cards), `Hero.tsx`
  (typed phrases + console script).
- `components/ui/Brand.tsx` — `LINKS` (email, LinkedIn, GitHub, CV) and brand SVG icons.
- `components/ui/Reveal.tsx` — scroll-in fade wrapper; use it for new blocks.
- `components/canvas/BackgroundFX.tsx` — particles, orbs, grain, scroll bar, and page-wide pointer
  effects (card spotlight, 3D tilt on `.tilt/.card/.step`, magnetic `.btn`, hero spotlight, ripple).
- `components/canvas/Cursor.tsx` — pink neon cursor (mouse devices only).
- `components/ui/StackFly.tsx` — floating Next.js / React / FastAPI logos in the hero (main stack
  to highlight); becomes a row above the headline under 900px.
- `public/` — screenshots, `Nabila.png`, `NabilaShahirah_CV.pdf`, `Leadership/`, `Award/` photos.
- Unused legacy sections (not imported): `Elrate`, `Intelligence`, `Origin`, `Signature`, `Systems`,
  `Toothymate`. Don't edit them for site changes.

## Design rules

- Theme is **black + pink**: `--bg #050306`, `--hot #FF2E88`, `--rose #FF8FC7`, `--violet #B44CFF`,
  gradient `--grad`. Don't reintroduce the old blue/ocean palette.
- Green (`--ok`) is only for "live"/status dots; gold only for award badges.
- The owner wants it "gempak" (bold, high-impact): keep the motion effects, but every effect must
  respect `prefers-reduced-motion` and must not break layout at 390px width.
- Phones/touch get a lighter "performance mode" (end of `globals.css`): no grain, orbs, particles,
  backdrop blur or spinning borders. Keep it that way; check new effects stay smooth on phones.
- Under `prefers-reduced-motion` the tape/photo banners still scroll (slowly); everything else stops.
- Avoid `@property`-animated conic borders with mask-composite; they render glitchy. Use the
  existing `.neon` technique (rotating oversized gradient + inner fill).

## Content rules

- Do **not** show an availability date (no "Available September 2026" anywhere).
- Target roles: Software / AI Engineer, **Software Tester (QA)**, **Business Analyst**,
  **System Analyst**. Keep these consistent across Hero console, Tapes, About roles cards and FAQ.
- Leadership: don't headline "Club President" on its own. She led as **club president and college
  representative** — mention both together. Keep it out of the Tapes banner.
- The Datamicron Data Science internship (2026) is **finished**: show it as past experience, never "currently".
  Internship project: **Syntra** (internal registry lookup tool, Blazor/.NET), listed under the Web tab.
- Freelance: Perak Legends Karate Academy (https://perakkarate.com), shown under the Freelance tab.
- Freelance services section (`components/sections/Freelance.tsx`, after Awards): business/organisation
  websites, landing pages, small web apps & dashboards, portfolio websites. Keep it secondary to the
  full-time positioning. WhatsApp number + prefilled-message links live in `LINKS` in `Brand.tsx`;
  `WhatsAppBubble.tsx` is the floating button (shows after scrolling past the hero).
- Never invent achievements, metrics, or experience. If a claim isn't in `lib/constants.ts`, the
  project data, or confirmed by the owner, ask first.
- The owner often writes in Malay / Manglish; replies can be in simple English.
