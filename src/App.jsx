import "./App.css";
import React from "react";
import { AppContainer, H1, H2 } from "App.styled";

import Phonebook from "components/Phonebook/Phonebook";
import SearchInput from "components/SearchInput/SearchInput";
import ContactList from "components/ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/operations";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <H1>Phonebook</H1>
      <Phonebook />

      <H2>Contacts</H2>
      <SearchInput />
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </AppContainer>
  );
}
