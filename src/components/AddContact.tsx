import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import { ContactsContext } from '../context/contactsContext';
import { Navigate, Link } from 'react-router-dom';
import styles from '../App.module.scss';
import PhoneNumberInput from './PhoneNumberInput';

type FormValues = {
  id: string;
  name: string;
  surname: string;
  phone: string;
};

const AddContact:React.FC = () => {
  const {handleSubmit, register} = useForm<FormValues>();
  const [formIsSent, setFormIsSent] = useState(false);
  const {addContact} = useContext(ContactsContext);
  const {ref} = register("phone");
  
  const onSubmit = (data: FormValues) => {
    const newContact = {
      ...data,
      favorit: false
    }
    addContact(newContact);
    setFormIsSent(prev => !prev);
  }
  
  if(formIsSent){
    return (<Navigate to={'/'}/>)
  }
 
  return (
    <div className={styles.card}>
      <form className={styles.cardForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
          <Link to="/" className={styles.linkBack}>
            <span className="material-icons pt-1">close</span>
          </Link>
          <h1>Создать контакт</h1>          
        </div>
        <input
          {...register("name")}
          placeholder='Имя'
          required
        />
        <input
          {...register("surname")}
          placeholder='Фамилия'
        />
        <PhoneNumberInput {...register("phone")} ref={ref} />
        <button type='submit'>Сохранить</button>
      </form> 
    </div>
  );
}

export default AddContact;
