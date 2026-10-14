// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chaveiro24horasrj.com.br',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    // CSS inline ate 8 kB: o celular pinta a primeira tela sem esperar um
    // arquivo .css separado, o que derruba o tempo ate aparecer conteudo no 4G.
    inlineStylesheets: 'auto',
  },
});
