import React, { useEffect, useState } from 'react';
import search from './assets/search.png';
import styles from './Form.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import {
  setQuery,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';

import { Link, useHistory } from 'react-router-dom';
import useUrlSearch from '../../../hooks/useUrlSearch';

type IFormProps = {
  placeholder: string;
};

const Form: React.FC<IFormProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputSearchValue, setInputSearchValue] = useState<string>('');

  const pageAfterSearch = '1';

  const dispatch = useAppDispatch();
  const history = useHistory();
  const activeUrlCategory = useUrlSearch('category');
  const activeUrlPage = useUrlSearch('page');
  const activeUrlSearch = useUrlSearch('search');

  const [placeholderState, setPlaceholderState] = useState<string>(placeholder);

  const resetInput = () => {
    const checkIsOnBlur = document.body.addEventListener(
      'click',
      (event: any) => {
        const id: string = event.target.id;
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

  useEffect(() => {
    setPlaceholderState((prev) => {
      return (prev = !activeUrlSearch
        ? placeholder
        : `Results for ${activeUrlSearch}`);
    });

    activeUrlPage && dispatch(setActivePage(pageAfterSearch));
    activeUrlSearch && dispatch(setQuery(activeUrlSearch));
  }, [activeUrlPage, activeUrlSearch, dispatch, placeholder]);

  useEffect(() => {
    activeUrlCategory && setPlaceholderState((prev) => placeholder);
    setInputSearchValue('');
  }, [placeholder, activeUrlCategory]);

  const getSearchResults = () => {
    setPlaceholderState((prev) => {
      return (prev = !inputValue ? placeholder : `Results for ${inputValue}`);
    });

    dispatch(setActivePage(pageAfterSearch));
    dispatch(setQuery(inputValue));
    setInputValue('');
    setInputSearchValue('');
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
            setInputSearchValue((prev) => (prev = event.target.value));
          }}
          onKeyPress={(event) => {
            if (event.code === 'Enter') {
              event.preventDefault();
              getSearchResults();
              history.push(
                `/?search=${inputSearchValue}&page=${pageAfterSearch}`
              );
            }
          }}
          value={inputValue}
        />
        <div
          className={styles.search}
          id={'search'}
          onClick={(event) => {
            event.preventDefault();
            getSearchResults();
          }}
        >
          <Link to={`/?search=${inputSearchValue}&page=${pageAfterSearch}`}>
            <img src={search} id={'search'} alt="" width="16px" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
