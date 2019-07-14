import { all, fork } from 'redux-saga/effects';

import create from './create';
import contacts from './contacts';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(contacts), fork(create)]);
}
