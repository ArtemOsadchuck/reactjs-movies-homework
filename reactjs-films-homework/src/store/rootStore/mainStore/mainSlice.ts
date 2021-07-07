import { IGenre, IMovieCard } from '../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getGenres from './getGenres';
import getMainData from './getMainData';

interface IInitialState {
  mainState: IMovieCard[];
  lang: string;
  activePage?: string;
  totalPages: number;
  query: string;
  category: string;
  genre?: IGenre;
  page: string;
}

interface IMainState {
  results: IMovieCard[];
  total_pages: number;
}

const initialState: IInitialState = {
  lang: 'EN',
  activePage: '1',
  totalPages: 0,
  genre: { genres: [] },
  query: '',
  page: '1',
  category: 'popular',
  mainState: [],
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setPage: (state, action: PayloadAction<string>) => {
      state.page = action.payload;
    },
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getGenres.fulfilled,
      (rootState, action: PayloadAction<IGenre>) => {
        rootState.genre = action.payload;
      }
    );
    builder.addCase(
      getMainData.fulfilled,
      (rootState, action: PayloadAction<IMainState>) => {
        rootState.mainState = action.payload.results;
        rootState.totalPages = action.payload.total_pages;
      }
    );
  },
});

export const { setLang } = mainSlice.actions;
export const { setCategory } = mainSlice.actions;
export const { setPage } = mainSlice.actions;
export const { setQuery } = mainSlice.actions;
export const { setActivePage } = mainSlice.actions;

export default mainSlice.reducer;
