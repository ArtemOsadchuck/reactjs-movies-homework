import { IGenre } from '../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getMovieDetailsData, {
  IGetMovieDetailsData,
} from './getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from './getMoviePageData/getTopBilletCastData';
import getMovieImages from './getMoviePageData/getMovieImages';
import getRecommendations from './getMoviePageData/getRecommendations';

interface IInitialState {
  lang: string;
  movie_id: string;
  genre?: IGenre;
  moviePageInfoResult?: any;
  cast?: any;
  result?: any;
  images?: any;
  recommendations?: any;
}

const initialState: IInitialState = {
  movie_id: '277',
  lang: 'EN',
  genre: { genres: [] },
  moviePageInfoResult: null,
  result: [],
};

const moviePageSlice = createSlice({
  name: 'moviePageSlice',
  initialState,
  reducers: {
    setMovieID: (state, action: PayloadAction<string>) => {
      state.movie_id = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getTopBilletCastData.fulfilled,
      (moviePageState, action: PayloadAction<IInitialState>) => {
        moviePageState.cast = action.payload.cast;
      }
    );
    builder.addCase(
      getMovieDetailsData.fulfilled,
      (moviePageState, action: PayloadAction<IGetMovieDetailsData>) => {
        moviePageState.moviePageInfoResult = action.payload;
      }
    );
    builder.addCase(
      getMovieImages.fulfilled,
      (moviePageState, action: PayloadAction<any>) => {
        moviePageState.images = action.payload.backdrops;
      }
    );
    builder.addCase(
      getRecommendations.fulfilled,
      (moviePageState, action: PayloadAction<any>) => {
        moviePageState.recommendations = action.payload.results;
      }
    );
  },
});

export const { setMovieID } = moviePageSlice.actions;
export default moviePageSlice.reducer;
