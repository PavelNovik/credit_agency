import type { Locale } from './config';
import { pl, type Dictionary } from './dictionaries/pl';
import { uk } from './dictionaries/uk';
import { ru } from './dictionaries/ru';
import { es } from './dictionaries/es';
import { en } from './dictionaries/en';

/** Словари по языкам. Если для языка нет словаря, используется польский. */
const dictionaries: Partial<Record<Locale, Dictionary>> = { pl, uk, ru, es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? pl;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Превращает строку словаря в HTML:
 *   [[...]] → заглушка, **...** → жирный, [ссылка] → ссылка (если передан linkHref).
 */
export function rich(text: string, linkHref?: string): string {
  let out = escapeHtml(text);
  out = out.replace(/\[\[(.+?)\]\]/g, '<span class="ph">$1</span>');
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  if (linkHref) out = out.replace(/\[(.+?)\]/g, `<a href="${linkHref}">$1</a>`);
  return out;
}

export { type Dictionary };
