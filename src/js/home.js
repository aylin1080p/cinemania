/**
 * Home Page Entry Point
 * =====================
 * Boots the home page in module order.
 * Sections: Hero → Weekly Trends → Upcoming This Month
 *
 * Each import corresponds to one section owner.
 * Implement the init function in the relevant module file.
 */

import '../sass/index.scss';

import { initHeader }       from './modules/header.js';
import { initMobileMenu }   from './modules/mobile-menu.js';
import { initHero }         from './modules/hero.js';
import { initWeeklyTrends } from './modules/weekly-trends.js';
import { initUpcoming }     from './modules/upcoming.js';
import { initFooter }       from './modules/footer.js';

async function initHomePage() {
  console.log('[home] booting');

  // TODO: owner → header.js
  // Renders logo, nav links, theme toggle, burger button.
  initHeader();

  // TODO: owner → mobile-menu.js
  // Wires burger button to slide-in nav panel.
  initMobileMenu();

  // TODO: owner → hero.js
  // Fetches a featured movie from TMDB and renders backdrop + content overlay.
  await initHero();

  // TODO: owner → weekly-trends.js
  // Fetches trending movies for the week and renders the horizontal strip.
  await initWeeklyTrends();

  // TODO: owner → upcoming.js
  // Fetches the next upcoming release and renders poster + detail panel.
  await initUpcoming();

  // TODO: owner → footer.js
  // Renders footer content and links.
  initFooter();
}

// Module scripts are deferred — guard handles the rare edge case.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHomePage);
} else {
  initHomePage();
}
