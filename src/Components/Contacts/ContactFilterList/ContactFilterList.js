import React from "react";

import { useDispatch, useSelector } from "react-redux";
import * as operation from "../../../redux/operation";
import selectors from "../../../redux/selectors";

import s from "./ContactFilterList.module.css";

export default function ContactFilterList() {
  const dispatch = useDispatch();

  const mainListContact = useSelector((state) => {
    const { contacts, filters } = selectors.phoneBook(state);
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
              dispatch(operation.fetchDeleteContacts(id));
            }}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
}
