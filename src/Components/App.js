import { lazy, Suspense } from "react";

import { Switch } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import * as operation from "../redux/auth/auth-operation";

import Section from "./Section/Section";
import Navigation from "../Components/Navigation/Navigation";

import PrivateRoute from "./views/PrivateRoute";
import PublicRoute from "./views/PublicRoute";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./views/ContactsPage/ContactsPage"));
const EntryPage = lazy(() => import("./views/EntryPage/EntryPage"));
const RegistrationPage = lazy(() =>
  import("./views/RegistrationPage/RegistrationPage")
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(
    (e) => {
      dispatch(operation.fetchCurrentUser());
    },
    [dispatch]
  );

  return (
    <Section>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute exact path="/registration" redirected>
            <RegistrationPage />
          </PublicRoute>

          <PublicRoute exact path="/entry" redirected>
            <EntryPage />
          </PublicRoute>

          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Section>
  );
}
