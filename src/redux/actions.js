import { createAction } from "@reduxjs/toolkit";

const addContacts = createAction("contact/fetchAddContacts");
const deleteContacts = createAction("contact/deleteContacts");

const filterContacts = createAction("contact/filter");

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

export default {
  addContacts,
  deleteContacts,
  filterContacts,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
