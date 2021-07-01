import React from 'react';
import styles from './TopBilledCast.module.scss';

export interface ITopBilledCastProp {
  id: number;
  name: string;
  profile_path: string;
  character: string;
  popularity: number;
}
export interface ITopBilledCast {
  props: ITopBilledCastProp;
}

const TopBilledCast: React.FC<ITopBilledCast> = ({ props }) => {
  const { id, name, profile_path, character } = props;
  const urlImg = `https://image.tmdb.org/t/p/w200/${profile_path}`;

  return (
    <a className={styles.actorWrapper} id={`${id}`} href="/">
      <img className={styles.actorImg} height="160px" src={urlImg} alt={name} />
      <p className={styles.actorName}>
        <strong>{name}</strong>
      </p>
      <p className={styles.actorCharacter}>{character}</p>
    </a>
  );
};

export default TopBilledCast;
