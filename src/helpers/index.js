import regulars from "../config/regexp.config";

export function makeRequest(url: string): Promise<void> {
  return fetch(url).then(response => response.json())
}

export const getUserInitials = (fio: string) => {
  if (fio.length === 1) { return fio.toUpperCase(); }
  let initials = fio.replace(regulars.fioInitials, str => (str[0]))
    .replace(regulars.spaces, "").substr(0, 2);
  if (initials.length === 1) {
    initials = fio.replace(regulars.spaces, "").substr(0, 2);
  }
  return initials.toUpperCase();
};



export function getFirebaseContacts(url: string) {
  return new Promise((resolve, reject) => {
    fetch("https://armwrestling-chat.firebaseio.com/contacts.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ lastName: "DEpp", firstName: "Johny", number: "+670883765437"  })
    })
      .then(response => response.json())
      .then((res) => {
        console.log("res", res);
        resolve(res);
      })
      .catch((err) => {
        //console.log("res", err);
        reject();
      });
  });
}

export function createFirebaseContact(contact) {
  return new Promise((resolve, reject) => {
    fetch("https://armwrestling-chat.firebaseio.com/contacts.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then((res) => {
        console.log("res", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("Error createFirebaseContact", err);
        reject();
      });
  });
}

export function customAction() {
  alert();
}
