import { type Locale, enabledLocales, localePrefix } from './config';

/** Все страницы сайта с переведёнными адресами. '' = главная. */
export const routes = {
  home:        { pl: '',                                uk: '',                         ru: '',                         es: '',                          en: '' },
  services:    { pl: 'uslugi',                          uk: 'poslugy',                  ru: 'uslugi',                   es: 'servicios',                 en: 'services' },
  mortgage:    { pl: 'uslugi/kredyty-hipoteczne',       uk: 'poslugy/ipoteka',          ru: 'uslugi/ipoteka',           es: 'servicios/hipotecas',       en: 'services/mortgage' },
  purchase:    { pl: 'uslugi/wsparcie-przy-zakupie',    uk: 'poslugy/kupivlia',         ru: 'uslugi/pokupka',           es: 'servicios/compra',          en: 'services/buying-support' },
  language:    { pl: 'uslugi/wsparcie-jezykowe',        uk: 'poslugy/movna-pidtrymka',  ru: 'uslugi/yazykovaya-podderzhka', es: 'servicios/apoyo-linguistico', en: 'services/language-support' },
  search:      { pl: 'uslugi/pomoc-w-znalezieniu',      uk: 'poslugy/poshuk',           ru: 'uslugi/poisk',             es: 'servicios/busqueda',        en: 'services/property-search' },
  process:     { pl: 'wspolpraca',                      uk: 'spivpratsia',              ru: 'sotrudnichestvo',          es: 'colaboracion',              en: 'how-we-work' },
  about:       { pl: 'o-mnie',                          uk: 'pro-mene',                 ru: 'obo-mne',                  es: 'sobre-mi',                  en: 'about' },
  blog:        { pl: 'blog',                            uk: 'blog',                     ru: 'blog',                     es: 'blog',                      en: 'blog' },
  faq:         { pl: 'faq',                             uk: 'faq',                      ru: 'faq',                      es: 'preguntas-frecuentes',      en: 'faq' },
  contact:     { pl: 'kontakt',                         uk: 'kontakty',                 ru: 'kontakty',                 es: 'contacto',                  en: 'contact' },
  privacy:     { pl: 'polityka-prywatnosci',            uk: 'polityka-konfidentsiinosti', ru: 'politika-konfidentsialnosti', es: 'politica-de-privacidad', en: 'privacy-policy' },
  cookies:     { pl: 'polityka-cookies',                uk: 'polityka-cookies',         ru: 'politika-cookies',         es: 'politica-de-cookies',       en: 'cookie-policy' },
  legal:       { pl: 'informacje-prawne',               uk: 'pravova-informatsiia',     ru: 'pravovaya-informatsiya',   es: 'informacion-legal',         en: 'legal-information' },
} as const satisfies Record<string, Record<Locale, string>>;

export type PageId = keyof typeof routes;
export const pageIds = Object.keys(routes) as PageId[];

/** Путь страницы без ведущего слэша, со слэшем на конце (или '' для главной PL). */
export function pagePath(id: PageId, locale: Locale): string {
  const slug = routes[id][locale];
  const p = `${localePrefix(locale)}${slug}`;
  return p === '' ? '' : p.endsWith('/') ? p : `${p}/`;
}

/** Абсолютный (от корня) URL страницы. */
export function href(id: PageId, locale: Locale): string {
  return `/${pagePath(id, locale)}`;
}

export function blogPostHref(locale: Locale, slug: string): string {
  return `${href('blog', locale)}${slug}/`;
}

export { enabledLocales };
