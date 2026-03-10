/**
 * Format Utilities
 * ================
 * Helper functions for formatting data for display
 */

import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from './constants.js';

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
export function formatDate(dateString) {
  if (!dateString) return 'N/A';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Format year from date string
 * @param {string} dateString - ISO date string
 * @returns {string} - Year
 */
export function formatYear(dateString) {
  if (!dateString) return 'N/A';
  return dateString.split('-')[0];
}

/**
 * Format runtime in minutes to human readable format
 * @param {number} minutes - Runtime in minutes
 * @returns {string} - Formatted time (e.g., "2h 30m")
 */
export function formatRuntime(minutes) {
  if (!minutes) return 'N/A';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

/**
 * Format rating to display
 * @param {number} rating - Rating (0-10)
 * @returns {string} - Formatted rating
 */
export function formatRating(rating) {
  if (rating === null || rating === undefined) return 'N/A';
  return (Math.round(rating * 10) / 10).toFixed(1);
}

/**
 * Format currency
 * @param {number} amount - Amount in dollars
 * @returns {string} - Formatted currency
 */
export function formatCurrency(amount) {
  if (!amount) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get poster image URL
 * @param {string} posterPath - Poster path from API
 * @returns {string} - Full image URL
 */
export function getPosterUrl(posterPath) {
  if (!posterPath) return '/placeholder-poster.jpg';
  return `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`;
}

/**
 * Get backdrop image URL
 * @param {string} backdropPath - Backdrop path from API
 * @returns {string} - Full image URL
 */
export function getBackdropUrl(backdropPath) {
  if (!backdropPath) return '/placeholder-backdrop.jpg';
  return `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath}`;
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, length = 100) {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Format vote count with abbreviations
 * @param {number} count - Vote count
 * @returns {string} - Formatted count
 */
export function formatVoteCount(count) {
  if (count === 0) return '0';
  if (count < 1000) return count.toString();
  if (count < 1000000) return (count / 1000).toFixed(1) + 'K';
  return (count / 1000000).toFixed(1) + 'M';
}
