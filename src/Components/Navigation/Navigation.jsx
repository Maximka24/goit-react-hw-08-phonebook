import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import authSelectors from "../../redux/selectors";

import SignUpUser from "./SignUpUser/SignUpUser";
import RegistrationAndEntry from "./RegistrationAndEntry/RegistrationAndEntry";

import s from "./Navigation.module.css";

export default function Navigation() {
  const getLogged = useSelector(authSelectors.getLoggedIn);

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

        {getLogged && (
          <NavLink
            exact
            activeClassName={s.ActiveNavLink}
            className={s.NavContacts}
            to="/contacts"
          >
            Телефонная книга
          </NavLink>
        )}
      </div>

      {getLogged ? <SignUpUser /> : <RegistrationAndEntry />}
    </nav>
  );
}
