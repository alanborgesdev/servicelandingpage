// App.tsx
import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import LoadingFallback from '@/components/LoadingFallback';
import { createQueryClient } from '@/components/config/query-client.config';
import { ROUTES } from '@/components/config/constants';

// Lazy loading para code splitting
const LandingPage = lazy(() => import('@/pages/LandingPage/index'));
const NotFound = lazy(() => import('@/pages/NotFound/index'));

// Cria instância do QueryClient
const queryClient = createQueryClient();

const App = () => (
    <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <BrowserRouter>
                    <Suspense fallback={<LoadingFallback />}>
                        <Routes>
                            <Route path={ROUTES.home} element={<LandingPage />} />
                            <Route path={ROUTES.notFound} element={<NotFound />} />
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    </ErrorBoundary>
);

export default App;
