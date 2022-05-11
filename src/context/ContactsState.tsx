import React, { useState} from 'react';
import { ContactsContext} from './contactsContext';
import {IContact} from '../interfaces'
import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

interface ContactsStateProps {
  children?: React.ReactNode
}

const ContactsState:React.FC<ContactsStateProps> = ({children}) => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  
  // const fetchContacts =async () => {
  //   try {
  //     const response = await axios.get(`${url}/contacts.json`);
  //   }
  //   catch(e) {
  //     throw new Error('Не удалось подключиться к серверу')
  //   }
  // }
  
  const addItem = async (contact:IContact) => {
    try {
      await axios.post(`${url}/contacts.json`, contact)
    }
    catch(e) {
      throw new Error("Что то пошло не так")
    }
  }
   
  return (
    <ContactsContext.Provider value={{contacts, addItem}}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsState;
