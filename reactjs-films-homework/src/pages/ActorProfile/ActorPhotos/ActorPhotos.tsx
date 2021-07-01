import React from 'react';
import styles from './ActorPhotos.module.scss';

import getLang from '../../../languages/getLanguage';
import { useAppSelector } from '../../../hooks/hooks';

export interface IPhotos {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface IActorPhotos {
  props: IPhotos[];
  photosLength: number;
}

const ActorPhotos: React.FC<IActorPhotos> = ({ props }) => {
  const photosLength = 4;
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const titilePhotos = getLang(appLang).photos;
  return (
    <div className={styles.PhotosWrapper}>
      {props.length ? (
        <h3 className={styles.photosTitle}>{titilePhotos}</h3>
      ) : null}
      <div className={styles.photosGrid}>
        {props.length
          ? props.slice(0, photosLength).map((el) => {
              return (
                <img
                  width="120px"
                  className={styles.photo}
                  key={el.file_path}
                  src={`https://image.tmdb.org/t/p/w500/${el.file_path}`}
                  alt=""
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default ActorPhotos;
