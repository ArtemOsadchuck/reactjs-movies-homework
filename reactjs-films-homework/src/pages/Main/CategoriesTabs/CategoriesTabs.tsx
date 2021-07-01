import React from 'react';
import styles from './CategoriesTabs.module.scss';

import lang from '../../../languages/getLanguage';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  setCategory,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';

import fetchMainData from '../../../store/rootStore/mainStore/fetchMainData';

const CategoriesTabs: React.FC = () => {
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const dispatch = useAppDispatch();

  const mainState = {
    lang: useAppSelector((state) => state.mainReducer.lang),
    page: '1',
    activePage: '1',
  };

  const getPopular = async () => {
    const mainStateAddCategory = { ...mainState, category: 'popular' };
    await dispatch(setCategory('popular'));
    await dispatch(fetchMainData(mainStateAddCategory));
    dispatch(setActivePage('1'));
  };
  const getTopRated = async () => {
    dispatch(setActivePage('1'));
    const mainStateAddCategory = { ...mainState, category: 'top_rated' };
    await dispatch(setCategory('top_rated'));
    await dispatch(fetchMainData(mainStateAddCategory));
  };
  const getUpcoming = async () => {
    dispatch(setActivePage('1'));
    const mainStateAddCategory = { ...mainState, category: 'upcoming' };
    await dispatch(setCategory('upcoming'));
    await dispatch(fetchMainData(mainStateAddCategory));
  };

  return (
    <div className={styles.categoriesWrapper}>
      <div onClick={getPopular}>{lang(appLang).popular}</div>
      <div onClick={getTopRated}>{lang(appLang).topRated}</div>
      <div onClick={getUpcoming}>{lang(appLang).upcoming}</div>
    </div>
  );
};
export default CategoriesTabs;
