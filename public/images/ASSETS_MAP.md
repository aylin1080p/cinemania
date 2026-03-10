# Cinemania — Assets Map

Last audited: 2026-03-10
Reference design: https://www.figma.com/design/z7VY1GvA5xVR2ix7xeOfxx/Cinemania?node-id=4619-13447

---

## Directory Structure

```
public/images/
├── logos/          Brand logos and wordmarks (SVG)
├── icons/          UI action icons (SVG)
├── placeholders/   Fallback images when API returns no image (SVG)
├── hero/           Hero section placeholder SVGs (dev only — replaced by TMDB API at runtime)
├── backgrounds/    Background patterns and textures (SVG/JPG)
├── team/           Team member avatars for credits modal (PNG) — FOLDER MISSING
└── movies/         API-driven movie images — folder not required in repo
```

---

## Audit Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | File exists, content matches its intended purpose |
| ⚠️ | File exists, content is simplified or slightly off but usable |
| ❌ | File exists but content is **wrong** — incorrect icon drawn, wrong shape, or misnamed |
| 🔲 | File does not exist — needs to be created or exported from Figma |
| 🚫 | File exists but is **not used** by any page HTML or JS module |

---

## Logos

Figma export required for all logos. Current files are **generated text/shape placeholders**,
not real brand assets from the design.

| File | Status | Notes |
|------|--------|-------|
| `logos/logo-main.svg` | ❌ Incorrect | Contains `<text>` element rendering "Cinemania" in Arial. Not a real logo. Needs Figma export. |
| `logos/logo-white.svg` | ❌ Incorrect | Same as logo-main but white text. Not a real logo. Needs Figma export. |
| `logos/logo-solid.svg` | ❌ Incorrect | Orange circle (50×50) with letter "C". Not a real logo. Needs Figma export. |
| `logos/favicon.svg` | ❌ Incorrect | Orange circle (32×32) with letter "C". Not a real favicon. Needs Figma export. |

**Action required:** Export all four from Figma. Until then, the text-based logo-main.svg
is functional enough to render a readable header — do not remove it.

---

## Icons

### ❌ Wrong icon drawn (must be fixed before use)

| File | What it draws | What it should draw |
|------|--------------|-------------------|
| `icons/settings-icon.svg` | Clock face (circle + 2 hands at ~12 and ~4) | Gear / cog icon |
| `icons/heart-icon.svg` | Clock face in orange (circle + 2 hands) | Heart outline shape |
| `icons/share-icon.svg` | Asterisk / star crossing-lines pattern | Share icon (node with arrows, or box-with-arrow-up) |

These three files have the wrong SVG paths for their names. Any JS module rendering them
will display incorrect UI. They must be redrawn or replaced before implementation.

### ⚠️ Simplified but usable

| File | Status | Notes |
|------|--------|-------|
| `icons/sun-icon.svg` | ⚠️ Simplified | Circle with only 4 rays (N/S/E/W). Standard sun has 8 rays. Acceptable as temporary. |
| `icons/moon-icon.svg` | ⚠️ Questionable | Crescent path + an unexplained horizontal line on the left. Rendering is odd at small sizes. |

### ✅ Correct

| File | Status | Notes |
|------|--------|-------|
| `icons/search-icon.svg` | ✅ | Magnifying glass — correct |
| `icons/menu-icon.svg` | ✅ | 3 horizontal lines (hamburger) — correct |
| `icons/close-icon.svg` | ✅ | X mark — correct |
| `icons/heart-icon-filled.svg` | ✅ | Filled heart shape path — correct |
| `icons/plus-icon.svg` | ✅ | Plus sign — correct |
| `icons/play-icon.svg` | ✅ | Triangle polygon — correct |
| `icons/star-icon.svg` | ✅ | 5-point star polygon, orange fill — correct |
| `icons/star-icon-filled.svg` | ✅ | Filled star — correct |
| `icons/arrow-up-icon.svg` | ✅ | Upward arrow — correct |
| `icons/film-reel-icon.svg` | ✅ | Film reel shape — correct |
| `icons/chevron-left-icon.svg` | ✅ | Left chevron — correct |
| `icons/chevron-right-icon.svg` | ✅ | Right chevron — correct |
| `icons/chevron-down-icon.svg` | ✅ | Down chevron — correct |
| `icons/calendar-icon.svg` | ✅ | Calendar grid shape — correct |
| `icons/clock-icon.svg` | ✅ | Clock face (circle + 12 and 3 o'clock hands) — correct |
| `icons/download-icon.svg` | ✅ | Download arrow — correct |
| `icons/filter-icon.svg` | ✅ | Filter funnel — correct |
| `icons/sort-icon.svg` | ✅ | Sort lines — correct |

---

## Placeholders

Used as `onerror` or default `src` fallbacks when TMDB API returns no image.

| File | Status | Dimensions | Notes |
|------|--------|-----------|-------|
| `placeholders/placeholder-poster.svg` | ✅ | 300×450 (2:3) | Matches TMDB poster ratio. Correct. |
| `placeholders/placeholder-backdrop.svg` | ✅ | 1920×1080 (16:9) | Matches TMDB backdrop ratio. Correct. |
| `placeholders/placeholder-avatar.svg` | ✅ | 128×128 | User avatar fallback. Correct. |
| `placeholders/placeholder-skeleton-card.svg` | ✅ | 200×200 | Loading skeleton. Correct. |
| `placeholders/placeholder-hero.svg` | ⚠️ Redundant | 1200×600 | Duplicates placeholder-backdrop purpose. Hero is always populated from TMDB backdrop_path — use `placeholder-backdrop.svg` as the hero fallback. This file can be removed. |

---

## Hero (dev placeholders only)

The hero section is **fully dynamic** — hero.js fetches a featured movie from the TMDB API
and sets the backdrop image directly via CSS or `<img>`. These SVG files in `hero/`
are **never referenced by any page HTML or JS module**. They exist only as dev reference
in the `asset-preview` page.

| File | Status | Notes |
|------|--------|-------|
| `hero/hero-home.svg` | 🚫 Unused at runtime | Dev-only placeholder. Contains "[Manual Export Required]" label. Not needed. |
| `hero/hero-catalog.svg` | 🚫 Unused at runtime | Same as above. |
| `hero/hero-library.svg` | 🚫 Wrong + unused | Library page has **no hero section**. This file should not exist. |

**Decision:** These files can stay as dev reference SVGs for the asset-preview page.
Remove `hero-library.svg` since it references a section that does not exist on Library page.

---

## Backgrounds

| File | Status | Notes |
|------|--------|-------|
| `backgrounds/bg-pattern-dots.svg` | 🚫 Not yet used | Valid SVG pattern. Not referenced in any page CSS or JS. Reserve for future section decoration. |
| `backgrounds/bg-pattern-grid.svg` | 🚫 Not yet used | Valid SVG pattern. Not referenced in any page CSS or JS. |
| `backgrounds/divider-curve-top.svg` | 🚫 Not yet used | Valid divider shape. Not referenced in current page HTML structure. |
| `backgrounds/divider-curve-bottom.svg` | 🚫 Not yet used | Valid divider shape. Not referenced in current page HTML structure. |
| `backgrounds/bg-gradient-dark.svg` | 🚫 Superfluous | App dark background is handled by CSS (`background-color: $color-dark-bg`). This file is not used. |
| `backgrounds/bg-gradient-accent.svg` | 🚫 Superfluous | Same — gradient handled by CSS. Contains "[Manual Export Required]" label. |

---

## Team (missing folder)

The team member credits modal is planned. No team assets exist yet.

| File | Status | Notes |
|------|--------|-------|
| `team/` directory | 🔲 Missing | Folder does not exist. Must be created when team modal is implemented. |
| `team/team-member-avatar-01.png` | 🔲 Missing | Export from Figma. 150×150px, PNG. |
| `team/team-member-avatar-02.png` | 🔲 Missing | Export from Figma. 150×150px, PNG. |
| `team/team-member-avatar-03.png` | 🔲 Missing | Export from Figma. 150×150px, PNG. |

---

## Summary by priority

### Must fix before implementation begins

1. **`icons/settings-icon.svg`** — Redraws as gear icon (currently a clock face)
2. **`icons/heart-icon.svg`** — Redraws as heart outline (currently a clock face in orange)
3. **`icons/share-icon.svg`** — Redraws as share icon (currently a star/asterisk pattern)

### Must export from Figma before final QA

4. **`logos/logo-main.svg`** — Real brand logo
5. **`logos/logo-white.svg`** — White variant of brand logo
6. **`logos/logo-solid.svg`** — Solid/monochrome variant
7. **`logos/favicon.svg`** — Favicon design

### Remove (incorrect or superfluous)

8. **`hero/hero-library.svg`** — Library page has no hero section
9. **`placeholders/placeholder-hero.svg`** — Redundant; use `placeholder-backdrop.svg` instead
10. **`backgrounds/bg-gradient-dark.svg`** — Replaced by CSS; file not referenced anywhere
11. **`backgrounds/bg-gradient-accent.svg`** — Same as above

### Create when needed

12. **`team/` folder + 3 avatar files** — Create when team modal is implemented

### Acceptable as-is (functional placeholders)

- All ✅ icons — correct shapes, usable now
- `⚠️ sun-icon.svg` / `moon-icon.svg` — simplified but recognizable; fix before final polish
- `placeholders/placeholder-poster.svg` and `placeholder-backdrop.svg` — correct dimensions and format

---

## Usage by section

### Header (all pages)
- `logos/logo-main.svg` — `<img class="nav-logo">` in all three page HTML files ✅ in use
- `icons/menu-icon.svg` — rendered by header.js for burger button
- `icons/close-icon.svg` — rendered by mobile-menu.js for close action
- `icons/sun-icon.svg` / `icons/moon-icon.svg` — rendered by header.js for theme toggle

### Hero (Home + Catalog pages only)
- `placeholders/placeholder-backdrop.svg` — fallback when TMDB `backdrop_path` is null
- Hero image itself: fetched from `https://image.tmdb.org/t/p/original/{backdrop_path}`

### Weekly Trends / Movie Grid (Home + Catalog + Library)
- `placeholders/placeholder-poster.svg` — fallback when TMDB `poster_path` is null

### Upcoming This Month (Home only)
- `placeholders/placeholder-poster.svg` — fallback for the upcoming movie poster

### Catalog (Search + Filters)
- `icons/search-icon.svg` — search bar button
- `icons/filter-icon.svg` — filter controls
- `icons/chevron-down-icon.svg` — dropdown selects

### Movie Cards (all grids)
- `icons/heart-icon.svg` (❌ broken) / `icons/heart-icon-filled.svg` ✅ — save to library toggle
- `icons/play-icon.svg` ✅ — open trailer modal

### Movie Modal
- `icons/close-icon.svg` ✅ — modal close button
- `icons/star-icon.svg` ✅ / `icons/star-icon-filled.svg` ✅ — rating display
- `icons/play-icon.svg` ✅ — watch trailer button
- `icons/clock-icon.svg` ✅ — runtime display
- `icons/calendar-icon.svg` ✅ — release date display

### Team Modal
- `team/team-member-avatar-*.png` 🔲 — missing, needed when modal is built

### Footer
- No image assets — content is text only

---

## Asset path convention

All paths use root-relative notation (Vite serves `public/` at `/`):

```html
<img src="/images/logos/logo-main.svg" alt="Cinemania">
<img src="/images/icons/play-icon.svg" alt="Play">
```

```javascript
const posterUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  : '/images/placeholders/placeholder-poster.svg';
```
