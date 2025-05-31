import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // make sure Vite looks in the current folder
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
