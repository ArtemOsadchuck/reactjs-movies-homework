import { IPhotos } from './../../../pages/ActorProfile/ActorPhotos/ActorPhotos';
import { IGenre, IMovieCard } from '../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getActorInfo from './getActorData/getActorInfo';
import getActorPhotos from './getActorData/getActorPhotos';
import getFilmsWithActor from './getActorData/getFilmsWithActor';
import { IActorTitleProps } from '../../../pages/ActorProfile/ActorTitleInfo/ActorTitleInfo';

interface IInitialState {
  id: string;
  lang?: string;
  genre?: IGenre;
  actorInfo?: IActorTitleProps;
  profiles: IPhotos[];
  cast: IMovieCard[];
}
interface IProfilePhotos {
  profiles: IPhotos[];
}
interface IGetFilmsWithActor {
  cast: IMovieCard[];
}

const initialState: IInitialState = {
  id: '131',
  lang: '',
  genre: { genres: [] },
  profiles: [],
  cast: [],
};

const actorPageSlice = createSlice({
  name: 'actorPageSlice',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    setID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getActorInfo.fulfilled,
      (rootState, action: PayloadAction<IActorTitleProps>) => {
        rootState.actorInfo = action.payload;
      }
    );
    builder.addCase(
      getActorPhotos.fulfilled,
      (rootState, action: PayloadAction<IProfilePhotos>) => {
        rootState.profiles = action.payload.profiles;
      }
    );
    builder.addCase(
      getFilmsWithActor.fulfilled,
      (rootState, action: PayloadAction<IGetFilmsWithActor>) => {
        rootState.cast = action.payload.cast;
      }
    );
  },
});

export const { setLang } = actorPageSlice.actions;
export const { setID } = actorPageSlice.actions;

export default actorPageSlice.reducer;
