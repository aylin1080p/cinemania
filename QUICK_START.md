# Quick Start Guide

## Setup in 3 Minutes

### 1. Get API Key
Sign up at https://www.themoviedb.org/settings/api and get your free API key.

### 2. Configure Environment
```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your API key
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

### 3. Install and Run
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Template Overview

### What's Included
✅ Multi-page Vite setup (Home, Catalog, Library)
✅ SCSS architecture with utilities and mixins
✅ API service layer for TMDB
✅ Modular JavaScript structure
✅ LocalStorage management
✅ Theme switching (light/dark)
✅ Responsive mobile-first CSS
✅ Toast notifications
✅ Modal system
✅ Pagination utilities
✅ Form handling

### Key Files to Edit

**Add your TMDB API key:**
- `.env` (create from `.env.example`)

**Customize styling:**
- `src/sass/utils/variables.scss` - Colors, spacing, fonts
- `src/sass/utils/mixins.scss` - Reusable patterns

**Add business logic:**
- `src/js/modules/*.js` - Individual feature modules
- `src/services/*.js` - API communication

**Update HTML:**
- `src/pages/*/index.html` - Page structures
- `src/partials/*.html` - Reusable components

## File Structure Philosophy

```
src/
├── pages/          # Page entry points (what users see)
├── js/
│   ├── main.js     # Shared initialization
│   └── modules/    # Feature modules (header, search, etc)
├── services/       # API layer (TMDB calls)
├── utils/          # Helpers (storage, format, theme)
├── partials/       # HTML snippets (reusable)
└── sass/           # Styling
    ├── base/       # Reset, typography
    ├── layouts/    # Grid, containers, header, footer
    ├── components/ # Buttons, cards, modals
    └── utils/      # Variables, mixins, placeholders
```

## Common Tasks

### Add a new page
1. Create `src/pages/newpage/index.html`
2. Create `src/js/newpage.js` entry point
3. Import components/modules as needed
4. Add to `vite.config.js`

### Add a new component
1. Create HTML partial in `src/partials/`
2. Create module in `src/js/modules/`
3. Add SCSS in `src/sass/components/`
4. Export and import where needed

### Fetch movies from API
```javascript
import * as api from '../services/tmdb-api.js';

// Get popular movies
const data = await api.getPopularMovies(page = 1);

// Search movies
const results = await api.searchMovies('Inception');

// Get movie details
const movie = await api.getMovieDetails(550);
```

### Save/load user data
```javascript
import * as storage from '../utils/storage.js';

// Save favorites
storage.addToFavorites(movieId);
storage.removeFromFavorites(movieId);

// Check if favorite
if (storage.isFavorite(movieId)) {
  // Show remove button
}

// Load all favorites
const favorites = storage.getFavorites();
```

### Show notifications
```javascript
import { showSuccess, showError, showWarning } from '../utils/notify.js';

showSuccess('Movie added!');
showError('Something went wrong');
showWarning('Please fill in all fields');
```

### Change theme
```javascript
import { toggleTheme, setTheme } from '../utils/theme.js';

// Toggle between light/dark
const newTheme = toggleTheme();

// Set specific theme
setTheme('dark');
```

## Styling Tips

### Responsive Design
Use the `@include respond-to()` mixin:
```scss
.component {
  padding: $spacing-md;
  
  @include respond-to('md') {
    padding: $spacing-lg;
  }
  
  @include respond-to('lg') {
    padding: $spacing-xl;
  }
}
```

### Theme Support
Use `[data-theme='dark']` selector:
```scss
.component {
  background: $color-white;
  color: $color-gray-900;
  
  [data-theme='dark'] & {
    background: $color-dark-surface;
    color: $color-white;
  }
}
```

### Common Utilities
```html
<!-- Flexbox -->
<div class="flex flex-center gap-md">Content</div>
<div class="flex flex-between items-center">Content</div>

<!-- Grid -->
<div class="grid grid-cols-3 gap-lg">Items</div>

<!-- Typography -->
<h1 class="text-4xl font-bold">Heading</h1>
<p class="text-sm text-muted">Small gray text</p>

<!-- Spacing -->
<div class="mt-lg mb-xl">Content</div>
```

## Build & Deploy

### Production Build
```bash
npm run build
```

Creates optimized files in `dist/` directory.

### Deploy
- Upload `dist/` folder to your hosting
- Set environment variable `VITE_TMDB_API_KEY` on server
- Ensure CORS is configured if needed

## Troubleshooting

**"API Error" when fetching movies:**
- Check TMDB API key is correct in `.env`
- Verify key has necessary permissions
- Check browser console for detailed error

**SCSS not compiling:**
- Ensure all partial imports exist
- Check for syntax errors in SCSS files
- Restart dev server

**Module not found errors:**
- Check file path is correct
- Verify export/import statements match
- Use relative paths: `../../../utils/`

## Next Steps

1. ✅ Setup API key
2. ✅ Run `npm install && npm run dev`
3. ✅ Check pages load without errors
4. ✅ In `src/js/modules/`, implement TODO sections
5. ✅ Build out your features!

Enjoy building with Cinemania! 🎬
