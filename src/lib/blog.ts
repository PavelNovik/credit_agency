import type { Locale } from '../i18n/config';

export interface PostFrontmatter {
  title: string;
  description: string;
  category: 'kredyt' | 'zakup' | 'posrednik';
  date: string;
  /** Общий ключ статьи во всех языках — для hreflang и переключателя. */
  translationKey: string;
  /** Связанная услуга (id страницы). */
  service?: 'mortgage' | 'purchase' | 'language' | 'search';
  readingMinutes: number;
  /** Черновик: показывается только как анонс «Wkrótce». */
  draft?: boolean;
}

type Module = { frontmatter: PostFrontmatter; Content: any; file: string };
const modules = import.meta.glob<Module>('../content/blog/*/*.md', { eager: true });

export interface Post extends PostFrontmatter { slug: string; locale: Locale; Content: any }

export const allPosts: Post[] = Object.entries(modules).map(([path, mod]) => {
  const [, locale, file] = path.match(/blog\/([a-z]{2})\/(.+)\.md$/)!;
  return { ...mod.frontmatter, slug: file, locale: locale as Locale, Content: mod.Content };
});

export function postsFor(locale: Locale, { includeDrafts = false } = {}) {
  return allPosts
    .filter((p) => p.locale === locale && (includeDrafts || !p.draft))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function translationsOf(post: Post) {
  return allPosts.filter((p) => p.translationKey === post.translationKey && !p.draft);
}
