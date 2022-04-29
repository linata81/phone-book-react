import React from 'react';
import {IContact} from '../interfaces';
import { Link } from 'react-router-dom';
import styles from '../App.module.scss';

interface IContactListProps {
  contacts: IContact[]
}

const ContactsList:React.FC<IContactListProps> = ({contacts}) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={styles.contactInfo}>
            <Link to="">
              <span className="material-icons">account_circle</span>
              <span>{contact.name}</span>
              <span><b>{contact.surname}</b></span>
              {/* <div className={styles.contactButtons}>
                <button className={contact.favorit ? 'yellow': ''} type='button'><span className="material-icons">star_outline</span></button>
                <button type='button'><span className="material-icons">edit</span></button>
                <button type='button'><span className="material-icons">delete</span></button>
              </div> */}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}

export default ContactsList;
