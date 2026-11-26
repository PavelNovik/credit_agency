// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL: замените на реальный домен перед публикацией (например https://olenavagner.pl).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://example.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
