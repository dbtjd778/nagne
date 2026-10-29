'use client';

import { useLocale } from "./LocaleProvider";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { Icon } from "./Icons";
export default function Header() {
  const {
    t,
    path,
    locale
  } = useLocale();
  return <header className="header">
    <div className="wrap header-inner">
      <Link href={path("/")} className="wordmark" aria-label={t("사이트 맛집 홈")}><Icon name="compass" size={29} /><span>{t("사이트 맛집")}<span className="brand-dot">.</span></span></Link>
      <nav aria-label={t("주 메뉴")}>
        <Link href={path("/#explore")}>{t("지구본 탐방")}</Link>
        <Link href={path("/#directory")}>{t("전체 사이트")}</Link>
        <Link href={path("/c/gl-games/")}>{t("웹게임")}</Link>
        <Link href={path("/guides/")}>{t("탐방 가이드")}</Link>
        <Link href={path("/about/")}>{t("소개")}</Link>
      </nav>
      <LanguageSwitcher />
      <Link className="header-contact" href={path("/contact/")}>{t("사이트 제보")}<Icon name="arrow" size={14} /></Link>
    </div>
  </header>;
}
