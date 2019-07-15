import regulars from "../config/regexp.config";
import { URL } from "../config/api";
import type { _t_contactItem } from "../flow.types";
type _t_contacts = {
  [key: string]: _t_contactItem
};

// export function makeRequest(url: string): Promise<void> {
//   return fetch(url).then(response => response.json())
// }

export const getUserInitials = (fio: string): string => {
  if (fio.length === 1) { return fio.toUpperCase(); }
  let initials = fio.replace(regulars.fioInitials, str => (str[0]))
    .replace(regulars.spaces, "").substr(0, 2);
  if (initials.length === 1) {
    initials = fio.replace(regulars.spaces, "").substr(0, 2);
  }
  return initials.toUpperCase();
};

export const filterContactsByFio = (contacts: _t_contacts, contactsIds: Array<string>, searchText: string)
  : Array<_t_contactItem> => {
  if (!(contactsIds && contactsIds.length)) {
    return [];
  }
  // TODO handle exceptions
  const filteredData = contactsIds.filter(
    (itemId: string) => {
      const searched = searchText && searchText.toLowerCase() || "";
      const nonSpacedSearchText = searched.replace(/\s/g, '');
      const contactFirstName = contacts[itemId].firstName.toLowerCase();
      const contactLastName = contacts[itemId].lastName.toLowerCase();

      return (contactFirstName.includes(searched) || contactLastName.includes(searched)
        || `${contactFirstName}${contactLastName}`.includes(nonSpacedSearchText));
    });
  return filteredData;
};



export function getFirebaseContacts() {
  return new Promise((resolve, reject) => {
    fetch(URL.CONTACTS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        reject();
      });
  });
}

export function createFirebaseContact(contact: _t_contactItem) {
  return new Promise((resolve, reject) => {
    fetch(URL.CONTACTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject();
      });
  });
}

export function updateFirebaseContact(contact: _t_contactItem) {
  return new Promise((resolve, reject) => {
    fetch(`${URL.CONTACT_EDIT}${contact.id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject();
      });
  });
}
