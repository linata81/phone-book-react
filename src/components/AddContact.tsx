import React, {FocusEvent} from 'react';
// import { ContactsContext } from '../context/contactsContext';
import InputMask from "react-input-mask";
import {useForm, Controller} from 'react-hook-form';
import styles from '../App.module.scss';

type FormValues = {
  name: string;
  surname: string;
  phone: string;
};

const AddContact:React.FC = () => {
  const{control, handleSubmit, register} = useForm<FormValues>();
 
  
  const onSubmit = (data: FormValues) => {
    
    if(data.phone.indexOf("_") === -1) {
      console.log(data);
    }
  }
  
  const checkNumber = (e:FocusEvent<HTMLInputElement>) => {
    const errInd = e.target.value.indexOf("_");
    if(errInd !== -1) {
      e.target.focus();
      e.target.setSelectionRange(errInd,errInd);
    }
  }
 
  return (
    <div className={styles.card}>
      <form className={styles.cardForm} onSubmit={handleSubmit(onSubmit)}>
        <h1>Создать контакт</h1>
        <input
          {...register("name")}
          placeholder='Имя'
          required
        />
        <input
          {...register("surname")}
          placeholder='Фамилия'
          required
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
