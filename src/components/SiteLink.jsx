'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { needsDocumentNavigation } from '../lib/advertising'

export default function SiteLink({ href, children, ...props }) {
  const pathname = usePathname()
  // An already executed AdSense tag cannot be unloaded by removing its script.
  // Start a fresh document when entering/leaving a page eligible for ads.
  if (needsDocumentNavigation(pathname, href)) return <a href={href} {...props}>{children}</a>
  return <Link href={href} {...props}>{children}</Link>
}
