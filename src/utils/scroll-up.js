/**
 * Scroll To Top Utility
 * ===================
 * Helper functions for scroll behavior
 */

/**
 * Scroll to top of page smoothly
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

/**
 * Scroll to element
 * @param {HTMLElement|string} target - Element or selector
 * @param {Object} options - Scroll options
 */
export function scrollToElement(target, options = {}) {
  const element = typeof target === 'string' ? document.querySelector(target) : target;
  
  if (!element) return;

  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    ...options,
  };

  element.scrollIntoView(defaultOptions);
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - True if in viewport
 */
export function isInViewport(element) {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

/**
 * Get scroll position
 * @returns {Object} - { x, y }
 */
export function getScrollPosition() {
  return {
    x: window.scrollX || window.pageXOffset,
    y: window.scrollY || window.pageYOffset,
  };
}
