/**
 * Genres Utility
 * ==============
 * Manages genre data and operations
 * Caches genre information after first fetch
 */

import { getGenres as fetchGenres } from '../services/tmdb-api.js';
import { getItem, setItem } from './storage.js';

let genresCache = null;

/**
 * Get all genres
 * @returns {Promise<Object>} - Genre data
 */
export async function getGenres() {
  // Return cached genres if available
  if (genresCache) {
    return genresCache;
  }

  try {
    const data = await fetchGenres();
    genresCache = data;
    // Cache genres locally for offline access
    setItem('genres_cache', data);
    return data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    // Try to use cached version from storage
    return getItem('genres_cache', { genres: [] });
  }
}

/**
 * Get genre name by ID
 * @param {number} genreId - Genre ID
 * @returns {Promise<string>} - Genre name
 */
export async function getGenreName(genreId) {
  const data = await getGenres();
  const genre = data.genres?.find(g => g.id === genreId);
  return genre?.name || 'Unknown';
}

/**
 * Get multiple genre names by IDs
 * @param {Array<number>} genreIds - Genre IDs
 * @returns {Promise<Array<string>>} - Genre names
 */
export async function getGenreNames(genreIds) {
  const data = await getGenres();
  return genreIds
    .map(id => data.genres?.find(g => g.id === id)?.name)
    .filter(Boolean);
}

/**
 * Clear genres cache
 */
export function clearGenresCache() {
  genresCache = null;
}
