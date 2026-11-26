import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  // Пока сайт — прототип, индексация закрыта. Перед публикацией поставьте ALLOW_INDEXING=true.
  const allow = process.env.ALLOW_INDEXING === 'true';
  const body = allow
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
