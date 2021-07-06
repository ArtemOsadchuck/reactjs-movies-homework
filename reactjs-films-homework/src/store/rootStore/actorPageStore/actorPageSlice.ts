import { IGenre } from '../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getActorInfo, { IGetActorInfo } from './getActorData/getActorInfo';
import getActorPhotos from './getActorData/getActorPhotos';
import getFilmsWithActor from './getActorData/getFilmsWithActor';

interface IInitialState {
  // mainState: any[];
  id: string;
  lang?: string;
  genre?: IGenre;
  actorInfo: any;
  profiles: any;
  cast: any;
}

const initialState: IInitialState = {
  id: '131',
  lang: '',
  genre: { genres: [] },
  actorInfo: [],
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
      (rootState, action: PayloadAction<IGetActorInfo>) => {
        rootState.actorInfo = action.payload;
      }
    );
    builder.addCase(
      getActorPhotos.fulfilled,
      (rootState, action: PayloadAction<IInitialState>) => {
        rootState.profiles = action.payload.profiles;
      }
    );
    builder.addCase(
      getFilmsWithActor.fulfilled,
      (rootState, action: PayloadAction<IInitialState>) => {
        rootState.cast = action.payload.cast;
      }
    );
  },
});

export const { setLang } = actorPageSlice.actions;
export const { setID } = actorPageSlice.actions;
// export const { setPage } = mainSlice.actions;
// export const { setQuery } = mainSlice.actions;
// export const { setActivePage } = mainSlice.actions;

export default actorPageSlice.reducer;
