import { all, fork } from 'redux-saga/effects';

import create from './create';
import update from './update';
import contacts from './contacts';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(contacts), fork(create), fork(update)]);
}
