// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import * as operation from "../../redux/operation";
// import selectors from "../../redux/selectors";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");

  // const dispatch = useDispatch();

  // const filterListName = useSelector((state) =>
  //   selectors.phoneBookContacts(state)
  // );

  // const nameContact = filterListName.some((contact) => contact.name === name);

  // const filterListNumber = useSelector((state) =>
  //   selectors.phoneBookContacts(state)
  // );
  // const numberContact = filterListNumber.some(
  //   (contact) => contact.number === number
  // );

  // const handleChangeInput = (e) => {
  //   const { value } = e.currentTarget;

  //   switch (e.target.name) {
  //     case "name":
  //       setName(value);
  //       break;

  //     case "number":
  //       setNumber(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const onSubmitForm = (e) => {
  //   if (nameContact && numberContact) {
  //     e.preventDefault();
  //     alert("Такой КОНТАКТ уже есть в списке контактов!");

  //     return;
  //   }

  //   e.preventDefault();

  //   dispatch(operation.fetchAddContacts(name, number));

  //   formReset();
  // };

  // const formReset = () => {
  //   setName("");
  //   setNumber("");
  // };

  return (
    <form className={s.ContainerForm} /*onSubmit={onSubmitForm}*/>
      <h2 className={s.Title}>Регистрация:</h2>
      <label>
        Логин:
        <input
          type="text"
          name="login"
          // value={name}
          // onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Логин может состоять только из букв, апострофа, тире и пробелов."
          required
        />
      </label>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          // value={name}
          // onChange={handleChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов."
          required
        />
      </label>
      <label>
        Электронная почта:
        <input
          type="email"
          name="email"
          // value={number}
          // onChange={handleChangeInput}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          name="password"
          // value={number}
          // onChange={handleChangeInput}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
      </label>
      <button className={s.Btn} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}