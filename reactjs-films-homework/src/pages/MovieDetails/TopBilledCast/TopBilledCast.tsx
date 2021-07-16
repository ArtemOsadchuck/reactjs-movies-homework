import React from 'react';
import styles from './TopBilledCast.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import { setID } from '../../../store/rootStore/actorPageStore/actorPageSlice';
import { Link } from 'react-router-dom';

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
  const dispatch = useAppDispatch();

  const getActorInfo = (actorID: any) => {
    const getImages = async () => {
      await dispatch(setID(actorID));
    };
    getImages();
  };

  return (
    <Link
      to={`/actor-profile/?actor-id=${id}`}
      className={styles.actorWrapper}
      id={`${id}`}
      onClick={() => getActorInfo(id)}
    >
      <img className={styles.actorImg} height="160px" src={urlImg} alt={name} />
      <p className={styles.actorName}>
        <strong>{name}</strong>
      </p>
      <p className={styles.actorCharacter}>{character}</p>
    </Link>
  );
};

export default TopBilledCast;
