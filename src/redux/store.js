import { configureStore, combineReducers } from "@reduxjs/toolkit";

import reducersPhoneBook from "./redusers";

const mainReducer = combineReducers({
  phoneBook: reducersPhoneBook,
});

const store = configureStore({
  reducer: mainReducer,

  devTools: process.env.NODE_ENV === "development",
});

export default store;
