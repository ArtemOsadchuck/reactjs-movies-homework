import React from 'react';
import img from '../../../components/MovieCard/img/Movie-card.png';
import styles from './MovieTitleCard.module.scss';
import MovieTitleInfo from './MovieTitleInfo';

export interface ICard {
  props: IMovieCard;
}

export interface IMovieCard {
  props: {
    id: number;
    title: string;
    vote_average: number;
    poster_path: string;
    genre_ids: number[];
    overview: string;
    release_date: string;
    runtime: number;
    revenue: number;
    genres: {
      id: number;
      name: string;
    }[];
  };
}

const MovieTitleCard: React.FC<IMovieCard> = ({ props }) => {
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

  const revenueFormat = (revenue: number) => {
    if (revenue) {
      return revenue
        .toString()
        ?.match(/.{1}/g)
        ?.reverse()
        .join('')
        ?.match(/.{1,3}/g)
        ?.map((el: string) => {
          return el.split('').reverse().join('');
        })
        .reverse()
        .join(' ');
    }
  };

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
        <MovieTitleInfo heading="Title:" infoField={title} />
        <MovieTitleInfo heading="Overview:" infoField={overview} />
        <MovieTitleInfo heading="Release date:" infoField={release_date} />
        <MovieTitleInfo
          heading="Revenue:"
          infoField={`$ ${revenueFormat(revenue)}`}
        />
        <MovieTitleInfo heading="Duration:" infoField={`${runtime} min`} />
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
