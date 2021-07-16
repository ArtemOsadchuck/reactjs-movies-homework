import React, { useEffect, useState } from 'react';
import MovieTitleCard from './MovieTitleCard';
import styles from './MovieDetails.module.scss';
import sortCastBySix from './utils/sortCastBySix';

import TopBilledCast from './TopBilledCast';
import { ITopBilledCastProp } from './TopBilledCast/TopBilledCast';
import ImagesBlock from './ImagesBlock';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import { ITitleMovieProps } from './MovieTitleCard/MovieTitleCard';
import { IImagesBlockProps } from './ImagesBlock/ImagesBlock';

import lang from '../../languages/getLanguage';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import getMovieDetailsData from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getTopBilletCastData';
import getMovieImages from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieImages';
import getRecommendations from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getRecommendations';
import { setMovieID } from '../../store/rootStore/movieDetailsPageStore/movieDetailsPageSlice';

import useUrlSearch from '../../hooks/useUrlSearch';

const MovieDetails: React.FC = () => {
  const [titleInfoState, setTitleInfoState] = useState<ITitleMovieProps>();
  const [cast, setCast] = useState<Array<ITopBilledCastProp>>();
  const [sortCast, setSortCast] = useState<Array<ITopBilledCastProp>>();
  const [stateImg, setStateImg] = useState<Array<IImagesBlockProps>>();
  const [recommended, setRecommended] = useState<Array<IMovieCard>>();

  const recommendationsQuality = 5;
  const imagesBlockQuality = 8;
  const imagesWidth = '172px';

  const dispatch = useAppDispatch();
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const ImagesBlockTitle = lang(appLang).images;
  const locationMovieID = useUrlSearch('movie-id');

  const movie_id = useAppSelector(
    (state) => state.movieDetailsReducer.movie_id
  );
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
    if (locationMovieID?.length) {
      dispatch(setMovieID(locationMovieID));
      const getData = async () => {
        const detailsState = {
          lang: appLang,
          movie_id: movie_id || locationMovieID,
        };

        await dispatch(getMovieDetailsData(detailsState));
        await dispatch(getTopBilletCastData(detailsState));
        await dispatch(getMovieImages(detailsState.movie_id));
        await dispatch(getRecommendations(detailsState));
      };
      locationMovieID?.length && getData();
    }
  }, [dispatch, appLang, movie_id, locationMovieID]);

  useEffect(() => {
    setTitleInfoState(() => appFetchInfo);
    setCast(() => movieCastFromAPI?.cast);
    setStateImg(() => imagesFromAPI?.backdrops);
    setRecommended(() => recommendations?.results);
  }, [
    appLang,
    cast,
    appFetchInfo,
    movieCastFromAPI,
    imagesFromAPI,
    recommendations,
    dispatch,
    locationMovieID,
  ]);

  useEffect(() => {
    cast?.length !== undefined && setSortCast(sortCastBySix(cast));
  }, [cast, appLang, movieCastFromAPI]);

  return (
    <div className={styles.mainWrapper}>
      {titleInfoState && <MovieTitleCard props={titleInfoState} />}
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
          <ImagesBlock
            images={stateImg}
            title={ImagesBlockTitle}
            imgWidth={imagesWidth}
            imagesQuality={imagesBlockQuality}
          />
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
                return <MovieCard props={el} key={el.id - 0.5} />;
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
