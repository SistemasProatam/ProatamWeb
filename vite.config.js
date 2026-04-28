import { defineConfig } from 'vite';
import { resolve } from 'path';

function stripCommentsPlugin() {
  return {
    name: 'strip-html-comments',
    transformIndexHtml(html) {
      return html.replace(/<!--[\s\S]*?-->/g, '');
    }
  };
}

export default defineConfig({
  plugins: [stripCommentsPlugin()],
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
