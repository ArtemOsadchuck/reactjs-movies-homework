import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './CategoriesTabs.module.scss';

import lang from '../../../languages/getLanguage';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import useUrlSearch from '../../../hooks/useUrlSearch';

import {
  setCategory,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';

const CategoriesTabs: React.FC = () => {
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const dispatch = useAppDispatch();
  const activeClass = styles.categoryBtn + ' ' + styles.active;
  const btnClass = styles.categoryBtn;
  const activePage: string | undefined = useAppSelector(
    (state) => state.mainReducer.activePage
  );

  const startPage = '1';
  const activeUrlCategory = useUrlSearch('category');

  useEffect(() => {
    activePage && dispatch(setActivePage(activePage));
    activeUrlCategory && dispatch(setCategory(activeUrlCategory));
  }, [activePage, activeUrlCategory, dispatch]);

  const handlerSetCategory = (event: any) => {
    const category: string = event.target.id;
    dispatch(setActivePage(startPage));
    dispatch(setCategory(category));
  };

  return (
    <div className={styles.categoriesWrapper}>
      <NavLink
        to={`/?category=popular&page=${startPage}`}
        id={'popular'}
        onClick={(event) => handlerSetCategory(event)}
        className={activeUrlCategory === 'popular' ? activeClass : btnClass}
      >
        {lang(appLang).popular}
      </NavLink>
      <NavLink
        to={`?category=top_rated&page=${startPage}`}
        id={'top_rated'}
        onClick={(event) => handlerSetCategory(event)}
        className={activeUrlCategory === 'top_rated' ? activeClass : btnClass}
      >
        {lang(appLang).topRated}
      </NavLink>
      <NavLink
        to={`/?category=upcoming&page=${startPage}`}
        id={'upcoming'}
        onClick={(event) => handlerSetCategory(event)}
        className={activeUrlCategory === 'upcoming' ? activeClass : btnClass}
      >
        {lang(appLang).upcoming}
      </NavLink>
    </div>
  );
};

export default CategoriesTabs;
