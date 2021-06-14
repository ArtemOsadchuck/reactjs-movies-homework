import React from 'react';
import MovieCard from '../../components/MovieCard';

import CategoriesTabs from './CategoriesTabs';

import styles from './Main.module.scss';
import Pagination from './Pagination';

const Main = () => {
  const pagNum = ['1', '2', '3', '4', '5'];
  return (
    <div className={styles.mainWrapper}>
      <CategoriesTabs />
      <div className={styles.cardsWrapper}>
        {pagNum.map(() => {
          return <MovieCard key={Date.now() - Math.random()} />;
        })}
        {/* <MovieCard /> */}
      </div>
      <Pagination />
    </div>
  );
};

export default Main;
