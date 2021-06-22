import React from 'react';
import styles from './CategoriesTabs.module.scss';

const CategoriesTabs: React.FC = () => {
  return (
    <div className={styles.categoriesWrapper}>
      <div>Popular</div>
      <div>Top rated</div>
      <div>Upcoming</div>
    </div>
  );
};
export default CategoriesTabs;
