import Page from '../../../views/terms/page'
import {metadata as koreanMetadata} from '../../../views/terms/page'
import {getLocaleData} from '../../../i18n/server'
import {pageMetadata} from '../../../lib/metadata'
export async function generateMetadata({params}){const {lang}=await params;const {t}=await getLocaleData(lang);return pageMetadata(t(koreanMetadata.title.absolute),t(koreanMetadata.description),'/terms/',lang)}
export default async function LocalizedPage({params}){return <Page locale={(await params).lang}/>}
