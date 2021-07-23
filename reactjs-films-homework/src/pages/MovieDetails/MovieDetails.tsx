import React, { useEffect, useState } from 'react';
import MovieTitleCard from './MovieTitleCard';
import styles from './MovieDetails.module.scss';

import MovieCard from '../../components/MovieCard';
import TopBilledCast from './TopBilledCast';
import ImagesBlock from './ImagesBlock';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import { ITopBilledCastProp } from './TopBilledCast/TopBilledCast';
import { ITitleMovieProps } from './MovieTitleCard/MovieTitleCard';
import { IImagesBlockProps } from './ImagesBlock/ImagesBlock';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import getMovieDetailsData from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getTopBilletCastData';
import getMovieImages from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getMovieImages';
import getRecommendations from '../../store/rootStore/movieDetailsPageStore/getMoviePageData/getRecommendations';
import { setMovieID } from '../../store/rootStore/movieDetailsPageStore/movieDetailsPageSlice';

import sortCastBySix from './utils/sortCastBySix';
import lang from '../../languages/getLanguage';
import useUrlSearch from '../../hooks/useUrlSearch';
import {
  movieDetailsImagesBlockQuality,
  movieDetailsImagesWidth,
  recommendationsMovieDetailsQuality,
  timingOfPageNotFound,
} from '../../constants/variables';
import Loader from '../../components/Loader';
import PageNotFound404 from '../../components/PageNotFound404';

const MovieDetails: React.FC = () => {
  const [titleInfoState, setTitleInfoState] = useState<ITitleMovieProps>();
  const [cast, setCast] = useState<Array<ITopBilledCastProp>>();
  const [sortCast, setSortCast] = useState<Array<ITopBilledCastProp>>();
  const [stateImg, setStateImg] = useState<Array<IImagesBlockProps>>();
  const [recommended, setRecommended] = useState<Array<IMovieCard>>();

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
  const isLoading = useAppSelector(
    (state) => state.movieDetailsReducer.isLoading
  );
  const errorDetailsData = useAppSelector(
    (state) => state.movieDetailsReducer.errorDetailsData?.name
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

  return isLoading ? (
    <div className={styles.mainWrapper}>
      {titleInfoState && (
        <MovieTitleCard
          title={titleInfoState.title}
          vote_average={titleInfoState.vote_average}
          poster_path={titleInfoState.poster_path}
          overview={titleInfoState.overview}
          release_date={titleInfoState.release_date}
          runtime={titleInfoState.runtime}
          revenue={titleInfoState.revenue}
          genres={titleInfoState.genres}
          id={titleInfoState.id}
        />
      )}
      <div className={styles.castWrapper}>
        <div className={styles.castNameWrapper}>
          <h3 className={styles.castName}>{lang(appLang).topBilledCast}</h3>
          <div className={styles.castNameShowAllBtn}>
            {lang(appLang).showAll}
          </div>
        </div>
        <div className={styles.castGrid}>
          {sortCast
            ? sortCast.map((actorInfo: ITopBilledCastProp) => {
                return (
                  <TopBilledCast
                    key={actorInfo.id}
                    character={actorInfo.character}
                    id={actorInfo.id}
                    name={actorInfo.name}
                    profile_path={actorInfo.profile_path}
                    popularity={actorInfo.popularity}
                  />
                );
              })
            : null}
        </div>
        {stateImg ? (
          <ImagesBlock
            images={stateImg}
            title={ImagesBlockTitle}
            imgWidth={movieDetailsImagesWidth}
            imagesQuality={movieDetailsImagesBlockQuality}
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
              .slice(0, recommendationsMovieDetailsQuality)
              .map((cardInfo: IMovieCard) => {
                return (
                  <MovieCard
                    id={cardInfo.id}
                    title={cardInfo.title}
                    vote_average={cardInfo.vote_average}
                    poster_path={cardInfo.poster_path}
                    genre_ids={cardInfo.genre_ids}
                    key={cardInfo.id}
                  />
                );
              })
          ) : (
            <h2>{lang(appLang).loading}</h2>
          )}
        </div>
      </div>
    </div>
  ) : errorDetailsData === 'Error' ? (
    <PageNotFound404 timing={timingOfPageNotFound} />
  ) : (
    <Loader />
  );
};

export default MovieDetails;
