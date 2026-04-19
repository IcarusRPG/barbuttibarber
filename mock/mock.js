const views = document.querySelectorAll('.mock-view');
const nav = document.querySelectorAll('[data-view]');
function activate(id){views.forEach(v=>v.classList.toggle('active',v.id===id));nav.forEach(n=>n.classList.toggle('active',n.dataset.view===id));}
nav.forEach(n=>n.addEventListener('click',()=>activate(n.dataset.view)));
activate('mock-dashboard');
