import React from 'react';
import styles from './CategoriesTabs.module.scss';

import lang from '../../../languages/getLanguage';
import { useAppSelector } from '../../../hooks/hooks';

const CategoriesTabs: React.FC = () => {
  const appLang = useAppSelector((state) => state.languageReducer.lang);

  return (
    <div className={styles.categoriesWrapper}>
      <div>{lang(appLang).popular}</div>
      <div>{lang(appLang).topRated}</div>
      <div>{lang(appLang).upcoming}</div>
    </div>
  );
};
export default CategoriesTabs;
