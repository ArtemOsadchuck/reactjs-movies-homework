import React, { useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import CategoriesTabs from './CategoriesTabs';
import styles from './Main.module.scss';
import Pagination from './Pagination';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import getMainData from '../../store/rootStore/mainStore/getMainData';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const appFetchMovie = useAppSelector((state) => state.mainReducer.mainState);
  const mainState = {
    lang: useAppSelector((state) => state.mainReducer.lang),
    page: useAppSelector((state) => state.mainReducer.page),
    category: useAppSelector((state) => state.mainReducer.category),
    query: useAppSelector((state) => state.mainReducer.query),
  };

  useEffect(() => {
    dispatch(getMainData(mainState));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  ) : (
    <div className={styles.mainWrapper}>
      return <h2>NO RESULTS FOUND</h2>;
    </div>
  );
};

export default Main;
