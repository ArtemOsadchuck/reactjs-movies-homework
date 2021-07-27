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

export interface IPhotos {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null;
  vote_average: number;
  vote_count: number;
  width: number;
}
