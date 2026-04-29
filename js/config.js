export const AppConfig = {
  brand: {
    name: 'Barbutti Barbearia',
    logoUrl: 'https://res.cloudinary.com/dk6okgt0a/image/upload/v1776542449/WhatsApp_Image_2026-04-17_at_21.09.05_sgbuvm.jpg',
    colors: { primary: '212,175,98', secondary: '156,122,68', accent: '109,196,216' }
  },
  api: {
    baseUrl: localStorage.getItem('barbutti_api_base') || 'https://n8n.example.com/webhook/barbutti',
    timeoutMs: 12000
  },
  features: { mockMode: true, publicBookingApprovalMode: 'auto' }
};
