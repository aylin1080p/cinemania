/**
 * Theme Utility
 * =============
 * Manages light/dark theme switching
 */

import { THEMES, DEFAULT_THEME, STORAGE_KEYS } from './constants.js';
import { getItem, setItem } from './storage.js';

/**
 * Get current theme
 * @returns {string} - Current theme (light or dark)
 */
export function getCurrentTheme() {
  // Check localStorage first
  const stored = getItem(STORAGE_KEYS.THEME);
  if (stored) return stored;

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.DARK;
  }

  return DEFAULT_THEME;
}

/**
 * Initialize theme
 */
export function initTheme() {
  const theme = getCurrentTheme();
  applyTheme(theme);
}

/**
 * Apply theme to document
 * @param {string} theme - Theme to apply
 */
export function applyTheme(theme) {
  const html = document.documentElement;
  html.setAttribute('data-theme', theme);
  setItem(STORAGE_KEYS.THEME, theme);
}

/**
 * Toggle theme
 * @returns {string} - New theme
 */
export function toggleTheme() {
  const current = getCurrentTheme();
  const newTheme = current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
  applyTheme(newTheme);
  return newTheme;
}

/**
 * Set theme explicitly
 * @param {string} theme - Theme to set
 */
export function setTheme(theme) {
  if (Object.values(THEMES).includes(theme)) {
    applyTheme(theme);
  }
}

/**
 * Listen to system theme changes
 * @param {Function} callback - Callback function
 */
export function onSystemThemeChange(callback) {
  if (!window.matchMedia) return;

  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', (e) => {
    callback(e.matches ? THEMES.DARK : THEMES.LIGHT);
  });
}
