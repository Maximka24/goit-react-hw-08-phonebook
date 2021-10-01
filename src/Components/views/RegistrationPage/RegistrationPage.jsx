import { useState } from "react";
import { useDispatch } from "react-redux";

import * as operation from "../../../redux/operation";
import s from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const { value } = e.currentTarget;

    switch (e.target.name) {
      case "name":
        setName(value);
        break;

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

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(operation.register({ name, email, password }));

    formReset();
  };

  const formReset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className={s.ContainerForm} onSubmit={onSubmitForm}>
      <h2 className={s.Title}>Регистрация:</h2>
      <label>
        Имя:
        <input
          type="text"
          name="name"
          placeholder="Введите имя"
          value={name}
          onChange={handleChangeInput}
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
          title="7 или более символов, в том числе по меньшей мере, одну цифру, одну прописную, одну строчные буквы"
          required
        />
      </label>
      <button className={s.Btn} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}
