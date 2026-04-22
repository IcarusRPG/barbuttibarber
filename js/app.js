import { setActiveNav } from './router.js';
import { mountTopbarActions } from './components/topbar.js';

function initResponsiveSidebar() {
  const topbar = document.querySelector('.topbar');
  if (!topbar || document.querySelector('.mobile-menu-btn')) return;

  const titleBlock = topbar.querySelector('div');
  if (titleBlock) {
    titleBlock.classList.add('topbar-left');
    const btn = document.createElement('button');
    btn.className = 'mobile-menu-btn';
    btn.setAttribute('aria-label', 'Abrir menu');
    btn.textContent = '☰';
    btn.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
    titleBlock.prepend(btn);
  }

  document.addEventListener('click', (event) => {
    const isMobile = window.matchMedia('(max-width: 820px)').matches;
    if (!isMobile) return;
    const sidebar = document.getElementById('sidebar');
    if (!document.body.classList.contains('sidebar-open')) return;
    if (sidebar?.contains(event.target) || event.target.closest('.mobile-menu-btn')) return;
    document.body.classList.remove('sidebar-open');
  });

  document.querySelectorAll('#sidebar .nav-link').forEach((link) => {
    link.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  mountTopbarActions();
  initResponsiveSidebar();
});
