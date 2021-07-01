import React, { useEffect, useMemo, useState } from 'react';
import MovieTitleCard from './MovieTitleCard';
import styles from './MovieDetails.module.scss';

import mockDetails from '../../mocks/Details.js';
import MovieTeam from '../../mocks/MovieTeam';
import images from '../../mocks/images';

import recommendationsMock from '../../mocks/recommendations';
import TopBilledCast from './TopBilledCast';
import { ITopBilledCastProp } from './TopBilledCast/TopBilledCast';
import ImagesBlock from './ImagesBlock';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import { ITitleMovieProps } from './MovieTitleCard/MovieTitleCard';
import { IImagesBlockProps } from './ImagesBlock/ImagesBlock';

import lang from '../../languages/getLanguage';
import { useAppSelector } from '../../hooks/hooks';

const MovieDetails: React.FC = () => {
  const [titleInfoState, setTitleInfoState] = useState<ITitleMovieProps>();
  const [cast, setCast] = useState<Array<ITopBilledCastProp>>([]);
  const [sortCast, setSortCast] = useState<Array<ITopBilledCastProp>>([]);
  const [stateImg, setStateImg] = useState<Array<IImagesBlockProps>>();
  const [recommendations, setRecommendations] = useState<Array<IMovieCard>>([]);
  const recommendationsQuality = 5;

  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const ImagesBlockTitle = lang(appLang).images;
  useEffect(() => {
    mockDetails.then((res) => {
      setTitleInfoState((): ITitleMovieProps => res);
    });
    MovieTeam.then((res) => {
      setCast((): any[] => res.cast);
    });
    images.then((res) => {
      setStateImg((): IImagesBlockProps[] => res.backdrops);
    });
    recommendationsMock.then((res) => {
      setRecommendations(() => res.results);
    });
  });

  const sortCastBySix = (cast: Array<any>) => {
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
      {titleInfoState ? <MovieTitleCard props={titleInfoState} /> : null}

      <div className={styles.castWrapper}>
        <div className={styles.castNameWrapper}>
          <h3 className={styles.castName}>{lang(appLang).topBilledCast}</h3>
          <div className={styles.castNameShowAllBtn}>
            {lang(appLang).showAll}
          </div>
        </div>
        <div className={styles.castGrid}>
          {sortCast.length
            ? sortCast.map((el: ITopBilledCastProp) => {
                return <TopBilledCast key={el.id} props={el} />;
              })
            : null}
        </div>
        {stateImg ? (
          <ImagesBlock props={stateImg} title={ImagesBlockTitle} />
        ) : null}
      </div>
      <div className={styles.recommendationsWrapper}>
        <h2 className={styles.recommendationsTitle}>
          {lang(appLang).recommendations}
        </h2>
        <div className={styles.recommendationsCardsWrapper}>
          {recommendations.length ? (
            recommendations
              .slice(0, recommendationsQuality)
              .map((el: IMovieCard) => {
                return (
                  <MovieCard props={el} key={Date.now() - Math.random()} />
                );
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
