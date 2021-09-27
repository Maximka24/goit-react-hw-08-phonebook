import Section from "./Section/Section";
import PhoneBook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";

export default function App() {
  return (
    <Section>
      <PhoneBook />

      <Contacts />
    </Section>
  );
}
