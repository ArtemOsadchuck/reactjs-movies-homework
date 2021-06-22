import React, { useState, useMemo } from 'react';
import actorInfo from '../../mocks/actorInfo';
import actorPhotosMock from '../../mocks/actorPhotos';
import filmsWithActor from '../../mocks/filmsWithActor';

import ActorTitle from './ActorTitleInfo';
import ActorPhotos from './ActorPhotos';
import styles from './ActorProfile.module.scss';
import { useEffect } from 'react';
import MovieCard from '../../components/MovieCard';
import { IMovieCard } from '../../components/MovieCard/MovieCard';

const ActorProfile: React.FC = () => {
  const [info, setInfo]: any[] = useState([]);
  const [photos, setPhotos]: any[] = useState([]);
  const [knownBy, setKnownBy] = useState<any>([]);
  const [sortKnownBy, setSortKnownBy] = useState<any>([]);
  useEffect(() => {
    actorInfo.then((res) => {
      setInfo(() => res);
      return;
    });
    actorPhotosMock.then((res) => {
      setPhotos(() => res.profiles);
    });
    filmsWithActor.then((res) => {
      setKnownBy(() => res.cast);
    });
  });

  const sortFilmPopularity = (arr: Array<{ vote_average: number }>) => {
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
      <ActorTitle props={info} />
      <ActorPhotos props={photos} />
      <div className={styles.cardsWrapper}>
        {sortKnownBy.map((el: IMovieCard) => {
          return <MovieCard key={el.id} props={el} />;
        })}
      </div>
    </div>
  );
};
export default ActorProfile;
