import React from 'react';

import styles from './Pagination.module.scss';
import asyncGetTopRated from '../../../mocks/topRated.js';
import { useState } from 'react';

const Pagination = () => {
  const pagNum = ['1', '2', '3', '4', '5'];
  const [currentPage, setCurrentPage]: any = useState('1');

  const getPage = async (e: string) => {
    const mock = await asyncGetTopRated;
    console.log(mock);
    setCurrentPage(() => e);
    console.log(currentPage);
    return mock;
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
            className={currentPage === page ? styles.active : ''}
          >
            {page}
          </div>
        );
      })}
    </div>
  );
};
export default Pagination;
