import { IMovieCard } from '../../../types/components/types';

const changeFilmsQuality = (arr: Array<IMovieCard>, filmsLength: number) => {
  return arr?.slice(0, filmsLength);
};
export default changeFilmsQuality;
