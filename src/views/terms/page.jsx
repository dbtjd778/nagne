import { languageTags } from "../../i18n/routing";
import { getLocaleData } from "../../i18n/server";
import { localizedPath } from "../../i18n/routing";
import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import { pageMetadata } from "../../lib/metadata";
export const metadata = pageMetadata("이용약관 - 사이트 맛집", "사이트 맛집 서비스 이용, 외부 링크, 명칭과 로고의 권리, 콘텐츠 변경 및 문의 방법을 안내합니다.", "/terms");
export default async function Terms({
  locale = "ko"
}) {
  const {
    t
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  return <article className="wrap content-page"><PageHeading title={t("이용약관")} eyebrow="TERMS" updated="2026.10.20" /><div className="article-body">
  <h2>{t("1. 서비스")}</h2><p>{t("사이트 맛집은 외부 웹사이트의 주소, 설명과 탐방 가이드를 제공하는 정보 서비스입니다. 링크된 서비스를 대신 운영하거나 해당 운영자를 대리하지 않습니다.")}</p>
  <h2>{t("2. 외부 서비스 이용")}</h2><p>{t("사이트 설명과 접속 상태는 변경될 수 있습니다. 외부 사이트의 계정, 결제, 콘텐츠 이용과 파일 업로드에는 해당 서비스의 약관이 적용됩니다. 사이트 맛집의 설명은 모든 기능이나 콘텐츠에 대한 보증이 아닙니다.")}</p>
  <h2>{t("3. 명칭·로고·콘텐츠")}</h2><p>{t("표시된 외부 사이트의 명칭과 로고는 해당 권리자에게 귀속되며 서비스를 식별하는 목적으로 사용됩니다. 제휴나 공식 추천 관계를 의미하지 않습니다. 직접 작성한 가이드와 설명을 인용할 때는 출처를 표시해 주세요.")}</p>
  <h2>{t("4. 저장 기능")}</h2><p>{t("책갈피는 현재 브라우저에 저장되므로 다른 기기와 동기화되지 않습니다. 브라우저 데이터를 지우거나 저장 공간이 제한되면 목록이 사라지거나 유지되지 않을 수 있습니다.")}</p>
  <h2>{t("5. 광고와 제휴")}</h2><p>{t("광고가 표시되는 경우 광고 영역을 명시합니다. 광고에 노출된 상품이나 서비스의 거래는 해당 제공자와 이루어집니다. 제휴 링크를 사용하게 되면 관련 항목에 구분해 표시합니다.")}</p>
  <h2>{t("6. 변경과 문의")}</h2><p>{t("오류 수정, 서비스 종료, 선정 기준에 따라 목록과 설명이 변경될 수 있습니다. 오류 신고, 권리 및 삭제 요청은")}<Link href={path("/contact/")}>{t("문의 페이지")}</Link>{t("를 이용해 주세요. 개인정보와 브라우저 저장에 관한 내용은")}<Link href={path("/privacy/")}>{t("개인정보처리방침")}</Link>{t("에서 확인할 수 있습니다.")}</p>
    </div></article>;
}
