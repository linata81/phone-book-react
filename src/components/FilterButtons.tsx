import React from 'react';
import styles from '../App.module.scss';

type FilterButtonsProps = {
  setFilterFavorite: (status:boolean) => void
  filter: boolean
}

const FilterButtons = ({setFilterFavorite, filter}:FilterButtonsProps) => {
 
  if(filter) {
    return (
      <div className={styles.filterBtn}>
        <button onClick={() => setFilterFavorite(false)} type='button'>
          <span className="material-icons">people_alt</span>
          <span>Контакты</span>
        </button>
        <button onClick={() => setFilterFavorite(true)} type='button' className='active'>
          <span className="material-icons">star_outline</span>
          <span>Избранные</span>
        </button>
      </div>
    )
  }
  return (
    <div className={styles.filterBtn}>
      <button onClick={() => setFilterFavorite(false)} type='button' className='active'>
        <span className="material-icons">people_alt</span>
        <span>Контакты</span>
      </button>
      <button onClick={() => setFilterFavorite(true)} type='button'>
        <span className="material-icons">star_outline</span>
        <span>Избранные</span>
      </button>
    </div>
  );
}

export default FilterButtons;
