import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (information) => {
    try {
      const { data } = await axios.post("/users/signup", information);
      token.set(data.token);
      return data;
    } catch (error) {}
  }
);

export const logIn = createAsyncThunk("auth/login", async (information) => {
  try {
    const { data } = await axios.post("/users/login", information);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  console.log(123);
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

// export async function fetchRegistrationUser() {
//   const { data } = await axios.get("http://localhost:3000/contacts");

//   return data;
// }

// export async function addContacts(name, number) {
//   const { data } = await axios.post("http://localhost:3000/contacts", {
//     id: shortid.generate(),
//     name,
//     number,
//   });

//   return data;
// }

// export async function deleteContacts(id) {
//   const { data } = await axios.delete(`http://localhost:3000/contacts/${id}/`);

//   return data;
// }
