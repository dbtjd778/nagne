import Page from '../../../views/privacy/page'
import {metadata as koreanMetadata} from '../../../views/privacy/page'
import {getLocaleData} from '../../../i18n/server'
import {pageMetadata} from '../../../lib/metadata'
export async function generateMetadata({params}){const {lang}=await params;const {t}=await getLocaleData(lang);return pageMetadata(t(koreanMetadata.title.absolute),t(koreanMetadata.description),'/privacy/',lang)}
export default async function LocalizedPage({params}){return <Page locale={(await params).lang}/>}
