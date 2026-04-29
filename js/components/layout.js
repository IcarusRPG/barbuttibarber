import { AppConfig } from '../config.js';

export function injectSidebar() {
  const side = document.getElementById('sidebar');
  if (!side) return;
  side.innerHTML = `<div class="brand"><img class="brand-logo" src="${AppConfig.brand.logoUrl}" alt="Logo ${AppConfig.brand.name}"/><div><strong>${AppConfig.brand.name}</strong><p>App de Gestão</p></div></div>
  <nav>
    <a class="nav-link" data-route href="/pages/dashboard.html">🏠<span>Início</span></a>
    <a class="nav-link" data-route href="/pages/agenda.html">📅<span>Agenda</span></a>
    <a class="nav-link" data-route href="/pages/clientes.html">👤<span>Clientes</span></a>
    <a class="nav-link" data-route href="/pages/barbeiros.html">✂️<span>Equipe</span></a>
    <a class="nav-link" data-route href="/pages/servicos.html">🧾<span>Serviços</span></a>
    <a class="nav-link" data-route href="/pages/conversas.html">💬<span>Chats</span></a>
    <a class="nav-link" data-route href="/pages/configuracoes.html">⚙️<span>Ajustes</span></a>
    <a class="nav-link" data-route href="/pages/agendamento-publico.html">🌐<span>Público</span></a>
  </nav>`;
}
