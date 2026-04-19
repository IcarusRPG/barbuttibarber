import { get, post, patch } from '../api.js';
export const BarbersService = { list: () => get('/barbers'), create: (p) => post('/barbers', p), update: (id,p) => patch(`/barbers/${id}`, p) };
