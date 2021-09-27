import actions from "./actions";
import * as fetchApi from "../fetchApi/fetchApi";

export const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  try {
    const contacts = await fetchApi.fetchListContacts();
    dispatch(actions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

export const fetchAddContacts =
  (nameContact, phoneContact) => async (dispatch) => {
    const addContact = await fetchApi.addContacts(nameContact, phoneContact);
    dispatch(actions.addContacts(addContact));
  };

export const fetchDeleteContacts = (id) => async (dispatch) => {
  await fetchApi.deleteContacts(id);
  dispatch(actions.deleteContacts(id));
};
