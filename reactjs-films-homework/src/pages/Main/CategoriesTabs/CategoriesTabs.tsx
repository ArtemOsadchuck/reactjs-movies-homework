import React, { useState } from 'react';
import styles from './CategoriesTabs.module.scss';
import lang from '../../../languages/getLanguage';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  setCategory,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';
import getMainData from '../../../store/rootStore/mainStore/getMainData';

const CategoriesTabs: React.FC = () => {
  const startActivePage = 'popular';
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(startActivePage);
  const activeClass = styles.categoryBtn + ' ' + styles.active;
  const btnClass = styles.categoryBtn;

  const mainState = {
    lang: useAppSelector((state) => state.mainReducer.lang),
    page: '1',
    activePage: '1',
  };

  const setActiveCategory = (event: any) => {
    setActive(() => event.id);
  };

  const getPopular = async (event: EventTarget) => {
    const mainStateAddCategory = { ...mainState, category: 'popular' };
    await dispatch(setCategory('popular'));
    await dispatch(getMainData(mainStateAddCategory));
    dispatch(setActivePage('1'));
    setActiveCategory(event);
  };
  const getTopRated = async (event: EventTarget) => {
    dispatch(setActivePage('1'));
    const mainStateAddCategory = { ...mainState, category: 'top_rated' };
    await dispatch(setCategory('top_rated'));
    await dispatch(getMainData(mainStateAddCategory));
    setActiveCategory(event);
  };
  const getUpcoming = async (event: EventTarget) => {
    dispatch(setActivePage('1'));
    const mainStateAddCategory = { ...mainState, category: 'upcoming' };
    await dispatch(setCategory('upcoming'));
    await dispatch(getMainData(mainStateAddCategory));
    setActiveCategory(event);
  };

  return (
    <div className={styles.categoriesWrapper}>
      <div
        id={'popular'}
        onClick={(event) => getPopular(event.target)}
        className={active === 'popular' ? activeClass : btnClass}
      >
        {lang(appLang).popular}
      </div>
      <div
        id={'top_rated'}
        onClick={(event) => getTopRated(event.target)}
        className={active === 'top_rated' ? activeClass : btnClass}
      >
        {lang(appLang).topRated}
      </div>
      <div
        id={'upcoming'}
        onClick={(event) => getUpcoming(event.target)}
        className={active === 'upcoming' ? activeClass : btnClass}
      >
        {lang(appLang).upcoming}
      </div>
    </div>
  );
};
export default CategoriesTabs;
