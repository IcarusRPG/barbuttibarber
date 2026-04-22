const views = document.querySelectorAll('.mock-view');
const nav = document.querySelectorAll('[data-view]');
const menuBtn = document.getElementById('mock-menu-btn');
const sidebar = document.getElementById('sidebar-mock');

function activate(id) {
  views.forEach((v) => v.classList.toggle('active', v.id === id));
  nav.forEach((n) => n.classList.toggle('active', n.dataset.view === id));
  document.body.classList.remove('sidebar-open');
}

nav.forEach((n) => n.addEventListener('click', () => activate(n.dataset.view)));
menuBtn?.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));

document.addEventListener('click', (event) => {
  const isMobile = window.matchMedia('(max-width: 820px)').matches;
  if (!isMobile || !document.body.classList.contains('sidebar-open')) return;
  if (sidebar?.contains(event.target) || event.target.closest('#mock-menu-btn')) return;
  document.body.classList.remove('sidebar-open');
});

activate('mock-dashboard');
