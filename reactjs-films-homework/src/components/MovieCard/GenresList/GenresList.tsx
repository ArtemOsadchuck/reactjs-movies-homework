import React from 'react';
import styles from './GenresList.module.scss';

interface IGenresList {
  genreName: string[];
}

const GenresList: React.FC<IGenresList> = ({ genreName }) => {
  return (
    <p className={styles.genre}>
      {genreName &&
        genreName.map((el: string) => {
          return <span key={el}>{` ${el}`}</span>;
        })}
    </p>
  );
};

export default GenresList;
