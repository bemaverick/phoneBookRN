import { TYPES } from './../constants';
import { getFirebaseContacts } from './../helpers'
import { fetchContactsSuccess, fetchContactsError } from './../actions'
import { call, put, takeEvery } from 'redux-saga/effects';

function* fetchConfig(action) {
  try {
    const data = yield call(getFirebaseContacts);
    yield put(fetchContactsSuccess(data));
  } catch (error) {
    yield put(fetchContactsError(error));
  }
}

function* configSaga() {
  yield takeEvery(TYPES.FETCHING_CONTACTS, fetchConfig);
}

export default configSaga;
