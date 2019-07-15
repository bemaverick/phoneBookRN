import type { _t_contactItem } from "../../flow.types";

export type _t_state = {
  searchText: string
}

export type _t_props = {
  contacts: {
    [key: string]: _t_contactItem,
  }
  contactsIds: string,
  isFetchingContacts: boolean,
  errorFetching: string,
  fetchContacts: () => void,
  setCurrentContact: (itemId: string) => void
}
