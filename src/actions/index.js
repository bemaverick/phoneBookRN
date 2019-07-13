import { TYPES } from '../constants';

export function fetchContacts() {
  return {
    type: TYPES.FETCHING_CONTACTS
  };
}
export function fetchContactsSuccess(payload) {
  return {
    type: TYPES.FETCHING_CONTACTS_SUCCESS,
    payload
  };
}
export function fetchContactsError(payload) {
  return {
    type: TYPES.FETCHING_CONTACTS_FAILURE,
    payload
  };
}
