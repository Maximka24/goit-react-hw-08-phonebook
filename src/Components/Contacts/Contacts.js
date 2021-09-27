import { useEffect } from "react";

import s from "./Contacts.module.css";
import * as operation from "../../redux/operation";

import { useSelector, useDispatch } from "react-redux";

import GetFilterContacts from "./GetFilterContacts/GetFilterContacts";
import ContactFilterList from "./ContactFilterList/ContactFilterList";
import selectors from "../../redux/selectors";

const Contacts = () => {
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
      <h2 className={s.Title}>Contacts</h2>
      {mainListContact.length === 0 ? (
        <p>Sorry! No contacts...</p>
      ) : (
        <>
          <GetFilterContacts />
          <ContactFilterList />
        </>
      )}
    </div>
  );
};

export default Contacts;
