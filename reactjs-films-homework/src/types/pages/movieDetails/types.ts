export interface ITitleMovieProps {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  release_date: string;
  runtime: number;
  revenue: number;
  genres?: {
    id: number;
    name: string;
  }[];
}

export interface IImagesBlockImages {
  aspect_ratio?: number;
  file_path: string;
  height?: number;
  iso_639_1?: null;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}
