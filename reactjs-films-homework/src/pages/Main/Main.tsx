import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Main.module.scss';

import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import CategoriesTabs from './CategoriesTabs';
import Pagination from './Pagination';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import getMainData from '../../store/rootStore/mainStore/getMaiData/getMainData';
import useUrlSearch from '../../hooks/useUrlSearch';
import {
  setActivePage,
  setCategory,
  setQuery,
} from '../../store/rootStore/mainStore/mainSlice';

import getLang from '../../languages/getLanguage';
import { neededMainPages } from '../../constants/variables';
import { homePageLink } from '../../constants/links';
import Loader from '../../components/Loader';
import { setErrorDetailsData } from '../../store/rootStore/movieDetailsPageStore/movieDetailsPageSlice';

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const appFetchMovie = useAppSelector((state) => state.mainReducer.mainState);
  const activeUrlCategory = useUrlSearch('category');
  const activeUrlPage = useUrlSearch('page');
  const activeUrlSearch = useUrlSearch('search');

  const lang = useAppSelector((state) => state.mainReducer.lang);
  const activePage = useAppSelector((state) => state.mainReducer.activePage);
  const category = useAppSelector((state) => state.mainReducer.category);
  const query = useAppSelector((state) => state.mainReducer.query);
  const isLoading = useAppSelector((state) => state.mainReducer.isLoading);
  const history = useHistory();

  useEffect(() => {
    if (!category && activeUrlCategory) {
      dispatch(setCategory(activeUrlCategory));
    }
    if (!activePage && activeUrlPage) {
      dispatch(setActivePage(activeUrlPage));
    }
    if (!query && activeUrlSearch) {
      dispatch(setQuery(activeUrlSearch));
    }
    if (!activeUrlSearch && !activeUrlCategory && !activeUrlSearch) {
      dispatch(setErrorDetailsData(null));
      history.push(homePageLink);
    }
  }, [
    activePage,
    activeUrlCategory,
    activeUrlPage,
    activeUrlSearch,
    category,
    dispatch,
    history,
    query,
  ]);

  useEffect(() => {
    if (activePage && activeUrlPage) {
      if (activeUrlSearch && !activeUrlCategory) {
        const mainState = {
          lang: lang,
          page: activeUrlPage,
          category: '',
          query: activeUrlSearch,
        };
        dispatch(getMainData(mainState));
      }
      if (activeUrlCategory) {
        const mainState = {
          lang: lang,
          page: activePage,
          category: activeUrlCategory,
        };

        dispatch(getMainData(mainState));
      }
    }
  }, [
    activePage,
    activeUrlCategory,
    activeUrlPage,
    activeUrlSearch,
    category,
    dispatch,
    lang,
    query,
  ]);

  return isLoading ? (
    <div className={styles.mainWrapper}>
      <CategoriesTabs />
      <div className={styles.cardsWrapper}>
        {appFetchMovie.length ? (
          appFetchMovie.map((cardData: IMovieCard) => {
            return (
              <MovieCard
                id={cardData.id}
                title={cardData.title}
                vote_average={cardData.vote_average}
                poster_path={cardData.poster_path}
                genre_ids={cardData.genre_ids}
                key={cardData.id + 0.1}
              />
            );
          })
        ) : (
          <h2>{getLang(lang).noResults}</h2>
        )}
      </div>
      <Pagination neededPages={neededMainPages} />
    </div>
  ) : (
    <div className={styles.mainWrapper}>
      {/* <h2>{getLang(lang).noResults}</h2>; */}
      <Loader />
    </div>
  );
};

export default Main;
