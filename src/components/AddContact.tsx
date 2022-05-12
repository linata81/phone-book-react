import React, {FocusEvent, useContext, useState} from 'react';
import InputMask from "react-input-mask";
import {useForm, Controller} from 'react-hook-form';
import { ContactsContext } from '../context/contactsContext';
import { Navigate, Link } from 'react-router-dom';
import styles from '../App.module.scss';

type FormValues = {
  name: string;
  surname: string;
  phone: string;
};

const AddContact:React.FC = () => {
  const{control, handleSubmit, register} = useForm<FormValues>();
  const props = useContext(ContactsContext);
  const [formIsSent, setFormIsSent] = useState(false);
  
  const onSubmit = (data: FormValues) => {
    const newContact = {
      ...data,
      favorit: false
    }
    if(data.phone.indexOf("_") === -1) {
      if(props) {
        const {addItem} = props;
        addItem(newContact);
        setFormIsSent(prev => !prev);
      }
    }
  }
  
  const checkNumber = (e:FocusEvent<HTMLInputElement>) => {
    const errInd = e.target.value.indexOf("_");
    if(errInd !== -1) {
      e.target.focus();
      e.target.setSelectionRange(errInd,errInd);
    }
  }
  
  if(formIsSent){
    return (<Navigate to={'/'}/>)
  }
 
  return (
    <div className={styles.card}>
      <form className={styles.cardForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='flex'>
          <Link to="/">
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
        <Controller
          control={control}
          name="phone"
          render={(ref) => (
            <InputMask
              {...register("phone")}
              mask='+7 (999) 999-99-99'
              required
              type="tel"
              placeholder='Телефон'
              onBlur={checkNumber}
            />
          )}
        />
        <button type='submit'>Сохранить</button>
      </form> 
    </div>
  );
}

export default AddContact;
