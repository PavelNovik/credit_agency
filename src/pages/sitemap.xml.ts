import type { APIRoute } from 'astro';
import { enabledLocales, localeInfo, defaultLocale } from '../i18n/config';
import { pageIds, href, blogPostHref } from '../i18n/routes';
import { allPosts, translationsOf } from '../lib/blog';

export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const entries: { loc: string; alts: { lang: string; href: string }[] }[] = [];

  for (const id of pageIds) {
    const alts = enabledLocales.map((l) => ({ lang: localeInfo(l).htmlLang, href: abs(href(id, l)) }));
    for (const l of enabledLocales) entries.push({ loc: abs(href(id, l)), alts });
  }
  for (const post of allPosts.filter((p) => !p.draft && enabledLocales.includes(p.locale))) {
    const alts = translationsOf(post).filter((p) => enabledLocales.includes(p.locale))
      .map((p) => ({ lang: localeInfo(p.locale).htmlLang, href: abs(blogPostHref(p.locale, p.slug)) }));
    entries.push({ loc: abs(blogPostHref(post.locale, post.slug)), alts });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map((e) => `  <url>
    <loc>${e.loc}</loc>
${e.alts.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${a.href}"/>`).join('\n')}
${e.alts.find((a) => a.lang === localeInfo(defaultLocale).htmlLang) ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${e.alts.find((a) => a.lang === localeInfo(defaultLocale).htmlLang)!.href}"/>` : ''}
  </url>`).join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
