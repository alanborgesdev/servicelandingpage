// config/contacts.ts

/**
 * Informações de contato centralizadas
 * Use variáveis de ambiente para produção
 */
export const CONTACTS = {
    whatsapp: {
        number: import.meta.env.VITE_WHATSAPP_NUMBER || "+5515991182095",
        defaultMessage:
            "Olá! Gostaria de saber mais sobre os serviços de landing page.",
    },

    email: {
        address: import.meta.env.VITE_EMAIL || "borgexweb@gmail.com",
        link:
            import.meta.env.VITE_EMAIL_LINK ||
            "mailto:borgexweb@gmail.com",
    },

    phone: {
        display: "(15) 99118-2095",
        tel: "+5515991182095",
    },

    location: "Sorocaba, SP - Brasil",

    social: {
        instagram:
            import.meta.env.VITE_INSTAGRAM_URL ||
            "https://www.instagram.com/borgex.web",
    },
} as const;

/**
 * Informações da empresa
 */
export const COMPANY_INFO = {
    name: "BORGEX",
    fullName: "BORGEX - Engenharia de Conversão",
    tagline: "Engenharia de Conversão",
    description:
        "Desenvolvedor em criação de landing pages profissionais que convertem visitantes em clientes.",
    foundedYear: 2024,
    logo: "/logo.png",
} as const;
