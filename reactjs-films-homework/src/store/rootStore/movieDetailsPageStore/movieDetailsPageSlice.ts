import { IGenre, IMovieCard } from '../../../components/MovieCard/MovieCard';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getMovieDetailsData from './getMoviePageData/getMovieDetailsData';
import getTopBilletCastData from './getMoviePageData/getTopBilletCastData';
import getMovieImages from './getMoviePageData/getMovieImages';
import getRecommendations from './getMoviePageData/getRecommendations';
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
}

interface IGetRecommendations {
  results: IMovieCard[];
}

const initialState: IInitialState = {
  movie_id: '277',
  lang: 'EN',
  genre: { genres: [] },
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
      (moviePageState, action: PayloadAction<ICast>) => {
        moviePageState.cast = action.payload;
      }
    );
    builder.addCase(
      getMovieDetailsData.fulfilled,
      (moviePageState, action: PayloadAction<ITitleMovieProps>) => {
        moviePageState.moviePageInfoResult = action.payload;
      }
    );
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
export default moviePageSlice.reducer;
