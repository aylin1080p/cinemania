/**
 * Home Page Entry Point
 * =====================
 * Initializes the home page
 * Displays hero section, trending movies, and upcoming releases
 */

import '../sass/index.scss';

/**
 * Initialize home page
 */
function initHomePage() {
  console.log('🏠 Home Page Initializing...');
  
  // Show page sections
  const heroSection = document.getElementById('hero');
  const trendingSection = document.getElementById('weekly-trends');
  const upcomingSection = document.getElementById('upcoming');
  
  if (heroSection) {
    console.log('✓ Hero section loaded');
  }
  if (trendingSection) {
    console.log('✓ Weekly trends section loaded');
  }
  if (upcomingSection) {
    console.log('✓ Upcoming releases section loaded');
  }
  
  console.log('✓ Home page initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}
