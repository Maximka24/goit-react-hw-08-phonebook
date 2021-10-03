import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import s from "./SignUpUser.module.css";

import authSelectors from "../../../redux/selectors";
import * as operation from "../../../redux/auth/auth-operation";

export default function SignUpUser() {
  const nameUser = useSelector(authSelectors.getNameUser);
  const dispatch = useDispatch();

  return (
    <div className={s.SignUpUser}>
      <p>Добро пожаловать, {nameUser}</p>
      <button type="button" onClick={() => dispatch(operation.logOut())}>
        Выйти
      </button>
    </div>
  );
}
