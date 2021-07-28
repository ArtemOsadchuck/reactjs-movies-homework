import {
  IGenre,
  IMovieCard,
} from '../../../types/components/movieCardTypes/types';
import {
  IActorTitleProps,
  IPhotos,
} from '../../../types/pages/actorProfileTypes/types';

export interface IInitialStateActorPageSlice {
  id: string;
  lang?: string;
  genre?: IGenre;
  actorInfo?: IActorTitleProps;
  profiles: IPhotos[];
  cast: IMovieCard[];
  isLoading?: boolean;
  errorActorInfo?: any;
}
export interface IProfilePhotos {
  profiles: IPhotos[];
}
export interface IGetFilmsWithActor {
  cast: IMovieCard[];
}

export interface IGetActorInfo {
  id: string;
  lang: string;
}

export interface IGetFilmsWithActorList {
  id: string;
  lang: string;
}
