import { NavLink } from "react-router-dom";
import s from "./RegistrationAndEntry.module.css";

export default function RegistrationAndEntry() {
  return (
    <div className={s.ListRegistry}>
      <NavLink
        exact
        activeClassName={s.ActiveNavLink}
        className={s.NavLinkReg}
        to="/registration"
      >
        Регистрация
      </NavLink>

      <NavLink
        exact
        activeClassName={s.ActiveNavLink}
        className={s.NavLink}
        to="/entry"
      >
        Войти
      </NavLink>
    </div>
  );
}
