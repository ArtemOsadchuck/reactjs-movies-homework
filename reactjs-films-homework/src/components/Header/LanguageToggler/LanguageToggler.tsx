import React, { useState } from 'react';
import styles from './LanguageToggler.module.scss';

import { setLang } from '../../../store/rootStore/mainStore/mainSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import fetchMainData from '../../../store/rootStore/mainStore/fetchMainData';

const LanguageToggler: React.FC = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const appLang = useAppSelector((state) => state.mainReducer.lang);

  const dispatch = useAppDispatch();

  const mainState = {
    page: useAppSelector((state) => state.mainReducer.page),
    category: useAppSelector((state) => state.mainReducer.category),
    query: useAppSelector((state) => state.mainReducer.query),
  };

  const langArr = ['RU', 'EN'];
  const downShow = () => {
    setIsDropDownShow(() => !isDropDownShow);
  };
  const changeLang = (lang: string) => {
    const dd = { ...mainState, lang: `${lang.toLowerCase()}-${lang}` };
    dispatch(setLang(lang));
    setIsDropDownShow(() => !isDropDownShow);
    dispatch(fetchMainData(dd));
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
