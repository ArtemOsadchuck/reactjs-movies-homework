import React from 'react';
import MovieCard from '../../components/MovieCard';

import CategoriesTabs from './CategoriesTabs';

import styles from './Main.module.scss';
import Pagination from './Pagination';
import asyncGetTopRated from '../../mocks/topRated.js';
import { useState } from 'react';

const Main = () => {
  const [state, setState]: any = useState([]);
  asyncGetTopRated.then((res) => {
    setState(res);
    return res;
  });

  return (
    <div className={styles.mainWrapper}>
      <CategoriesTabs />
      <div className={styles.cardsWrapper}>
        {state.length ? (
          state.map((e: typeof state) => {
            return <MovieCard props={e} key={Date.now() - Math.random()} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default Main;
