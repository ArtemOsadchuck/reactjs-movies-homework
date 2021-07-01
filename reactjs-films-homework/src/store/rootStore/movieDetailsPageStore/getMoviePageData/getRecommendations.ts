import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetRecommendations {
  movie_id: string;
  lang: string;
}

const getRecommendations = createAsyncThunk(
  'getRecommendations/setFetchRecommendations',
  async (props: IGetRecommendations) => {
    const { lang, movie_id } = props;
    const baseUrl = `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}&page=1`;
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

export default getRecommendations;
