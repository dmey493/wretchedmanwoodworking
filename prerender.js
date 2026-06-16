// Build-time prerender: render each route to static HTML and inject it into a
// copy of the built template. Produces dist/index.html (home) and
// dist/gallery/index.html (works) so search engines get full content per page.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')
const { render } = await import('./dist-server/entry-server.js')

if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find <div id="root"></div> in dist/index.html')
}

const routes = [
  { url: '/', out: 'dist/index.html', meta: null },
  {
    url: '/gallery',
    out: 'dist/gallery/index.html',
    meta: {
      title: 'Our Work | Wretched Man Woodworking',
      desc: 'Browse our portfolio of custom handmade furniture and artisan small goods, including live-edge tables, A-frame tables, cutting boards, doors, and more, built in northeast Indiana.',
      canonical: 'https://www.wmwoodworking.com/gallery',
    },
  },
]

function applyMeta(html, meta) {
  if (!meta) return html
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${meta.desc}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${meta.canonical}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${meta.canonical}$2`)
}

for (const route of routes) {
  const appHtml = render(route.url)
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  html = applyMeta(html, route.meta)
  const outPath = resolve(__dirname, route.out)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerender: wrote ${route.out}`)
}
