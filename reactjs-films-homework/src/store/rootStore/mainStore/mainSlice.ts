import { IGenre } from '../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchGenres from './fetchGenres';
import fetchMainData from './fetchMainData';

interface IInitialState {
  mainState: any[];
  lang: string;
  activePage?: string;
  totalPages: number;
  query: string;
  category: string;
  genre?: IGenre;
  page: string;
}

const initialState: IInitialState = {
  lang: 'EN',
  activePage: '1',
  totalPages: 5,
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
      fetchGenres.fulfilled,
      (rootState, action: PayloadAction<IGenre>) => {
        rootState.genre = action.payload;
      }
    );
    builder.addCase(
      fetchMainData.fulfilled,
      (rootState, action: PayloadAction<any>) => {
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
