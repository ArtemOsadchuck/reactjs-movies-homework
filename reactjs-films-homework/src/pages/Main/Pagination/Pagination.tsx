import React, { useState } from 'react';
import styles from './Pagination.module.scss';
import asyncGetTopRated from '../../../mocks/topRated.js';

const Pagination: React.FC = () => {
  const pagNum = ['1', '2', '3', '4', '5'];
  const [currentPage, setCurrentPage] = useState('1');

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
