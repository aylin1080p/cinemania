/**
 * Library Page Entry Point
 * ========================
 * Initializes the user's library/watchlist page
 * Displays saved movies with management functionality
 */

import '../sass/index.scss';

/**
 * Initialize library page
 */
function initLibraryPage() {
  console.log('📚 Library Page Initializing...');
  
  // Show page sections
  const libraryListSection = document.getElementById('library-list');
  const loadMoreSection = document.getElementById('load-more');
  
  if (libraryListSection) {
    console.log('✓ Library list section loaded');
  }
  if (loadMoreSection) {
    console.log('✓ Load more section loaded');
  }
  
  console.log('✓ Library page initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLibraryPage);
} else {
  initLibraryPage();
}
