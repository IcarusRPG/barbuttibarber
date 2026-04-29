import { setActiveNav } from './router.js';
import { mountTopbarActions } from './components/topbar.js';

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  mountTopbarActions();
});
