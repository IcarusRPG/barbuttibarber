# Integrações n8n esperadas (Barbutti Barbearia)

Base URL configurável em `js/config.js`.

## Autenticação
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/change-password-first-access`

## Usuários e equipe
- `GET /users`
- `POST /users`
- `PATCH /users/:id`
- `GET /barbers`
- `POST /barbers`
- `PATCH /barbers/:id`

## Clientes
- `GET /clients`
- `POST /clients`
- `PATCH /clients/:id`

## Serviços
- `GET /services`
- `POST /services`
- `PATCH /services/:id`

## Agendamentos
- `GET /appointments?date=&barberId=&status=`
- `POST /appointments`
- `POST /appointments/check-conflict`
- `PATCH /appointments/:id/status`
- `POST /appointments/:id/reschedule`
- `POST /appointments/:id/cancel`

## Conversas e bot
- `GET /conversations`
- `GET /conversations/:id/messages`
- `POST /conversations/message`
- `POST /webhooks/whatsapp-events`

## Configurações e marca
- `GET /settings/brand`
- `PATCH /settings/brand`
- `GET /settings/scheduling-rules`
- `PATCH /settings/scheduling-rules`

## Relatórios
- `GET /reports/overview?from=&to=`
- `GET /reports/barbers-performance?from=&to=`
- `GET /audit-log?from=&to=&userId=`
