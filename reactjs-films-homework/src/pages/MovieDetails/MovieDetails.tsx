import React, { useEffect, useMemo, useState } from 'react';
import MovieTitleCard from './MovieTitleCard';

import styles from './MovieDetails.module.scss';
import mockDetails from '../../mocks/Details.js';
import MovieTeam from '../../mocks/MovieTeam';
import images from '../../mocks/images';
import recommendationsMock from '../../mocks/recommendations';
import TopBilledCast from './TopBilledCast';
import ImagesBlock from './ImagesBlock';
import MovieCard from '../../components/MovieCard';

const MovieDetails: React.FC = () => {
  const [state, setState]: any = useState([]);
  const [cast, setCast]: any = useState([]);
  const [sortCast, setSortCast]: any = useState([]);
  const [stateImg, setStateImg]: any = useState();
  const [recommendations, setRecommendations]: any = useState([]);
  const recommendationsQuality = 5;

  useEffect(() => {
    mockDetails.then((res) => {
      setState(res);
      return;
    });
    MovieTeam.then((res) => {
      setCast(res.cast);
      return;
    });
    images.then((res) => {
      setStateImg(res.backdrops);
      return res;
    });
    recommendationsMock.then((res) => {
      const result = res.results;
      setRecommendations(result);
    });
  });

  const sortCastBySix = (cast: Array<{ popularity: number }>) => {
    const castLength = 6;
    const resultCast = [...cast].sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    return resultCast.slice(0, castLength);
  };

  useMemo(() => {
    setSortCast(sortCastBySix(cast));
  }, [cast]);

  return (
    <div className={styles.mainWrapper}>
      <MovieTitleCard props={state} />

      <div className={styles.castWrapper}>
        <div className={styles.castNameWrapper}>
          <h3 className={styles.castName}>Top Billed Cast</h3>
          <div className={styles.castNameShowAllBtn}>Show all</div>
        </div>
        <div className={styles.castGrid}>
          {sortCast.length
            ? sortCast.map((el: any) => {
                return <TopBilledCast key={el.id} cast={el} />;
              })
            : null}
        </div>
        <ImagesBlock backdrops={stateImg} />
      </div>
      <div className={styles.recommendationsWrapper}>
        <h2 className={styles.recommendationsTitle}>
          {'Recommendations'.toUpperCase()}
        </h2>
        <div className={styles.recommendationsCardsWrapper}>
          {recommendations.length ? (
            recommendations
              .slice(0, recommendationsQuality)
              .map((e: typeof recommendations) => {
                return <MovieCard props={e} key={Date.now() - Math.random()} />;
              })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
