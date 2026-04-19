const KEY = 'barbutti_session';
const adminSeed = { username: 'adminicarus', password: 'Icarus#Goias!123', role: 'administrador', firstAccess: true };

export function login(username, password) {
  if (username === adminSeed.username && password === adminSeed.password) {
    const session = { user: { username, role: adminSeed.role }, mustChangePassword: adminSeed.firstAccess };
    localStorage.setItem(KEY, JSON.stringify(session));
    return session;
  }
  throw new Error('Credenciais inválidas para o modo demo.');
}
export function getSession() { return JSON.parse(localStorage.getItem(KEY) || 'null'); }
export function logout() { localStorage.removeItem(KEY); }
export function requireAuth() { if (!getSession()) location.href = '/pages/login.html'; }
