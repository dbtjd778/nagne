import './globals.css'
import './earth.css'
import Header from '../components/Header'
import { site } from '../site.config'
import Footer from '../components/Footer'
import ScrollEffects from '../components/ScrollEffects'
import { BookmarkProvider } from '../components/Bookmarks'
import { pageMetadata, homeTitle, isProduction } from '../lib/metadata'
import Advertising from '../components/Advertising'
import { allCategories } from '../data/sites'
import { guides } from '../data/guides'

const knownPaths = ['/', '/guides/', '/about/', '/contact/', '/privacy/', '/terms/',
  ...allCategories.map(c => `/c/${c.id}/`), ...guides.map(g => `/guide/${g.slug}/`)]

export const metadata = {
  ...pageMetadata(homeTitle,site.description),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  verification: { other: { 'naver-site-verification': '0f0bebae78c1b2563ddfc0368798cdba86d27bee' } },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}
export const viewport = { width:'device-width',initialScale:1,themeColor:'#173f35' }

export default function RootLayout({ children }) {
  return <html lang="ko" data-scroll-behavior="smooth"><body id="top"><a className="skip-link" href="#main-content">본문 바로가기</a><ScrollEffects/><BookmarkProvider><Header/><main id="main-content">{children}</main><Footer/></BookmarkProvider><Advertising enabled={isProduction && site.adsEnabled} productionOrigin={site.url} publisherId={site.adsensePublisherId} knownPaths={knownPaths}/></body></html>
}
