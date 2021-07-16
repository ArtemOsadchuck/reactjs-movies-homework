import React, { useEffect, useState } from 'react';
import styles from './LanguageToggler.module.scss';
import { langArr } from '../../../languages/getLanguage';
import { initialLanguage } from '../../../constants/variables';
import { setLang } from '../../../store/rootStore/mainStore/mainSlice';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import useLocalStorage from '../../../hooks/useLocalStorage';
import getMovieDetailsData from '../../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from '../../../store/rootStore/movieDetailsPageStore/getMoviePageData/getTopBilletCastData';

const LanguageToggler: React.FC = () => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const dispatch = useAppDispatch();
  const [langInLocal, setLangInLocal] = useLocalStorage(
    'lang',
    appLang.length ? appLang : initialLanguage
  );

  useEffect(() => {
    dispatch(setLang(langInLocal));
  }, [dispatch, langInLocal]);

  const moviePageState = {
    lang: appLang,
    movie_id: useAppSelector((state) => state.movieDetailsReducer.movie_id),
  };

  const showDropDown = () => {
    setIsDropDownShow(() => !isDropDownShow);
  };

  const changeLang = (lang: string) => {
    dispatch(setLang(lang));
    setIsDropDownShow(() => !isDropDownShow);
    setLangInLocal(() => lang);

    if (moviePageState.movie_id) {
      dispatch(getMovieDetailsData(moviePageState));
      dispatch(getTopBilletCastData(moviePageState));
    }
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={showDropDown} className={styles.dropdownBtn}>
        {appLang}
      </button>
      {isDropDownShow && (
        <div className={styles.modal}>
          <div className={styles.arrow}></div>
          {langArr.map((lang) => (
            <div
              className={styles.modalButton}
              key={lang}
              onClick={() => changeLang(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageToggler;
