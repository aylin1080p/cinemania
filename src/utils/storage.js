/**
 * Local Storage Service
 * ====================
 * Handles all local storage operations for the application
 * Provides methods for saving/loading user data
 */

import { STORAGE_KEYS } from './constants.js';

/**
 * Get item from local storage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if key not found
 * @returns {*} - Stored value or default
 */
export function getItem(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving from storage: ${key}`, error);
    return defaultValue;
  }
}

/**
 * Set item in local storage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 */
export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to storage: ${key}`, error);
  }
}

/**
 * Remove item from local storage
 * @param {string} key - Storage key
 */
export function removeItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from storage: ${key}`, error);
  }
}

/**
 * Clear all storage
 */
export function clearAll() {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing storage', error);
  }
}

// Favorite movies operations
/**
 * Get favorite movies
 * @returns {Array<number>} - Array of favorite movie IDs
 */
export function getFavorites() {
  return getItem(STORAGE_KEYS.FAVORITE_MOVIES, []);
}

/**
 * Add movie to favorites
 * @param {number} movieId - Movie ID
 */
export function addToFavorites(movieId) {
  const favorites = getFavorites();
  if (!favorites.includes(movieId)) {
    favorites.push(movieId);
    setItem(STORAGE_KEYS.FAVORITE_MOVIES, favorites);
  }
}

/**
 * Remove movie from favorites
 * @param {number} movieId - Movie ID
 */
export function removeFromFavorites(movieId) {
  const favorites = getFavorites();
  const index = favorites.indexOf(movieId);
  if (index > -1) {
    favorites.splice(index, 1);
    setItem(STORAGE_KEYS.FAVORITE_MOVIES, favorites);
  }
}

/**
 * Check if movie is in favorites
 * @param {number} movieId - Movie ID
 * @returns {boolean} - True if favorite
 */
export function isFavorite(movieId) {
  return getFavorites().includes(movieId);
}

// Watched movies operations
/**
 * Get watched movies
 * @returns {Array<number>} - Array of watched movie IDs
 */
export function getWatched() {
  return getItem(STORAGE_KEYS.WATCHED_MOVIES, []);
}

/**
 * Add movie to watched
 * @param {number} movieId - Movie ID
 */
export function addToWatched(movieId) {
  const watched = getWatched();
  if (!watched.includes(movieId)) {
    watched.push(movieId);
    setItem(STORAGE_KEYS.WATCHED_MOVIES, watched);
  }
}

/**
 * Remove movie from watched
 * @param {number} movieId - Movie ID
 */
export function removeFromWatched(movieId) {
  const watched = getWatched();
  const index = watched.indexOf(movieId);
  if (index > -1) {
    watched.splice(index, 1);
    setItem(STORAGE_KEYS.WATCHED_MOVIES, watched);
  }
}

/**
 * Check if movie is watched
 * @param {number} movieId - Movie ID
 * @returns {boolean} - True if watched
 */
export function isWatched(movieId) {
  return getWatched().includes(movieId);
}
