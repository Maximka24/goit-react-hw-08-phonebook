import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const contacts = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContacts]: (state, { payload }) => [...state, payload],
  [actions.deleteContacts]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filters = createReducer("", {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filters,
});
