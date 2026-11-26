/**
 * Данные бренда и контакты. Всё, что равно null, на сайте показывается
 * как заметная заглушка «do uzupełnienia», а не выдуманное значение.
 */
export const site = {
  name: 'Olena Vagner',
  /** Имя бренда на сайте. Вариант из документа позиционирования, ждёт подтверждения. */
  brand: 'Olena Vagner',
  brandTagline: 'Finansowanie i nieruchomości',
  city: 'Poznań',
  instagram: { handle: '@olena.hipoteka', url: 'https://www.instagram.com/olena.hipoteka/' },
  linktree: 'https://linktr.ee/vagner.olena',

  /** Контакты: заполните перед публикацией. */
  email: null as string | null,
  /** Номер WhatsApp в международном формате без «+» и пробелов, например 48600111222. */
  whatsapp: null as string | null,
  phone: null as string | null,

  /** Языки, на которых Олена подтвердила консультации (коды локалей). */
  consultationLanguages: ['pl', 'uk'] as const,

  /** Юридические данные: заполнить после консультации с юристом/бухгалтером. */
  legal: {
    businessName: null as string | null,
    nip: null as string | null,
    regon: null as string | null,
    address: null as string | null,
  },
};
