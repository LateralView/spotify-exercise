export const types = {
  SEARCH_REQUESTED: 'SEARCH_REQUESTED',
  SEARCH_RESOLVED: 'SEARCH_RESOLVED',
  SEARCH_REJECTED: 'SEARCH_REJECTED'
}

export const searchRequested = (q) => ({
  type: types.SEARCH_REQUESTED,
  query: q
})

export const searchResolved = (data) => ({
  type: types.SEARCH_RESOLVED,
  data
})
