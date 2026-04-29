export const currencyBRL = (n) => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(n);
export const dateTimeBR = (d) => new Intl.DateTimeFormat('pt-BR',{dateStyle:'short',timeStyle:'short'}).format(new Date(d));
