// config/constants.ts

/**
 * Breakpoints para responsividade
 * Sincronizado com Tailwind CSS
 */
export const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
    wide: 1536,
} as const;

/**
 * Configurações do React Query
 */
export const QUERY_CONFIG = {
    staleTime: 5 * 60 * 1000, // 5 minutos
    cacheTime: 10 * 60 * 1000, // 10 minutos
    retryAttempts: 3,
    retryDelayMax: 30000, // 30 segundos
} as const;

/**
 * Configurações de scroll e animação
 */
export const SCROLL_CONFIG = {
    headerThreshold: 50,
    debounceMs: 10,
    smoothScrollBehavior: 'smooth' as ScrollBehavior,
} as const;

/**
 * Configurações de toast
 */
export const TOAST_CONFIG = {
    limit: 1,
    removeDelay: 5000, // 5 segundos
} as const;

/**
 * Configurações de animação
 */
export const ANIMATION_CONFIG = {
    cardDelayIncrement: 100, // ms entre animações de cards
    defaultDuration: 300, // ms
    slowDuration: 500, // ms
} as const;

/**
 * Rotas da aplicação
 */
export const ROUTES = {
    home: '/',
    notFound: '*',
} as const;

/**
 * IDs de seções para navegação
 */
export const SECTION_IDS = {
    about: 'sobre',
    plans: 'planos',
    examples: 'exemplos',
    testimonials: 'depoimentos',
    process: 'processo',
    contact: 'contato',
} as const;
