import { mockConversations } from '../data/mock-data.js';
import { dateTimeBR } from '../utils/formatters.js';
const list = document.getElementById('conversation-list');
if(list) list.innerHTML = mockConversations.map(c=>`<li class="list-item"><div><strong>${c.client}</strong><p>${c.last}</p></div><div><span class="tag ${c.source==='bot'?'warning':'success'}">${c.source}</span><p>${dateTimeBR(c.at)}</p></div></li>`).join('');
