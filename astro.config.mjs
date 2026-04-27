// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { seo } from './src/data/seo.ts';

// https://astro.build/config
export default defineConfig({
  // Site URL is pulled from src/data/seo.ts - update it there
  site: seo.siteUrl,
  
  // URL format: Always use trailing slashes (e.g., /services/ not /services)
  trailingSlash: 'always',
  
  // Build options
  build: {
    // Generate /page/index.html for each page (works with trailingSlash: 'always')
    format: 'directory'
  },
  
  // Enable prefetching for faster page navigations (improves UX + Core Web Vitals)
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
