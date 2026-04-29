import { get, post, patch } from '../api.js';
export const UsersService = { list: () => get('/users'), create: (p) => post('/users', p), forcePasswordReset: (id) => patch(`/users/${id}/force-reset`, {}) };
