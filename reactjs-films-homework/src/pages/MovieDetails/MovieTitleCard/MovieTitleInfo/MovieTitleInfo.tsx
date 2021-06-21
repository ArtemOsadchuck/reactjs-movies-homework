import React from 'react';

import styles from './MovieTitleInfo.module.scss';

export interface IMovieTitleInfo {
  heading: string;
  infoField: string;
}
const MovieTitleInfo: React.FC<IMovieTitleInfo> = ({ heading, infoField }) => {
  return heading === 'Title:' ? (
    <div className={styles.titleWrapper}>
      <p className={styles.heading}>{heading}</p>
      <h2 className={styles.title}>{infoField}</h2>
    </div>
  ) : (
    <div className={styles.otherInfoWrapper}>
      <p className={styles.heading}>{heading}</p>
      <p className={styles.infoField}>{infoField}</p>
    </div>
  );
};

export default MovieTitleInfo;
