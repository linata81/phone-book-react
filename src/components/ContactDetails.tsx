import React, { useContext, useEffect , useState, useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ContactsContext } from '../context/contactsContext';
import styles from '../App.module.scss';
import { IContact } from '../interfaces';
import Modal from './Modal';

const defaultState = {
  id: '',
  name: '',
  surname: '',
  phone: '',
  favorit: false
}
type Ref = HTMLInputElement | null;


const ContactDetails:React.FC = () => {
  const {id} = useParams();
  const {getContactById, editContact} = useContext(ContactsContext);
  const [contact, setContact] = useState<IContact>(defaultState);
  const [formIsSent, setFormIsSent] = useState(false);
  const [isDel, setIsDel] = useState(false);

  const refName = useRef<Ref>(null);
  const refSurname = useRef<Ref>(null);
  const refPhone = useRef<Ref>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if(id){
      getContact(id)
    }
    //eslint-disable-next-line
  }, []);
  
  const getContact = (id:string) => {
    const item = getContactById(id);
    setContact(item);
  }
  
  const onEditContact = () => {
    refName.current!.disabled=false;
    refSurname.current!.disabled=false;
    refPhone.current!.disabled=false;
    if(refButton.current) {
      refButton.current.style.setProperty('display', 'block')
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setContact({
        ...contact,
        [e.target.name]:e.target.value
      })
  }
  
  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault();
    const newContact = {
      id: contact.id,
      name: contact.name,
      surname: contact.surname,
      phone: contact.phone,
      favorit: contact.favorit
    }
    editContact(contact.id, newContact);
    setFormIsSent(prev => !prev);
  }
  
  const toggleFavorit = () => {
    const newContact ={
      ...contact,
      favorit: !contact.favorit
    }
    editContact(contact.id, newContact);
    setContact(newContact);
  }
  
  const onDeleteContact = () => {
    setIsDel(prev => !prev)
  }
  
  if(formIsSent){
    return (<Navigate to={'/'}/>)
  }
  return (
    <div className={styles.card}>
      <div className='flex w-full justify-between mb-5'>
        <Link to='/' className={styles.linkBack}><span className="material-icons">arrow_back</span></Link>
        <div className={styles.contactButtons}>
          <button
            onClick={toggleFavorit}
            className={contact.favorit === true ? 'yellow': ''}
            type='button'>
            <span className="material-icons">star_outline</span>
          </button>
          <button
            onClick={onEditContact}
            type='button'>
            <span className="material-icons">edit</span>
          </button>
          <button
            onClick={onDeleteContact}
            type='button'>
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
      <span className="material-icons text-6xl mb-7">account_circle</span>
      <form className={styles.cardForm} onSubmit={handleSubmit}>
        <input
          name='name'
          value={contact.name}
          ref={refName}
          disabled
          required
          className='bg-white'
          onChange={handleChange}
        />
        <input
          name="surname"
          ref={refSurname}
          value={contact.surname}
          disabled
          className='bg-white'
          onChange={handleChange}
        />
        <input
          name = "phone"
          ref={refPhone}
          value={contact.phone}
          disabled
          required
          className='bg-white'
          onChange={handleChange}
        />
        <button type='submit' style={{display: "none"}} ref={refButton}>Сохранить</button>
      </form> 
      { isDel && <Modal setIsDel={setIsDel} id={contact.id}/>}      
    </div>
  );
}

export default ContactDetails;
