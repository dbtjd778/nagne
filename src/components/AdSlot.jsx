'use client';

// Slots reserve space now. No ad script or publisher request is loaded by this component.
import { useLocale } from "./LocaleProvider";
export default function AdSlot({
  placement = "directory",
  compact = false
}) {
  const {
    t,
    path,
    locale
  } = useLocale();
  return <aside className={`ad-slot ${compact ? "ad-compact" : ""}`} aria-label={t("광고 영역")} data-ad-placement={placement}>
    <span>{t("광고")}</span><div className="ad-placeholder" aria-hidden="true"><i /><i /><i /></div>
  </aside>;
}
