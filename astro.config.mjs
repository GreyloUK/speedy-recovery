// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/data/index.ts';

// https://astro.build/config
export default defineConfig({
  // Site URL is pulled from siteConfig.seo.siteUrl - update it there
  site: siteConfig.seo.siteUrl,
  
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
