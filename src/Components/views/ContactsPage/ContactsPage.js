import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import s from "./ContactsPage.module.css";
import * as operation from "../../../redux/contacts/contacts-operation";
import selectors from "../../../redux/selectors";

import AddContacts from "./AddContacts/AddContacts";
import GetContactsList from "./GetContactsList/GetContactsList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const mainListContact = useSelector((state) =>
    selectors.phoneBookContacts(state)
  );

  useEffect(
    (e) => {
      dispatch(operation.fetchContacts());
    },
    [dispatch]
  );

  return (
    <div className={s.Container}>
      <AddContacts />
      {mainListContact.length === 0 ? (
        <div className={s.NotListContacts}>
          <h2 className={s.Title}>Cписок контактов:</h2>
          <p>Список пуст... Добавьте контактов!</p>
        </div>
      ) : (
        <GetContactsList />
      )}
    </div>
  );
};

export default ContactsPage;
