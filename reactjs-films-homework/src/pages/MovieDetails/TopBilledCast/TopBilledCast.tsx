import React from 'react';

import styles from './TopBilledCast.module.scss';

interface ITopBilledCast {
  cast: { id: number; name: string; profile_path: string; character: string };
}
const TopBilledCast: React.FC<ITopBilledCast> = ({ cast }) => {
  const { id, name, profile_path, character } = cast;
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
