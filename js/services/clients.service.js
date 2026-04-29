import { get, post, patch } from '../api.js';
export const ClientsService = { list: () => get('/clients'), create: (p) => post('/clients', p), update: (id,p) => patch(`/clients/${id}`, p) };
