import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authUserReducer from "./auth/auth-slice";
import contactsReducers from "./contacts/contacts-reducers";

const mainReducer = combineReducers({
  authUser: authUserReducer,
  contactsUser: contactsReducers,
});

const store = configureStore({
  reducer: mainReducer,

  devTools: process.env.NODE_ENV === "development",
});

export default store;
