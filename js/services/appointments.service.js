import { get, post, patch } from '../api.js';
export const AppointmentsService = {
  list: (params='') => get(`/appointments${params}`),
  create: (payload) => post('/appointments', payload),
  updateStatus: (id, status) => patch(`/appointments/${id}/status`, { status }),
  checkConflict: (payload) => post('/appointments/check-conflict', payload)
};
