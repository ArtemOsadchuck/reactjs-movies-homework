import React from 'react';
import { IGenresList } from '../../../types/components/MovieCard/types';
import styles from './GenresList.module.scss';

const GenresList: React.FC<IGenresList> = ({ genreName }) => {
  return (
    <p className={styles.genre}>
      {genreName.map((el: string) => {
        return <span key={el}>{` ${el}`}</span>;
      })}
    </p>
  );
};

export default GenresList;
