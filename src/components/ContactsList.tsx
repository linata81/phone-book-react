import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.scss';
import { IContact } from '../interfaces';

interface ContactsProp {
  contacts: IContact[];
}

const ContactsList:React.FC<ContactsProp> = ({contacts}) => {
  const elements = contacts.map(elem => {
    return (
      <li key={elem.id} className={styles.contactInfo}>
        <Link to="">
          <span className="material-icons">account_circle</span>
          <span>{elem.name}</span>
          <span><b>{elem.surname}</b></span>
        </Link>
      </li>
    )
  });

  return (
    <ul className={styles.contactList}>
      {elements}
    </ul>

  )
}

export default ContactsList;
