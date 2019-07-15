import { TYPES } from './../constants';
import { createFirebaseContact } from './../helpers'
import { sendContactSuccess, sendContactError } from './../actions'
import { call, put, takeEvery } from 'redux-saga/effects';

function* createContact(action) {
  try {
    const data = yield call(createFirebaseContact, action.payload.contact);
    yield put(sendContactSuccess(data));
    yield call(action.payload.callBack)
  } catch (error) {
    yield put(sendContactError(error));
  }
}

function* configSaga() {
  yield takeEvery(TYPES.SEND_CONTACT, createContact);
}

export default configSaga;
