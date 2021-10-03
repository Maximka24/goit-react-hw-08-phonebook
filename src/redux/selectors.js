const getLoggedIn = (state) => state.authUser.isLoggedIn;
const getNameUser = (state) => state.authUser.user.name;

// const phoneBook = (state) => state.phoneBook;
const phoneBookFilters = (state) => state.contactsUser.filters;
const phoneBookContacts = (state) => state.contactsUser.contacts;

export default {
  getLoggedIn,
  getNameUser,

  // phoneBook,
  phoneBookFilters,
  phoneBookContacts,
};
