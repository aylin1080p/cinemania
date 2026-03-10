/**
 * API Endpoints
 * =============
 * Constants containing all TMDB API endpoint paths
 * Using these ensures consistency across the application
 */

// Base endpoints
export const POPULAR_MOVIES = '/movie/popular';
export const UPCOMING_MOVIES = '/movie/upcoming';
export const SEARCH_MOVIES = '/search/movie';
export const DISCOVER_MOVIES = '/discover/movie';
export const GENRES = '/genre/movie/list';

/**
 * Get trending movies endpoint
 * @param {string} timeWindow - 'day' or 'week'
 * @returns {string} - Endpoint path
 */
export function getTrendingMovies(timeWindow = 'week') {
  return `/trending/movie/${timeWindow}`;
}

/**
 * Get movie details endpoint
 * @param {number} movieId - Movie ID
 * @returns {string} - Endpoint path
 */
export function getMovieDetails(movieId) {
  return `/movie/${movieId}`;
}

/**
 * Get movie videos/trailers endpoint
 * @param {number} movieId - Movie ID
 * @returns {string} - Endpoint path
 */
export function getMovieVideos(movieId) {
  return `/movie/${movieId}/videos`;
}

/**
 * Get movie credits endpoint
 * @param {number} movieId - Movie ID
 * @returns {string} - Endpoint path
 */
export function getMovieCredits(movieId) {
  return `/movie/${movieId}/credits`;
}

/**
 * Get movie recommendations endpoint
 * @param {number} movieId - Movie ID
 * @returns {string} - Endpoint path
 */
export function getMovieRecommendations(movieId) {
  return `/movie/${movieId}/recommendations`;
}

/**
 * Get person details endpoint
 * @param {number} personId - Person ID
 * @returns {string} - Endpoint path
 */
export function getPersonDetails(personId) {
  return `/person/${personId}`;
}
