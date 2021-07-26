import { IMovieCard } from '../../../types/components/MovieCard/types';

const changeFilmsQuality = (arr: Array<IMovieCard>, filmsLength: number) => {
  return arr?.slice(0, filmsLength);
};
export default changeFilmsQuality;
