import React from 'react';
import styles from './ActorTitleInfo.module.scss';

import getLang from '../../../languages/getLanguage';

import { useAppSelector } from '../../../hooks/hooks';
import { partOfImagesURL } from '../../../constants/links';

export interface IActorTitle {
  actorInfo: IActorTitleProps;
}
export interface IActorTitleProps {
  also_known_as?: string[];
  biography: string;
  birthday: string;
  gender: number;
  id: number;
  known_for_department?: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
}

const ActorTitle: React.FC<IActorTitle> = ({
  actorInfo: { birthday, name, profile_path, biography, place_of_birth },
}) => {
  const urlImg = `${partOfImagesURL}${profile_path}`;
  const appLang = useAppSelector((state) => state.mainReducer.lang);

  return (
    <div className={styles.titleWrapper}>
      <div className={styles.titleImageWrapper}>
        {profile_path ? (
          <img className={styles.titleImage} src={urlImg} alt={name} />
        ) : null}
      </div>
      {name ? (
        <article className={styles.titleInfoWrapper}>
          <h1 className={styles.titleName}>{name}</h1>
          <div className={styles.Info}>
            <strong>{getLang(appLang).birthday}</strong>
            <p>{birthday}</p>
          </div>
          <div className={styles.Info}>
            <strong>{getLang(appLang).placeOfBirth}</strong>
            <p>{place_of_birth}</p>
          </div>
          <div className={styles.Info}>
            <strong className={styles.biographyTitle}>
              {getLang(appLang).biography}:
            </strong>
            <p className={styles.biography}>{biography}</p>
          </div>
        </article>
      ) : null}
    </div>
  );
};
export default ActorTitle;
