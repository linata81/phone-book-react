import React, {useState, useContext} from 'react';
import styles from '../App.module.scss';
import { Navigate } from 'react-router-dom';
import { ContactsContext } from '../context/contactsContext';


type ModalProps = {
  setIsDel: (del:boolean) => void
  id: string
}

const Modal = ({setIsDel, id}:ModalProps) => {
  const [btnYes, setbtnYes] = useState(false);
  const {deleteContact} = useContext(ContactsContext);
  
  const delContact = () => {
    deleteContact(id);
    setbtnYes(prev => !prev)
  }
  
  if(btnYes){
    return (<Navigate to={'/'}/>)
  }
  return (
    <div className={styles.modal}>
      <p>Удалить контакт?</p>
      <div className='mt-6'>
        <button onClick={delContact}>Да</button>
        <button onClick={() => {setIsDel(false)}}>Нет</button>
      </div>
    </div>
  );
}

export default Modal;
