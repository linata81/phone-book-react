import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactsList from './ContactsList';
import FilterButtons from './FilterButtons';
import styles from '../App.module.scss';
import { ContactsContext } from '../context/contactsContext';
import {IContact} from '../interfaces';

const Contacts:React.FC = () => {
  const [filterFavorite, setFilterFavorite] = useState(false);
  const {fetchContacts, contacts} = useContext(ContactsContext);
  
  const filterContacts = (contacts:IContact[]) => {
    return contacts.filter(item => item.favorit)
  }

  useEffect(() => {
    fetchContacts();
    //eslint-disable-next-line
  }, []);
  
  const visibleContacts = filterFavorite ? filterContacts(contacts) : contacts

  return (
    <div className={styles.card}>
      <input
        type="text"
        className={styles.search}
        placeholder='Поиск контактов'
        // onKeyPress={keyPressHandler}
      />
      <Link to="/add-contact" className={styles.cardLink}>
        <span className="material-icons">person_add</span>
        Создать контакт
      </Link>
      <ContactsList contacts={visibleContacts}/>
      <FilterButtons setFilterFavorite={setFilterFavorite} filter={filterFavorite}/>
    </div>
  );
}

export default Contacts;
