export function setActiveNav() {
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('[data-route]').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href').includes(current));
  });
}
