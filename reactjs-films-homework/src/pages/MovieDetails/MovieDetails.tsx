import React, { useEffect, useState } from 'react';
import MovieTitleCard from './MovieTitleCard';
import styles from './MovieDetails.module.scss';

import TopBilledCast from './TopBilledCast';
import { ITopBilledCastProp } from './TopBilledCast/TopBilledCast';
import ImagesBlock from './ImagesBlock';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import { ITitleMovieProps } from './MovieTitleCard/MovieTitleCard';
import { IImagesBlockProps } from './ImagesBlock/ImagesBlock';

import lang from '../../languages/getLanguage';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import fetchMovieDetailsData from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieDetailsData';
import fetchTopBilletCastData from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getTopBilletCastData';
import fetchMovieImages from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieImages';
import fetchRecommendations from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getRecommendations';

const MovieDetails: React.FC = () => {
  const [titleInfoState, setTitleInfoState] = useState<ITitleMovieProps>();
  const [cast, setCast] = useState<Array<ITopBilledCastProp>>();
  const [sortCast, setSortCast] = useState<Array<ITopBilledCastProp>>();
  const [stateImg, setStateImg] = useState<Array<IImagesBlockProps>>();
  const [recommended, setRecommended] = useState<Array<IMovieCard>>([]);
  const recommendationsQuality = 5;

  const dispatch = useAppDispatch();
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const ImagesBlockTitle = lang(appLang).images;

  const detailsState = {
    lang: appLang,
    movie_id: useAppSelector((state) => state.movieDetailsReducer.movie_id),
  };
  const appFetchInfo = useAppSelector(
    (state) => state.movieDetailsReducer.moviePageInfoResult
  );
  const recommendations = useAppSelector(
    (state) => state.movieDetailsReducer.recommendations
  );
  const imagesFromAPI = useAppSelector(
    (state) => state.movieDetailsReducer.images
  );
  const movieCastFromAPI = useAppSelector(
    (state) => state.movieDetailsReducer.cast
  );
  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchMovieDetailsData(detailsState));
      await dispatch(fetchTopBilletCastData(detailsState));
      await dispatch(fetchMovieImages(detailsState.movie_id));
      dispatch(fetchRecommendations(detailsState));
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, appLang]);

  useEffect(() => {
    setTitleInfoState(() => appFetchInfo);
    setCast(() => movieCastFromAPI);
    setStateImg(() => imagesFromAPI);
    setRecommended(() => recommendations);
  }, [
    appLang,
    cast,
    appFetchInfo,
    movieCastFromAPI,
    imagesFromAPI,
    recommendations,
  ]);

  const sortCastBySix = (cast: Array<ITopBilledCastProp>) => {
    const castLength = 6;
    const resultCast = [...cast].sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    return resultCast.slice(0, castLength);
  };

  useEffect(() => {
    cast?.length !== undefined && setSortCast(sortCastBySix(cast));
  }, [cast, appLang, movieCastFromAPI]);

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
          {sortCast
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
          {recommended ? (
            recommended
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
