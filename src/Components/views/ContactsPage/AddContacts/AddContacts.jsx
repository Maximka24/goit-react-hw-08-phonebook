import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as contactsOperation from "../../../../redux/contacts/contacts-operation";
import selectors from "../../../../redux/selectors";

import s from "./AddContacts.module.css";

export default function PhoneBook() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();

  const filterListName = useSelector((state) =>
    selectors.phoneBookContacts(state)
  );
  const nameContact = filterListName.some(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  const numberContact = filterListName.some(
    (contact) => contact.number === number
  );

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;

    switch (e.target.name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = (e) => {
    if (nameContact && numberContact) {
      e.preventDefault();
      alert("Такой КОНТАКТ уже есть в списке контактов!");

      return;
    }

    e.preventDefault();

    dispatch(contactsOperation.fetchAddContacts(name, number));
    formReset();
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.ContainerForm} onSubmit={onSubmitForm}>
      <h2 className={s.Title}>Добавить контакт:</h2>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        Номер телефона:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.Btn} type="submit">
        Добавить контакт
      </button>
    </form>
  );
}
