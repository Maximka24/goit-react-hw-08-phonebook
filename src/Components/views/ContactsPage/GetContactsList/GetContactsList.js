import { useDispatch, useSelector } from "react-redux";

import selectors from "../../../../redux/selectors";
import actions from "../../../../redux/contacts/contacts-actions";

import ContactFilterList from "./FilterListContacts/ContactFilterList";
import s from "./GetContactsList.module.css";

export default function GetFilterContacts() {
  const filterContacts = useSelector((state) =>
    selectors.phoneBookFilters(state)
  );
  const dispatch = useDispatch();

  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Список контактов:</h2>
      <label>
        Введите имя контакта:
        <input
          type="text"
          name="name"
          value={filterContacts}
          onChange={(e) =>
            dispatch(actions.filterContacts(e.currentTarget.value))
          }
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
        />
      </label>
      <ContactFilterList />
    </div>
  );
}
