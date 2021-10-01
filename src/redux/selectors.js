const getLoggedIn = (state) => state.authUser.isLoggedIn;
const getNameUser = (state) => state.authUser.user.name;

const phoneBook = (state) => state.phoneBook;
const phoneBookFilters = (state) => state.phoneBook.filters;
const phoneBookContacts = (state) => state.phoneBook.contacts;

export default {
  getLoggedIn,
  getNameUser,

  phoneBook,
  phoneBookFilters,
  phoneBookContacts,
};
