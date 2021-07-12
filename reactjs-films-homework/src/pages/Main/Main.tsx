import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';

import CategoriesTabs from './CategoriesTabs';

import styles from './Main.module.scss';
import Pagination from './Pagination';
import asyncGetTopRated from '../../mocks/topRated.js';

const Main = () => {
  const [state, setState] = useState<Array<IMovieCard>>([]);
  useEffect(() => {
    asyncGetTopRated.then((res) => {
      setState(res);
      return res;
    });
  });

  return (
    <div className={styles.mainWrapper}>
      <CategoriesTabs />
      <div className={styles.cardsWrapper}>
        {state.length ? (
          state.map((e: IMovieCard) => {
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
