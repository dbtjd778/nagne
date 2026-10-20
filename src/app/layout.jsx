import './globals.css'
import Header from '../components/Header'
import { site } from '../site.config'
import Footer from '../components/Footer'
import ScrollEffects from '../components/ScrollEffects'
import { BookmarkProvider } from '../components/Bookmarks'
import { pageMetadata, homeTitle } from '../lib/metadata'

export const metadata = {
  ...pageMetadata(homeTitle,site.description),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  verification: { other: { 'naver-site-verification': '0f0bebae78c1b2563ddfc0368798cdba86d27bee' } },
  icons: { icon: '/favicon.svg', apple: '/apple-icon.png' },
}
export const viewport = { width:'device-width',initialScale:1,themeColor:'#173f35' }

export default function RootLayout({ children }) {
  return <html lang="ko"><body id="top"><a className="skip-link" href="#main-content">본문 바로가기</a><ScrollEffects/><BookmarkProvider><Header/><main id="main-content">{children}</main><Footer/></BookmarkProvider></body></html>
}
