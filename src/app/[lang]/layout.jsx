import SiteLayout, {layoutMetadata} from '../../components/SiteLayout'
import {foreignLocales} from '../../i18n/routing'
import {notFound} from 'next/navigation'
export {viewport} from '../../components/SiteLayout'
export const dynamicParams=false
export function generateStaticParams(){return foreignLocales.map(lang=>({lang}))}
export async function generateMetadata({params}){const {lang}=await params;if(!foreignLocales.includes(lang))notFound();return layoutMetadata(lang)}
export default async function Layout({children,params}) {const {lang}=await params;if(!foreignLocales.includes(lang))notFound();return <SiteLayout locale={lang}>{children}</SiteLayout>}
