// components/LoadingFallback.tsx
import { Loader2 } from 'lucide-react';

/**
 * Loading Fallback Component
 * Exibido durante lazy loading de componentes
 */
const LoadingFallback = () => {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
                {/* Spinner animado */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" aria-hidden="true" />
                </div>

                {/* Texto de carregamento */}
                <h2 className="text-xl font-semibold text-foreground mb-2">Carregando...</h2>
                <p className="text-sm text-muted-foreground">Aguarde um momento</p>

                {/* Screen reader only */}
                <span className="sr-only">Carregando página, por favor aguarde</span>
            </div>
        </div>
    );
};

export default LoadingFallback;
