import { TYPES } from '../constants'
import type { _t_contactItem } from "../flow.types";


type _t_initialState = {
  contacts: {} | {
    [key: string]: _t_contactItem
  },
  contactsIds: Array<?string>,
  isFetchingContacts: boolean,
  currentContact: ?_t_contactItem,
  errorFetching: string,
  isCreating: boolean,
  newContact: null | _t_contactItem,
}

const initialState: _t_initialState = {
  contacts: {},
  contactsIds: [],
  isFetchingContacts: false,
  currentContact: null,
  errorFetching: "",
  isCreating: false,
  newContact: null,
};

export default function dataReducer (state: _t_initialState = initialState, action) {
  switch (action.type) {
    case TYPES.FETCHING_CONTACTS:
      console.log( TYPES.FETCHING_CONTACTS)

      return {
        ...state,
        isFetchingContacts: true
      };
    case TYPES.FETCHING_CONTACTS_SUCCESS:
      console.log( TYPES.FETCHING_CONTACTS_SUCCESS)

      return {
        ...state,
        isFetchingContacts: false,
        contacts: action.payload,
        contactsIds: Object.keys(action.payload || {})
          .sort((a, b) => (action.payload[a].firstName.localeCompare(action.payload[b].firstName)))
      };
    case TYPES.FETCHING_CONTACTS_FAILURE:
      console.log( TYPES.FETCHING_CONTACTS_FAILURE)

      return {
        ...state,
        isFetchingContacts: false,
        error: true
      };
    case TYPES.SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: state.contacts[action.payload]
      };
    case TYPES.SEND_CONTACT:
      console.log( TYPES.SEND_CONTACT, action)
      return {
        ...state,
        isCreating: true,
        newContact: {
          ...action.payload.contact
        }
      };
    case TYPES.SEND_CONTACT_SUCCESS:
      console.log( TYPES.SEND_CONTACT_SUCCESS)

      const updatedContacts = { [action.payload.name]: state.newContact, ...state.contacts };

      return {
        ...state,
        contacts: { [action.payload.name]: state.newContact, ...state.contacts },
        contactsIds: [action.payload.name, ...state.contactsIds]
          .sort((a, b) => (updatedContacts[a].firstName.localeCompare(updatedContacts[b].firstName)))
        ,
        newContact: null,
        isCreating: false
      };
    case TYPES.SEND_CONTACT_FAILURE:
      console.log( TYPES.SEND_CONTACT_FAILURE)
      return {
        ...state,
      };
    default:
      return state
  }
}
