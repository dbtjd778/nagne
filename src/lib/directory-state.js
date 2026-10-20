export const defaultDirectoryState = {
  query: '', region: 'all', category: 'all', savedOnly: false,
  limit: 24, sort: 'recommended', view: 'grid',
}

// Keep navigation and shared links useful without trusting arbitrary URL values.
export function readDirectoryState(search, categories, siteCount) {
  const params = new URLSearchParams(search)
  const region = ['kr', 'global'].includes(params.get('region')) ? params.get('region') : 'all'
  const requestedCategory = categories.find(c => c.id === params.get('category'))
  const category = requestedCategory && (region === 'all' || requestedCategory.regionId === region) ? requestedCategory.id : 'all'
  const limit = Number(params.get('limit'))
  return {
    query: (params.get('q') || '').slice(0, 200),
    region, category,
    savedOnly: params.get('saved') === '1',
    limit: Number.isFinite(limit) ? Math.max(24, Math.min(Math.floor(limit / 24) * 24, Math.ceil(siteCount / 24) * 24)) : 24,
    sort: params.get('sort') === 'name' ? 'name' : 'recommended',
    view: params.get('view') === 'list' ? 'list' : 'grid',
  }
}

export function directorySearch(state) {
  const params = new URLSearchParams()
  if (state.query) params.set('q', state.query)
  if (state.region !== 'all') params.set('region', state.region)
  if (state.category !== 'all') params.set('category', state.category)
  if (state.savedOnly) params.set('saved', '1')
  if (state.sort !== 'recommended') params.set('sort', state.sort)
  if (state.view !== 'grid') params.set('view', state.view)
  if (state.limit > 24) params.set('limit', state.limit)
  return params.size ? `?${params}` : ''
}
