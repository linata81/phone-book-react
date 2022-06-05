import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ContactsList from "./ContactsList";
import FilterButtons from "./FilterButtons";
import styles from "../App.module.scss";
import { ContactsContext } from "../context/contactsContext";
import { IContact } from "../interfaces";
import SearchList from "./SearchList";

const Contacts: React.FC = () => {
  const { fetchContacts, contacts } = useContext(ContactsContext);
  const [value, setValue] = useState("");
  const [filterFavorite, setFilterFavorite] = useState(false);
  const [search, setSearch] = useState(false);

  const filteredContacts = (contacts: IContact[]) => {
    return contacts.filter((item) => item.favorit);
  };

  useEffect(() => {
    fetchContacts();
    //eslint-disable-next-line
  }, []);

  const handleFocus = () => {
    setSearch(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const visibleContacts = filterFavorite
    ? filteredContacts(contacts)
    : contacts;
  const elements = search ? (
    <SearchList contacts={contacts} value={value} />
  ) : (
    <ContactsList contacts={visibleContacts} />
  );

  return (
    <div className={styles.card}>
      <input
        type="text"
        className={styles.search}
        placeholder="Поиск контактов"
        value={value}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      {!search && (
        <Link to="/add-contact" className={styles.cardLink}>
          <span className="material-icons">person_add</span>
          Создать контакт
        </Link>
      )}

      {elements}
      {!search && (
        <FilterButtons
          setFilterFavorite={setFilterFavorite}
          filter={filterFavorite}
        />
      )}
    </div>
  );
};

export default Contacts;
