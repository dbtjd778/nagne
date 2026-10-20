export function canLoadAdvertising({ enabled, origin, pathname, productionOrigin, knownPaths }) {
  const path = pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`
  return enabled && origin === productionOrigin && knownPaths.includes(path)
}
