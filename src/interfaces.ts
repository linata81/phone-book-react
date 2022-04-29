export interface IContact {
  name: string
  surname?:string
  phone: number
  id: string
  favorit: boolean
}

export interface ContactsState {
  contacts: IContact[]
  loading: boolean
  error: null | string
}

export enum ContactsActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR' 
}

interface FetchContactsAction {
  type: ContactsActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccesAction {
  type: ContactsActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: any[];
}

interface FetchContactsErrorAction {
  type: ContactsActionTypes.FETCH_CONTACTS_ERROR;
  payload: string
}

export type ContactsAction = FetchContactsAction | FetchContactsSuccesAction | FetchContactsErrorAction;
