import { call, put, takeLatest } from 'redux-saga/effects'
import api from '~/API/searchApi'
import { types } from '~/Actions/Search'

function* searchRequestHandler({ query }) {
  try {
    const res = yield call(api.search, query)
    yield put({ type: types.SEARCH_RESOLVED, data: res })
  }
  catch(e) {
    yield put({ type: types.SEARCH_REJECTED, error: e })
  }
}

export default function* () {
  yield takeLatest(types.SEARCH_REQUESTED, searchRequestHandler)
}
