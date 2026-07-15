// Pré-renderização estática pós-build.
// Lê dist/index.html (template do build client), renderiza cada rota via
// dist-ssr/entry-server.js e grava dist/<rota>/index.html com meta tags
// próprias, HTML no #root e JSON-LD de FAQ gerado a partir de src/data/faqs.js.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = resolve(root, 'dist')
const ssrEntry = pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href

const { render, routes, canonicalUrl, faqs } = await import(ssrEntry)
const template = await readFile(resolve(distDir, 'index.html'), 'utf8')

function escapeAttr(text) {
  return text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
}

function applyMeta(html, route, meta) {
  const url = canonicalUrl(route)
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${escapeAttr(meta.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(meta.title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(meta.description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${escapeAttr(meta.title)}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${escapeAttr(meta.description)}$2`)
}

function faqJsonLd() {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  })
}

for (const [route, meta] of Object.entries(routes)) {
  const appHtml = await render(route)
  let html = applyMeta(template, route, meta)
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  if (route === '/') {
    html = html.replace(
      '<!-- JSONLD-FAQ -->',
      `<script type="application/ld+json">${faqJsonLd()}</script>`
    )
  }

  const outDir = route === '/' ? distDir : resolve(distDir, route.slice(1))
  await mkdir(outDir, { recursive: true })
  await writeFile(resolve(outDir, 'index.html'), html)
  console.log(`✓ prerender ${route} → ${outDir.replace(root + '/', '')}/index.html`)
}

// Sitemap com as rotas reais
const lastmod = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(routes)
  .map(
    (route) => `  <url>
    <loc>${canonicalUrl(route)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.3'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
await writeFile(resolve(distDir, 'sitemap.xml'), sitemap)
console.log('✓ sitemap.xml gerado')

await rm(resolve(root, 'dist-ssr'), { recursive: true, force: true })
