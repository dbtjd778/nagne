import Page from '../../../views/about/page'
import {metadata as koreanMetadata} from '../../../views/about/page'
import {getLocaleData} from '../../../i18n/server'
import {pageMetadata} from '../../../lib/metadata'
export async function generateMetadata({params}){const {lang}=await params;const {t}=await getLocaleData(lang);return pageMetadata(t(koreanMetadata.title.absolute),t(koreanMetadata.description),'/about/',lang)}
export default async function LocalizedPage({params}){return <Page locale={(await params).lang}/>}
