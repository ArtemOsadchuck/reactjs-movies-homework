import React from 'react';
import styles from './CategoriesTabs.module.scss';

import lang from '../../../languages/getLanguage';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { setCategory } from '../../../store/rootStore/langStore/languageSlice';

import fetchMainData from '../../../store/rootStore/langStore/fetchMainData';

const CategoriesTabs: React.FC = () => {
  const appLang = useAppSelector((state) => state.languageReducer.lang);
  const dispatch = useAppDispatch();

  const mainState = {
    lang: useAppSelector((state) => state.languageReducer.lang),
    page: useAppSelector((state) => state.languageReducer.page),
  };

  const getPopular = async () => {
    const mainStateAddCategory = { ...mainState, category: 'popular' };
    await dispatch(setCategory('popular'));
    await dispatch(fetchMainData(mainStateAddCategory));
  };
  const getTopRated = async () => {
    const mainStateAddCategory = { ...mainState, category: 'top_rated' };
    await dispatch(setCategory('top_rated'));
    await dispatch(fetchMainData(mainStateAddCategory));
  };
  const getUpcoming = async () => {
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
