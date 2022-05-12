import { createContext } from 'react';
import { IContact } from '../interfaces';

export interface IContactContext {
  fetchContacts: () => void
  contacts: IContact[]
  addItem: (contact:IContact) => void
}

export const ContactsContext = createContext<IContactContext>({
  fetchContacts: () => {},
  contacts: [],
  addItem: (contact) => {}
});