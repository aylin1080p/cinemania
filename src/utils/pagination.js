/**
 * Pagination Utility
 * ==================
 * Helper functions for managing pagination
 */

import { ITEMS_PER_PAGE, MAX_PAGES } from './constants.js';

/**
 * Calculate total pages
 * @param {number} totalItems - Total number of items
 * @returns {number} - Total pages needed
 */
export function calculateTotalPages(totalItems) {
  return Math.ceil(totalItems / ITEMS_PER_PAGE);
}

/**
 * Check if page is valid
 * @param {number} page - Page number
 * @param {number} totalPages - Total pages available
 * @returns {boolean} - True if valid
 */
export function isValidPage(page, totalPages) {
  return page >= 1 && page <= totalPages && page <= MAX_PAGES;
}

/**
 * Get safe page number
 * @param {number} page - Page number
 * @param {number} totalPages - Total pages available
 * @returns {number} - Safe page number
 */
export function getSafePage(page, totalPages) {
  if (page < 1) return 1;
  if (page > totalPages) return totalPages;
  if (page > MAX_PAGES) return MAX_PAGES;
  return page;
}

/**
 * Get page offset for API requests
 * @param {number} page - Page number
 * @returns {number} - Offset
 */
export function getPageOffset(page) {
  return (page - 1) * ITEMS_PER_PAGE;
}

/**
 * Calculate start and end item numbers for pagination display
 * @param {number} currentPage - Current page
 * @param {number} totalItems - Total items
 * @returns {Object} - { start, end }
 */
export function getItemRange(currentPage, totalItems) {
  const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const end = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);
  return { start, end };
}

/**
 * Generate page numbers for pagination display
 * @param {number} currentPage - Current page
 * @param {number} totalPages - Total pages
 * @param {number} displaySize - Number of pages to show (default 5)
 * @returns {Array<number>} - Array of page numbers
 */
export function generatePageNumbers(currentPage, totalPages, displaySize = 5) {
  const pages = [];
  const halfSize = Math.floor(displaySize / 2);
  let startPage = Math.max(1, currentPage - halfSize);
  let endPage = Math.min(totalPages, startPage + displaySize - 1);

  if (endPage - startPage < displaySize - 1) {
    startPage = Math.max(1, endPage - displaySize + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
}
