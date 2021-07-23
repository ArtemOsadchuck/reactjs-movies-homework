/* eslint-disable array-callback-return */
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.scss';
import img from './img/Movie-card.png';

import GenresList from './GenresList';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { setMovieID } from '../../store/rootStore/movieDetailsPageStore/movieDetailsPageSlice';
import { movieDetailsURL } from '../../constants/links';

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

const MovieCard: React.FC<IMovieCard> = ({
  id,
  title,
  vote_average,
  poster_path,
  genre_ids,
}) => {
  const imgWidth = '52px';
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const detailsURL = `${movieDetailsURL}${id}`;

  const [genreName, setGenreName] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const appFetchMovieGenre = useAppSelector((state) => state.mainReducer.genre);

  useMemo(() => {
    const arrToSort: string[] = [];
    if (appFetchMovieGenre!.genres?.length) {
      appFetchMovieGenre!.genres.map((genre): void => {
        genre_ids?.length &&
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

  const voteAverage = useMemo(
    () => Math.ceil(vote_average * 10) / 10,
    [vote_average]
  );

  const goToMovie = (movieID: string) => {
    dispatch(setMovieID(movieID));
  };

  return (
    <Link
      to={detailsURL}
      id={`${id}`}
      className={styles.movieCardLink}
      onClick={() => goToMovie(`${id}`)}
    >
      <div className={styles.ratingMovie}>
        <p className={styles.voteAverage}>{voteAverage}</p>
      </div>
      <div className={styles.playIcon}>
        <div className={styles.playIconInner}></div>
      </div>
      <div className={styles.movieCardWrapper}>
        <div className={styles.imgCardWrapper}>
          {poster_path ? (
            <img src={urlImg} height="100%" alt={title} />
          ) : (
            <img src={img} width={imgWidth} alt={title} />
          )}
        </div>
        <h4>{title}</h4>
        {genreName && <GenresList genreName={genreName} />}
      </div>
    </Link>
  );
};

export default MovieCard;
