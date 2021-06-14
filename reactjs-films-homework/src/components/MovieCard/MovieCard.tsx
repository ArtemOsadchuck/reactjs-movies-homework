import React from 'react';
import img from './img/Movie-card.png';
import styles from './MovieCard.module.scss';

const MovieCard = () => {
  const movieTitle = 'Movie Title';
  const url = 'https://rezka.ag/films/detective/40201-ya-zdes-2019.html';
  const genre1 = 'Genre-1';
  const genre2 = 'Genre-2';
  const rating = '7.2';
  const imgWidth = '52px';
  return (
    <a className={styles.movieCardLink} href={url}>
      <div className={styles.ratingMovie}>
        <p>{rating}</p>
      </div>
      <div className={styles.playIcon}>
        <div className={styles.playIconInner}></div>
      </div>
      <div className={styles.movieCardWrapper}>
        <div className={styles.imgCardWrapper}>
          <img src={img} width={imgWidth} alt={movieTitle} />
        </div>
        <h4>{movieTitle}</h4>
        <span>
          {genre1} {genre2}
        </span>
      </div>
    </a>
  );
};

export default MovieCard;
