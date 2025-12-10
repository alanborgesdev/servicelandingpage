// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App.tsx';
import './index.css';

/**
 * Inicialização segura da aplicação
 */
const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error("Failed to find root element. Ensure your HTML contains <div id='root'></div>");
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
