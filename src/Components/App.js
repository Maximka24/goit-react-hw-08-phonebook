import { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import Section from "./Section/Section";
import Navigation from "../Components/Navigation/Navigation";
// import PhoneBook from "./Phonebook/Phonebook";
// import Contacts from "./Contacts/Contacts";

const HomePage = lazy(() => import("./views/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./views/ContactsPage/ContactsPage"));
const EntryPage = lazy(() => import("./views/EntryPage/EntryPage"));
const RegistrationPage = lazy(() =>
  import("./views/RegistrationPage/RegistrationPage")
);

export default function App() {
  return (
    <Section>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/contacts">
            <ContactsPage />
          </Route>

          <Route path="/registration">
            <RegistrationPage />
          </Route>

          <Route path="/entry">
            <EntryPage />
          </Route>
        </Switch>
      </Suspense>

      {/* <PhoneBook />
      <Contacts /> */}
    </Section>
  );
}
