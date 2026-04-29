export const save = (k,v) => localStorage.setItem(k, JSON.stringify(v));
export const load = (k,fallback=null) => JSON.parse(localStorage.getItem(k) || JSON.stringify(fallback));
