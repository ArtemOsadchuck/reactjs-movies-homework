import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetMovieDetailsData {
  movie_id: string;
  lang: string;
}

const getMovieDetailsData = createAsyncThunk(
  'getMovieDetailsData/setMovieDetailsData',
  async ({ lang, movie_id }: IGetMovieDetailsData, { rejectWithValue }) => {
    try {
      if (lang && movie_id) {
        const baseUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
        const response = await axios.get(baseUrl);
        return response.data;
      }
    } catch (error) {
      const statusCode = error.response.data.status_code;
      if (statusCode === 34 || 404) {
        console.error('getMovieDetailsData', error);
        rejectWithValue(error.response);
        throw new Error(error.response.data);
      }
    }
  }
);

export default getMovieDetailsData;
