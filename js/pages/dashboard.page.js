import { mockKpis } from '../data/mock-data.js';
import { kpiCard } from '../components/cards.js';
const root = document.getElementById('kpis');
if (root) root.innerHTML = mockKpis.map((k) => kpiCard(k.title, k.value, k.meta)).join('');
