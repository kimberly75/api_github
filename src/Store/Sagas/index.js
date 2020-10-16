import { all } from 'redux-saga/effects'
import SagaResult from './SagaResult'

export default function* sagas() {
  yield all([
    SagaResult()
  ])
}
