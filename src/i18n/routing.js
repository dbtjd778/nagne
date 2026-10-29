export const locales = ['ko', 'en', 'ja', 'zh']
export const foreignLocales = locales.filter(locale => locale !== 'ko')
export const languageNames = { ko: '한국어', en: 'English', ja: '日本語', zh: '简体中文' }
export const languageTags = { ko: 'ko', en: 'en', ja: 'ja', zh: 'zh-Hans' }
export const socialLocales = { ko: 'ko_KR', en: 'en_US', ja: 'ja_JP', zh: 'zh_CN' }
export function stripLocale(path = '/') {
  return path.replace(/^\/(en|ja|zh)(?=\/|[?#]|$)/, '') || '/'
}
export function localizedPath(path = '/', locale = 'ko') {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  const clean = stripLocale(path)
  return locale === 'ko' ? clean : `/${locale}${clean.startsWith('/') ? clean : `/${clean}`}`
}
export function translator(messages = {}) {
  return (source, values = {}) => (messages[source] || source).replace(/\{(\d+)\}/g, (token, key) => values[key] ?? token)
}
