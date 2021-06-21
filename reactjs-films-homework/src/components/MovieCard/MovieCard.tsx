/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import img from './img/Movie-card.png';
import styles from './MovieCard.module.scss';
import mockGenres from '../../mocks/genresIDs';

export interface ICard {
  props: IMovieCard;
}

export interface IMovieCard {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids: number[];
  key?: number;
}

export interface IGenre {
  genres?: {
    id: number;
    name: string;
  }[];
}

const MovieCard: React.FC<ICard> = ({ props }) => {
  const { id, title, vote_average, poster_path, genre_ids } = props;
  const movieTitle = 'Movie Title';
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const [genre, setGenre] = useState<IGenre>({});
  const [genreName, setGenreName] = useState<Array<string>>([]);

  mockGenres.then((res) => {
    return setGenre(res);
  });

  useEffect(() => {
    if (genre.genres) {
      genre.genres.map((genre): void => {
        genre_ids.map((el): void => {
          if (genre.id === el) {
            setGenreName((prev) => {
              prev.push(genre.name);
              const set = new Set(prev);
              const arr = Array.from(set);
              prev = arr;
              return prev;
            });
          }
        });
      });
    }
  }, [genre, genre_ids]);

  const imgWidth = '52px';
  return (
    <a id={`${id}`} className={styles.movieCardLink} href={'/'}>
      <div className={styles.ratingMovie}>
        <p>{vote_average}</p>
      </div>
      <div className={styles.playIcon}>
        <div className={styles.playIconInner}></div>
      </div>
      <div className={styles.movieCardWrapper}>
        <div className={styles.imgCardWrapper}>
          {poster_path ? (
            <img src={urlImg} height="100%" alt={movieTitle} />
          ) : (
            <img src={img} width={imgWidth} alt={movieTitle} />
          )}
        </div>
        <h4>{title}</h4>
        <p className={styles.genre}>
          {genreName
            ? genreName.map((el: string) => {
                return <span key={el}>{` ${el}`}</span>;
              })
            : null}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
