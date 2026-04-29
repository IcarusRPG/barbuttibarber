import { logout } from '../auth.js';
export function mountTopbarActions(){
  const el = document.querySelector('[data-logout]');
  if (el) el.addEventListener('click', () => { logout(); location.href = '/pages/login.html'; });
}
