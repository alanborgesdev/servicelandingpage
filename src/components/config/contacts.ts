// config/contacts.ts

/**
 * Informações de contato centralizadas
 * Use variáveis de ambiente para produção
 */
export const CONTACTS = {
    whatsapp: {
        number: import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999',
        defaultMessage: 'Olá! Gostaria de saber mais sobre os serviços de landing page.',
    },
    email: import.meta.env.VITE_EMAIL || 'contato@lpstudio.com',
    phone: {
        display: '(11) 99999-9999',
        tel: '+5511999999999',
    },
    location: 'São Paulo, SP - Brasil',
    social: {
        instagram: import.meta.env.VITE_INSTAGRAM_URL || '#',
        linkedin: import.meta.env.VITE_LINKEDIN_URL || '#',
    },
} as const;

/**
 * Informações da empresa
 */
export const COMPANY_INFO = {
    name: 'BORGEX',
    fullName: 'BORGEX - Engenharia de Conversão',
    tagline: 'Engenharia de Conversão',
    description:
        'Especialista em criação de landing pages profissionais que convertem visitantes em clientes.',
    foundedYear: 2024,
    logo: '/logo.png',
} as const;
