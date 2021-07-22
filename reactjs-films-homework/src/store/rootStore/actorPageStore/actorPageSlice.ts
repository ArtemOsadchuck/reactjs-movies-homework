import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getActorInfo from './getActorData/getActorInfo';
import getActorPhotos from './getActorData/getActorPhotos';
import getFilmsWithActor from './getActorData/getFilmsWithActor';

import { IPhotos } from './../../../pages/ActorProfile/ActorPhotos/ActorPhotos';
import { IGenre, IMovieCard } from '../../../components/MovieCard/MovieCard';
import { IActorTitleProps } from '../../../pages/ActorProfile/ActorTitleInfo/ActorTitleInfo';

interface IInitialState {
  id: string;
  lang?: string;
  genre?: IGenre;
  actorInfo?: IActorTitleProps;
  profiles: IPhotos[];
  cast: IMovieCard[];
  isLoading?: boolean;
  errorActorInfo?: any;
}
interface IProfilePhotos {
  profiles: IPhotos[];
}
interface IGetFilmsWithActor {
  cast: IMovieCard[];
}

const initialState: IInitialState = {
  id: '',
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
    builder.addCase(getActorInfo.pending, (state) => {
      state.isLoading = true;
      state.errorActorInfo = null;
    });
    builder.addCase(getActorInfo.rejected, (state, action) => {
      state.errorActorInfo = action.error;
    });
    builder.addCase(
      getActorInfo.fulfilled,
      (state, action: PayloadAction<IActorTitleProps>) => {
        state.actorInfo = action.payload;
      }
    );
    builder.addCase(
      getActorPhotos.fulfilled,
      (state, action: PayloadAction<IProfilePhotos>) => {
        state.profiles = action.payload?.profiles;
      }
    );
    builder.addCase(
      getFilmsWithActor.fulfilled,
      (state, action: PayloadAction<IGetFilmsWithActor>) => {
        state.cast = action.payload?.cast;
        state.isLoading = false;
      }
    );
  },
});

export const { setLang } = actorPageSlice.actions;
export const { setID } = actorPageSlice.actions;

export default actorPageSlice.reducer;
