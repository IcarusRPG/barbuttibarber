# Barbutti Barbearia • Frontend SaaS (base desacoplada)

Projeto frontend premium, organizado para operar com backend/integradores via **n8n** e demonstrar o produto em **GitHub Pages**.

## Estrutura
- `index.html`: mock navegável comercial (sem backend).
- `pages/`: páginas reais do painel (login, dashboard, agenda, clientes, barbeiros, serviços, conversas, configurações, agendamento público).
- `css/`: reset, variáveis de tema, layout, componentes e estilos por página.
- `js/`: config central, api fetch, auth mockada, router, serviços por domínio, componentes, utilitários e scripts por página.
- `mock/`: CSS/JS exclusivos do demo da raiz.
- `integrations/`: documentação de endpoints e payloads para fluxos n8n.

## Como rodar
Como são arquivos estáticos ES Modules, use um servidor local:

```bash
python3 -m http.server 5500
```

Acesse:
- Demo comercial: `http://localhost:5500/`
- Painel real (login): `http://localhost:5500/pages/login.html`

## Credenciais iniciais (modo mock)
- Usuário: `adminicarus`
- Senha temporária: `Icarus#Goias!123`
- Troca de senha obrigatória no primeiro acesso prevista no fluxo.

## Integração n8n
Ajuste `js/config.js` (`api.baseUrl`) para seu webhook base e substitua gradualmente os mocks pelos serviços em `js/services/*.service.js`.

## Próximos passos recomendados
1. Conectar endpoints reais do n8n em homologação.
2. Adicionar upload de imagem para Cloudinary via webhook.
3. Integrar calendário (Google/Outlook) via n8n.
4. Implementar autenticação real (JWT/session) e RBAC por perfil.
