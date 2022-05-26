import React, { useState} from 'react';
import { ContactsContext} from './contactsContext';
import {IContact} from '../interfaces';
import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

interface ContactsStateProps {
  children?: React.ReactNode
}

const ContactsState:React.FC<ContactsStateProps> = ({children}) => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${url}/contacts.json`);
      const data = Object.keys(response.data).map(key => {
        return {
          ...response.data[key],
          id: key
        }
      })
      setContacts(data);
    }
    catch(e) {
      throw new Error('Не удалось подключиться к серверу')
    }
  }
  
  const addContact = async (contact:IContact) => {
    try {
      await axios.post(`${url}/contacts.json`, contact);
      fetchContacts();
    }
    catch(e) {
      throw new Error("Что то пошло не так")
    }
  }
  
  const getContactById = (id: String) => {
    fetchContacts();
    for(const contact of contacts) {
      if(contact.id === id) {
        return contact;
      }
    }
    return {
      id: '',
      name: '',
      phone: '',
      favorit: false
    }
  }
  
  const editContact = async(id: String, contact:IContact) => {
    try {
      await axios.put(`${url}/contacts/${id}.json`, contact);
      fetchContacts();
    }
    catch(e) {
      throw new Error('Что-то пошло не так')
    }
  }
  
  const deleteContact = async(id: String) => {
    try {
      await axios.delete(`${url}/contacts/${id}.json`);
      fetchContacts();
    }
    catch(e) {
      throw new Error('Не вышло удалить контакт, попробуйте еще раз')
    }
  }
 
  return (
    <ContactsContext.Provider value={{
      fetchContacts,
      contacts,
      addContact,
      getContactById,
      editContact,
      deleteContact
    }}>
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsState;
