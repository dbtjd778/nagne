// Only pages with an editorial guide are eligible. Search, saved lists, policy
// pages and the rest of the directory remain usable without advertising.
export const advertisingContentPaths = [
  '/c/gl-games/', '/c/gl-science/', '/c/gl-ai/', '/c/gl-utility/',
  '/guide/boredom-websites/', '/guide/virtual-travel/', '/guide/design-toolkit/',
  '/guide/learning-online/', '/guide/korean-useful-websites/', '/guide/productive-browser/',
]

export function isAdvertisingContent(pathname = '/') {
  const path = pathname.split(/[?#]/)[0].replace(/^\/(en|ja|zh)(?=\/|$)/, '') || '/'
  return advertisingContentPaths.includes(`${path.replace(/\/+$/, '')}/`)
}

export function needsDocumentNavigation(from, to) {
  if (typeof to !== 'string' || !to.startsWith('/') || to.startsWith('//')) return false
  return isAdvertisingContent(from) !== isAdvertisingContent(to)
}

export function canLoadAdvertising({ enabled, origin, pathname, productionOrigin, knownPaths }) {
  const path = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`
  return enabled && origin === productionOrigin && knownPaths.includes(path) && isAdvertisingContent(path)
}
