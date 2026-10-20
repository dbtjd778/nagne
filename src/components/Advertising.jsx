'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { canLoadAdvertising } from '../lib/advertising'

export default function Advertising({ enabled, productionOrigin, publisherId, knownPaths }) {
  const pathname = usePathname()
  useEffect(() => {
    if (!canLoadAdvertising({ enabled, origin: window.location.origin, pathname, productionOrigin, knownPaths })) return
    if (document.getElementById('google-adsense-script')) return
    // The published Google CMP is delivered by this tag; do not manufacture consent.
    const script = document.createElement('script')
    script.id = 'google-adsense-script'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`
    document.head.appendChild(script)
    // Keep one tag across client navigations. Removing/reloading it can duplicate requests.
  }, [enabled, productionOrigin, publisherId, knownPaths, pathname])
  return <span id="advertising-runtime" hidden data-enabled={enabled ? 'true' : 'false'} />
}
