# Olena Vagner — сайт

Многоязычный сайт личного бренда (финансирование и покупка недвижимости в Польше). Astro, статическая сборка.

## Запуск

```bash
npm install
npm run dev              # локально: http://localhost:4321
npm run build            # сборка в dist/
npm run preview:static   # сборка + копия с относительными ссылками в preview-dist/ (для превью)
```

## Где что лежит

| Что | Где |
| --- | --- |
| Контакты, Instagram, реквизиты (заглушки = `null`) | `src/config/site.ts` |
| Языки сайта (включить язык: `enabled: true`) | `src/i18n/config.ts` |
| Адреса страниц на каждом языке | `src/i18n/routes.ts` |
| Тексты (польский — основной) | `src/i18n/dictionaries/pl.ts` |
| Статьи блога (`draft: true` = анонс «Wkrótce») | `src/content/blog/<язык>/*.md` |
| Дизайн-система (цвета, шрифты, кнопки, карточки) | `src/styles/global.css` |
| Страницы | `src/views/*.astro`, маршрут `src/pages/[...path].astro` |

В текстах `[[...]]` — заглушка «do uzupełnienia»: на сайте подсвечивается жёлтым, пока Олена не подтвердит данные.

## Перед публикацией

- `SITE_URL=https://ваш-домен` при сборке (canonical, hreflang, sitemap).
- `ALLOW_INDEXING=true` — открыть индексацию в robots.txt (сейчас закрыта).
- Убрать баннер «Wersja robocza» в `src/layouts/BaseLayout.astro`.
- Заполнить заглушки и заменить временное фото `src/assets/olena-temp.jpg`.
