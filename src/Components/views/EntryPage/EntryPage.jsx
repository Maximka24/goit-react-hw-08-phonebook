import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import * as operation from "../../redux/operation";
// import selectors from "../../redux/selectors";
import s from "./EntryPage.module.css";

export default function EntryPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;

    switch (e.target.name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

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

  const formReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form className={s.ContainerForm} /*onSubmit={onSubmitForm}*/>
      <h2 className={s.Title}>Авторизация пользователя:</h2>
      <label>
        Электронная почта:
        <input
          type="email"
          name="email"
          placeholder="Введите E-mail"
          value={email}
          onChange={handleChangeInput}
          required
        />
      </label>
      <label>
        Пароль:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangeInput}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}"
          placeholder="Введите пароль"
          title="5 или более символов, в том числе по меньшей мере, одну цифру, одну прописную, одну строчные буквы"
          required
        />
      </label>
      <button className={s.Btn} type="submit">
        Войти
      </button>
    </form>
  );
}
