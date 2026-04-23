import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'pages/nosotros.html'),
        servicios: resolve(__dirname, 'pages/servicios.html'),
        faq: resolve(__dirname, 'pages/faq.html'),
        contacto: resolve(__dirname, 'pages/contacto.html'),
      },
    },
  },
});
