import React from 'react';
import styles from '../App.module.scss';

const FilterButtons:React.FC = () => {
  return (
    <div className={styles.filterBtn}>
      <button type='button' className='active'>
        <span className="material-icons">people_alt</span>
        <span>Контакты</span>
      </button>
      <button type='button'>
        <span className="material-icons">star_outline</span>
        <span>Избранные</span>
      </button>
      {/* className={elem.name !== filterStatus ? "btn btn-light" : "btn btn-light active"} */}
  </div>
  );
}

export default FilterButtons;
