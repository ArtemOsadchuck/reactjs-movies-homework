import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetMovieDetailsData {
  movie_id: string;
  lang: string;
}

const getMovieDetailsData = createAsyncThunk(
  'getMovieDetailsData/setMovieDetailsData',
  async (props: IGetMovieDetailsData) => {
    try {
      const { lang, movie_id } = props;
      const baseUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
      console.log(baseUrl);
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getMovieDetailsData', error);
    }
  }
);

export default getMovieDetailsData;
