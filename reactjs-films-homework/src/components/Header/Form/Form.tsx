import React, { useState } from 'react';
import search from './assets/search.png';
import styles from './Form.module.scss';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  setQuery,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';
import fetchMainData from '../../../store/rootStore/mainStore/fetchMainData';

type IFormProps = {
  placeholder: string;
};

const Form: React.FC<IFormProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const pageAfterSearch = '1';
  const dispatch = useAppDispatch();
  const [placeholderState, setPlaceholderState] = useState<string>(placeholder);

  const mainState = {
    lang: useAppSelector((state) => state.mainReducer.lang),
    category: useAppSelector((state) => state.mainReducer.category),
    page: pageAfterSearch,
  };

  const resetInput = () => {
    const checkIsOnBlur = document.body.addEventListener(
      'click',
      (event: any) => {
        const id = event.target.id;
        if (id === 'search') {
          setInputValue('');
        }
        if (id === 'input_search') {
          return;
        }
        setInputValue('');
      },
      { once: true }
    );
    return checkIsOnBlur;
  };

  const getSearchResults = () => {
    setPlaceholderState((prev) => {
      return (prev = !inputValue ? placeholder : `Results for ${inputValue}`);
    });
    dispatch(setActivePage(pageAfterSearch));
    dispatch(setQuery(inputValue));
    dispatch(fetchMainData({ ...mainState, query: inputValue }));
  };

  return (
    <div className={styles.formWrapper} onBlur={resetInput}>
      <form className={styles.form} id={'form'}>
        <input
          type="search"
          className={styles.input}
          placeholder={placeholderState}
          id="input_search"
          autoComplete="off"
          onChange={(event) => {
            setInputValue((prev) => (prev = event.target.value));
          }}
          onKeyPress={(event) => {
            if (event.code === 'Enter') {
              getSearchResults();
              setInputValue('');
              event.preventDefault();
            }
          }}
          value={inputValue}
        />
        <div
          className={styles.search}
          id={'search'}
          onClick={() => getSearchResults()}
        >
          <img src={search} id={'search'} alt="" width="16px" />
        </div>
      </form>
    </div>
  );
};

export default Form;
