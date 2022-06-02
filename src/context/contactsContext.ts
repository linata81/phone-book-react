import { createContext } from 'react';
import { IContact } from '../interfaces';

export interface IContactContext {
  fetchContacts: () => void
  contacts: IContact[]
  addContact: (contact:IContact) => void
  getContactById: (id: string) => IContact
  editContact: (id: string, contact:IContact) => void
  deleteContact:(id: string) => void
}

export const ContactsContext = createContext<IContactContext>({
  fetchContacts: () => {},
  contacts: [],
  addContact: () => {},
  getContactById: () => {
    return {
      id: '',
      name: '',
      phone: '',
      favorit: false
    }
  },
  editContact: () => {},
  deleteContact: () => {},
});