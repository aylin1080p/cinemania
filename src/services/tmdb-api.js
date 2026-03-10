/**
 * TMDB API Service
 * =================
 * Main API service for interacting with The Movie Database (TMDB) API
 * Handles all HTTP requests and error handling
 */

import { API_KEY, API_BASE_URL, DEFAULT_PARAMS } from '../utils/constants.js';
import * as endpoints from './endpoints.js';

/**
 * Make a request to the TMDB API
 * @param {string} endpoint - The API endpoint path
 * @param {Object} params - Additional query parameters
 * @returns {Promise<Object>} - The API response data
 */
export async function apiRequest(endpoint, params = {}) {
  try {
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      ...DEFAULT_PARAMS,
      ...params,
    });

    const url = `${API_BASE_URL}${endpoint}?${queryParams.toString()}`;
    
    console.log(`API Request: ${endpoint}`);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
}

/**
 * Get popular movies
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Popular movies data
 */
export async function getPopularMovies(page = 1) {
  return apiRequest(endpoints.POPULAR_MOVIES, { page });
}

/**
 * Get trending movies
 * @param {string} timeWindow - 'day' or 'week'
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Trending movies data
 */
export async function getTrendingMovies(timeWindow = 'week', page = 1) {
  return apiRequest(endpoints.getTrendingMovies(timeWindow), { page });
}

/**
 * Get upcoming movies
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Upcoming movies data
 */
export async function getUpcomingMovies(page = 1) {
  return apiRequest(endpoints.UPCOMING_MOVIES, { page });
}

/**
 * Search movies by query
 * @param {string} query - Search query
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Search results
 */
export async function searchMovies(query, page = 1) {
  return apiRequest(endpoints.SEARCH_MOVIES, { query, page });
}

/**
 * Get movie details
 * @param {number} movieId - Movie ID
 * @returns {Promise<Object>} - Movie details
 */
export async function getMovieDetails(movieId) {
  return apiRequest(endpoints.getMovieDetails(movieId));
}

/**
 * Get movie genres
 * @returns {Promise<Object>} - Genre list
 */
export async function getGenres() {
  return apiRequest(endpoints.GENRES);
}

/**
 * Get movies by genre
 * @param {number} genreId - Genre ID
 * @param {number} page - Page number
 * @returns {Promise<Object>} - Movies by genre
 */
export async function getMoviesByGenre(genreId, page = 1) {
  return apiRequest(endpoints.DISCOVER_MOVIES, { with_genres: genreId, page });
}
