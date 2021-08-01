import React, { useEffect } from 'react';
import LanguageToggler from './LanguageToggler';
import style from './Header.module.scss';

import { homePageLink } from '../../constants/links';

import lang from '../../languages/getLanguage';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import getGenres from '../../store/rootStore/mainStore/getMaiData/getGenres';
import FormMUi from './FormMUi';

const Header: React.FC = () => {
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const dispatch = useAppDispatch();

  const placeholder = lang(appLang).placeholder;
  const noOptionsText = lang(appLang).noResults;
  useEffect(() => {
    dispatch(getGenres(appLang));
  }, [dispatch, appLang]);

  return (
    <header className={style.header}>
      <h1>
        <Link to={homePageLink}>{lang(appLang).title.toUpperCase()}</Link>
      </h1>
      <FormMUi
        placeholder={placeholder}
        id="33641"
        blurOnSelect={true}
        clearOnBlur={false}
        noOptionsText={noOptionsText}
        clearOnEscape={false}
        forcePopupIcon={false}
      />
      <LanguageToggler />
    </header>
  );
};

export default Header;
