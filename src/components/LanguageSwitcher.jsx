'use client';

import { usePathname } from "next/navigation";
import { useLocale } from "./LocaleProvider";
import { locales, languageNames, languageTags, localizedPath } from "../i18n/routing";
export default function LanguageSwitcher({
  links = false
}) {
  const {
    locale
  } = useLocale();
  const pathname = usePathname();
  if (links) return <nav className="language-links" aria-label="Languages">{locales.map(lang => <a key={lang} href={localizedPath(pathname, lang)} hrefLang={languageTags[lang]} lang={languageTags[lang]} aria-current={locale === lang ? "true" : undefined}>{languageNames[lang]}</a>)}</nav>;
  return <label className="language-switcher"><span aria-hidden="true">◎</span><span className="sr-only">Language / 언어</span><select aria-label="Language / 언어" value={locale} onChange={event => window.location.assign(localizedPath(pathname, event.target.value) + window.location.search + window.location.hash)}>{locales.map(lang => <option key={lang} value={lang} lang={languageTags[lang]}>{languageNames[lang]}</option>)}</select></label>;
}
