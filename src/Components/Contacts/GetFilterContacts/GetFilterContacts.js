import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/actions";
import selectors from "../../../redux/selectors";

import style from "./GetFilterContacts.module.css";

export default function GetFilterContacts() {
  const filterContacts = useSelector((state) =>
    selectors.phoneBookFilters(state)
  );
  const dispatch = useDispatch();

  return (
    <>
      <label className={style.Container}>
        Find contacts by name:
        <input
          type="text"
          name="name"
          value={filterContacts}
          onChange={(e) =>
            dispatch(actions.filterContacts(e.currentTarget.value))
          }
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
}
