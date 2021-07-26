import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetRecommendations {
  movie_id: string;
  lang: string;
}

const getRecommendations = createAsyncThunk(
  'getRecommendations/setFetchRecommendations',
  async ({ lang, movie_id }: IGetRecommendations) => {
    try {
      const baseUrl = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&page=1`;
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getRecommendations', error);
    }
  }
);

export default getRecommendations;
