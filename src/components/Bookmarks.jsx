'use client';

import { useLocale } from "./LocaleProvider";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { readBookmarks } from "../lib/directory";
import { Icon } from "./Icons";
const BOOKMARK_KEY = "nagne:saved:v1";
const BookmarkContext = createContext(null);
export function BookmarkProvider({
  children
}) {
  const {
    t,
    path,
    locale,
    allowedUrls
  } = useLocale();
  const [saved, setSaved] = useState([]);
  const [notice, setNotice] = useState(null);
  const current = useRef([]);
  const announcement = useRef(0);
  useEffect(() => {
    function sync(value) {
      current.current = readBookmarks(value, allowedUrls);
      setSaved(current.current);
    }
    try {
      sync(localStorage.getItem(BOOKMARK_KEY));
    } catch {/* Saves still work in this tab. */}
    function onStorage(event) {
      if (event.key === BOOKMARK_KEY || event.key === null) sync(event.newValue);
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [allowedUrls, t]);
  useEffect(() => {
    if (!notice) return;
    const timeout = setTimeout(() => setNotice(null), 4500);
    return () => clearTimeout(timeout);
  }, [notice]);
  const toggleSave = useCallback(url => {
    if (!allowedUrls.has(url)) return;
    const removing = current.current.includes(url);
    const next = removing ? current.current.filter(item => item !== url) : [...current.current, url];
    current.current = next;
    setSaved(next);
    let message = removing ? t("저장을 취소했습니다.") : t("저장한 사이트에 담았습니다.");
    try {
      localStorage.setItem(BOOKMARK_KEY, JSON.stringify(next));
    } catch {
      message = t("이 탭에서만 저장됩니다. 브라우저 저장 공간을 확인해 주세요.");
    }
    setNotice({
      message,
      id: ++announcement.current
    });
  }, [allowedUrls, t]);
  return <BookmarkContext.Provider value={{
    saved,
    toggleSave
  }}>
    {children}
    <div className={`save-toast ${notice ? "is-visible" : ""}`} role="status" aria-live="polite" aria-atomic="true">
      {notice && <span key={notice.id}><Icon name="check" size={18} />{notice.message}</span>}
    </div>
  </BookmarkContext.Provider>;
}
export function useBookmarks() {
  return useContext(BookmarkContext);
}
