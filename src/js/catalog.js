/**
 * Catalog Page Entry Point
 * ========================
 * Boots the catalog page in module order.
 * Sections: Hero → Search Bar → Movie List (grid + filters + pagination)
 *
 * Each import corresponds to one section owner.
 * Implement the init function in the relevant module file.
 */

import '../sass/index.scss';

import { initHeader }     from './modules/header.js';
import { initMobileMenu } from './modules/mobile-menu.js';
import { initHero }       from './modules/hero.js';
import { initSearchBar }  from './modules/search-bar.js';
import { initMovieList }  from './modules/movie-list.js';
import { initPagination } from './modules/pagination.js';
import { initFooter }     from './modules/footer.js';

async function initCatalogPage() {
  console.log('[catalog] booting');

  // TODO: owner → header.js
  // Renders logo, nav links, theme toggle, burger button.
  initHeader();

  // TODO: owner → mobile-menu.js
  // Wires burger button to slide-in nav panel.
  initMobileMenu();

  // TODO: owner → hero.js
  // Fetches a featured movie from TMDB and renders backdrop + content overlay.
  await initHero();

  // TODO: owner → search-bar.js
  // Attaches submit handler to #searchForm; triggers movie-list re-fetch on query.
  initSearchBar();

  // TODO: owner → movie-list.js
  // Fetches popular movies by default, renders cards into #movieListGrid.
  // Also owns genre/year filter controls inside #catalogFilters.
  await initMovieList();

  // TODO: owner → pagination.js
  // Renders prev/next controls inside #pagination; coordinates with movie-list.js.
  initPagination();

  // TODO: owner → footer.js
  // Renders footer content and links.
  initFooter();
}

// Module scripts are deferred — guard handles the rare edge case.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCatalogPage);
} else {
  initCatalogPage();
}
