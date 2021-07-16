import React, { useState, useEffect, useMemo } from 'react';

import ActorTitle from './ActorTitleInfo';
import ActorPhotos from './ActorPhotos';
import styles from './ActorProfile.module.scss';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import { IPhotos } from './ActorPhotos/ActorPhotos';
import { IActorTitleProps } from './ActorTitleInfo/ActorTitleInfo';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import getActorInfo from '../../store/rootStore/actorPageStore/getActorData/getActorInfo';
import getActorImages from '../../store/rootStore/actorPageStore/getActorData/getActorPhotos';
import getFilmsWithActor from '../../store/rootStore/actorPageStore/getActorData/getFilmsWithActor';
import { setID } from '../../store/rootStore/actorPageStore/actorPageSlice';

import useUrlSearch from '../../hooks/useUrlSearch';

import changeFilmsQuality from './utils/changeFilmsQuality';

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

  return (
    <div className={styles.mainWrapper}>
      {info && <ActorTitle props={info} />}
      <ActorPhotos photos={photos} photosLength={actorGridPhotosLength} />
      <div className={styles.cardsWrapper}>
        {sortKnownBy.map((el: IMovieCard) => {
          return <MovieCard key={Math.random() / 1.321} props={el} />;
        })}
      </div>
    </div>
  );
};

export default ActorProfile;
