/**
 * Catalog Page Entry Point
 * ========================
 * Initializes the catalog/browse page
 * Displays searchable movie list with pagination
 */

import '../sass/index.scss';

/**
 * Initialize catalog page
 */
function initCatalogPage() {
  console.log('📽️ Catalog Page Initializing...');
  
  // Show page sections
  const searchSection = document.getElementById('search-bar');
  const movieListSection = document.getElementById('movie-list');
  const paginationSection = document.getElementById('pagination');
  
  if (searchSection) {
    console.log('✓ Search section loaded');
  }
  if (movieListSection) {
    console.log('✓ Movie list section loaded');
  }
  if (paginationSection) {
    console.log('✓ Pagination section loaded');
  }
  
  console.log('✓ Catalog page initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCatalogPage);
} else {
  initCatalogPage();
}
