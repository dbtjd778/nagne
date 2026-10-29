import { languageTags } from "../../i18n/routing";
import { getLocaleData } from "../../i18n/server";
import { localizedPath } from "../../i18n/routing";
import PageHeading from "../../components/PageHeading";
import GuideCards from "../../components/GuideCards";
import { pageMetadata } from "../../lib/metadata";
export const metadata = pageMetadata("웹사이트 탐구와 웹서핑 가이드 - 사이트 맛집", "심심할 때 뭐하지? 재미있는 사이트, 온라인 여행, 디자인 도구, 공부와 생산성까지. 목적에 맞게 웹사이트를 고르는 탐방 가이드.", "/guides");
export default async function Guides({
  locale = "ko"
}) {
  const {
    t
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  return <section className="wrap content-page guide-index"><PageHeading title={t("탐방 가이드")} description={t("재미있는 발견부터 쓸모 있는 도구까지. 관심사에 맞는 출발점을 골라보세요.")} eyebrow="FIELD NOTES" /><GuideCards all /></section>;
}
