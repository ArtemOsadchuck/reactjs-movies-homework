import React from 'react';
import img from '../../../components/MovieCard/img/Movie-card.png';
import styles from './MovieTitleCard.module.scss';
import MovieTitleInfo from './MovieTitleInfo';

import lang from '../../../languages/getLanguage';
import { useAppSelector } from '../../../hooks/hooks';

import getRevenueFormat from './utils/getRevenueFormat';

export interface ICard {
  props: ITitleMovieProps;
}
export interface ITitleMovieProps {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  release_date: string;
  runtime: number;
  revenue: number;
  genres?: {
    id: number;
    name: string;
  }[];
}

const MovieTitleCard: React.FC<ICard> = ({ props }) => {
  const {
    id,
    title,
    vote_average,
    poster_path,
    overview,
    release_date,
    genres,
    runtime,
    revenue,
  } = props;
  const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const imgWidth = '52px';
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const titleText = lang(appLang).titleName + ':';
  const overviewText = lang(appLang).overview + ':';
  const releaseText = lang(appLang).releaseDate + ':';
  const revenueText = lang(appLang).revenue + ':';
  const durationText = lang(appLang).duration + ':';
  const durationTimeMin = lang(appLang).min;

  return (
    <div id={`${id}`} className={styles.movieTitleWrapper}>
      <div className={styles.ratingMovie}>
        <p className={styles.rating}>{vote_average}</p>
      </div>

      <div className={styles.movieCardWrapper}>
        <div className={styles.imgCardWrapper}>
          {poster_path ? (
            <img src={urlImg} height="100%" alt={title} />
          ) : (
            <img src={img} width={imgWidth} alt={title} />
          )}
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <MovieTitleInfo heading={titleText} infoField={title} />
        <MovieTitleInfo heading={overviewText} infoField={overview} />
        <MovieTitleInfo heading={releaseText} infoField={release_date} />
        <MovieTitleInfo
          heading={revenueText}
          infoField={`$ ${getRevenueFormat(revenue)}`}
        />
        <MovieTitleInfo
          heading={durationText}
          infoField={`${runtime} ${durationTimeMin}`}
        />
        <div className={styles.genreWrapper}>
          {genres
            ? genres.map((el) => {
                return (
                  <div key={el.id} className={styles.genre}>
                    <span>{`${el.name}`}</span>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default MovieTitleCard;
