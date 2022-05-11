import React from 'react';
import ContactsState from './context/ContactsState';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import styles from './App.module.scss';

const App: React.FC = () => {
 
  return (
    <ContactsState>
      <BrowserRouter>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link to="/">Phone book</Link>
          </div>
          <Routes>
            <Route path='/' element={<Contacts/>}/>
            <Route path='/add-contact' element={<AddContact/>}/>
            <Route path='/edit-contact/:id' element={<EditContact/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ContactsState>
  );
}

export default App;