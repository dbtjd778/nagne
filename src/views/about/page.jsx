import { languageTags } from "../../i18n/routing";
import { getLocaleData } from "../../i18n/server";
import { localizedPath } from "../../i18n/routing";
import Link from "next/link";
import PageHeading from "../../components/PageHeading";
import { totalSiteCount, totalCategoryCount, regions } from "../../data/sites";
import { pageMetadata } from "../../lib/metadata";
export const metadata = pageMetadata("사이트 맛집 소개와 사이트 선정 기준 - 사이트 맛집", "한국과 전세계 웹사이트를 발견하는 디렉터리 사이트 맛집. 사이트 선정 기준, 링크 점검 방식, 운영 정보를 안내합니다.", "/about");
export default async function About({
  locale = "ko"
}) {
  const {
    t
  } = await getLocaleData(locale);
  const path = href => localizedPath(href, locale);
  return <article className="wrap content-page">
  <PageHeading title={t("인터넷은 아직 넓으니까.")} description={t("사이트 맛집은 한국과 전세계 {0}개 웹사이트를 {1}개 카테고리로 정리한 웹 탐방 디렉터리입니다.", {
      "0": totalSiteCount,
      "1": totalCategoryCount
    })} eyebrow="ABOUT VSITES" />
  <div className="article-body"><h2>{t("매일 열던 곳 말고, 다른 곳")}</h2><p>{t("브라우저를 켰는데 무엇을 할지 떠오르지 않는 순간이 있습니다. 사이트 맛집은 그때 출발할 수 있는 목록입니다. 미니게임을 하거나 먼 도시의 소리를 듣고, 만들고 싶은 작업에 필요한 도구를 찾을 수 있습니다. 지구본의 나라별 숫자를 누르거나 전체 목록에서 이름과 관심사로 검색해 보세요.")}</p>
  <h2>{t("지도에 표시하는 국가")}</h2><p>{t("국가는 운영사·기관의 본사나 제작자가 공개한 활동 소재지를 기준으로 정리합니다. 사이트의 언어, 도메인 끝자리, 이용자의 위치만으로 국가를 판단하지 않습니다. 여러 나라에서 운영되거나 공식 자료로 한 나라를 확정하기 어려운 곳은 ‘국가 미확인’에 모았습니다. 나라별 목록의 ‘국가 근거’ 링크에서 확인 자료를 볼 수 있습니다.")}</p><p>{t("지구본 숫자는 국가가 확인된 등록 사이트 수이며, 접속자 수나 서비스 순위를 뜻하지 않습니다. 지도 경계는 Natural Earth의 공개 자료를 탐방용으로 표현한 것입니다. 화면을 드래그하거나 방향키로 회전하고, 나라 검색으로 작은 국가도 찾을 수 있습니다.")}</p>
  <h2>{t("목록에 담는 기준")}</h2><p>{t("용도를 설명할 수 있는 공개 서비스와 공식 출처를 중심으로 고릅니다. 불법 복제, 도박, 성인 콘텐츠, 사칭을 목적으로 하는 서비스는 제외합니다. 성인 콘텐츠가 주목적이 아닌 공개 플랫폼에도 이용자가 올린 다양한 내용이 있을 수 있으므로 개별 콘텐츠까지 검수하거나 보증하지는 않습니다.")}</p><p>{t("설명에는 무엇을 할 수 있는지와 어떤 상황에 도움이 되는지를 적습니다. 무료 범위나 회원가입 조건은 바뀔 수 있어 일괄적으로 무료라고 표시하지 않습니다. 자료를 내려받거나 상업적으로 쓸 때는 각 서비스의 최신 이용 조건과 라이선스를 확인해 주세요.")}</p>
  <h2>{t("주소를 확인하는 방법")}</h2><p>{t("목록을 갱신할 때 자동 접속 검사로 HTTP 응답, 주소 이동, DNS 오류를 확인합니다. 404·410이나 서비스 종료가 확인된 주소는 제외하거나 변경합니다. 자동 요청을 제한하는 사이트와 실제로 사라진 사이트는 구분합니다. 이 검사는 로그인·결제·파일 변환 등 모든 기능의 정상 동작을 보증하지는 않습니다.")}</p><p>{t("접속 상태는 지역과 시점에 따라 달라질 수 있습니다. 잘못된 주소나 설명을 발견하면")}<Link href={path("/contact/")}>{t("문의 페이지")}</Link>{t("로 알려주세요.")}</p>
  <h2>{t("취향에 맞게 탐방하기")}</h2>{regions.map(r => <div key={r.id}><h3>{t(r.label)}</h3><p>{t(r.lead)}</p><div className="related-categories">{r.categories.map(c => <Link href={path(`/c/${c.id}/`)} key={c.id}>{t(c.category)}</Link>)}</div></div>)}
  <h2>{t("저장과 운영")}</h2><p>{t("사이트 맛집은 회원가입 없이 사용할 수 있습니다. 책갈피는 현재 기기의 브라우저에만 저장되며 서버에 전송하지 않습니다. 브라우저 데이터를 지우면 저장한 목록도 사라집니다. 광고 영역은 탐방 목록과 구분하며, 광고를 이유로 사이트의 순위를 바꾸지 않습니다.")}</p><p>{t("기능과 정보에 관한 의견은")}<Link href={path("/contact/")}>{t("사이트 제보·문의")}</Link>{t("에서 받고 있습니다. 이름과 로고는 식별을 위해 사용하며 각 권리자에게 권리가 있습니다.")}</p></div>
  </article>;
}
