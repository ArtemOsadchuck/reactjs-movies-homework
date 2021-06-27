import React from 'react';
import Form from './Form';
import LanguageToggler from './LanguageToggler';
import style from './Header.module.scss';
const Header = () => {
  return (
    <header className={style.header}>
      <h1>TITLE</h1>
      <Form />
      <LanguageToggler />
    </header>
  );
};

export default Header;
