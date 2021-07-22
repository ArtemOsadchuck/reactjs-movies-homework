import { IMovieCard } from '../../../components/MovieCard/MovieCard';

const changeFilmsQuality = (arr: Array<IMovieCard>, filmsLength: number) => {
  return arr?.slice(0, filmsLength);
};
export default changeFilmsQuality;
