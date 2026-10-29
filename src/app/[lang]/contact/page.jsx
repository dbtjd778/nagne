import Page from '../../../views/contact/page'
import {metadata as koreanMetadata} from '../../../views/contact/page'
import {getLocaleData} from '../../../i18n/server'
import {pageMetadata} from '../../../lib/metadata'
export async function generateMetadata({params}){const {lang}=await params;const {t}=await getLocaleData(lang);return pageMetadata(t(koreanMetadata.title.absolute),t(koreanMetadata.description),'/contact/',lang)}
export default async function LocalizedPage({params}){return <Page locale={(await params).lang}/>}
