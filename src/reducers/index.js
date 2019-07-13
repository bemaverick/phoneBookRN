import { TYPES } from '../constants'
const initialState = {
  contacts: {},
  contactsIds: [],
  currentContact: null,
  isFetching: false,
  error: false
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCHING_CONTACTS:
      return {
        ...state,
        isFetching: true
      };
    case TYPES.FETCHING_CONTACTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        contacts: action.payload,
        contactsIds: Object.keys(action.payload || {})
          .sort((a, b) => (action.payload[a].firstName.localeCompare(action.payload[b].firstName)))
      };
    case TYPES.FETCHING_CONTACTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case TYPES.SET_CURRENT_CONTACT:
      return {
        ...state,
        currentContact: state.contacts[action.payload]
      };
    default:
      return state
  }
}
