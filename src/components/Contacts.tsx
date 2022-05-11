import React from 'react';
import { Link } from 'react-router-dom';
import ContactsList from './ContactsList';
import FilterButtons from './FilterButtons';
import styles from '../App.module.scss';

const Contacts:React.FC = () => {
  

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
      {/* <ContactsList /> */}
      <FilterButtons/>
    </div>
  );
}

export default Contacts;
