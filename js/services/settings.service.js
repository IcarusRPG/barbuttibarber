import { get, patch } from '../api.js';
export const SettingsService = { getBrand: () => get('/settings/brand'), updateBrand: (p) => patch('/settings/brand', p) };
