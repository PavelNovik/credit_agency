// Делает копию сборки с относительными ссылками, чтобы прототип открывался
// с любого адреса (превью-хостинг, локальный файл). Для продакшена не нужен.
// Использование: node scripts/make-relative.mjs dist preview-dist
import { readdir, readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, relative, dirname, posix } from 'node:path';

const [src = 'dist', out = 'preview-dist'] = process.argv.slice(2);

async function walk(dir) {
  const items = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(items.map((d) => (d.isDirectory() ? walk(join(dir, d.name)) : [join(dir, d.name)])))).flat();
}

function rel(fromFile, target) {
  const [path, hash = ''] = target.split('#');
  let p = path;
  if (p.endsWith('/')) p += 'index.html';
  const fromDir = posix.dirname(fromFile);
  let r = posix.relative(fromDir, p.replace(/^\//, '')) || 'index.html';
  return r + (hash ? `#${hash}` : '');
}

for (const file of await walk(src)) {
  const r = relative(src, file).split('\\').join('/');
  const dest = join(out, r);
  await mkdir(dirname(dest), { recursive: true });
  if (r.endsWith('.html')) {
    let html = await readFile(file, 'utf8');
    html = html.replace(/(href|src)="(\/[^"]*)"/g, (_, a, u) => (u.startsWith('//') ? `${a}="${u}"` : `${a}="${rel(r, u)}"`));
    await writeFile(dest, html);
  } else if (r.endsWith('.css')) {
    let css = await readFile(file, 'utf8');
    css = css.replace(/url\(\/_astro\//g, 'url(./');
    await writeFile(dest, css);
  } else {
    await copyFile(file, dest);
  }
}
console.log(`Preview written to ${out}`);
