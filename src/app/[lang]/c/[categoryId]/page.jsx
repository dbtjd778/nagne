import Page, {generateMetadata as metadataForLocale} from '../../../../views/c/[categoryId]/page'
export {generateStaticParams} from '../../../../views/c/[categoryId]/page'
export const dynamicParams=false
export async function generateMetadata({params}){return metadataForLocale({params,locale:(await params).lang})}
export default async function LocalizedPage({params}){return <Page params={params} locale={(await params).lang}/>}
