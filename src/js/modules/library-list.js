/**
 * Library List Module
 * ===================
 * Manages user's movie library/watchlist display
 */

import * as refs from '../../utils/refs.js';
import * as storage from '../../utils/storage.js';
import { showError, showSuccess } from '../../utils/notify.js';

/**
 * Initialize library list
 */
export async function initLibraryList() {
  console.log('Library list initialized');
  
  if (!refs.libraryListGrid) {
    return;
  }

  try {
    // TODO: Implement library logic
    // - Get favorite movies from storage
    // - Fetch full movie data from API
    // - Display in grid layout
    // - Add remove from library buttons
  } catch (error) {
    console.error('Error initializing library list:', error);
    showError('Failed to load library');
  }
}

/**
 * Render library list
 * @param {Array<Object>} movies - Movie data
 */
export function renderLibraryList(movies) {
  if (!refs.libraryListGrid) {
    return;
  }

  if (!movies || movies.length === 0) {
    refs.libraryListGrid.innerHTML = '<p>Your library is empty. Add some movies!</p>';
    return;
  }

  // TODO: Render library grid with cards
  // - Create movie card HTML for each movie
  // - Add delete/remove buttons
  // - Show watch status
}

/**
 * Remove movie from library
 * @param {number} movieId - Movie ID
 */
export function removeFromLibrary(movieId) {
  storage.removeFromFavorites(movieId);
  showSuccess('Movie removed from library');
  // TODO: Re-render library list
}

/**
 * Clear library list render
 */
export function clearLibraryList() {
  if (refs.libraryListGrid) {
    refs.libraryListGrid.innerHTML = '';
  }
}
