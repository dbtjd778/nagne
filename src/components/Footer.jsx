'use client';

import { useLocale } from "./LocaleProvider";
import Link from "next/link";
import { Icon } from "./Icons";
import PrivacyChoices from "./PrivacyChoices";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Footer() {
  const {
    t,
    path,
    locale,
    allCategories,
    totalSiteCount
  } = useLocale();
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-top">
        <div><Link href={path("/")} className="wordmark"><Icon name="compass" size={28} />{t("사이트 맛집.")}</Link><span className="foot-count">{t("{0}개의 웹사이트를 탐방하세요",{0:totalSiteCount.toLocaleString(locale)})}</span></div>
        <div className="footer-links"><Link href={path("/about/")}>{t("사이트 맛집 소개")}</Link><Link href={path("/guides/")}>{t("탐방 가이드")}</Link><Link href={path("/contact/")}>{t("문의 · 사이트 제보")}</Link><Link href={path("/privacy/")}>{t("개인정보처리방침")}</Link><Link href={path("/terms/")}>{t("이용약관")}</Link><PrivacyChoices /></div>
      </div>
      <details className="footer-categories"><summary>{t("카테고리 전체 보기")}</summary><nav aria-label={t("전체 카테고리")}>{allCategories.map(c => <Link key={c.id} href={path(`/c/${c.id}/`)}>{c.regionId === "kr" ? t("한국") : t("세계")} · {c.category}</Link>)}</nav></details>
      <LanguageSwitcher links />
      <div className="footer-bottom"><span>{t("© 2026 사이트 맛집")}</span><span>{t("각 사이트의 이름과 로고는 해당 권리자에게 귀속됩니다.")}</span><a href="#top">{t("맨 위로 ↑")}</a></div>
    </div>
  </footer>;
}
