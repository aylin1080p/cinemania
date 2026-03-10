# Asset Rules for Cinemania

This document establishes the rules and conventions for managing visual assets in the Cinemania project.

## Asset Storage Location

All visual assets must be stored in the `public/images/` directory.

```
public/images/
├── logos/               # Brand logos and wordmarks
├── icons/               # UI icons and action buttons
├── hero/                # Hero section banner images
├── placeholders/        # Fallback/placeholder images
├── team/                # Team member photos and avatars
├── movies/              # Movie posters and thumbnails (API-driven)
└── backgrounds/         # Background patterns and textures
```

## Naming Convention

All asset file names must use **kebab-case** (hyphen-separated lowercase).

### Examples
✅ Correct:
- `logo-main.svg`
- `search-icon.svg`
- `hero-home.svg`
- `placeholder-poster.svg`
- `team-member-avatar-01.png`

❌ Incorrect:
- `LogoMain.svg` (PascalCase)
- `logo_main.svg` (snake_case)
- `searchIcon.svg` (camelCase)
- `Hero-Home.svg` (mixed case)

## Asset Categories

### Logos (`public/images/logos/`)
Brand identity assets. Preferred format: **SVG**.

| File Name | Usage |
|-----------|-------|
| logo-main.svg | Primary header logo |
| logo-white.svg | Logo for dark backgrounds |
| logo-solid.svg | Single color/monochrome logo |
| favicon.svg | Browser tab icon |

### Icons (`public/images/icons/`)
UI icons for actions and navigation. Preferred format: **SVG**.

All icons should be:
- Consistent stroke width (1.5-2px)
- Simple and scalable
- Work at sizes: 16px, 24px, 32px, 48px

**Naming Pattern**: `{action}-icon.svg`

Examples:
- search-icon.svg
- menu-icon.svg
- heart-icon.svg
- star-icon.svg
- play-icon.svg

### Hero Images (`public/images/hero/`)
Large banner images for page heroes. Preferred format: **JPG** (for photography) or **SVG** (for illustrated/templated designs).

| File Name | Page | Dimensions |
|-----------|------|------------|
| hero-home.svg | Home page | 1920×1080 |
| hero-catalog.svg | Catalog page | 1920×1080 |
| hero-library.svg | Library page | 1920×1080 |

### Placeholders (`public/images/placeholders/`)
Fallback images when API fails or data is unavailable. Format: **SVG** or **PNG**.

| File Name | Usage | Dimensions |
|-----------|-------|------------|
| placeholder-poster.svg | Movie posters | 300×450 |
| placeholder-backdrop.svg | Backdrops/wide images | 1920×1080 |
| placeholder-avatar.svg | User avatars | 128×128 |
| placeholder-hero.svg | Hero sections | 1200×600 |
| placeholder-skeleton-card.svg | Loading states | 200×200 |

### Team (`public/images/team/`)
Team member photos and avatars. Preferred format: **PNG** (for photos with transparency).

**Naming Pattern**: `team-member-avatar-{number}.png` or `{name}-avatar.png`

Examples:
- team-member-avatar-01.png
- team-member-avatar-02.png
- elena-avatar.png

### Backgrounds (`public/images/backgrounds/`)
Background patterns, gradients, and textures. Format: **JPG** (for large textures), **SVG** (for patterns).

**Naming Pattern**: `bg-{description}.{format}` or `divider-{direction}.svg`

Examples:
- bg-gradient-dark.jpg
- bg-pattern-dots.svg
- bg-texture-film.jpg
- divider-curve-top.svg
- divider-curve-bottom.svg

### Movies (`public/images/movies/`)
Movie posters and thumbnails. These are **dynamically managed by the API**, not stored in the repository.

This folder exists for cache or preprocessing purposes only.

## File Format Guidelines

### SVG
Use for:
- Logos
- Icons
- Illustrations
- Patterns (scalable)
- Dividers/decorative elements

Benefits:
- Infinitely scalable without quality loss
- Smaller file size than raster formats
- Easy to modify colors and properties via CSS

### JPG
Use for:
- Photographs
- Large background images
- Hero banners with photography
- Textures with gradients

Targets:
- Optimize to < 150 KB for hero images
- Optimize to < 200 KB for backgrounds

### PNG
Use for:
- Images requiring transparency
- Team member photos
- Placeholder images with transparency needed

Targets:
- Optimize to < 100 KB for avatars
- Optimize to < 50 KB for placeholders

## Asset Usage Rules

### 1. No Duplicates
Never create duplicate assets. If an icon exists, reuse it rather than creating a new one.

❌ Bad:
- heart-icon.svg
- favorite-icon.svg (same as heart-icon)

✅ Good:
- heart-icon.svg (reused in multiple places)

### 2. Asset Paths
Always use root-based asset paths in HTML/CSS/JS:

```html
<!-- Correct -->
<img src="/images/logos/logo-main.svg" alt="Cinemania">

<!-- Incorrect -->
<img src="../../public/images/logos/logo-main.svg" alt="Cinemania">
<img src="./images/logos/logo-main.svg" alt="Cinemania">
```

### 3. Fallback Patterns
Use placeholders as fallback when API image fails:

```javascript
// JavaScript
const posterUrl = movieData.posterUrl || '/images/placeholders/placeholder-poster.svg';

// HTML
<img src="/images/placeholders/placeholder-poster.svg" alt="Movie Poster">
```

### 4. No Random Asset Folders
Assets must go in their designated folders. Do not create random folders like:
- `src/assets/`
- `images/` (at root)
- `static/images/`
- `assets/graphics/`

All images go in: `public/images/{category}/`

### 5. Update ASSETS_MAP.md
Whenever adding a new asset:
1. Place it in the correct folder
2. Follow kebab-case naming
3. Update `public/images/ASSETS_MAP.md` with:
   - Asset name
   - File name
   - Format
   - Target folder
   - Usage
   - Status (Active)

Example entry to add:
```markdown
| New Icon | new-icon.svg | SVG | icons/ | Action button | ✅ Active |
```

## Optimization Guidelines

### Icons
- Max: 10 KB per file
- Stroke width: 1.5-2px
- Padding: Consistent internal spacing
- Test at 16px, 24px, 32px sizes

### Logos
- Max: 30 KB per file
- Aspect ratio: Consistent across variants
- Include main, white, and solid versions
- Ensure favicon is <= 5 KB

### Photos/Backdrops
- Max: 150-200 KB (after optimization)
- Use appropriate image optimization tools
- Consider responsive versions for mobile

### Placeholders
- Max: 50 KB per file
- Use SVG for flexibility and small size
- Include text labels for clarity

## Development Workflow

### Adding New Assets

1. **Prepare Asset**
   - Follow naming convention (kebab-case)
   - Save in correct format (SVG/JPG/PNG)
   - Optimize file size

2. **Place in Correct Folder**
   ```
   public/images/{category}/file-name.{ext}
   ```

3. **Update ASSETS_MAP.md**
   - Add entry to inventory table
   - Set status to "✅ Active"
   - Include usage notes

4. **Commit to Git**
   ```bash
   git add public/images/{category}/
   git add public/images/ASSETS_MAP.md
   git commit -m "Add {asset-name} icon/logo/image"
   ```

### Using Assets in Code

**HTML:**
```html
<img src="/images/logos/logo-main.svg" alt="Cinemania">
<img src="/images/icons/search-icon.svg" alt="Search">
<img src="/images/placeholders/placeholder-poster.svg" alt="Movie Poster">
```

**CSS:**
```css
.background {
  background-image: url('/images/backgrounds/bg-pattern-dots.svg');
}

.button::before {
  content: "";
  background-image: url('/images/icons/heart-icon.svg');
}
```

**JavaScript:**
```javascript
const logoUrl = '/images/logos/logo-main.svg';
const posterUrl = movieData.posterUrl || '/images/placeholders/placeholder-poster.svg';
```

## Asset Preview

View all available assets at: `/src/pages/asset-preview/`

This page displays:
- All icons with file names
- All logos in different variants
- All hero images
- All placeholder assets
- All background patterns

Use this page to inspect asset names and preview how assets render.

## Maintenance

### Regular Cleanup
- Remove unused assets
- Consolidate duplicates
- Update ASSETS_MAP.md when removing assets

### Directory Review
Run periodically to find orphaned or misplaced assets:
```bash
find public/images -type f | grep -v "\.svg\|\.jpg\|\.png\|ASSETS_MAP.md"
```

## Related Documentation

- [ASSETS_MAP.md](./public/images/ASSETS_MAP.md) - Complete asset inventory
- [Asset Preview](/src/pages/asset-preview/) - Visual asset reference

---

**Last Updated**: 2026-03-10  
**Version**: 1.0  
**Maintained By**: Development Team
