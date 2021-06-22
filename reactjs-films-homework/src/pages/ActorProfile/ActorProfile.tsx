import React, { useState, useMemo, useEffect } from 'react';
import actorInfo from '../../mocks/actorInfo';
import actorPhotosMock from '../../mocks/actorPhotos';
import filmsWithActor from '../../mocks/filmsWithActor';

import ActorTitle from './ActorTitleInfo';
import ActorPhotos from './ActorPhotos';
import styles from './ActorProfile.module.scss';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';
import { IPhotos } from './ActorPhotos/ActorPhotos';
import { IActorTitleProps } from './ActorTitleInfo/ActorTitleInfo';

const ActorProfile: React.FC = () => {
  const [info, setInfo] = useState<IActorTitleProps>();
  const [photos, setPhotos] = useState<Array<IPhotos>>([]);
  const [knownBy, setKnownBy] = useState<Array<IMovieCard>>([]);
  const [sortKnownBy, setSortKnownBy] = useState<Array<IMovieCard>>([]);
  const actorGridPhotosLength = 4;

  useEffect(() => {
    actorInfo.then((res) => {
      setInfo((): IActorTitleProps => res);
      return;
    });
    actorPhotosMock.then((res) => {
      setPhotos((): IPhotos[] => res.profiles);
    });
    filmsWithActor.then((res) => {
      setKnownBy((): any[] => res.cast);
    });
  });

  const sortFilmPopularity = (arr: Array<IMovieCard>) => {
    const filmsLength = 10;
    const resultFilmsLength = [...arr].sort((a, b) => {
      return a.vote_average > b.vote_average ? -1 : 1;
    });
    return resultFilmsLength.slice(0, filmsLength);
  };

  useMemo(() => {
    setSortKnownBy(sortFilmPopularity(knownBy));
  }, [knownBy]);

  return (
    <div className={styles.mainWrapper}>
      {info ? <ActorTitle props={info} /> : null}
      <ActorPhotos props={photos} photosLength={actorGridPhotosLength} />
      <div className={styles.cardsWrapper}>
        {sortKnownBy.map((el: IMovieCard) => {
          return <MovieCard key={el.id} props={el} />;
        })}
      </div>
    </div>
  );
};
export default ActorProfile;
