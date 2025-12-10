// hooks/useIsMobile.ts
import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '@/components/config/constants';
import { isBrowser } from '@/lib/utils';

/**
 * Hook para detectar se está em dispositivo mobile
 * @returns Boolean indicando se é mobile
 */
export function useIsMobile() {
    // Inicializa com valor correto para evitar flash
    const [isMobile, setIsMobile] = useState<boolean>(() => {
        if (!isBrowser) return false;
        return window.innerWidth < BREAKPOINTS.mobile;
    });

    useEffect(() => {
        if (!isBrowser) return;

        const mql = window.matchMedia(`(max-width: ${BREAKPOINTS.mobile - 1}px)`);

        const onChange = () => {
            setIsMobile(window.innerWidth < BREAKPOINTS.mobile);
        };

        // Define valor inicial
        onChange();

        // Usa API moderna se disponível
        if (mql.addEventListener) {
            mql.addEventListener('change', onChange);
            return () => mql.removeEventListener('change', onChange);
        } else {
            // Fallback para browsers antigos
            mql.addListener(onChange);
            return () => mql.removeListener(onChange);
        }
    }, []);

    return isMobile;
}
