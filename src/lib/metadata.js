import { site } from '../site.config.js'

// Local builds and branch previews are deliberately excluded from search.
export const isProduction = process.env.CONTEXT ? process.env.CONTEXT === 'production' : process.env.SITE_ENV === 'production'
export const homeTitle = site.title
export const canonical = (path = '/') => `${site.url}${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`

export function pageMetadata(title, description, path = '/') {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonical(path) },
    openGraph: {
      title, description, url: canonical(path), siteName: site.name,
      locale: 'ko_KR', type: 'website',
      images: [{ url: `${site.url}/og.png`, width: 1200, height: 630, alt: homeTitle }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${site.url}/og.png`] },
    robots: { index: isProduction, follow: isProduction },
  }
}

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />
}
