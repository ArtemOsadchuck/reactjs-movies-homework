import React, { useEffect, useMemo, useState } from 'react';
import styles from './Pagination.module.scss';

import getPagesFromTotal from './utils/getPagesFromTotal';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import useUrlSearch from '../../../hooks/useUrlSearch';

import { setActivePage } from '../../../store/rootStore/mainStore/mainSlice';
import { Link } from 'react-router-dom';

interface IPagination {
  neededPages: number;
}
const Pagination: React.FC<IPagination> = ({ neededPages }) => {
  const [pagNum, setPugNum] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const activeUrlPage = useUrlSearch('page');
  const activeUrlSearch = useUrlSearch('search');

  const mainState = {
    lang: useAppSelector((state) => state.mainReducer.lang),
    category: useAppSelector((state) => state.mainReducer.category),
    query: useAppSelector((state) => state.mainReducer.query),
    activePage: useAppSelector((state) => state.mainReducer.activePage),
    totalPages: useAppSelector((state) => state.mainReducer.totalPages),
  };

  useMemo(() => {
    setPugNum(() => getPagesFromTotal(mainState.totalPages, neededPages));
  }, [mainState.totalPages, neededPages]);

  const getCurrentPosition = (page: string) => {
    const positionCategories: string = `?category=${mainState.category}&page=${page}`;
    const positionSearch: string = `?search=${mainState.query}&page=${page}`;

    const position = activeUrlSearch ? positionSearch : positionCategories;
    return position;
  };

  useEffect(() => {
    activeUrlPage && dispatch(setActivePage(activeUrlPage));
  }, [activeUrlPage, dispatch]);

  const getPage = (page: string) => {
    dispatch(setActivePage(page));
    return;
  };

  return (
    <div className={styles.paginationWrapper}>
      {pagNum.map((page) => {
        return (
          <Link to={getCurrentPosition(page)} key={page.concat('.')}>
            <div
              key={page}
              onClick={() => {
                getPage(page);
              }}
              className={
                `${mainState.activePage}` === `${page}` ? styles.active : ''
              }
            >
              {page}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
