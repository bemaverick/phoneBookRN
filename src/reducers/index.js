import { TYPES } from '../constants'
const initialState = {
  contacts: [],
  isFetching: false,
  error: false
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCHING_CONTACTS:
      console.log(action.type)
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case TYPES.FETCHING_CONTACTS_SUCCESS:
      console.log(action.type, action)


      return {
        ...state,
        isFetching: false,
        contacts: action.payload
      };
    case TYPES.FETCHING_CONTACTS_FAILURE:
      console.log(action.type, action.payload)

      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state
  }
}
