/**
 * Loader Utility
 * ==============
 * Manages loading spinner visibility
 */

import * as refs from './refs.js';

/**
 * Show loader
 */
export function showLoader() {
  if (refs.loader) {
    refs.loader.style.display = 'flex';
  }
}

/**
 * Hide loader
 */
export function hideLoader() {
  if (refs.loader) {
    refs.loader.style.display = 'none';
  }
}

/**
 * Toggle loader visibility
 * @param {boolean} show - Whether to show or hide
 */
export function toggleLoader(show) {
  if (show) {
    showLoader();
  } else {
    hideLoader();
  }
}

/**
 * Show loader with custom text
 * @param {string} text - Loading text
 */
export function showLoaderWithText(text = 'Loading...') {
  showLoader();
  const textElement = refs.loader?.querySelector('.loader__text');
  if (textElement) {
    textElement.textContent = text;
  }
}
