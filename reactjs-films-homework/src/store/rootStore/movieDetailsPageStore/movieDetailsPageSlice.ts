import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import getMovieDetailsData from './getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from './getMoviePageData/getTopBilletCastData';
import getMovieImages from './getMoviePageData/getMovieImages';
import getRecommendations from './getMoviePageData/getRecommendations';

import { IGenre, IMovieCard } from '../../../components/MovieCard/MovieCard';
import { ITopBilledCastProp } from '../../../pages/MovieDetails/TopBilledCast/TopBilledCast';
import { IImagesBlockProps } from '../../../pages/MovieDetails/ImagesBlock/ImagesBlock';
import { ITitleMovieProps } from '../../../pages/MovieDetails/MovieTitleCard/MovieTitleCard';

interface ICast {
  cast: ITopBilledCastProp[];
}
interface IImages {
  backdrops: IImagesBlockProps[];
}

interface IInitialState {
  lang: string;
  movie_id: string;
  genre?: IGenre;
  moviePageInfoResult?: ITitleMovieProps;
  cast?: ICast;
  images?: IImages;
  recommendations?: IGetRecommendations;
  isLoading: boolean;
  errorDetailsData?: SerializedError | null;
}

interface IGetRecommendations {
  results: IMovieCard[];
}

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

const initialState: IInitialState = {
  movie_id: '',
  lang: 'EN',
  genre: { genres: [] },
  isLoading: false,
  errorDetailsData: null,
};

const moviePageSlice = createSlice({
  name: 'moviePageSlice',
  initialState,
  reducers: {
    setMovieID: (state, action: PayloadAction<string>) => {
      state.movie_id = action.payload;
    },
    setErrorDetailsData: (
      state,
      action: PayloadAction<typeof initialState.errorDetailsData>
    ) => {
      state.errorDetailsData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      getTopBilletCastData.fulfilled,
      (moviePageState, action: PayloadAction<ICast>) => {
        moviePageState.cast = action.payload;
      }
    );
    builder.addCase(getMovieDetailsData.pending, (moviePageState) => {
      moviePageState.errorDetailsData = null;
      moviePageState.isLoading = false;
    });
    builder.addCase(
      getMovieDetailsData.fulfilled,
      (moviePageState, action: PayloadAction<ITitleMovieProps>) => {
        moviePageState.moviePageInfoResult = action.payload;
        moviePageState.isLoading = true;
      }
    );
    builder.addCase(getMovieDetailsData.rejected, (moviePageState, action) => {
      moviePageState.errorDetailsData = action.error;
    });
    builder.addCase(
      getMovieImages.fulfilled,
      (moviePageState, action: PayloadAction<IImages>) => {
        moviePageState.images = action.payload;
      }
    );
    builder.addCase(
      getRecommendations.fulfilled,
      (moviePageState, action: PayloadAction<IGetRecommendations>) => {
        moviePageState.recommendations = action.payload;
      }
    );
  },
});

export const { setMovieID } = moviePageSlice.actions;
export const { setErrorDetailsData } = moviePageSlice.actions;
export default moviePageSlice.reducer;
