import React from 'react';
import styles from './ActorTitleInfo.module.scss';

export interface IActorTitle {
  props: IActorTitleProps;
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

const ActorTitle: React.FC<IActorTitle> = ({ props }) => {
  const { birthday, name, profile_path, biography, place_of_birth } = props;
  const urlImg = `https://image.tmdb.org/t/p/w500/${profile_path}`;
  return (
    <div className={styles.titleWrapper}>
      <div className={styles.titleImageWrapper}>
        {props.profile_path ? (
          <img className={styles.titleImage} src={urlImg} alt={name} />
        ) : null}
      </div>
      {name ? (
        <article className={styles.titleInfoWrapper}>
          <h1 className={styles.titleName}>{name}</h1>
          <div className={styles.Info}>
            <strong>Birthday</strong>
            <p>{birthday}</p>
          </div>
          <div className={styles.Info}>
            <strong>place of birth</strong>
            <p>{place_of_birth}</p>
          </div>
          <div className={styles.Info}>
            <strong className={styles.biographyTitle}>Biography:</strong>
            <p className={styles.biography}>{biography}</p>
          </div>
        </article>
      ) : null}
    </div>
  );
};
export default ActorTitle;
