/**
 * Search Bar Module
 * =================
 * Manages search functionality
 */

import * as refs from '../../utils/refs.js';
import * as api from '../../services/tmdb-api.js';
import { showError } from '../../utils/notify.js';
import { ERROR_MESSAGES } from '../../utils/constants.js';

/**
 * Initialize search bar
 */
export function initSearchBar() {
  console.log('Search bar initialized');
  
  if (!refs.searchInput || !refs.searchButton) {
    return;
  }

  // TODO: Implement search logic
  // - Add event listeners for input and button
  // - Handle search submission
  // - Implement autocomplete suggestions
  // - Clear previous results
}

/**
 * Perform search
 * @param {string} query - Search query
 */
export async function search(query) {
  if (!query.trim()) {
    showError(ERROR_MESSAGES.INVALID_SEARCH);
    return;
  }

  try {
    // TODO: Search for movies
    // - Call API with query
    // - Display results
    // - Reset pagination to page 1
  } catch (error) {
    console.error('Search error:', error);
    showError(ERROR_MESSAGES.API_ERROR);
  }
}

/**
 * Clear search
 */
export function clearSearch() {
  if (refs.searchInput) {
    refs.searchInput.value = '';
  }
  // TODO: Clear search results and reset view
}
