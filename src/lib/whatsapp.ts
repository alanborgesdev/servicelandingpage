// lib/whatsapp.ts
import { CONTACTS } from '@/components/config/contacts';

/**
 * Gera URL do WhatsApp com mensagem personalizada
 * @param customMessage - Mensagem customizada (opcional)
 * @returns URL completa do WhatsApp
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
    const message = encodeURIComponent(customMessage || CONTACTS.whatsapp.defaultMessage);
    return `https://wa.me/${CONTACTS.whatsapp.number}?text=${message}`;
};

/**
 * Gera URL do WhatsApp com informações do plano
 * @param planName - Nome do plano selecionado
 * @returns URL do WhatsApp com mensagem do plano
 */
export const getWhatsAppUrlForPlan = (planName: string): string => {
    const message = `Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`;
    return getWhatsAppUrl(message);
};
