export function injectSidebar() {
  const side = document.getElementById('sidebar');
  if (!side) return;
  side.innerHTML = `<div class="brand"><div class="brand-mark"></div><div><strong>Barbutti</strong><p>Premium SaaS</p></div></div>
  <nav>
    <a class="nav-link" data-route href="/pages/dashboard.html">Dashboard</a>
    <a class="nav-link" data-route href="/pages/agenda.html">Agenda</a>
    <a class="nav-link" data-route href="/pages/clientes.html">Clientes</a>
    <a class="nav-link" data-route href="/pages/barbeiros.html">Barbeiros</a>
    <a class="nav-link" data-route href="/pages/servicos.html">Serviços</a>
    <a class="nav-link" data-route href="/pages/conversas.html">Conversas</a>
    <a class="nav-link" data-route href="/pages/configuracoes.html">Configurações</a>
    <a class="nav-link" data-route href="/pages/agendamento-publico.html">Agendamento Público</a>
  </nav>`;
}
