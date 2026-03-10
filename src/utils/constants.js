/**
 * Application Constants
 * ====================
 * Global configuration and constant values
 * Update these values to match your TMDB API setup
 */

// TMDB API Configuration
// Get your API key from: https://www.themoviedb.org/settings/api
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '';
export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

// Default image sizes
export const POSTER_SIZE = 'w342';
export const BACKDROP_SIZE = 'w1280';
export const PROFILE_SIZE = 'w185';

// Default API parameters
export const DEFAULT_PARAMS = {
  language: 'en-US',
};

// Pagination
export const ITEMS_PER_PAGE = 20;
export const MAX_PAGES = 500; // TMDB API limit

// Storage Keys
export const STORAGE_KEYS = {
  FAVORITE_MOVIES: 'cinemania_favorites',
  WATCHED_MOVIES: 'cinemania_watched',
  THEME: 'cinemania_theme',
  SETTINGS: 'cinemania_settings',
  SEARCH_HISTORY: 'cinemania_search_history',
};

// Theme
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const DEFAULT_THEME = THEMES.DARK;

// Navigation
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Catalog', href: '/src/pages/catalog/' },
  { label: 'My Library', href: '/src/pages/library/' },
];

// Movie Ratings
export const RATING_LABELS = {
  G: 'General Audiences',
  PG: 'Parental Guidance',
  PG_13: 'Parents Strongly Cautioned',
  R: 'Restricted',
  NC_17: 'No One 17 and Under',
};

// Error Messages
export const ERROR_MESSAGES = {
  API_ERROR: 'Failed to fetch data from the server. Please try again.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_SEARCH: 'Please enter a valid search query.',
  NO_RESULTS: 'No movies found matching your search.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ADDED_TO_FAVORITES: 'Added to favorites!',
  REMOVED_FROM_FAVORITES: 'Removed from favorites.',
  ADDED_TO_WATCHED: 'Added to watched movies!',
  REMOVED_FROM_WATCHED: 'Removed from watched movies.',
};
