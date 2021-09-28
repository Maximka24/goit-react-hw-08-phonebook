import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authUser from "./auth/auth-slice";
import reducersPhoneBook from "./redusers";

const mainReducer = combineReducers({
  phoneBook: reducersPhoneBook,
  auth: authUser,
});

const store = configureStore({
  reducer: mainReducer,

  devTools: process.env.NODE_ENV === "development",
});

export default store;
