import { TYPES } from '../constants'
import { ERRORS } from "../constants/dictionary";
import type { _t_initialState } from "./flow";


const initialState: _t_initialState = {
  contacts: {},
  contactsIds: [],
  isFetchingContacts: false,
  currentContact: null,
  errorFetching: "",
  newContact: null,
  isCreating: false,
  errorCreating: "",
  editedContact: null,
  isUpdating: false,
  errorUpdating: ""
};
export default function dataReducer (state: _t_initialState = initialState, action) {
  switch (action.type) {
    case TYPES.FETCHING_CONTACTS:
      return {
        ...state,
        isFetchingContacts: true
      };
    case TYPES.FETCHING_CONTACTS_SUCCESS: {
      const contactsObject = action.payload || {};
      return {
        ...state,
        isFetchingContacts: false,
        errorFetching: "",
        contacts: action.payload,
        contactsIds: Object.keys(contactsObject)
          .sort((a, b) => (contactsObject[a].firstName.localeCompare(contactsObject[b].firstName)))
      };
    }

    case TYPES.FETCHING_CONTACTS_FAILURE:
      return {
        ...state,
        isFetchingContacts: false,
        errorFetching: ERRORS.COMMON
      };
    case TYPES.SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: {
          ...state.contacts[action.payload],
          id: action.payload
        }
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
        isCreating: false
      };
    case TYPES.EDIT_CONTACT:
      console.log( TYPES.EDIT_CONTACT)
      return {
        ...state,
        newContact: {
          ...action.payload.contact
        },
        isUpdating: true
      };
    case TYPES.EDIT_CONTACT_SUCCESS: {
      console.log( TYPES.EDIT_CONTACT_SUCCESS, action.payload)
      const updatedContacts = {
        ...state.contacts,
        [state.newContact.id]: {...state.newContact}
      };
      return {
        ...state,
        contacts: updatedContacts,
        contactsIds: state.contactsIds
          .sort((a, b) => (updatedContacts[a].firstName.localeCompare(updatedContacts[b].firstName))),
        newContact: null,
        isUpdating: false
      };
    }
    case TYPES.EDIT_CONTACT_FAILURE:
      console.log( TYPES.EDIT_CONTACT_FAILURE);
      return {
        ...state,
        newContact: null,
        isUpdating: false
      };
    default:
      return state
  }
}
