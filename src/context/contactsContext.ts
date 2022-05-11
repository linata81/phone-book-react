import { createContext, useContext } from 'react';
import { IContact } from '../interfaces';

export interface IContactContext {
  contacts: IContact[]
  addItem: (contact:IContact) => void
}

export const ContactsContext = createContext<IContactContext | null>(null);