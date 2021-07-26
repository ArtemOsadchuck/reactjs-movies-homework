import { IGenre, IMovieCard } from '../../../types/components/MovieCard/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getGenres from './/getMaiData/getGenres';
import getMainData from './getMaiData/getMainData';

interface IInitialState {
  mainState: IMovieCard[];
  isLoading: boolean;
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
  lang: '',
  activePage: '',
  totalPages: 0,
  genre: { genres: [] },
  query: '',
  page: '',
  category: '',
  isLoading: false,
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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
        rootState.isLoading = true;
      }
    );
    builder.addCase(getMainData.pending, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setLang } = mainSlice.actions;
export const { setCategory } = mainSlice.actions;
export const { setPage } = mainSlice.actions;
export const { setQuery } = mainSlice.actions;
export const { setActivePage } = mainSlice.actions;
export const { setIsLoading } = mainSlice.actions;

export default mainSlice.reducer;
