import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TopBilledCast.module.scss';

import { useAppDispatch } from '../../../hooks/hooks';
import { setID } from '../../../store/rootStore/actorPageStore/actorPageSlice';

import { actorProfileURL, partOfImagesURL } from '../../../constants/links';
import { topBilletCastImagesHight } from '../../../constants/variables';

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
  const urlImg = `${partOfImagesURL}${profile_path}`;
  const dispatch = useAppDispatch();

  const getActorInfo = (actorID: any) => {
    dispatch(setID(actorID));
  };

  return (
    <Link
      to={`${actorProfileURL}${id}`}
      className={styles.actorWrapper}
      id={`${id}`}
      onClick={() => getActorInfo(id)}
    >
      <img
        className={styles.actorImg}
        height={topBilletCastImagesHight}
        src={urlImg}
        alt={name}
      />
      <p className={styles.actorName}>
        <strong>{name}</strong>
      </p>
      <p className={styles.actorCharacter}>{character}</p>
    </Link>
  );
};

export default TopBilledCast;
