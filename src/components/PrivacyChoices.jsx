'use client';

import { useLocale } from "./LocaleProvider";
import { useEffect, useState } from "react";
export default function PrivacyChoices() {
  const {
    t,
    path,
    locale
  } = useLocale();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let active = true;
    let listenerId;
    window.googlefc = window.googlefc || {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
    window.googlefc.callbackQueue.push({
      CONSENT_API_READY: () => {
        if (!active || typeof window.__tcfapi !== "function") return;
        window.__tcfapi("addEventListener", 0, (data, success) => {
          listenerId = data?.listenerId;
          if (active) setReady(Boolean(success && data?.gdprApplies && typeof window.googlefc.showRevocationMessage === "function"));
        });
      }
    });
    return () => {
      active = false;
      if (listenerId && typeof window.__tcfapi === "function") window.__tcfapi("removeEventListener", 0, () => {}, listenerId);
    };
  }, []);
  if (!ready) return null;
  return <button className="privacy-choices" onClick={() => window.googlefc.showRevocationMessage()}>{t("개인정보·쿠키 설정")}</button>;
}
