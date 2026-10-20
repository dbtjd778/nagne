// Slots reserve space now. No ad script or publisher request is loaded by this component.
export default function AdSlot({ placement = 'directory', compact = false }) {
  return <aside className={`ad-slot ${compact ? 'ad-compact' : ''}`} aria-label="광고 영역" data-ad-placement={placement}>
    <span>광고</span><div className="ad-placeholder" aria-hidden="true"><i /><i /><i /></div>
  </aside>
}
