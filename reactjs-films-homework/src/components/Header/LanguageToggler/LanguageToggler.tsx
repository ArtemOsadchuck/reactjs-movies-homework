import React, { useState } from 'react';
import styles from './LanguageToggler.module.scss';

const LanguageToggler = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const [langState, setLangState] = useState('EN');
  const langArr = ['RU', 'EN'];
  const downShow = () => {
    setIsDropDownShow(() => !isDropDownShow);
  };
  const changeLang = (lang: string) => {
    setLangState(lang);
    setIsDropDownShow(() => !isDropDownShow);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={downShow} className={styles.dropdownBtn}>
        {langState}
      </button>
      {isDropDownShow ? (
        <>
          <div className={styles.modal}>
            <div className={styles.arrow}></div>
            {langArr.map((e) => {
              return (
                <div
                  className={styles.modalButton}
                  key={e}
                  onClick={() => changeLang(e)}
                >
                  {e}
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default LanguageToggler;
