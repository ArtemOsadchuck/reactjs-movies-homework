import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import getMainData from '../../../store/rootStore/mainStore/getMaiData/getMainData';
import {
  setPage,
  setActivePage,
} from '../../../store/rootStore/mainStore/mainSlice';

const getPagesFromTotal = (totalPages: number) => {
  const resultArr: string[] = [];
  for (let i = 1; i <= totalPages; i += 1) {
    resultArr.push(`${i}`);
  }
  return resultArr.slice(0, 5);
};

const Pagination: React.FC = () => {
  const [pagNum, setPugNum] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const mainState = {
    lang: useAppSelector((state) => state.mainReducer.lang),
    category: useAppSelector((state) => state.mainReducer.category),
    query: useAppSelector((state) => state.mainReducer.query),
    activePage: useAppSelector((state) => state.mainReducer.activePage),
    totalPages: useAppSelector((state) => state.mainReducer.totalPages),
  };

  useEffect(() => {
    setPugNum(() => getPagesFromTotal(mainState.totalPages));
  }, [dispatch, mainState.totalPages]);

  const getPage = (page: string) => {
    dispatch(setActivePage(page));
    dispatch(setPage(page));
    dispatch(getMainData({ ...mainState, page: page }));
    return;
  };

  return (
    <div id="paginationWrapper_testID" className={styles.paginationWrapper}>
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
