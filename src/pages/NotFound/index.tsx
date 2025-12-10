// pages/NotFound/index.tsx
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        // Log erro 404 para monitoramento
        console.error('404 Error: User attempted to access non-existent route:', location.pathname);

        // Em produção, enviar para serviço de analytics
        if (import.meta.env.PROD) {
            // trackEvent({ name: '404_error', properties: { path: location.pathname } });
        }
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted p-6">
            <div className="text-center max-w-md">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        Página não encontrada
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Desculpe, a página que você está procurando não existe ou foi movida.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="default" size="lg" asChild>
                        <Link to="/">
                            <Home size={20} className="mr-2" />
                            Voltar para Home
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                        <ArrowLeft size={20} className="mr-2" />
                        Voltar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
