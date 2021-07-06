import React, { useState } from 'react';
import styles from './LanguageToggler.module.scss';
import { setLang } from '../../../store/rootStore/mainStore/mainSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import getMainData from '../../../store/rootStore/mainStore/getMainData';
import getMovieDetailsData from '../../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from '../../../store/rootStore/movieDetailsPageStore/getMoviePageData/getTopBilletCastData';

const LanguageToggler: React.FC = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const dispatch = useAppDispatch();

  const mainState = {
    page: useAppSelector((state) => state.mainReducer.page),
    category: useAppSelector((state) => state.mainReducer.category),
    query: useAppSelector((state) => state.mainReducer.query),
  };
  const moviePageState = {
    lang: appLang,
    movie_id: useAppSelector((state) => state.movieDetailsReducer.movie_id),
  };
  const langArr = ['RU', 'EN'];

  const downShow = () => {
    setIsDropDownShow(() => !isDropDownShow);
  };
  const changeLang = (lang: string) => {
    const dd = { ...mainState, lang: `${lang.toLowerCase()}-${lang}` };
    dispatch(setLang(lang));
    setIsDropDownShow(() => !isDropDownShow);
    dispatch(getMainData(dd));
    dispatch(getMovieDetailsData(moviePageState));
    dispatch(getTopBilletCastData(moviePageState));
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
