'use client';

import { useLocale } from "./LocaleProvider";
import Link from "next/link";
export default function PageHeading({
  title,
  description,
  eyebrow,
  updated
}) {
  const {
    t,
    path,
    locale
  } = useLocale();
  return <header className="page-heading"><nav className="breadcrumb" aria-label={t("현재 위치")}><Link href={path("/")}>{t("← 전체 탐방")}</Link></nav>{eyebrow?.includes("·") && <span className="eyebrow">{eyebrow}</span>}<h1>{title}</h1>{description && <p>{description}</p>}{updated && <small>{t("업데이트")}{updated}</small>}</header>;
}
