import SiteLayout, {layoutMetadata} from '../../components/SiteLayout'
export {viewport} from '../../components/SiteLayout'
export const generateMetadata=()=>layoutMetadata('ko')
export default function Layout({children}) {return <SiteLayout locale="ko">{children}</SiteLayout>}
