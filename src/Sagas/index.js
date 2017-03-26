import { fork } from 'redux-saga/effects'
import searchSaga from './Search'

export default function* () {
  yield [
    fork(searchSaga)
  ]
}
