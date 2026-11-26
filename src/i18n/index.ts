import type { Locale } from './config';
import { pl, type Dictionary } from './dictionaries/pl';

/** Словари по языкам. Пока перевода нет, используется польский. */
const dictionaries: Partial<Record<Locale, Dictionary>> = { pl };

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
  out = out.replace(/\[\[(.+?)\]\]/g, '<span class="ph" title="Do uzupełnienia">$1</span>');
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  if (linkHref) out = out.replace(/\[(.+?)\]/g, `<a href="${linkHref}">$1</a>`);
  return out;
}

export { type Dictionary };
