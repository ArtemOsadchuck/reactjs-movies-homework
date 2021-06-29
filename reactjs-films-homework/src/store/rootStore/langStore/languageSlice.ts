import { IGenre } from './../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
import fetchGenres from './fetchGenres';
import { fetchCategory } from './fetchMainData';
import fetchMainData from './fetchMainData';

interface IInitialState {
  mainState: any;
  lang: string;
  activePage: number;
  pages: number;
  movies: any[];
  category: string;
  genre?: IGenre;
  page: string;
}

const initialState: IInitialState = {
  lang: 'EN',
  activePage: 1,
  pages: 5,
  movies: [],
  genre: { genres: [] },
  page: '1',
  category: 'popular',
  mainState: [],
};

const langSlice = createSlice({
  name: 'langSlice',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCategory.fulfilled,
      (langState, action: PayloadAction<any>) => {
        langState.movies = action.payload.results;
        langState.pages = action.payload.total_pages;
        langState.activePage = action.payload.page;
      }
    );
    builder.addCase(
      fetchGenres.fulfilled,
      (langState, action: PayloadAction<IGenre>) => {
        langState.genre = action.payload;
      }
    );
    builder.addCase(
      fetchMainData.fulfilled,
      (langState, action: PayloadAction<any>) => {
        langState.mainState = action.payload.results;
      }
    );
  },
});

export const { setLang } = langSlice.actions;
export const { setCategory } = langSlice.actions;

export default langSlice.reducer;
