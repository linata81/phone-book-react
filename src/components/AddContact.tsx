import React from 'react';
import styles from '../App.module.scss';

const AddContact:React.FC = () => {
  return (
    <div className={styles.card}>
      <form className={styles.cardForm}>
        <h1>Создать контакт</h1>
        <input type='text'name='name' placeholder='Имя'/>
        <input type='text'name='surname' placeholder='Фамилия'/>
        <input type='text'name='phone' placeholder='Телефон'/>
        <button type='submit'>Сохранить</button>
      </form> 
    </div>
  );
}

export default AddContact;
