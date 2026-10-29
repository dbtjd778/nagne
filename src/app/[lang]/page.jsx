import Page from '../../views/page'
export default async function LocalizedPage({params}){return <Page locale={(await params).lang}/>}
