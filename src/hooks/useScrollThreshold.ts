// hooks/useScrollThreshold.ts
import { useState, useEffect, useCallback } from 'react';
import { debounce, isBrowser } from '@/lib/utils';
import { SCROLL_CONFIG } from '@/components/config/constants';

interface UseScrollThresholdOptions {
    threshold?: number;
    debounceMs?: number;
}

/**
 * Hook para detectar quando o scroll passou de um threshold
 * @param options - Opções de configuração
 * @returns Boolean indicando se passou do threshold
 */
export const useScrollThreshold = ({
    threshold = SCROLL_CONFIG.headerThreshold,
    debounceMs = SCROLL_CONFIG.debounceMs,
}: UseScrollThresholdOptions = {}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        if (!isBrowser) return;

        const scrollY = window.scrollY || window.pageYOffset;
        setIsScrolled(scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        // Verifica se está no browser
        if (!isBrowser) return;

        // Debounce para evitar re-renders excessivos
        const debouncedHandleScroll = debounce(handleScroll, debounceMs);

        // Define estado inicial
        handleScroll();

        // Adiciona listener com passive: true para melhor performance
        window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [handleScroll, debounceMs]);

    return isScrolled;
};
