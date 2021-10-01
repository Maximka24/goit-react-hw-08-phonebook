import { createSlice } from "@reduxjs/toolkit";
import * as operation from "./operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authUser = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [operation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
});

export default authUser.reducer;
