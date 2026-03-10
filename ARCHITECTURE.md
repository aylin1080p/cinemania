# Cinemania Project Documentation

## Overview
Cinemania is a multi-page vanilla JavaScript application for discovering and managing movies. Built with Vite, TMDB API, and modern web standards.

## Project Structure

```
cinemania/
├── src/
│   ├── pages/                    # Multi-page entry points
│   │   ├── home/                 # Home page
│   │   ├── catalog/              # Movie catalog/browse
│   │   └── library/              # User library/watchlist
│   ├── js/                       # JavaScript modules
│   │   ├── main.js               # Main entry point
│   │   ├── home.js               # Home page init
│   │   ├── catalog.js            # Catalog page init
│   │   ├── library.js            # Library page init
│   │   └── modules/              # Feature modules
│   │       ├── header.js
│   │       ├── footer.js
│   │       ├── mobile-menu.js
│   │       ├── hero.js
│   │       ├── weekly-trends.js
│   │       ├── upcoming.js
│   │       ├── search-bar.js
│   │       ├── movie-list.js
│   │       ├── pagination.js
│   │       └── library-list.js
│   ├── partials/                 # HTML partials/components
│   ├── sass/                     # Styling
│   │   ├── index.scss            # Main import file
│   │   ├── base/                 # Base styles
│   │   ├── layouts/              # Layout components
│   │   ├── components/           # UI components
│   │   └── utils/                # SCSS utilities
│   ├── services/                 # API services
│   │   ├── tmdb-api.js           # TMDB API calls
│   │   └── endpoints.js          # API endpoint definitions
│   ├── utils/                    # Utility functions
│   │   ├── refs.js               # DOM references
│   │   ├── constants.js          # App constants
│   │   ├── storage.js            # LocalStorage operations
│   │   ├── genres.js             # Genre management
│   │   ├── format.js             # Data formatting
│   │   ├── pagination.js         # Pagination helpers
│   │   ├── theme.js              # Theme management
│   │   ├── loader.js             # Loading state
│   │   ├── scroll-up.js          # Scroll utilities
│   │   └── notify.js             # Notifications
│   ├── components/               # Reusable components
│   └── templates/                # Email/document templates
├── public/
│   └── images/                   # Public assets
│       ├── icons/
│       ├── patterns/
│       ├── posters/
│       └── backgrounds/
├── vite.config.js                # Vite configuration
├── package.json                  # Node dependencies
├── .env.example                  # Environment variables template
└── README.md                      # This file
```

## Getting Started

### 1. Installation
```bash
npm install
```

### 2. Setup API Key
- Get a TMDB API key from https://www.themoviedb.org/settings/api
- Create a `.env` file in the project root (copy from `.env.example`)
- Add your API key: `VITE_TMDB_API_KEY=your_key_here`

### 3. Development Server
```bash
npm run dev
```
Opens at http://localhost:3000

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## Architecture

### Pages
- **Home** (`/`) - Featured movies, trending, upcoming
- **Catalog** (`/src/pages/catalog/`) - Browse all movies with search and filters  
- **Library** (`/src/pages/library/`) - User's saved favorites

### JavaScript Modules
- **Entry Points** - Separate JS files per page for code splitting
- **Modules** - Feature modules handling specific functionality
- **Services** - API communication layer
- **Utils** - Reusable helper functions
- **Components** - Standalone UI components

### Styling Architecture
- **Responsive** - Mobile-first approach with SCSS mixins
- **Theme Support** - Light/dark theme with CSS custom properties
- **Component-based** - BEM-like naming convention
- **Utility Classes** - Flexbox, grid, spacing utilities

### Storage
- **LocalStorage** - Persistent user data (favorites, watched, settings)
- **Session** - Active page data and temporary state

## Key Features

### UI Components
- Header with navigation
- Mobile menu
- Movie cards with ratings
- Modal dialogs (movie details, trailer, team)
- Pagination controls
- Search bar
- Loader/spinner
- Notifications/toasts

### Functionality
- Movie search and filtering
- Browse popular, trending, upcoming
- Add to favorites/watchlist
- Local storage persistence
- Theme switching
- Responsive design
- Accessible forms and buttons

## Development Workflow

### Adding a New page
1. Create HTML in `src/pages/newpage/index.html`
2. Create JS entry in `src/js/newpage.js`
3. Add to `vite.config.js` input
4. Create page-specific modules

### Adding a New Component
1. Create HTML partial in `src/partials/`
2. Create module in `src/js/modules/`
3. Create component SCSS in `src/sass/components/`
4. Import and initialize in page entry file

### Adding Utilities
1. Create function in `src/utils/`
2. Export for use in modules
3. Document with JSDoc comments

## Code Standards

### JavaScript
- ES6 modules
- Async/await for API calls
- Destructuring and modern syntax
- JSDoc comments on functions
- Error handling with try/catch

### CSS/SCSS
- BEM naming: `.component__element--modifier`
- Mobile-first responsive
- DRY with mixins and extends
- Color/spacing variables
- Accessibility considerations

### HTML
- Semantic markup
- ARIA attributes where needed
- Placeholder structures for JS rendering

## Performance Optimization

- Code splitting per page
- CSS minification in build
- Image optimization needed (logo/placeholder)
- Lazy loading considerations
- Responsive images

## Browser Support

- Modern browsers (ES6+)
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] User authentication
- [ ] Advanced filtering
- [ ] Recommendations engine
- [ ] User reviews/ratings
- [ ] Social sharing
- [ ] Movie ratings export
- [ ] Watchlist collaboration
- [ ] PWA features

## Contributing Guidelines

- Follow existing code style
- Update documentation
- Test across devices
- Use semantic commits

## License

MIT License

## Team

Cinemania Development Team

## Support

For issues or questions, please check the documentation or create an issue.
