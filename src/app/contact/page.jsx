import PageHeading from '../../components/PageHeading'
import { Icon } from '../../components/Icons'
import { site } from '../../site.config'
import { pageMetadata } from '../../lib/metadata'
export const metadata=pageMetadata('사이트 제보와 문의 - 사이트 맛집','웹사이트 추천, 끊긴 링크와 잘못된 설명 신고, 삭제 요청을 전달하는 사이트 맛집 문의 페이지입니다.','/contact')
export default function Contact(){return <article className="wrap content-page"><PageHeading title="좋은 발견을 나눠주세요." description="사이트 추천, 링크 오류, 설명 수정과 삭제 요청을 받습니다." eyebrow="CONTACT"/>
  <div className="contact-options"><section className="contact-option"><h2>사이트 제보 · 오류 신고</h2><p>사이트 이름과 주소, 추천 이유 또는 문제를 적어주세요. GitHub 계정이 필요하며 게시한 내용은 공개됩니다.</p><a href={`${site.repo}/issues/new`} target="_blank" rel="noopener noreferrer">GitHub에 제보하기 <Icon name="arrow" size={16}/></a></section><section className="contact-option"><h2>기타 문의</h2><p>개인정보가 포함된 문의나 권리 관련 요청은 이메일로 보내주세요. 불필요한 개인정보는 첨부하지 않아도 됩니다.</p><a href={`mailto:${site.email}`}>{site.email}<Icon name="arrow" size={16}/></a></section></div>
  <div className="article-body"><h2>이 내용을 함께 알려주시면 도움이 됩니다</h2><ul><li>열리지 않는 링크: 사이트 이름, 주소와 오류가 발생한 시점</li><li>화면 오류: 기기와 브라우저 이름, 문제가 생긴 동작</li><li>삭제 요청: 대상 사이트와 요청 사유, 권리 관계를 확인할 수 있는 정보</li></ul><p>제보한 사이트는 선정 기준과 접속 상태를 검토한 후 반영 여부를 결정합니다. 문의 내용은 답변과 수정에 필요한 범위에서만 사용합니다.</p></div>
  </article>}
