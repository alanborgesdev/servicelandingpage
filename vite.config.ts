// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
// ... (outras importações)

export default defineConfig(({ mode }) => ({
    // ... (outras configurações)
    resolve: {
        alias: {
            // ESTÁ CORRETO: Resolve o alias '@' para o diretório './src'
            '@': path.resolve(__dirname, './src'),
        },
    },
}));
