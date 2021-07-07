/* eslint-disable array-callback-return */
import React, { useState, useMemo } from 'react';
import img from './img/Movie-card.png';
import styles from './MovieCard.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setMovieID } from '../../store/rootStore/movieDetailsPageStore/movieDetailsPageSlice';

export interface ICard {
  props: IMovieCard;
}

export interface IMovieCard {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids?: number[];
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
  const imgWidth = '52px';
  const movieTitle = 'Movie Title';
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const [genreName, setGenreName] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();
  const appFetchMovieGenre = useAppSelector((state) => state.mainReducer.genre);

  useMemo(() => {
    const arrToSort: string[] = [];
    if (appFetchMovieGenre!.genres) {
      appFetchMovieGenre!.genres.map((genre): void => {
        genre_ids!.map((el): void => {
          if (genre!.id === el) {
            setGenreName((prev) => {
              arrToSort.push(genre.name);
              const set = new Set(arrToSort);
              const arr = Array.from(set);
              prev = arr;
              return prev;
            });
          }
        });
      });
    }
  }, [genre_ids, appFetchMovieGenre]);

  const goToMovie = (movieID: string) => {
    dispatch(setMovieID(movieID));
  };

  return (
    <div
      id={`${id}`}
      className={styles.movieCardLink}
      onClick={() => goToMovie(`${id}`)}
    >
      <div className={styles.ratingMovie}>
        <p className={styles.voteAverage}>
          {Math.ceil(vote_average * 10) / 10}
        </p>
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
    </div>
  );
};

export default MovieCard;
