import React, { useState } from 'react';
import styles from './LanguageToggler.module.scss';

import { setLang } from '../../../store/rootStore/langStore/languageSlice';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';

const LanguageToggler: React.FC = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const appLang = useAppSelector((state) => state.languageReducer.lang);

  const dispatch = useAppDispatch();

  const langArr = ['RU', 'EN'];
  const downShow = () => {
    setIsDropDownShow(() => !isDropDownShow);
  };
  const changeLang = (lang: string) => {
    setIsDropDownShow(() => !isDropDownShow);
    dispatch(setLang(lang));
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={downShow} className={styles.dropdownBtn}>
        {appLang}
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
