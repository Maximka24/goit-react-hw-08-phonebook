import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

import SignUpUser from "./SignUpUser/SignUpUser";
import RegistrationAndEntry from "./RegistrationAndEntry/RegistrationAndEntry";

export default function Navigation() {
  return (
    <nav className={s.Navigation}>
      <div>
        <NavLink
          exact
          activeClassName={s.ActiveNavLink}
          className={s.NavLink}
          to="/"
        >
          Главная страница
        </NavLink>
        <NavLink
          exact
          activeClassName={s.ActiveNavLink}
          className={s.NavContacts}
          to="/contacts"
        >
          Контакты
        </NavLink>
      </div>

      <RegistrationAndEntry />
      <SignUpUser />
    </nav>
  );
}
