import React, { useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';

import CategoriesTabs from './CategoriesTabs';

import styles from './Main.module.scss';
import Pagination from './Pagination';
// import asyncGetTopRated from '../../mocks/topRated.js';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
// import { fetchCategory } from '../../store/rootStore/langStore/fetchMainData';
import fetchMovieData from '../../store/rootStore/langStore/fetchMainData';

// import { setLang } from '../../../store/rootStore/langStore/languageSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();

  const appFetchMovie = useAppSelector(
    (state) => state.languageReducer.mainState
  );

  const mainLang = useAppSelector((state) => state.languageReducer.lang);

  const mainState = {
    lang: `${mainLang.toLowerCase()}-${mainLang}`,
    page: useAppSelector((state) => state.languageReducer.page),
    category: useAppSelector((state) => state.languageReducer.category),
  };

  useEffect(() => {
    console.log(mainState, '------------------------------');
    dispatch(fetchMovieData(mainState));
  }, [dispatch]);

  return appFetchMovie.length ? (
    <div className={styles.mainWrapper}>
      <CategoriesTabs />
      <div className={styles.cardsWrapper}>
        {appFetchMovie.length ? (
          appFetchMovie.map((e: IMovieCard) => {
            return <MovieCard props={e} key={Date.now() * Math.random()} />;
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <Pagination />
    </div>
  ) : null;
};

export default Main;
