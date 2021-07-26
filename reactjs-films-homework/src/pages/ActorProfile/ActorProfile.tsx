import React, { useState, useEffect, useMemo } from 'react';
import styles from './ActorProfile.module.scss';

import ActorTitle from './ActorTitleInfo';
import ActorPhotos from './ActorPhotos';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../types/components/types';
import { IPhotos } from './ActorPhotos/ActorPhotos';
import { IActorTitleProps } from './ActorTitleInfo/ActorTitleInfo';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import getActorInfo from '../../store/rootStore/actorPageStore/getActorData/getActorInfo';
import getActorImages from '../../store/rootStore/actorPageStore/getActorData/getActorPhotos';
import getFilmsWithActor from '../../store/rootStore/actorPageStore/getActorData/getFilmsWithActor';
import { setID } from '../../store/rootStore/actorPageStore/actorPageSlice';

import useUrlSearch from '../../hooks/useUrlSearch';

import changeFilmsQuality from './utils/changeFilmsQuality';
import Loader from '../../components/Loader';
import PageNotFound404 from '../../components/PageNotFound404';
import { timingOfPageNotFound } from '../../constants/variables';

const ActorProfile: React.FC = () => {
  const [info, setInfo] = useState<IActorTitleProps>();
  const [photos, setPhotos] = useState<Array<IPhotos>>([]);
  const [knownBy, setKnownBy] = useState<Array<IMovieCard>>([]);
  const [sortKnownBy, setSortKnownBy] = useState<Array<IMovieCard>>([]);
  const actorGridPhotosLength = 4;
  const filmsLength = 10;

  const dispatch = useAppDispatch();
  const locationActorID = useUrlSearch('actor-id');

  const actorInfoStore = useAppSelector((state) => state.actorPageReducer);
  const lang = useAppSelector((state) => state.mainReducer.lang);
  const id = useAppSelector((state) => state.actorPageReducer.id);
  const cast = useAppSelector((state) => state.actorPageReducer.cast);
  const isLoading = useAppSelector((state) => state.actorPageReducer.isLoading);
  const errorActorInfo = useAppSelector(
    (state) => state.actorPageReducer.errorActorInfo?.name
  );

  useMemo(() => {
    if (locationActorID) {
      const requestInfoProperties = {
        lang: lang,
        id: id || locationActorID,
      };
      dispatch(getActorInfo(requestInfoProperties));
      dispatch(getFilmsWithActor(requestInfoProperties));
      dispatch(getActorImages(locationActorID));
      dispatch(setID(locationActorID));
    }
  }, [lang, dispatch, locationActorID, id]);

  useEffect(() => {
    setInfo(() => actorInfoStore.actorInfo);
    setPhotos(() => actorInfoStore.profiles);
    setKnownBy(() => actorInfoStore.cast);
  }, [dispatch, lang, actorInfoStore, cast]);

  useMemo(() => {
    setSortKnownBy(changeFilmsQuality(knownBy, filmsLength));
  }, [knownBy]);

  return errorActorInfo === 'Error' ? (
    <div className={styles.mainWrapper}>
      <PageNotFound404 timing={timingOfPageNotFound} />
    </div>
  ) : !isLoading ? (
    <div className={styles.mainWrapper}>
      {info && (
        <ActorTitle
          also_known_as={info.also_known_as}
          biography={info.biography}
          birthday={info.birthday}
          gender={info.gender}
          id={info.id}
          known_for_department={info.known_for_department}
          name={info.name}
          place_of_birth={info.place_of_birth}
          profile_path={info.profile_path}
        />
      )}
      <ActorPhotos
        photos={photos}
        nameAltImg={info?.name}
        photosLength={actorGridPhotosLength}
      />
      <div className={styles.cardsWrapper}>
        {sortKnownBy?.map((cardData: IMovieCard) => {
          return (
            <MovieCard
              id={cardData.id}
              title={cardData.title}
              vote_average={cardData.vote_average}
              poster_path={cardData.poster_path}
              genre_ids={cardData.genre_ids}
              key={cardData.id}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div className={styles.mainWrapper}>
      <Loader />
    </div>
  );
};

export default ActorProfile;
