import { TYPES } from './../constants';
import { updateFirebaseContact } from './../helpers'
import { editContactSuccess, editContactError } from './../actions'
import { call, put, takeEvery } from 'redux-saga/effects';

function* updateContact(action) {
  console.log(action)
  try {
    const data = yield call(updateFirebaseContact, action.payload.contact);
    yield put(editContactSuccess(data));
    yield call(action.payload.callBack)
  } catch (error) {
    yield put(editContactError(error));
  }
}

function* configSaga() {
  yield takeEvery(TYPES.EDIT_CONTACT, updateContact);
}

export default configSaga;
