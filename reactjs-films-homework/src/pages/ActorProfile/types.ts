import { IPhotos } from '../../types/pages/actorProfileTypes/types';

export interface IActorPhotos {
  photos?: IPhotos[];
  photosLength?: number;
  nameAltImg: string | undefined;
}
