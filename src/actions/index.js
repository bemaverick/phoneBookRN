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

export function setCurrentContact(itemId: string) {
  return {
    type: TYPES.SET_CURRENT_CONTACT,
    payload: itemId
  };
}

export function sendContact(contact, callBack) {
  return {
    type: TYPES.SEND_CONTACT,
    payload: {
      contact,
      callBack
    }
  }
}

export function sendContactSuccess(payload) {
  return {
    type: TYPES.SEND_CONTACT_SUCCESS,
    payload: payload
  }
}

export function sendContactError(payload) {
  return {
    type: TYPES.SEND_CONTACT_FAILURE,
    payload: payload
  }
}

