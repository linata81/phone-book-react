import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.scss";
import { IContact } from "../interfaces";

interface ContactsListProps {
  contacts : IContact[] 
}

const ContactsList: React.FC<ContactsListProps>= ({ contacts }) => {

  const elements = contacts.map((elem, index) => {
    return (
      <li key={index} className={styles.contactInfo}>
        <Link to={`contact-details/${elem.id}`}>
          <span className="material-icons">account_circle</span>
          <span>{elem.name}</span>
          <span>
            <b>{elem.surname}</b>
          </span>
        </Link>
      </li>
    );
  });

  return (
    <ul className={styles.contactList}>
      {elements}
    </ul>
  );
};

export default ContactsList;
