/**
 * Список языков сайта. Чтобы добавить язык:
 * 1) добавьте запись сюда,
 * 2) добавьте словарь в src/i18n/dictionaries/<код>.ts,
 * 3) добавьте адреса страниц в src/i18n/routes.ts,
 * 4) поставьте enabled: true.
 */
export const locales = [
  { code: 'pl', label: 'PL', name: 'Polski', htmlLang: 'pl', ogLocale: 'pl_PL', enabled: true },
  { code: 'uk', label: 'UK', name: 'Українська', htmlLang: 'uk', ogLocale: 'uk_UA', enabled: true },
  { code: 'ru', label: 'RU', name: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU', enabled: true },
  { code: 'es', label: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES', enabled: true },
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB', enabled: true },
] as const;

export type Locale = (typeof locales)[number]['code'];
export const defaultLocale: Locale = 'pl';
export const enabledLocales = locales.filter((l) => l.enabled).map((l) => l.code) as Locale[];

export function localeInfo(code: Locale) {
  return locales.find((l) => l.code === code)!;
}

/** Префикс URL: польский живёт в корне, остальные под /uk/, /ru/ и т.д. */
export function localePrefix(code: Locale) {
  return code === defaultLocale ? '' : `${code}/`;
}
