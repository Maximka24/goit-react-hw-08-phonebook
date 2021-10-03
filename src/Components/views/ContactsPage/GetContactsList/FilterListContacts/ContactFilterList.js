import React from "react";

import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../../redux/contacts/contacts-actions";

import s from "./ContactFilterList.module.css";

export default function ContactFilterList(/*{ mainListContact, onDeleteContact }*/) {
  const dispatch = useDispatch();

  const mainListContact = useSelector((state) => {
    const { contacts, filters } = state.contactsUser;
    const normalazFilter = filters.toLowerCase();

    const filterListContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazFilter)
    );

    return filterListContacts;
  });

  return (
    <ul className={s.List}>
      {mainListContact.map(({ id, name, number }) => (
        <li key={id} className={s.ElemList}>
          <p>
            {name}: {number}
          </p>
          <button
            className={s.Btn}
            onClick={() => {
              dispatch(actions.deleteContact(id));
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}
