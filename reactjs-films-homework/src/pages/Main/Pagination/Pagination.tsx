import React, { useMemo, useState } from 'react';
import styles from './Pagination.module.scss';

import getPagesFromTotal from './utils/getPagesFromTotal';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';

import getMainData from '../../../store/rootStore/mainStore/getMaiData/getMainData';
import {
  setPage,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';

interface IPagination {
  neededPages: number;
}
const Pagination: React.FC<IPagination> = ({ neededPages }) => {
  const [pagNum, setPugNum] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
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

  const getPage = (page: string) => {
    dispatch(setActivePage(page));
    dispatch(setPage(page));
    dispatch(getMainData({ ...mainState, page: page }));
    return;
  };

  return (
    <div className={styles.paginationWrapper}>
      {pagNum.map((page) => {
        return (
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
        );
      })}
    </div>
  );
};

export default Pagination;
