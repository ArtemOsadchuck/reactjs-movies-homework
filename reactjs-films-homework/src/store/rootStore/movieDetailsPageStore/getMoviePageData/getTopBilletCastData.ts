import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export interface IGetTopBilletCastData {
  movie_id: string;
  lang: string;
}

const getTopBilletCastData = createAsyncThunk(
  'getTopBilletCastData/setFetchTopBilletCastData',
  async (props: IGetTopBilletCastData) => {
    try {
      const { lang, movie_id } = props;
      const baseUrl =
        await `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=8fa5bc53bb4a09dfb6560253edf33030&language=${lang.toLowerCase()}-${lang}`;
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('getTopBilletCastData', error);
    }
  }
);

export default getTopBilletCastData;
