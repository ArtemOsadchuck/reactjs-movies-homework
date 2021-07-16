import React from 'react';
import styles from './ActorPhotos.module.scss';

import getLang from '../../../languages/getLanguage';
import { useAppSelector } from '../../../hooks/hooks';

import { partOfImagesURL } from '../../../constants/links';

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
  photos?: IPhotos[];
  photosLength?: number;
  nameAltImg: string | undefined;
}

const ActorPhotos: React.FC<IActorPhotos> = ({
  photos,
  photosLength,
  nameAltImg,
}) => {
  const appLang = useAppSelector((state) => state.mainReducer.lang);
  const titlePhotos = getLang(appLang).photos;
  console.log(photos);
  return (
    <div className={styles.photosWrapper}>
      {photos?.length ? (
        <h3 className={styles.photosTitle}>{titlePhotos}</h3>
      ) : null}
      <div className={styles.photosGrid}>
        {photos?.length
          ? photos.slice(0, photosLength).map((el) => {
              return (
                <img
                  width="120px"
                  className={styles.photo}
                  key={el.file_path}
                  src={`${partOfImagesURL}${el.file_path}`}
                  alt={nameAltImg}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ActorPhotos;
