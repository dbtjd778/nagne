import { site } from '../site.config'
import { isProduction } from '../lib/metadata'
export const dynamic='force-static'
export default function robots(){return {rules:{userAgent:'*',allow:'/'},...(isProduction?{sitemap:`${site.url}/sitemap.xml`}:{})}}
