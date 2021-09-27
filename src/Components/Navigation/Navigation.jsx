import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

import SignUpUser from "./SignUpUser/SignUpUser";
import RegistrationAndEntry from "./RegistrationAndEntry/RegistrationAndEntry";

export default function Navigation() {
  return (
    <nav className={s.Navigation}>
      <NavLink
        exact
        activeClassName={s.ActiveNavLink}
        className={s.NavLink}
        to="/"
      >
        Главная страница
      </NavLink>

      <RegistrationAndEntry />
      <SignUpUser />
    </nav>
  );
}
