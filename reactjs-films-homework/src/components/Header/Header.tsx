import React from 'react';
import Form from './Form';
import LanguageToggler from './LanguageToggler';
import style from './Header.module.scss';

import lang from '../../languages/getLanguage';
import { useAppSelector } from '../../hooks/hooks';

const Header: React.FC = () => {
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  return (
    <header className={style.header}>
      <h1>{lang(appLang).title.toUpperCase()}</h1>
      <Form placeholder={lang(appLang).placeholder} />
      <LanguageToggler />
    </header>
  );
};

export default Header;
