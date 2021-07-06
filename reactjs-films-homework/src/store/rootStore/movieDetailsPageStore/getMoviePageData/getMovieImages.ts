import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getMovieImages = createAsyncThunk(
  'getMovieImages/setMovieImages',
  async (movie_id: string) => {
    try {
      const baseUrl = `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=8fa5bc53bb4a09dfb6560253edf33030`;
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getMovieImages', error);
    }
  }
);

export default getMovieImages;
