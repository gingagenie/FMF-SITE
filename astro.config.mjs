import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fixmyforklift.com.au',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
