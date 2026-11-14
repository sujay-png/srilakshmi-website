import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://srilakshmiconstruction.com',
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
    }
  }
});
