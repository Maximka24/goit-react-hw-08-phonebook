import axios from "axios";
import shortid from "shortid";

export async function fetchListContacts() {
  const { data } = await axios.get("http://localhost:3000/contacts");

  return data;
}

export async function addContacts(name, number) {
  const { data } = await axios.post("http://localhost:3000/contacts", {
    id: shortid.generate(),
    name,
    number,
  });

  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`http://localhost:3000/contacts/${id}/`);

  return data;
}
