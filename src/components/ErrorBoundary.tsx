// components/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary Component
 * Captura erros em toda a árvore de componentes React
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
        // Atualiza o state para que a próxima renderização mostre a UI de fallback
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log do erro para serviço de monitoramento
        this.logErrorToService(error, errorInfo);

        // Callback customizado se fornecido
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }

        // Atualiza state com informações do erro
        this.setState({
            error,
            errorInfo,
        });
    }

    logErrorToService(error: Error, errorInfo: ErrorInfo): void {
        // Em produção, enviar para Sentry, LogRocket, etc.
        if (import.meta.env.PROD) {
            console.error('Error Boundary caught an error:', {
                error: error.toString(),
                errorInfo: errorInfo.componentStack,
                timestamp: new Date().toISOString(),
            });

            // Exemplo de integração com Sentry:
            // Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
        } else {
            // Em desenvolvimento, log detalhado no console
            console.error('Error Boundary caught an error:');
            console.error('Error:', error);
            console.error('Error Info:', errorInfo);
        }
    }

    handleReset = (): void => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    handleReload = (): void => {
        window.location.reload();
    };

    handleGoHome = (): void => {
        window.location.href = '/';
    };

    render(): ReactNode {
        const { hasError, error, errorInfo } = this.state;
        const { children, fallback } = this.props;

        if (hasError) {
            // Se um fallback customizado foi fornecido, usa ele
            if (fallback) {
                return fallback;
            }

            // UI de fallback padrão
            return (
                <div className="min-h-screen bg-background flex items-center justify-center p-6">
                    <div className="max-w-2xl w-full">
                        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                            {/* Ícone de erro */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                                    <AlertTriangle className="w-8 h-8 text-destructive" />
                                </div>
                            </div>

                            {/* Título */}
                            <h1 className="text-2xl font-bold text-center text-foreground mb-4">
                                Oops! Algo deu errado
                            </h1>

                            {/* Descrição */}
                            <p className="text-center text-muted-foreground mb-6">
                                Desculpe pelo inconveniente. Um erro inesperado ocorreu.
                                {import.meta.env.DEV && ' Veja os detalhes abaixo:'}
                            </p>

                            {/* Detalhes do erro (apenas em desenvolvimento) */}
                            {import.meta.env.DEV && error && (
                                <div className="mb-6 p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                                    <details className="cursor-pointer">
                                        <summary className="font-semibold text-sm text-destructive mb-2">
                                            Detalhes do Erro (Dev Mode)
                                        </summary>
                                        <div className="space-y-2">
                                            <div>
                                                <p className="text-xs font-semibold text-foreground mb-1">
                                                    Mensagem:
                                                </p>
                                                <pre className="text-xs text-muted-foreground bg-background p-2 rounded overflow-x-auto">
                                                    {error.message}
                                                </pre>
                                            </div>
                                            {error.stack && (
                                                <div>
                                                    <p className="text-xs font-semibold text-foreground mb-1">
                                                        Stack Trace:
                                                    </p>
                                                    <pre className="text-xs text-muted-foreground bg-background p-2 rounded overflow-x-auto max-h-32">
                                                        {error.stack}
                                                    </pre>
                                                </div>
                                            )}
                                            {errorInfo && (
                                                <div>
                                                    <p className="text-xs font-semibold text-foreground mb-1">
                                                        Component Stack:
                                                    </p>
                                                    <pre className="text-xs text-muted-foreground bg-background p-2 rounded overflow-x-auto max-h-32">
                                                        {errorInfo.componentStack}
                                                    </pre>
                                                </div>
                                            )}
                                        </div>
                                    </details>
                                </div>
                            )}

                            {/* Ações */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <button
                                    onClick={this.handleReset}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                    aria-label="Tentar novamente"
                                >
                                    <RefreshCw size={16} />
                                    Tentar Novamente
                                </button>
                                <button
                                    onClick={this.handleReload}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                                    aria-label="Recarregar página"
                                >
                                    <RefreshCw size={16} />
                                    Recarregar Página
                                </button>
                                <button
                                    onClick={this.handleGoHome}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
                                    aria-label="Voltar para home"
                                >
                                    <Home size={16} />
                                    Ir para Home
                                </button>
                            </div>

                            {/* Informação adicional */}
                            <div className="mt-6 pt-6 border-t border-border text-center">
                                <p className="text-sm text-muted-foreground">
                                    Se o problema persistir, por favor{' '}
                                    <a
                                        href="mailto:contato@borgex.com"
                                        className="text-primary hover:underline"
                                    >
                                        entre em contato
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
