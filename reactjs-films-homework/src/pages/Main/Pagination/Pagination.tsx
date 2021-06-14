import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const pagNum = ['1', '2', '3', '4', '5'];

  return (
    <div className={styles.paginationWrapper}>
      {pagNum.map((e) => {
        return <div key={e}>{e}</div>;
      })}
    </div>
  );
};
export default Pagination;
