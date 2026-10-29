import { locales, localizedPath, languageTags, socialLocales } from '../i18n/routing.js'
import { site } from '../site.config.js'

// Local builds and branch previews are deliberately excluded from search.
export const isProduction = process.env.CONTEXT ? process.env.CONTEXT === 'production' : process.env.SITE_ENV === 'production'
export const homeTitle = site.title
export const canonical = (path = '/', locale = 'ko') => `${site.url}${localizedPath(path === '/' ? '/' : `${path.replace(/\/$/, '')}/`, locale)}`
export const languageAlternates = path => Object.fromEntries([...locales.map(locale=>[languageTags[locale],canonical(path,locale)]),['x-default',canonical(path)]])

export function pageMetadata(title, description, path = '/', locale = 'ko') {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonical(path,locale), languages:languageAlternates(path) },
    openGraph: {
      title, description, url: canonical(path,locale), siteName: locale === 'ko' ? site.name : 'Vsites',
      locale: socialLocales[locale], alternateLocale:locales.filter(code=>code!==locale).map(code=>socialLocales[code]), type: 'website',
      images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${site.url}/og.png`] },
    robots: { index: isProduction, follow: isProduction },
  }
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
