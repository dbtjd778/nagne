// Retain placement hooks for future configured ad units without showing fake
// banners or empty reserved space. Auto ads manage their own labels and layout.
export default function AdSlot({ placement = 'directory' }) {
  return <span hidden data-ad-placement={placement} />
}
