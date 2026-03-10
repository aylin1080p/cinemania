/**
 * Library Page Entry Point
 * ========================
 * Boots the library page in module order.
 * Sections: Library Tabs (Watched / Queue) → Library Grid
 * Note: this page has no hero section.
 *
 * Each import corresponds to one section owner.
 * Implement the init function in the relevant module file.
 */

import '../sass/index.scss';

import { initHeader }      from './modules/header.js';
import { initMobileMenu }  from './modules/mobile-menu.js';
import { initLibraryList } from './modules/library-list.js';
import { initFooter }      from './modules/footer.js';

async function initLibraryPage() {
  console.log('[library] booting');

  // TODO: owner → header.js
  // Renders logo, nav links, theme toggle, burger button.
  initHeader();

  // TODO: owner → mobile-menu.js
  // Wires burger button to slide-in nav panel.
  initMobileMenu();

  // TODO: owner → library-list.js
  // Renders WATCHED / QUEUE tab buttons into #libraryTabControls.
  // Reads saved movies from localStorage and renders cards into #libraryListGrid.
  await initLibraryList();

  // TODO: owner → footer.js
  // Renders footer content and links.
  initFooter();
}

// Module scripts are deferred — guard handles the rare edge case.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLibraryPage);
} else {
  initLibraryPage();
}
