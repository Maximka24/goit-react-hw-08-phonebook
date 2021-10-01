import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authUserReducer from "./auth-slice";
// import reducersPhoneBook from "./redusers";

const mainReducer = combineReducers({
  authUser: authUserReducer,
  contacts: [],
});

const store = configureStore({
  reducer: mainReducer,

  devTools: process.env.NODE_ENV === "development",
});

export default store;
