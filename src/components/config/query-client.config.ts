// config/query-client.config.ts
import { QueryClient, DefaultOptions, QueryCache } from '@tanstack/react-query'; // Importar QueryCache
import { QUERY_CONFIG } from './constants';

/**
 * Calcula delay exponencial para retry
 * @param attemptIndex - Índice da tentativa (0-based)
 * @returns Delay em milliseconds
 */
const calculateRetryDelay = (attemptIndex: number): number => {
    const baseDelay = 1000;
    const exponentialDelay = baseDelay * Math.pow(2, attemptIndex);
    return Math.min(exponentialDelay, QUERY_CONFIG.retryDelayMax);
};

/**
 * Handler de erro para queries
 */
const handleQueryError = (error: Error): void => {
    if (import.meta.env.PROD) {
        // Aqui você pode integrar com Sentry, LogRocket, etc.
        console.error('Query Error (Production):', error);
    } else {
        console.error('Query error:', error);
    }
};

/**
 * Handler de erro para mutations
 */
const handleMutationError = (error: Error): void => {
    if (import.meta.env.PROD) {
        // Aqui você pode integrar com Sentry, LogRocket, etc.
        console.error('Mutation Error (Production):', error);
    } else {
        console.error('Mutation error:', error);
    }
};

export const queryClientConfig: DefaultOptions = {
    queries: {
        staleTime: QUERY_CONFIG.staleTime,
        gcTime: QUERY_CONFIG.cacheTime,
        retry: QUERY_CONFIG.retryAttempts,
        retryDelay: calculateRetryDelay,
        refetchOnWindowFocus: false,
    },
    mutations: {
        retry: 1,
        onError: handleMutationError,
    },
};

/**
 * Cria instância configurada do QueryClient
 */
export const createQueryClient = (): QueryClient => {
    return new QueryClient({
        defaultOptions: queryClientConfig,
        // CORREÇÃO: Adicionar QueryCache para tratar erros globais de queries
        queryCache: new QueryCache({
            onError: handleQueryError,
        }),
    });
};
