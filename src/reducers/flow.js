import type {_t_contactItem} from "../flow.types";

export type _t_initialState = {
  contacts: {} | {
    [key: string]: _t_contactItem
  },
  contactsIds: Array<?string>,
  isFetchingContacts: boolean,
  currentContact: ?_t_contactItem,
  errorFetching: string,
  isCreating: boolean,
  newContact: null | _t_contactItem,
  editedContact: null | _t_contactItem,
  isUpdating: boolean,
  errorCreating: string,
  errorUpdating: string
}

