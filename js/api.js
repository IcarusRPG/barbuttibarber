import { AppConfig } from './config.js';

export async function request(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AppConfig.api.timeoutMs);
  try {
    const response = await fetch(`${AppConfig.api.baseUrl}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
      signal: controller.signal,
      ...options
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.message || 'Não foi possível concluir a solicitação.');
    return data;
  } catch (error) {
    throw new Error(error.name === 'AbortError' ? 'Tempo excedido na integração n8n.' : error.message);
  } finally {
    clearTimeout(timer);
  }
}

export const get = (path) => request(path);
export const post = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) });
export const patch = (path, body) => request(path, { method: 'PATCH', body: JSON.stringify(body) });
