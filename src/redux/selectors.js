const phoneBook = (state) => state.phoneBook;

const phoneBookFilters = (state) => state.phoneBook.filters;

const phoneBookContacts = (state) => state.phoneBook.contacts;

export default {
  phoneBook,
  phoneBookFilters,
  phoneBookContacts,
};
