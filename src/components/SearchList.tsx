import React from 'react';
import styles from "../App.module.scss";
import { IContact} from '../interfaces';
import { Link } from "react-router-dom";

interface SearchListProps {
  contacts: IContact[],
  value: string
}

const SearchList: React.FC<SearchListProps> = ({contacts, value}) => {
  
  const filteredContacts = contacts.filter(contact =>{
    if(contact.surname) {
      return (contact.name.trim().toLowerCase().includes(value.toLowerCase())
      || contact.phone.trim().toLowerCase().includes(value.toLowerCase()))
      || contact.surname.trim().toLowerCase().includes(value.toLowerCase())
    }
    else {
      return (contact.name.trim().toLowerCase().includes(value.toLowerCase())
      || contact.phone.trim().toLowerCase().includes(value.toLowerCase()))      
    }
  })
  
  const elements = filteredContacts.map((elem, index) => {
    return (
      <li key={index} className={styles.contactInfo}>
        <Link to={`contact-details/${elem.id}`}>
          <span className="material-icons">account_circle</span>
          <div className='flex flex-col'>
            <div className={styles.searchLi}>
              <span>{elem.name}</span>
              <span>
                <b>{elem.surname}</b>
              </span>
            </div>
            <div>{elem.phone}</div>           
          </div>
        </Link>
      </li>
    );
  });

  //Временно работающий рецепт - использовать вместо "Link to" "a href"
  //суть в неправильной реализации Link,которая после изменения URL не передаёт событие для обработки в rout
  return (
    <div className={styles.cardForm}>
      <a href='/' className={styles.cardLink} style={{marginBottom: "0"}}> 
        <span className="material-icons">arrow_back</span>Назад
      </a>
      <ul className={styles.contactList} style={{marginTop: "20px"}}>
        {value && elements}
      </ul>
    </div>
  )
}

export default SearchList;
