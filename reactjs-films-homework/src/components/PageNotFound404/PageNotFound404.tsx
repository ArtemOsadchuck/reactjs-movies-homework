import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './PageNotFound404.module.scss';

import lang from '../../languages/getLanguage';
import { useAppSelector } from '../../hooks/hooks';
import { homePageLink } from '../../constants/links';

import { IPageNotFound404 } from './types';

const PageNotFound404: React.FC<IPageNotFound404> = ({ timing }) => {
  const history = useHistory();
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const pageLang = lang(appLang);

  useEffect(() => {
    setTimeout(() => {
      history.push(homePageLink);
    }, timing);
  });
  return (
    <div className={styles.wrapper}>
      <h1>{pageLang.errorPageTitle}</h1>
      <h2>{pageLang.errorPageText}</h2>
    </div>
  );
};

export default PageNotFound404;
