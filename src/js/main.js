/**
 * Main Entry Point
 * ================
 * Initializes the main landing page
 */

import '../sass/index.scss';

/**
 * Initialize main landing page
 */
function initMainPage() {
  console.log('🎬 Cinemania Main Page Initializing...');
  console.log('✓ Page loaded at:', new Date().toLocaleTimeString());
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMainPage);
} else {
  initMainPage();
}
