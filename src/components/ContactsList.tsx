import React from 'react';
// import {IContact} from '../interfaces';
// import { Link } from 'react-router-dom';
import styles from '../App.module.scss';

// interface IContactListProps {
//   contacts: IContact[]
// }

const ContactsList:React.FC= () => {
  return (
    <ul className={styles.contactList}>
      {/* {contacts.map(contact => {
        return (
          <div></div>


        )
      })} */}
    </ul>
  );
}

export default ContactsList;
