export interface IMovieCard {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genre_ids?: number[];
  key?: number;
}

export interface IGenre {
  genres?: {
    id: number;
    name: string;
  }[];
}
